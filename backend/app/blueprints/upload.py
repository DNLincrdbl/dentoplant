import os
import uuid
from flask import Blueprint, request, jsonify, current_app, send_from_directory
from werkzeug.utils import secure_filename
from ..utils import login_required

bp = Blueprint("upload", __name__, url_prefix="/api/upload")
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "webp"}
MAX_BYTES = 5 * 1024 * 1024


def allowed_file(filename: str) -> bool:
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@bp.route("", methods=["POST"])
@login_required
def upload_file():
    if "file" not in request.files:
        return jsonify({
            "error": "bad_request",
            "reason": "no_file",
            "message": "Nem érkezett fájl a kérésben.",
        }), 400

    file = request.files["file"]
    if not file or file.filename == "":
        return jsonify({
            "error": "bad_request",
            "reason": "no_file_selected",
            "message": "Válasszon ki egy képet a feltöltéshez.",
        }), 400

    if not allowed_file(file.filename):
        return jsonify({
            "error": "bad_request",
            "reason": "file_type_not_allowed",
            "message": "Ez a fájltípus nem engedélyezett. Használjon PNG, JPG, WEBP vagy GIF formátumot.",
        }), 400

    content_length = request.content_length
    if content_length and content_length > MAX_BYTES:
        return jsonify({
            "error": "payload_too_large",
            "reason": "file_too_large",
            "message": "A kép túl nagy. Maximum 5 MB lehet.",
        }), 413

    filename = secure_filename(file.filename)
    unique_filename = f"{uuid.uuid4().hex}_{filename}"
    upload_folder = os.path.join(current_app.root_path, "static", "uploads")
    os.makedirs(upload_folder, exist_ok=True)
    file_path = os.path.join(upload_folder, unique_filename)
    file.save(file_path)

    # Mentés utáni méretellenőrzés (ha a Content-Length hiányzott)
    try:
        if os.path.getsize(file_path) > MAX_BYTES:
            os.remove(file_path)
            return jsonify({
                "error": "payload_too_large",
                "reason": "file_too_large",
                "message": "A kép túl nagy. Maximum 5 MB lehet.",
            }), 413
    except OSError:
        pass

    url = f"/api/upload/files/{unique_filename}"
    return jsonify({"url": url})


@bp.route("/files/<path:filename>", methods=["GET"])
def serve_uploaded_file(filename):
    upload_folder = os.path.join(current_app.root_path, "static", "uploads")
    return send_from_directory(upload_folder, filename, max_age=31536000)
