"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, FileText, Pencil, Plus, Trash2 } from "lucide-react";
import { ApiError } from "@/lib/api";
import {
  adminDeletePost,
  adminListPosts,
  type AdminBlogPost,
} from "@/lib/admin";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const list = await adminListPosts();
      setPosts(list);
    } catch (err) {
      setError((err as ApiError).message || "Nem sikerült lekérni a cikkeket.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleDelete(post: AdminBlogPost) {
    if (!confirm(`Biztosan törlöd? „${post.title}"`)) return;
    try {
      await adminDeletePost(post.id);
      setPosts((p) => p.filter((x) => x.id !== post.id));
    } catch (err) {
      alert((err as ApiError).message || "Nem sikerült törölni.");
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-brand-900 md:text-4xl">Blog cikkek</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {posts.length === 0
              ? "Még nincs cikk."
              : `${posts.length} cikk — ${posts.filter((p) => p.is_published).length} publikálva, ${
                  posts.filter((p) => !p.is_published).length
                } piszkozat.`}
          </p>
        </div>
        <Link href="/admin/blog/new" className="btn-primary !h-11 !text-sm">
          <Plus className="h-4 w-4" />
          Új cikk
        </Link>
      </div>

      {loading && (
        <div className="rounded-2xl border border-border bg-background p-8 text-center text-sm text-muted-foreground">
          Betöltés…
        </div>
      )}

      {error && !loading && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="rounded-3xl border border-border bg-background p-12 text-center">
          <FileText className="mx-auto h-10 w-10 text-brand-300" />
          <h2 className="mt-4 font-display text-xl text-brand-900">Még nincs cikk</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Hozd létre az első bejegyzést.
          </p>
          <Link href="/admin/blog/new" className="btn-primary mt-6 !h-10 !text-sm">
            <Plus className="h-4 w-4" />
            Új cikk
          </Link>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm shadow-brand-900/5">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Cím
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Kategória
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Státusz
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Frissítve
                </th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((p) => (
                <tr key={p.id} className="hover:bg-muted/30">
                  <td className="px-5 py-4">
                    <div className="font-medium text-foreground">{p.title}</div>
                    <div className="text-xs text-muted-foreground">/{p.slug}</div>
                  </td>
                  <td className="px-5 py-4 text-sm text-foreground/80">
                    {p.category?.name || <span className="text-muted-foreground">—</span>}
                  </td>
                  <td className="px-5 py-4">
                    {p.is_published ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                        Publikálva
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                        Piszkozat
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {new Date(p.updated_at).toLocaleDateString("hu-HU")}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      {p.is_published && (
                        <Link
                          href={`/blog/${p.slug}`}
                          target="_blank"
                          className="rounded-lg p-2 text-muted-foreground hover:bg-brand-50 hover:text-brand-700"
                          title="Megnyitás új lapon"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                      )}
                      <Link
                        href={`/admin/blog/${p.id}/edit`}
                        className="rounded-lg p-2 text-muted-foreground hover:bg-brand-50 hover:text-brand-700"
                        title="Szerkesztés"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(p)}
                        className="rounded-lg p-2 text-muted-foreground hover:bg-red-50 hover:text-red-700"
                        title="Törlés"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
