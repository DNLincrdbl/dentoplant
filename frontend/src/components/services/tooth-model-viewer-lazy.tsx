"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/lib/i18n/config";

const Viewer = dynamic(
  () => import("./tooth-model-viewer").then((m) => m.ToothModelViewer),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-[420px] w-full place-items-center rounded-3xl border border-brand-300/50 bg-gradient-to-b from-[#efe3f5] via-[#f6eef9] to-[#ebe0f2] md:h-[520px]">
        <span className="animate-pulse rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
          3D…
        </span>
      </div>
    ),
  },
);

export function ToothModelViewer({ locale = "hu" }: { locale?: Locale }) {
  return <Viewer locale={locale} />;
}
