"use client";

import { usePathname } from "next/navigation";

/**
 * Finom belépő animáció minden oldalhoz. A `pathname`-mel kulcsolt wrapper
 * minden útvonalváltáskor újra-mountolódik, így a `page-enter` CSS animáció
 * (fade + felúszás) újra lefut. A `prefers-reduced-motion` tiszteletben tartva
 * (a CSS-ben kikapcsolva).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
