"""Add contact submission model

Revision ID: d8341d240b8f
Revises: 7d2e9833dbd5
Create Date: 2025-11-23 16:25:07.650909

"""
from alembic import op
import sqlalchemy as sa

revision = 'd8341d240b8f'
down_revision = '7d2e9833dbd5'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('contact_submissions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('subject', sa.String(length=255), nullable=False),
    sa.Column('message', sa.Text(), nullable=False),
    sa.Column('category', sa.String(length=100), nullable=False),
    sa.Column('status', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )

def downgrade():
    op.drop_table('contact_submissions')
