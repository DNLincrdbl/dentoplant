from typing import Any, List
from sqlalchemy.orm import Mapped, relationship
from .. import db

class Station(db.Model):
    __tablename__ = "stations"

    id: Mapped[int] = db.Column(db.Integer, primary_key=True)
    slug: Mapped[str] = db.Column(db.String(100), unique=True, nullable=False, index=True)
    name: Mapped[str] = db.Column(db.String(255), nullable=False)
    address: Mapped[str] = db.Column(db.String(255), nullable=False)
    note: Mapped[str | None] = db.Column(db.String(500), nullable=True)
    order: Mapped[int] = db.Column(db.Integer, default=0, nullable=False)

    prices: Mapped[List["FuelPrice"]] = relationship("FuelPrice", back_populates="station", cascade="all, delete-orphan")

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.slug,
            "db_id": self.id,
            "name": self.name,
            "address": self.address,
            "note": self.note,
            "order": self.order,
            "prices": [p.to_dict() for p in sorted(self.prices, key=lambda x: x.order)]
        }

class FuelPrice(db.Model):
    __tablename__ = "fuel_prices"

    id: Mapped[int] = db.Column(db.Integer, primary_key=True)
    station_id: Mapped[int] = db.Column(db.Integer, db.ForeignKey("stations.id"), nullable=False)
    name: Mapped[str] = db.Column(db.String(100), nullable=False)
    price: Mapped[float] = db.Column(db.Float, nullable=False)
    unit: Mapped[str] = db.Column(db.String(20), default="Ft / liter", nullable=False)
    order: Mapped[int] = db.Column(db.Integer, default=0, nullable=False)

    station: Mapped["Station"] = relationship("Station", back_populates="prices")

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "unit": self.unit,
            "order": self.order
        }
