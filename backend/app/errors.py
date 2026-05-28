from flask import jsonify, request, Response
from flask_limiter.errors import RateLimitExceeded
from . import constants as const

def register_error_handlers(app):
    @app.errorhandler(400)
    def bad_request(e) -> tuple[Response, int]:
        """400 Bad Request, invalid syntax or parameters."""
        return jsonify({"error": "bad_request"}), 400

    @app.errorhandler(401)
    def unauthorized(e) -> tuple[Response, int]:
        """401 Unauthorized, authentication required or failed."""
        return jsonify({"error": "unauthorized"}), 401

    @app.errorhandler(403)
    def forbidden(e) -> tuple[Response, int]:
        """403 Forbidden, authenticated but not allowed."""
        return jsonify({"error": "forbidden"}), 403

    @app.errorhandler(404)
    def not_found(e) -> tuple[Response, int]:
        """404 Not Found, route or resource missing."""
        return jsonify({"error": "not_found"}), 404

    @app.errorhandler(405)
    def method_not_allowed(e) -> tuple[Response, int]:
        """405 Method Not Allowed, wrong HTTP verb for route."""
        return jsonify({"error": "method_not_allowed"}), 405

    @app.errorhandler(422)
    def unprocessable(e) -> tuple[Response, int]:
        """422 Unprocessable Entity, semantically invalid request body."""
        return jsonify({"error": "unprocessable_entity"}), 422

    @app.errorhandler(Exception)
    def internal_error(e) -> tuple[Response, int]:
        """500 Internal Server Error, unexpected failure."""
        app.logger.exception(f"{e} - {request.method} {request.path}")
        return jsonify({"error": "internal_server_error"}), 500

    @app.errorhandler(RateLimitExceeded)
    def ratelimit_handler(e) -> tuple[Response, int]:
        """429 Too Many Requests, rate limit exceeded."""
        return jsonify({"error": "rate_limited", "reason": "too_many_requests"}), 429
