from __future__ import annotations

import os
import re
from datetime import timedelta
from pathlib import Path

class BaseConfig:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_KEY_PREFIX = "dentoplant:"
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_NAME = "session"
    SESSION_COOKIE_SAMESITE = "Lax"
    SESSION_COOKIE_DOMAIN = os.getenv("SESSION_COOKIE_DOMAIN")
    PERMANENT_SESSION_LIFETIME = timedelta(days=30)

    FRONTEND_URL = os.getenv("FRONTEND_URL")
    CORS_ORIGINS = []

    RATELIMIT_STORAGE_URI = None
    RATELIMIT_DEFAULTS = ["500 per minute", "50 per second"]

    REQUEST_ID_HEADER = os.getenv("REQUEST_ID_HEADER", "X-Request-ID")
    LOG_LEVEL = "DEBUG"

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    _default_sqlite_path = (
        Path(__file__).resolve().parent.parent / "instance" / "dentoplant.db"
    )

    _default_sqlite_uri = f"sqlite:///{_default_sqlite_path.as_posix()}"
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", _default_sqlite_uri)
    SESSION_TYPE = "filesystem"
    SESSION_COOKIE_SECURE = False
    FRONTEND_URL = "http://localhost:3000"
    CORS_ORIGINS = [FRONTEND_URL, "http://127.0.0.1:3000", "http://localhost:3000"]
    RATELIMIT_STORAGE_URI = os.getenv("RATELIMIT_STORAGE_URI", "memory://")

    RATELIMIT_DEFAULTS = ["500 per minute", "50 per second"]
    _limits = os.getenv("LIMITER_DEFAULTS")
    if _limits:
        RATELIMIT_DEFAULTS = [lim.strip() for lim in _limits.split(",") if lim.strip()]
    LOG_LEVEL = "DEBUG"


class ProductionConfig(BaseConfig):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

    SESSION_TYPE = "filesystem"
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_DOMAIN = os.getenv("SESSION_COOKIE_DOMAIN")

    FRONTEND_URL = os.getenv("FRONTEND_URL") or "http://localhost:3000"
    CORS_ORIGINS = [FRONTEND_URL]

    RATELIMIT_STORAGE_URI = os.getenv("RATELIMIT_STORAGE_URI", "memory://")
    _limits = os.getenv("LIMITER_DEFAULTS")

    RATELIMIT_DEFAULTS = ["250 per minute", "25 per second"]
    if _limits:
        RATELIMIT_DEFAULTS = [lim.strip() for lim in _limits.split(",") if lim.strip()]

    LOG_LEVEL = "INFO"

def get_config():
    mode = (os.getenv("RUN_MODE") or os.getenv("FLASK_ENV") or "development").lower()
    if mode == "production":
        return ProductionConfig
    return DevelopmentConfig

class _ConfigValidator:
    @staticmethod
    def validate_base(app):
        if not app.config.get("SECRET_KEY"):
            raise RuntimeError("SECRET_KEY is required")

    @staticmethod
    def validate_development(app):
        pass

    @staticmethod
    def validate_production(app):
        if not app.config.get("SQLALCHEMY_DATABASE_URI"):
            raise RuntimeError(
                "DATABASE_URL is required in production. Example: postgresql+psycopg://user:pass@host:5432/dbname"
            )

        if not app.config.get("FRONTEND_URL"):
            raise RuntimeError("FRONTEND_URL must be set in ProductionConfig or provided via env FRONTEND_URL")

def validate_config(app, config_class):
    _ConfigValidator.validate_base(app)
    if config_class is ProductionConfig:
        _ConfigValidator.validate_production(app)
    else:
        _ConfigValidator.validate_development(app)
