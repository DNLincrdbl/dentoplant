"use client";

import { usePathname } from "next/navigation";
import { localizeHref, locales, stripLocale, type Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = { hu: "HU", en: "EN" };

/**
 * Nyelvváltó. Az aktuális oldalt nyitja meg a másik nyelven
 * (a `/en` előtag alapján számolva).
 *
 * Teljes oldalújratöltéssel navigál (`<a>`), mert az App Router gyökér-layout
 * nem renderelődik újra kliens-oldali navigációnál, így a szerverről jövő
 * nyelv (x-locale) csak teljes újratöltéskor frissül minden komponensben.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const active = useLocale();
  const pathname = usePathname() || "/";
  const { pathname: base } = stripLocale(pathname);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border p-0.5 text-xs font-semibold",
        className,
      )}
    >
      {locales.map((loc) => (
        <a
          key={loc}
          href={localizeHref(base, loc)}
          hrefLang={loc}
          aria-current={loc === active ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            loc === active
              ? "bg-brand-600 text-white"
              : "text-foreground/60 hover:text-brand-700",
          )}
        >
          {LABELS[loc]}
        </a>
      ))}
    </div>
  );
}
