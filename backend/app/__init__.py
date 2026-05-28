from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv(), override=True)

import os
import sys
import logging

from flask import Flask, g, request, session, current_app
from flask_cors import CORS
from flask_migrate import Migrate
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy

from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

from .config import get_config, validate_config
from . import constants as const

sess = Session()
db = SQLAlchemy()
migrate = Migrate()
limiter = Limiter(key_func=get_remote_address)

def create_app():
    app = Flask(__name__)

    config_class = get_config()
    app.config.from_object(config_class)
    validate_config(app, config_class)

    log_level = app.config.get("LOG_LEVEL", "INFO").upper()
    app.logger.setLevel(getattr(logging, log_level, logging.INFO))
    if not app.debug and not app.testing:
        handler = logging.StreamHandler(sys.stdout)
        class JsonFormatter(logging.Formatter):
            def format(self, record: logging.LogRecord) -> str:
                try:
                    from flask import g as _g
                    req_id = getattr(_g, 'request_id', 'unknown')
                except Exception:
                    req_id = 'unknown'
                return (
                    '{'
                    f'"ts":"{self.formatTime(record)}",'
                    f'"level":"{record.levelname}",'
                    f'"request_id":"{req_id}",'
                    f'"msg":{json.dumps(record.getMessage())}'
                    '}'
                )
        try:
            import json
            handler.setFormatter(JsonFormatter())
        except Exception:
            handler.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(message)s"))
        app.logger.addHandler(handler)

    db_uri = app.config.get("SQLALCHEMY_DATABASE_URI") or os.getenv("DATABASE_URL", "")

    try:
        if db_uri.startswith("sqlite:///"):
            sqlite_path = db_uri[len("sqlite:///"):]
            is_abs = os.path.isabs(sqlite_path) or (
                len(sqlite_path) > 2 and sqlite_path[1] == ":" and sqlite_path[2] == "/"
            )

            if not is_abs:
                base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
                abs_path = os.path.normpath(os.path.join(base_dir, sqlite_path))
                db_uri = "sqlite:///" + abs_path.replace("\\", "/")
                app.config["SQLALCHEMY_DATABASE_URI"] = db_uri

            sqlite_fs_path = db_uri[len("sqlite:///"):]
            dirpath = os.path.dirname(sqlite_fs_path)
            if dirpath and not os.path.isdir(dirpath):
                os.makedirs(dirpath, exist_ok=True)
    except Exception:
        pass

    engine_opts = app.config.get("SQLALCHEMY_ENGINE_OPTIONS") or {}
    engine_opts.setdefault("pool_size", 10)
    engine_opts.setdefault("pool_recycle", 3600)
    engine_opts.setdefault("pool_pre_ping", True)
    engine_opts.setdefault("pool_timeout", 30)

    connect_args = dict(engine_opts.get("connect_args") or {})
    uri_lower = (db_uri or "").lower()
    if uri_lower.startswith("postgresql") or uri_lower.startswith("postgres"):
        connect_args.setdefault("connect_timeout", 10)
    elif uri_lower.startswith("sqlite"):
        connect_args.setdefault("timeout", 10)
        try:
            if db_uri and ":memory:" not in db_uri:
                prefix = "sqlite:///"
                if db_uri.startswith(prefix):
                    sqlite_path = db_uri[len(prefix):]
                    dirpath = os.path.dirname(sqlite_path)
                    if dirpath and not os.path.isdir(dirpath):
                        os.makedirs(dirpath, exist_ok=True)
        except Exception:
            pass

    if connect_args:
        engine_opts["connect_args"] = connect_args
    app.config["SQLALCHEMY_ENGINE_OPTIONS"] = engine_opts

    db.init_app(app)

    sess.init_app(app)
    migrate.init_app(app, db)

    allowed_origins = app.config.get("CORS_ORIGINS", [])
    CORS(
        app,
        resources={r"/*": {"origins": allowed_origins}},
        supports_credentials=True,
        allow_headers=["Content-Type", "X-CSRF-Token", "Accept", "Authorization"],
        expose_headers=["Content-Type"],
        max_age=3600,
    )

    limiter.init_app(app)
    app.config.setdefault("SEND_FILE_MAX_AGE_DEFAULT", 300)

    from .blueprints.auth import auth_bp
    from .blueprints.core import core_bp
    from .blueprints.stations import bp as stations_bp
    from .blueprints.blog import bp as blog_bp
    from .blueprints.upload import bp as upload_bp
    from .blueprints.contact import bp as contact_bp
    from .errors import register_error_handlers
    openapi_bp = None

    app.register_blueprint(core_bp, url_prefix="/api")
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(stations_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(upload_bp)
    app.register_blueprint(contact_bp, url_prefix="/api")
    register_error_handlers(app)

    @app.before_request
    def assign_request_id():
        import uuid
        try:
            header_name = app.config.get("REQUEST_ID_HEADER", "X-Request-ID")
            incoming = None
            try:
                from flask import request as _req
                incoming = _req.headers.get(header_name)
            except Exception:
                incoming = None
            g.request_id = incoming or uuid.uuid4().hex
        except Exception:
            g.request_id = "unknown"

    @app.before_request
    def enforce_csrf_for_unsafe():
        try:
            if request.method in {"POST", "PUT", "PATCH", "DELETE"}:
                if request.endpoint in {"auth.csrf_token"}:
                    return None
                token_hdr = request.headers.get("X-CSRF-Token")
                sess_token = session.get(const.SESSION_CSRF_TOKEN)
                if not token_hdr or token_hdr != sess_token:
                    from flask import jsonify
                    return jsonify({"error": "forbidden", "reason": "csrf_invalid"}), 403
        except Exception:
            from flask import jsonify
            return jsonify({"error": "forbidden", "reason": "csrf_check_failed"}), 403

    @app.after_request
    def set_security_headers(response):
        response.headers.setdefault("X-Frame-Options", "DENY")
        response.headers.setdefault("X-Content-Type-Options", "nosniff")
        response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
        response.headers.setdefault("Permissions-Policy", "geolocation=(), microphone=(), camera=()")

        try:
            connect_src = app.config.get("FRONTEND_URL") or "'self'"
            csp = (
                "default-src 'self'; "
                "script-src 'self'; "
                "style-src 'self'; "
                "img-src 'self' data: https:; "
                "font-src 'self' data:; "
                f"connect-src 'self' {connect_src}; "
                "frame-ancestors 'none'; "
                "base-uri 'self'; "
                "form-action 'self'"
            )
            response.headers.setdefault("Content-Security-Policy", csp)
        except Exception:
            pass

        try:
            header_name = app.config.get("REQUEST_ID_HEADER", "X-Request-ID")
            response.headers.setdefault(header_name, getattr(g, "request_id", "unknown"))
        except Exception:
            response.headers.setdefault(app.config.get("REQUEST_ID_HEADER", "X-Request-ID"), "unknown")
        if app.config.get("SESSION_COOKIE_SECURE"):
            response.headers.setdefault(
                "Strict-Transport-Security", "max-age=31536000; includeSubDomains"
            )

        try:
            if getattr(g, "_cycle_session", False):
                cookie_name = app.config.get("SESSION_COOKIE_NAME", "session")
                response.delete_cookie(
                    cookie_name,
                    domain=app.config.get("SESSION_COOKIE_DOMAIN"),
                    path=app.config.get("SESSION_COOKIE_PATH", "/"),
                )
                try:
                    new_sid = None
                    try:
                        gen = getattr(current_app.session_interface, "_generate_sid", None)
                        if callable(gen):
                            new_sid = gen()
                    except Exception:
                        new_sid = None
                    if not new_sid:
                        import secrets
                        new_sid = secrets.token_urlsafe(32)
                    if hasattr(session, "sid"):
                        setattr(session, "sid", new_sid)
                    session.modified = True
                except Exception:
                    pass
        except Exception:
            pass
        return response

    return app
