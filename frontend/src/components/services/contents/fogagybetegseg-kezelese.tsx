import { BulletList, Callout, Lead, NumberedList, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

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

      <Section title={c.prepTitle}>
        <p>{c.prepBody}</p>
      </Section>

      <Section title={c.microTitle}>
        <p>{c.microBody1}</p>
        <p>{c.microBody2}</p>
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
        <p>{c.regenBody3}</p>
        <BulletList items={c.regenItems} />
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
  prepTitle: "Előkészítés, instruálás, motiválás",
  prepBody:
    "Alapvető a gondos, rendszeres szájápolás és a megfelelő fogmosási technika. Be kell építeni a speciális tisztítóeszközöket a napi rutinba, és félévente dentálhigiénikusi ellenőrzés, fogkőeltávolítás szükséges.",
  microTitle: "Mikrobiológiai mintavétel és teljes szájdezinfekció",
  microBody1:
    "Fogágybetegség esetén protokoll szerint tisztítunk. Több típus hátterében jellegzetes baktériumok állnak. A klinikai képtől függően mintát veszünk a tasakokból. Ha parodontopathogén kórokozókra pozitív, teljes szájdezinfekciós protokollt végzünk: célzott antibiotikum mellett teljes professzionális tisztítás, kiegészítve kürettálással — íny alatti tisztítással, a gyulladt szövetek és a fertőzött gyökércement eltávolításával. Helyi érzéstelenítésben, steril Gracey kéziműszerekkel, fájdalommentesen.",
  microBody2:
    "Rövid időn belül áttisztítjuk az összes beteg ínytasakot, hogy a kitisztított tasakok ne fertőződjenek újra. A páciens klorhexidines szájöblítéssel és nyelvhát-tisztítással egészíti ki. Egy hónap múlva kiértékeljük, majd a recall programba kerül.",
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
  regenBody3: "A regeneratív műtétek alapvető feltételei:",
  regenItems: [
    "az oki terápia sikeres, a fogágygyulladás jelei nem mutatkoznak",
    "a fogágybetegség inaktív stádiumban van",
    "a páciens kifogástalan egyéni szájhigiénét tart fenn",
    "a csontdefektus megfelelő formájú és szögű",
    "a páciens nem dohányzik",
    "megfelelő általános egészségi állapot, nincs műtéti kontraindikáció",
  ],
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
  prepTitle: "Preparation, instruction, motivation",
  prepBody:
    "Careful daily care and a proper brushing technique are fundamental, plus special cleaning aids and six-monthly hygienist visits with tartar removal.",
  microTitle: "Microbiological sampling and full-mouth disinfection",
  microBody1:
    "We clean according to protocol. If culture from the pockets is positive for periodontopathogens, we run a full-mouth disinfection: targeted antibiotics plus professional cleaning and curettage under local anaesthesia with sterile Gracey instruments.",
  microBody2:
    "All diseased pockets are cleaned in a short window so they are not recolonised. The patient adds chlorhexidine rinses and tongue cleaning. After one month we reassess and enter a recall programme.",
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
  regenBody3: "Basic requirements for regenerative surgery:",
  regenItems: [
    "cause-related therapy has succeeded; inflammation is absent",
    "the disease is inactive",
    "the patient maintains excellent home care",
    "the bony defect has a suitable shape and angle",
    "the patient does not smoke",
    "general health is adequate; no surgical contraindication",
  ],
  calloutTitle: "Periodontal consultation",
  calloutBody: "Phased, protocol-based treatment — to keep your own teeth.",
  calloutCta: "Book now",
};
