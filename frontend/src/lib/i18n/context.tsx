"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { defaultLocale, localizeHref, stripLocale, type Locale } from "./config";

const LocaleContext = createContext<Locale>(defaultLocale);

/**
 * A proxy rewrite miatt a Next `usePathname()` NEM tartalmazza az `/en` előtagot.
 * Ezért a locale-t a böngésző URL-jéből olvassuk (window.location.pathname).
 */
export function LocaleProvider({
  locale: serverLocale = defaultLocale,
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>(serverLocale);

  useEffect(() => {
    const next = stripLocale(window.location.pathname).locale;
    setLocale(next);
    document.documentElement.lang = next;
  }, [pathname, serverLocale]);

  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

/** Az aktuális nyelv kliens komponensekben. */
export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/**
 * Segédfüggvény: aktuális nyelvhez lokalizált útvonalat ad vissza.
 * Használat: `const l = useLocalizedHref(); <Link href={l("/szolgaltatasok")} />`
 */
export function useLocalizedHref() {
  const locale = useLocale();
  return useMemo(() => (href: string) => localizeHref(href, locale), [locale]);
}
