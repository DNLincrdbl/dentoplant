import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import {
  SERVICE_CATEGORIES,
  categoryDescription,
  categoryLabel,
  getServicesByCategory,
  serviceName,
  serviceSummary,
} from "@/lib/services";
import { localizeHref } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";

export const metadata = {
  title: "Szolgáltatások — Dentoplant Fogászat Szeged",
  description:
    "Teljes körű fogászati ellátás Szegeden: korszerű diagnosztika, prevenció, esztétikus fogtömések, kerámia koronák, fogágybetegségek kezelése, szájsebészet, fogbeültetés és minőségi fogpótlások.",
};

export default async function ServicesIndex() {
  const locale = await getLocale();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "Our services" : "Szolgáltatásaink",
    title: en ? "Comprehensive dental care, in one place." : "Teljes körű fogászati ellátás, egy helyen.",
    description: en
      ? "Modern diagnostics, prevention, aesthetic fillings, metal-free ceramic crowns and bridges, complex treatment of periodontal disease, oral surgery, implantation and quality implant-borne restorations."
      : "Korszerű diagnosztika, prevenció, esztétikus fogtömések, fémmentes kerámia koronák, hidak, fogágybetegségek komplex kezelése, szájsebészeti beavatkozások, fogbeültetés és implantátumokra készülő minőségi fogpótlások.",
    home: en ? "Home" : "Főoldal",
    services: en ? "Services" : "Szolgáltatások",
    details: en ? "Details" : "Részletek",
  };
  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        crumbs={[{ label: t.home, href: "/" }, { label: t.services }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col gap-20">
          {SERVICE_CATEGORIES.map((cat) => {
            const services = getServicesByCategory(cat.name);
            return (
              <div key={cat.name}>
                <div className="mb-8 grid gap-3 md:grid-cols-[0.6fr_1fr] md:items-end md:gap-10">
                  <div>
                    <span className="eyebrow">{categoryLabel(cat.name, locale)}</span>
                    <h2 className="mt-3 font-display text-2xl text-brand-900 md:text-3xl">
                      {categoryLabel(cat.name, locale)}
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground md:text-right">
                    {categoryDescription(cat, locale)}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={localizeHref(`/szolgaltatasok/${s.slug}`, locale)}
                      className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-xl text-brand-900">
                        {serviceName(s, locale)}
                      </h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {serviceSummary(s, locale)}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-700 transition-all group-hover:gap-3">
                        {t.details} <ArrowRight className="h-4 w-4" />
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
