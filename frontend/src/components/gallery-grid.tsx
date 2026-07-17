"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-data";

export function GalleryGrid({
  images,
  labels = { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
}: {
  images: GalleryImage[];
  labels?: { close: string; prev: string; next: string };
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  const current = active === null ? null : images[active];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width || 1024}
              height={img.height || 683}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <span className="pointer-events-none absolute inset-0 bg-brand-900/0 transition group-hover:bg-brand-900/10" />
          </button>
        ))}
      </div>

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
            aria-label={labels.close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label={labels.prev}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label={labels.next}
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
            {current.alt && (
              <figcaption className="mt-3 max-w-2xl text-center text-sm text-white/80">
                {current.alt}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
