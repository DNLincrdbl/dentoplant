"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "fogagy",
    label: "Fogágybetegség kezelése",
    title: "Korai felismerés, regeneratív kezelés",
    description:
      "A fogágybetegség nem csak az íny megbetegedése, hanem a fogakat körülvevő ínyt, csontot és a parodontális ligamentumokat együttesen érintő, kiterjedtebb gyulladás. A korai felismerés a kulcs.",
    bullets: [
      "Részletes parodontális státusz felmérés",
      "Nem-sebészi és sebészi parodontális kezelés",
      "Regeneratív és csontpótló eljárások",
    ],
    href: "/szolgaltatasok/fogagybetegseg-kezelese",
  },
  {
    id: "fogbeultetes",
    label: "Fogbeültetés",
    title: "Implantációs fogpótlás, kompromisszumok nélkül",
    description:
      "A fogbeültetés a hiányzó fogak pótlásának olyan módszere, melynek során a specialista fogorvos implantátumot ültet be az állcsontba. A gyógyulás és a fogpótlás elkészítését követően az elvesztett fogak szerepét tartósan átveszi.",
    bullets: [
      "Sebészeti sablonnal végzett, pontos behelyezés",
      "Egyedi, csavarozható Nobel Procera™ pótlások",
      "Csontpótlás és arcüreg emelés (sinus lift) szükség esetén",
    ],
    href: "/szolgaltatasok/fogbeultetes",
  },
  {
    id: "fogszabalyozas",
    label: "Professzionális fogszabályozás",
    title: "Életkortól függetlenül, személyre szabva",
    description:
      "Neves, újszegedi rendelőnkben életkortól függetlenül, személyre szabott megoldást biztosítunk a makulátlan, rendezett mosoly elérésére.",
    bullets: [
      "Esztétikus, kerámia és láthatatlan fogszabályozók",
      "Felnőtt korban is biztonsággal végezhető",
      "Komplex, fogpótlással kombinált tervezés",
    ],
    href: "/szolgaltatasok/fogszabalyozas",
  },
  {
    id: "mikroszkopos",
    label: "Mikroszkópos kezelések",
    title: "A saját fog megmentése a cél",
    description:
      "A fogászatban az utóbbi évtized tendenciája jól mutatja, hogy a pácienseink számára a saját fog megmentése egyre fontosabb cél. A mikroszkópos kezelések a legapróbb részleteknél is támogatnak minket.",
    bullets: [
      "Mikroszkópos gyökérkezelés",
      "Esztétikus, élethű fogtömések",
      "Komplex, fogmegtartó kezelések",
    ],
    href: "/szolgaltatasok/mikroszkopos-fogaszat",
  },
];

export function ServicesTabs() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Szolgáltatásaink</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">
            Komplex fogászati ellátás Újszegeden
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden a Fő fasor klasszikus
            sétányán találja. Munkatársaink kedves, életvidám, munkájukat szerető közösségben dolgoznak.
          </p>
        </div>

        <Tabs.Root defaultValue="fogagy" className="mt-12">
          <Tabs.List className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-border bg-background p-2">
            {services.map((s) => (
              <Tabs.Trigger
                key={s.id}
                value={s.id}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-all data-[state=active]:bg-brand-600 data-[state=active]:text-white"
              >
                {s.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {services.map((s) => (
            <Tabs.Content key={s.id} value={s.id} className="tab-fade mt-10">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 via-brand-200 to-brand-400">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.6),transparent_55%)]" />
                </div>
                <div>
                  <h3 className="font-display text-3xl text-brand-900 md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="btn-ghost mt-8">
                    Bővebben <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}
