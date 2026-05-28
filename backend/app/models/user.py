from datetime import datetime, timezone
from typing import Any, Dict
from sqlalchemy.orm import Mapped
from werkzeug.security import generate_password_hash, check_password_hash

from .. import db
from .. import utils


class User(db.Model):
    __tablename__ = "users"
    __table_args__ = (
        db.Index('ix_user_email_admin', 'email', 'is_admin'),
    )

    id: Mapped[int] = db.Column(db.Integer, primary_key=True)
    email: Mapped[str] = db.Column(db.String(255), unique=True, nullable=False, index=True)
    username: Mapped[str | None] = db.Column(db.String(120), unique=True, nullable=True, index=True)
    password_hash: Mapped[str] = db.Column(db.String(255), nullable=False)
    is_admin: Mapped[bool] = db.Column(db.Boolean, default=False, nullable=False)
    created_at: Mapped[datetime] = db.Column(db.DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)

    def set_password(self, password: str) -> None:
        ok, msg = utils.validate_password_strength(password)
        if not ok:
            raise ValueError(msg)
        self.password_hash = generate_password_hash(password, method='pbkdf2:sha256')

    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password_hash, password)

    def to_safe_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "is_admin": self.is_admin,
            "created_at": self.created_at.isoformat(),
        }
