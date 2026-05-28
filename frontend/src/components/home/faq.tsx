"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Mire számíthatok az első látogatás során?",
    a: "Az első találkozáskor egy részletes kérdőívet töltünk ki a kórelőzményről, majd fogorvosi vizsgálatra kerül sor. Szükség esetén digitális röntgen vagy Cone Beam CT felvétel készül, és rögzítjük a kiindulási helyzetet fotókon, hogy pontos kezelési tervet tudjunk ajánlani.",
  },
  {
    q: "Milyen gyakran érdemes szűrővizsgálatra jönni?",
    a: "Felnőtteknek félévente javasoljuk a kontrollt és a professzionális szájhigiéniát. Gyermekeknél szintén fél éves gyakorisággal érdemes ellenőrzésre jönni, hogy a tejfogak és a kibújó maradófogak épségét figyelemmel tudjuk kísérni.",
  },
  {
    q: "Fájdalommentesek a kezelések?",
    a: "Modern, kíméletes technikákat és helyi érzéstelenítést alkalmazunk, hogy a beavatkozások a lehető legkényelmesebbek és fájdalommentesek legyenek. Igény esetén relaxációs lehetőségekről is tudunk egyeztetni.",
  },
  {
    q: "Mi van, ha félek a fogorvostól?",
    a: "Megértjük, ezért különös figyelmet fordítunk a nyugodt, beszélgetős légkörre. A kezeléseket a páciens igényeihez igazítjuk, hogy fokozatosan, biztonságban érezze magát.",
  },
  {
    q: "Mennyi ideig tart a fogfehérítés eredménye?",
    a: "A fogfehérítés hatása életmódtól és utógondozástól függően általában 6 hónap és 2 év közötti időszakban marad fenn. Rendszeres szájhigiéniával és kontrollal hosszabb ideig megőrizhető.",
  },
  {
    q: "Milyen biztosítást fogadnak el?",
    a: "Magánrendelőként közvetlen biztosítói elszámolást nem végzünk, de számláinkat utólag a legtöbb egészségpénztár és magánbiztosító elfogadja. Erről a részletekről időpontfoglaláskor szívesen tájékoztatjuk.",
  },
];

export function Faq() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">Gyakori kérdések</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">
            A leggyakoribb kérdések, amiket pácienseink feltesznek.
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            Ha nem találja meg a választ, vegye fel velünk a kapcsolatot — készséggel segítünk a
            személyes igényei alapján.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-background"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground transition-colors hover:bg-brand-50/50">
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                  <Plus className="h-5 w-5 flex-shrink-0 text-brand-600 transition-transform group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
                <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
