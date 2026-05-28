"""Add blog posts table

Revision ID: 7d2e9833dbd5
Revises: 20251023_add_ix_user_email_admin
Create Date: 2025-11-23 11:41:32.600444

"""
from alembic import op
import sqlalchemy as sa

revision = '7d2e9833dbd5'
down_revision = '20251023_add_ix_user_email_admin'
branch_labels = None
depends_on = None

def upgrade():
    op.create_table('blog_posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('slug', sa.String(length=100), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('excerpt', sa.String(length=500), nullable=True),
    sa.Column('cover_image', sa.String(length=255), nullable=True),
    sa.Column('is_published', sa.Boolean(), nullable=False),
    sa.Column('published_at', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_blog_posts_slug'), 'blog_posts', ['slug'], unique=True)

def downgrade():
    op.drop_index(op.f('ix_blog_posts_slug'), table_name='blog_posts')
    op.drop_table('blog_posts')
