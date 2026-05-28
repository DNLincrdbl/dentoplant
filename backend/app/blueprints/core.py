import time
from flask import Blueprint, jsonify, current_app, Response
from sqlalchemy import text
from .. import db

core_bp = Blueprint("core", __name__)
_START_TIME = time.time()

@core_bp.get("/health")
def health() -> tuple[Response, int]:
    db_status = "ok"
    redis_status = "unknown"
    migration_status = "unknown"
    code = 200

    try:
        db.session.execute(text("SELECT 1"))
    except Exception:
        db_status = "down"
        code = 503

    try:
        if current_app.config.get("SESSION_TYPE") == "redis" and current_app.config.get("SESSION_REDIS"):
            current_app.config["SESSION_REDIS"].ping()
            redis_status = "ok"
        else:
            redis_status = "n/a"
    except Exception:
        redis_status = "down"
        code = 503

    try:
        db.session.execute(text("SELECT version_num FROM alembic_version"))
        migration_status = "ok"
    except Exception as e:
        msg = str(e).lower()
        if "alembic_version" in msg and ("no such table" in msg or "does not exist" in msg):
            migration_status = "not_initialized"
            code = 503
        else:
            migration_status = "error"
            code = 503

    status = "ok" if code == 200 else "degraded"
    payload = {"status": status, "database": db_status, "redis": redis_status, "migrations": migration_status}
    if code == 503:
        details = []
        if db_status != "ok":
            details.append({"component": "database", "remediation": "Check DATABASE_URL, network access, and run migrations."})
        if redis_status == "down":
            details.append({"component": "redis", "remediation": "Ensure Redis is running and REDIS_URL is correct."})
        if migration_status != "ok":
            details.append({"component": "migrations", "remediation": "Initialize and apply migrations: python run.py migrate init && migrate && upgrade."})
        payload["details"] = details
    return jsonify(payload), code


@core_bp.get("/ping")
def ping() -> tuple[Response, int]:
    return jsonify({"pong": True}), 200
