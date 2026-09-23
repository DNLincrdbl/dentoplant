"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText, Plus } from "lucide-react";
import { formatApiError } from "@/lib/api";
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
      setError(formatApiError(err));
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
      alert(formatApiError(err));
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-brand-900 md:text-4xl">Bejegyzések</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {posts.length === 0
              ? "Még nincs bejegyzés."
              : `${posts.length} bejegyzés — ${posts.filter((p) => p.is_published).length} közzétéve, ${
                  posts.filter((p) => !p.is_published).length
                } piszkozat.`}
          </p>
        </div>
        <Link href="/admin/blog/new" className="btn-primary !h-11 !text-sm">
          <Plus className="h-4 w-4" />
          Új bejegyzés
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
          <h2 className="mt-4 font-display text-xl text-brand-900">Még nincs bejegyzés</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Hozd létre az első bejegyzést.
          </p>
          <Link href="/admin/blog/new" className="btn-primary mt-6 !h-10 !text-sm">
            <Plus className="h-4 w-4" />
            Új bejegyzés
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
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((p) => (
                <tr key={p.id} className="hover:bg-muted/30">
                  <td className="px-5 py-4">
                    <Link
                      href={`/admin/blog/${p.id}/edit`}
                      className="font-medium text-foreground hover:text-brand-700"
                    >
                      {p.title}
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs">
                      <Link href={`/admin/blog/${p.id}/edit`} className="font-medium text-brand-700 hover:underline">
                        Szerkesztés
                      </Link>
                      <span className="text-border">|</span>
                      <button
                        type="button"
                        onClick={() => handleDelete(p)}
                        className="text-red-700 hover:underline"
                      >
                        Kukába
                      </button>
                      {p.is_published && (
                        <>
                          <span className="text-border">|</span>
                          <Link
                            href={`/blog/${p.slug}`}
                            target="_blank"
                            className="text-brand-700 hover:underline"
                          >
                            Megtekintés
                          </Link>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-foreground/80">
                    {p.category?.name || <span className="text-muted-foreground">—</span>}
                  </td>
                  <td className="px-5 py-4">
                    {p.is_published ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                        Közzétéve
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
