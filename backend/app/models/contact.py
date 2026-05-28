from datetime import datetime, timezone
from sqlalchemy.orm import Mapped
from .. import db

class ContactSubmission(db.Model):
    __tablename__ = "contact_submissions"

    id: Mapped[int] = db.Column(db.Integer, primary_key=True)
    name: Mapped[str] = db.Column(db.String(255), nullable=False)
    email: Mapped[str] = db.Column(db.String(255), nullable=False)
    subject: Mapped[str] = db.Column(db.String(255), nullable=False)
    message: Mapped[str] = db.Column(db.Text, nullable=False)
    category: Mapped[str] = db.Column(db.String(100), nullable=False, default="General")
    status: Mapped[str] = db.Column(db.String(50), nullable=False, default="new") # new, read, archived
    created_at: Mapped[datetime] = db.Column(db.DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "subject": self.subject,
            "message": self.message,
            "category": self.category,
            "status": self.status,
            "created_at": self.created_at.isoformat()
        }
