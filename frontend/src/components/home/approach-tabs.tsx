"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const items = [
  {
    id: "elso-talalkozas",
    label: "Első találkozás",
    title: "A pácienseinkkel történő első találkozáskor",
    description:
      "A pácienseinkkel történő első találkozáskor beszéljük meg, milyen fogászati problémára vár Tőlünk kezelési tanácsot. Ekkor Önnek egy kérdőívet kell kitöltenie, amely személyes adataira, gyógyszerszedési szokásaira, allergiájára és esetleges megbetegedéseire vonatkozó kérdéseket tartalmaz.",
    bullets: [
      "Digitális röntgenfelvétel",
      "Cone Beam CT felvétel",
      "Kiindulási helyzet rögzítése fotókon",
    ],
    href: "/kapcsolat",
  },
  {
    id: "dsd",
    label: "Digitális mosolytervezés",
    title: "Lássa előre a jövőbeli mosolyát",
    description:
      "A Dentoplant Fogászati Rendelőben a frontfogakra készülő fogpótlásokat és a teljes szájrekonstrukciókat az esztétikai fogászat korszerű irányelveit követve, digitális mosolytervezéssel végezzük. A páciensnek előre be tudjuk mutatni a kezelés várható kimenetelét.",
    bullets: [
      "Standardizált fotódokumentáció",
      "Importálás a DSD szoftverbe",
      "Digitális mosolyelemzés és tervezés",
    ],
    href: "/szolgaltatasok/digitalis-mosolytervezes",
  },
  {
    id: "gyermek",
    label: "Gyermekfogászat",
    title: "Megelőzéssel a felnőttkori egészséges fogazatért",
    description:
      "A gyermekek rendszeres fogászati ellenőrzését fél évente javasoljuk. A tejfogak épségének megőrzése fontos a fogazat és az állcsontok szimmetrikus fejlődése szempontjából. Korán elvesztett tejfog később fogszabályzással kezelendő problémákhoz vezethet.",
    bullets: [
      "Megelőzés, fluoridos kezelés",
      "Gondos tömések tejfogakon és maradófogakon",
      "Barátságos, gyermekközpontú légkör",
    ],
    href: "/szolgaltatasok/gyermekfogaszat",
  },
];

export function ApproachTabs() {
  return (
    <section className="container-page py-20 md:py-28">
      <Tabs.Root defaultValue="elso-talalkozas" className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
        <div>
          <span className="eyebrow">Megközelítésünk</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-4xl">
            Egyéni, kiszámítható kezelés minden látogatáskor.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Három pillérre építjük az ellátást: az alapos első találkozásra, a digitális
            mosolytervezésre és a gyermekek fogainak megőrzésére.
          </p>
          <Tabs.List className="mt-8 flex flex-col gap-2">
            {items.map((it) => (
              <Tabs.Trigger
                key={it.id}
                value={it.id}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-5 py-4 text-left text-base font-medium transition-all data-[state=active]:border-brand-600 data-[state=active]:bg-brand-600 data-[state=active]:text-white"
              >
                <span>{it.label}</span>
                <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-data-[state=active]:translate-x-0 group-data-[state=active]:opacity-100" />
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>

        {items.map((it) => (
          <Tabs.Content key={it.id} value={it.id} className="tab-fade">
            <div className="overflow-hidden rounded-3xl border border-border bg-background">
              <div className="aspect-[16/8] bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.5),transparent_55%)]" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl text-brand-900 md:text-3xl">{it.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{it.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-xl bg-brand-50/60 p-4">
                      <Check className="h-5 w-5 flex-shrink-0 text-brand-600" />
                      <span className="text-sm font-medium text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={it.href} className="btn-primary mt-8">
                  Bejelentkezés <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
}
