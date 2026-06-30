import { Check, X } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";

export const metadata = {
  title: "Garancia — Dentoplant Fogászat Szeged",
  description:
    "Garanciát kizárólag a Dentoplant Fogászati és Implantológiai Rendelő orvosai által elvégzett beavatkozásokra és fogtechnikusai által készített munkákra adunk. Ismerje meg a garanciaidőket és feltételeket.",
};

type Duration = { label: string; value: string };

const DURATIONS: Duration[] = [
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

const ENFORCEMENT: string[] = [
  "A garanciát kizárólag a Dentoplant Fogászati és Implantológiai Rendelőben megkezdett, végigvitt és befejezett munkákra vállaljuk. Garanciáját kizárólag a 6726 Szeged, Fő fasor 45. szám alatti rendelőnkben érvényesítheti; az ehhez kapcsolódóan felmerülő esetleges útiköltség a pácienst terheli.",
  "A garancia az átadott fogmű minőségéről tanúskodik. Garanciális igényt a panasz fellépésétől számított 14 napon belül be kell jelenteni — késedelmes bejelentés esetén a garancia nem érvényesíthető.",
  "A beépített implantátum 6 hónapon belüli elvesztése esetén ingyenesen új implantátumot helyezünk be, amennyiben nem áll fenn a garanciát kizáró okok valamelyike, valamint nincs olyan csontállomány-veszteség vagy egyéb sérülés, amely azt lehetetlenné teszi. Ha ez nem lehetséges, az elvesztett implantátumért visszatérítés nem jár.",
];

const VALID: string[] = [
  "Megjelenés a félévenkénti szűrővizsgálaton és dentálhigiéniai ellenőrzésen (térítés ellenében).",
  "A fogmű (korona, implantátum, híd, fogsor) speciális tisztításának betartása esetén.",
  "A szájhigiéniai előírások követése, naponta minimum kétszeri alapos fogmosás stb.",
  "A fogművek technikai elkészítése során felmerülő hibák, anyaghibák esetén.",
];

const INVALID: string[] = [
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

export default function GuaranteePage() {
  return (
    <>
      <PageHero
        eyebrow="Garancia"
        title="Garancia"
        description="Garanciát kizárólag a Dentoplant Fogászati és Implantológiai Rendelő orvosai által elvégzett beavatkozásokra és fogtechnikusai által készített fogtechnikai munkákra adunk."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Garancia" }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 text-base leading-relaxed text-foreground/85">
          {/* Garanciaidők */}
          <div className="space-y-5">
            <h2 className="font-display text-2xl text-brand-900">Garanciaidők</h2>
            <p>
              Garanciát kizárólag a Dentoplant orvosai által elvégzett beavatkozásokra és
              fogtechnikusai által készített fogtechnikai munkákra adunk, az alábbi időtartamokkal:
            </p>
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {DURATIONS.map((d) => (
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

          {/* Érvényesítés */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">A garancia érvényesítése</h2>
            {ENFORCEMENT.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Mikor érvényes */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">Mikor érvényes a garancia?</h2>
            <ul className="space-y-3">
              {VALID.map((li, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mikor nem érvényes */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">Mikor nem érvényes a garancia?</h2>
            <ul className="space-y-3">
              {INVALID.map((li, i) => (
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
            <p>
              Kérdése van a garanciával kapcsolatban? Munkatársaink készséggel állnak rendelkezésére
              — keresse rendelőnket telefonon vagy a kapcsolati felületen.
            </p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
