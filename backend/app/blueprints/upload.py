import os
import uuid
from flask import Blueprint, request, jsonify, current_app, send_from_directory
from werkzeug.utils import secure_filename
from ..utils import login_required

bp = Blueprint('upload', __name__, url_prefix='/api/upload')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

def allowed_file(filename):
    return '.' in filename and \
    filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route('', methods=['POST'])
@login_required
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        content_length = request.content_length
        if content_length and content_length > 5 * 1024 * 1024:
            return jsonify({'error': 'File too large. Max 5MB.'}), 413

        filename = secure_filename(file.filename)
        unique_filename = f"{uuid.uuid4().hex}_{filename}"

        upload_folder = os.path.join(current_app.root_path, 'static', 'uploads')
        os.makedirs(upload_folder, exist_ok=True)

        file_path = os.path.join(upload_folder, unique_filename)
        file.save(file_path)


        url = f"/api/upload/files/{unique_filename}"
        return jsonify({'url': url})
    return jsonify({'error': 'File type not allowed'}), 400

@bp.route('/files/<path:filename>', methods=['GET'])
def serve_uploaded_file(filename):
    upload_folder = os.path.join(current_app.root_path, 'static', 'uploads')
    return send_from_directory(upload_folder, filename, max_age=31536000)
