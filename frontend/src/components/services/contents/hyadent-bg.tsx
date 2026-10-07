import { BulletList, Callout, Lead, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function HyadentBgContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.lead}</Lead>
        <p>{c.body1}</p>
        <p>{c.body2}</p>
      </Section>
      <Section title={c.advTitle}>
        <BulletList items={c.adv} />
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
  title: "hyaDENT BG (xHya) a nyitott kürett során",
  lead:
    "A fogágybetegségben elvesztett szövetek megőrzéséhez jelentősen hozzájárul a hialuronsav sebészi alkalmazása.",
  body1:
    "A hialuronsav a sejtek közötti extracelluláris mátrix egyik fő alkotója. Az elmúlt évek fogágy-regenerációs kutatásai szerint a tasakműtétekhez, csontpótlásokhoz és ínyrecessziós beavatkozásokhoz fejlesztett HyaDENT BG™ támogatja a gyorsabb, panaszmentesebb gyógyulást, valamint a tasak szöveteinek megőrzését és regenerációját.",
  body2:
    "A nyitott kürett során az íny minimális leválasztása csak az elváltozás elérhetőségére korlátozódik. Rendelőnkben ez minimálinvazív, finom beavatkozás, nagyítás és mikroszkóp mellett. A tisztítási fázis után a HyaDENT BG™ sebészi hialuronsav a tasakba juttatható. Az íny visszahúzódása várhatóan kismértékű, regenerációt biztosító bioanyag mellett minimalizálható.",
  advTitle: "Előnyök nyitott kürett mellett",
  adv: [
    "gyorsabb sebgyógyulás",
    "kiszámítható gyógyulási folyamat",
    "bakteriosztatikus hatás — kisebb a sebgyógyulási komplikáció esélye",
    "műtét során egyszerű kezelni, véres közegben jól működik",
    "nem igényel folyamatos hűtést; carpule fecskendőbe illeszthető ampulla",
    "a tasakba helyezve a szövetek regenerációját támogatja",
    "jól kombinálható más bioanyagokkal",
    "minimális posztoperatív fájdalom és kisebb duzzanat",
  ],
  calloutTitle: "Érdeklődjön a regeneratív lehetőségekről",
  calloutBody: "A nyitott kürett során alkalmazott hialuronsav a gyógyulást és a tasak megőrzését szolgálja.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  title: "hyaDENT BG (xHya) in open-flap curettage",
  lead:
    "Surgical hyaluronic acid contributes substantially to preserving tissues lost to periodontal disease.",
  body1:
    "Hyaluronic acid is a main component of the extracellular matrix. Research on periodontal regeneration shows that HyaDENT BG™, developed for pocket surgery, bone grafting and recession procedures, supports faster, more comfortable healing and preservation of pocket tissues.",
  body2:
    "In open-flap curettage the gum is reflected only as far as needed to reach the lesion. In our clinic this is a minimally invasive procedure under magnification and microscope. After cleaning, surgical hyaluronic acid can be placed in the pocket. Recession is expected to be slight and can be minimised with a regenerative biomaterial.",
  advTitle: "Advantages with open-flap curettage",
  adv: [
    "faster wound healing",
    "predictable healing",
    "bacteriostatic effect — lower chance of healing complications",
    "easy to handle in a bloody field",
    "no continuous cooling; carpule syringe ampoule",
    "supports tissue regeneration in the pocket",
    "combines well with other biomaterials",
    "minimal postoperative pain and less swelling",
  ],
  calloutTitle: "Ask about regenerative options",
  calloutBody: "Hyaluronic acid during open-flap curettage supports healing and pocket preservation.",
  calloutCta: "Book now",
};
