import Link from "next/link";
import { Award, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { CtaContact } from "@/components/home/cta-contact";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "About us — Dentoplant Dental Clinic Szeged" : "Bemutatkozás — Dentoplant Fogászat Szeged",
    description: en
      ? "You'll find the Dentoplant Dental and Implantology Clinic in Újszeged, on the classic promenade of Fő fasor. Successful dental treatment is teamwork with the patient at its centre."
      : "A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden, a Fő fasor klasszikus sétányán találja. A sikeres fogászati kezelés csapatmunka, középpontjában a pácienssel.",
  };
}

const PILLARS_HU = [
  {
    icon: ShieldCheck,
    title: "Megelőzés és szájhigiénia",
    body: "A megelőzés, a szájhigiéniai oktatás és a fogágybetegségek korai felismerése áll a munkánk alapjánál.",
  },
  {
    icon: HeartHandshake,
    title: "Regeneratív fogágy-stabilizáció",
    body: "A fogágybetegségek regeneratív módszerekkel történő hosszú távú stabilizálása.",
  },
  {
    icon: Sparkles,
    title: "Tartós implantációs fogpótlás",
    body: "Hosszú távon sikeres implantációs fogpótlások kivitelezése és gondozása.",
  },
];

const PILLARS_EN = [
  {
    icon: ShieldCheck,
    title: "Prevention and oral hygiene",
    body: "Prevention, oral hygiene education and the early detection of periodontal diseases are at the foundation of our work.",
  },
  {
    icon: HeartHandshake,
    title: "Regenerative periodontal stabilisation",
    body: "The long-term stabilisation of periodontal diseases with regenerative methods.",
  },
  {
    icon: Sparkles,
    title: "Durable implant restorations",
    body: "Carrying out and maintaining long-term successful implant restorations.",
  },
];

