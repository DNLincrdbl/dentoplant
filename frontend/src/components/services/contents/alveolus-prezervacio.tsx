import { BulletList, Callout, Lead, MediaText, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

const BLOG = "/szolgaltatasok/szajsebeszet/blog-alveolus";

export default function AlveolusPrezervacioContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.blogTitle}>
        <Lead>{c.lead}</Lead>
        <p>{c.intro}</p>
        <MediaText image={{ src: `${BLOG}/01.jpg`, alt: c.blogTitle, width: 1999, height: 1521 }}>
          <SubSection title={c.whyTitle}>
            <p>{c.why}</p>
          </SubSection>
        </MediaText>
        <MediaText reverse image={{ src: `${BLOG}/02.jpg`, alt: c.blogTitle, width: 2000, height: 1429 }}>
          <SubSection title={c.afterTitle}>
            <p>{c.after}</p>
          </SubSection>
        </MediaText>
        <MediaText image={{ src: `${BLOG}/03.jpg`, alt: c.blogTitle, width: 2000, height: 1333 }}>
          <SubSection title={c.whatTitle}>
            <p>{c.what}</p>
            <BulletList items={c.prevent} />
          </SubSection>
        </MediaText>
        <SubSection title={c.healTitle}>
          <p>{c.heal}</p>
        </SubSection>
        <SubSection title={c.matTitle}>
          <BulletList items={c.mats} />
          <p>{c.close}</p>
        </SubSection>
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
  blogTitle: "Alveólus prezerváció — foghúzás utáni csontmegőrzés",
  lead:
    "Egyetlen eltávolított fog is látványos csont- és lágyrészvesztést indíthat el. Az alveolus prezerváció a foghúzás helyének azonnali ellátásával ezt a folyamatot időben megállítja.",
  intro:
    "Különösen fontos esztétikailag kiemelt területeken, és ott, ahol implantációt tervezünk. Rendelőnkben több mint 20 éve többféle prezervációs technikát alkalmazunk.",
  whyTitle: "Miért van szükség rá?",
  why:
    "A csont térfogata a terheléstől függ. Fogeltávolítás után heteken belül csontvesztés figyelhető meg, ami az íny magasságát is magával viszi, és megnehezítheti a későbbi implantációt. Ezért már a fogeltávolítás előtt javasoljuk a prezervációt.",
  afterTitle: "Mi történik a fogmederrel foghúzás után?",
  after:
    "A fogat körülvevő „köteges” csont az első hetekben felszívódik. Az esetek felében a gerinc vastagsága csökken jelentősebben, gyakran már az első 3 hónapban. Minimál invazív fogeltávolítással őrizhető meg a csontfal — ez a prezerváció alapja.",
  whatTitle: "Mit nevezünk alveolus prezervációnak?",
  what:
    "A fogeltávolítást követően az alveolust regeneratív támogatással látjuk el, hogy a lehető legtöbb csont és íny megmaradjon. A csontleépülés megelőzhető:",
  prevent: [
    "minimál invazív fogeltávolítással",
    "azonnali implantációval",
    "alveólus prezervációval",
    "tuber graft kötőszövetes szabadlebennyel",
    "csontpótlással",
  ],
  healTitle: "Gyógyulási idő",
  heal: "Az alkalmazott technikától függően 4–6 hónap.",
  matTitle: "Milyen anyagokkal végezzük?",
  mats: [
    "szájpadlásból nyert tuber graft",
    "saját csontforgács",
    "keresztkötésű kollagén membránok",
    "csontpótló anyagok és kollagén graftok",
  ],
  close:
    "A jól megtervezett fogeltávolítás az első lépés a tökéletes végeredmény felé — az implantációs pótlások stabilabbak, az esztétikus pótlások harmonikusabbak lesznek.",
  calloutTitle: "Konzultáció alveólus prezervációról",
  calloutBody: "Már a fogeltávolítás tervezésekor érdemes a csontmegőrzésről beszélni.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  blogTitle: "Socket preservation after extraction",
  lead:
    "Even a single extraction can start visible bone and soft-tissue loss. Socket preservation treats the site immediately to stop that process.",
  intro:
    "It matters most in the aesthetic zone and where an implant is planned. We have used several preservation techniques for more than 20 years.",
  whyTitle: "Why is it needed?",
  why:
    "Bone volume follows load. Weeks after extraction, bone loss appears and takes gum height with it, making later implantation harder. We therefore recommend preservation already when planning the extraction.",
  afterTitle: "What happens to the socket?",
  after:
    "The bundle bone around the tooth resorbs in the first weeks. Ridge width often drops within three months. Minimally invasive extraction preserves the bony wall — the basis of preservation.",
  whatTitle: "What is socket preservation?",
  what:
    "After extraction we support the socket regeneratively so as much bone and gum as possible remains. Bone loss can be limited by:",
  prevent: [
    "minimally invasive extraction",
    "immediate implantation",
    "socket preservation",
    "a tuberosity connective-tissue graft",
    "bone grafting",
  ],
  healTitle: "Healing time",
  heal: "Typically 4–6 months, depending on technique.",
  matTitle: "Which materials?",
  mats: [
    "tuberosity connective-tissue graft from the palate",
    "autogenous bone chips",
    "cross-linked collagen membranes",
    "bone substitutes and collagen grafts",
  ],
  close:
    "A well-planned extraction is the first step toward a stable implant and a harmonious restoration.",
  calloutTitle: "Consultation on socket preservation",
  calloutBody: "Bone preservation is worth discussing when the extraction is planned.",
  calloutCta: "Book now",
};
