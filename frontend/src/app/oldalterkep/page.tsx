import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { NAV } from "@/lib/site-data";

export const metadata = {
  title: "Oldaltérkép — Dentoplant Fogászat Szeged",
  description:
    "A Dentoplant Fogászat weboldalának oldaltérképe: oldalaink és szolgáltatásaink áttekinthető listája.",
};

const TOP_PAGES = [{ label: "Főoldal", href: "/" }, ...NAV.filter((n) => !n.groups)];

const SERVICES_NAV = NAV.find((n) => n.groups);

const LEGAL_LINKS = [
  { label: "Jogi nyilatkozat", href: "/jogi-nyilatkozat" },
  { label: "ÁSZF", href: "/aszf" },
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelem" },
  { label: "Oldaltérkép", href: "/oldalterkep" },
  { label: "Partnerek", href: "/partnerek" },
  { label: "Bejelentkezés", href: "/kapcsolat" },
];

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-4 space-y-2.5 text-sm">
      {items.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="text-foreground/80 transition-colors hover:text-brand-700">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Oldaltérkép"
        title="Oldaltérkép"
        description="Weboldalunk oldalainak és szolgáltatásainak áttekinthető listája."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Oldaltérkép" }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="font-display text-lg text-brand-900">Oldalak</h2>
            <LinkList items={TOP_PAGES} />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="font-display text-lg text-brand-900">Orvosaink</h2>
            <LinkList items={NAV.find((n) => n.label === "Orvosaink")?.children ?? []} />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="font-display text-lg text-brand-900">Jogi és egyéb információk</h2>
            <LinkList items={LEGAL_LINKS} />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 lg:col-span-1">
            <h2 className="font-display text-lg text-brand-900">
              <Link href="/szolgaltatasok" className="hover:text-brand-700">
                Szolgáltatások
              </Link>
            </h2>
            <div className="mt-4 space-y-5">
              {SERVICES_NAV?.groups?.map((g) => (
                <div key={g.heading}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {g.heading}
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    {g.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="text-foreground/80 transition-colors hover:text-brand-700"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
