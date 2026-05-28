import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

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
