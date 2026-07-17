import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";

/**
 * Nyelvi útválasztás.
 *
 * - A magyar (alapértelmezett) tartalom a gyökér URL-eken él: `/szolgaltatasok`.
 * - Az angol a `/en` előtag alatt: `/en/szolgaltatasok` → belül a `/szolgaltatasok`
 *   route renderelődik, `x-locale: en` fejléccel.
 *
 * A nyelvet minden kérésnél `x-locale` request-fejlécként adjuk tovább az
 * alkalmazásnak (lásd `lib/i18n/server.ts` és `LocaleProvider`).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const nonDefault = locales.filter((l) => l !== defaultLocale);
  const matched = nonDefault.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  const requestHeaders = new Headers(request.headers);

  if (matched) {
    requestHeaders.set("x-locale", matched);
    const stripped = pathname.slice(`/${matched}`.length) || "/";
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  requestHeaders.set("x-locale", defaultLocale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    // Minden útvonal, KIVÉVE: api, next belső, admin, és a fájlok (pl. .png).
    "/((?!api|_next/static|_next/image|admin|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
