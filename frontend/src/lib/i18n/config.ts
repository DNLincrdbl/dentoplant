/**
 * i18n konfiguráció.
 *
 * Stratégia: a magyar (alapértelmezett) nyelv a gyökér URL-eken él
 * (`/szolgaltatasok`), az angol pedig `/en` előtag alatt (`/en/szolgaltatasok`).
 * A nyelvet a `proxy.ts` állítja be `x-locale` fejlécként; a szerver oldalon a
 * `getLocale()` (lib/i18n/server), a kliens oldalon a `LocaleProvider` olvassa.
 */

export const locales = ["hu", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hu";

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Lokalizált útvonal előállítása az aktuális nyelvhez. */
export function localizeHref(href: string, locale: Locale): string {
  // Külső / speciális linkeket nem bántunk.
  if (!href.startsWith("/")) return href;
  if (locale === defaultLocale) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

/** Levágja a `/en` (vagy más locale) előtagot egy útvonalról. */
export function stripLocale(pathname: string): { locale: Locale; pathname: string } {
  const segments = pathname.split("/");
  const maybe = segments[1];
  if (isLocale(maybe) && maybe !== defaultLocale) {
    const rest = "/" + segments.slice(2).join("/");
    return { locale: maybe, pathname: rest === "/" ? "/" : rest.replace(/\/$/, "") };
  }
  return { locale: defaultLocale, pathname };
}
