from __future__ import annotations
import re

SESSION_USER_ID = "user_id"
SESSION_IS_ADMIN = "is_admin"
SESSION_EMAIL = "email"
SESSION_FAILED_LOGIN_ATTEMPTS = "failed_login_attempts"
SESSION_LOCKOUT_UNTIL = "lockout_until"
SESSION_CSRF_TOKEN = "csrf_token"

MAX_FAILED_LOGIN_ATTEMPTS = 5
LOCKOUT_DURATION_MINUTES = 15

PASSWORD_REGEX = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
