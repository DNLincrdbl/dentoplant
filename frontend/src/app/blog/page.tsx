import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import {
  formatBlogDate,
  getBlogCategories,
  getBlogPosts,
  type BlogPostMeta,
} from "@/lib/blog";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref, type Locale } from "@/lib/i18n/config";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Blog — Dentoplant Dental Clinic Szeged" : "Blog — Dentoplant Fogászat Szeged",
    description: en
      ? "Professional articles, news and showcases from the Dentoplant Dental and Implantology Clinic — periodontal disease, implantology, orthodontics, aesthetics and oral hygiene."
      : "Szakmai cikkek, hírek és bemutatók a Dentoplant Fogászati és Implantológiai Rendelőtől — fogágybetegség, implantológia, fogszabályozás, esztétika és szájhigiénia.",
  };
}

export const revalidate = 60;

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>;
}) {
  const locale = await getLocale();
  const en = locale === "en";
  const sp = await searchParams;
  const activeCategory = sp.kategoria;

  const [posts, categories] = await Promise.all([
    getBlogPosts({ category: activeCategory }),
    getBlogCategories(),
  ]);

  const [featured, ...rest] = posts;
  const t = {
    home: en ? "Home" : "Főoldal",
    eyebrow: "Blog",
    title: en ? "Professional articles and clinic news" : "Szakmai írások és rendelői hírek",
    desc: en
      ? "Our articles offer insight into the world of modern dental care — from prevention to complex implant reconstructions. We regularly update with new content."
      : "Cikkeink betekintést nyújtanak a korszerű fogászati ellátás világába — a megelőzéstől a komplex implantológiai rekonstrukciókig. Rendszeresen frissítjük új tartalommal.",
    all: en ? "All" : "Összes",
    empty: en
      ? "There are no articles in this category yet. See "
      : "Ebben a kategóriában még nincs cikk. Nézze meg az ",
    emptyLink: en ? "all blog posts" : "összes blogbejegyzést",
    readMore: en ? "Continue reading" : "Tovább olvasom",
    more: en ? "More →" : "Tovább →",
    minRead: en ? "min read" : "perc olvasás",
  };

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.desc}
        crumbs={[{ label: t.home, href: "/" }, { label: "Blog" }]}
      />

      <section className="border-b border-border bg-background">
        <div className="container-page py-6">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={localizeHref("/blog", locale)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-brand-700 text-white"
                  : "border border-border bg-background text-foreground/70 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {t.all}
            </Link>
            {categories.map((c) => {
              const isActive = activeCategory === c.slug;
              return (
                <Link
                  key={c.slug}
                  href={`${localizeHref("/blog", locale)}?kategoria=${c.slug}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-700 text-white"
                      : "border border-border bg-background text-foreground/70 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-border bg-muted/40 p-12 text-center">
            <p className="text-base text-muted-foreground">
              {t.empty}
              <Link
                href={localizeHref("/blog", locale)}
                className="font-semibold text-brand-700 hover:underline"
              >
                {t.emptyLink}
              </Link>
              .
            </p>
          </div>
        ) : (
          <>
            {featured && (
              <FeaturedCard post={featured} locale={locale} readMore={t.readMore} minRead={t.minRead} />
            )}

            {rest.length > 0 && (
              <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <PostCard
                    key={p.slug}
                    post={p}
                    locale={locale}
                    more={t.more}
                    minRead={t.minRead}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <CtaContact />
    </>
  );
}

function FeaturedCard({
  post,
  locale,
  readMore,
  minRead,
}: {
  post: BlogPostMeta;
  locale: Locale;
  readMore: string;
  minRead: string;
}) {
  return (
    <Link
      href={localizeHref(`/blog/${post.slug}`, locale)}
      className="group grid overflow-hidden rounded-3xl border border-border bg-background shadow-sm shadow-brand-900/5 transition-all hover:shadow-xl hover:shadow-brand-900/10 lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500 lg:aspect-auto">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_55%)]" />
        )}
        {post.category && (
          <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            {post.category.name}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <PostMeta post={post} minRead={minRead} />
        <h2 className="mt-4 font-display text-2xl leading-tight text-brand-900 transition-colors group-hover:text-brand-700 md:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
          {readMore} <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function PostCard({
  post,
  locale,
  more,
  minRead,
}: {
  post: BlogPostMeta;
  locale: Locale;
  more: string;
  minRead: string;
}) {
  return (
    <Link
      href={localizeHref(`/blog/${post.slug}`, locale)}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm shadow-brand-900/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_60%)]" />
        )}
        {post.category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-brand-700 shadow-sm">
            {post.category.name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <PostMeta post={post} compact minRead={minRead} />
        <h3 className="mt-3 font-display text-lg leading-snug text-brand-900 transition-colors group-hover:text-brand-700 md:text-xl">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
          {more}
        </div>
      </div>
    </Link>
  );
}

function PostMeta({
  post,
  compact = false,
  minRead,
}: {
  post: BlogPostMeta;
  compact?: boolean;
  minRead: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 ${
        compact ? "text-[11px]" : "text-xs"
      } text-muted-foreground`}
    >
      <span className="flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" />
        {formatBlogDate(post.publishedAt)}
      </span>
      {post.readingMinutes && (
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readingMinutes} {minRead}
        </span>
      )}
      {post.author && (
        <span className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" />
          {post.author.name}
        </span>
      )}
    </div>
  );
}
