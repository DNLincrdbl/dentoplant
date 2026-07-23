"use client";

import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLocale, useLocalizedHref } from "@/lib/i18n/context";

const items = [
  {
    id: "elso-talalkozas",
    href: "/kapcsolat",
    image: "/galeria/14-elso-talalkozas-dentoplant-fogaszat-szeged.jpg",
    imageAlt: {
      hu: "Első találkozás a Dentoplant Fogászaton",
      en: "First visit at Dentoplant Dental Clinic",
    },
    hu: {
      label: "Első találkozás",
      title: "A pácienseinkkel történő első találkozáskor",
      description:
        "A pácienseinkkel történő első találkozáskor beszéljük meg, milyen fogászati problémára vár Tőlünk kezelési tanácsot. Ekkor Önnek egy kérdőívet kell kitöltenie, amely személyes adataira, gyógyszerszedési szokásaira, allergiájára és esetleges megbetegedéseire vonatkozó kérdéseket tartalmaz.",
      bullets: [
        "Digitális röntgenfelvétel",
        "Cone Beam CT felvétel",
        "Kiindulási helyzet rögzítése fotókon",
      ],
    },
    en: {
      label: "First visit",
      title: "At our first meeting with you",
      description:
        "At our first meeting we discuss the dental problem you would like our advice on. You will be asked to fill in a questionnaire covering your personal details, medications, allergies and any medical conditions.",
      bullets: [
        "Digital X-ray",
        "Cone Beam CT scan",
        "Recording the starting state in photos",
      ],
    },
  },
  {
    id: "dsd",
    href: "/szolgaltatasok/digitalis-mosolytervezes",
    image: "/szolgaltatasok/dsd/dsd-fotodokumentacio.jpg",
    imageAlt: {
      hu: "Digitális mosolytervezés fotódokumentáció",
      en: "Digital Smile Design photo documentation",
    },
    hu: {
      label: "Digitális mosolytervezés",
      title: "Lássa előre a jövőbeli mosolyát",
      description:
        "A Dentoplant Fogászati Rendelőben a frontfogakra készülő fogpótlásokat és a teljes szájrekonstrukciókat az esztétikai fogászat korszerű irányelveit követve, digitális mosolytervezéssel végezzük. A páciensnek előre be tudjuk mutatni a kezelés várható kimenetelét.",
      bullets: [
        "Standardizált fotódokumentáció",
        "Importálás a DSD szoftverbe",
        "Digitális mosolyelemzés és tervezés",
      ],
    },
    en: {
      label: "Digital Smile Design",
      title: "See your future smile in advance",
      description:
        "At the Dentoplant clinic we create front-tooth restorations and full mouth reconstructions using Digital Smile Design, following the modern principles of cosmetic dentistry. We can show the patient the expected outcome in advance.",
      bullets: [
        "Standardised photo documentation",
        "Import into the DSD software",
        "Digital smile analysis and design",
      ],
    },
  },
  {
    id: "gyermek",
    href: "/szolgaltatasok/gyermekfogaszat",
    image: "/galeria/32-gyermekfogaszat-a-dentoplant-fogaszati-rendeloben.jpg",
    imageAlt: {
      hu: "Gyermekfogászat a Dentoplant Fogászaton",
      en: "Paediatric dentistry at Dentoplant",
    },
    hu: {
      label: "Gyermekfogászat",
      title: "Megelőzéssel a felnőttkori egészséges fogazatért",
      description:
        "A gyermekek rendszeres fogászati ellenőrzését fél évente javasoljuk. A tejfogak épségének megőrzése fontos a fogazat és az állcsontok szimmetrikus fejlődése szempontjából. Korán elvesztett tejfog később fogszabályzással kezelendő problémákhoz vezethet.",
      bullets: [
        "Megelőzés, fluoridos kezelés",
        "Gondos tömések tejfogakon és maradófogakon",
        "Barátságos, gyermekközpontú légkör",
      ],
    },
    en: {
      label: "Paediatric dentistry",
      title: "Prevention for healthy adult teeth",
      description:
        "We recommend regular dental check-ups for children every six months. Preserving the integrity of the baby teeth is important for the symmetrical development of the dentition and the jaws. A baby tooth lost too early can lead to problems later requiring orthodontic treatment.",
      bullets: [
        "Prevention, fluoride treatment",
        "Careful fillings on baby and permanent teeth",
        "A friendly, child-focused atmosphere",
      ],
    },
  },
];

export function ApproachTabs() {
  const locale = useLocale();
  const l = useLocalizedHref();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "Our approach" : "Megközelítésünk",
    title: en
      ? "Individual, predictable care at every visit."
      : "Egyéni, kiszámítható kezelés minden látogatáskor.",
    lead: en
      ? "We build care on three pillars: a thorough first visit, digital smile design and preserving children's teeth."
      : "Három pillérre építjük az ellátást: az alapos első találkozásra, a digitális mosolytervezésre és a gyermekek fogainak megőrzésére.",
    cta: en ? "Book appointment" : "Bejelentkezés",
  };
  return (
    <section className="container-page py-20 md:py-28">
      <Tabs.Root defaultValue="elso-talalkozas" className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t.lead}</p>
          <Tabs.List className="mt-8 flex flex-col gap-2">
            {items.map((it) => (
              <Tabs.Trigger
                key={it.id}
                value={it.id}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-5 py-4 text-left text-base font-medium transition-all data-[state=active]:border-brand-600 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
              >
                <span>{(en ? it.en : it.hu).label}</span>
                <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-data-[state=active]:translate-x-0 group-data-[state=active]:opacity-100" />
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>

        {items.map((it) => {
          const c = en ? it.en : it.hu;
          return (
            <Tabs.Content key={it.id} value={it.id} className="tab-fade">
              <div className="overflow-hidden rounded-3xl border border-border bg-background">
                <div className="relative aspect-[16/8] bg-brand-100">
                  <Image
                    src={it.image}
                    alt={en ? it.imageAlt.en : it.imageAlt.hu}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl text-brand-900 md:text-3xl">{c.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 rounded-xl bg-brand-50/60 p-4">
                        <Check className="h-5 w-5 flex-shrink-0 text-brand-600" />
                        <span className="text-sm font-medium text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={l(it.href)} className="btn-primary mt-8">
                    {t.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </section>
  );
}
