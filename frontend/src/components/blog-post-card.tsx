import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { BlogCoverImage } from "@/components/blog-cover-image";
import { formatBlogDate, type BlogPostMeta } from "@/lib/blog";
import { localizeHref, type Locale } from "@/lib/i18n/config";

export function BlogPostCard({
  post,
  locale,
  more,
  minRead,
  showAuthor = true,
}: {
  post: BlogPostMeta;
  locale: Locale;
  more: string;
  minRead: string;
  showAuthor?: boolean;
}) {
  return (
    <Link
      href={localizeHref(`/blog/${post.slug}`, locale)}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm shadow-brand-900/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500">
        {post.coverImage ? (
          <BlogCoverImage
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
        <BlogPostMetaRow post={post} compact minRead={minRead} showAuthor={showAuthor} />
        <h3 className="mt-3 font-display text-lg leading-snug text-brand-900 transition-colors group-hover:text-brand-700 md:text-xl">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 text-sm font-semibold text-brand-700">{more}</div>
      </div>
    </Link>
  );
}

export function BlogPostMetaRow({
  post,
  compact = false,
  minRead,
  showAuthor = true,
}: {
  post: BlogPostMeta;
  compact?: boolean;
  minRead: string;
  showAuthor?: boolean;
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
      {showAuthor && post.author && (
        <span className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" />
          {post.author.name}
        </span>
      )}
    </div>
  );
}
