"use client";

import { usePathname } from "next/navigation";

/**
 * Soft-nav: a régi oldal marad, amíg az új RSC kész — nincs loading skeleton.
 * Amikor megérkezik az új route, a wrapper újra-mountolódik, és a tartalom
 * azonnal fade + felúszással jelenik meg.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
