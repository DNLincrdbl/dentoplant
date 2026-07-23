import { Check, X } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { CtaContact } from "@/components/home/cta-contact";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Guarantee — Dentoplant Dental Clinic Szeged" : "Garancia — Dentoplant Fogászat Szeged",
    description: en
      ? "We provide a guarantee exclusively for procedures performed by the doctors of the Dentoplant Dental and Implantology Clinic and for work made by our dental technicians. Learn about the guarantee periods and conditions."
      : "Garanciát kizárólag a Dentoplant Fogászati és Implantológiai Rendelő orvosai által elvégzett beavatkozásokra és fogtechnikusai által készített munkákra adunk. Ismerje meg a garanciaidőket és feltételeket.",
  };
}

type Duration = { label: string; value: string };

const DURATIONS_HU: Duration[] = [
  { label: "Nobel Biocare® implantátum (gyártói garancia)", value: "élethosszig" },
  { label: "Camlog® implantátum anyagára (gyártói garancia)", value: "5 év" },
  { label: "AlfaBio® implantátum anyagára (gyártói garancia)", value: "5 év" },
  { label: "Fémkerámia és préskerámia fogpótlások", value: "2 év" },
  { label: "Inlay", value: "2 év" },
  { label: "Cirkonkerámia fogpótlások", value: "3 év" },
  { label: "Esztétikus fotopolimerizációs tömések", value: "1 év" },
  { label: "Kivehető fogpótlás", value: "1 év" },
  { label: "Implantátumokra készülő rögzített fogpótlások", value: "3 év" },
];

const DURATIONS_EN: Duration[] = [
  { label: "Nobel Biocare® implant (manufacturer's warranty)", value: "lifetime" },
  { label: "Camlog® implant material cost (manufacturer's warranty)", value: "5 years" },
  { label: "AlfaBio® implant material cost (manufacturer's warranty)", value: "5 years" },
  { label: "Metal-ceramic and pressed-ceramic restorations", value: "2 years" },
  { label: "Inlay", value: "2 years" },
  { label: "Zirconia-ceramic restorations", value: "3 years" },
  { label: "Aesthetic light-cured (photopolymer) fillings", value: "1 year" },
  { label: "Removable restoration", value: "1 year" },
  { label: "Fixed restorations on implants", value: "3 years" },
];

const ENFORCEMENT_HU: string[] = [
  "A garanciát kizárólag a Dentoplant Fogászati és Implantológiai Rendelőben megkezdett, végigvitt és befejezett munkákra vállaljuk. Garanciáját kizárólag a 6726 Szeged, Fő fasor 45. szám alatti rendelőnkben érvényesítheti; az ehhez kapcsolódóan felmerülő esetleges útiköltség a pácienst terheli.",
  "A garancia az átadott fogmű minőségéről tanúskodik. Garanciális igényt a panasz fellépésétől számított 14 napon belül be kell jelenteni — késedelmes bejelentés esetén a garancia nem érvényesíthető.",
  "A beépített implantátum 6 hónapon belüli elvesztése esetén ingyenesen új implantátumot helyezünk be, amennyiben nem áll fenn a garanciát kizáró okok valamelyike, valamint nincs olyan csontállomány-veszteség vagy egyéb sérülés, amely azt lehetetlenné teszi. Ha ez nem lehetséges, az elvesztett implantátumért visszatérítés nem jár.",
];

const ENFORCEMENT_EN: string[] = [
  "We provide a guarantee exclusively for work started, carried out and completed at the Dentoplant Dental and Implantology Clinic. You can enforce your guarantee exclusively at our clinic at 6726 Szeged, Fő fasor 45; any travel costs arising in connection with this are borne by the patient.",
  "The guarantee attests to the quality of the delivered restoration. A guarantee claim must be reported within 14 days of the complaint arising — in case of late reporting the guarantee cannot be enforced.",
  "If a placed implant is lost within 6 months, we place a new implant free of charge, provided that none of the grounds excluding the guarantee applies and there is no bone loss or other injury that makes it impossible. If this is not possible, no refund is due for the lost implant.",
];

