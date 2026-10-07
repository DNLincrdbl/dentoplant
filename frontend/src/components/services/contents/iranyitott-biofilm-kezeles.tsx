import { Callout, CertPanel, Lead, MediaText, ProcessSteps, Section } from "../ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";
import photos from "@/lib/service-photos.json";

const GBT_CERT_HU =
  "A Dentoplant Fogászati és Implantológiai Rendelő dentálhigiéniai részlege nemzetközi GBT tanúsítvánnyal rendelkezik. Rendelőnkben a Swiss Dental Academy által minősített, kiemelt szájhigiéniai rendelés működik. Ez a nemzetközi elismerés igazolja, hogy a legmagasabb szakmai színvonalon és a legmodernebb svájci protokoll – a Guided Biofilm Therapy (GBT) – alapján dolgozunk.";
const GBT_CERT_EN =
  "The dental hygiene unit of the Dentoplant clinic is internationally GBT-certified. We run a Swiss Dental Academy–qualified, dedicated oral hygiene practice, working to the most advanced Swiss protocol: Guided Biofilm Therapy (GBT).";

export const GBT_CERT = { hu: GBT_CERT_HU, en: GBT_CERT_EN };

export default function GbtContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  const imgs = photos.gbt.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: `${c.alt} (${i + 1})`,
  }));

  return (
    <div className="space-y-12">
      <CertPanel>{en ? GBT_CERT.en : GBT_CERT.hu}</CertPanel>
      <p className="text-lg font-medium text-brand-800">{c.tagline}</p>

      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      {imgs[1] && (
        <MediaText image={imgs[1]}>
          <p>{c.biofilm}</p>
        </MediaText>
      )}

      <Section title={c.stepsTitle}>
        <ProcessSteps steps={c.steps} />
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
  alt: "Irányított biofilm kezelés (GBT) a Dentoplant rendelőben",
  tagline: "A GBT szájhigiéniás kezelés egy új dimenzió a fogkőeltávolítás területén.",
  introTitle: "Guided Biofilm Therapy — 8 lépésben",
  introLead:
    "A szegedi Dentoplant Fogászati Rendelőben évek óta sikeresen használjuk az irányított biofilm terápiát (Guided Biofilm Therapy® – GBT®), a szájhigiéniás kezelések legkorszerűbb generációját.",
  introBody:
    "A nyolc lépésből álló protokoll bőven túlmutat a hagyományos fogkőeltávolításon: célja az íny feletti és íny alatti biofilm rendkívül alapos, kíméletes és fájdalommentes eltávolítása, ezáltal a szájüreg egyensúlyának fenntartása.",
  biofilm:
    "A biofilm a fogak és fogpótlások felületén megtapadó, baktériumokban gazdag lepedék. Ha nem távolítjuk el, érik, a baktériumprofil változik, majd elmeszesedik — így alakul ki a fogkő. A GBT a biofilmet 100%-ban célozza, a gyógyulás kulcsa.",
  stepsTitle: "Hogyan jutunk el 8 lépésben a tökéletes szájhigiénia felé?",
  steps: [
    {
      title: "Vizsgálat, felmérés",
      body: "Áttekintjük a fogak, implantátumok és lágyrészek állapotát, és felmérjük a fogszuvasodás kockázatát. Szájhigiénikusaink és fogorvosaink naponta együttműködnek.",
    },
    {
      title: "Plakkfestés — a biofilm láthatóvá tétele",
      body: "EMS Biofilm Discloser™ festékkel megjelenítjük a szabad szemmel nem látható biofilmet. Két színtónusban válik láthatóvá — ez a kezelés kulcsa és tanulási lehetőség is.",
    },
    {
      title: "Motiválás, tanulás, instruálás",
      body: "Tükörben, a pácienssel közösen értékeljük ki, hol kell alaposabban tisztítani, és személyre szabott fogmosási technikát, eszközöket javaslunk.",
    },
    {
      title: "Tisztítás Airflow®-val",
      body: "Az Airflow plus® 14 µm-es eritritol por kíméletesen tünteti el a biofilmet és a korai fogkövet, íny felett és 4 mm-es tasakmélységig.",
    },
    {
      title: "Mélytisztítás Perioflow®-val",
      body: "Szükség esetén 4–9 mm mélységig tisztítjuk a tasakokat — kíméletes előkészítés, nem a sebészi kezelés helyettesítése.",
    },
    {
      title: "Ultrahangos fogkőeltávolítás PIEZON technológiával",
      body: "A lineáris vibráció intelligens visszajelzéssel csak akkor dolgozik, amikor fogkővel találkozik — No-Pain technológia, az ép fogfelszín kímélése.",
    },
    {
      title: "Ellenőrzés",
      body: "Közösen ellenőrizzük a tükörben az eredményt. A kezelést GBT Air Foam hab pakolás zárja.",
    },
    {
      title: "Recall — visszarendelés",
      body: "A kezelőorvos 4, 6 vagy 12 havonta ismételt szájhigiéniai kezelést ír elő. Kérésre telefonon emlékeztetünk.",
    },
  ],
  galleryLabels: { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
  calloutTitle: "Kérjen időpontot GBT kezelésre",
  calloutBody: "Kíméletes, fájdalommentes szájhigiénia a svájci protokoll szerint.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  alt: "Guided Biofilm Therapy (GBT) at the Dentoplant clinic",
  tagline: "GBT oral hygiene treatment is a new dimension in tartar removal.",
  introTitle: "Guided Biofilm Therapy — in 8 steps",
  introLead:
    "At Dentoplant in Szeged we have used Guided Biofilm Therapy® (GBT®) for years — the most advanced generation of oral hygiene treatments.",
  introBody:
    "The eight-step protocol goes well beyond conventional scaling: it thoroughly, gently and painlessly removes supra- and subgingival biofilm to keep the mouth in balance.",
  biofilm:
    "Biofilm is the bacteria-rich plaque that sticks to teeth and restorations. Left in place it matures and calcifies into tartar. GBT targets 100% of the biofilm.",
  stepsTitle: "How do we reach perfect oral hygiene in 8 steps?",
  steps: [
    { title: "Assessment", body: "We review teeth, implants and soft tissues, and assess caries risk." },
    { title: "Disclosing the biofilm", body: "EMS Biofilm Discloser™ makes invisible plaque visible in two colour tones." },
    { title: "Motivation and instruction", body: "Together we review where cleaning must be more thorough and tailor technique and tools." },
    { title: "Airflow® cleaning", body: "14 µm erythritol powder removes biofilm and early tartar, including pockets up to 4 mm." },
    { title: "Perioflow® deep cleaning", body: "If needed we clean pockets 4–9 mm deep — gentle preparation, not a substitute for surgery." },
    { title: "PIEZON ultrasonic scaling", body: "Linear vibration with No-Pain technology works only when it meets tartar, sparing sound enamel." },
    { title: "Check", body: "We review the result together. GBT Air Foam finishes the visit." },
    { title: "Recall", body: "Your dentist sets 4-, 6- or 12-month hygiene intervals. We can remind you by phone." },
  ],
  galleryLabels: { close: "Close", prev: "Previous image", next: "Next image" },
  calloutTitle: "Book a GBT appointment",
  calloutBody: "Gentle, painless oral hygiene following the Swiss protocol.",
  calloutCta: "Book now",
};
