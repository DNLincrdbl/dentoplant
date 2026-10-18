import { BulletList, Callout, Lead, MediaText, NumberedList, PhotoRow, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

const REGI = "/szolgaltatasok/szajsebeszet/regi";
const BLOG = "/szolgaltatasok/szajsebeszet/blog-fogeltavolitas";

export default function SzajsebeszetContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.lead}</Lead>
        <p>{c.body1}</p>
        <p>{c.body2}</p>
      </Section>

      <PhotoRow
        images={[
          { src: `${REGI}/01.jpg`, alt: c.alt, width: 1024, height: 576 },
          { src: `${REGI}/02.jpg`, alt: c.alt, width: 1024, height: 576 },
          { src: `${REGI}/03.jpg`, alt: c.alt, width: 1024, height: 576 },
        ]}
      />

      <Section title={c.blogTitle}>
        <Lead>{c.blogLead}</Lead>
        <p>{c.blogIntro}</p>
        <MediaText
          image={{ src: `${BLOG}/01.jpg`, alt: c.blogTitle, width: 2000, height: 1310 }}
        >
          <SubSection title={c.simpleTitle}>
            <p>{c.simpleLead}</p>
            <BulletList items={c.simpleItems} />
            <p>{c.simpleClose}</p>
          </SubSection>
        </MediaText>
        <MediaText
          reverse
          image={{ src: `${BLOG}/02.jpg`, alt: c.blogTitle, width: 1706, height: 1137 }}
        >
          <SubSection title={c.whenSurgTitle}>
            <p>{c.whenSurgLead}</p>
            <BulletList items={c.whenSurgItems} />
            <p>{c.whenSurgClose}</p>
          </SubSection>
        </MediaText>
        <SubSection title={c.duringTitle}>
          <p>{c.duringLead}</p>
          <BulletList items={c.duringItems} />
          <p>{c.duringClose}</p>
        </SubSection>
        <SubSection title={c.whyTitle}>
          <NumberedList items={c.whyItems} />
        </SubSection>
        <p>{c.blogClose}</p>
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
  alt: "Egyszerű és műtéti fogeltávolítás",
  title: "Egyszerű és műtéti fogeltávolítás",
  lead:
    "A fogeltávolítások többségében elegendő egy egyszerű műszerrel kibillenteni a beteg fogat, viszont a mélyebben fekvő gyökerek, elő nem tört fogak csak szájsebészeti kisműtéttel távolíthatóak el.",
  body1: (
    <>
      Ezeket a beavatkozásokat <em>feltárásból végzett fogeltávolításnak</em> nevezzük. A feltárást
      helyi érzéstelenítésben végezzük: felnyitjuk az ínyt, hogy jól hozzáférjünk a foghoz, majd a
      lebenyt varratokkal zárjuk.
    </>
  ),
  body2:
    "Az otthoni gondos utókezeléssel, a műtött terület hűtésével és a műtét utáni tanácsok betartásával sokat tehet azért, hogy kellemesebb legyen a gyógyulási időszak.",
  blogTitle: "Mikor van szükség műtéti fogeltávolításra?",
  blogLead:
    "A fogeltávolítás sok páciens számára egyet jelent a „foghúzással”. Bár ez gyakran így történik, nem minden fog távolítható el ilyen egyszerűen.",
  blogIntro:
    "Vannak helyzetek, amikor a hagyományos foghúzás már nem elegendő, és műtéti fogeltávolításra van szükség — előre megtervezetten, sebészi körülmények között.",
  simpleTitle: "Mikor elegendő a hagyományos fogeltávolítás?",
  simpleLead: "Az egyszerű fogeltávolítás akkor jöhet szóba, ha a fog:",
  simpleItems: [
    "teljesen előtört",
    "megfelelő mennyiségű ép foganyaggal rendelkezik",
    "gyökerei nem rendellenes lefutásúak",
    "nincs komoly gyulladásban a környező csont vagy íny",
  ],
  simpleClose:
    "Ilyenkor speciális eszközökkel, érzéstelenítés mellett viszonylag gyorsan és kíméletesen el tudjuk távolítani a fogat. Az egyszerű foghúzást fogorvos is el tudja végezni; a sebészi feltárásból végzett eltávolítás szájsebész feladata.",
  whenSurgTitle: "Amikor sebészi fogeltávolításra van szükség",
  whenSurgLead: "Gyakran előfordul, hogy a fog:",
  whenSurgItems: [
    "letört, és már csak a gyökere maradt a csontban",
    "gyökérkezelt, ezért ridegebb, törékenyebb",
    "szövete felpuhult, nem lehet fogóval megtartani",
    "erősen szuvas, alig maradt belőle foganyag",
    "részben vagy teljesen csontban rekedt",
    "görbe, elágazó gyökerekkel rendelkezik, vagy krónikus gyulladás veszi körül",
  ],
  whenSurgClose:
    "Ezekben az esetekben a hagyományos foghúzás nemcsak nehéz, hanem kockázatos is lehet: a fog eltörhet, a környező csont sérülhet, vagy a gyulladás tovább terjedhet.",
  duringTitle: "Mi történik a műtéti fogeltávolítás során?",
  duringLead:
    "Precíz sebészeti eljárás: a fogat vagy részeit feltárásból, helyi érzéstelenítésben vesszük ki. A cél, hogy kíméletesen, kontrolláltan távolítsuk el, és a szöveteket megőrizzük.",
  duringItems: [
    "szükség esetén kis metszést ejtünk az ínyen",
    "a fog körüli csontot minimális mértékben feltárjuk",
    "a fogat vagy gyökeret akár több részre osztva távolítjuk el (disszekció)",
    "a műtéti területet alaposan kitisztítjuk, és szükség szerint varrattal zárjuk",
  ],
  duringClose:
    "A kíméletes, tervezett eltávolítás megőrzi a fogmeder falait és az íny kontúrját — ideális alap a későbbi pótláshoz, implantátumhoz.",
  whyTitle: "Miért jobb tervezetten eltávolítani egy fogat?",
  whyItems: [
    "Kevesebb gyulladás, jobb gyógyulás, ha a fogat a súlyos gyulladás előtt távolítjuk el.",
    "Csontmegőrzés: implantációra készülve a csontállomány minél jobban megmarad.",
    "Kevesebb fájdalom nyugodt, előre egyeztetett körülmények között.",
    "Bizonyos esetekben a fogeltávolítással egy időben csontpótlás is történhet.",
  ],
  blogClose:
    "Rendelőnkben a nehezebb, problémás fogak eltávolítására specializálódtunk. Ha bizonytalan abban, hogy egy problémás fog megtartható-e, keressen bennünket.",
  calloutTitle: "Aneszteziológus közreműködésével, kényelmesen",
  calloutBody:
    "Nagyobb műtéti beavatkozásnál érdemes konzultálni aneszteziológus szakorvosunkkal. Az Ön fájdalommentes kezelése a legfontosabb.",
  calloutCta: "Kérjen konzultációt",
};

