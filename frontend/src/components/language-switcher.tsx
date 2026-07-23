"use client";

import { useRouter, usePathname } from "next/navigation";
import { localizeHref, locales, stripLocale, type Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = { hu: "HU", en: "EN" };

/**
 * Soft-nav + `router.refresh()`: a proxy rewrite miatt a Next belső pathja
 * megegyezhet HU/EN között, ezért refresh nélkül nem jönne új `x-locale`.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const active = useLocale();
  const router = useRouter();
  const pathname = usePathname() || "/";
  // Böngésző URL megbízhatóbb az /en előtagra (ha a Next path már rewrite-olt).
  const raw =
    typeof window !== "undefined" ? window.location.pathname : pathname;
  const { pathname: base } = stripLocale(raw);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border p-0.5 text-xs font-semibold",
        className,
      )}
    >
      {locales.map((loc) => {
        const href = localizeHref(base, loc);
        const isActive = loc === active;
        return (
          <a
            key={loc}
            href={href}
            hrefLang={loc}
            aria-current={isActive ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              if (isActive) return;
              router.push(href);
              router.refresh();
            }}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              isActive
                ? "bg-brand-600 text-white"
                : "text-foreground/60 hover:text-brand-700",
            )}
          >
            {LABELS[loc]}
          </a>
        );
      })}
    </div>
  );
}
