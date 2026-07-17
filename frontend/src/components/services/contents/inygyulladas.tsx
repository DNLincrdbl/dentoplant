import { Callout, CardGrid, Lead, NumberedList, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function InygyulladasContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody1}</p>
        <p>{c.introBody2}</p>
      </Section>

      <Section title={c.typesTitle}>
        <NumberedList
          items={c.types.map((t, i) => (
            <span key={i}>
              <strong className="text-brand-800">{t.label}:</strong> {t.text}
            </span>
          ))}
        />
      </Section>

      <Section title={c.symptomsTitle}>
        <p>{c.symptomsIntro}</p>
        <CardGrid columns={3} items={c.symptoms} />
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
  introTitle: "Mi az ínygyulladás?",
  introLead:
    "Az ínygyulladás a fogakat körülvevő íny felületes gyulladása, amely általában jól kezelhető.",
  introBody1:
    "Időben észrevett ínygyulladás csak az ínyszélt érinti, ami megfelelő tisztítással és helyileg alkalmazott gyógyszerekkel szépen gyógyul. Ha azonban kezelés nélkül hagyjuk és nem fordulunk fogorvoshoz, akkor a legegyszerűbb gyulladás is tovább terjedhet a fogágy, valamint a mélyebb szövetek felé, és akár egy destruktív fogágybetegség alapja is lehet.",
  introBody2:
    "Leggyakrabban az ínyszél mentén felhalmozódott dentális plakk, azaz a lepedék okozza, de ismertek nem plakk okozta ínygyulladási formák is. Kialakulásában szerepet játszhatnak szisztémás faktorok, hormonális tényezők, gyógyszerek, specifikus bakteriális, vírusos, gombás fertőzések, vagy nem megfelelően záródó, pontatlan koronaszél is. Gyakran kíséri a terhességet is.",
  typesTitle: "Az ínygyulladások főbb típusai",
  types: [
    {
      label: "Plakk okozta ínygyulladások",
      text: "önmagukban, vagy egyéb irritáló tényezőkkel kombinálódva.",
    },
    {
      label: "Általános betegség hátterében",
      text: "hormonális vagy hematológiai eredetűek, illetve gyógyszerszedéshez vagy hiánybetegségekhez társuló formák.",
    },
    {
      label: "Nem plakk okozta ínygyulladások",
      text: "specifikus bakteriális, vírusos vagy gombás infekciók, genetikai háttérrel jelentkező és bőrgyógyászati kórképekkel együtt járó formák.",
    },
    {
      label: "Traumás ínyléziók",
      text: "mechanikai sérülésből eredő gyulladások, valamint allergiás vagy egyéb eredetű ínybetegségek.",
    },
  ],
  symptomsTitle: "Az ínygyulladás tünetei",
  symptomsIntro:
    "Az ínygyulladás nagyon gyakori első tünete a fogmosáskor jelentkező vérzés. Még időben kérjen tanácsot a Dentoplant Fogorvosi Rendelő szakembereitől!",
  symptoms: [
    { title: "Ínyvérzés", body: "Különösen fogmosás közben jelentkezve." },
    { title: "Íny duzzanat", body: "Az ínyszél megvastagodása." },
    { title: "Fájdalom, érzékenység", body: "Étkezés vagy fogmosás során." },
    { title: "Vörös íny", body: "A gyulladás következtében kialakult színváltozás." },
    { title: "Lila íny", body: "Súlyosabb gyulladás kísérőjelensége." },
    { title: "Kontúrváltozás", body: "Az íny felülete és széle is megváltozik." },
  ],
  calloutTitle: "Megelőzés és kezelés a Dentoplantban",
  calloutBody: (
    <>
      Fontos az ínygyulladás időben történő kezelése — elhanyagolt esetekben a gyulladás mélyebb
      szövetek felé terjed, ínysorvadás, csontpusztulás jöhet létre, a fogak mozgathatóvá válnak,
      végül fogelvesztés következhet be. Az ínygyulladás megelőzésében és gyógyításában is alapvető
      szerepe van a jó szájhigiéniának. Segítünk a helyes fogmosási technika elsajátításában, és
      egyéni szájhigiénés programunkkal biztosítjuk, hogy rendszeres kontroll alatt mindig egészséges
      maradjon.
    </>
  ),
  calloutCta: "Kérjen időpontot",
};

const EN = {
  introTitle: "What is gingivitis?",
  introLead:
    "Gingivitis is a superficial inflammation of the gums surrounding the teeth, which is usually easily treatable.",
  introBody1:
    "Gingivitis noticed in time affects only the gum margin, and it heals nicely with proper cleaning and locally applied medications. However, if left untreated and no dentist is consulted, even the simplest inflammation can spread further towards the periodontium and deeper tissues, and can even become the basis of a destructive periodontal disease.",
  introBody2:
    "It is most often caused by dental plaque accumulated along the gum margin, but non-plaque-induced forms of gingivitis are also known. Systemic factors, hormonal factors, medications, specific bacterial, viral or fungal infections, or an ill-fitting, inaccurate crown margin can play a role in its development. It also frequently accompanies pregnancy.",
  typesTitle: "The main types of gingivitis",
  types: [
    {
      label: "Plaque-induced gingivitis",
      text: "on their own or combined with other irritating factors.",
    },
    {
      label: "In the background of a general illness",
      text: "of hormonal or haematological origin, or forms associated with medication or deficiency diseases.",
    },
    {
      label: "Non-plaque-induced gingivitis",
      text: "specific bacterial, viral or fungal infections, forms with a genetic background and those associated with dermatological conditions.",
    },
    {
      label: "Traumatic gingival lesions",
      text: "inflammation resulting from mechanical injury, as well as allergic or other gum diseases.",
    },
  ],
  symptomsTitle: "The symptoms of gingivitis",
  symptomsIntro:
    "A very common first symptom of gingivitis is bleeding while brushing. Ask the specialists of the Dentoplant Dental Clinic for advice in time!",
  symptoms: [
    { title: "Gum bleeding", body: "Especially occurring while brushing." },
    { title: "Gum swelling", body: "Thickening of the gum margin." },
    { title: "Pain, sensitivity", body: "During eating or brushing." },
    { title: "Red gums", body: "Colour change resulting from the inflammation." },
    { title: "Purple gums", body: "An accompanying sign of more severe inflammation." },
    { title: "Contour change", body: "The surface and margin of the gum also change." },
  ],
  calloutTitle: "Prevention and treatment at Dentoplant",
  calloutBody: (
    <>
      Treating gingivitis in time is important — in neglected cases the inflammation spreads towards
      deeper tissues, gum recession and bone loss can develop, the teeth become mobile, and
      ultimately tooth loss can occur. Good oral hygiene plays a fundamental role in both preventing
      and curing gingivitis. We help you learn the correct brushing technique, and with our
      individual oral hygiene program we ensure that, under regular check-ups, your gums always stay
      healthy.
    </>
  ),
  calloutCta: "Book an appointment",
};
