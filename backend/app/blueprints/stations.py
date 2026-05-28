from flask import Blueprint, jsonify, request
from sqlalchemy import select
from .. import db
from ..models import Station, FuelPrice
from ..utils import admin_required

bp = Blueprint("stations", __name__, url_prefix="/api/stations")

@bp.route("", methods=["GET"])
def get_stations():
    query = select(Station).order_by(Station.order, Station.id)
    stations = db.session.scalars(query).all()
    return jsonify([s.to_dict() for s in stations])

@bp.route("/reorder", methods=["PUT"])
@admin_required
def reorder_stations():
    data = request.get_json()
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format, expected a list of station slugs"}), 400

    slugs = data

    stations = db.session.scalars(select(Station)).all()
    station_map = {s.slug: s for s in stations}

    for index, slug in enumerate(slugs):
        if slug in station_map:
            station_map[slug].order = index

    db.session.commit()
    return jsonify({"message": "Stations reordered successfully"})

@bp.route("/<slug>", methods=["PUT"])
@admin_required
def update_station(slug):
    station = db.session.scalar(select(Station).where(Station.slug == slug))
    if not station:
        return jsonify({"error": "Station not found"}), 404

    data = request.get_json()

    if "name" in data:
        station.name = data["name"]
    if "address" in data:
        station.address = data["address"]
    if "note" in data:
        station.note = data["note"]

    if "prices" in data:
        existing_prices = {p.name: p for p in station.prices}

        new_prices_data = data["prices"]
        current_price_names = set()

        for index, p_data in enumerate(new_prices_data):
            name = p_data["name"]
            price_val = p_data["price"]
            unit = p_data.get("unit", "Ft / liter")
            current_price_names.add(name)

            if name in existing_prices:
                existing_prices[name].price = price_val
                existing_prices[name].unit = unit
                existing_prices[name].order = index
            else:
                new_price = FuelPrice(station=station, name=name, price=price_val, unit=unit, order=index)
                db.session.add(new_price)

        for name, p_obj in existing_prices.items():
            if name not in current_price_names:
                db.session.delete(p_obj)

    db.session.commit()
    return jsonify(station.to_dict())

@bp.route("/seed", methods=["POST"])
@admin_required
def seed_stations():
    if db.session.scalar(select(Station)):
        return jsonify({"message": "Database already has stations"}), 400

    initial_data = [
      {
        "id": "vagany-utca",
        "name": "Tanker Hungary Kft. Kiskereskedelem",
        "address": "6728 Szeged, Vágány u. 3.",
        "note": "Kiszolgálás csak nagy tételben",
        "prices": [
          { "name": "Gázolaj", "price": 564.00, "unit": "Ft / liter" },
        ],
      },
      {
        "id": "deszk",
        "name": "Tanker Hungary Kft.",
        "address": "6772 Deszk, Széchenyi István utca 63.",
        "prices": [
          { "name": "Gázolaj", "price": 580.90, "unit": "Ft / liter" },
          { "name": "ESZ-95 benzin", "price": 565.90, "unit": "Ft / liter" },
          { "name": "Gázolaj Truck", "price": 578.90, "unit": "Ft / liter" },
          { "name": "AVIA ESZ-100 benzin", "price": 617.90, "unit": "Ft / liter" },
          { "name": "LPG", "price": 312.90, "unit": "Ft / liter" },
        ],
      },
      {
        "id": "sandorfalva",
        "name": "Tanker Hungary Kft.",
        "address": "6762 Sándorfalva, HRSZ 02/19 Szent János Major",
        "prices": [
          { "name": "Gázolaj", "price": 579.90, "unit": "Ft / liter" },
          { "name": "ESZ-95 benzin", "price": 571.90, "unit": "Ft / liter" },
          { "name": "Gázolaj Truck", "price": 569.90, "unit": "Ft / liter" },
          { "name": "ESZ-100 super benzin", "price": 621.90, "unit": "Ft / liter" },
          { "name": "LPG", "price": 312.90, "unit": "Ft / liter" },
        ],
      },
      {
        "id": "kereskedo-koz",
        "name": "Tanker Hungary Kft.",
        "address": "6728 Szeged, Kereskedő köz 1/A",
        "prices": [
          { "name": "Gázolaj", "price": 579.90, "unit": "Ft / liter" },
          { "name": "ESZ-95 benzin", "price": 571.90, "unit": "Ft / liter" },
          { "name": "Gázolaj Truck", "price": 569.90, "unit": "Ft / liter" },
          { "name": "AVIA ESZ-100 benzin", "price": 621.90, "unit": "Ft / liter" },
          { "name": "LPG", "price": 312.90, "unit": "Ft / liter" },
        ],
      },
      {
        "id": "kiskunfelegyhaza",
        "name": "Tanker Hungary Kft.",
        "address": "6100 Kiskunfélegyháza, Szegedi út 89.",
        "prices": [
          { "name": "Gázolaj", "price": 579.90, "unit": "Ft / liter" },
          { "name": "ESZ-95 benzin", "price": 571.90, "unit": "Ft / liter" },
          { "name": "Gázolaj Truck", "price": 576.90, "unit": "Ft / liter" },
          { "name": "AVIA ESZ-100 benzin", "price": 621.90, "unit": "Ft / liter" },
          { "name": "LPG", "price": 312.90, "unit": "Ft / liter" },
        ],
      },
      {
        "id": "szatymaz",
        "name": "Tanker Hungary Kft.",
        "address": "6763 Szatymaz, IV. ker. 130., Hrsz.: 0261/4.",
        "prices": [
          { "name": "Gázolaj", "price": 567.90, "unit": "Ft / liter" },
          { "name": "ESZ-95 benzin", "price": 553.90, "unit": "Ft / liter" },
          { "name": "Gázolaj Truck", "price": 561.90, "unit": "Ft / liter" },
        ],
      },
    ]

    for s_data in initial_data:
        station = Station(
            slug=s_data["id"],
            name=s_data["name"],
            address=s_data["address"],
            note=s_data.get("note")
        )
        db.session.add(station)
        db.session.flush()

        for p_data in s_data["prices"]:
            price = FuelPrice(
                station_id=station.id,
                name=p_data["name"],
                price=p_data["price"],
                unit=p_data["unit"]
            )
            db.session.add(price)

    db.session.commit()
    return jsonify({"message": "Seeded successfully"})
