/**
 * Központi API kliens a Flask backendhez (./backend).
 *
 * Funkciók:
 *  - `credentials: "include"` — a session cookie kíséri a kéréseket
 *  - CSRF token automatikus kezelése (memóriában cache-elve)
 *  - JSON parse + egységes hibakezelés (ApiError)
 *  - 403 CSRF esetén egyszeri újrapróbálás friss tokennel
 */

export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export class ApiError extends Error {
  status: number;
  body: unknown;
  reason?: string;
  constructor(message: string, status: number, body: unknown, reason?: string) {
    super(message);
    this.status = status;
    this.body = body;
    this.reason = reason;
  }
}

let csrfTokenCache: string | null = null;

export async function getCsrfToken(force = false): Promise<string> {
  if (csrfTokenCache && !force) return csrfTokenCache;
  const r = await fetch(`${API_BASE}/auth/csrf-token`, {
    method: "GET",
    credentials: "include",
  });
  if (!r.ok) throw new ApiError("Nem sikerült CSRF tokent kérni.", r.status, null);
  const data = (await r.json()) as { csrfToken: string };
  csrfTokenCache = data.csrfToken;
  return data.csrfToken;
}

export function setCsrfToken(token: string | null) {
  csrfTokenCache = token;
}

export function clearCsrfCache() {
  csrfTokenCache = null;
}

/** Backend error/reason → magyar, admin-barát üzenet. */
export function formatApiError(err: unknown): string {
  if (!(err instanceof ApiError)) {
    if (err instanceof Error && err.message) return err.message;
    return "Váratlan hiba történt. Próbálja újra.";
  }

  const body =
    err.body && typeof err.body === "object"
      ? (err.body as { error?: string; reason?: string; message?: string })
      : null;

  if (body?.message && typeof body.message === "string") return body.message;

  const reason = err.reason || body?.reason || body?.error || err.message;
  const byReason: Record<string, string> = {
    csrf_invalid:
      "A munkamenet biztonsági tokenje lejárt. Próbálja meg újra a mentést — ha nem sikerül, jelentkezzen be újra.",
    csrf_check_failed:
      "Biztonsági ellenőrzés sikertelen. Frissítse az oldalt, majd próbálja újra.",
    admin_required: "Nincs admin jogosultsága ehhez a művelethez.",
    not_authenticated: "A munkamenet lejárt. Jelentkezzen be újra.",
    invalid_credentials: "Hibás e-mail cím vagy jelszó.",
    missing_credentials: "Adja meg az e-mail címet és a jelszót.",
    invalid_email: "Érvénytelen e-mail cím formátum.",
    invalid_json: "Érvénytelen kérés. Frissítse az oldalt, majd próbálja újra.",
    account_locked: "Túl sok sikertelen belépés miatt a fiók ideiglenesen zárolva van.",
    no_file: "Nem érkezett fájl a feltöltéshez.",
    no_file_selected: "Válasszon ki egy képet a feltöltéshez.",
    file_type_not_allowed:
      "Ez a fájltípus nem engedélyezett. Használjon PNG, JPG, WEBP vagy GIF formátumot.",
    file_too_large: "A kép túl nagy. Maximum 5 MB lehet.",
    forbidden: "A művelet nem engedélyezett. Jelentkezzen be újra, majd próbálja meg ismét.",
    unauthorized: "Nincs bejelentkezve, vagy a munkamenet lejárt.",
    bad_request: "Hibás kérés. Ellenőrizze a mezőket, majd próbálja újra.",
    payload_too_large: "A fájl túl nagy. Maximum 5 MB lehet.",
    "File too large. Max 5MB.": "A kép túl nagy. Maximum 5 MB lehet.",
    "No file part": "Nem érkezett fájl a feltöltéshez.",
    "No selected file": "Válasszon ki egy képet a feltöltéshez.",
    "File type not allowed":
      "Ez a fájltípus nem engedélyezett. Használjon PNG, JPG, WEBP vagy GIF formátumot.",
  };

  if (reason && byReason[reason]) return byReason[reason];

  if (err.status === 0) {
    return "Nem sikerült kapcsolódni a szerverhez. Ellenőrizze, hogy a backend fut-e.";
  }
  if (err.status === 413) return byReason.file_too_large;
  if (err.status === 401) return byReason.unauthorized;
  if (err.status === 403) return byReason.forbidden;
  if (err.status === 404) return "A kért tartalom nem található.";
  if (err.status >= 500) return "Szerverhiba történt. Próbálja újra pár perc múlva.";

  if (err.message && !err.message.startsWith("HTTP ") && err.message !== "forbidden") {
    return err.message;
  }

  return "Váratlan hiba történt. Próbálja újra.";
}

