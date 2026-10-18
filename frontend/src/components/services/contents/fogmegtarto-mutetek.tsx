import { Callout, Lead, MediaText, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

const BLOG = "/szolgaltatasok/szajsebeszet/blog-fogmegtarto";

export default function FogmegtartoMutetekContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.lead}</Lead>
        <p>{c.intro}</p>
        <MediaText image={{ src: `${BLOG}/01.jpg`, alt: c.title, width: 2000, height: 1335 }}>
          <SubSection title={c.whenTitle}>
            <p>{c.when}</p>
          </SubSection>
        </MediaText>
        <MediaText reverse image={{ src: `${BLOG}/02.jpg`, alt: c.resTitle, width: 1999, height: 1216 }}>
          <SubSection title={c.resTitle}>
            <p>{c.res}</p>
          </SubSection>
        </MediaText>
        <MediaText image={{ src: `${BLOG}/03.jpg`, alt: c.hemiTitle, width: 800, height: 532 }}>
          <SubSection title={c.hemiTitle}>
            <p>{c.hemi}</p>
          </SubSection>
        </MediaText>
        <SubSection title={c.ampTitle}>
          <p>{c.amp}</p>
        </SubSection>
        <SubSection title={c.regTitle}>
          <p>{c.reg}</p>
        </SubSection>
        <p>{c.close}</p>
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
  title: "Speciális fogmegtartó kezelésekről",
  lead:
    "A fogmegtartó kezelések célja a fogak megőrzése ahelyett, hogy eltávolításra ítélnénk őket. Itt a fogmegtartó szájsebészet csúcsát vesszük sorra: nagyításban, több szakterület együttműködésével.",
  intro:
    "Az alkalmassági kritériumok együttállása ritka, de hetente végzünk sikeres beavatkozásokat. Minden fog előtt rizikóanalízis: stabilitás, fogágy, csont, okklúzió.",
  whenTitle: "Mikor lehet szükség rá?",
  when:
    "Korábban gyökérkezelt fog gyökércsúcsa körüli gyulladás, ciszta, repedés, rezorpció, betört eszköz, vagy többgyökerű fog egyik gyökerének gyulladása, miközben a többi rész egészséges.",
  resTitle: "Gyökércsúcs-rezekció (apicectomia)",
  res:
    "A gyökércsúcsot és a körülötte lévő fertőzött szövetet eltávolítjuk, majd retrográd gyökértöméssel zárunk (MTA, Biodentine), mikroszkópos nagyításban. Feltétel a falálló, csúcsig érő gyökértömés; ha kell, előtte újragyökérkezelés. 3D endoCT-n elemezzük a fogat.",
  hemiTitle: "Hemiszekció (fogfelezés)",
  hemi:
    "A gyökérkezelt fogat két részre osztjuk, csak az egyik fele kerül eltávolításra. Leggyakrabban alsó molárisnál, ha csak az egyik gyökér érintett. A megmaradt felet koronázzuk.",
  ampTitle: "Gyökéramputáció",
  amp:
    "Többgyökerű fognál csak egy gyökeret távolítunk el, a korona és a többi gyökér megmarad. A megmaradó gyökér üvegszálas megerősítése és a korona ellátása kulcsfontosságú.",
  regTitle: "Regeneratív és parodontális sebészet",
  reg:
    "Csont- és ínyszövet regenerációja, nyitott kürett Emdogain® vagy hyaDENT BG mellett, csonttasakok és furkációk pótlása, recessziósebészet. Részletek a fogágybetegség kezelése menüpont alatt.",
  close:
    "A sikeres beavatkozáshoz team kell: diagnózis, CBCT, endodonciai háttér, mikroszkóp, utókezelés és szájhigiénia.",
  calloutTitle: "Fogmegtartó műtét konzultáció",
  calloutBody: "Rizikóanalízis után döntünk: van-e értelme a komplex megtartásnak hosszú távon.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  title: "Special tooth-preserving surgery",
  lead:
    "These procedures aim to keep teeth rather than extract them — the peak of tooth-preserving oral surgery, under magnification, with several specialties working together.",
  intro:
    "The full set of criteria is uncommon, yet we perform successful cases every week. Each tooth starts with a risk analysis: stability, periodontium, bone, occlusion.",
  whenTitle: "When is it needed?",
  when:
    "Inflammation, cyst, crack, resorption or a broken instrument around a previously root-treated apex, or disease of one root of a multi-rooted tooth while the rest is healthy.",
  resTitle: "Apicoectomy",
  res:
    "We remove the root tip and infected tissue, then place a retrograde filling (MTA, Biodentine) under the microscope. A wall-tight, full-length root filling is required; retreatment first if needed. We analyse the tooth on 3D endoCT.",
  hemiTitle: "Hemisection",
  hemi:
    "The root-treated tooth is split and only one half is removed — typically a lower molar with one diseased root. The remaining half is crowned.",
  ampTitle: "Root amputation",
  amp:
    "Only one root of a multi-rooted tooth is removed; the crown and remaining roots stay. Fibre reinforcement and a proper crown are essential.",
  regTitle: "Regenerative and periodontal surgery",
  reg:
    "Bone and gum regeneration, open-flap curettage with Emdogain® or hyaDENT BG, grafting of pockets and furcations, recession surgery. See periodontal treatment for details.",
  close:
    "Success needs a team: diagnosis, CBCT, endodontics, microscope, aftercare and hygiene.",
  calloutTitle: "Consultation on tooth-preserving surgery",
  calloutBody: "After a risk analysis we decide whether complex retention makes long-term sense.",
  calloutCta: "Book now",
};
