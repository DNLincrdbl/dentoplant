from click import Choice, echo, group, option, argument, confirm
import os
import pathlib
import re
from flask_migrate import upgrade as mg_upgrade, migrate as mg_migrate, init as mg_init, downgrade as mg_downgrade
from flask_migrate import current as mg_current, heads as mg_heads

from app import create_app, db
from app.models.user import User

app = create_app()

@group()
def cli():
    """Dentoplant Backend CLI"""

@cli.command("serve")
@option("--port", default=5000, type=int)
@option("--host", default="127.0.0.1")
def serve(host: str, port: int):
    if not pathlib.Path("migrations").exists():
        echo("[warn] migrations/ directory not found.")
        if confirm("Initialize migrations now?", default=False):
            with app.app_context():
                mg_init()
                echo("Initialized migrations/ directory")
    app.run(host=host, port=port)

@cli.command("db")
@argument("action", type=Choice(["init", "drop"], case_sensitive=False))
def db_cmd(action: str):
    with app.app_context():
        if action == "init": db.create_all()
        elif action == "drop": db.drop_all()

@cli.command("migrate")
@argument("action", type=Choice(["init", "migrate", "upgrade", "downgrade"], case_sensitive=False))
@option("--message", "message", default=None, help="Migration message (for migrate)")
def migrate_cmd(action: str, message: str | None):
    with app.app_context():
        if action.lower() == "init":
            if pathlib.Path("migrations").exists():
                echo("migrations/ already exists")
            else:
                mg_init()
                echo("Initialized migrations/ directory")

        elif action.lower() == "migrate":
            mg_migrate(message=message)
            echo("Created new migration script")
        elif action.lower() == "upgrade":
            mg_upgrade()
            echo("Upgraded to latest migration")
        elif action.lower() == "downgrade":
            mg_downgrade()
            echo("Downgraded one revision")

@cli.command("migrate-status")
def migrate_status():
    with app.app_context():
        try:
            echo("Current revision:")
            mg_current()
            echo("Heads:")
            mg_heads()
        except Exception as e:
            echo(f"Failed to get migration status: {e}")

@cli.command("create-admin")
@option("--email", "email", prompt=True)
@option("--password", "password", prompt=True, hide_input=True, confirmation_prompt=True)
def create_admin(email: str, password: str):
    email = email.strip().lower()

    with app.app_context():
        if User.query.filter_by(email=email).first():
            echo("Admin already exists.")
            return

        base = email.split("@")[0]
        base = re.sub(r"[^a-zA-Z0-9_-]", "", base).lower()
        if not base:
            base = "user"
        base = base[:32]

        candidate = base
        suffix = 1
        while User.query.filter_by(username=candidate).first() is not None:
            trimmed = base[: max(1, 120 - len(str(suffix)))]
            candidate = f"{trimmed}{suffix}"
            suffix += 1

        user = User(email=email, username=candidate, is_admin=True)
        try:
            user.set_password(password)
        except ValueError as e:
            echo(f"Password invalid: {e}")
            return

        db.session.add(user)
        created_email = user.email
        created_username = user.username
        db.session.commit()
        echo(f"Created admin user: {created_email} (username: {created_username})")

@cli.command("test-db")
def test_db():
    from sqlalchemy import text
    url = app.config.get("SQLALCHEMY_DATABASE_URI") or ""

    try:
        with app.app_context():
            db.session.execute(text("SELECT 1"))
        echo("Database connection OK")
    except Exception as e:
        echo(f"Database connection FAILED: {e}")

@cli.command("show-users")
def show_users():
    with app.app_context():
        try:
            users = db.session.execute(db.select(User)).scalars().all()
        except Exception as e:
            echo(f"Failed to query users: {e}")
            return
        if not users:
            echo("No users found.")
            return
        for u in users:
            echo(f"[{u.id}] {u.email} | username={u.username} | admin={u.is_admin}")

@cli.command("verify-password")
@option("--email", "email", prompt=True)
@option("--password", "password", prompt=True, hide_input=True)
def verify_password(email: str, password: str):
    email = email.strip().lower()
    with app.app_context():
        user = User.query.filter_by(email=email).first()
        if not user:
            echo("User not found")
            return
        ok = user.check_password(password)
        echo("MATCH" if ok else "NO MATCH")

@cli.command("set-password")
@option("--email", "email", prompt=True)
@option("--password", "password", prompt=True, hide_input=True, confirmation_prompt=True)
def set_password(email: str, password: str):
    email = email.strip().lower()
    with app.app_context():
        user = User.query.filter_by(email=email).first()
        if not user:
            echo("User not found")
            return
        try:
            user.set_password(password)
            db.session.add(user)
            db.session.commit()
            echo("Password updated")
        except Exception as e:
            echo(f"Failed to set password: {e}")

if __name__ == "__main__":
    cli()
