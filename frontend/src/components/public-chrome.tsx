"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";
import { PageTransition } from "./page-transition";
import { useLocale } from "@/lib/i18n/context";

/**
 * Publikus chrome — a footert server componentként kapja propban.
 * Nincs route-level loading.tsx: kattintáskor a régi oldal marad, majd
 * az új tartalom azonnal cserélődik és page-enter animációval beúszik.
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
    return <PageTransition>{children}</PageTransition>;
  }

  return (
    <>
      <SiteHeader key={locale} />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      {footer}
    </>
  );
}
