"""add composite index on users(email, is_admin)

Revision ID: 20251023_add_ix_user_email_admin
Revises: 
Create Date: 2025-10-23 00:00:00.000000

"""
from typing import Optional
from alembic import op
import sqlalchemy as sa

revision: str = '20251023_add_ix_user_email_admin'
down_revision: Optional[str] = None
branch_labels = None
depends_on = None

def upgrade() -> None:
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    tables = set(inspector.get_table_names())

    # A users tábla létrehozása, ha még nincs (initial schema).
    if 'users' not in tables:
        op.create_table(
            'users',
            sa.Column('id', sa.Integer(), primary_key=True),
            sa.Column('email', sa.String(length=255), nullable=False),
            sa.Column('username', sa.String(length=120), nullable=True),
            sa.Column('password_hash', sa.String(length=255), nullable=False),
            sa.Column('is_admin', sa.Boolean(), nullable=False, server_default=sa.false()),
            sa.Column('created_at', sa.DateTime(timezone=True), nullable=False),
        )
        op.create_index('ix_users_email', 'users', ['email'], unique=True)
        op.create_index('ix_users_username', 'users', ['username'], unique=True)
        # Frissítjük az inspector-t a következő ellenőrzéshez.
        inspector = sa.inspect(bind)

    existing = {idx.get('name') for idx in inspector.get_indexes('users')}
    if 'ix_user_email_admin' not in existing:
        op.create_index('ix_user_email_admin', 'users', ['email', 'is_admin'], unique=False)

def downgrade() -> None:
    bind = op.get_bind()
    inspector = sa.inspect(bind)
    tables = set(inspector.get_table_names())
    if 'users' not in tables:
        return
    existing = {idx.get('name') for idx in inspector.get_indexes('users')}
    if 'ix_user_email_admin' in existing:
        op.drop_index('ix_user_email_admin', table_name='users')
