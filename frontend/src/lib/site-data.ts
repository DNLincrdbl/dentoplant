import { SERVICE_CATEGORIES, getServicesByCategory } from "./services";
import { TEAM } from "./team";

export const SITE = {
  name: "Dentoplant",
  longName: "Dentoplant Fogászati és Implantológiai Rendelő",
  city: "Szeged",
  phone: "+36 30 264 5024",
  phoneHref: "tel:+36302645024",
  email: "info@dentoplant.hu",
  address: "6726 Szeged, Fő fasor 79.",
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

export const NAV: NavItem[] = [
  { label: "Bemutatkozás", href: "/bemutatkozas" },
  {
    label: "Orvosaink",
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
    label: "Szolgáltatások",
    href: "/szolgaltatasok",
    groups: SERVICE_CATEGORIES.map((cat) => ({
      heading: cat.name,
      description: cat.description,
      children: getServicesByCategory(cat.name).map((s) => ({
        label: s.name,
        href: `/szolgaltatasok/${s.slug}`,
      })),
    })),
  },
  { label: "Árak", href: "/arak" },
  { label: "Garancia", href: "/garancia" },
  { label: "Esetek", href: "/esetek" },
  { label: "Galéria", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];
