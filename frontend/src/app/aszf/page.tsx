import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";

export const metadata = {
  title: "ÁSZF — Dentoplant Fogászat Szeged",
  description:
    "A Dentoplant Fogászati és Implantológiai Rendelő általános szerződési feltételei (ÁSZF) fogorvosi járóbeteg, fogászati szolgáltatás ellátására.",
};

type Section = { heading: string; paragraphs?: string[]; list?: string[]; lead?: string };

const SECTIONS: Section[] = [
  {
    heading: "I. Szerződés tárgya",
    list: [
      "Felek közötti szerződés járóbeteg fogorvosi, fogászati szolgáltatásra (továbbiakban „Szolgáltatás”) jön létre. A Szolgáltatások megismerhetőek a Dentoplant Fogászati Rendelő weboldalán. Egyébiránt a weboldalra látogatókra az Adatvédelmi tájékoztató rendelkezései irányadók.",
      "Jelen ÁSZF mellékletét képezi a „Kérdőív – Fogorvosi/Szájsebészeti Beavatkozások Előtt” elnevezésű adatlap, amely tartalmazza a Megrendelő személyes adatait, és egészségi állapotáról a kezeléséhez szükséges mértékben szolgáltatott információkat.",
      "Szolgáltató a fogászati szolgáltatásokat nyilvános árlista alapján nyújtja, a teljes nyilvános árlista a Dentoplant Fogászati Rendelőben a váró területén kihelyezésre került. Írásbeli ajánlatot („Előzetes kezelési terv”, vagy „Kezelési terv” címmel árajánlat) külön kérésre vagy egyedi esetben ad. A Szolgáltató írásbeli ajánlata 30 napig érvényes.",
      "Felek a Megrendelő által választott fogorvosi járóbeteg-ellátási szolgáltatás(ok), és az ehhez szükséges anyag(ok) megrendelését, tartalmát jelen ÁSZF, az Árajánlat, Kérdőív, a Műtéti tájékoztató, Beleegyező nyilatkozat, Műtétet követő tájékoztató adatlapok, Implantregiszter tájékoztató, illetve a Tájékoztató és beleegyező nyilatkozat szerinti tartalommal határozzák meg.",
    ],
  },
  {
    heading: "II. Szolgáltató jogai és kötelezettségei",
    list: [
      "A Szolgáltató a tevékenységére irányadó jogszabályi, szakmai előírások betartása mellett megfelelő szakértelemmel, szakképesítéssel rendelkező fogszakorvosok, szakasszisztencia és alvállalkozók igénybevételével végzi tevékenységét. Szolgáltató rendelkezik a szolgáltatások nyújtásához szükséges szakmai, hatósági, működési engedéllyel, valamint orvosi és asszisztensi felelősségbiztosítási szerződéssel.",
      "Szolgáltató bármikor jogosult a Szolgáltatások körét módosítani. Szolgáltató jogosult továbbá az Árajánlatot illetve a kezelési tervet is orvosilag indokolt esetben, vagy amennyiben a Megrendelő hiányosan vagy késedelmesen szolgáltat adatot, módosítani.",
      "Szolgáltató jogosult a kezelést megtagadni a Megrendelő elégtelen együttműködése, megváltozott egészségügyi vagy mentális állapota esetén, valamint amennyiben fizetési kötelezettségének a Megrendelő nem tesz eleget. Ezekben az esetekben a Megrendelő a Szolgáltatóval szemben kárigényt nem érvényesíthet.",
      "Szolgáltató jogosult az előre egyeztetett időpontot, vagy a kezelőorvos személyét megváltoztatni, köteles azonban erről ésszerű időn belül a Megrendelőt tájékoztatni.",
      "Szolgáltató a Megrendelő értesítése nélkül bármikor változtathat a szolgáltatás valamely szakmai szempontú elemén, amennyiben az szükséges a biztonság vagy más jogszabályi előírás miatt, illetve nem befolyásolja lényegesen a szolgáltatás természetét vagy minőségét.",
      "A megrendelt szolgáltatás(ok) teljesítéséhez Szolgáltató alvállalkozókat is igénybe vesz, akiknek a tevékenységéért úgy felel, mintha azt saját maga látta volna el. E közvetített szolgáltatásokat változatlan formában, de nem feltétlenül változatlan áron értékesíti a Megrendelő részére.",
    ],
  },
  {
    heading: "III. Megrendelő jogai és kötelezettségei",
    list: [
      "Megrendelő jogosult az általa megadott adatok alapján Szolgáltatótól tájékoztatást és Árajánlatot kérni a szükséges kezelésről, annak menetéről és várható költségeiről.",
      "Megrendelő az Árajánlat, az Általános anamnézis lap, a Műtéti tájékoztató és beleegyező nyilatkozat, illetve Tájékoztató és beleegyező nyilatkozat elfogadásával hozzájárul ahhoz, hogy rajta vagy az általa képviselt kezelt személyen a Szolgáltató fogorvosi beavatkozást hajtson végre.",
      "A kezelések során Megrendelő – saját felelősségére – bármikor kérheti a kezelés megszakítását, illetve megszüntetését. Ebben az esetben csak azért a kezelésért és fogtechnikai munkáért köteles díjat fizetni, amit a felmondás közléséig igénybe vett.",
      "A fogtechnikusi alvállalkozót is igénybe vevő fogpótlások készítésekor a lenyomatvétel időpontjában 50% előleg megfizetése szükséges.",
      "A megrendelő fogászati kezelésre egyeztetett időpontjának 24 órán belüli lemondása vagy lemondás nélküli meg nem jelenése esetén az árjegyzékben rögzített kötbér megfizetésével tartozik a szolgáltató részére.",
    ],
  },
  {
    heading: "IV. Szolgáltatás ellenértéke, fizetési feltételek",
    list: [
      "Szolgáltató Megrendelőt a szolgáltatások díjairól a kihelyezett árlista alapján, illetve az Előzetes árajánlatban, majd a konkrét kezelésre vonatkozó Árajánlatban tájékoztatja.",
      "Az elvégzett kezelések konkrét díjtételeiről, a felhasznált anyagok és közvetített szolgáltatások költségeiről Megrendelőt Szolgáltató szóban, egyedi kérésre írásban tájékoztatja; ezek az egyes kezelések során kerülnek számlázásra.",
      "A kezelésre és a szükséges anyagokra vonatkozó Árajánlat 30 napig érvényes. A díjtételek a kezelés során előálló szakmai okok (pl. előre nem látható beavatkozások) miatt is módosulhatnak.",
      "Az alkalmanként elvégzett kezelés díja a kezelést követően a helyszínen fizetendő, készpénzben vagy átutalással. Átutalási szándékát előre kérjük jelezni. Az első vizsgálat, az első kezelés, valamint a röntgenfelvétel díját átutalásos teljesítéssel nem tudjuk vállalni.",
      "Késedelmes fizetés esetén a késedelmi kamat mértéke a jegybanki alapkamat kétszeres összege.",
    ],
  },
  {
    heading: "V. Adatvédelem, tájékoztatás",
    list: [
      "Szolgáltató a Megrendelő egészségügyi és személyazonosító adatait az irányadó jogszabályok szerint üzleti titokként kezeli. Megrendelő hozzájárul az adatainak belső (kórtörténeti és ügyfélkapcsolati) nyilvántartásokban történő kezeléséhez.",
      "Megrendelő tudomásul veszi, hogy az Általános anamnézis lapon szolgáltatott adatok a gyógykezelések megválasztásához szükségesek, és nyilatkozik, hogy azok teljes körűek, valamint a változásokról Szolgáltatót írásban tájékoztatja.",
      "Megrendelő hozzájárul, hogy elérhetőségi adatait Szolgáltató adatbázisában rögzítse a kezelési időpontokról és újdonságokról (hírlevél) szóló tájékoztatás céljából. Szolgáltató ezen adatokat harmadik személyeknek nem adja át.",
    ],
  },
  {
    heading: "VI. A szerződés időtartama",
    paragraphs: [
      "A Kérdőív – Fogorvosi/Szájsebészeti Beavatkozások Előtt című nyomtatvány eltérő rendelkezése hiányában jelen szerződés a Felek között határozatlan időre jön létre.",
    ],
  },
  {
    heading: "VII. Szavatosságvállalás",
    lead: "A Szolgáltató a Megrendelőnek nyújtott szolgáltatásokra az alábbiak szerint nyújt garanciát:",
    list: [
      "Fogtechnikai munkákra, fogpótlásokra: cirkon koronák, hidak — 3 év",
      "Fogtechnikai munkákra, fogpótlásokra: fémkerámia és préskerámia koronák, hidak — 2 év",
      "Kivehető fogsorok, vagy kombinált fogsorok kivehető részére — 6 hó",
      "Tömésekre és kisebb restauratív munkákra — 1 év",
      "Porcelán héjak — 1 év",
      "Implantátumok esetében a gyártó anyagtörési garanciát vállal, mely csak az implantátumra, mint termékre vonatkozik; a műtéti költségeket nem fedezi, és nem azonos a behelyezési garanciával.",
    ],
  },
  {
    heading: "VIII. A garancia érvényességének feltételei",
    lead: "A garancia – egyebek mellett – nem terjed ki az alábbi esetekre:",
    list: [
      "a kezelés folyamata alatt alkalmazott ideiglenes megoldásokra (ideiglenes tömések, koronák, ragasztások);",
      "nem rendeltetésszerű használat, baleset vagy extrém erőhatás következtében létrejövő hibákra;",
      "Szolgáltató utasításainak be nem tartásából adódó hibákra, szájhigiéniai hiányosságokra;",
      "a Megrendelő életmódja, rossz szokása (pl. fogcsikorgatás) vagy betegsége okozta egészségromlásra;",
      "ha a Megrendelő az előírt kontroll- és féléves ellenőrző vizsgálatokon nem jelenik meg;",
      "a kezelés egyik lehetséges következményeként fellépő szövődményre;",
      "be nem fejezett kezelési sorozat eredményeként fellépő panaszra;",
      "nem megfelelő szájhigiénia, dohányzás, alkohol- vagy kábítószer-fogyasztás következményeire;",
      "számottevő súlyváltozás, illetve a fogazatra ható krónikus/anyagcsere-betegségek esetén;",
      "a fogművek nem megfelelő gondozása, karbantartása esetén;",
      "ha a Megrendelő más szolgáltatótól vesz igénybe kezelést a kezelt területre;",
      "fizetési kötelezettség határidőben történő nem teljesítése esetén.",
    ],
  },
  {
    heading: "IX. Egyéb rendelkezések",
    list: [
      "Szolgáltató bármikor jogosult az ÁSZF egyoldalú módosítására, különösen jogszabályváltozás, szakmai előírás vagy a nemzetközi partnerek standardjainak változása esetén.",
      "Jelen ÁSZF-ben nem szabályozott kérdésekben a magyar jog, különösen a Ptk., valamint az egészségügyre vonatkozó egyéb jogszabályok rendelkezései az irányadók.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="ÁSZF"
        title="Általános Szerződési Feltételek"
        description="A Dentoplant Fogászati és Implantológiai Rendelő általános szerződési feltételei fogorvosi járóbeteg, fogászati szolgáltatás ellátására."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "ÁSZF" }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-foreground/85">
          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed">
            <p>
              <strong className="text-brand-900">Dentoplant Fogászati Kft.</strong> (6726 Szeged, Fő
              fasor 45.; adószám: 13371160-1-06; cégjegyzékszám: 06 09 009529), mint Szolgáltató, és a
              fogorvosi járóbeteg fogászati szolgáltatást megrendelő személy, mint Megrendelő (együtt:
              „Felek”) között.
            </p>
            <p className="mt-3">
              A „Megrendelő” a szolgáltatást igénybe vevő személy. Amennyiben a szolgáltatást
              cselekvőképtelen (pl. kiskorú) személy veszi igénybe, a Megrendelő a kezelt személy
              törvényes képviselője.
            </p>
          </div>

          {SECTIONS.map((s) => (
            <div key={s.heading} className="space-y-4">
              <h2 className="font-display text-2xl text-brand-900">{s.heading}</h2>
              {s.lead && <p>{s.lead}</p>}
              {s.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.list && (
                <ul className="space-y-3">
                  {s.list.map((li, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
            <p>
              A jelen dokumentum a Dentoplant Fogászati és Implantológiai Rendelő általános
              szerződési feltételeinek rövidített, online tájékoztató változata. A teljes, számozott
              ÁSZF a rendelőben elérhető.
            </p>
            <p className="mt-3 font-medium text-brand-900">Kelt: Szeged, 2024. szeptember 01.</p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
