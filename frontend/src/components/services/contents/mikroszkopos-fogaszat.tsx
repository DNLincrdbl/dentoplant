import {
  BulletList,
  Callout,
  Figure,
  Lead,
  MediaText,
  NumberedList,
  Section,
  SubSection,
} from "../ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";
import photos from "@/lib/service-photos.json";

export default function MikroszkoposFogaszatContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  const work = photos.micro_munka.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: `${c.altWork} (${i + 1})`,
  }));
  const cases = photos.micro_esetek.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: `${c.altCase} (${i + 1})`,
  }));

  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
        <p>{c.introZeiss}</p>
      </Section>

      {work[4] && (
        <MediaText image={work[4]}>
          <p>{c.workLead}</p>
        </MediaText>
      )}

      <Section title={c.whyTitle}>
        <p>{c.whyLead}</p>
        <BulletList items={c.whyItems} />
        <p>{c.whyBody}</p>
      </Section>

      {work[0] && <Figure {...work[0]} />}

      <Section title={c.useTitle}>
        <SubSection title={c.use1Title}>
          <p>{c.use1Lead}</p>
          <BulletList items={c.use1Items} />
          <p>{c.use1Body}</p>
        </SubSection>
        <SubSection title={c.use2Title}>
          <p>{c.use2Lead}</p>
          <BulletList items={c.use2Items} />
        </SubSection>
        <SubSection title={c.use3Title}>
          <p>{c.use3Body}</p>
        </SubSection>
        <SubSection title={c.use4Title}>
          <BulletList items={c.use4Items} />
        </SubSection>
        <SubSection title={c.use5Title}>
          <p>{c.use5Body}</p>
        </SubSection>
        <SubSection title={c.use6Title}>
          <BulletList items={c.use6Items} />
        </SubSection>
      </Section>

      <GalleryGrid images={work.slice(1, 7)} labels={c.galleryLabels} />

      <Section title={c.duringTitle}>
        <MediaText reverse image={work[3] ?? work[1]!}>
          <p>{c.duringBody}</p>
        </MediaText>
      </Section>

      <Section title={c.caseTitle}>
        <Lead>{c.caseLead}</Lead>
        <SubSection title={c.case1Title}>
          <p>{c.case1Body}</p>
        </SubSection>
        <SubSection title={c.case2Title}>
          <p>{c.case2Body}</p>
        </SubSection>
        <SubSection title={c.case3Title}>
          <p>{c.case3Body}</p>
        </SubSection>
        <p>{c.caseClose}</p>
        <GalleryGrid images={cases} labels={c.galleryLabels} />
      </Section>

      <Section title={c.workTitle}>
        <GalleryGrid images={work.slice(7)} labels={c.galleryLabels} />
      </Section>

      <Section title={c.summaryTitle}>
        <p>{c.summaryLead}</p>
        <NumberedList items={c.summaryItems} />
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
  introTitle: "Mikroszkópos fogászati kezelések – amikor a legapróbb részlet is számít",
  introLead:
    "A modern fogászat célja ma már nem az, hogy egy sérült vagy elhalt fogat mielőbb eltávolítsunk és pótoljunk — épp ellenkezőleg: minél több saját foganyagot szeretnénk megmenteni.",
  introBody:
    "Ennek egyik legfontosabb eszköze az operációs mikroszkóp, amely akár 25-szörös nagyítást ad, így olyan részleteket is látunk, amelyek szabad szemmel és nagyítószemüveggel sem lennének észrevehetők.",
  introZeiss:
    "A Dentoplant Fogászati Rendelőben a világ egyik vezető mikroszkópját, a Zeiss Extaro 300 készüléket használjuk.",
  workLead:
    "A kezelés fekvő helyzetben, gumilepedős izolálással (kofferdam) történik. A mikroszkóp képe monitoron is látható.",
  altWork: "Mikroszkópos fogászat munka közben a Dentoplant rendelőben",
  altCase: "Mikroszkópos kezelés esete — betört műszer eltávolítása",
  whyTitle: "Miért fontos a nagyítás a fogászatban?",
  whyLead:
    "A nagyítás előnye fogászati kezelések során vitathatatlan, különösen gyökérkezelés során, hisz a sikeresség sokszor tizedmillimétereken múlik. A nagyítás azért nélkülözhetetlen, mert:",
  whyItems: [
    "sokkal pontosabban látjuk a fog apró részleteit",
    "könnyebben elkerülhetők a komplikációk",
    "mivel könnyebben észlelhető a fog belső anatómiája, gyorsítja a kezelés menetét",
    "biztonságosabb és kiszámíthatóbb a beavatkozás",
  ],
  whyBody:
    "Míg egy nagyítószemüveg általában 2,5–6-szoros nagyítást ad, a mikroszkóp 16–25-szörösen közelíti meg a területet, így jobb vizuális kontroll mellett tudunk dolgozni. Intenzív, árnyékmentes fénye minden részletet jól láthatóvá tesz. Extra funkciója a fluoreszcens világítás: a szuvas részek más színben jelennek meg, így gyorsan elkülöníthetők az ép foganyagtól.",
  useTitle: "Mire használjuk a mikroszkópot?",
  use1Title: "1. Gyökérkezeléshez",
  use1Lead: "Különösen hasznos, ha:",
  use1Items: [
    "nagyon görbe vagy szűk a gyökércsatorna",
    "extra csatornát, esetleg mélyebben lévő elágazásokat kell megkeresni",
    "korábbi kezelés miatt megmunkálási hiba, akadály alakult ki",
    "újragyökérkezelésre van szükség (nem megfelelő — többnyire nem csúcsig érő és nem falálló — gyökértömések cseréje, majd korrekt megmunkálás és ellátás)",
  ],
  use1Body:
    "A mikroszkóp ilyenkor segít, hogy pontosan lássuk a csatornarendszert, és minimális foganyag-eltávolítással oldjuk meg a problémát. Rendelőnk fogad speciálisan gyökérkezelés céljára beküldött pácienseket külső beküldő kollégáktól.",
  use2Title: "2. Betört gyökérkezelő tű eltávolításához",
  use2Lead:
    "Előfordulhat, hogy egy gyökérkezelő tű eltörik a fogban, jellemzően szűk és görbe csatornák esetében. A mikroszkóp segítségével:",
  use2Items: [
    "fel tudjuk kutatni a darabot",
    "biztonságosan körbepreparáljuk",
    "speciális technikákkal el tudjuk távolítani — ez mikroszkóp nélkül lehetetlen lenne",
  ],
  use3Title: "3. Gyökércsúcs-műtéthez (resectio)",
  use3Body: "A nagyítás lehetővé teszi, hogy sebészi beavatkozásoknál is precízen dolgozzunk.",
  use4Title: "4. Diagnosztikához",
  use4Items: [
    "kezdődő fogszuvasodások",
    "repedésvonalak",
    "tömések, restaurátumok illeszkedési hibái",
    "gyökércsatorna-rendellenességek",
    "bizonyos íny- és szájnyálkahártya-elváltozások",
  ],
  use5Title: "5. Precíziós fogpótlások előkészítéséhez",
  use5Body:
    "Tömések, inlayek, héjak előkészítésekor a széli záródás sokkal finomabban kialakítható nagyítás mellett.",
  use6Title: "6. Parodontológiai (fogágy-) műtéteknél",
  use6Items: [
    "fogmegtartó tasakkezeléseknél ellenőrizhető a csontfal tisztasága",
    "ciszták eltávolításánál a ciszta eltávolításának tökéletessége megítélhető",
    "ínyrecesszió műtéteknél",
    "mikrosebészeti varratok készítésekor",
  ],
  duringTitle: "Mi történik egy mikroszkópos kezelés során?",
  duringBody:
    "A kezelés kényelmes, biztonságos és teljesen fájdalommentes. A páciens fekvő helyzetben van, így relaxáltabb, stabilabb testhelyzetben zajlik a beavatkozás, és jobb a rálátásunk a területre. A fogat gumilepedővel (kofferdam) izoláljuk, ami védi a pácienst és tisztán tartja a területet. A mikroszkóp képe monitoron is látható, így a páciens láthatja, mi zajlik a kezelés során.",
  caseTitle: "Betört műszer eltávolítása — egy valódi eset",
  caseLead:
    "Dr. Sebők Eszter kollégánk egy gyakori, mégis speciális helyzetet mutat be: hogyan távolítható el egy korábban betört gyökérkezelő tű, amely miatt a fog begyulladt és fájdalmat okozott.",
  case1Title: "1. Kiindulási állapot",
  case1Body:
    "A páciens erős fájdalommal érkezett. Fogorvosa megkezdte a gyökérkezelést, azonban a szűk csatornák átjárhatatlansága miatt a kezelést nem tudta folytatni, és szakellátásra referálta. A röntgenen jól látszott, hogy egy betört tű maradt a kisőrlő egyik csatornájában, ami lehetetlenné tette a fertőtlenítést.",
  case2Title: "2. Mikroszkópos feltárás",
  case2Body:
    "A megfelelő izolálás után mikroszkóp alatt eltávolítottuk az ideiglenes tömést — már ekkor látszódott az eszköz az egyik csatornában. A tűdarabot körkörösen ultrahangos rezegtetéssel elkezdtük mozgatni, majd kiforgattuk a csatornából. A kezelés ezzel nem ért véget: a mikroszkópos nagyítás mellett feltártuk a nehezen megmunkálható, szűk csatornákat is.",
  case3Title: "3. Eredmény",
  case3Body:
    "A tűdarab sikeresen kijött, amit a kontrollröntgen is igazolt, valamint mindkét csatorna átjárhatóvá vált teljes hosszon.",
  caseClose: "Ez az eset jól mutatja, hogy a mikroszkóp sokszor a fog megmentésének kulcsa.",
  workTitle: "Munka közben",
  summaryTitle: "Összegzés",
  summaryLead: "A mikroszkópos fogászat ma az egyik legmodernebb és legpontosabb technológia, amely:",
  summaryItems: [
    "növeli a kezelések sikerességét",
    "segít elkerülni a felesleges fogeltávolítást",
    "kíméletes és biztonságos",
    "jobb élményt ad a páciensnek",
  ],
  galleryLabels: { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
  calloutTitle: "Mikroszkópos kezelésre van szüksége?",
  calloutBody:
    "A Dentoplant Fogászati Rendelőben minden feltétel adott ahhoz, hogy a lehető legmagasabb színvonalon végezzük a mikroszkópos kezeléseket. További információkért, személyre szabott tanácsadásért keressen bennünket bizalommal.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  introTitle: "Microscope dentistry — when the smallest detail matters",
  introLead:
    "The aim of modern dentistry is no longer to extract and replace a damaged or dead tooth as soon as possible — on the contrary: we want to save as much of the patient's own tooth structure as possible.",
  introBody:
    "One of the most important tools for this is the operating microscope, which provides up to 25× magnification, so we can see details that would not be visible to the naked eye or even with loupes.",
  introZeiss:
    "At the Dentoplant Dental Clinic we use one of the world's leading microscopes, the Zeiss Extaro 300.",
  workLead:
    "Treatment takes place with the patient lying down, isolated with a rubber dam. The microscope image is also visible on a monitor.",
  altWork: "Microscope dentistry in progress at the Dentoplant clinic",
  altCase: "Microscope treatment case — removal of a broken instrument",
  whyTitle: "Why does magnification matter in dentistry?",
  whyLead:
    "The advantage of magnification during dental treatment is beyond dispute, especially in root canal treatment, where success often depends on tenths of a millimetre. Magnification is indispensable because:",
  whyItems: [
    "we see the tiny details of the tooth much more accurately",
    "complications are easier to avoid",
    "the internal anatomy of the tooth is easier to detect, which speeds up treatment",
    "the procedure is safer and more predictable",
  ],
  whyBody:
    "While loupes typically give 2.5–6× magnification, the microscope approaches the area at 16–25×, so we can work with better visual control. Its intense, shadow-free light makes every detail clearly visible. An extra function is fluorescent lighting: carious areas appear in a different colour, so they can quickly be distinguished from healthy tooth structure.",
  useTitle: "What do we use the microscope for?",
  use1Title: "1. Root canal treatment",
  use1Lead: "It is especially useful when:",
  use1Items: [
    "the root canal is very curved or narrow",
    "an extra canal or deeper branches need to be found",
    "a previous treatment has left a preparation error or obstruction",
    "retreatment is needed (replacing inadequate root fillings that often do not reach the apex and are not wall-tight, then proper preparation and filling)",
  ],
  use1Body:
    "The microscope then helps us see the canal system precisely and solve the problem with minimal removal of tooth structure. Our clinic also accepts patients referred specifically for root canal treatment by external colleagues.",
  use2Title: "2. Removing a broken root-canal instrument",
  use2Lead:
    "A root-canal file can break inside the tooth, typically in narrow, curved canals. With the microscope we can:",
  use2Items: [
    "locate the fragment",
    "prepare around it safely",
    "remove it with special techniques — this would be impossible without a microscope",
  ],
  use3Title: "3. Root-end surgery (resection)",
  use3Body: "Magnification also allows us to work precisely in surgical procedures.",
  use4Title: "4. Diagnostics",
  use4Items: [
    "early caries",
    "crack lines",
    "misfit of fillings and restorations",
    "root-canal anomalies",
    "certain gum and oral-mucosa changes",
  ],
  use5Title: "5. Preparing precision restorations",
  use5Body:
    "When preparing fillings, inlays and veneers, the marginal seal can be formed much more finely under magnification.",
  use6Title: "6. Periodontal (gum) surgery",
  use6Items: [
    "in tooth-preserving pocket treatment, the cleanliness of the bone wall can be checked",
    "in cyst removal, completeness of removal can be assessed",
    "in gum-recession surgery",
    "when placing microsurgical sutures",
  ],
  duringTitle: "What happens during a microscope treatment?",
  duringBody:
    "The treatment is comfortable, safe and completely painless. The patient is lying down, so the procedure takes place in a more relaxed, stable position, and we have a better view of the area. The tooth is isolated with a rubber dam (cofferdam), which protects the patient and keeps the field clean. The microscope image is also visible on a monitor, so the patient can see what is happening during treatment.",
  caseTitle: "Removing a broken instrument — a real case",
  caseLead:
    "Our colleague Dr Eszter Sebők presents a common yet special situation: how a previously broken root-canal file that caused inflammation and pain can be removed.",
  case1Title: "1. Starting condition",
  case1Body:
    "The patient arrived in severe pain. Their dentist had started root canal treatment but could not continue because the narrow canals were impassable, and referred them for specialist care. The X-ray clearly showed a broken file remaining in one canal of a premolar, which made disinfection impossible.",
  case2Title: "2. Microscopic exposure",
  case2Body:
    "After proper isolation we removed the temporary filling under the microscope — the instrument was already visible in one canal. We started to move the fragment with circular ultrasonic vibration, then rotated it out of the canal. Treatment did not end there: under microscopic magnification we also opened the difficult, narrow canals.",
  case3Title: "3. Result",
  case3Body:
    "The fragment came out successfully, confirmed by a control X-ray, and both canals became passable along their full length.",
  caseClose: "This case shows that the microscope is often the key to saving the tooth.",
  workTitle: "During treatment",
  summaryTitle: "In summary",
  summaryLead: "Microscope dentistry is one of the most modern and precise technologies today. It:",
  summaryItems: [
    "increases the success of treatments",
    "helps avoid unnecessary extractions",
    "is gentle and safe",
    "gives the patient a better experience",
  ],
  galleryLabels: { close: "Close", prev: "Previous image", next: "Next image" },
  calloutTitle: "Do you need microscope treatment?",
  calloutBody:
    "At the Dentoplant Dental Clinic every condition is in place to provide microscope treatments at the highest standard. For more information and personalised advice, please contact us.",
  calloutCta: "Book now",
};
