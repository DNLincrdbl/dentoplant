/**
 * Központi API kliens a Flask backendhez (./backend).
 *
 * Funkciók:
 *  - `credentials: "include"` — a session cookie kíséri a kéréseket
 *  - CSRF token automatikus kezelése (memóriában cache-elve)
 *  - JSON parse + egységes hibakezelés (ApiError)
 *
 * Használat:
 *   const data = await apiGet<MyType>("/api/blog/posts")
 *   const post = await apiPost<MyType>("/api/blog/posts", body)
 */

export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export class ApiError extends Error {
  status: number;
  body: unknown;
  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

let csrfTokenCache: string | null = null;

export async function getCsrfToken(force = false): Promise<string> {
  if (csrfTokenCache && !force) return csrfTokenCache;
  const r = await fetch(`${API_BASE}/auth/csrf-token`, {
    method: "GET",
    credentials: "include",
  });
  if (!r.ok) throw new ApiError("Failed to obtain CSRF token", r.status, null);
  const data = (await r.json()) as { csrfToken: string };
  csrfTokenCache = data.csrfToken;
  return data.csrfToken;
}

export function clearCsrfCache() {
  csrfTokenCache = null;
}

type FetchOpts = Omit<RequestInit, "body" | "method"> & {
  body?: unknown;
  /** Ha multipart/form-data-t küldünk, állítsd `false`-ra a JSON wrappinget. */
  json?: boolean;
};

async function request<T>(
  method: string,
  path: string,
  opts: FetchOpts = {}
): Promise<T> {
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

  let response: Response;
  try {
    response = await fetch(url, {
      method,
      credentials: "include",
      ...opts,
      headers,
      body,
    });
  } catch (e) {
    throw new ApiError(
      `Network error while requesting ${method} ${path}: ${(e as Error).message}`,
      0,
      null
    );
  }

  // 401/403 — CSRF token elveszhetett (pl. session kilépés); újrapróbáljuk egyszer
  if ((response.status === 401 || response.status === 403) && isMutating) {
    clearCsrfCache();
  }

  const contentType = response.headers.get("content-type") || "";
  const isJsonBody = contentType.includes("application/json");
  const bodyParsed: unknown = isJsonBody
    ? await response.json().catch(() => null)
    : await response.text();

  if (!response.ok) {
    let msg = `HTTP ${response.status} at ${method} ${path}`;
    if (
      isJsonBody &&
      bodyParsed &&
      typeof bodyParsed === "object" &&
      "error" in bodyParsed &&
      typeof (bodyParsed as { error: unknown }).error === "string"
    ) {
      msg = (bodyParsed as { error: string }).error;
    }
    throw new ApiError(msg, response.status, bodyParsed);
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
