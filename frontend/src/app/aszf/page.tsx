import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en
      ? "Terms & Conditions — Dentoplant Dental Clinic Szeged"
      : "ÁSZF — Dentoplant Fogászat Szeged",
    description: en
      ? "General terms and conditions of the Dentoplant Dental and Implantology Clinic for outpatient dental services."
      : "A Dentoplant Fogászati és Implantológiai Rendelő általános szerződési feltételei (ÁSZF) fogorvosi járóbeteg, fogászati szolgáltatás ellátására.",
  };
}

type Section = { heading: string; paragraphs?: string[]; list?: string[]; lead?: string };

const SECTIONS_HU: Section[] = [
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

const SECTIONS_EN: Section[] = [
  {
    heading: "I. Subject of the contract",
    list: [
      "A contract is concluded between the Parties for outpatient dental services (hereinafter: “Service”). The Services can be viewed on the website of the Dentoplant Dental Clinic. Otherwise, the provisions of the Privacy Policy apply to visitors of the website.",
      "An annex to these Terms is the form entitled “Questionnaire – Before Dental/Oral Surgery Procedures”, which contains the Customer's personal data and the information provided about their health status to the extent necessary for treatment.",
      "The Service Provider provides dental services based on a public price list; the full public price list is displayed in the waiting area of the Dentoplant Dental Clinic. A written offer (quotation entitled “Preliminary treatment plan” or “Treatment plan”) is given upon separate request or in an individual case. The Service Provider's written offer is valid for 30 days.",
      "The Parties determine the ordering and content of the outpatient dental service(s) chosen by the Customer, and the material(s) required for this, in accordance with these Terms, the Quotation, the Questionnaire, the Surgical information sheet, Consent form, Post-surgery information sheets, Implant register information, and the Information and consent form.",
    ],
  },
  {
    heading: "II. Rights and obligations of the Service Provider",
    list: [
      "The Service Provider carries out its activity in compliance with the applicable legal and professional regulations, using dentists, specialist assistants and subcontractors with appropriate expertise and qualifications. The Service Provider holds the professional, official and operating permits necessary to provide the services, as well as medical and assistant liability insurance.",
      "The Service Provider is entitled at any time to modify the range of Services. The Service Provider is also entitled to modify the Quotation or the treatment plan in a medically justified case, or if the Customer provides data incompletely or late.",
      "The Service Provider is entitled to refuse treatment in case of insufficient cooperation by the Customer, a changed health or mental condition, and if the Customer fails to meet their payment obligation. In these cases the Customer may not assert a claim for damages against the Service Provider.",
      "The Service Provider is entitled to change a pre-arranged appointment or the person of the treating dentist, but is obliged to inform the Customer of this within a reasonable time.",
      "The Service Provider may at any time change any professional aspect of the service without notifying the Customer, if this is necessary for safety or another legal requirement, and does not substantially affect the nature or quality of the service.",
      "To perform the ordered service(s), the Service Provider also uses subcontractors, for whose activity it is liable as if it had performed it itself. It sells these mediated services to the Customer in unchanged form, but not necessarily at an unchanged price.",
    ],
  },
  {
    heading: "III. Rights and obligations of the Customer",
    list: [
      "The Customer is entitled to request information and a Quotation from the Service Provider about the necessary treatment, its course and expected costs, based on the data they have provided.",
      "By accepting the Quotation, the General anamnesis form, the Surgical information and consent form, or the Information and consent form, the Customer consents to the Service Provider performing a dental procedure on them or on the treated person they represent.",
      "During treatments the Customer may — at their own responsibility — request interruption or termination of the treatment at any time. In this case they are only obliged to pay for the treatment and dental technical work used up to the communication of the termination.",
      "When making restorations that also involve a dental technician subcontractor, a 50% deposit is required at the time of taking the impression.",
      "If the Customer cancels an appointment for dental treatment within 24 hours, or fails to appear without cancellation, they owe the Service Provider the contractual penalty set out in the price list.",
    ],
  },
  {
    heading: "IV. Consideration for the service, payment terms",
    list: [
      "The Service Provider informs the Customer of the service fees based on the displayed price list, and in the Preliminary quotation, then in the Quotation relating to the specific treatment.",
      "The Service Provider informs the Customer orally, and in writing upon individual request, of the specific fee items of the treatments performed and of the costs of materials used and mediated services; these are invoiced during the individual treatments.",
      "The Quotation relating to the treatment and the necessary materials is valid for 30 days. Fee items may also change due to professional reasons arising during the treatment (e.g. unforeseeable procedures).",
      "The fee for treatment performed on a given occasion is payable on site after the treatment, in cash or by bank transfer. Please indicate your intention to pay by transfer in advance. We cannot accept payment by transfer for the first examination, the first treatment, or the X-ray fee.",
      "In case of late payment, the rate of default interest is twice the central bank base rate.",
    ],
  },
  {
    heading: "V. Data protection, information",
    list: [
      "The Service Provider treats the Customer's health and personal identification data as a business secret in accordance with the applicable regulations. The Customer consents to the processing of their data in internal (medical history and customer relationship) registers.",
      "The Customer acknowledges that the data provided on the General anamnesis form are necessary for choosing the treatments, and declares that they are complete, and informs the Service Provider in writing of any changes.",
      "The Customer consents to the Service Provider recording their contact details in its database for the purpose of information about treatment appointments and news (newsletter). The Service Provider does not pass these data on to third parties.",
    ],
  },
  {
    heading: "VI. Duration of the contract",
    paragraphs: [
      "In the absence of a different provision in the form entitled Questionnaire – Before Dental/Oral Surgery Procedures, this contract is concluded between the Parties for an indefinite period.",
    ],
  },
  {
    heading: "VII. Warranty",
    lead: "The Service Provider provides a guarantee for the services provided to the Customer as follows:",
    list: [
      "Dental technical work, restorations: zirconia crowns, bridges — 3 years",
      "Dental technical work, restorations: metal-ceramic and pressed-ceramic crowns, bridges — 2 years",
      "Removable dentures, or the removable part of combined dentures — 6 months",
      "Fillings and smaller restorative work — 1 year",
      "Porcelain veneers — 1 year",
      "In the case of implants, the manufacturer provides a material-fracture warranty, which applies only to the implant as a product; it does not cover surgical costs and is not identical to a placement guarantee.",
    ],
  },
  {
    heading: "VIII. Conditions of validity of the guarantee",
    lead: "The guarantee does not cover — among other things — the following cases:",
    list: [
      "temporary solutions applied during the course of treatment (temporary fillings, crowns, bondings);",
      "defects arising from improper use, accident or extreme force;",
      "defects arising from failure to follow the Service Provider's instructions, oral hygiene deficiencies;",
      "deterioration of health caused by the Customer's lifestyle, bad habit (e.g. teeth grinding) or illness;",
      "if the Customer does not attend the prescribed follow-up and six-monthly check-up examinations;",
      "a complication arising as one of the possible consequences of the treatment;",
      "a complaint arising as a result of an unfinished treatment series;",
      "consequences of inadequate oral hygiene, smoking, alcohol or drug use;",
      "in case of significant weight change, or chronic/metabolic diseases affecting the dentition;",
      "in case of improper care and maintenance of the restorations;",
      "if the Customer obtains treatment for the treated area from another provider;",
      "in case of failure to meet the payment obligation by the deadline.",
    ],
  },
  {
    heading: "IX. Other provisions",
    list: [
      "The Service Provider is entitled at any time to unilaterally modify these Terms, especially in case of a change in legislation, professional regulations or the standards of international partners.",
      "In matters not regulated in these Terms, Hungarian law, especially the Civil Code, and other regulations relating to healthcare, shall apply.",
    ],
  },
];

export default async function TermsPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const sections = en ? SECTIONS_EN : SECTIONS_HU;
  const c = en ? EN : HU;
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-foreground/85">
          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed">
            <p>
              <strong className="text-brand-900">Dentoplant Fogászati Kft.</strong> (6726 Szeged, Fő
              fasor 45.; {c.taxId}: 13371160-1-06; {c.companyId}: 06 09 009529), {c.asProvider}, {c.andCustomer}
            </p>
            <p className="mt-3">{c.customerDef}</p>
          </div>

          {sections.map((s) => (
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
            <p>{c.footer}</p>
            <p className="mt-3 font-medium text-brand-900">{c.dated}</p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

const HU = {
  eyebrow: "ÁSZF",
  home: "Főoldal",
  title: "Általános Szerződési Feltételek",
  heroDesc:
    "A Dentoplant Fogászati és Implantológiai Rendelő általános szerződési feltételei fogorvosi járóbeteg, fogászati szolgáltatás ellátására.",
  taxId: "adószám",
  companyId: "cégjegyzékszám",
  asProvider: "mint Szolgáltató, és a fogorvosi járóbeteg fogászati szolgáltatást megrendelő személy, mint Megrendelő (együtt: „Felek”) között.",
  andCustomer: "",
  customerDef:
    "A „Megrendelő” a szolgáltatást igénybe vevő személy. Amennyiben a szolgáltatást cselekvőképtelen (pl. kiskorú) személy veszi igénybe, a Megrendelő a kezelt személy törvényes képviselője.",
  footer:
    "A jelen dokumentum a Dentoplant Fogászati és Implantológiai Rendelő általános szerződési feltételeinek rövidített, online tájékoztató változata. A teljes, számozott ÁSZF a rendelőben elérhető.",
  dated: "Kelt: Szeged, 2024. szeptember 01.",
};

const EN = {
  eyebrow: "Terms",
  home: "Home",
  title: "General Terms and Conditions",
  heroDesc:
    "General terms and conditions of the Dentoplant Dental and Implantology Clinic for outpatient dental services.",
  taxId: "tax number",
  companyId: "company registration number",
  asProvider:
    "as Service Provider, and the person ordering the outpatient dental service, as Customer (together: “Parties”).",
  andCustomer: "",
  customerDef:
    "The “Customer” is the person using the service. If the service is used by a person lacking legal capacity (e.g. a minor), the Customer is the legal representative of the treated person.",
  footer:
    "This document is a shortened, online informational version of the general terms and conditions of the Dentoplant Dental and Implantology Clinic. The full, numbered Terms are available at the clinic.",
  dated: "Dated: Szeged, 1 September 2024.",
};
