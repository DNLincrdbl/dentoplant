import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Media = { src: string; alt: string; width: number; height: number };

/** Two-column image + text row. Image defaults to the right on desktop. */
export function MediaText({
  image,
  reverse = false,
  children,
}: {
  image: Media;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
      <div className={reverse ? "md:order-2" : ""}>
        <div className="space-y-3 text-base leading-relaxed text-foreground/85">{children}</div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}

/** A single framed image with optional caption. */
export function Figure({ src, alt, width, height, caption }: Media & { caption?: string }) {
  return (
    <figure className="space-y-2">
      <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Before / after comparison with a central arrow and labels. */
export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: Media;
  after: Media;
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="relative grid gap-4 sm:grid-cols-2">
      <BaTile media={before} label={beforeLabel} />
      <BaTile media={after} label={afterLabel} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-600 text-white shadow-lg sm:grid">
        <ArrowRight className="h-5 w-5" />
      </div>
    </div>
  );
}

function BaTile({ media, label }: { media: Media; label: string }) {
  return (
    <figure className="space-y-2">
      <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          className="h-full w-full object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      <figcaption className="text-center text-sm font-semibold uppercase tracking-wider text-brand-700">
        {label}
      </figcaption>
    </figure>
  );
}

/** Responsive 16:9 YouTube embed. */
export function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/** A whole sectioned area within a service page (top-level h2). */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-3xl text-brand-900 md:text-4xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}

/** Sub-section with an h3. */
export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3 pt-4">
      <h3 className="font-display text-xl text-brand-800 md:text-2xl">{title}</h3>
      <div className="space-y-3 text-base leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

/** Lead paragraph at the top of a section. */
export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-relaxed text-foreground/90">{children}</p>;
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

/** Bulleted list with brand-colored bullets. */
export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Inline numbered list (1. 2. 3. ...). */
export function NumberedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-6 min-w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 px-1.5 font-display text-xs font-semibold text-brand-700">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

/** Larger numbered "process" steps (like DSD process). */
export function ProcessSteps({
  steps,
}: {
  steps: { title: string; body: ReactNode }[];
}) {
  return (
    <ol className="grid gap-3">
      {steps.map((s, i) => (
        <li
          key={i}
          className="flex gap-5 rounded-2xl border border-border bg-background p-5"
        >
          <div className="font-display text-3xl text-brand-300">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="font-display text-lg text-brand-900">{s.title}</h3>
            <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Card grid with named items (used for symptoms/conditions/...). */
export function CardGrid({
  items,
  columns = 2,
}: {
  items: { title: string; body: ReactNode }[];
  columns?: 2 | 3;
}) {
  const colClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid gap-3 ${colClass}`}>
      {items.map((it, i) => (
        <div key={i} className="rounded-xl border border-border bg-background p-5">
          <h4 className="font-display text-base font-semibold text-brand-900">{it.title}</h4>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</div>
        </div>
      ))}
    </div>
  );
}

/** Highlighted callout box, optionally with a CTA. */
export function Callout({
  title,
  body,
  ctaLabel,
  ctaHref = "/kapcsolat",
}: {
  title: string;
  body: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50 to-brand-100/40 p-6 md:p-8">
      <h3 className="font-display text-xl text-brand-900 md:text-2xl">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-brand-800/85 md:text-base">{body}</div>
      {ctaLabel && (
        <Link href={ctaHref} className="btn-primary mt-5">
          {ctaLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

/** Plain "info panel" — softer than Callout, used for explanations. */
export function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-muted/60 p-6 md:p-8">
      <h3 className="font-display text-xl text-brand-900 md:text-2xl">{title}</h3>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}
