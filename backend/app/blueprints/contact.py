from flask import Blueprint, request, jsonify, session, current_app
from .. import db, limiter
from ..models.contact import ContactSubmission
from .. import constants as const
from .. import utils

bp = Blueprint("contact", __name__)

@bp.post("/contact")
@limiter.limit("10 per hour")
def submit_contact():
    if not request.is_json:
        return jsonify({"error": "bad_request", "reason": "invalid_json"}), 400

    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "bad_request", "reason": "invalid_json"}), 400

    name = data.get("name")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")
    category = data.get("category", "General")

    if not all([name, email, subject, message]):
        return jsonify({"error": "bad_request", "reason": "missing_fields"}), 400

    if not utils.validate_email(email):
        return jsonify({"error": "bad_request", "reason": "invalid_email"}), 400

    try:
        submission = ContactSubmission(
            name=name,
            email=email,
            subject=subject,
            message=message,
            category=category
        )
        db.session.add(submission)
        db.session.commit()

        return jsonify({"ok": True, "id": submission.id}), 201
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Failed to save contact submission: {e}")
        return jsonify({"error": "server_error", "reason": "database_error"}), 500

@bp.get("/admin/contact-submissions")
def list_submissions():
    if not session.get(const.SESSION_IS_ADMIN):
        return jsonify({"error": "forbidden", "reason": "admin_required"}), 403

    try:
        submissions = ContactSubmission.query.order_by(ContactSubmission.created_at.desc()).all()
        return jsonify({"submissions": [s.to_dict() for s in submissions]}), 200
    except Exception as e:
        current_app.logger.error(f"Failed to list submissions: {e}")
        return jsonify({"error": "server_error", "reason": "database_error"}), 500

@bp.get("/admin/contact-submissions/<int:id>")
def get_submission(id):
    if not session.get(const.SESSION_IS_ADMIN):
        return jsonify({"error": "forbidden", "reason": "admin_required"}), 403

    try:
        submission = ContactSubmission.query.get(id)
        if not submission:
            return jsonify({"error": "not_found", "reason": "submission_not_found"}), 404
        return jsonify({"submission": submission.to_dict()}), 200
    except Exception as e:
        current_app.logger.error(f"Failed to get submission: {e}")
        return jsonify({"error": "server_error", "reason": "database_error"}), 500

@bp.patch("/admin/contact-submissions/<int:id>")
def update_submission_status(id):
    if not session.get(const.SESSION_IS_ADMIN):
        return jsonify({"error": "forbidden", "reason": "admin_required"}), 403

    if not request.is_json:
        return jsonify({"error": "bad_request", "reason": "invalid_json"}), 400

    data = request.get_json(silent=True)
    status = data.get("status")

    if not status:
        return jsonify({"error": "bad_request", "reason": "missing_status"}), 400

    try:
        submission = ContactSubmission.query.get(id)
        if not submission:
            return jsonify({"error": "not_found", "reason": "submission_not_found"}), 404

        submission.status = status
        db.session.commit()
        return jsonify({"ok": True, "submission": submission.to_dict()}), 200
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Failed to update submission: {e}")
        return jsonify({"error": "server_error", "reason": "database_error"}), 500

@bp.delete("/admin/contact-submissions/<int:id>")
def delete_submission(id):
    if not session.get(const.SESSION_IS_ADMIN):
        return jsonify({"error": "forbidden", "reason": "admin_required"}), 403

    try:
        submission = ContactSubmission.query.get(id)
        if not submission:
            return jsonify({"error": "not_found", "reason": "submission_not_found"}), 404

        db.session.delete(submission)
        db.session.commit()
        return jsonify({"ok": True}), 200
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Failed to delete submission: {e}")
        return jsonify({"error": "server_error", "reason": "database_error"}), 500
