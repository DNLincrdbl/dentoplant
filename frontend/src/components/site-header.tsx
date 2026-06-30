"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  // Nyitott mobil menünél a háttér ne legyen görgethető.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Dentoplant — kezdőlap" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Dentoplant fogászati rendelő"
            width={220}
            height={56}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavDesktopItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            aria-label={`Hívás: ${SITE.phone}`}
            title={SITE.phone}
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-brand-50 text-brand-700 transition-all hover:scale-105 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link href="/kapcsolat" className="btn-primary !h-11 !px-5 !text-sm">
            Bejelentkezés
          </Link>
        </div>

        <button
          aria-label="Menü"
          className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border bg-background">
            <div className="container-page flex flex-col py-4">
              {NAV.map((item) => (
                <div key={item.href} className="border-b border-border/60 py-2 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="py-2 text-base font-semibold text-foreground"
                      onClick={() => !(item.children || item.groups) && setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {(item.children || item.groups) && (
                      <button
                        onClick={() => setMobileSub(mobileSub === item.href ? null : item.href)}
                        aria-label="Almenü"
                        className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            mobileSub === item.href && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {(item.children || item.groups) && (
                    <div
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                        mobileSub === item.href ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="flex flex-col pb-2 pl-2">
                          {item.groups
                            ? item.groups.map((g) => (
                                <div key={g.heading} className="mb-2">
                                  <div className="pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                                    {g.heading}
                                  </div>
                                  {g.children.map((c) => (
                                    <Link
                                      key={c.href}
                                      href={c.href}
                                      className="block py-1.5 text-sm text-muted-foreground hover:text-brand-700"
                                      onClick={() => setOpen(false)}
                                    >
                                      {c.label}
                                    </Link>
                                  ))}
                                </div>
                              ))
                            : item.children?.map((c) => (
                                <Link
                                  key={c.href}
                                  href={c.href}
                                  className="py-2 text-sm text-muted-foreground hover:text-brand-700"
                                  onClick={() => setOpen(false)}
                                >
                                  {c.label}
                                </Link>
                              ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link href="/kapcsolat" className="btn-primary mt-4 !w-full" onClick={() => setOpen(false)}>
                Bejelentkezés
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavDesktopItem({ item }: { item: (typeof NAV)[number] }) {
  const hasDropdown = !!item.children || !!item.groups;
  if (!hasDropdown) {
    return (
      <Link
        href={item.href}
        className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        {item.groups ? (
          <div className="grid w-[min(880px,90vw)] grid-cols-3 gap-1 rounded-2xl border border-border bg-background p-3 shadow-2xl shadow-brand-900/10">
            {item.groups.map((g) => (
              <div key={g.heading} className="rounded-xl p-2">
                <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {g.heading}
                </div>
                <div className="flex flex-col">
                  {g.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="rounded-lg px-2 py-1.5 text-sm text-foreground/85 transition-colors hover:bg-brand-50 hover:text-brand-700"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="col-span-3 mt-1 flex items-center justify-between rounded-xl bg-brand-50/60 px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Nem találja, amit keres? Nézze meg az összes szolgáltatást.
              </span>
              <Link
                href={item.href}
                className="text-sm font-semibold text-brand-700 hover:text-brand-600"
              >
                Összes szolgáltatás →
              </Link>
            </div>
          </div>
        ) : (
          <div className="min-w-[300px] rounded-2xl border border-border bg-background p-2 shadow-xl shadow-brand-900/5">
            {item.children!.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
              >
                <div className="text-sm font-semibold text-foreground">{c.label}</div>
                {c.description && (
                  <div className="mt-0.5 text-xs text-muted-foreground">{c.description}</div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
