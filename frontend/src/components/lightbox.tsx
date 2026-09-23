"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const DEFAULT_LABELS = {
  close: "Bezárás",
  prev: "Előző kép",
  next: "Következő kép",
};

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  labels = DEFAULT_LABELS,
  caption,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  labels?: { close: string; prev: string; next: string };
  caption?: (image: LightboxImage, index: number) => string;
}) {
  const open = index !== null;
  const current = index !== null ? images[index] : null;
  const count = images.length;
  const many = count > 1;
  const touchX = useRef<number | null>(null);
  const swiped = useRef(false);

  const step = useCallback(
    (dir: number) => {
      if (index === null || !many) return;
      onIndexChange((index + dir + count) % count);
    },
    [index, many, count, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const text =
    current && index !== null
      ? caption
        ? caption(current, index)
        : current.alt
      : "";

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md" />
        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="fixed inset-0 z-[201] flex h-[100dvh] w-screen flex-col outline-none"
        >
          <Dialog.Title className="sr-only">{text || labels.close}</Dialog.Title>

          <div className="relative z-10 flex h-14 shrink-0 items-center justify-between px-4 text-white md:px-6">
            <p className="text-sm tabular-nums tracking-wide text-white/70">
              {index !== null ? `${index + 1} / ${count}` : ""}
            </p>
            <Dialog.Close
              aria-label={labels.close}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div
            className="relative min-h-0 flex-1 cursor-zoom-out"
            onClick={() => {
              if (swiped.current) {
                swiped.current = false;
                return;
              }
              onClose();
            }}
            onTouchStart={(e) => {
              touchX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchX.current;
              touchX.current = null;
              if (start == null) return;
              const dx = (e.changedTouches[0]?.clientX ?? start) - start;
              if (Math.abs(dx) < 56) return;
              swiped.current = true;
              step(dx > 0 ? -1 : 1);
            }}
          >
            {current && (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                unoptimized
                priority
                className="pointer-events-none object-contain p-3 md:p-6"
              />
            )}
          </div>

          <div className="relative z-10 flex h-16 shrink-0 items-center justify-center px-6 pb-2">
            {text ? (
              <p className="line-clamp-2 max-w-3xl text-center text-sm text-white/75">{text}</p>
            ) : null}
          </div>

          {many && (
            <>
              <button
                type="button"
                aria-label={labels.prev}
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-5"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label={labels.next}
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-5"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