const EN = {
  alt: "Simple and surgical tooth extraction",
  title: "Simple and surgical tooth extraction",
  lead:
    "Most extractions only need the tooth loosened with a simple instrument, but deeper roots and unerupted teeth require minor oral surgery.",
  body1: (
    <>
      These are called <em>surgical extractions with flap elevation</em>, performed under local
      anaesthesia: we open the gum for access, then close with sutures.
    </>
  ),
  body2:
    "Careful home aftercare, cooling and following post-operative advice make healing more comfortable.",
  blogTitle: "When is surgical extraction needed?",
  blogLead:
    "Many people equate extraction with a simple ‘pull’. That is often true — but not always.",
  blogIntro:
    "Sometimes conventional extraction is not enough, and a planned surgical removal is the safer option.",
  simpleTitle: "When is a simple extraction enough?",
  simpleLead: "When the tooth:",
  simpleItems: [
    "has fully erupted",
    "has enough sound structure",
    "has reasonably straight roots",
    "is not surrounded by serious inflammation",
  ],
  simpleClose:
    "Then we can remove it relatively quickly under anaesthesia. Simple extraction can be done by a dentist; surgical exposure is an oral surgeon’s task.",
  whenSurgTitle: "When surgery is needed",
  whenSurgLead: "Often the tooth:",
  whenSurgItems: [
    "has fractured, leaving only the root in bone",
    "has been root-treated and is brittle",
    "is too soft to grasp",
    "is heavily decayed",
    "is partially or fully retained in bone",
    "has curved, branching roots or chronic inflammation around it",
  ],
  whenSurgClose:
    "In these cases a conventional pull can break the tooth, damage bone or spread inflammation.",
  duringTitle: "What happens during surgical extraction?",
  duringLead:
    "A precise procedure: the tooth or parts of it are removed via a flap under local anaesthesia, aiming to spare tissue.",
  duringItems: [
    "a small gum incision if needed",
    "minimal exposure of surrounding bone",
    "sectioning the tooth or root if required",
    "cleaning the site and suturing as needed",
  ],
  duringClose:
    "A planned, gentle extraction preserves the socket walls and gum contour — a better base for later restoration or an implant.",
  whyTitle: "Why remove a tooth on a planned basis?",
  whyItems: [
    "Less inflammation and better healing if we act before a severe flare-up.",
    "Better bone preservation if an implant is planned.",
    "Less pain in a calm, scheduled setting.",
    "Bone grafting can sometimes be done at the same visit.",
  ],
  blogClose:
    "We specialise in difficult extractions. If you are unsure whether a problem tooth can be saved, please contact us.",
  calloutTitle: "Comfortably, with an anaesthesiologist",
  calloutBody:
    "For larger procedures it is worth discussing sedation options. Pain-free treatment comes first.",
  calloutCta: "Request a consultation",
};
