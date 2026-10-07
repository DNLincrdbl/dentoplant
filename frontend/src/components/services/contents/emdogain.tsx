import { Callout, Lead, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function EmdogainContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.lead}</Lead>
        <p>{c.body1}</p>
        <p>{c.body2}</p>
        <p>{c.body3}</p>
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
  title: "Emdogain a nyitott kürett során",
  lead:
    "Megfelelő esetválasztás és indikáció mellett a nyitott kürett során regeneratív anyag juttatható a területre, és a fogágy újraépíthető.",
  body1:
    "Több mint tíz éve alkalmazott regeneratív anyag az Emdogain® (Straumann). Tasakműtét során az a cél, hogy a korábbi tasakok zsugorodása és a mélyebb szövetek újraképződése arányos folyamat legyen: a tasakok megszűnése mellett a lehető legkedvezőbb regeneráció. Legnyilvánvalóbb hatása a gyökérfelszín módosítása, új cement és új rostok képződése, valamint a feszes íny területén célirányos kollagénképződés.",
  body2:
    "A beavatkozás az elváltozás mértékétől függően körülbelül egy óráig tart, helyi érzéstelenítésben. Emdogain® — kémiailag megtisztított fehérje — kerül a gyökérfelszínre. Ezzel a technikával általában kisebb elváltozásokat kezelünk.",
  body3:
    "Előnye, hogy az eredeti adottságokat nem alakítja át jelentősen, az íny lehúzódása minimális, a sebgyógyulás kedvező. Alkalmazásával a fogágy stabilizálható, és kismértékű regeneráció érhető el.",
  calloutTitle: "Regeneratív tasakműtét",
  calloutBody: "Emdogain® a gyökérfelszínen — új cement, új rostok, kedvező ínygyógyulás.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  title: "Emdogain in open-flap curettage",
  lead:
    "With the right case selection and indications, a regenerative material can be placed during open-flap curettage and the periodontium rebuilt.",
  body1:
    "Emdogain® (Straumann) has been used for more than ten years. In pocket surgery the aim is proportionate shrinkage of former pockets and regeneration of deeper tissues. Its clearest effects are root-surface modification, new cementum and fibres, and targeted collagen formation in the attached gingiva.",
  body2:
    "The procedure lasts about an hour depending on the lesion, under local anaesthesia. Chemically purified protein is applied to the root surface. We generally treat smaller lesions with this technique.",
  body3:
    "It does not significantly reshape the original anatomy, gum recession is minimal, and healing is favourable. The periodontium can be stabilised with a modest degree of regeneration.",
  calloutTitle: "Regenerative pocket surgery",
  calloutBody: "Emdogain® on the root surface — new cementum, new fibres, favourable gum healing.",
  calloutCta: "Book now",
};
