import { BulletList, Callout, Lead, MediaText, PhotoRow, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

const REGI = "/szolgaltatasok/szajsebeszet/regi";
const BLOG = "/szolgaltatasok/szajsebeszet/blog-csontpotlas";

export default function SzajsebeszetiCsontpotlasContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.blogTitle}>
        <Lead>{c.lead}</Lead>
        <p>{c.intro}</p>
        <MediaText image={{ src: `${BLOG}/01.jpg`, alt: c.blogTitle, width: 2000, height: 1464 }}>
          <SubSection title={c.whatTitle}>
            <p>{c.what}</p>
          </SubSection>
        </MediaText>
        <MediaText reverse image={{ src: `${BLOG}/02.jpg`, alt: c.blogTitle, width: 1376, height: 1851 }}>
          <SubSection title={c.whenTitle}>
            <BulletList items={c.when} />
          </SubSection>
        </MediaText>
        <SubSection title={c.techTitle}>
          <p>{c.tech}</p>
          <BulletList items={c.techs} />
        </SubSection>
        <SubSection title={c.matTitle}>
          <p>{c.mat}</p>
        </SubSection>
      </Section>

      <Section title={c.diagramTitle}>
        <PhotoRow
          images={[
            { src: `${REGI}/06.jpg`, alt: c.diagramTitle, width: 1024, height: 576 },
            { src: `${REGI}/07.jpg`, alt: c.diagramTitle, width: 1024, height: 576 },
            { src: `${REGI}/08.jpg`, alt: c.diagramTitle, width: 1024, height: 576 },
          ]}
        />
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
  blogTitle: "Amit a fogászati csontpótlásról tudni érdemes",
  lead:
    "A csontpótlás a modern szájsebészet egyik legfontosabb módszere: implantáció előtt a hiányzó csontállomány pótlására, és fogágybetegség kezelése során a tartószövetek regenerációjára.",
  intro:
    "Minden klinikai helyzet más. A megfelelő eredményhez személyre szabott műtéti technika és gondosan megválasztott csontpótló anyag kell.",
  whatTitle: "Mit nevezünk csontpótlásnak?",
  what:
    "Regeneratív szájsebészeti beavatkozás az elveszített vagy elégtelen csontállomány helyreállítására. Biológiai alapja az irányított csontregeneráció (GBR): csontpótló anyagok és membránok olyan környezetet teremtenek, amelyben a saját csont újból képződhet.",
  whenTitle: "Mikor van szükség csontpótlásra?",
  when: [
    "Fogbeültetés előtt — horizontális és/vagy vertikális csontnövelés",
    "Esztétikai célú csontpótlás hídpótlás előtt a front területen",
    "Arcüregemelés (sinus lift) a felső őrlők régiójában",
    "Gyulladás vagy ciszta után visszamaradt csonthiány",
    "Gyökércsúcs-rezekció után a csontüreg kitöltése",
    "Fogágybetegség kezelése során, ha a defektus formája megfelelő",
  ],
  techTitle: "Gyakori technikák",
  tech:
    "A technikát CBCT alapján, a csonthiány típusától (vertikális, horizontális, kombinált) függően választjuk.",
  techs: [
    "laterális augmentáció, akár szimultán implantátummal",
    "„sausage” technikák",
    "csontblokkal történő csontpótlás",
    "zárt vagy nyitott arcüreg emelés",
  ],
  matTitle: "Milyen anyagokkal?",
  mat:
    "Kisebb defektusoknál saját csontforgácsot keverünk osszeokonduktív xenografttal (pl. Nobel Biocare Creos Xenogain™), felszívódó vagy titánnal megerősített membránokkal. Nagyobb defektusnál csontblokkot veszünk, jellemzően az alsó állcsont retromoláris régiójából.",
  diagramTitle: "Csontpótlás kisebb csonthiánynál implantátum mellett",
  calloutTitle: "Csontpótlás konzultáció",
  calloutBody: "CBCT-alapú, egyéni terv — prémium csontpótlókkal és membránokkal.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  blogTitle: "What is worth knowing about dental bone grafting",
  lead:
    "Bone grafting is a key oral-surgery method: rebuilding bone before implants, and regenerating supporting tissues in periodontal care.",
  intro: "Every case is different. Technique and graft material are chosen individually.",
  whatTitle: "What is bone grafting?",
  what:
    "A regenerative procedure to restore lost or insufficient bone. It is based on guided bone regeneration (GBR): substitutes and membranes create a space in which the patient’s own bone can form again.",
  whenTitle: "When is it needed?",
  when: [
    "Before implant placement — horizontal and/or vertical gain",
    "Aesthetic grafting before a bridge in the front",
    "Sinus lift in the upper molar region",
    "Bone defects after inflammation or cyst removal",
    "Filling the cavity after apicoectomy",
    "In periodontal treatment, if the defect shape allows it",
  ],
  techTitle: "Common techniques",
  tech: "We choose based on CBCT and whether the defect is vertical, horizontal or combined.",
  techs: [
    "lateral augmentation, with or without simultaneous implant",
    "sausage techniques",
    "block grafting",
    "closed or open sinus lift",
  ],
  matTitle: "Materials",
  mat:
    "For smaller defects we mix autogenous chips with an osteoconductive xenograft and membranes. Larger defects may need a bone block, often from the retromolar mandible.",
  diagramTitle: "Grafting a smaller defect next to an implant",
  calloutTitle: "Bone-grafting consultation",
  calloutBody: "An individual CBCT-based plan with premium grafts and membranes.",
  calloutCta: "Book now",
};
