"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-data";
import { Lightbox } from "@/components/lightbox";

export function GalleryGrid({
  images,
  labels = { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
}: {
  images: GalleryImage[];
  labels?: { close: string; prev: string; next: string };
}) {
  const [active, setActive] = useState<number | null>(null);

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

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
        labels={labels}
      />
    </>
  );
}
