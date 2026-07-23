import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { CtaContact } from "@/components/home/cta-contact";
import { getNav } from "@/lib/site-data";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Sitemap — Dentoplant Dental Clinic Szeged" : "Oldaltérkép — Dentoplant Fogászat Szeged",
    description: en
      ? "Sitemap of the Dentoplant Dental website: a clear list of our pages and services."
      : "A Dentoplant Fogászat weboldalának oldaltérképe: oldalaink és szolgáltatásaink áttekinthető listája.",
  };
}

const LEGAL_LINKS_HU = [
  { label: "Jogi nyilatkozat", href: "/jogi-nyilatkozat" },
  { label: "ÁSZF", href: "/aszf" },
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelem" },
  { label: "Oldaltérkép", href: "/oldalterkep" },
  { label: "Partnerek", href: "/partnerek" },
  { label: "Bejelentkezés", href: "/kapcsolat" },
];

const LEGAL_LINKS_EN = [
  { label: "Legal notice", href: "/jogi-nyilatkozat" },
  { label: "Terms & Conditions", href: "/aszf" },
  { label: "Privacy policy", href: "/adatvedelem" },
  { label: "Sitemap", href: "/oldalterkep" },
  { label: "Partners", href: "/partnerek" },
  { label: "Book appointment", href: "/kapcsolat" },
];

export default async function SitemapPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  const NAV = getNav(locale);
  const topPages = [{ label: c.home, href: "/" }, ...NAV.filter((n) => !n.groups && !n.children)];
  const doctorsNav = NAV.find((n) => n.children && !n.groups);
  const servicesNav = NAV.find((n) => n.groups);
  const legalLinks = en ? LEGAL_LINKS_EN : LEGAL_LINKS_HU;

  const LinkList = ({ items }: { items: { label: string; href: string }[] }) => (
    <ul className="mt-4 space-y-2.5 text-sm">
      {items.map((l) => (
        <li key={l.href}>
          <Link
            href={localizeHref(l.href, locale)}
            className="text-foreground/80 transition-colors hover:text-brand-700"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.eyebrow}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
        image={PAGE_HEROES.legal}
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="font-display text-lg text-brand-900">{c.pages}</h2>
            <LinkList items={topPages} />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="font-display text-lg text-brand-900">{c.doctors}</h2>
            <LinkList items={doctorsNav?.children ?? []} />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6">
            <h2 className="font-display text-lg text-brand-900">{c.legal}</h2>
            <LinkList items={legalLinks} />
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 lg:col-span-1">
            <h2 className="font-display text-lg text-brand-900">
              <Link href={localizeHref("/szolgaltatasok", locale)} className="hover:text-brand-700">
                {c.services}
              </Link>
            </h2>
            <div className="mt-4 space-y-5">
              {servicesNav?.groups?.map((g) => (
                <div key={g.heading}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {g.heading}
                  </div>
                  <ul className="mt-2 space-y-2 text-sm">
                    {g.children.map((ch) => (
                      <li key={ch.href}>
                        <Link
                          href={localizeHref(ch.href, locale)}
                          className="text-foreground/80 transition-colors hover:text-brand-700"
                        >
                          {ch.label}
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

const HU = {
  eyebrow: "Oldaltérkép",
  home: "Főoldal",
  heroDesc: "Weboldalunk oldalainak és szolgáltatásainak áttekinthető listája.",
  pages: "Oldalak",
  doctors: "Orvosaink",
  legal: "Jogi és egyéb információk",
  services: "Szolgáltatások",
};

const EN = {
  eyebrow: "Sitemap",
  home: "Home",
  heroDesc: "A clear list of our website's pages and services.",
  pages: "Pages",
  doctors: "Our doctors",
  legal: "Legal and other information",
  services: "Services",
};