type FetchOpts = Omit<RequestInit, "body" | "method"> & {
  body?: unknown;
  /** Ha multipart/form-data-t küldünk, állítsd `false`-ra a JSON wrappinget. */
  json?: boolean;
  /** Belső: CSRF 403 utáni egyszeri újrapróbálás. */
  _csrfRetried?: boolean;
};

function readErrorParts(bodyParsed: unknown): { error?: string; reason?: string; message?: string } {
  if (!bodyParsed || typeof bodyParsed !== "object") return {};
  const o = bodyParsed as Record<string, unknown>;
  return {
    error: typeof o.error === "string" ? o.error : undefined,
    reason: typeof o.reason === "string" ? o.reason : undefined,
    message: typeof o.message === "string" ? o.message : undefined,
  };
}

async function request<T>(method: string, path: string, opts: FetchOpts = {}): Promise<T> {
  const isMutating = method !== "GET" && method !== "HEAD";
  const isJson = opts.json !== false && !(opts.body instanceof FormData);

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(opts.headers as Record<string, string> | undefined),
  };

  if (isJson && opts.body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (isMutating) {
    headers["X-CSRF-Token"] = await getCsrfToken();
  }

  const body =
    opts.body === undefined
      ? undefined
      : opts.body instanceof FormData || !isJson
        ? (opts.body as BodyInit)
        : JSON.stringify(opts.body);

  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;

  const { body: _ignoredBody, json: _ignoredJson, _csrfRetried, headers: _ignoredHeaders, ...fetchRest } =
    opts;

  let response: Response;
  try {
    response = await fetch(url, {
      ...fetchRest,
      method,
      credentials: "include",
      headers,
      body,
    });
  } catch (e) {
    throw new ApiError(
      `Nem sikerült kapcsolódni a szerverhez (${method} ${path}).`,
      0,
      null,
    );
  }

  const contentType = response.headers.get("content-type") || "";
  const isJsonBody = contentType.includes("application/json");
  const bodyParsed: unknown = isJsonBody
    ? await response.json().catch(() => null)
    : await response.text();

  if (!response.ok) {
    const parts = readErrorParts(bodyParsed);
    const reason = parts.reason || parts.error;
    const csrfRelated =
      reason === "csrf_invalid" ||
      reason === "csrf_check_failed" ||
      (response.status === 403 && parts.error === "forbidden");

    // Login után a cache-elt CSRF elavulhat — egyszer újra próbáljuk friss tokennel.
    if (isMutating && csrfRelated && !opts._csrfRetried) {
      clearCsrfCache();
      await getCsrfToken(true);
      return request<T>(method, path, { ...opts, _csrfRetried: true });
    }

    const msg =
      parts.message ||
      parts.error ||
      `HTTP ${response.status} at ${method} ${path}`;
    throw new ApiError(msg, response.status, bodyParsed, reason);
  }

  return bodyParsed as T;
}

export function apiGet<T>(path: string, opts?: FetchOpts) {
  return request<T>("GET", path, opts);
}
export function apiPost<T>(path: string, body?: unknown, opts?: FetchOpts) {
  return request<T>("POST", path, { ...opts, body });
}
export function apiPut<T>(path: string, body?: unknown, opts?: FetchOpts) {
  return request<T>("PUT", path, { ...opts, body });
}
export function apiPatch<T>(path: string, body?: unknown, opts?: FetchOpts) {
  return request<T>("PATCH", path, { ...opts, body });
}
export function apiDelete<T>(path: string, opts?: FetchOpts) {
  return request<T>("DELETE", path, opts);
}

/** Abszolút URL építése egy backend asset/upload pathből. */
export function resolveAsset(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith("/")) return `${API_BASE}${path}`;
  return `${API_BASE}/${path}`;
}

/** Feltöltött / külső API kép-e (next/image optimalizálás nélkül megbízhatóbb). */
export function isBackendAsset(src: string | null | undefined): boolean {
  if (!src) return false;
  if (src.includes("/api/upload/")) return true;
  if (API_BASE && src.startsWith(API_BASE)) return true;
  return false;
}
