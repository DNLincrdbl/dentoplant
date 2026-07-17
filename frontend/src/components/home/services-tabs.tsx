"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLocale, useLocalizedHref } from "@/lib/i18n/context";

const services = [
  {
    id: "fogagy",
    href: "/szolgaltatasok/fogagybetegseg-kezelese",
    hu: {
      label: "Fogágybetegség kezelése",
      title: "Korai felismerés, regeneratív kezelés",
      description:
        "A fogágybetegség nem csak az íny megbetegedése, hanem a fogakat körülvevő ínyt, csontot és a parodontális ligamentumokat együttesen érintő, kiterjedtebb gyulladás. A korai felismerés a kulcs.",
      bullets: [
        "Részletes parodontális státusz felmérés",
        "Nem-sebészi és sebészi parodontális kezelés",
        "Regeneratív és csontpótló eljárások",
      ],
    },
    en: {
      label: "Periodontal disease",
      title: "Early detection, regenerative treatment",
      description:
        "Periodontal disease is not only a gum condition, but a more extensive inflammation affecting the gum, bone and periodontal ligaments surrounding the teeth together. Early detection is the key.",
      bullets: [
        "Detailed periodontal status assessment",
        "Non-surgical and surgical periodontal treatment",
        "Regenerative and bone-grafting procedures",
      ],
    },
  },
  {
    id: "fogbeultetes",
    href: "/szolgaltatasok/fogbeultetes",
    hu: {
      label: "Fogbeültetés",
      title: "Implantációs fogpótlás, kompromisszumok nélkül",
      description:
        "A fogbeültetés a hiányzó fogak pótlásának olyan módszere, melynek során a specialista fogorvos implantátumot ültet be az állcsontba. A gyógyulás és a fogpótlás elkészítését követően az elvesztett fogak szerepét tartósan átveszi.",
      bullets: [
        "Sebészeti sablonnal végzett, pontos behelyezés",
        "Egyedi, csavarozható Nobel Procera™ pótlások",
        "Csontpótlás és arcüreg emelés (sinus lift) szükség esetén",
      ],
    },
    en: {
      label: "Dental implants",
      title: "Implant-borne restoration, without compromise",
      description:
        "Dental implantation is a method of replacing missing teeth in which the specialist places an implant into the jawbone. After healing and once the restoration is complete, it permanently takes over the role of the lost teeth.",
      bullets: [
        "Precise placement with a surgical guide",
        "Custom, screw-retained Nobel Procera™ restorations",
        "Bone grafting and sinus lift where needed",
      ],
    },
  },
  {
    id: "fogszabalyozas",
    href: "/szolgaltatasok/fogszabalyozas",
    hu: {
      label: "Professzionális fogszabályozás",
      title: "Életkortól függetlenül, személyre szabva",
      description:
        "Neves, újszegedi rendelőnkben életkortól függetlenül, személyre szabott megoldást biztosítunk a makulátlan, rendezett mosoly elérésére.",
      bullets: [
        "Esztétikus, kerámia és láthatatlan fogszabályozók",
        "Felnőtt korban is biztonsággal végezhető",
        "Komplex, fogpótlással kombinált tervezés",
      ],
    },
    en: {
      label: "Professional orthodontics",
      title: "Personalised, at any age",
      description:
        "At our respected clinic in Újszeged we provide personalised solutions for a flawless, well-ordered smile, regardless of age.",
      bullets: [
        "Aesthetic, ceramic and invisible braces",
        "Safe to perform in adulthood too",
        "Complex planning combined with restorations",
      ],
    },
  },
  {
    id: "mikroszkopos",
    href: "/szolgaltatasok/mikroszkopos-fogaszat",
    hu: {
      label: "Mikroszkópos kezelések",
      title: "A saját fog megmentése a cél",
      description:
        "A fogászatban az utóbbi évtized tendenciája jól mutatja, hogy a pácienseink számára a saját fog megmentése egyre fontosabb cél. A mikroszkópos kezelések a legapróbb részleteknél is támogatnak minket.",
      bullets: [
        "Mikroszkópos gyökérkezelés",
        "Esztétikus, élethű fogtömések",
        "Komplex, fogmegtartó kezelések",
      ],
    },
    en: {
      label: "Microscope treatments",
      title: "Saving your own tooth is the goal",
      description:
        "The trend of the past decade in dentistry clearly shows that saving one's own tooth is an increasingly important goal for our patients. Microscope-assisted treatments support us down to the finest details.",
      bullets: [
        "Microscope-assisted root canal treatment",
        "Aesthetic, lifelike fillings",
        "Complex, tooth-preserving treatments",
      ],
    },
  },
];

export function ServicesTabs() {
  const locale = useLocale();
  const l = useLocalizedHref();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "Our services" : "Szolgáltatásaink",
    title: en ? "Comprehensive dental care in Újszeged" : "Komplex fogászati ellátás Újszegeden",
    lead: en
      ? "You will find the Dentoplant Dental and Implantology Clinic on the classic promenade of Fő fasor in Újszeged. Our colleagues work in a kind, cheerful community that loves its work."
      : "A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden a Fő fasor klasszikus sétányán találja. Munkatársaink kedves, életvidám, munkájukat szerető közösségben dolgoznak.",
    more: en ? "Learn more" : "Bővebben",
  };
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{t.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t.lead}</p>
        </div>

        <Tabs.Root defaultValue="fogagy" className="mt-12">
          <Tabs.List className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-border bg-background p-2">
            {services.map((s) => (
              <Tabs.Trigger
                key={s.id}
                value={s.id}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-all data-[state=active]:bg-brand-600 data-[state=active]:text-white"
              >
                {(en ? s.en : s.hu).label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {services.map((s) => {
            const c = en ? s.en : s.hu;
            return (
              <Tabs.Content key={s.id} value={s.id} className="tab-fade mt-10">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 via-brand-200 to-brand-400">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.6),transparent_55%)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-brand-900 md:text-4xl">{c.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.description}</p>
                    <ul className="mt-6 space-y-3">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-sm text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={l(s.href)} className="btn-ghost mt-8">
                      {t.more} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </div>
    </section>
  );
}
