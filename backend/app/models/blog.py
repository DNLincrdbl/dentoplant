from typing import Any
from datetime import datetime
from sqlalchemy.orm import Mapped
from .. import db

class BlogPost(db.Model):
    __tablename__ = "blog_posts"

    id: Mapped[int] = db.Column(db.Integer, primary_key=True)
    slug: Mapped[str] = db.Column(db.String(160), unique=True, nullable=False, index=True)
    title: Mapped[str] = db.Column(db.String(255), nullable=False)
    content: Mapped[str] = db.Column(db.Text, nullable=False)
    excerpt: Mapped[str | None] = db.Column(db.String(500), nullable=True)
    cover_image: Mapped[str | None] = db.Column(db.String(255), nullable=True)

    # Kategória — frontend `{ slug, name }` formára mappolva
    category_slug: Mapped[str | None] = db.Column(db.String(100), nullable=True, index=True)
    category_name: Mapped[str | None] = db.Column(db.String(200), nullable=True)

    # Szerző — frontend `{ name, slug }` formára mappolva. A slug kötheti a
    # munkatárs profilját is (pl. "dr-maraz-kinga").
    author_name: Mapped[str | None] = db.Column(db.String(200), nullable=True)
    author_slug: Mapped[str | None] = db.Column(db.String(100), nullable=True)

    # Becsült olvasási idő, percben (opcionális — kiszámítható client-side is).
    reading_minutes: Mapped[int | None] = db.Column(db.Integer, nullable=True)

    is_published: Mapped[bool] = db.Column(db.Boolean, default=False, nullable=False)
    published_at: Mapped[datetime | None] = db.Column(db.DateTime, nullable=True)
    created_at: Mapped[datetime] = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at: Mapped[datetime] = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    def to_dict(self) -> dict[str, Any]:
        category = None
        if self.category_slug or self.category_name:
            category = {
                "slug": self.category_slug or "",
                "name": self.category_name or "",
            }
        author = None
        if self.author_name or self.author_slug:
            author = {
                "name": self.author_name or "",
                "slug": self.author_slug or None,
            }
        return {
            "id": self.id,
            "slug": self.slug,
            "title": self.title,
            "content": self.content,
            "excerpt": self.excerpt,
            "cover_image": self.cover_image,
            "category": category,
            "author": author,
            "reading_minutes": self.reading_minutes,
            "is_published": self.is_published,
            "published_at": self.published_at.isoformat() if self.published_at else None,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }
