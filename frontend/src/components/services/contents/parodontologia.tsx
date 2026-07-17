import { BulletList, Callout, CardGrid, Lead, NumberedList, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function ParodontologiaContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody1}</p>
        <p>{c.introBody2}</p>
      </Section>

      <Section title={c.tartarTitle}>
        <p>{c.tartarBody}</p>
        <CardGrid items={c.tartar} />
      </Section>

      <Section title={c.symptomsTitle}>
        <BulletList items={c.symptoms} />
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
        <p>{c.classIntro}</p>
        <NumberedList items={c.classes} />
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
  introTitle: "Mi a parodontológia?",
  introLead:
    "A parodoncium (fogágy) betegségeivel és kezelésével foglalkozó önálló szakterület a fogászaton belül.",
  introBody1:
    "A parodontológia kezelési lehetőséget biztosít az egyszerű ínygyulladás megoldásától a tartószövetek sorvadása miatt mozgathatóvá váló reménytelen fogak megtartásáig.",
  introBody2:
    "Az ínygyulladás (gingivitis) és a fogágygyulladás (parodontitis) legfőbb oka a dentális plakk (lepedék), amihez több egyéb külső és szervezeti rizikótényező társulhat. A parodontológus feladata elsősorban a gyulladás és az azzal együtt járó visszahúzódás megszüntetése, valamint az elpusztult parodontális szövetek korrekciója és regenerációjának elősegítése.",
  tartarTitle: "A fogkő, mint legfőbb gyulladásfenntartó tényező",
  tartarBody:
    "A legszembetűnőbb gyulladást fenntartó tényező a fogkő. Az elmeszesedett dentális plakk olyan erősen tapad a foghoz, hogy eltávolítása egyszerű fogmosással kivitelezhetetlen, csak fogorvos vagy dentálhigiénikus tudja megfelelően letisztítani.",
  tartar: [
    {
      title: "Fogfelszíni fogkő",
      body: "Szabad szemmel jól látható. Kezdetben kréta konzisztenciájú, sárgásfehér színű, később ásványianyag lerakódás miatt keményebb és elszíneződött. Felszíne érdes, mindig lepedék borítja.",
    },
    {
      title: "Íny alatti fogkő",
      body: "Nem látható, csak speciális eszközzel tapintható az ínytasakban. Fekete, érdes, nagyon kemény. Ép fogágy esetén nem alakul ki — a fogágybetegség fenntartásában játszik szerepet.",
    },
  ],
  symptomsTitle: "A fogágybetegségek általános tünetei",
  symptoms: [
    "Fogínyvérzés, az íny duzzanata, vörös-lila színe",
    "Fájdalom",
    "Ételbeékelődés",
    "Váladékozás",
    "A fogíny kóros visszahúzódása és a fognyakak láthatóvá válása",
    "Fognyaki érzékenység",
    "Mozgathatóvá váló, elvándorolt, elmozdult fogak",
    "Kellemetlen szájszag",
  ],
  causesTitle: "Mi okozhatja a fogágybetegséget?",
  causes: [
    {
      label: "Szerzett okok",
      text: "nem megfelelő szájhigiénia, sok plakk és fogkő, illetve helytelen fogmosási technika, akár túlzottan erős fogmosás, ami az ínyt sérti.",
    },
    {
      label: "Helyi irritáló tényezők",
      text: "pontatlanul illeszkedő fogpótlások, elálló szélű koronák és tömések sok kárt okozhatnak a fogágy szöveteiben.",
    },
    {
      label: "Külső tényezők",
      text: "egyes „Ca-csatorna blokkoló” szívgyógyszerek, epilepsziagyógyszerek, fogamzásgátlók és szervátültetést kísérő gyógyszerek károsíthatják a fogágyat.",
    },
    {
      label: "Örökletes faktorok",
      text: "egyes génpolimorfizmusok csökkenthetik a fogágy védekezőképességét a fertőzésekkel szemben.",
    },
  ],
  classTitle: "A parodontális megbetegedések osztályozása",
  classIntro:
    "Az American Association of Periodontology által felállított rendszer alapján csoportosítjuk:",
  classes: [
    "A fogíny megbetegedései — plakk okozta és nem plakk okozta fogínybetegségek",
    "Krónikus periodontitisz / fogágygyulladás",
    "Agresszív periodontitisz / fogágygyulladás",
    "Belgyógyászati betegség következtében kialakult fogágybetegségek",
    "Nekrotizáló ínygyulladás (NUG) és fogágygyulladás (NUP)",
    "Fogágytályogok",
    "Kombinált endo-parodontális léziók",
    "Fejlődési rendellenességek és azokkal összefüggő állapotok",
  ],
  calloutTitle: "Mozgó fog sem reménytelen eset",
  calloutBody: (
    <>
      A modern parodontológia akár a tartószövetek sorvadása miatt mozgathatóvá vált fogak
      megtartására is megoldást kínál. Egy alapos vizsgálat után pontos képet kap fogainak
      állapotáról és a lehetséges kezelésekről.
    </>
  ),
  calloutCta: "Kérjen konzultációt",
};

