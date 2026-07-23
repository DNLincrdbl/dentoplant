import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";
import { PAGE_HEROES } from "@/lib/page-heroes";

export type Crumb = { label: string; href?: string };

export async function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image = PAGE_HEROES.default,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  /** Halvány háttérkép. `null` = nincs kép. */
  image?: string | null;
}) {
  const locale = await getLocale();
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-brand-50 to-background pt-12 pb-14 md:pt-20 md:pb-20">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={82}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="pointer-events-none -z-20 object-cover object-[center_35%]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background from-[8%] via-background/70 via-[38%] to-background/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/25 via-transparent to-background/80"
          />
        </>
      )}
      {!image && (
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_50%_-20%,rgba(115,48,138,0.18),transparent_60%)]" />
      )}

      <div className="container-page relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={localizeHref(c.href, locale)} className="hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-brand-900 md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
