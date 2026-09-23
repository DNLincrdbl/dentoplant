"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Frame = { src: string; alt: string; width: number; height: number };

export function Crossfade({
  frames,
  interval = 2800,
  caption,
}: {
  frames: Frame[];
  interval?: number;
  caption?: string;
}) {
  const [i, setI] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduce || frames.length < 2) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % frames.length), interval);
    return () => window.clearInterval(t);
  }, [frames.length, interval, reduce]);

  const first = frames[0];
  if (!first) return null;

  return (
    <figure className="space-y-2">
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
        style={{ aspectRatio: `${first.width} / ${first.height}` }}
      >
        {frames.map((f, idx) => (
          <Image
            key={f.src}
            src={f.src}
            alt={f.alt}
            width={f.width}
            height={f.height}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        ))}
        <div className="absolute bottom-3 left-3 flex gap-1.5">
          {frames.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 w-1.5 rounded-full ${idx === i ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
