import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { CtaContact } from "@/components/home/cta-contact";
import {
  formatBlogDate,
  getAllBlogSlugs,
  getBlogPost,
  getBlogPosts,
} from "@/lib/blog";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const en = locale === "en";
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: en ? "Article not found — Dentoplant" : "Cikk nem található — Dentoplant" };
  return {
    title: `${post.title} — Dentoplant Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const en = locale === "en";
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const related = (
    await getBlogPosts({
      category: post.category?.slug,
      limit: 4,
    })
  ).filter((p) => p.slug !== post.slug).slice(0, 3);

  const t = {
    home: en ? "Home" : "Főoldal",
    minRead: en ? "min read" : "perc olvasás",
    back: en ? "Back to all articles" : "Vissza az összes cikkhez",
    related: en ? "Related articles" : "Kapcsolódó cikkek",
  };

  return (
    <>
      <article>
        <header className="border-b border-border bg-gradient-to-b from-brand-50/70 to-background pt-12 pb-12 md:pt-20 md:pb-16">
          <div className="container-page mx-auto max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Link href={localizeHref("/", locale)} className="hover:text-brand-700">
                {t.home}
              </Link>
              <span>/</span>
              <Link href={localizeHref("/blog", locale)} className="hover:text-brand-700">
                Blog
              </Link>
              {post.category && (
                <>
                  <span>/</span>
                  <Link
                    href={`${localizeHref("/blog", locale)}?kategoria=${post.category.slug}`}
                    className="hover:text-brand-700"
                  >
                    {post.category.name}
                  </Link>
                </>
              )}
            </nav>

            {post.category && (
              <Link
                href={`${localizeHref("/blog", locale)}?kategoria=${post.category.slug}`}
                className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-200"
              >
                {post.category.name}
              </Link>
            )}

            <h1 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-brand-900 md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatBlogDate(post.publishedAt)}
              </span>
              {post.readingMinutes && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingMinutes} {t.minRead}
                </span>
              )}
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author.slug ? (
                    <Link
                      href={localizeHref(`/munkatars/${post.author.slug}`, locale)}
                      className="font-medium text-foreground/85 hover:text-brand-700"
                    >
                      {post.author.name}
                    </Link>
                  ) : (
                    post.author.name
                  )}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Borítókép */}
        {post.coverImage && (
          <div className="container-page mt-8">
            <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl bg-muted">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 64rem"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Tartalom */}
        <div className="container-page py-14 md:py-20">
          <div
            className="prose-blog mx-auto max-w-3xl text-foreground/85"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {/* Vissza link */}
      <div className="container-page pb-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href={localizeHref("/blog", locale)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
        </div>
      </div>

      {/* Kapcsolódó */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40">
          <div className="container-page py-14 md:py-20">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-2xl text-brand-900 md:text-3xl">
                {t.related}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={localizeHref(`/blog/${r.slug}`, locale)}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/5"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500">
                      {r.coverImage && (
                        <Image
                          src={r.coverImage}
                          alt={r.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-muted-foreground">
                        {formatBlogDate(r.publishedAt)}
                      </div>
                      <h3 className="mt-2 font-display text-base leading-snug text-brand-900 group-hover:text-brand-700">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaContact />
    </>
  );
}