const VALID_HU: string[] = [
  "Megjelenés a félévenkénti szűrővizsgálaton és dentálhigiéniai ellenőrzésen (térítés ellenében).",
  "A fogmű (korona, implantátum, híd, fogsor) speciális tisztításának betartása esetén.",
  "A szájhigiéniai előírások követése, naponta minimum kétszeri alapos fogmosás stb.",
  "A fogművek technikai elkészítése során felmerülő hibák, anyaghibák esetén.",
];

const VALID_EN: string[] = [
  "Attendance at the six-monthly screening examination and dental hygiene check (for a fee).",
  "If the special cleaning of the restoration (crown, implant, bridge, denture) is observed.",
  "Following the oral hygiene instructions, thorough brushing at least twice a day, etc.",
  "In case of faults or material defects arising during the technical production of the restorations.",
];

const INVALID_HU: string[] = [
  "Ha elmulasztja a félévenkénti szűrővizsgálaton történő megjelenést.",
  "Ha a javasolt szájhigiéniai előírásokat nem tartja be.",
  "Dohányzás, alkohol-, kábítószer- vagy gyógyszerfogyasztás közben fellépő állapotok következtében történt sérülésekre.",
  "Fokozott fogsorszorításból adódó porcelánborítás-sérülésre.",
  "Ha a páciens a fogpótlást leejti, vagy nem rendeltetésszerűen használja.",
  "A szervezetet érintő általános betegségek olyan következményei esetén, amelyek negatívan befolyásolják a fogászati állapotot (pl. cukorbetegség, epilepszia, osteoporosis, röntgenbesugárzás, kemoterápiás kezelés, bizonyos gyógyszerek szedése, anyagcsere-betegségek).",
  "Eltitkolt betegségek esetén, amelyeket a fogászati kezelés megkezdése előtt vagy közben nem jeleztek.",
  "Rövid idő alatt bekövetkező nagymértékű fogyás vagy elhízás esetén.",
  "Balesetből adódó sérülésekre: fogak kihullása és törése, kivehető fogsor elejtéséből adódó sérülések.",
  "Fogágysorvadás vagy csontleépülés esetén.",
  "A fog természetes kopása esetén.",
  "Dohányzásból és egyéb vegyi anyagokból adódó fogelszíneződésekre.",
  "Dohányzó betegek implantációjára egyáltalán nem adható garancia.",
  "A koronákhoz előkészített fogak utólagosan szükségessé váló gyökérkezelésére. A szakirodalomban jól dokumentált, hogy a koronához szükséges előkészítés során olyan mikrorepedések keletkezhetnek, amelyek később a korona alatti fog gyökérkezelését tehetik szükségessé.",
  "Azokra a problémákra, amelyek a beteg röntgenfelvételén nem láthatók vagy nem előreláthatók a fogászati kezelés idején — ezekért a Dentoplant nem vállal felelősséget.",
  "Ha a páciens a javasolt kezeléseket nem vette igénybe, és a panasz a be nem fejezett kezelési sorozat eredménye.",
  "Ha másik fogászati rendelőben dolgozó fogorvos hozzányúl, hozzátesz, elvesz vagy módosít az átadott munkán.",
  "Az ideiglenes koronákra, hidakra és fogsorokra.",
  "Fogsorjavításra az átadástól számított 1 év eltelte után.",
];

