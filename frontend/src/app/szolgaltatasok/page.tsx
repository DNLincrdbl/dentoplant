import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/lib/services";

export const metadata = {
  title: "Szolgáltatások — Dentoplant Fogászat Szeged",
  description:
    "Teljes körű fogászati ellátás Szegeden: korszerű diagnosztika, prevenció, esztétikus fogtömések, kerámia koronák, fogágybetegségek kezelése, szájsebészet, fogbeültetés és minőségi fogpótlások.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Szolgáltatásaink"
        title="Teljes körű fogászati ellátás, egy helyen."
        description="Korszerű diagnosztika, prevenció, esztétikus fogtömések, fémmentes kerámia koronák, hidak, fogágybetegségek komplex kezelése, szájsebészeti beavatkozások, fogbeültetés és implantátumokra készülő minőségi fogpótlások."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Szolgáltatások" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col gap-20">
          {SERVICE_CATEGORIES.map((cat) => {
            const services = getServicesByCategory(cat.name);
            return (
              <div key={cat.name}>
                <div className="mb-8 grid gap-3 md:grid-cols-[0.6fr_1fr] md:items-end md:gap-10">
                  <div>
                    <span className="eyebrow">{cat.name}</span>
                    <h2 className="mt-3 font-display text-2xl text-brand-900 md:text-3xl">
                      {cat.name}
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground md:text-right">{cat.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/szolgaltatasok/${s.slug}`}
                      className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-xl text-brand-900">{s.name}</h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.summary}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-700 transition-all group-hover:gap-3">
                        Részletek <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaContact />
    </>
  );
}
