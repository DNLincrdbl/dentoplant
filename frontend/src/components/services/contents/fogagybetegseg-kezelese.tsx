import { BulletList, Callout, Figure, LabeledPhotoRow, Lead, MediaText, NumberedList, PhotoRow, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

function oldImg(
  name: string,
  alt: string,
  width: number,
  height: number,
  caption?: string,
) {
  return {
    src: `/szolgaltatasok/fogagy/old/${name}.jpg`,
    alt,
    width,
    height,
    caption,
  };
}

export default function FogagybetegsegKezeleseContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
        <p className="font-medium text-brand-800">{c.common}</p>
        <p>{c.commonBody}</p>
      </Section>

      <Section title={c.causesTitle}>
        <NumberedList
          items={c.causes.map((t, i) => (
            <span key={i}>
              <strong className="text-brand-800">{t.label}:</strong> {t.text}
            </span>
          ))}
        />
      </Section>

      <Section title={c.classTitle}>
        <p>{c.classBody1}</p>
        <p>{c.classBody2}</p>
        <p>{c.classBody3}</p>
        <SubSection title={c.systemicTitle}>
          <p>{c.systemicBody1}</p>
          <p>{c.systemicBody2}</p>
          <p>{c.systemicBody3}</p>
        </SubSection>
      </Section>

      <Section title={c.blogTitle}>
        <Lead>{c.blogLead}</Lead>
        <p>{c.blogBody1}</p>
        <MediaText
          image={{
            src: "/szolgaltatasok/fogagy/blog/01.png",
            alt: c.blogTitle,
            width: 2032,
            height: 1270,
          }}
        >
          <p>{c.blogParo}</p>
        </MediaText>
        <SubSection title={c.blogWhatTitle}>
          <p>{c.blogWhat}</p>
        </SubSection>
        <SubSection title={c.blogSysTitle}>
          <p>{c.blogSys}</p>
          <BulletList items={c.blogSysItems} />
        </SubSection>
        <MediaText
          reverse
          image={{
            src: "/szolgaltatasok/fogagy/blog/02.png",
            alt: c.blogSysTitle,
            width: 1992,
            height: 1156,
          }}
        >
          <p>{c.blogCardio}</p>
        </MediaText>
        <PhotoRow
          images={[
            {
              src: "/szolgaltatasok/fogagy/blog/03.jpg",
              alt: c.blogDiabetesTitle,
              width: 2755,
              height: 1800,
            },
            {
              src: "/szolgaltatasok/fogagy/blog/04.jpg",
              alt: c.blogPregTitle,
              width: 1908,
              height: 1252,
            },
          ]}
        />
        <SubSection title={c.blogDiabetesTitle}>
          <p>{c.blogDiabetes}</p>
        </SubSection>
        <SubSection title={c.blogPregTitle}>
          <p>{c.blogPreg}</p>
        </SubSection>
      </Section>

      <Section title={c.prepTitle}>
        <p>{c.prepBody}</p>
      </Section>

      <Section title={c.microTitle}>
        <p>{c.microBody1}</p>
        <p>{c.microBody2}</p>
        <PhotoRow
          images={[
            {
              src: "/szolgaltatasok/fogagy/old/fmd-1.jpg",
              alt: c.fmdAlt1,
              width: 1284,
              height: 854,
            },
            {
              src: "/szolgaltatasok/fogagy/old/fmd-2.jpg",
              alt: c.fmdAlt2,
              width: 800,
              height: 532,
            },
          ]}
        />
      </Section>

      <Section title={c.closedTitle}>
        <p>{c.closedBody}</p>
      </Section>

      <Section title={c.evalTitle}>
        <p>{c.evalBody}</p>
      </Section>

      <Section title={c.splintTitle}>
        <p>{c.splintBody}</p>
      </Section>

      <Section title={c.openTitle}>
        <p>{c.openBody}</p>
      </Section>

      <Section title={c.reevalTitle}>
        <p>{c.reevalBody}</p>
        <BulletList items={c.reevalItems} />
      </Section>

      <Section title={c.recallTitle}>
        <p>{c.recallBody1}</p>
        <p>{c.recallBody2}</p>
        <p>{c.recallBody3}</p>
      </Section>

      <Section title={c.regenTitle}>
        <p>{c.regenBody1}</p>
        <p>{c.regenBody2}</p>
        <Figure
          src="/szolgaltatasok/fogagy/old/regen.jpg"
          alt={c.regenAlt}
          width={1016}
          height={342}
        />
        <p>{c.regenBody3}</p>
        <BulletList items={c.regenItems} />
      </Section>

      <Section title={c.hyaTitle}>
        <Lead>{c.hyaLead}</Lead>
        <p>{c.hyaBody}</p>
        <SubSection title={c.hyaAdvTitle}>
          <BulletList items={c.hyaAdv} />
        </SubSection>
        <PhotoRow
          images={[
            oldImg("hya-1", c.hyaAlt1, 800, 532),
            oldImg("hya-2", c.hyaAlt2, 800, 532),
          ]}
        />
      </Section>

      <Section title={c.emdoTitle}>
        <MediaText reverse image={oldImg("emdo-intro", c.emdoAlt, 255, 198)}>
          <Lead>{c.emdoLead}</Lead>
          <p>{c.emdoBody1}</p>
        </MediaText>
        <PhotoRow
          images={[
            oldImg("emdo-1", c.emdoS1, 150, 150, c.emdoS1),
            oldImg("emdo-2", c.emdoS2, 150, 150, c.emdoS2),
            oldImg("emdo-3", c.emdoS3, 150, 150, c.emdoS3),
            oldImg("emdo-4", c.emdoS4, 150, 150, c.emdoS4),
            oldImg("emdo-5", c.emdoS5, 150, 150, c.emdoS5),
            oldImg("emdo-6", c.emdoS6, 150, 150, c.emdoS6),
          ]}
        />
        <p>{c.emdoBody2}</p>
      </Section>

      <Section title={c.boneTitle}>
        <Lead>{c.boneLead}</Lead>
        <p>{c.boneBody}</p>
        <Figure {...oldImg("csont", c.boneAlt, 500, 173)} />
        <PhotoRow
          images={[
            oldImg("iny-a", c.gumThumbAlt, 150, 157),
            oldImg("iny-b", c.gumTitle, 150, 150),
          ]}
        />
      </Section>

      <Section title={c.gumTitle}>
        <Lead>{c.gumLead}</Lead>
        <p>{c.gumBody}</p>
        <SubSection title={c.singleTitle}>
          <p>{c.single}</p>
          <PhotoRow
            images={[
              oldImg("single-1", c.singleCap1, 1333, 2000, c.singleCap1),
              oldImg("single-2", c.singleCap2, 1333, 2000, c.singleCap2),
              oldImg("single-3", c.singleCap3, 1333, 2000, c.singleCap3),
            ]}
          />
        </SubSection>
        <SubSection title={c.multiTitle}>
          <p>{c.multi}</p>
          <LabeledPhotoRow
            label={c.multiCapStart}
            images={[
              oldImg("multi-1", c.multiAlt, 2000, 1333),
              oldImg("multi-2", c.multiAlt, 2000, 1333),
              oldImg("multi-3", c.multiAlt, 2000, 1333),
            ]}
          />
          <LabeledPhotoRow
            label={c.multiCap1y}
            images={[
              oldImg("multi-5", c.multiAlt, 2000, 1333),
              oldImg("multi-6", c.graftCap, 2000, 1333, c.graftCap),
              oldImg("multi-7", c.multiAlt, 2000, 1333),
            ]}
          />
          <LabeledPhotoRow
            label={c.multiCap7y}
            images={[
              oldImg("multi-9", c.multiAlt, 2000, 1333),
              oldImg("multi-10", c.multiAlt, 2000, 1333),
              oldImg("multi-11", c.multiAlt, 2000, 1333),
            ]}
          />
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
  introTitle: "Fogágybetegség kezelése",
  introLead:
    "A fogágybetegséget a köznyelvben gyakran ínysorvadásként emlegetik. Valójában a fogakat körülvevő ínyt, csontot és a parodontális ligamentumokat együttesen érintő, kiterjedtebb gyulladás.",
  introBody:
    "Kifejlődése lassú folyamat, kezdeti fázisa kevés panasszal jár — ezért sok páciens már előrehaladott stádiumban fordul hozzánk. Tünetei között említhető a fogínyvérzés, a fogágy duzzanata és fájdalma, a váladékozás, az ételbeékelődés és a fognyaki érzékenység.",
  common: "A fogágybetegség gyakoribb, mint gondolnánk.",
  commonBody:
    "2010 óta a világ 6. leggyakoribb megbetegedéseként tartjuk számon, világszerte több mint 700 millió embert érint. Magyarországon tízből nyolc felnőtt érintett valamilyen formában — és a fogágybetegség okolható a legtöbb fog elvesztéséért.",
  causesTitle: "I. Fogágybetegséget kiváltó okok",
  causes: [
    {
      label: "Szerzett okok",
      text: "Nem megfelelő szájhigiénia, sok plakk és fogkő a leggyakoribb. A túlzottan erős fogmosás az ép fogakról lesikálhatja az ínyt.",
    },
    {
      label: "Helyi irritáló tényezők",
      text: "Pontatlanul illeszkedő fogpótlások, elálló szélű koronák és tömések sokat ártanak a fogágy szöveteinek.",
    },
    {
      label: "Külső tényezők",
      text: "Bizonyos szívgyógyszerek (Ca-csatorna-blokkolók), epilepszia elleni készítmények, fogamzásgátlók és szervátültetéskor alkalmazott gyógyszerek károsíthatják a fogágyat.",
    },
    {
      label: "Örökletes faktorok",
      text: "Egyes génpolimorfizmusok csökkenthetik a fogágy természetes védekezőképességét a fertőzésekkel szemben.",
    },
  ],
  classTitle: "II. Fogágybetegségek osztályozása",
  classBody1:
    "Az ínygyulladások és a fogágybetegségek diagnosztikája nemzetközileg elfogadott klasszifikációhoz igazodik. Az 1999-es besorolást 2018-ban az AAP és az EFP közös munkacsoportjai által kidolgozott rendszer váltotta fel.",
  classBody2:
    "A jelenlegi csoportbeosztás nem tesz különbséget krónikus és agresszív formák között. Stage (stádium, 1–4) és grade (típus, A–C) szerint sorol: a legenyhébbtől a legsúlyosabbig, a leglassabb progressziótól a leggyorsabbig. Figyelembe veszi a dohányzást és az olyan betegségeket is, mint a cukorbetegség.",
  classBody3:
    "Forrás: J Clin Periodontol. 2018;45(Suppl 20):S1–S8 — A new classification scheme for periodontal and peri-implant diseases and conditions.",
  systemicTitle: "Kapcsolat általános megbetegedésekkel",
  systemicBody1:
    "A fogágyon keresztül a véráramba kerülő baktériumok több kórkép kialakulásáért tehetők felelőssé. Szakirodalmi adatok szerint a fogágybetegség növeli a II. típusú cukorbetegség, a szív- és érrendszeri megbetegedések, az időskori dementia és a koraszülés, valamint a kisebb magzati súly kockázatát.",
  systemicBody2:
    "A kardiovaszkuláris betegségek és a fogágybetegség sok tekintetben hasonlók: gyakori, krónikus, nem fertőző kórképek, előfordulásuk az életkorral nő. A fogágy gyulladása növeli a szívinfarktus, a szívelégtelenség és a stroke kockázatát.",
  systemicBody3:
    "A dohányzás, a stressz, a kóros elhízás, a cukorbetegség és az egészségtelen táplálkozás mindkét betegséget súlyosbíthatja. A korai diagnózis és a fogorvos–belgyógyász együttműködés a gyógyulási esélyeket növeli.",
  blogTitle: "A fogágybetegségekről",
  blogLead:
    "A fogágybetegség napjainkban is népbetegségnek számít, megszüntetése nemcsak a fogak, de az általános egészségünk megőrzése érdekében is fontosabb, mint gondolnánk.",
  blogBody1:
    "Ha időben fordulunk szakemberhez és visszajárunk a gondozási programba, önfeledten mosolyoghatunk idős korunkban is — és nemcsak a mozgó fogak és az ínyvisszahúzódás kerül el minket, hanem több belgyógyászati kórképtől sem kell aggódnunk.",
  blogParo:
    "A fogágyat latinul parodonciumnak, a fogágy gyulladását parodontitisnek nevezzük. A parodontológia a fogágy betegségeivel foglalkozó önálló szakterület: az ínygyulladástól a tartószövetek sorvadása miatt mozgatható fogak megtartásáig.",
  blogWhatTitle: "Mit nevezünk fogágybetegségnek?",
  blogWhat:
    "Gyulladásos betegség, amely a fogakat körülvevő ínyt, csontot és a parodontális ligamentumokat együttesen érinti. Kialakulása lassú, kezdeti fázisa kevés panasszal jár — ezért sok páciens már előrehaladott stádiumban fordul hozzánk. A köznyelvi „ínysorvadás” nem helyes: a gyulladás mélyre terjed, a tartószöveteket is érinti.",
  blogSysTitle: "Kapcsolat általános megbetegedésekkel",
  blogSys:
    "A fogágyon keresztül a véráramba kerülő baktériumok több kórkép kialakulásáért tehetők felelőssé. Szakirodalmi adatok szerint a fogágybetegség növeli:",
  blogSysItems: [
    "a II. típusú cukorbetegség",
    "a szív- és érrendszeri megbetegedések",
    "az időskori dementia",
    "a koraszülés és a kisebb magzati súly",
  ],
  blogCardio:
    "A szív- és érrendszeri betegségek és a fogágybetegség gyakori, krónikus, nem fertőző kórképek, előfordulásuk az életkorral nő. A fogágy gyulladása növeli a szívinfarktus, a szívelégtelenség és a stroke kockázatát.",
  blogDiabetesTitle: "Fogágybetegség és cukorbetegség",
  blogDiabetes:
    "A kapcsolat kétirányú: cukorbetegeknél a fogágybetegség súlyosabb lehet, a kezeletlen fogágybetegség viszont megemelheti a vércukorszintet. A rendszeres dentálhigiéniai gondozással a tasakok gyulladása megszüntethető.",
  blogPregTitle: "Szájüregi egészség a várandósság alatt",
  blogPreg:
    "A fogágybetegség és a koraszülés, illetve a kisebb magzati súly közötti összefüggést több adat alátámasztja. A terhesség során kiemelten fontos a szájüregi egészség fenntartása.",
  prepTitle: "Előkészítés, instruálás, motiválás",
  prepBody:
    "Alapvető a gondos, rendszeres szájápolás és a megfelelő fogmosási technika. Be kell építeni a speciális tisztítóeszközöket a napi rutinba, és félévente dentálhigiénikusi ellenőrzés, fogkőeltávolítás szükséges.",
  microTitle: "Mikrobiológiai mintavétel és teljes szájdezinfekció",
  microBody1:
    "Fogágybetegség esetén protokoll szerint tisztítunk. Több típus hátterében jellegzetes baktériumok állnak. A klinikai képtől függően mintát veszünk a tasakokból. Ha parodontopathogén kórokozókra pozitív, teljes szájdezinfekciós protokollt végzünk: célzott antibiotikum mellett teljes professzionális tisztítás, kiegészítve kürettálással — íny alatti tisztítással, a gyulladt szövetek és a fertőzött gyökércement eltávolításával. Helyi érzéstelenítésben, steril Gracey kéziműszerekkel, fájdalommentesen.",
  microBody2:
    "Rövid időn belül áttisztítjuk az összes beteg ínytasakot, hogy a kitisztított tasakok ne fertőződjenek újra. A páciens klorhexidines szájöblítéssel és nyelvhát-tisztítással egészíti ki. Egy hónap múlva kiértékeljük, majd a recall programba kerül.",
  fmdAlt1: "Teljes szájdezinfekció — klinikai kép",
  fmdAlt2: "Teljes szájdezinfekció — kontroll",
  closedTitle: "Zárt kürettálás",
  closedBody:
    "Íny alatti tisztítás: a gyulladt szöveteket, a tasakfalat és a fertőzött gyökércementet távolítjuk el speciális Gracey műszerekkel.",
  evalTitle: "Kiértékelés (evaluation)",
  evalBody:
    "A dezinfekció vagy a zárt kürett után 3–4 héttel kontroll és ismételt tasakmérések. Ekkor értékeljük a gyógyulást, a szájhigiénia hatékonyságát, és kiválasztjuk a további stratégiát. Ha kell, korrigáljuk az elálló tömésszéleket, polírozzuk az érdes töméseket, cseréljük a hibás pótlásokat. Kedvezőtlen rágóerők esetén a fogak becsiszolása is szóba jön.",
  splintTitle: "Sínezés",
  splintBody:
    "Ideiglenes vagy végleges sín a kezelés különböző stádiumaiban. Segíti a fogak megszilárdulását. A belső felszínre üvegszálas szalaggal és esztétikus folyékony tömőanyaggal rögzítjük — stabil és esztétikus. Regeneratív műtétek előtt gyakran szükséges.",
  openTitle: "Nyitott kürett",
  openBody:
    "A mély, nehezen hozzáférhető tasakokat direkt rálátás mellett tisztítjuk, a gyökérfelszíneket elsimítjuk. Lebenyes tasakműtétet alkalmazunk, mikrosebészeti módszerekkel, helyi érzéstelenítésben. A fogak mentén metszéseket ejtünk, lebenyt képzünk, a területet varratokkal zárjuk, egy hét múlva eltávolítjuk. A műtét során bioanyagokkal (hyaDENT BG™, Emdogain™) támogatható a regeneráció.",
  reevalTitle: "Újraértékelés (re-evaluation)",
  reevalBody:
    "A parodontális kezelési terv vízválasztója. Ismét mérjük a tasakmélységet és a vérzési indexet, ellenőrizzük az íny gyulladásmentességét és a szájhigiénét. Itt derül ki, mennyire partner a páciens — műtét csak megfelelő előkészítés után végezhető.",
  reevalItems: [
    "Szükséges-e tasaksebészeti beavatkozás?",
    "Mennyire partner a páciens a fogak megtartásában?",
    "Kialakítható-e a megfelelő szintű szájhigiénia?",
  ],
  recallTitle: "Rizikóbecsés, fenntartó kezelés és gondozás",
  recallBody1:
    "A kezelés lezárultakor többtényezős rizikóanalízissel adjuk meg, milyen gyakran kell kontrollra és professzionális tisztításra jönni. A berni rizikóbecslés alapján 3, 4 vagy 6 havonta rendeljük vissza. A gondozás 15 éve recall rendszerben működik.",
  recallBody2:
    "A recall visszahívást jelent: a kezeléssorozat után nem búcsúzunk, hanem a típus és az állapot szerint rizikóanalízist végzünk (Bern: perio-tools.com/pra).",
  recallBody3:
    "Fogbeültetés után évente, előrehaladott fogágybetegség után félévente, súlyos alapbetegség mellett 4 havonta végzünk professzionális szájhigiéniás tisztítást.",
  regenTitle: "IV. A fogágy regeneratív műtéti módszerei",
  regenBody1:
    "A fogágy regenerációja szűk határok között lehetséges. Célja az eredeti parodontális szövetek (csont, gyökérhártya, gyökércement, kollagénrostok) helyreállítása. Szükségesek a csontból és a vérből származó növekedési faktorok, valamint egy réteg, amely a csontkrátert védi az íny gyors beburjánzásától — erre szolgálnak a speciális membránok.",
  regenBody2:
    "A defektus formájától, mélységétől és szögétől függően különböző anyagokat kombinálunk. Csak alapos evidenciájú, prémium bioanyagokat használunk: xenograft csontpótlók (Nobel Biocare Xenogain™, Bio-Oss® Geistlich), kollagén membránok (Creos™, Bio-Gide®), hyaDENT BG, Emdogain® Plus (Straumann), saját csont és szájpadlebeny graftként.",
  regenAlt: "Regeneratív bioanyagok a fogágy műtéteihez",
  regenBody3: "A regeneratív műtétek alapvető feltételei:",
  regenItems: [
    "az oki terápia sikeres, a fogágygyulladás jelei nem mutatkoznak",
    "a fogágybetegség inaktív stádiumban van",
    "a páciens kifogástalan egyéni szájhigiénét tart fenn",
    "a csontdefektus megfelelő formájú és szögű",
    "a páciens nem dohányzik",
    "megfelelő általános egészségi állapot, nincs műtéti kontraindikáció",
  ],
  hyaTitle: "IV/1. HyaDENT BG (xHya) a nyitott kürett során",
  hyaLead:
    "A fogágybetegségben elvesztett szövetek megőrzéséhez jelentősen hozzájárul a hialuronsav sebészi alkalmazása.",
  hyaBody:
    "A nyitott kürett során az íny minimális leválasztása csak az elváltozás elérhetőségére korlátozódik. A tisztítási fázis után a HyaDENT BG™ sebészi hialuronsav a tasakba juttatható.",
  hyaAdvTitle: "Előnyök nyitott kürett mellett",
  hyaAdv: [
    "gyorsabb sebgyógyulás",
    "kiszámítható gyógyulási folyamat",
    "bakteriosztatikus hatás — kisebb a sebgyógyulási komplikáció esélye",
    "műtét során egyszerű kezelni, véres közegben jól működik",
    "nem igényel folyamatos hűtést",
    "a tasakba helyezve a szövetek regenerációját támogatja",
    "jól kombinálható más bioanyagokkal",
    "minimális posztoperatív fájdalom és kisebb duzzanat",
  ],
  hyaAlt1: "hyaDENT BG a nyitott kürett során",
  hyaAlt2: "hyaDENT BG — műtét utáni állapot",
  emdoTitle: "IV/2. Emdogain a nyitott kürett során",
  emdoLead:
    "Megfelelő esetválasztás mellett a nyitott kürett során regeneratív anyag juttatható a területre, és a fogágy újraépíthető.",
  emdoBody1:
    "Több mint tíz éve alkalmazott regeneratív anyag az Emdogain® (Straumann). Legnyilvánvalóbb hatása a gyökérfelszín módosítása, új cement és új rostok képződése.",
  emdoBody2:
    "A beavatkozás körülbelül egy óráig tart, helyi érzéstelenítésben. Ezzel a technikával általában kisebb elváltozásokat kezelünk: az íny lehúzódása minimális, a sebgyógyulás kedvező.",
  emdoAlt: "Emdogain a nyitott kürett során",
  emdoS1: "Lebenyképzés",
  emdoS2: "Gyökérfelszín tisztítása",
  emdoS3: "Gyökérfelszín kondicionálása",
  emdoS4: "Emdogain felvitele",
  emdoS5: "Sebzárás",
  emdoS6: "Gyógyult állapot",
  boneTitle: "IV/3. Fogágy műtétek csontpótlással",
  boneLead:
    "A súlyosbodó fogágybetegség során a fog körüli csontmennyiség is jelentősen csökken — a megtartás kulcsa a tartószövetek, így a csont felépítése.",
  boneBody:
    "Megfelelő előkészítés után, bizonyos határok között a fogak körüli szövetek csontpótlással felépíthetők. Csontpótlót, saját csontot és membránokat alkalmazunk.",
  boneAlt: "Fogágy műtét csontpótlással — klinikai fotósor",
  gumThumbAlt: "Ínyplasztika",
  gumTitle: "V. Ínyplasztikai beavatkozások — recessziósebészet",
  gumLead:
    "Az íny plasztikai helyreállítását célzó megoldások közé tartoznak az ínylehúzódások műtétei. Koronálisan csúsztatott lebenyek és alagúttechnikák, gyakran szájpadból vett kötőszövetes lebennyel.",
  gumBody:
    "A fognyakról lehúzódott íny korrekciója a legtöbb esetben lehetséges. A legmodernebb megoldások az ínypapillák átvágása nélküli tunnel (alagút) technikák.",
  singleTitle: "Egyszeres ínyrecesszió",
  single:
    "Például a jobb felső szemfogról 5 mm íny húzódott le. Az íny „visszahúzása” csak műtéttel lehetséges: szájpadlásból vett kötőszövetes szabadlebeny koronálisan csúsztatott lebenytechnikával, parodontális plasztikai mikrosebészettel.",
  multiTitle: "Többszörös ínyrecesszió",
  multi:
    "Több fogat érintő lehúzódás, különösen az esztétikai zónában. Tunnel technikával a preparált alagútba húzzuk a szájpadlásból vett graftot. Hosszú távú követéseinkben a recesszió fedésének sikeressége évek múltán is közel 100%-os lehet.",
  singleCap1: "Kezelés előtt",
  singleCap2: "Tisztítás és mérések",
  singleCap3: "Kezelés után 1 évvel",
  multiAlt: "Többszörös ínyrecesszió kezelése",
  graftCap: "Szájpadlásból Hürzeler-technikával kivett kötőszövetes szabadlebeny",
  multiCapStart: "Kiindulási állapot",
  multiCap1y: "Egyéves eredmény",
  multiCap7y: "Hétéves eredmény",
  calloutTitle: "Parodontológiai konzultáció",
  calloutBody: "Fázisos, protokoll szerinti kezelés — a saját fogak megtartásáért.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  introTitle: "Periodontal disease treatment",
  introLead:
    "Periodontal disease is often called gum recession in everyday speech. It is a wider inflammation involving the gums, bone and periodontal ligaments around the teeth.",
  introBody:
    "It develops slowly, with few early complaints — many patients come to us already at an advanced stage. Symptoms include bleeding, swelling and pain of the periodontium, discharge, food packing and cervical sensitivity.",
  common: "Periodontal disease is more common than you might think.",
  commonBody:
    "Since 2010 it has been listed as the world’s 6th most common disease, affecting more than 700 million people. In Hungary eight in ten adults are affected in some form — and periodontal disease accounts for most tooth loss.",
  causesTitle: "I. Causes",
  causes: [
    {
      label: "Acquired causes",
      text: "Poor oral hygiene, plaque and tartar are the most common. Over-vigorous brushing can scrape the gum off healthy teeth.",
    },
    {
      label: "Local irritants",
      text: "Ill-fitting restorations, overhanging crowns and fillings damage the periodontal tissues.",
    },
    {
      label: "External factors",
      text: "Certain heart medicines (calcium-channel blockers), epilepsy drugs, contraceptives and immunosuppressants after organ transplant can harm the periodontium.",
    },
    {
      label: "Hereditary factors",
      text: "Some gene polymorphisms can reduce the periodontium’s natural defence against infection.",
    },
  ],
  classTitle: "II. Classification",
  classBody1:
    "Diagnosis follows an internationally agreed classification. The 1999 scheme was replaced in 2018 by a system developed by AAP and EFP working groups.",
  classBody2:
    "The current grouping no longer distinguishes chronic and aggressive forms. Staging (1–4) and grading (A–C) run from mildest to most severe, slowest to fastest progression, and take smoking and conditions such as diabetes into account.",
  classBody3:
    "Source: J Clin Periodontol. 2018;45(Suppl 20):S1–S8.",
  systemicTitle: "Links with general disease",
  systemicBody1:
    "Bacteria entering the bloodstream via the periodontium can contribute to several conditions. Literature links periodontal disease with type II diabetes, cardiovascular disease, late-life dementia, premature birth and lower birth weight.",
  systemicBody2:
    "Cardiovascular disease and periodontitis are both common, chronic, non-communicable conditions that increase with age. Periodontal inflammation raises the risk of heart attack, heart failure and stroke.",
  systemicBody3:
    "Smoking, stress, obesity, diabetes and unhealthy diet worsen both. Early diagnosis and dentist–physician cooperation improve the chances of recovery.",
  blogTitle: "About periodontal disease",
  blogLead:
    "Periodontal disease is still a widespread condition; treating it matters not only for the teeth but for general health.",
  blogBody1:
    "If you see a specialist in time and stay in a maintenance programme, you can smile freely into old age — avoiding loose teeth and gum recession, and reducing several medical risks.",
  blogParo:
    "The periodontium is the supporting apparatus of the tooth; its inflammation is periodontitis. Periodontology covers everything from gingivitis to keeping teeth that have become mobile due to tissue loss.",
  blogWhatTitle: "What is periodontal disease?",
  blogWhat:
    "An inflammatory disease of the gums, bone and periodontal ligaments together. It develops slowly with few early symptoms, so many patients arrive already at an advanced stage. “Gum recession” in everyday speech is inaccurate: the inflammation goes deep and involves the supporting tissues.",
  blogSysTitle: "Links with general disease",
  blogSys:
    "Bacteria entering the bloodstream via the periodontium can contribute to several conditions. Literature links periodontal disease with:",
  blogSysItems: [
    "type II diabetes",
    "cardiovascular disease",
    "late-life dementia",
    "premature birth and lower birth weight",
  ],
  blogCardio:
    "Cardiovascular disease and periodontitis are both common, chronic, non-communicable conditions that increase with age. Periodontal inflammation raises the risk of heart attack, heart failure and stroke.",
  blogDiabetesTitle: "Periodontitis and diabetes",
  blogDiabetes:
    "The link is two-way: in people with diabetes periodontitis can be more severe, while untreated periodontitis can raise blood sugar. Regular hygiene care can resolve pocket inflammation.",
  blogPregTitle: "Oral health in pregnancy",
  blogPreg:
    "Several studies link periodontal disease with premature birth and lower birth weight. Maintaining oral health during pregnancy is especially important.",
  prepTitle: "Preparation, instruction, motivation",
  prepBody:
    "Careful daily care and a proper brushing technique are fundamental, plus special cleaning aids and six-monthly hygienist visits with tartar removal.",
  microTitle: "Microbiological sampling and full-mouth disinfection",
  microBody1:
    "We clean according to protocol. If culture from the pockets is positive for periodontopathogens, we run a full-mouth disinfection: targeted antibiotics plus professional cleaning and curettage under local anaesthesia with sterile Gracey instruments.",
  microBody2:
    "All diseased pockets are cleaned in a short window so they are not recolonised. The patient adds chlorhexidine rinses and tongue cleaning. After one month we reassess and enter a recall programme.",
  fmdAlt1: "Full-mouth disinfection — clinical photo",
  fmdAlt2: "Full-mouth disinfection — follow-up",
  closedTitle: "Closed curettage",
  closedBody:
    "Subgingival cleaning: inflamed tissue, pocket wall and infected root cementum are removed with Gracey instruments.",
  evalTitle: "Evaluation",
  evalBody:
    "3–4 weeks after disinfection or closed curettage we remeasure pockets, assess healing and hygiene, and choose the next strategy — including correcting overhangs, polishing rough fillings, replacing faulty restorations or occlusal adjustment.",
  splintTitle: "Splinting",
  splintBody:
    "Temporary or permanent splints at various stages help teeth stabilise. We bond glass-fibre tape and aesthetic flowable composite on the inner surface. Often needed before regenerative surgery.",
  openTitle: "Open-flap curettage",
  openBody:
    "Deep, poorly accessible pockets are cleaned under direct vision. We use flap surgery with microsurgical methods under local anaesthesia, close with sutures and remove them after a week. Bio-materials (hyaDENT BG™, Emdogain™) can support regeneration.",
  reevalTitle: "Re-evaluation",
  reevalBody:
    "The watershed of the periodontal plan. We remeasure pockets and bleeding, check inflammation-free gums and hygiene. Surgery is only possible after proper preparation and patient partnership.",
  reevalItems: [
    "Is pocket surgery needed?",
    "How committed is the patient to keeping the teeth?",
    "Can an adequate hygiene level be established?",
  ],
  recallTitle: "Risk assessment, supportive care and maintenance",
  recallBody1:
    "At the end of treatment a multi-factor risk analysis sets how often you return for check-ups and professional cleaning. Based on the Bern risk assessment we recall every 3, 4 or 6 months. Maintenance has run as a recall system for 15 years.",
  recallBody2:
    "Recall means we do not say goodbye after a treatment series; we analyse risk by type and condition (Bern: perio-tools.com/pra).",
  recallBody3:
    "After implants yearly, after advanced periodontitis every six months, and with serious systemic disease every four months we perform professional hygiene.",
  regenTitle: "IV. Regenerative periodontal surgery",
  regenBody1:
    "Periodontal regeneration is possible within narrow limits. The aim is to restore bone, periodontal ligament, cementum and collagen fibres, using growth factors and membranes that protect the bone crater from rapid gingival ingrowth.",
  regenBody2:
    "We combine materials according to defect shape, depth and angle, using only premium, well-evidenced biomaterials.",
  regenAlt: "Regenerative biomaterials for periodontal surgery",
  regenBody3: "Basic requirements for regenerative surgery:",
  regenItems: [
    "cause-related therapy has succeeded; inflammation is absent",
    "the disease is inactive",
    "the patient maintains excellent home care",
    "the bony defect has a suitable shape and angle",
    "the patient does not smoke",
    "general health is adequate; no surgical contraindication",
  ],
  hyaTitle: "IV/1. HyaDENT BG (xHya) in open-flap curettage",
  hyaLead:
    "Surgical hyaluronic acid contributes substantially to preserving tissues lost to periodontal disease.",
  hyaBody:
    "In open-flap curettage the gum is reflected only as far as needed. After cleaning, HyaDENT BG™ can be placed in the pocket.",
  hyaAdvTitle: "Advantages with open-flap curettage",
  hyaAdv: [
    "faster wound healing",
    "predictable healing",
    "bacteriostatic effect — lower chance of healing complications",
    "easy to handle in a bloody field",
    "no continuous cooling",
    "supports tissue regeneration in the pocket",
    "combines well with other biomaterials",
    "minimal postoperative pain and less swelling",
  ],
  hyaAlt1: "hyaDENT BG during open-flap curettage",
  hyaAlt2: "hyaDENT BG — after surgery",
  emdoTitle: "IV/2. Emdogain in open-flap curettage",
  emdoLead:
    "With the right case selection a regenerative material can be placed during open-flap curettage and the periodontium rebuilt.",
  emdoBody1:
    "Emdogain® (Straumann) has been used for more than ten years. Its clearest effects are root-surface modification, new cementum and new fibres.",
  emdoBody2:
    "The procedure lasts about an hour under local anaesthesia. We generally treat smaller lesions: gum recession is minimal and healing is favourable.",
  emdoAlt: "Emdogain in open-flap curettage",
  emdoS1: "Flap elevation",
  emdoS2: "Root-surface cleaning",
  emdoS3: "Root-surface conditioning",
  emdoS4: "Emdogain application",
  emdoS5: "Wound closure",
  emdoS6: "Healed site",
  boneTitle: "IV/3. Periodontal surgery with bone grafting",
  boneLead:
    "As periodontal disease advances, the bone around the tooth also decreases — keeping the tooth often means rebuilding the supporting tissues, including bone.",
  boneBody:
    "After proper preparation, within certain limits, tissues around retained teeth can be rebuilt with bone grafting, autogenous bone and membranes.",
  boneAlt: "Periodontal surgery with bone grafting — clinical series",
  gumThumbAlt: "Gum plastic surgery",
  gumTitle: "V. Gum plastic surgery — recession surgery",
  gumLead:
    "Soft-tissue plastic procedures include surgery for gum recession: coronally advanced flaps and tunnel techniques, often with a connective-tissue graft from the palate.",
  gumBody:
    "Correction of recession from the tooth neck is usually possible. The most modern options are tunnel techniques that do not cut the papillae.",
  singleTitle: "Single recession",
  single:
    "For example 5 mm of gum receded from an upper canine. Covering it is only possible surgically: a palatal connective-tissue graft combined with a coronally advanced flap.",
  multiTitle: "Multiple recessions",
  multi:
    "Recession on several teeth, especially in the aesthetic zone. With a tunnel technique we draw the palatal graft into the prepared tunnel. In long-term follow-up, coverage can remain close to 100% years later.",
  singleCap1: "Before treatment",
  singleCap2: "Cleaning and measurements",
  singleCap3: "One year after treatment",
  multiAlt: "Multiple recession treatment",
  graftCap: "Connective-tissue graft harvested from the palate with the Hürzeler technique",
  multiCapStart: "Baseline",
  multiCap1y: "One-year result",
  multiCap7y: "Seven-year result",
  calloutTitle: "Periodontal consultation",
  calloutBody: "Phased, protocol-based treatment — to keep your own teeth.",
  calloutCta: "Book now",
};
