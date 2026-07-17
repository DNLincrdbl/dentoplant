import { BulletList, Callout, Lead, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function SzajsebeszetContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
      </Section>

      <Section title={c.extractionTitle}>
        <p>{c.extractionBody1}</p>
        <p>{c.extractionBody2}</p>
        <SubSection title={c.wisdomTitle}>
          <p>{c.wisdomBody}</p>
        </SubSection>
      </Section>

      <Section title={c.preservationTitle}>
        <p>{c.preservationBody1}</p>
        <p>{c.preservationBody2}</p>
      </Section>

      <Section title={c.graftTitle}>
        <p>{c.graftBody}</p>
        <p>{c.graftListIntro}</p>
        <BulletList items={c.graftList} />
      </Section>

      <Section title={c.sinusTitle}>
        <p>{c.sinusBody}</p>
        <SubSection title={c.sinusSubTitle}>
          {c.sinusTypes.map((s, i) => (
            <p key={i}>
              <strong className="text-brand-800">{s.label}</strong> {s.text}
            </p>
          ))}
        </SubSection>
      </Section>

      <Section title={c.vestibulumTitle}>
        <p>{c.vestibulumIntro}</p>
        <BulletList
          items={c.vestibulum.map((v, i) => (
            <span key={i}>
              <strong className="text-brand-800">{v.label}</strong> {v.text}
            </span>
          ))}
        />
      </Section>

      <Section title={c.saveTitle}>
        <p>{c.saveBody}</p>
        <SubSection title={c.resectionTitle}>
          <p>{c.resectionBody}</p>
        </SubSection>
        <SubSection title={c.graftAroundTitle}>
          <p>{c.graftAroundBody}</p>
          <BulletList items={c.graftAround} />
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
  introTitle: "Szájsebészeti beavatkozások",
  introLead:
    "Egyszerű és műtéti fogeltávolítástól a bonyolultabb csontpótlásig — szakszerűen, helyi érzéstelenítésben, kérésre éber szedálással.",
  extractionTitle: "1. Egyszerű és műtéti fogeltávolítás",
  extractionBody1: (
    <>
      A fogeltávolítások többségében elegendő egy egyszerű műszerrel kibillenteni a beteg fogat,
      viszont a mélyebben fekvő gyökerek, elő nem tört fogak csak szájsebészeti kisműtéttel
      távolíthatóak el. Ezeket a beavatkozásokat <em>feltárásból végzett fogeltávolításnak</em>
      nevezzük. A feltárást helyi érzéstelenítésben végezzük: felnyitjuk az ínyt, hogy jól
      hozzáférjünk a foghoz, majd a lebenyt varratokkal zárjuk.
    </>
  ),
  extractionBody2:
    "Az otthoni gondos utókezeléssel, a műtött terület hűtésével és a műtét utáni tanácsok betartásával sokat tehet azért, hogy kellemesebb legyen a gyógyulási időszak.",
  wisdomTitle: "Bölcsességfogak műtéti eltávolítása",
  wisdomBody:
    "A mélyen fekvő bölcsességfogak eltávolításához szükség van az őket fedő íny leválasztására, majd a körülvevő csont részleges eltávolítására. Amennyiben lehetséges, a bölcsességfogat feldaraboljuk még a csonton belül, mert így kevesebb saját csont elfúrására lesz szükség. A fog eltávolítását követően a csontsebet kitisztítjuk, fertőtlenítjük, lazán varrjuk és drainezzük. Különösen fontos a megfelelő otthoni utókezelés.",
  preservationTitle: "2. Alveólus prezerváció",
  preservationBody1: (
    <>
      A kihúzott fog helyének <strong>azonnali ellátása</strong> csont- és kötőszövetpótlással.
      Fogeltávolítást követően a kihúzott fog helyén egy kráter alakul ki, amelyet hetek, hónapok
      alatt regenerál a szervezet. A foghúzást közvetlenül követő pár hétben az úgynevezett köteges
      csont lebomlik, és a foghúzás helyén a szövetek „összeesnek”.
    </>
  ),
  preservationBody2:
    "Mindez megelőzhető. Esztétikus területen, vagy olyan régióban, ahová implantátumot tervezünk, ez a szövethiány kedvezőtlenül befolyásolja a végeredményt. Az alveólus prezerváció során a kihúzott fog helye azonnal kezelhető megfelelő csont- és kötőszövetpótlással, így minimális szöveti veszteséggel gyógyul. Ezzel a beavatkozással a szomszédos fogak helyzete is kedvezően befolyásolható: nem lazulnak meg, és a fogágy stabilizálódik.",
  graftTitle: "3. Csontpótlás",
  graftBody:
    "Csontpótlásra akkor van szükség, amikor az elvesztett fogak helyén a csontállomány sorvadt, az állcsont vékony, és emiatt nem lehet megfelelő biztonsággal implantátumot beültetni. Az elmúlt években a regeneráció a fogászati területen is nagy fejlődést ért el: rendelőnkben csak helytálló klinikai eredményekkel igazolt prémium kategóriás csontpótlót és membránt építünk be. A csonthiány típusától függően saját csontot vagy szintetikus csontpótlók keverékét alkalmazzuk membránokkal.",
  graftListIntro: "Csontpótlást végzünk:",
  graftList: [
    "Foghúzást követően — alveólus prezerváció céljából",
    "Kisebb csonthiányoknál implantátumok körül a fogbeültetéssel egy időben (minor bone augmentation)",
    "A fogelvesztés miatt kialakult sorvadt, vékony állcsont csontpótlására (major bone augmentation)",
    "Arcüreg emeléskor",
    "Megtartott fogak körül regeneráció céljából, parodontális kezelést követően",
  ],
  sinusTitle: "4. Arcüreg emelés (sinus lift)",
  sinusBody:
    "Az arcüreg alapjának helyi érzéstelenítésben végzett megvastagítása. A hiányzó felső őrlőfogak helyére sokszor azért nem lehet implantátumot beültetni, mert az arcüreg felőli csont nagyon vékony. Ezt részben egyéni anatómiai adottságok okozzák (tág arcüreg, arcüregbe benyúló foggyökerek), részben a korábbi fogeltávolítások következtében létrejött felső állcsont sorvadás.",
  sinusSubTitle: "Zárt és nyitott arcüreg emelés",
  sinusTypes: [
    {
      label: "Zárt arcüreg emelés",
      text: "során az implantátum beültetésével egy időben, az implantátum-fúraton keresztül speciális Summers sinus lift sorozatot alkalmazva emelünk.",
    },
    {
      label: "Nyitott arcüreg emeléskor",
      text: "helyi érzéstelenítésben lebenyképzést követően az arcüreg külső oldalfalán egy ablakot képzünk, amin keresztül az arcüreg nyálkahártyáját elválasztjuk és felemeljük, majd az így kialakult üreget feltöltjük csontpótló anyaggal. Ezt követően az arcüreg falán kialakított nyílást megfelelően zárjuk és az ínyt varratokkal az eredeti helyére rögzítjük.",
    },
  ],
  vestibulumTitle: "5. Vestibulum plasztika és áthajlásmélyítés",
  vestibulumIntro: "Mikor javasolt leggyakrabban?",
  vestibulum: [
    {
      label: "Praeprotetikai műtétként",
      text: "— fogatlan szájban, ha a kivehető fogpótlás sekély vestibulum miatt leesik. Sokszor elegendő csak egy kedvezőtlenül elhelyezkedő izomköteget korrigálni.",
    },
    {
      label: "Implantátumok körül",
      text: "— feszes íny helyreállítására és szélesítésére, hogy a rágás során a baktériumok ne préselődjenek be az ínybarázdába.",
    },
    {
      label: "Nagyobb csontpótlások után",
      text: "— a lebenyek nyújtása miatt beszűkült áthajlás helyreállítására.",
    },
    {
      label: "Fogíny lehúzódás esetén",
      text: "— recesszió sebészeti kiegészítéseként, ha nincs feszes íny vagy magasan tapadó frenulum szerepel az okok között.",
    },
  ],
  saveTitle: "6. Fogmegtartó műtétek",
  saveBody:
    "Célja, hogy azokat a fogakat, amelyek különböző okokból már nem teljes értékű tagjai a fogívnek, gyulladásmentes, stabil állapotba hozzuk, és így megtarthatóak legyenek. Szűkebb értelemben gyökércsúcs-rezekciót értünk alatta, de a gyökérkezelés fejlődésével erre egyre ritkábban van szükség. Sokkal nagyobb az igény a fogágybetegségben sorvadt csont megerősítésére a parodontális kezelés során megtarthatónak ítélt fogak körül.",
  resectionTitle: "Gyökércsúcs-rezekció",
  resectionBody:
    "A fog gyökerének csúcsi részén megmaradt gyulladt szövetek sebészi eltávolítása. Elhalt vagy már gyökérkezelt fogak gyökércsúcsa körül kialakult gyulladásokra, cisztákra, gócbetegség gyanújára lehet rá szükség. Helyi érzéstelenítésben, kis feltárásból készítünk lebenyt, eltávolítjuk a gyökércsúcs fertőzött részét, kitisztítjuk és fertőtlenítjük a gyulladt területet, majd zárunk.",
  graftAroundTitle: "Csontpótlás megtartott fogak körül",
  graftAroundBody:
    "Logikailag a szájsebészeti beavatkozások közé sorolható, valójában azonban önálló szakterület — a fogágybetegségek kezelése és a fogágy regenerációja. Általában komplex fogágykezelés részeként tervezzük. Leggyakrabban alkalmazott formák:",
  graftAround: [
    "Fogágy stabilizálása Emdogainnal®",
    "Fogak melletti csonttasakok csontpótlása",
    "Őrlőfogak furkációjának csontpótlása",
    "Kötőszövetes lebennyel kombinált technikák",
  ],
  calloutTitle: "Aneszteziológus közreműködésével, kényelmesen",
  calloutBody: (
    <>
      Nagyobb műtéti beavatkozásnál érdemes konzultálni aneszteziológus szakorvosunkkal a fogorvosi
      szakterületen túli érzéstelenítési és szedálási lehetőségekről. Az Ön fájdalommentes kezelése
      és kényelme a legfontosabb!
    </>
  ),
  calloutCta: "Kérjen konzultációt",
};

