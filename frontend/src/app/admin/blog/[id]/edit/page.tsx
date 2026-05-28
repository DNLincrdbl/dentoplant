"use client";

import { use, useEffect, useState } from "react";
import { ApiError } from "@/lib/api";
import { adminGetPost, type AdminBlogPost } from "@/lib/admin";
import { PostForm } from "@/components/admin/post-form";

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [post, setPost] = useState<AdminBlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const p = await adminGetPost(id);
        if (!cancelled) setPost(p);
      } catch (err) {
        if (!cancelled) setError((err as ApiError).message || "Cikk nem található.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
        {error}
      </div>
    );
  }

  if (!post) {
    return <div className="text-sm text-muted-foreground">Betöltés…</div>;
  }

  return (
    <div>
      <h1 className="mb-6 font-display text-3xl text-brand-900 md:text-4xl">Cikk szerkesztése</h1>
      <PostForm post={post} />
    </div>
  );
}
