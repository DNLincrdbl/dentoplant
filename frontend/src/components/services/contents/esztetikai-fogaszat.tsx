import { BulletList, Callout, Lead, MediaText, Section } from "../ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";
import photos from "@/lib/service-photos.json";

export default function EsztetikaiFogaszatContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  const imgs = photos.esztetika.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: `${c.alt} (${i + 1})`,
  }));
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
        <p>{c.introBody2}</p>
      </Section>

      {imgs[2] && (
        <MediaText image={imgs[2]}>
          <p>{c.introLead}</p>
        </MediaText>
      )}

      <Section title={c.listTitle}>
        <BulletList items={c.list} />
      </Section>

      <GalleryGrid images={imgs} labels={c.galleryLabels} />

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
  alt: "Esztétikai fogászat a Dentoplant rendelőben",
  galleryLabels: { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
  introTitle: "Smile Makeover — a mosoly esztétikája",
  introLead: "Az esztétikai fogászat napjainkra már nem egy esztétikus tömés készítéséről szól.",
  introBody:
    "Az esztétikai fogászat egy igényes, összetett szemlélet, mely több szakterület együttműködésével foglalja magába a szép fogszínt, az ideális és archoz illő fogformát, a fémmentes fogpótlásokat és a tökéletes illesztéseket. A fehér fogak esztétikáját összehangoljuk az íny lefutásának korrekciójával — a mosoly esztétikáján mindezek harmóniáját értjük.",
  introBody2: (
    <>
      Az esztétikai fogászat egy komprehenzív szemlélet, ennek megfelelően a kezelés lépéseit és
      elemeit egyénre szabva alakítjuk ki. <strong>Smile Makeover</strong> — az esztétikai fogászat
      segítségével a Dentoplant Fogászati Rendelőben mosolya megújul.
    </>
  ),
  listTitle: "Esztétikai fogászati beavatkozások a Dentoplantban",
  list: [
    "Fotózás és mosolytervezés",
    "Fogszín és fogforma feltérképezése",
    "Mock-up készítése",
    "Szájhigiéniai kezelések, Prophy Mate „sópolírozás”",
    "Fogfehérítés",
    "Magas minőségű esztétikus fotopolimerizációs tömések",
    "Kerámia héjak",
    "Cirkónium koronák, hidak",
    "Magas esztétikájú Procera® koronák, hidak",
    "Inlay — nagy precizitású esztétikus tömések",
    "Inlay préskerámiából",
    "Procera® Nobel® teljes kerámia inlay",
    "Teljes kerámia felépítmények",
    "Ínyplasztikák",
    "Finishing — összetett befejező fázis",
  ],
  calloutTitle: "Tervezzük meg együtt az új mosolyát",
  calloutBody:
    "A digitális mosolytervezéssel (DSD) már a kezelés elején bemutatható a várható végeredmény — kockázat nélkül, lépésről lépésre.",
  calloutCta: "Konzultációt kérek",
};

const EN = {
  alt: "Cosmetic dentistry at the Dentoplant clinic",
  galleryLabels: { close: "Close", prev: "Previous image", next: "Next image" },
  introTitle: "Smile Makeover — the aesthetics of a smile",
  introLead: "Aesthetic dentistry today is no longer about making a single aesthetic filling.",
  introBody:
    "Aesthetic dentistry is a demanding, complex approach that, through the cooperation of several specialties, encompasses a beautiful tooth colour, an ideal tooth shape suited to the face, metal-free restorations and perfect fit. We harmonise the aesthetics of white teeth with correcting the contour of the gums — by the aesthetics of a smile we mean the harmony of all of these.",
  introBody2: (
    <>
      Aesthetic dentistry is a comprehensive approach, so we tailor the steps and elements of the
      treatment to the individual. <strong>Smile Makeover</strong> — with aesthetic dentistry, your
      smile is renewed at the Dentoplant Dental Clinic.
    </>
  ),
  listTitle: "Aesthetic dentistry procedures at Dentoplant",
  list: [
    "Photography and smile design",
    "Mapping the tooth colour and shape",
    "Making a mock-up",
    "Oral hygiene treatments, Prophy Mate “salt polishing”",
    "Teeth whitening",
    "High-quality aesthetic light-cured (photopolymer) fillings",
    "Ceramic veneers",
    "Zirconia crowns and bridges",
    "Highly aesthetic Procera® crowns and bridges",
    "Inlay — high-precision aesthetic restorations",
    "Inlay made of pressed ceramic",
    "Procera® Nobel® full ceramic inlay",
    "Full ceramic build-ups",
    "Gingivoplasty (gum contouring)",
    "Finishing — the complex final phase",
  ],
  calloutTitle: "Let's design your new smile together",
  calloutBody:
    "With Digital Smile Design (DSD), the expected result can be shown at the very start of the treatment — risk-free, step by step.",
  calloutCta: "Request a consultation",
};
