import "server-only";
import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "./config";

/**
 * Az aktuális kérés nyelvének kiolvasása a `proxy.ts` által beállított
 * `x-locale` fejlécből. Szerver komponensekben használható.
 */
export async function getLocale(): Promise<Locale> {
  const h = await headers();
  const value = h.get("x-locale");
  return isLocale(value) ? value : defaultLocale;
}
