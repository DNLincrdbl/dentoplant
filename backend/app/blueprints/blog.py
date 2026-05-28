from flask import Blueprint, request, jsonify
from ..models import BlogPost
from .. import db
from ..utils import admin_required
from datetime import datetime
import re
import unicodedata

bp = Blueprint("blog", __name__, url_prefix="/api/blog")

def slugify(text):
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8')
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    text = re.sub(r'^-+|-+$', '', text)
    return text

@bp.route("/posts", methods=["GET"])
def get_posts():
    posts = BlogPost.query.order_by(BlogPost.created_at.desc()).all()
    return jsonify([post.to_dict() for post in posts])

@bp.route("/posts/<int:id>", methods=["GET"])
def get_post(id):
    post = BlogPost.query.get_or_404(id)
    return jsonify(post.to_dict())

@bp.route("/public/posts", methods=["GET"])
def get_public_posts():
    posts = BlogPost.query.filter_by(is_published=True).order_by(BlogPost.created_at.desc()).all()
    return jsonify([post.to_dict() for post in posts])

@bp.route("/public/posts/<string:slug>", methods=["GET"])
def get_public_post(slug):
    post = BlogPost.query.filter_by(slug=slug, is_published=True).first_or_404()
    return jsonify(post.to_dict())

@bp.route("/posts", methods=["POST"])
@admin_required
def create_post():
    data = request.get_json()

    if not data.get("title") or not data.get("content"):
        return jsonify({"error": "Title and content are required"}), 400

    slug = data.get("slug")
    if not slug:
        slug = slugify(data["title"])

    original_slug = slug
    counter = 1
    while BlogPost.query.filter_by(slug=slug).first():
        slug = f"{original_slug}-{counter}"
        counter += 1

    post = BlogPost(
        title=data["title"],
        slug=slug,
        content=data["content"],
        excerpt=data.get("excerpt"),
        cover_image=data.get("cover_image"),
        category_slug=data.get("category_slug"),
        category_name=data.get("category_name"),
        author_name=data.get("author_name"),
        author_slug=data.get("author_slug"),
        reading_minutes=data.get("reading_minutes"),
        is_published=data.get("is_published", False),
        published_at=datetime.utcnow() if data.get("is_published") else None
    )

    db.session.add(post)
    db.session.commit()

    return jsonify(post.to_dict()), 201

@bp.route("/posts/<int:id>", methods=["PUT"])
@admin_required
def update_post(id):
    post = BlogPost.query.get_or_404(id)
    data = request.get_json()

    if "title" in data:
        post.title = data["title"]
    if "content" in data:
        post.content = data["content"]
    if "excerpt" in data:
        post.excerpt = data["excerpt"]
    if "cover_image" in data:
        post.cover_image = data["cover_image"]
    if "category_slug" in data:
        post.category_slug = data["category_slug"]
    if "category_name" in data:
        post.category_name = data["category_name"]
    if "author_name" in data:
        post.author_name = data["author_name"]
    if "author_slug" in data:
        post.author_slug = data["author_slug"]
    if "reading_minutes" in data:
        post.reading_minutes = data["reading_minutes"]
    if "slug" in data and data["slug"] != post.slug:
        slug = data["slug"]
        if BlogPost.query.filter(BlogPost.slug == slug, BlogPost.id != id).first():
            return jsonify({"error": "Slug already exists"}), 400
        post.slug = slug

    if "is_published" in data:
        was_published = post.is_published
        post.is_published = data["is_published"]
        if post.is_published and not was_published and not post.published_at:
            post.published_at = datetime.utcnow()

    db.session.commit()
    return jsonify(post.to_dict())

@bp.route("/posts/<int:id>", methods=["DELETE"])
@admin_required
def delete_post(id):
    post = BlogPost.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({"message": "Post deleted"})
