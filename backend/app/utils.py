"""Validation and auth utility helpers."""

from __future__ import annotations

import re
import threading
from flask import session, jsonify
from functools import wraps
from datetime import datetime, timezone, timedelta
from typing import Tuple

from . import db
from .constants import (
    PASSWORD_REGEX,
    SESSION_FAILED_LOGIN_ATTEMPTS,
    SESSION_LOCKOUT_UNTIL,
    LOCKOUT_DURATION_MINUTES,
    MAX_FAILED_LOGIN_ATTEMPTS,
    SESSION_IS_ADMIN,
    SESSION_USER_ID,
)

EMAIL_REGEX = re.compile(r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get(SESSION_USER_ID):
            return jsonify({"error": "unauthorized", "reason": "login_required"}), 401
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get(SESSION_IS_ADMIN):
            return jsonify({"error": "forbidden", "reason": "admin_required"}), 403
        return f(*args, **kwargs)
    return decorated_function

def validate_email(email: str) -> bool:
    return bool(EMAIL_REGEX.match(email))

def validate_password_strength(password: str) -> Tuple[bool, str]:
    if PASSWORD_REGEX.match(password):
        return True, ""
    return False, (
        "Password must be at least 8 characters with uppercase, lowercase, number, and special character"
    )

def is_account_locked(sess: dict) -> Tuple[bool, int]:
    ts = sess.get(SESSION_LOCKOUT_UNTIL)
    if not ts:
        return False, 0
    now = datetime.now(timezone.utc).timestamp()
    remaining = int(max(0, ts - now))
    return (remaining > 0, remaining)

def record_failed_login(sess: dict) -> None:
    count = int(sess.get(SESSION_FAILED_LOGIN_ATTEMPTS, 0)) + 1
    sess[SESSION_FAILED_LOGIN_ATTEMPTS] = count
    if count >= MAX_FAILED_LOGIN_ATTEMPTS:
        lock_until = datetime.now(timezone.utc) + timedelta(minutes=LOCKOUT_DURATION_MINUTES)
        sess[SESSION_LOCKOUT_UNTIL] = lock_until.timestamp()

def clear_failed_login_attempts(sess: dict) -> None:
    sess.pop(SESSION_FAILED_LOGIN_ATTEMPTS, None)
    sess.pop(SESSION_LOCKOUT_UNTIL, None)

def get_lockout_remaining_message(sess: dict) -> str:
    locked, remaining = is_account_locked(sess)
    if not locked:
        return ""
    if remaining >= 60:
        minutes = max(1, remaining // 60)
        return f"Please try again in {minutes} minutes"
    return f"Please try again in {remaining} seconds"

def with_timeout(seconds: int):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            result = {}
            exc = {}

            def target():
                try:
                    result["value"] = fn(*args, **kwargs)
                except Exception as e:
                    exc["error"] = e

            t = threading.Thread(target=target, daemon=True)
            t.start()
            t.join(seconds)
            if t.is_alive():
                raise TimeoutError(f"operation exceeded {seconds} seconds")
            if "error" in exc:
                raise exc["error"]
            return result.get("value")

        return wrapper
    return decorator

def normalize_email(email: str) -> str:
    e = (email or "").strip().lower()
    if not e or not validate_email(e):
        return ""
    return e
