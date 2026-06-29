"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CaseStudy } from "@/lib/cases-data";

type Active = { c: number; i: number } | null;

export function CaseStudies({ cases }: { cases: CaseStudy[] }) {
  const [active, setActive] = useState<Active>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((a) => {
        if (!a) return a;
        const imgs = cases[a.c].images;
        return { c: a.c, i: (a.i + dir + imgs.length) % imgs.length };
      }),
    [cases],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active ? cases[active.c].images[active.i] : null;

  return (
    <div className="space-y-16 md:space-y-24">
      {cases.map((cs, ci) => {
        const before = cs.images.find((im) => im.label === "előtte");
        const after = cs.images.find((im) => im.label === "utána");
        const hasPair = Boolean(before && after);

        return (
          <article key={cs.slug} id={cs.slug} className="scroll-mt-24">
            <header className="mx-auto max-w-3xl text-center">
              <span className="eyebrow justify-center">Eset</span>
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
                          {im.label}
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
                      {im.label}
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

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Bezárás"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Előző kép"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Következő kép"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="flex max-h-[88vh] max-w-[92vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width || 1600}
              height={current.height || 1067}
              sizes="92vw"
              className="max-h-[82vh] w-auto rounded-lg object-contain"
              priority
            />
            <figcaption className="mt-3 max-w-2xl text-center text-sm text-white/80">
              {current.label ? `${current.label.toUpperCase()} — ` : ""}
              {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
