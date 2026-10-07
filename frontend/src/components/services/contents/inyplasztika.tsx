import { BulletList, Callout, Lead, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function InyplasztikaContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.lead}</Lead>
        <p>{c.body1}</p>
      </Section>
      <Section title={c.indTitle}>
        <BulletList items={c.ind} />
      </Section>
      <Section title={c.complTitle}>
        <BulletList items={c.compl} />
        <p>{c.body2}</p>
        <p>{c.body3}</p>
      </Section>
      <SubSection title={c.singleTitle}>
        <p>{c.single}</p>
      </SubSection>
      <SubSection title={c.multiTitle}>
        <p>{c.multi}</p>
      </SubSection>
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
  title: "Ínyplasztikai beavatkozások — recessziósebészet",
  lead:
    "Az íny plasztikai helyreállítását célzó megoldások közé tartoznak az ínylehúzódások műtétei. Koronálisan csúsztatott lebenyek és alagúttechnikák, gyakran szájpadból vett kötőszövetes lebennyel.",
  body1:
    "Ez csak egy szelete a mucogingivális sebészetnek. A fognyakról lehúzódott íny korrekciója a legtöbb esetben lehetséges, és magas szintű felkészültséget igényel.",
  indTitle: "Mikor indikált?",
  ind: [
    "kevés feszes íny a fogak körül",
    "egyszeres ínyrecesszió",
    "többszörös ínyrecessziók",
    "aszimmetrikus ínyvonal",
    "az íny túlsúlya a mosolyban — gum smile",
    "fogak közötti ínykráter, negatív ínypapilla",
    "insufficiens fogatlan gerinc az esztétikai területen",
    "implantátumok felnyitásával egyidőben végzett ínykorrekciók",
  ],
  complTitle: "Gyakori panaszok",
  compl: [
    "fognyaki érzékenység",
    "esztétikai ok: a lehúzódott íny miatt hosszabbnak látszanak a fogak",
    "félelem, hogy elveszítik a fogakat",
  ],
  body2:
    "Két dolog kell: sebészi technika és anyag, amivel az íny szövetét megnöveljük. A legmodernebb megoldások az ínypapillák átvágása nélküli tunnel (alagút) technikák. Anyagként szájpadlásból vett kötőszövetes szabadlebenyt, a tuber területéről nyert graftot, vagy Geistlich Mucograft®-ot használunk.",
  body3:
    "A fotók a későbbiekben kerülnek fel az oldalra.",
  singleTitle: "Egyszeres ínyrecesszió",
  single:
    "Például a jobb felső szemfogról 5 mm íny húzódott le. Az íny „visszahúzása” csak műtéttel lehetséges: a szájpadlásból eltávolított kötőszövetes szabadlebenyt koronálisan csúsztatott lebenytechnikával kombináljuk, parodontális plasztikai mikrosebészettel.",
  multiTitle: "Többszörös ínyrecesszió",
  multi:
    "Több fogat érintő lehúzódás, különösen az esztétikai zónában. A fogközök megnyitása nélküli tunnel technikával a preparált alagútba húzzuk a szájpadlásból vett graftot, majd speciális varratokkal pozícionáljuk az ínyt. Hosszú távú követéseinkben a recesszió fedésének sikeressége évek múltán is közel 100%-os lehet.",
  calloutTitle: "Ínyplasztikai konzultáció",
  calloutBody: "Tunnel technika és kötőszövetes graft — az ínyvonal harmóniájáért.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  title: "Gum plastic surgery — recession surgery",
  lead:
    "Soft-tissue plastic procedures include surgery for gum recession: coronally advanced flaps and tunnel techniques, often with a connective-tissue graft from the palate.",
  body1:
    "This is only a slice of mucogingival surgery. Correction of recession from the tooth neck is usually possible and requires a high level of skill.",
  indTitle: "When is it indicated?",
  ind: [
    "little attached gingiva around the teeth",
    "single recession",
    "multiple recessions",
    "asymmetric gum line",
    "gummy smile",
    "interdental crater, negative papilla",
    "insufficient edentulous ridge in the aesthetic zone",
    "gum correction at implant uncovering",
  ],
  complTitle: "Common complaints",
  compl: [
    "cervical sensitivity",
    "aesthetic: teeth look longer because the gum has receded",
    "fear of losing the teeth",
  ],
  body2:
    "Two things are needed: a surgical technique and a material to augment the gum. The most modern options are tunnel techniques that do not cut the papillae. We use a palatal connective-tissue graft, a graft from the tuber region, or Geistlich Mucograft®.",
  body3: "Photos will be added to this page later.",
  singleTitle: "Single recession",
  single:
    "For example 5 mm of gum receded from an upper canine. Covering it is only possible surgically: a palatal connective-tissue graft combined with a coronally advanced flap, using periodontal plastic microsurgery.",
  multiTitle: "Multiple recessions",
  multi:
    "Recession on several teeth, especially in the aesthetic zone. With a tunnel technique that does not open the papillae we draw the palatal graft into the prepared tunnel and position the gum with special sutures. In our long-term follow-up, coverage can remain close to 100% years later.",
  calloutTitle: "Gum plastic consultation",
  calloutBody: "Tunnel technique and connective-tissue graft — for a harmonious gum line.",
  calloutCta: "Book now",
};
