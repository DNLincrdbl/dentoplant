import { Callout, Lead, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function CsontpotlasFogakMellettContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.lead}</Lead>
        <p>{c.body}</p>
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
  title: "Fogágy műtétek csontpótlással",
  lead:
    "A súlyosbodó fogágybetegség során a fog körüli csontmennyiség is jelentősen csökken — a megtartás kulcsa a tartószövetek, így a csont felépítése.",
  body:
    "Megfelelő előkészítés után, bizonyos határok között a fogak körüli szövetek csontpótlással felépíthetők. Csontpótlót, saját csontot és membránokat alkalmazunk. A technika alkalmas a szövetmennyiség helyreállítására, de körültekintő döntést és a páciens részéről kifogástalan szájhigiéniát igényel.",
  calloutTitle: "Csontpótlás megtartott fogak körül",
  calloutBody: "Csak alapos előkészítés és ideális szájhigiénia mellett.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  title: "Periodontal surgery with bone grafting",
  lead:
    "As periodontal disease advances, the bone around the tooth also decreases — keeping the tooth often means rebuilding the supporting tissues, including bone.",
  body:
    "After proper preparation, within certain limits, tissues around retained teeth can be rebuilt with bone grafting. We use graft material, autogenous bone and membranes. The technique can restore tissue volume, but it needs a careful decision and excellent home care from the patient.",
  calloutTitle: "Bone grafting around retained teeth",
  calloutBody: "Only after thorough preparation and ideal oral hygiene.",
  calloutCta: "Book now",
};
