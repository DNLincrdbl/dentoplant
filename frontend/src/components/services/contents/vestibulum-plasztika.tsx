import { BulletList, Callout, Lead, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function VestibulumPlasztikaContent({ locale }: ServiceContentProps) {
  const c = locale === "en" ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.title}>
        <Lead>{c.intro}</Lead>
        <BulletList
          items={c.items.map((v, i) => (
            <span key={i}>
              <strong className="text-brand-800">{v.label}</strong> {v.text}
            </span>
          ))}
        />
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
  title: "Vestibulum plasztika és áthajlásmélyítés",
  intro: "Mikor javasolt leggyakrabban a vesztibulumplasztika?",
  items: [
    {
      label: "Praeprotetikai műtétként",
      text: "— fogatlan szájban, ha a kivehető fogpótlás sekély vestibulum miatt leesik. Sokszor elegendő egy kedvezőtlenül elhelyezkedő izomköteget korrigálni.",
    },
    {
      label: "Implantátumok körül",
      text: "— feszes íny helyreállítására és szélesítésére, hogy a rágás során a baktériumok ne préselődjenek be az ínybarázdába.",
    },
    {
      label: "Nagyobb csontpótlások után",
      text: "— a lebenyek nyújtása miatt beszűkült áthajlás helyreállítására.",
    },
    {
      label: "Fogíny lehúzódás esetén",
      text: "— recesszió sebészeti kiegészítéseként, ha nincs feszes íny vagy magasan tapadó frenulum szerepel az okok között.",
    },
  ],
  calloutTitle: "Konzultáció vestibulum plasztikáról",
  calloutBody: "A képeket hamarosan feltöltjük. Időpontot addig is szívesen egyeztetünk.",
  calloutCta: "Bejelentkezés",
};

const EN = {
  title: "Vestibuloplasty and sulcus deepening",
  intro: "When is vestibuloplasty most often recommended?",
  items: [
    {
      label: "As pre-prosthetic surgery",
      text: "— in an edentulous mouth, if a denture falls because the vestibule is too shallow. Often it is enough to correct an unfavourably placed muscle band.",
    },
    {
      label: "Around implants",
      text: "— to restore and widen attached gum so chewing does not pump bacteria into the sulcus.",
    },
    {
      label: "After larger bone grafts",
      text: "— to restore a sulcus narrowed by stretching of the flaps.",
    },
    {
      label: "With gum recession",
      text: "— as a complement to recession surgery when there is no attached gum or a high frenulum.",
    },
  ],
  calloutTitle: "Consultation on vestibuloplasty",
  calloutBody: "Photos will follow. We are happy to book a consultation in the meantime.",
  calloutCta: "Book now",
};
