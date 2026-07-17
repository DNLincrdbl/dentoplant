import { BulletList, Callout, Lead, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function ElsoTalalkozasContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody[0]}</p>
        <p>{c.introBody[1]}</p>
        <p>{c.introBody[2]}</p>
      </Section>

      <Section title={c.examsTitle}>
        <BulletList items={c.exams} />
      </Section>

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
  introTitle: "Az első találkozás",
  introLead:
    "A pácienseinkkel történő első találkozáskor beszéljük meg, milyen fogászati problémára vár Tőlünk kezelési tanácsot.",
  introBody: [
    "Ekkor Önnek egy kérdőívet kell kitöltenie, amely személyes adataira, gyógyszerszedési szokásaira, allergiájára és esetleges megbetegedéseire vonatkozó kérdéseket tartalmaz. A pontos kitöltésre különös gondot kell fordítania, mert először csak ennek segítségével tudjuk a kockázatokat felmérni és Önt a megfelelő előkészítésben részesíteni.",
    "Továbbiakban egy fogorvosi vizsgálatra kerül sor, melynek során rögzítésre kerül a kiindulási státusz. Az első konzílium szükséges része egy korszerű, digitális panoráma röntgen felvétel is, amelynek segítségével további fontos információkat kapunk a fogak, állcsontok és lágyrészek állapotáról, valamint a kiindulási fotó készítése. Műtéti tervezéskor további vizsgálatok is szükségesek, mint Cone Beam CT felvétel és vérkép.",
    "Minden új pácienssel való első találkozás egyben egy szájhigiéniás állapotfelmérés is, melynek során áttekintjük az íny és fogkő pillanatnyi állapotát, melyet fotókon rögzítünk és be is mutatjuk, mint kiindulási állapotot. Minden alkalommal szájüregi rákszűrést is végzünk. Szájhigiéniás tanácsadást és saját adottságaihoz igazított egyéni szájhigiéniás programot adunk.",
  ],
  examsTitle: "A pontos diagnózishoz szükséges vizsgálatok",
  exams: [
    "Digitális röntgenfelvétel",
    "Cone Beam CT felvétel",
    "Tasakmérések, berni parodontológiai státusz felvétele",
    "Fogágytasakokból vett baktériumok tenyésztési eredménye",
    "Kiindulási helyzet rögzítése fotókon",
    "Vérkép",
    "Tanulmányi minták készítése",
  ],
  calloutTitle: "Különös figyelmet szentelünk a szájhigiéniának",
  calloutBody: (
    <>
      Munkánk hosszú távú eredményességének feltétele, hogy pácienseink elsajátítsák az esetüknek
      megfelelő fogmosási technikát, melyet egyéni szájhigiéniás programunk valósít meg. Az eredmény:
      egészséges fogak és ép, egészséges íny. Szaktanácsadást és személyre szóló kezelést kínálunk
      Önnek.
    </>
  ),
  calloutCta: "Bejelentkezés",
};

const EN = {
  introTitle: "The first meeting",
  introLead:
    "At the first meeting with our patients, we discuss which dental problem you would like treatment advice for.",
  introBody: [
    "At this point you fill out a questionnaire with questions about your personal details, medication habits, allergies and any illnesses. Please take particular care to fill it in accurately, because at first this is the only way we can assess the risks and provide you with the appropriate preparation.",
    "Next, a dental examination takes place, during which the starting status is recorded. A necessary part of the first consultation is a modern, digital panoramic X-ray, which gives us further important information about the condition of the teeth, jawbones and soft tissues, along with an initial photo. For surgical planning, further examinations are also needed, such as a Cone Beam CT scan and a blood test.",
    "Every first meeting with a new patient is also an oral hygiene assessment, during which we review the current condition of the gums and tartar, record it in photos and present it as the starting condition. On every occasion we also perform an oral cancer screening. We provide oral hygiene advice and an individual oral hygiene program tailored to your own needs.",
  ],
  examsTitle: "Examinations needed for an accurate diagnosis",
  exams: [
    "Digital X-ray",
    "Cone Beam CT scan",
    "Pocket measurements, recording the Bern periodontal status",
    "Culture results of bacteria taken from periodontal pockets",
    "Recording the starting situation in photos",
    "Blood test",
    "Making study models",
  ],
  calloutTitle: "We pay special attention to oral hygiene",
  calloutBody: (
    <>
      A condition for the long-term success of our work is that our patients learn the tooth-brushing
      technique appropriate to their case, which our individual oral hygiene program provides. The
      result: healthy teeth and intact, healthy gums. We offer expert advice and personalised care.
    </>
  ),
  calloutCta: "Book now",
};
