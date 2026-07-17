import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

const steps = [
  {
    n: "01",
    hu: { title: "Első konzultáció", desc: "Részletes kivizsgálás és konzultáció, hogy megértsük az igényeit és elképzeléseit." },
    en: { title: "First consultation", desc: "A detailed examination and consultation so we understand your needs and expectations." },
  },
  {
    n: "02",
    hu: { title: "Személyre szabott terv", desc: "Az állapota és céljai alapján kidolgozott, átlátható kezelési terv." },
    en: { title: "Personalised plan", desc: "A transparent treatment plan built around your condition and goals." },
  },
  {
    n: "03",
    hu: { title: "Kíméletes kezelés", desc: "Modern eszközökkel, minimálisan invazív technikákkal végrehajtott beavatkozások." },
    en: { title: "Gentle treatment", desc: "Procedures carried out with modern tools and minimally invasive techniques." },
  },
  {
    n: "04",
    hu: { title: "Gondozás", desc: "Rendszeres kontroll és utánkövetés, hogy mosolya hosszú távon megmaradjon." },
    en: { title: "Aftercare", desc: "Regular check-ups and follow-up so your smile lasts long term." },
  },
];

export async function Process() {
  const locale = await getLocale();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "The process" : "A folyamat",
    title: en ? "A beautiful smile is worth keeping." : "A szép mosolyt érdemes megőrizni.",
    lead: en
      ? "From consultation to ongoing care, every step is accompanied by comfort, cleanliness and expert attention."
      : "A konzultációtól a folyamatos gondozásig minden lépésben kényelem, tisztaság és szakértői figyelem kíséri Önt.",
    cta: en ? "Book appointment" : "Időpontfoglalás",
  };
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(167,109,187,0.45),transparent_55%)]" />
      <div className="container-page relative">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <span className="eyebrow !text-brand-200">{t.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl">{t.title}</h2>
            <p className="mt-4 max-w-md text-base text-brand-100/80">{t.lead}</p>
          </div>
          <div className="md:justify-self-end">
            <Link
              href={localizeHref("/kapcsolat", locale)}
              className="btn-primary !bg-white !text-brand-700 hover:!bg-brand-50"
            >
              {t.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const c = en ? s.en : s.hu;
            return (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
              >
                <div className="font-display text-4xl text-brand-200">{s.n}</div>
                <h3 className="mt-4 font-display text-xl text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
