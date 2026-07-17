import { Award, Microscope, ShieldCheck, Sparkles } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";

const items = [
  {
    icon: Award,
    hu: { title: "20+ év tapasztalat", desc: "Évtizedes klinikai gyakorlat, kiszámítható és megbízható fogászati ellátás." },
    en: { title: "20+ years of experience", desc: "Decades of clinical practice, predictable and reliable dental care." },
  },
  {
    icon: Microscope,
    hu: { title: "Tudományos alapok", desc: "Naprakész szakmai ismereteken és bizonyítékokon alapuló kezelési módszerek." },
    en: { title: "Evidence-based", desc: "Treatment methods based on up-to-date knowledge and scientific evidence." },
  },
  {
    icon: ShieldCheck,
    hu: { title: "Vezető szakorvosok", desc: "Nemzetközi képzésekkel rendelkező csapat, akik a páciens kényelmét tartják szem előtt." },
    en: { title: "Leading specialists", desc: "A team with international training that keeps patient comfort front of mind." },
  },
  {
    icon: Sparkles,
    hu: { title: "Minimálisan invazív", desc: "Korszerű eszközökkel és technikákkal kíméletes kezelés, gyorsabb gyógyulás." },
    en: { title: "Minimally invasive", desc: "Gentle treatment with modern tools and techniques, and faster healing." },
  },
];

export async function Usp() {
  const locale = await getLocale();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "Why it matters" : "Miért fontos",
    title: en
      ? "Good oral hygiene is the foundation of your overall wellbeing."
      : "A jó szájhigiénia az általános jólléted alapja.",
    lead: en
      ? "To us, a tooth is more than a tooth: it is part of your whole health. Our approach combines reliable treatments, long-term prevention and a calm, comfortable patient experience."
      : "Számunkra a fog több, mint egy fog: a teljes egészséged része. Megközelítésünkben megbízható kezelések, hosszú távú megelőzés és nyugodt, kényelmes páciensélmény találkozik.",
  };
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl leading-tight text-brand-900 md:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {t.lead}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => {
            const c = en ? it.en : it.hu;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-brand-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
