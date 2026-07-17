import {
  SERVICE_CATEGORIES,
  categoryLabel,
  getServicesByCategory,
  serviceName,
} from "./services";
import { TEAM } from "./team";
import type { Locale } from "./i18n/config";
import { NAV_LABELS_EN } from "./i18n/content-en";

export const SITE = {
  name: "Dentoplant",
  longName: "Dentoplant Fogászati és Implantológiai Rendelő",
  city: "Szeged",
  phone: "+36 30 264 5024",
  phoneHref: "tel:+36302645024",
  email: "info@dentoplant.hu",
  address: "6726 Szeged, Fő fasor 45.",
  hours: [
    { day: "Hétfő – Csütörtök", value: "08:00 – 19:00" },
    { day: "Péntek", value: "08:00 – 16:00" },
    { day: "Szombat – Vasárnap", value: "Zárva" },
  ],
  social: {
    facebook: "https://www.facebook.com/dentoplant",
    instagram: "https://www.instagram.com/dentoplant",
  },
} as const;

export type NavChild = { label: string; href: string; description?: string };
export type NavGroup = { heading: string; description?: string; children: NavChild[] };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  groups?: NavGroup[];
};

const label = (hu: string, locale: Locale) =>
  locale === "en" ? NAV_LABELS_EN[hu] ?? hu : hu;

/** Navigáció felépítése az adott nyelvhez. */
export function getNav(locale: Locale): NavItem[] {
  return [
    { label: label("Bemutatkozás", locale), href: "/bemutatkozas" },
    {
      label: label("Orvosaink", locale),
      href: "/munkatarsaink",
      children: TEAM.flatMap((group) =>
        group.members.map((m) => ({
          label: m.name,
          href: m.hasProfile ? `/munkatars/${m.slug}` : "/munkatarsaink",
          description: m.role,
        })),
      ),
    },
    {
      label: label("Szolgáltatások", locale),
      href: "/szolgaltatasok",
      groups: SERVICE_CATEGORIES.map((cat) => ({
        heading: categoryLabel(cat.name, locale),
        description: cat.description,
        children: getServicesByCategory(cat.name).map((s) => ({
          label: serviceName(s, locale),
          href: `/szolgaltatasok/${s.slug}`,
        })),
      })),
    },
    { label: label("Árak", locale), href: "/arak" },
    { label: label("Garancia", locale), href: "/garancia" },
    { label: label("Esetek", locale), href: "/esetek" },
    { label: label("Galéria", locale), href: "/galeria" },
    { label: label("Blog", locale), href: "/blog" },
    { label: label("Kapcsolat", locale), href: "/kapcsolat" },
  ];
}

export const NAV: NavItem[] = getNav("hu");

/** Nyitvatartás lokalizálva (a napnevek fordítása). */
const HOURS_EN: Record<string, string> = {
  "Hétfő – Csütörtök": "Monday – Thursday",
  Péntek: "Friday",
  "Szombat – Vasárnap": "Saturday – Sunday",
  Zárva: "Closed",
};

export function getHours(locale: Locale): { day: string; value: string }[] {
  if (locale !== "en") return SITE.hours.map((h) => ({ ...h }));
  return SITE.hours.map((h) => ({
    day: HOURS_EN[h.day] ?? h.day,
    value: HOURS_EN[h.value] ?? h.value,
  }));
}
