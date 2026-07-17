import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { CaseStudies } from "@/components/case-studies";
import { getCases } from "@/lib/cases-data";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Case presentations — Dentoplant Dental Clinic Szeged" : "Esetbemutatás — Dentoplant Fogászat Szeged",
    description: en
      ? "Our own dental cases at the Dentoplant Dental Clinic: images of the before and after states — implantation, prosthetics, gingival recession and periodontal disease treatment."
      : "Saját fogorvosi esetek a Dentoplant Fogászati Rendelőben: kezelés előtti és utáni állapotok képei — implantáció, fogpótlás, ínyrecesszió és fogágybetegség kezelése.",
  };
}

export default async function CasesPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const cases = getCases(locale);
  const labels = {
    caseTag: en ? "Case" : "Eset",
    before: en ? "before" : "előtte",
    after: en ? "after" : "utána",
    close: en ? "Close" : "Bezárás",
    prev: en ? "Previous image" : "Előző kép",
    next: en ? "Next image" : "Következő kép",
  };
  return (
    <>
      <PageHero
        eyebrow={en ? "Case presentations" : "Esetbemutatás"}
        title={en ? "Our own cases, before – after" : "Saját eseteink, előtte – utána"}
        description={
          en
            ? "Individual dental problems and their solutions from the Dentoplant Dental Clinic. View the before and after states, step by step."
            : "Egyedi fogászati problémák és megoldásaik a Dentoplant Fogászati Rendelőből. Tekintse meg a kezelés előtti és utáni állapotokat, lépésről lépésre."
        }
        crumbs={[{ label: en ? "Home" : "Főoldal", href: "/" }, { label: en ? "Cases" : "Esetek" }]}
      />

      <section className="container-page py-10 md:py-14">
        <nav aria-label={en ? "Cases" : "Esetek"} className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {cases.map((cs) => (
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
        <CaseStudies cases={cases} labels={labels} />
      </section>

      <CtaContact />
    </>
  );
}
