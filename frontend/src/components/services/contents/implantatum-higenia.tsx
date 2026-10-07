import { BulletList, Callout, CertPanel, Lead, MediaText, Section } from "../ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";
import photos from "@/lib/service-photos.json";
import { GBT_CERT } from "./iranyitott-biofilm-kezeles";

export default function ImplantHigeniaContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  const imgs = photos.implant_higenia.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: `${c.alt} (${i + 1})`,
  }));

  return (
    <div className="space-y-12">
      <CertPanel>{en ? GBT_CERT.en : GBT_CERT.hu}</CertPanel>

      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      {imgs[0] && (
        <MediaText image={imgs[0]}>
          <p>{c.prep}</p>
        </MediaText>
      )}

      <Section title={c.afterTitle}>
        <p>{c.afterBody}</p>
        <BulletList items={c.afterItems} />
      </Section>

      {imgs[3] && (
        <MediaText reverse image={imgs[3]}>
          <p>{c.tools}</p>
        </MediaText>
      )}

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
  alt: "Implantátum higiéniai kezelés a Dentoplant rendelőben",
  introTitle: "Az implantátumok korszerű gondozása",
  introLead:
    "Az implantátumos fogpótlás hosszú távú sikeressége jelentős mértékben függ a megfelelő szájhigiéniától. Egészséges fogágy és tiszta fogak nélkül sem tartós esztétikai eredmény, sem jól funkcionáló implantátum nem tartható fenn.",
  introBody:
    "Már a fogbeültetés tervezésekor kiértékeljük a szájhigiénia szintjét. A dentálhigiénikus a szájsebésszel együtt készíti elő a pácienst, és betanítja a szükséges egyéni szájápolást. Rendelőnkben évente több száz implantátum mellett egyedülálló gondozási programot tartunk fenn.",
  prep: "Az implantációt csak plakkmentes, parodontológiai szempontból szanált szájban érdemes elvégezni. A hiányos szájhigiénia hajlamosít az implantátum körüli gyulladásokra.",
  afterTitle: "Utókövetés és fenntartó terápia",
  afterBody:
    "A garancia csak akkor érvényes, ha a páciens visszajár a megadott kontrollokra és implantátum-higiéniai kezelésekre. Az implantátumokat tilos hagyományos fém eszközökkel tisztítani.",
  afterItems: [
    "Speciális teflonbevonatú / karbonszálas EMS PIEZON® PI MAX fejek",
    "Az íny állapotának rendszeres ellenőrzése (periimplantitis korai jelei)",
    "Röntgenes követés az első években, majd a klinikai kép szerint",
    "Egyéni szájhigiénés instruálás hidakhoz, pótlásokhoz, implantátumokhoz",
  ],
  tools:
    "Az implantátumra készített fogpótlások alaposabb gondozást igényelnek, mint gondolnánk. A hagyományos fém eszközök sérülést okozhatnak az implantátum nyaki felszínén, ami a lepedék lerakódását segíti.",
  galleryLabels: { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
  calloutTitle: "Implantátum-gondozás időpont",
  calloutBody: "Speciális eszközökkel, GBT protokoll szerint — a hosszú távú sikerért.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  alt: "Implant hygiene treatment at the Dentoplant clinic",
  introTitle: "Modern implant maintenance",
  introLead:
    "Long-term success of implant restorations depends heavily on oral hygiene. Without a healthy periodontium and clean teeth, neither lasting aesthetics nor a well-functioning implant can be maintained.",
  introBody:
    "We assess oral hygiene already when planning the implant. The hygienist prepares the patient with the oral surgeon and teaches home care. Alongside hundreds of implants a year we run a dedicated maintenance programme.",
  prep: "Implantation should only be done in a plaque-free, periodontally sanitised mouth. Poor hygiene predisposes to peri-implant inflammation.",
  afterTitle: "Follow-up and supportive therapy",
  afterBody:
    "The warranty applies only if you attend the scheduled reviews and implant-hygiene visits. Implants must not be cleaned with conventional metal instruments.",
  afterItems: [
    "Special PTFE / carbon-fibre EMS PIEZON® PI MAX tips",
    "Regular gum checks for early peri-implantitis",
    "Radiographic follow-up in the first years, then as clinically indicated",
    "Personalised hygiene instruction for bridges, restorations and implants",
  ],
  tools:
    "Restorations on implants need more thorough care than most people expect. Metal instruments can scratch the implant neck and favour plaque.",
  galleryLabels: { close: "Close", prev: "Previous image", next: "Next image" },
  calloutTitle: "Book implant maintenance",
  calloutBody: "Special instruments, GBT protocol — for long-term success.",
  calloutCta: "Book now",
};
