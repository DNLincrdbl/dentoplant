"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";
import { useLocale } from "@/lib/i18n/context";

/**
 * Publikus chrome — a footert server componentként kapja propban
 * (így nem kell client bundle a footernek).
 * Nincs page-level loading skeleton / belépő fade: a soft-nav a régi
 * oldalt tartja, amíg az új kész, majd azonnal cserél.
 */
export function PublicChrome({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  const pathname = usePathname();
  const locale = useLocale();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader key={locale} />
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