const INVALID_EN: string[] = [
  "If you fail to attend the six-monthly screening examination.",
  "If you do not follow the recommended oral hygiene instructions.",
  "For injuries caused by conditions arising during smoking or the consumption of alcohol, drugs or medication.",
  "For damage to the porcelain covering caused by excessive teeth clenching.",
  "If the patient drops the restoration or does not use it as intended.",
  "In case of consequences of general systemic illnesses that negatively affect the dental condition (e.g. diabetes, epilepsy, osteoporosis, radiation exposure, chemotherapy treatment, taking certain medications, metabolic diseases).",
  "In case of concealed illnesses that were not disclosed before or during the dental treatment.",
  "In case of significant weight loss or weight gain over a short period.",
  "For injuries caused by accidents: teeth falling out and breaking, injuries caused by dropping a removable denture.",
  "In case of periodontal recession or bone loss.",
  "In case of natural wear of the tooth.",
  "For tooth discolouration caused by smoking and other chemical substances.",
  "No guarantee can be given at all for the implantation of smoking patients.",
  "For root canal treatment that subsequently becomes necessary on teeth prepared for crowns. It is well documented in the literature that during the preparation needed for a crown, micro-cracks can occur that may later make root canal treatment of the tooth under the crown necessary.",
  "For problems that are not visible on the patient's X-ray or not foreseeable at the time of the dental treatment — Dentoplant does not accept responsibility for these.",
  "If the patient did not undergo the recommended treatments and the complaint is the result of an unfinished treatment series.",
  "If a dentist working in another dental practice touches, adds to, removes from or modifies the delivered work.",
  "For temporary crowns, bridges and dentures.",
  "For denture repair after 1 year has elapsed from delivery.",
];

export default async function GuaranteePage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  const durations = en ? DURATIONS_EN : DURATIONS_HU;
  const enforcement = en ? ENFORCEMENT_EN : ENFORCEMENT_HU;
  const valid = en ? VALID_EN : VALID_HU;
  const invalid = en ? INVALID_EN : INVALID_HU;
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.eyebrow}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
        image={PAGE_HEROES.garancia}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 text-base leading-relaxed text-foreground/85">
          <div className="space-y-5">
            <h2 className="font-display text-2xl text-brand-900">{c.durationsTitle}</h2>
            <p>{c.durationsIntro}</p>
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {durations.map((d) => (
                <li
                  key={d.label}
                  className="flex items-center justify-between gap-4 bg-background px-5 py-3.5"
                >
                  <span className="text-sm text-foreground/90 md:text-base">{d.label}</span>
                  <span className="flex-shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 md:text-sm">
                    {d.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">{c.enforcementTitle}</h2>
            {enforcement.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">{c.validTitle}</h2>
            <ul className="space-y-3">
              {valid.map((li, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">{c.invalidTitle}</h2>
            <ul className="space-y-3">
              {invalid.map((li, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-rose-50 text-rose-500">
                    <X className="h-4 w-4" />
                  </span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
            <p>{c.footer}</p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

const HU = {
  eyebrow: "Garancia",
  home: "Főoldal",
  heroDesc:
    "Garanciát kizárólag a Dentoplant Fogászati és Implantológiai Rendelő orvosai által elvégzett beavatkozásokra és fogtechnikusai által készített fogtechnikai munkákra adunk.",
  durationsTitle: "Garanciaidők",
  durationsIntro:
    "Garanciát kizárólag a Dentoplant orvosai által elvégzett beavatkozásokra és fogtechnikusai által készített fogtechnikai munkákra adunk, az alábbi időtartamokkal:",
  enforcementTitle: "A garancia érvényesítése",
  validTitle: "Mikor érvényes a garancia?",
  invalidTitle: "Mikor nem érvényes a garancia?",
  footer:
    "Kérdése van a garanciával kapcsolatban? Munkatársaink készséggel állnak rendelkezésére — keresse rendelőnket telefonon vagy a kapcsolati felületen.",
};

const EN = {
  eyebrow: "Guarantee",
  home: "Home",
  heroDesc:
    "We provide a guarantee exclusively for procedures performed by the doctors of the Dentoplant Dental and Implantology Clinic and for dental technical work made by our dental technicians.",
  durationsTitle: "Guarantee periods",
  durationsIntro:
    "We provide a guarantee exclusively for procedures performed by Dentoplant's doctors and for dental technical work made by our dental technicians, with the following periods:",
  enforcementTitle: "Enforcing the guarantee",
  validTitle: "When is the guarantee valid?",
  invalidTitle: "When is the guarantee not valid?",
  footer:
    "Do you have a question about the guarantee? Our staff are happy to help — contact our clinic by phone or via the contact page.",
};
