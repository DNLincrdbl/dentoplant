from app import create_app, db
from app.models import Station, FuelPrice

app = create_app()

with app.app_context():
    db.create_all()

    if db.session.query(Station).first():
        print("Stations already exist.")
    else:
        print("Seeding stations...")
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
        print("Seeding complete.")
