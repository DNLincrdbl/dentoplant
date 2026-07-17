"use client";

import { createContext, useContext, useMemo } from "react";
import { defaultLocale, localizeHref, type Locale } from "./config";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
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
