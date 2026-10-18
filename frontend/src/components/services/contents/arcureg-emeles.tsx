import { Callout, Lead, MediaText, PhotoRow, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

const REGI = "/szolgaltatasok/szajsebeszet/regi";
const BLOG = "/szolgaltatasok/szajsebeszet/blog-arcureg";

export default function ArcuregEmelesContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.blogTitle}>
        <Lead>{c.lead}</Lead>
        <MediaText image={{ src: `${BLOG}/01.jpg`, alt: c.blogTitle, width: 1112, height: 856 }}>
          <p>{c.blog1}</p>
        </MediaText>
        <MediaText reverse image={{ src: `${BLOG}/02.jpg`, alt: c.blogTitle, width: 1333, height: 2000 }}>
          <p>{c.blog2}</p>
        </MediaText>
        <PhotoRow
          images={[
            { src: `${BLOG}/03.jpg`, alt: c.blogTitle, width: 1000, height: 660 },
            { src: `${BLOG}/04.jpg`, alt: c.blogTitle, width: 1001, height: 662 },
            { src: `${BLOG}/05.jpg`, alt: c.blogTitle, width: 622, height: 424 },
          ]}
        />
      </Section>

      <Section title={c.caseTitle}>
        <MediaText image={{ src: `${REGI}/09.jpg`, alt: c.case1, width: 1024, height: 576 }}>
          <p>
            <strong>1.</strong> {c.case1}
          </p>
        </MediaText>
        <MediaText reverse image={{ src: `${REGI}/11.jpg`, alt: c.case2, width: 1024, height: 576 }}>
          <p>
            <strong>2.</strong> {c.case2}
          </p>
        </MediaText>
        <MediaText image={{ src: `${REGI}/13.jpg`, alt: c.case3, width: 1024, height: 576 }}>
          <p>
            <strong>3.</strong> {c.case3}
          </p>
        </MediaText>
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
  blogTitle: "Speciális csontpótlás a felső állcsonton — arcüreg emelés",
  lead:
    "Az arcüreg alapjának megvastagítása helyi érzéstelenítésben. A hiányzó felső őrlők helyére gyakran azért nem lehet implantátumot tenni, mert az arcüreg felőli csont nagyon vékony.",
  blog1:
    "A zárt (Summers) sinus lift az implantátum fúratán keresztül emel, a nyitott eljárásnál az oldalfalon ablakot képzünk, a nyálkahártyát felemeljük, és csontpótlóval töltjük az üreget.",
  blog2:
    "A gyógyulás 6–9 hónap. A CBCT mérések alapján döntjük el, mikor elég a csont az implantátumok stabil behelyezéséhez.",
  caseTitle: "Egy eset lépései",
  case1:
    "Kiindulási röntgen arcüreg emelés előtt. A felső állcsonton mindkét oldalon hiányoznak a molárisok; implantáció csak csontpótlással lehetséges.",
  case2:
    "Mindkét oldali arcüreg emelés és gerinc csontpótlás után megnövekedett a csont mennyisége. A CBCT alapján elegendő csont képződött az implantátumokhoz.",
  case3: "Az elkészült híd implantátumokkal. Ezt a fogbeültetést arcüreg csontpótlása nélkül nem lehetett volna elvégezni.",
  calloutTitle: "Arcüreg emelés konzultáció",
  calloutBody: "Zárt vagy nyitott sinus lift — CBCT-tervezéssel, prémium csontpótlóval.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  blogTitle: "Special grafting in the upper jaw — sinus lift",
  lead:
    "Thickening the sinus floor under local anaesthesia. Upper molars often cannot be replaced with implants because the bone toward the sinus is too thin.",
  blog1:
    "A closed (Summers) lift is done through the implant osteotomy; an open lift creates a lateral window, raises the membrane and fills the space with graft.",
  blog2:
    "Healing takes 6–9 months. CBCT measurements tell us when there is enough bone for stable implants.",
  caseTitle: "A case, step by step",
  case1:
    "Starting X-ray before sinus lift. Both upper molar regions are missing; implants are only possible after grafting.",
  case2:
    "After bilateral sinus lift and ridge grafting the bone volume has increased. CBCT confirmed enough bone for implants.",
  case3: "The finished implant bridge. This placement would not have been possible without sinus grafting.",
  calloutTitle: "Sinus-lift consultation",
  calloutBody: "Closed or open sinus lift — planned on CBCT, with premium graft material.",
  calloutCta: "Book now",
};
