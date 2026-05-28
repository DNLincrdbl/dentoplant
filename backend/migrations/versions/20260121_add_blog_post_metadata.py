"""Add blog post metadata fields (category, author, reading minutes)

Revision ID: 20260121_blog_meta
Revises: d8341d240b8f
Create Date: 2026-01-21 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa

revision = "20260121_blog_meta"
down_revision = "d8341d240b8f"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table("blog_posts") as batch_op:
        batch_op.add_column(sa.Column("category_slug", sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column("category_name", sa.String(length=200), nullable=True))
        batch_op.add_column(sa.Column("author_name", sa.String(length=200), nullable=True))
        batch_op.add_column(sa.Column("author_slug", sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column("reading_minutes", sa.Integer(), nullable=True))
        batch_op.create_index("ix_blog_posts_category_slug", ["category_slug"], unique=False)


def downgrade():
    with op.batch_alter_table("blog_posts") as batch_op:
        batch_op.drop_index("ix_blog_posts_category_slug")
        batch_op.drop_column("reading_minutes")
        batch_op.drop_column("author_slug")
        batch_op.drop_column("author_name")
        batch_op.drop_column("category_name")
        batch_op.drop_column("category_slug")
