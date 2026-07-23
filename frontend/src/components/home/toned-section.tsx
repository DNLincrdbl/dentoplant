import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Világos (muted) főoldali szekció lágy fehér átmenettel a szomszédok felé.
 */
export function TonedSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const fadeDown =
    "linear-gradient(180deg, var(--background) 0%, rgba(255,255,255,0.85) 28%, rgba(255,255,255,0.4) 58%, rgba(255,255,255,0) 100%)";
  const fadeUp =
    "linear-gradient(0deg, var(--background) 0%, rgba(255,255,255,0.85) 28%, rgba(255,255,255,0.4) 58%, rgba(255,255,255,0) 100%)";

  return (
    <section className={cn("relative bg-muted", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 md:h-40"
        style={{ background: fadeDown }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 md:h-40"
        style={{ background: fadeUp }}
      />
      <div className="relative z-[2]">{children}</div>
    </section>
  );
}