const EN = {
  introTitle: "What is periodontology?",
  introLead:
    "An independent specialty within dentistry dealing with the diseases and treatment of the periodontium (the tooth-supporting tissues).",
  introBody1:
    "Periodontology provides treatment options ranging from resolving simple gingivitis to retaining hopeless teeth that have become mobile due to the loss of supporting tissues.",
  introBody2:
    "The main cause of gingivitis and periodontitis is dental plaque, to which several other external and systemic risk factors can be added. The periodontist's task is primarily to eliminate the inflammation and the recession that accompanies it, as well as to correct the destroyed periodontal tissues and promote their regeneration.",
  tartarTitle: "Tartar as the main inflammation-sustaining factor",
  tartarBody:
    "The most conspicuous inflammation-sustaining factor is tartar. Calcified dental plaque adheres to the tooth so strongly that it cannot be removed by simple brushing — only a dentist or dental hygienist can clean it off properly.",
  tartar: [
    {
      title: "Supragingival tartar",
      body: "Clearly visible to the naked eye. Initially of a chalky consistency and yellowish-white colour, later harder and discoloured due to mineral deposits. Its surface is rough and always covered with plaque.",
    },
    {
      title: "Subgingival tartar",
      body: "Not visible, only palpable with a special instrument in the gum pocket. Black, rough, very hard. It does not form with a healthy periodontium — it plays a role in sustaining periodontal disease.",
    },
  ],
  symptomsTitle: "General symptoms of periodontal disease",
  symptoms: [
    "Gum bleeding, gum swelling, red-purple colour",
    "Pain",
    "Food impaction",
    "Discharge",
    "Pathological gum recession and the tooth necks becoming visible",
    "Tooth-neck sensitivity",
    "Teeth becoming mobile, migrated or displaced",
    "Unpleasant breath odour",
  ],
  causesTitle: "What can cause periodontal disease?",
  causes: [
    {
      label: "Acquired causes",
      text: "inadequate oral hygiene, a lot of plaque and tartar, and improper brushing technique, even excessively forceful brushing that injures the gums.",
    },
    {
      label: "Local irritating factors",
      text: "ill-fitting restorations, crowns and fillings with protruding margins can cause a lot of damage to the periodontal tissues.",
    },
    {
      label: "External factors",
      text: "certain “calcium-channel blocker” heart medications, anti-epileptic drugs, contraceptives and medications accompanying organ transplantation can harm the periodontium.",
    },
    {
      label: "Hereditary factors",
      text: "certain gene polymorphisms can reduce the periodontium's ability to defend against infections.",
    },
  ],
  classTitle: "Classification of periodontal diseases",
  classIntro:
    "We group them based on the system established by the American Association of Periodontology:",
  classes: [
    "Diseases of the gums — plaque-induced and non-plaque-induced gum diseases",
    "Chronic periodontitis",
    "Aggressive periodontitis",
    "Periodontal diseases resulting from systemic illness",
    "Necrotizing gingivitis (NUG) and periodontitis (NUP)",
    "Periodontal abscesses",
    "Combined endo-periodontal lesions",
    "Developmental disorders and related conditions",
  ],
  calloutTitle: "A mobile tooth is not a hopeless case either",
  calloutBody: (
    <>
      Modern periodontology offers a solution even for retaining teeth that have become mobile due to
      the loss of supporting tissues. After a thorough examination you receive an accurate picture of
      the condition of your teeth and the possible treatments.
    </>
  ),
  calloutCta: "Request a consultation",
};
