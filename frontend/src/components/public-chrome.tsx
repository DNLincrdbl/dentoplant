"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { PageTransition } from "./page-transition";

/**
 * Megjeleníti a publikus oldalra szánt header + footer komponenseket — kivéve
 * az admin (`/admin/*`) szekcióban, ahol saját chrome van.
 */
export function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <PageTransition>{children}</PageTransition>;
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteFooter />
    </>
  );
}