const EN = {
  introTitle: "Oral surgery procedures",
  introLead:
    "From simple and surgical tooth removal to more complex bone grafting — professionally, under local anaesthesia, and with conscious sedation on request.",
  extractionTitle: "1. Simple and surgical tooth removal",
  extractionBody1: (
    <>
      In the majority of extractions it is enough to loosen the diseased tooth with a simple
      instrument, but deeper-lying roots and unerupted teeth can only be removed with minor oral
      surgery. We call these procedures <em>extraction performed via a surgical exposure</em>. The
      exposure is done under local anaesthesia: we open the gum to gain good access to the tooth, then
      close the flap with sutures.
    </>
  ),
  extractionBody2:
    "With careful home aftercare, cooling the operated area and following the post-operative advice, you can do a lot to make the healing period more comfortable.",
  wisdomTitle: "Surgical removal of wisdom teeth",
  wisdomBody:
    "Removing deep-lying wisdom teeth requires detaching the gum covering them and then partially removing the surrounding bone. Where possible, we section the wisdom tooth while still inside the bone, because this way less of your own bone needs to be drilled. After removing the tooth, we clean and disinfect the bone wound, suture it loosely and place a drain. Proper home aftercare is especially important.",
  preservationTitle: "2. Socket (alveolar) preservation",
  preservationBody1: (
    <>
      <strong>Immediate treatment</strong> of the extraction site with bone and connective tissue
      grafting. After an extraction, a crater forms at the site of the removed tooth, which the body
      regenerates over weeks and months. In the first few weeks directly after the extraction the
      so-called bundle bone breaks down, and the tissues at the extraction site “collapse”.
    </>
  ),
  preservationBody2:
    "All this can be prevented. In an aesthetic area, or in a region where we plan an implant, this tissue loss unfavourably affects the end result. During socket preservation, the extraction site can be treated immediately with appropriate bone and connective tissue grafting, so it heals with minimal tissue loss. This procedure also favourably affects the position of the neighbouring teeth: they do not loosen, and the periodontium stabilises.",
  graftTitle: "3. Bone grafting",
  graftBody:
    "Bone grafting is needed when the bone at the site of the lost teeth has atrophied, the jawbone is thin, and therefore an implant cannot be placed with adequate safety. In recent years, regeneration has also made great progress in the dental field: in our clinic we only place premium-category bone graft material and membranes verified by sound clinical results. Depending on the type of bone deficiency, we use the patient's own bone or a mixture of synthetic bone substitutes with membranes.",
  graftListIntro: "We perform bone grafting:",
  graftList: [
    "After an extraction — for the purpose of socket preservation",
    "For smaller bone deficiencies around implants, at the same time as implant placement (minor bone augmentation)",
    "To graft the atrophied, thin jawbone resulting from tooth loss (major bone augmentation)",
    "During sinus lift",
    "Around retained teeth for regeneration, following periodontal treatment",
  ],
  sinusTitle: "4. Sinus lift",
  sinusBody:
    "Thickening the floor of the maxillary sinus, performed under local anaesthesia. Often an implant cannot be placed at the site of missing upper molars because the bone on the sinus side is very thin. This is partly caused by individual anatomical features (a wide sinus, tooth roots protruding into the sinus), and partly by upper jaw atrophy resulting from previous extractions.",
  sinusSubTitle: "Closed and open sinus lift",
  sinusTypes: [
    {
      label: "During a closed sinus lift,",
      text: "we lift at the same time as implant placement, through the implant drill hole, using a special Summers sinus lift set.",
    },
    {
      label: "During an open sinus lift,",
      text: "under local anaesthesia and after raising a flap, we create a window in the outer wall of the sinus, through which we detach and lift the sinus mucosa, then fill the resulting cavity with bone graft material. After this we properly close the opening created in the sinus wall and fix the gum back to its original place with sutures.",
    },
  ],
  vestibulumTitle: "5. Vestibuloplasty and deepening the sulcus",
  vestibulumIntro: "When is it most often recommended?",
  vestibulum: [
    {
      label: "As a pre-prosthetic surgery",
      text: "— in an edentulous mouth, if the removable denture falls out due to a shallow vestibule. Often it is enough to correct just an unfavourably located muscle band.",
    },
    {
      label: "Around implants",
      text: "— to restore and widen the attached gum, so that during chewing bacteria are not pressed into the gum groove.",
    },
    {
      label: "After larger bone grafts",
      text: "— to restore the sulcus that has narrowed due to the stretching of the flaps.",
    },
    {
      label: "In case of gum recession",
      text: "— as a surgical complement to treating recession, if there is no attached gum or a high-attaching frenulum is among the causes.",
    },
  ],
  saveTitle: "6. Tooth-preserving surgery",
  saveBody:
    "Its aim is to bring teeth that, for various reasons, are no longer full-fledged members of the dental arch into an inflammation-free, stable condition so they can be retained. In the narrower sense we mean apicoectomy by this, but with the development of root canal treatment it is needed increasingly rarely. There is a much greater need to reinforce bone atrophied by periodontal disease around teeth deemed retainable during periodontal treatment.",
  resectionTitle: "Apicoectomy (root-tip resection)",
  resectionBody:
    "The surgical removal of inflamed tissues remaining at the apical part of the tooth's root. It may be needed for inflammations, cysts or suspected focal disease that have developed around the root tip of dead or already root-treated teeth. Under local anaesthesia, from a small exposure we raise a flap, remove the infected part of the root tip, clean and disinfect the inflamed area, then close.",
  graftAroundTitle: "Bone grafting around retained teeth",
  graftAroundBody:
    "Logically it can be classified among oral surgery procedures, but in reality it is an independent specialty — the treatment of periodontal diseases and periodontal regeneration. We usually plan it as part of comprehensive periodontal treatment. The most commonly used forms:",
  graftAround: [
    "Stabilising the periodontium with Emdogain®",
    "Grafting bone pockets next to teeth",
    "Grafting the furcation of molars",
    "Techniques combined with a connective tissue flap",
  ],
  calloutTitle: "Comfortably, with an anaesthesiologist's involvement",
  calloutBody: (
    <>
      For larger surgical procedures it is worth consulting our anaesthesiologist about anaesthesia
      and sedation options beyond the dental field. Your pain-free treatment and comfort are the most
      important!
    </>
  ),
  calloutCta: "Request a consultation",
};
