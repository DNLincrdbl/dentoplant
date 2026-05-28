/**
 * Admin oldali API kliens — auth, blog CRUD, file upload.
 *
 * Csak kliens-oldalon használható (a fetch hívások cookie-t kísérnek).
 */

import { apiGet, apiPost, apiPut, apiDelete, clearCsrfCache, resolveAsset } from "./api";

/* -------------------------------------------------------------------------- */
/*  Típusok                                                                    */
/* -------------------------------------------------------------------------- */

export type AdminUser = {
  id: number;
  email: string;
  username: string | null;
  is_admin: boolean;
  created_at: string;
};

export type AdminBlogPost = {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  category: { slug: string; name: string } | null;
  author: { name: string; slug: string | null } | null;
  reading_minutes: number | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type BlogPostInput = {
  title: string;
  content: string;
  slug?: string;
  excerpt?: string | null;
  cover_image?: string | null;
  category_slug?: string | null;
  category_name?: string | null;
  author_name?: string | null;
  author_slug?: string | null;
  reading_minutes?: number | null;
  is_published?: boolean;
};

/* -------------------------------------------------------------------------- */
/*  Auth                                                                       */
/* -------------------------------------------------------------------------- */

export async function adminLogin(email: string, password: string, remember = false) {
  const r = await apiPost<{ ok: true; user: AdminUser }>("/auth/login", {
    email,
    password,
    remember,
  });
  return r.user;
}

export async function adminLogout(): Promise<void> {
  try {
    await apiPost("/auth/logout");
  } finally {
    clearCsrfCache();
  }
}

export async function adminMe(): Promise<AdminUser | null> {
  try {
    const r = await apiGet<{ user: AdminUser }>("/auth/me");
    return r.user;
  } catch {
    return null;
  }
}

export async function adminCheck(): Promise<{ authenticated: boolean; is_admin: boolean }> {
  try {
    const r = await apiGet<{
      authenticated: boolean;
      user_id?: number;
      is_admin?: boolean;
    }>("/auth/check");
    return {
      authenticated: Boolean(r.authenticated),
      is_admin: Boolean(r.is_admin),
    };
  } catch {
    return { authenticated: false, is_admin: false };
  }
}

/* -------------------------------------------------------------------------- */
/*  Blog CRUD                                                                  */
/* -------------------------------------------------------------------------- */

export function adminListPosts() {
  return apiGet<AdminBlogPost[]>("/api/blog/posts");
}

export function adminGetPost(id: number | string) {
  return apiGet<AdminBlogPost>(`/api/blog/posts/${id}`);
}

export function adminCreatePost(input: BlogPostInput) {
  return apiPost<AdminBlogPost>("/api/blog/posts", input);
}

export function adminUpdatePost(id: number | string, input: Partial<BlogPostInput>) {
  return apiPut<AdminBlogPost>(`/api/blog/posts/${id}`, input);
}

export function adminDeletePost(id: number | string) {
  return apiDelete<{ message: string }>(`/api/blog/posts/${id}`);
}

/* -------------------------------------------------------------------------- */
/*  File upload                                                                */
/* -------------------------------------------------------------------------- */

export async function adminUploadImage(file: File): Promise<{ url: string; absoluteUrl: string }> {
  const fd = new FormData();
  fd.append("file", file);
  const r = await apiPost<{ url: string }>("/api/upload", fd, { json: false });
  return { url: r.url, absoluteUrl: resolveAsset(r.url) || r.url };
}
