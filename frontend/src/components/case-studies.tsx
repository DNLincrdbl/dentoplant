"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/lib/cases-data";
import { Lightbox } from "@/components/lightbox";

type Active = { c: number; i: number } | null;

type Labels = {
  caseTag: string;
  before: string;
  after: string;
  close: string;
  prev: string;
  next: string;
};

const DEFAULT_LABELS: Labels = {
  caseTag: "Eset",
  before: "előtte",
  after: "utána",
  close: "Bezárás",
  prev: "Előző kép",
  next: "Következő kép",
};

export function CaseStudies({ cases, labels = DEFAULT_LABELS }: { cases: CaseStudy[]; labels?: Labels }) {
  const [active, setActive] = useState<Active>(null);
  const labelText = (l?: string) => (l === "előtte" ? labels.before : l === "utána" ? labels.after : l);

  const close = useCallback(() => setActive(null), []);
  const activeImages = active ? cases[active.c].images : [];

  return (
    <div className="space-y-16 md:space-y-24">
      {cases.map((cs, ci) => {
        const before = cs.images.find((im) => im.label === "előtte");
        const after = cs.images.find((im) => im.label === "utána");
        const hasPair = Boolean(before && after);

        return (
          <article key={cs.slug} id={cs.slug} className="scroll-mt-24">
            <header className="mx-auto max-w-3xl text-center">
              <span className="eyebrow justify-center">{labels.caseTag}</span>
              <h2 className="mt-4 font-display text-2xl text-brand-900 md:text-3xl">{cs.title}</h2>
              {cs.description && (
                <p className="mt-4 text-base leading-relaxed text-foreground/85">{cs.description}</p>
              )}
            </header>

            {hasPair && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[before!, after!].map((im) => {
                  const idx = cs.images.indexOf(im);
                  return (
                    <figure key={im.src} className="group">
                      <button
                        type="button"
                        onClick={() => setActive({ c: ci, i: idx })}
                        className="relative block w-full overflow-hidden rounded-2xl border border-border bg-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-700/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          {labelText(im.label)}
                        </span>
                        <Image
                          src={im.src}
                          alt={im.alt}
                          width={im.width || 1200}
                          height={im.height || 800}
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </button>
                    </figure>
                  );
                })}
              </div>
            )}

            <div className="mt-4 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
              {cs.images.map((im, ii) => (
                <button
                  key={im.src}
                  type="button"
                  onClick={() => setActive({ c: ci, i: ii })}
                  className="group relative block w-full overflow-hidden rounded-xl border border-border bg-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {im.label && (
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {labelText(im.label)}
                    </span>
                  )}
                  <Image
                    src={im.src}
                    alt={im.alt}
                    width={im.width || 1200}
                    height={im.height || 800}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </article>
        );
      })}

      <Lightbox
        images={activeImages}
        index={active ? active.i : null}
        onClose={close}
        onIndexChange={(i) => setActive((a) => (a ? { ...a, i } : a))}
        labels={{ close: labels.close, prev: labels.prev, next: labels.next }}
        caption={(_, i) => {
          const im = activeImages[i];
          if (!im) return "";
          const tag = im.label ? labelText(im.label) : "";
          return tag ? `${tag.toUpperCase()} — ${im.alt}` : im.alt;
        }}
      />
    </div>
  );
}
