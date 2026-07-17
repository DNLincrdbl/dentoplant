"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type ToothType =
  | "central"
  | "lateral"
  | "canine"
  | "premolar1"
  | "premolar2"
  | "molar1"
  | "molar2";

const LABELS: Record<ToothType, { hu: string; en: string }> = {
  central: { hu: "Középső metszőfog", en: "Central incisor" },
  lateral: { hu: "Oldalsó metszőfog", en: "Lateral incisor" },
  canine: { hu: "Szemfog", en: "Canine" },
  premolar1: { hu: "Első kisőrlő", en: "First premolar" },
  premolar2: { hu: "Második kisőrlő", en: "Second premolar" },
  molar1: { hu: "Első nagyőrlő", en: "First molar" },
  molar2: { hu: "Második nagyőrlő", en: "Second molar" },
};

const DIMS: Record<ToothType, { w: number; h: number }> = {
  central: { w: 15, h: 27 },
  lateral: { w: 12, h: 24 },
  canine: { w: 13, h: 31 },
  premolar1: { w: 14, h: 25 },
  premolar2: { w: 14, h: 25 },
  molar1: { w: 18, h: 23 },
  molar2: { w: 18, h: 23 },
};

// Left side back → front, then right side front → back (14 upper teeth).
const LEFT: ToothType[] = [
  "molar2",
  "molar1",
  "premolar2",
  "premolar1",
  "canine",
  "lateral",
  "central",
];
const ARCH: { type: ToothType; side: "left" | "right" }[] = [
  ...LEFT.map((type) => ({ type, side: "left" as const })),
  ...[...LEFT].reverse().map((type) => ({ type, side: "right" as const })),
];

function toothPath(w: number, h: number): string {
  return [
    `M ${-w} ${h * 0.9}`,
    `C ${-w} ${h * 0.2}, ${-w} ${-h * 0.7}, 0 ${-h}`,
    `C ${w} ${-h * 0.7}, ${w} ${h * 0.2}, ${w} ${h * 0.9}`,
    `C ${w * 0.5} ${h * 1.15}, ${-w * 0.5} ${h * 1.15}, ${-w} ${h * 0.9}`,
    "Z",
  ].join(" ");
}

const CX = 380;
const CY = 350;
const RX = 300;
const RY = 255;

export function SmileArch({ locale = "hu" }: { locale?: Locale }) {
  const [active, setActive] = useState<number | null>(null);
  const en = locale === "en";

  const round = (n: number) => Math.round(n * 1000) / 1000;
  const teeth = ARCH.map((t, i) => {
    const frac = i / (ARCH.length - 1);
    const angle = Math.PI * (1 - frac); // 180° (left) → 0° (right)
    const x = round(CX + RX * Math.cos(angle));
    const y = round(CY - RY * Math.sin(angle));
    const rot = round((Math.atan2(y - CY, x - CX) * 180) / Math.PI + 90);
    return { ...t, x, y, rot, index: i };
  });

  const activeTooth = active !== null ? teeth[active] : null;
  const caption = activeTooth
    ? LABELS[activeTooth.type][en ? "en" : "hu"]
    : en
      ? "Hover over a tooth"
      : "Vigye a kurzort egy fogra";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-200/60 bg-gradient-to-b from-brand-50/70 via-background to-background p-4 md:p-8">
      <svg
        viewBox="0 0 760 430"
        className="mx-auto block w-full max-w-2xl"
        role="img"
        aria-label={en ? "Interactive dental arch" : "Interaktív fogív"}
      >
        <defs>
          <radialGradient id="arch-halo" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="var(--brand-200)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--brand-200)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tooth-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1e7f5" />
          </linearGradient>
          <linearGradient id="tooth-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="var(--brand-100)" />
          </linearGradient>
          <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="var(--brand-500)" floodOpacity="0.9" />
            <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="var(--brand-400)" floodOpacity="0.7" />
          </filter>
        </defs>

        <ellipse cx={CX} cy={200} rx={330} ry={190} fill="url(#arch-halo)" />

        {teeth.map((t) => {
          const { w, h } = DIMS[t.type];
          const isActive = active === t.index;
          return (
            <g
              key={t.index}
              transform={`translate(${t.x} ${t.y}) rotate(${t.rot}) scale(${isActive ? 1.18 : 1})`}
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                filter: isActive ? "url(#glow)" : undefined,
                transition: "transform 180ms ease",
                cursor: "pointer",
              }}
              onMouseEnter={() => setActive(t.index)}
              onMouseLeave={() => setActive((cur) => (cur === t.index ? null : cur))}
              onFocus={() => setActive(t.index)}
              onBlur={() => setActive((cur) => (cur === t.index ? null : cur))}
              tabIndex={0}
              role="button"
              aria-label={LABELS[t.type][en ? "en" : "hu"]}
            >
              <path
                d={toothPath(w, h)}
                fill={isActive ? "url(#tooth-glow)" : "url(#tooth-fill)"}
                stroke={isActive ? "var(--brand-500)" : "var(--brand-200)"}
                strokeWidth={isActive ? 2 : 1.25}
              />
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none mt-2 text-center">
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
            activeTooth
              ? "bg-brand-600 text-white"
              : "bg-brand-50 text-brand-700"
          }`}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}
