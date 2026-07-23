"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { TonedSection } from "./toned-section";

const faqs = [
  {
    hu: {
      q: "Mire számíthatok az első látogatás során?",
      a: "Az első találkozáskor egy részletes kérdőívet töltünk ki a kórelőzményről, majd fogorvosi vizsgálatra kerül sor. Szükség esetén digitális röntgen vagy Cone Beam CT felvétel készül, és rögzítjük a kiindulási helyzetet fotókon, hogy pontos kezelési tervet tudjunk ajánlani.",
    },
    en: {
      q: "What can I expect during my first visit?",
      a: "At the first meeting we fill in a detailed medical-history questionnaire, followed by a dental examination. If needed, a digital X-ray or Cone Beam CT scan is taken, and we record the starting state in photos so we can recommend an accurate treatment plan.",
    },
  },
  {
    hu: {
      q: "Milyen gyakran érdemes szűrővizsgálatra jönni?",
      a: "Felnőtteknek félévente javasoljuk a kontrollt és a professzionális szájhigiéniát. Gyermekeknél szintén fél éves gyakorisággal érdemes ellenőrzésre jönni, hogy a tejfogak és a kibújó maradófogak épségét figyelemmel tudjuk kísérni.",
    },
    en: {
      q: "How often should I come for a check-up?",
      a: "For adults we recommend a check-up and professional oral hygiene every six months. For children, a six-monthly frequency is also advisable so we can monitor the integrity of the baby teeth and the erupting permanent teeth.",
    },
  },
  {
    hu: {
      q: "Fájdalommentesek a kezelések?",
      a: "Modern, kíméletes technikákat és helyi érzéstelenítést alkalmazunk, hogy a beavatkozások a lehető legkényelmesebbek és fájdalommentesek legyenek. Igény esetén relaxációs lehetőségekről is tudunk egyeztetni.",
    },
    en: {
      q: "Are the treatments painless?",
      a: "We use modern, gentle techniques and local anaesthesia so that procedures are as comfortable and pain-free as possible. On request we can also discuss relaxation options.",
    },
  },
  {
    hu: {
      q: "Mi van, ha félek a fogorvostól?",
      a: "Megértjük, ezért különös figyelmet fordítunk a nyugodt, beszélgetős légkörre. A kezeléseket a páciens igényeihez igazítjuk, hogy fokozatosan, biztonságban érezze magát.",
    },
    en: {
      q: "What if I'm afraid of the dentist?",
      a: "We understand, which is why we pay special attention to a calm, conversational atmosphere. We tailor treatments to the patient's needs so you gradually feel safe.",
    },
  },
  {
    hu: {
      q: "Mennyi ideig tart a fogfehérítés eredménye?",
      a: "A fogfehérítés hatása életmódtól és utógondozástól függően általában 6 hónap és 2 év közötti időszakban marad fenn. Rendszeres szájhigiéniával és kontrollal hosszabb ideig megőrizhető.",
    },
    en: {
      q: "How long do teeth-whitening results last?",
      a: "Depending on lifestyle and aftercare, the effect of teeth whitening usually lasts between 6 months and 2 years. With regular oral hygiene and check-ups it can be preserved for longer.",
    },
  },
  {
    hu: {
      q: "Milyen biztosítást fogadnak el?",
      a: "Magánrendelőként közvetlen biztosítói elszámolást nem végzünk, de számláinkat utólag a legtöbb egészségpénztár és magánbiztosító elfogadja. Erről a részletekről időpontfoglaláskor szívesen tájékoztatjuk.",
    },
    en: {
      q: "What insurance do you accept?",
      a: "As a private clinic we do not offer direct insurance billing, but most health funds and private insurers accept our invoices retrospectively. We are happy to inform you about the details when booking.",
    },
  },
];

export function Faq() {
  const locale = useLocale();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "FAQ" : "Gyakori kérdések",
    title: en
      ? "The most common questions our patients ask."
      : "A leggyakoribb kérdések, amiket pácienseink feltesznek.",
    lead: en
      ? "If you can't find your answer, get in touch — we're happy to help based on your personal needs."
      : "Ha nem találja meg a választ, vegye fel velünk a kapcsolatot — készséggel segítünk a személyes igényei alapján.",
  };
  return (
    <TonedSection className="py-28 md:py-36">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">{t.lead}</p>
        </div>

        <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const c = en ? f.en : f.hu;
            return (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-background"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground transition-colors hover:bg-brand-50/50">
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-sm text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                      {c.q}
                    </span>
                    <Plus className="h-5 w-5 flex-shrink-0 text-brand-600 transition-transform group-data-[state=open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="accordion-content">
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{c.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </TonedSection>
  );
}
