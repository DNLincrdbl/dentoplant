import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { CaseStudies } from "@/components/case-studies";
import { CASES } from "@/lib/cases-data";

export const metadata = {
  title: "Esetbemutatás — Dentoplant Fogászat Szeged",
  description:
    "Saját fogorvosi esetek a Dentoplant Fogászati Rendelőben: kezelés előtti és utáni állapotok képei — implantáció, fogpótlás, ínyrecesszió és fogágybetegség kezelése.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Esetbemutatás"
        title="Saját eseteink, előtte – utána"
        description="Egyedi fogászati problémák és megoldásaik a Dentoplant Fogászati Rendelőből. Tekintse meg a kezelés előtti és utáni állapotokat, lépésről lépésre."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Esetek" }]}
      />

      <section className="container-page py-10 md:py-14">
        <nav aria-label="Esetek" className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {CASES.map((cs) => (
            <Link
              key={cs.slug}
              href={`#${cs.slug}`}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80 transition hover:border-brand-300 hover:text-brand-700"
            >
              {cs.title}
            </Link>
          ))}
        </nav>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <CaseStudies cases={CASES} />
      </section>

      <CtaContact />
    </>
  );
}
