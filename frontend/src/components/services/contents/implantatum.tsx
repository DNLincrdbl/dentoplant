import { Callout, InfoPanel, Lead, ProcessSteps, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function ImplantatumContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody1}</p>
        <p>{c.introBody2}</p>
      </Section>

      <Section title={c.milestonesTitle}>
        <ProcessSteps steps={c.milestones} />
      </Section>

      <InfoPanel title={c.scienceTitle}>
        <p>
          {c.scienceBody}{" "}
          <a
            className="font-semibold text-brand-700 underline-offset-2 hover:underline"
            href="https://www.nobelbiocare.com/en/resource-library/scientific-evidence"
            target="_blank"
            rel="noreferrer"
          >
            nobelbiocare.com
          </a>
          .
        </p>
      </InfoPanel>

      <Callout
        title={c.calloutTitle}
        body={c.calloutBody}
        ctaLabel={c.calloutCta}
        ctaHref={localizeHref("/kapcsolat", locale as Locale)}
      />
    </div>
  );
}

const HU = {
  introTitle: "Kiemelt szakmai színvonal, Nobel® minőség",
  introLead:
    "A Dentoplant Fogászati Rendelőben Szegeden kiemelten magas szakmai színvonalú implantológiai ellátással találkozhat.",
  introBody1: (
    <>
      Mindezt emelt szintű külföldi képzéseken elsajátított korszerű módszerek és a magas minőségű{" "}
      <strong>Nobel®</strong> implantátumok alkalmazása teszi lehetővé. Rendelőnkben Nobel®
      implantátumot használunk, mert <em>a minőség a legjobb döntés és ez a választás egy életre
      szól</em>.
    </>
  ),
  introBody2:
    "A Nobel Biocare a világ vezető implantátumokat gyártó és fejlesztő cége. Implantátum típusok széles palettáját kínálja az egy fog hiánytól a teljes fogatlanság megoldásáig. Rendelőnk számára mégis a legfontosabb az, hogy a Nobel® cég eljárásai a legelső tapasztalatoktól tudományos bizonyítékokkal rendelkeznek. Nevükhöz kapcsolódik, hogy már az 1950-es évektől érdeklődéssel fordultak azon tudományos kísérletek irányába, melyek során a csontba ültetett titán felszín kölcsönhatását vizsgálták — vagyis felfedezték az osszeointegrációt.",
  milestonesTitle: "Mérföldkövek a Nobel® implantátumok fejlesztésében",
  milestones: [
    {
      title: "2000 — TiUnite implantátum felület",
      body: "A Nobel Biocare bevezette a TiUnite felületet, amely támogatja az osszeointegrációs folyamatokat és felgyorsítja a csontosodást. Az összes implantátum típus ezzel a felületi struktúrával kerül forgalomba.",
    },
    {
      title: "2008 — Nobel Active®",
      body: "A Nobel Active® implantátum piacra kerülése. Az új implantátum forma lehetőséget teremt a gyengébb csontminőségű esetek biztonságosabb megoldásához.",
    },
  ],
  scienceTitle: "Tudományos háttér",
  scienceBody:
    "A Nobel Biocare implantátumokra vonatkozó klinikai vizsgálatok eredményei és a kapcsolódó tudományos publikációk megtekinthetők a gyártó hivatalos oldalán:",
  calloutTitle: "Egyetlen foghiánytól a teljes szájrekonstrukcióig",
  calloutBody:
    "Egy alapos vizsgálat és 3D CBCT diagnosztika alapján személyre szabott implantációs tervet készítünk Önnek. A tervezést követően lépésről lépésre haladunk együtt a végeredményig.",
  calloutCta: "Konzultációt kérek",
};

const EN = {
  introTitle: "Outstanding professional standard, Nobel® quality",
  introLead:
    "At the Dentoplant Dental Clinic in Szeged you can receive implantology care of an exceptionally high professional standard.",
  introBody1: (
    <>
      All of this is made possible by modern methods learned in advanced international training and
      the use of high-quality <strong>Nobel®</strong> implants. In our clinic we use Nobel® implants,
      because <em>quality is the best decision and this choice lasts a lifetime</em>.
    </>
  ),
  introBody2:
    "Nobel Biocare is the world's leading implant manufacturer and developer. It offers a wide range of implant types, from a single missing tooth to solutions for complete edentulousness. For our clinic, however, the most important thing is that Nobel®'s procedures have been backed by scientific evidence from the very first experiences. It is associated with their name that, from as early as the 1950s, they took an interest in the scientific experiments studying the interaction of a titanium surface implanted in bone — that is, they discovered osseointegration.",
  milestonesTitle: "Milestones in the development of Nobel® implants",
  milestones: [
    {
      title: "2000 — TiUnite implant surface",
      body: "Nobel Biocare introduced the TiUnite surface, which supports osseointegration processes and speeds up bone formation. All implant types are marketed with this surface structure.",
    },
    {
      title: "2008 — Nobel Active®",
      body: "The launch of the Nobel Active® implant. The new implant shape creates the opportunity for a safer solution in cases of weaker bone quality.",
    },
  ],
  scienceTitle: "Scientific background",
  scienceBody:
    "The results of clinical studies on Nobel Biocare implants and the related scientific publications can be viewed on the manufacturer's official website:",
  calloutTitle: "From a single missing tooth to full oral reconstruction",
  calloutBody:
    "Based on a thorough examination and 3D CBCT diagnostics, we create a personalised implant plan for you. After planning, we proceed step by step together towards the final result.",
  calloutCta: "Request a consultation",
};
