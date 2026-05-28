from math import ceil
from flask import Blueprint, request, jsonify, session, Response, current_app, g
from .. import db, limiter
from ..models.user import User
from .. import constants as const
from .. import utils

auth_bp = Blueprint("auth", __name__)

@auth_bp.get("/csrf-token")
def csrf_token() -> tuple[Response, int]:
    import secrets
    token = secrets.token_urlsafe(32)
    session[const.SESSION_CSRF_TOKEN] = token
    return jsonify({"csrfToken": token}), 200

@auth_bp.post("/login")
@limiter.limit("150 per minute")
@limiter.limit("15 per second")
def login() -> tuple[Response, int]:
    if not request.is_json:
        return jsonify({"error": "bad_request", "reason": "invalid_json"}), 400

    data = request.get_json(silent=True)
    if data is None:
        return jsonify({"error": "bad_request", "reason": "invalid_json"}), 400

    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    remember = data.get("remember", False)

    token_hdr = request.headers.get("X-CSRF-Token")
    if not token_hdr or token_hdr != session.get(const.SESSION_CSRF_TOKEN):
        return jsonify({"error": "forbidden", "reason": "csrf_invalid"}), 403

    if not email or not password:
        return jsonify({"error": "bad_request", "reason": "missing_credentials"}), 400

    locked, remaining = utils.is_account_locked(session)
    if locked:
        minutes = max(1, ceil(remaining / 60))
        return jsonify({"error": "rate_limited", "reason": "account_locked", "meta": {"retry_after_minutes": minutes}}), 429

    if not utils.validate_email(email):
        return jsonify({"error": "bad_request", "reason": "invalid_email"}), 400

    user = User.query.filter_by(email=email).first()
    cp_ok = False
    if user:
        try:
            cp_ok = bool(user.check_password(password))
        except Exception:
            cp_ok = False
    if not user or not cp_ok:
        utils.record_failed_login(session)
        try:
            current_app.logger.warning(f"[{getattr(g, 'request_id', 'unknown')}] Failed login attempt for {email} from {request.remote_addr}")
        except Exception:
            pass
        return jsonify({"error": "unauthorized", "reason": "invalid_credentials"}), 401

    session.clear()
    try:
        session.permanent = bool(remember)
        session.modified = True
    except Exception:
        session.permanent = False
    from flask import g as _g
    try:
        setattr(_g, "_cycle_session", True)
    except Exception:
        pass
    session[const.SESSION_USER_ID] = user.id
    session[const.SESSION_IS_ADMIN] = user.is_admin
    session[const.SESSION_EMAIL] = user.email

    utils.clear_failed_login_attempts(session)

    return jsonify({
        "ok": True,
        "user": user.to_safe_dict()
    }), 200

@auth_bp.post("/logout")
def logout() -> tuple[Response, int]:
    token_hdr = request.headers.get("X-CSRF-Token")
    if not token_hdr or token_hdr != session.get(const.SESSION_CSRF_TOKEN):
        return jsonify({"error": "forbidden", "reason": "csrf_invalid"}), 403
    email = session.get(const.SESSION_EMAIL)
    session.clear()
    try:
        from flask import g as _g
        setattr(_g, "_cycle_session", True)
    except Exception:
        pass
    try:
        session.modified = True
    except Exception:
        pass
    return jsonify({"ok": True}), 200

@auth_bp.get("/check")
@limiter.limit("50 per minute")
@limiter.limit("5 per second")
def check() -> tuple[Response, int]:
    user_id = session.get(const.SESSION_USER_ID)
    if not user_id:
        return jsonify({"authenticated": False}), 200

    return jsonify({
        "authenticated": True,
        "user_id": user_id,
        "is_admin": session.get(const.SESSION_IS_ADMIN, False)
    }), 200

@auth_bp.get("/me")
@limiter.limit("50 per minute")
@limiter.limit("5 per second")
def me() -> tuple[Response, int]:
    user_id = session.get(const.SESSION_USER_ID)
    if not user_id:
        return jsonify({"error": "unauthorized", "reason": "not_authenticated"}), 401

    user = User.query.get(user_id)
    if not user:
        session.clear()
        return jsonify({"error": "unauthorized", "reason": "not_authenticated"}), 401

    return jsonify({"user": user.to_safe_dict()}), 200
