"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, ImagePlus, Loader2 } from "lucide-react";
import Link from "next/link";
import { formatApiError, resolveAsset } from "@/lib/api";
import {
  adminCreatePost,
  adminDeletePost,
  adminUpdatePost,
  adminUploadImage,
  type AdminBlogPost,
  type BlogPostInput,
} from "@/lib/admin";
import { TEAM } from "@/lib/team";
import { getTocItems } from "@/lib/blog-toc";
import { WpContentEditor } from "./wp-content-editor";

function slugify(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isHtmlEmpty(html: string): boolean {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").trim().length === 0;
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

const AUTHORS = TEAM.flatMap((g) => g.members).map((m) => ({ name: m.name, slug: m.slug }));

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-600 focus:ring-1 focus:ring-brand-600";

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
      : EMPTY_FORM,
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [autoSlug, setAutoSlug] = useState(!isEdit);
  const [editingSlug, setEditingSlug] = useState(false);

  useEffect(() => {
    if (autoSlug) setForm((f) => ({ ...f, slug: slugify(f.title) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.title]);

  useEffect(() => {
    setForm((f) =>
      f.category_slug === slugify(f.category_name) || f.category_slug === ""
        ? { ...f, category_slug: slugify(f.category_name) }
        : f,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.category_name]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function save(publish: boolean) {
    setError(null);
    setNotice(null);
    if (!form.title.trim() || isHtmlEmpty(form.content)) {
      setError("A cím és a tartalom kötelező.");
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
      is_published: publish,
    };
    try {
      if (isEdit && post) {
        await adminUpdatePost(post.id, payload);
        update("is_published", publish);
        setNotice(publish ? "Bejegyzés frissítve." : "Bejegyzés piszkozatként mentve.");
      } else {
        const created = await adminCreatePost(payload);
        router.replace(`/admin/blog/${created.id}/edit`);
        return;
      }
    } catch (err) {
      setError(formatApiError(err));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!post) return;
    if (!confirm(`A bejegyzés a kukába kerül: „${post.title}”`)) return;
    try {
      await adminDeletePost(post.id);
      router.push("/admin");
    } catch (err) {
      alert(formatApiError(err));
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        save(form.is_published || false);
      }}
      className="space-y-5"
    >
      {notice && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          {notice}{" "}
          {form.is_published && form.slug && (
            <Link href={`/blog/${form.slug}`} target="_blank" className="font-medium text-brand-700 underline">
              Bejegyzés megtekintése
            </Link>
          )}
        </div>
      )}
      {error && (
        <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0 space-y-5">
          <div className="rounded-3xl border border-border bg-background p-5 shadow-sm shadow-brand-900/5 md:p-6">
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Cím megadása"
              className="w-full bg-transparent font-display text-2xl text-brand-900 outline-none placeholder:text-muted-foreground/70 md:text-3xl"
            />
            <div className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">Állandó hivatkozás:</span>{" "}
              <span>/blog/</span>
              {editingSlug ? (
                <span className="inline-flex items-center gap-2">
                  <input
                    value={form.slug}
                    onChange={(e) => {
                      setAutoSlug(false);
                      update("slug", e.target.value);
                    }}
                    className="rounded-lg border border-border px-2 py-1 font-mono text-xs outline-none focus:border-brand-600"
                  />
                  <button
                    type="button"
                    className="text-sm font-medium text-brand-700 hover:underline"
                    onClick={() => setEditingSlug(false)}
                  >
                    OK
                  </button>
                </span>
              ) : (
                <span>
                  <span className="font-mono text-brand-700">{form.slug || "…"}</span>
                  <button
                    type="button"
                    className="ml-2 font-medium text-brand-700 hover:underline"
                    onClick={() => setEditingSlug(true)}
                  >
                    Szerkesztés
                  </button>
                </span>
              )}
            </div>
          </div>

          <WpContentEditor value={form.content} onChange={(html) => update("content", html)} />

          <TocPreview html={form.content} />

          <Panel title="Kivonat">
            <p className="mb-3 text-xs text-muted-foreground">
              A kivonat a blog listában jelenik meg. Ha üres, a tartalom eleje lesz használva.
            </p>
            <textarea
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              rows={4}
              className={fieldClass}
            />
          </Panel>
        </div>

        <aside className="space-y-4 xl:sticky xl:top-24">
          <Panel title="Közzététel">
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">Állapot:</span>{" "}
                <strong className="text-foreground">{form.is_published ? "Közzétéve" : "Piszkozat"}</strong>
              </p>
              {isEdit && form.slug && (
                <Link
                  href={`/blog/${form.slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Előnézet
                </Link>
              )}
            </div>
            <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
              <button
                type="button"
                disabled={submitting}
                onClick={() => save(true)}
                className="btn-primary !h-11 !w-full !text-sm disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {isEdit && form.is_published ? "Frissítés" : "Közzététel"}
              </button>
              {!form.is_published && (
                <button
                  type="button"
                  disabled={submitting}
                  onClick={() => save(false)}
                  className="btn-outline !h-11 !w-full !text-sm disabled:opacity-60"
                >
                  Mentés piszkozatként
                </button>
              )}
              {isEdit && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="mt-1 text-sm text-red-700 hover:underline"
                >
                  Áthelyezés a kukába
                </button>
              )}
            </div>
          </Panel>

          <Panel title="Kiemelt kép">
            <CoverImageField value={form.cover_image} onChange={(v) => update("cover_image", v)} />
          </Panel>

          <Panel title="Kategóriák">
            <input
              type="text"
              value={form.category_name}
              onChange={(e) => update("category_name", e.target.value)}
              placeholder="Új kategória"
              className={fieldClass}
            />
            <p className="mt-2 text-xs text-muted-foreground">URL: {form.category_slug || "—"}</p>
          </Panel>

          <Panel title="Szerző">
            <select
              value={form.author_slug}
              onChange={(e) => {
                const m = AUTHORS.find((a) => a.slug === e.target.value);
                update("author_slug", e.target.value);
                update("author_name", m?.name || "");
              }}
              className={fieldClass}
            >
              <option value="">— Nincs megadva —</option>
              {form.author_slug && !AUTHORS.some((a) => a.slug === form.author_slug) && (
                <option value={form.author_slug}>{form.author_name || form.author_slug}</option>
              )}
              {AUTHORS.map((a) => (
                <option key={a.slug} value={a.slug}>
                  {a.name}
                </option>
              ))}
            </select>
          </Panel>

          <Panel title="Olvasási idő">
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={form.reading_minutes}
                onChange={(e) => update("reading_minutes", e.target.value)}
                placeholder="perc"
                className={`${fieldClass} w-28`}
              />
              <span className="text-sm text-muted-foreground">perc</span>
            </div>
          </Panel>
        </aside>
      </div>
    </form>
  );
}

function TocPreview({ html }: { html: string }) {
  const items = getTocItems(html);
  return (
    <Panel title="Tartalomjegyzék">
      {items.length < 2 ? (
        <p className="text-sm text-muted-foreground">
          A cikk elején akkor jelenik meg a témamenü, ha legalább két címsort (H2 / H3) használsz
          a szövegben. Jelöld ki a témacímet, majd nyomd meg a H2 gombot.
        </p>
      ) : (
        <>
          <p className="mb-3 text-xs text-muted-foreground">
            Ezekre kattintva az olvasó a cikk megfelelő részéhez ugrik.
          </p>
          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item.id}
                className={`rounded-full border px-3 py-1 text-sm ${
                  item.level === 3
                    ? "border-transparent text-muted-foreground"
                    : "border-border bg-muted/50 text-foreground/85"
                }`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </>
      )}
    </Panel>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm shadow-brand-900/5">
      <h2 className="px-4 pb-1 pt-4 text-sm font-semibold text-brand-900">{title}</h2>
      <div className="px-4 pb-4 pt-2">{children}</div>
    </div>
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
      setError(formatApiError(err));
    } finally {
      setUploading(false);
    }
  }

  const previewSrc = value ? (value.startsWith("http") ? value : resolveAsset(value) || value) : "";

  return (
    <div>
      {value ? (
        <div className="space-y-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={previewSrc} alt="" className="w-full rounded-xl object-cover" />
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="font-medium text-brand-700 hover:underline"
            >
              Kiemelt kép cseréje
            </button>
            <button type="button" onClick={() => onChange("")} className="text-red-700 hover:underline">
              Kiemelt kép eltávolítása
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-brand-200 bg-brand-50/50 px-3 py-6 text-sm font-medium text-brand-700 hover:bg-brand-50 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
          {uploading ? "Feltöltés…" : "Kiemelt kép beállítása"}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
          if (inputRef.current) inputRef.current.value = "";
        }}
      />
      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}