export default async function AboutPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  const pillars = en ? PILLARS_EN : PILLARS_HU;
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
        image={PAGE_HEROES.bemutatkozas}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
          <p>{c.intro1}</p>
          <p>{c.intro2}</p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">{c.valuesEyebrow}</span>
            <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-4xl">{c.valuesTitle}</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-brand-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <div className="flex items-center gap-2 text-brand-700">
              <Users className="h-5 w-5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                {c.collabEyebrow}
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl text-brand-900 md:text-3xl">{c.collabTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">{c.collabBody}</p>
          </div>

          <div className="rounded-3xl bg-brand-700 p-8 text-white shadow-lg shadow-brand-900/20 md:p-10">
            <div className="flex items-center gap-2 text-white/80">
              <GraduationCap className="h-5 w-5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                {c.trainingEyebrow}
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl md:text-3xl">{c.trainingTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              {c.trainingBody}{" "}
              <strong className="font-semibold">Dr. Maráz Kinga</strong>
              {c.trainingBody2}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                <span>
                  <strong className="font-semibold">2006–2020</strong> — {c.training1}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                <span>
                  <strong className="font-semibold">{c.training2Year}</strong> — {c.training2}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand-200/70 bg-background p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-brand-700 text-white shadow-md shadow-brand-900/20">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <span className="eyebrow">{c.nobelEyebrow}</span>
                <h2 className="mt-3 font-display text-2xl text-brand-900 md:text-3xl">{c.nobelTitle}</h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  <strong>{c.nobelYear}</strong> {c.nobelBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-2xl leading-relaxed text-brand-900 md:text-3xl">{c.quote}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <Link
              href={localizeHref("/munkatars/dr-maraz-kinga", locale)}
              className="text-sm font-semibold text-brand-700 hover:text-brand-600"
            >
              Dr. Maráz Kinga →
            </Link>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

const HU = {
  eyebrow: "Bemutatkozás",
  home: "Főoldal",
  title: "Csapatmunka, középpontjában a pácienssel",
  heroDesc:
    "A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden, a Fő fasor klasszikus sétányán találja. Munkatársaink kedves, életvidám, munkájukat szerető közösségben dolgoznak.",
  intro1:
    "A sikeres fogászati kezelés csapatmunka, melynek középpontjában a páciens áll — számunkra fontos, hogy rendelőnkben kellemes környezetben érezze magát.",
  intro2:
    "Fontosnak tartjuk a megelőzést, a szájhigiénia oktatását, a fogágybetegségek korai felismerését és kezelését, a fogágy regeneratív módszerekkel történő stabilizálását, a hosszú távon sikeres implantációs fogpótlások kivitelezését és a gondozását. Mindezen értékrend alapján állítottuk össze színvonalas fogorvos és dentálhigiénikus csapatunkat, így a fogászat több szakterülete is elérhető rendelőnkben.",
  valuesEyebrow: "Értékrendünk",
  valuesTitle: "Három pilléren áll a munkánk",
  collabEyebrow: "Szakmai együttműködés",
  collabTitle: "Speciális esetek, emelt szintű rekonstrukció",
  collabBody:
    "Fogorvos kollégákkal való együttműködés során rendszeresen irányítanak rendelőnkbe pácienseket speciális esetek megoldására. Mindezen páciensek gyógyítása gyakran emelt szintű rekonstrukciós stratégiákat igényel, amelyek külön kihívást jelentenek számunkra.",
  trainingEyebrow: "Szakképző hely",
  trainingTitle: "Részt veszünk a fogorvosok szakképzésében",
  trainingBody: "Rendelőnk életének része a fogorvosok szakképzésében való részvétel,",
  trainingBody2: " tutor szakmai irányításával.",
  training1:
    "a Szegedi Tudományegyetem Fogorvostudományi Karának akkreditált külső szakképző helye a szakorvosjelöltek oktatásában.",
  training2Year: "2023-tól",
  training2:
    "a Szegedi Tudományegyetem Szent-Györgyi Albert Orvostudományi Kar dentoalveoláris sebész szakfogorvos képzésének külső gyakorlati helye, ahol rezidens kollégákat készítünk fel a szakvizsgára.",
  nobelEyebrow: "Nemzetközi elismerés",
  nobelTitle: "Nobel Biocare Esthetic Alliance mentorközpont",
  nobelYear: "2014-től",
  nobelBody:
    "a Nobel Biocare Esthetic Alliance mentorközpontja elismerésben részesült rendelőnk. Ennek keretében a fogászati implantáció iránt érdeklődő, vagy már gyakorló szakorvos kollégák tudásának bővítéséhez nyújtunk tényleges elméleti és gyakorlati hátteret.",
  quote:
    "„Naprakész szakmai ismeretek, alapos felkészültség, sok éves klinikai tapasztalat és a leghatékonyabb kezelési módszerek alkalmazása munkánk értékmérője. A minőséget, az időtálló értéket képviseljük.”",
};

const EN = {
  eyebrow: "About us",
  home: "Home",
  title: "Teamwork, with the patient at its centre",
  heroDesc:
    "You'll find the Dentoplant Dental and Implantology Clinic in Újszeged, on the classic promenade of Fő fasor. Our staff work in a kind, cheerful community that loves its work.",
  intro1:
    "Successful dental treatment is teamwork with the patient at its centre — it is important to us that you feel comfortable in a pleasant environment in our clinic.",
  intro2:
    "We consider prevention, oral hygiene education, the early detection and treatment of periodontal diseases, the stabilisation of the periodontium with regenerative methods, and the delivery and maintenance of long-term successful implant restorations to be important. Based on this set of values we have assembled our high-quality team of dentists and dental hygienists, so that several specialties of dentistry are available in our clinic.",
  valuesEyebrow: "Our values",
  valuesTitle: "Our work rests on three pillars",
  collabEyebrow: "Professional collaboration",
  collabTitle: "Special cases, advanced reconstruction",
  collabBody:
    "Through collaboration with fellow dentists, patients are regularly referred to our clinic for the solution of special cases. Treating all these patients often requires advanced reconstruction strategies, which present a special challenge for us.",
  trainingEyebrow: "Training centre",
  trainingTitle: "We take part in the professional training of dentists",
  trainingBody: "Participating in the professional training of dentists is part of our clinic's life, under the professional guidance of tutor",
  trainingBody2: ".",
  training1:
    "an accredited external training centre of the Faculty of Dentistry of the University of Szeged in the education of specialist candidates.",
  training2Year: "from 2023",
  training2:
    "an external practical site for the dentoalveolar surgery specialist training of the Albert Szent-Györgyi Medical School of the University of Szeged, where we prepare resident colleagues for the specialist exam.",
  nobelEyebrow: "International recognition",
  nobelTitle: "Nobel Biocare Esthetic Alliance mentor centre",
  nobelYear: "From 2014,",
  nobelBody:
    "our clinic has been recognised as a Nobel Biocare Esthetic Alliance mentor centre. Within this framework, we provide genuine theoretical and practical background for expanding the knowledge of specialist colleagues who are interested in — or already practise — dental implantation.",
  quote:
    "“Up-to-date professional knowledge, thorough preparation, many years of clinical experience and the use of the most effective treatment methods are the measure of our work. We represent quality and enduring value.”",
};
