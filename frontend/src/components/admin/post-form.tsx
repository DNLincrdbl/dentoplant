"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ImagePlus, Loader2, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { ApiError } from "@/lib/api";
import {
  adminCreatePost,
  adminDeletePost,
  adminUpdatePost,
  adminUploadImage,
  type AdminBlogPost,
  type BlogPostInput,
} from "@/lib/admin";

function slugify(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_slug: string;
  category_name: string;
  author_name: string;
  author_slug: string;
  reading_minutes: string;
  is_published: boolean;
  cover_image: string;
};

const EMPTY_FORM: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category_slug: "",
  category_name: "",
  author_name: "",
  author_slug: "",
  reading_minutes: "",
  is_published: false,
  cover_image: "",
};

export function PostForm({ post }: { post?: AdminBlogPost }) {
  const router = useRouter();
  const isEdit = Boolean(post);

  const [form, setForm] = useState<FormState>(() =>
    post
      ? {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || "",
          content: post.content,
          category_slug: post.category?.slug || "",
          category_name: post.category?.name || "",
          author_name: post.author?.name || "",
          author_slug: post.author?.slug || "",
          reading_minutes: post.reading_minutes ? String(post.reading_minutes) : "",
          is_published: post.is_published,
          cover_image: post.cover_image || "",
        }
      : EMPTY_FORM
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoSlug, setAutoSlug] = useState(!isEdit);

  // Automatikus slug a címből, amíg a user nem írja át kézzel
  useEffect(() => {
    if (autoSlug) setForm((f) => ({ ...f, slug: slugify(f.title) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.title]);

  // Auto category slug
  useEffect(() => {
    setForm((f) =>
      f.category_slug === slugify(f.category_name) || f.category_slug === ""
        ? { ...f, category_slug: slugify(f.category_name) }
        : f
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.category_name]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.title.trim() || !form.content.trim()) {
      setError("Cím és tartalom kötelező.");
      return;
    }
    setSubmitting(true);
    const payload: BlogPostInput = {
      title: form.title.trim(),
      content: form.content,
      slug: form.slug.trim() || undefined,
      excerpt: form.excerpt.trim() || null,
      cover_image: form.cover_image.trim() || null,
      category_slug: form.category_slug.trim() || null,
      category_name: form.category_name.trim() || null,
      author_name: form.author_name.trim() || null,
      author_slug: form.author_slug.trim() || null,
      reading_minutes: form.reading_minutes ? Number(form.reading_minutes) : null,
      is_published: form.is_published,
    };
    try {
      if (isEdit && post) {
        await adminUpdatePost(post.id, payload);
      } else {
        const created = await adminCreatePost(payload);
        router.push(`/admin/blog/${created.id}/edit`);
        return;
      }
      router.push("/admin");
    } catch (err) {
      setError((err as ApiError).message || "Mentés sikertelen.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!post) return;
    if (!confirm(`Biztosan törlöd? „${post.title}"`)) return;
    try {
      await adminDeletePost(post.id);
      router.push("/admin");
    } catch (err) {
      alert((err as ApiError).message || "Törlés sikertelen.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" /> Vissza a listához
        </Link>
        <div className="flex items-center gap-2">
          {isEdit && (
            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-background px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
              Törlés
            </button>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary !h-10 !text-sm disabled:opacity-60"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {form.is_published ? "Mentés és publikálás" : "Mentés piszkozatként"}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Bal: tartalom */}
        <div className="space-y-6">
          <Field label="Cím" required>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => {
                update("title", e.target.value);
              }}
              placeholder="Pl. Alveolus prezerváció — miért fontos?"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-medium outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            />
          </Field>

          <Field
            label="Slug (URL)"
            hint={`A cikk a /blog/${form.slug || "..."} címen lesz elérhető.`}
          >
            <input
              type="text"
              value={form.slug}
              onChange={(e) => {
                setAutoSlug(false);
                update("slug", e.target.value);
              }}
              placeholder="auto-generálódik a címből"
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 font-mono text-sm outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            />
          </Field>

          <Field label="Lead / kivonat" hint="Rövid összefoglaló (max ~300 karakter).">
            <textarea
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            />
          </Field>

          <Field label="Tartalom" required hint="HTML formátum. Pl. <p>, <h2>, <strong>, <a href>, stb.">
            <textarea
              required
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
              rows={20}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm leading-relaxed outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
              placeholder="<p>A cikk tartalma…</p>&#10;<h2>Egy alcím</h2>&#10;<p>További szöveg…</p>"
            />
          </Field>
        </div>

        {/* Jobb: meta */}
        <aside className="space-y-5">
          <div className="rounded-2xl border border-border bg-background p-5">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.is_published}
                onChange={(e) => update("is_published", e.target.checked)}
                className="h-4 w-4 rounded border-border accent-brand-600"
              />
              <span className="text-sm font-medium">Publikálva</span>
            </label>
            <p className="mt-2 text-xs text-muted-foreground">
              Csak publikálás után jelenik meg a nyilvános /blog oldalon.
            </p>
          </div>

          <CoverImageField
            value={form.cover_image}
            onChange={(v) => update("cover_image", v)}
          />

          <div className="rounded-2xl border border-border bg-background p-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Kategória
            </div>
            <Field label="Név">
              <input
                type="text"
                value={form.category_name}
                onChange={(e) => update("category_name", e.target.value)}
                placeholder="Pl. Implantológia"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-600"
              />
            </Field>
            <Field label="Slug" hint="auto a névből">
              <input
                type="text"
                value={form.category_slug}
                onChange={(e) => update("category_slug", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs outline-none focus:border-brand-600"
              />
            </Field>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Szerző
            </div>
            <Field label="Név">
              <input
                type="text"
                value={form.author_name}
                onChange={(e) => update("author_name", e.target.value)}
                placeholder="Pl. Dr. Maráz Kinga"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand-600"
              />
            </Field>
            <Field label="Slug (munkatárs)" hint="Pl. dr-maraz-kinga">
              <input
                type="text"
                value={form.author_slug}
                onChange={(e) => update("author_slug", e.target.value)}
                placeholder="dr-maraz-kinga"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs outline-none focus:border-brand-600"
              />
            </Field>
          </div>

          <Field label="Olvasási idő (perc)">
            <input
              type="number"
              min={1}
              value={form.reading_minutes}
              onChange={(e) => update("reading_minutes", e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand-600"
            />
          </Field>
        </aside>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
        {label}
        {required && <span className="ml-1 text-brand-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {hint && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

function CoverImageField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);
    try {
      const r = await adminUploadImage(file);
      onChange(r.url);
    } catch (err) {
      setError((err as ApiError).message || "Feltöltés sikertelen.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        Borítókép
      </div>

      {value ? (
        <div className="mt-3 space-y-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
            <Image
              src={value.startsWith("http") ? value : `${process.env.NEXT_PUBLIC_API_URL || ""}${value}`}
              alt="Borítókép"
              fill
              sizes="320px"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex-1 rounded-lg border border-border px-3 py-2 text-xs font-medium hover:bg-muted"
            >
              Csere
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-50"
            >
              Eltávolítás
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="mt-3 grid w-full place-items-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 px-4 py-8 text-sm text-muted-foreground transition-colors hover:border-brand-400 hover:bg-brand-50/40"
        >
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin text-brand-600" />
          ) : (
            <ImagePlus className="h-6 w-6 text-brand-400" />
          )}
          {uploading ? "Feltöltés…" : "Kép feltöltése"}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
          if (inputRef.current) inputRef.current.value = "";
        }}
        className="hidden"
      />

      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}
