import {
  Activity,
  Baby,
  Bone,
  Brain,
  Crown,
  Drill,
  HeartPulse,
  Layers,
  Microscope,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "./i18n/config";
import { CATEGORY_EN, SERVICE_EN } from "./i18n/content-en";

export type ServiceCategory =
  | "Megelőzés és diagnosztika"
  | "Fogmegtartás"
  | "Esztétikai fogászat"
  | "Pótlás és implantológia"
  | "Szájsebészet"
  | "Speciális kezelések";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: LucideIcon;
  /** Rövid leírás a listához és a hero alá. */
  summary: string;
  /** Igaz, ha a részletes tartalom is be van töltve a [slug] oldalra. */
  hasFullContent?: boolean;
  /** A kezelést végző orvosok/szakemberek slug-jai (lásd `lib/team.ts`). */
  doctors?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "elso-talalkozas",
    name: "Első találkozás",
    category: "Megelőzés és diagnosztika",
    icon: Stethoscope,
    summary:
      "A pácienseinkkel történő első találkozáskor beszéljük meg, milyen fogászati problémára vár Tőlünk kezelési tanácsot. Ekkor Önnek egy kérdőívet kell kitöltenie, amely személyes adataira, gyógyszerszedési szokásaira, allergiájára és esetleges megbetegedéseire vonatkozó kérdéseket tartalmaz.",
    hasFullContent: true,
  },
  {
    slug: "szajhigienia",
    name: "Szájhigiénia",
    category: "Megelőzés és diagnosztika",
    icon: ShieldCheck,
    doctors: ["dobo-huanita", "olajos-katalin"],
    summary:
      "Egészséges mosolya erősíti önbizalmát és sikereit a mindennapokban. Munkánk hosszú távú eredményességének feltétele az Ön szép és egészséges mosolya. Ennek alapja, hogy pácienseink elsajátítsák az esetüknek megfelelő fogmosási technikát, melyet egyéni szájhigiéniás programunk valósít meg.",
    hasFullContent: true,
  },
  {
    slug: "gyermekfogaszat",
    name: "Gyermekfogászat",
    category: "Megelőzés és diagnosztika",
    icon: Baby,
    summary:
      "Hiszünk abban, hogy személyes példamutatással és rendszeres fél évenkénti kontrollal a gyermekeink fogazata is egészségesen megőrizhető. Egy gyermek úgy viszonyul a fogmosáshoz, fogászati ellenőrzésekhez, amennyire a szülőnek ez fontos, ezért alkalmazzuk a családi fogászati modellt.",
    hasFullContent: true,
  },

  {
    slug: "gyokerkezeles",
    name: "Gyökérkezelés",
    category: "Fogmegtartás",
    icon: Microscope,
    doctors: ["dr-sebok-eszter"],
    summary:
      "Gyökérkezelés a fogak megtartásáért. A gyökérkezelés a fog megtartását szolgáló beavatkozás, melyet akkor végzünk, ha a pulpa, vagyis a fogbél visszafordíthatatlan károsodást szenvedett.",
    hasFullContent: true,
  },
  {
    slug: "parodontologia",
    name: "Parodontológia",
    category: "Fogmegtartás",
    icon: Activity,
    doctors: ["dr-maraz-kinga"],
    summary:
      "A parodontológia a fogágy betegségeivel és kezelésével foglalkozó önálló szakterület. Kezelési lehetőséget biztosít az egyszerű ínygyulladás megoldásától a tartószövetek sorvadása miatt mozgathatóvá váló reménytelen fogak megtartásáig.",
    hasFullContent: true,
  },
  {
    slug: "inygyulladas",
    name: "Ínygyulladás",
    category: "Fogmegtartás",
    icon: Brain,
    doctors: ["dr-maraz-kinga"],
    summary:
      "Az ínygyulladás a fogakat körülvevő íny felületes gyulladása, amely általában jól kezelhető. Időben észrevett ínygyulladás csak az ínyszélt érinti, ha azonban kezelés nélkül hagyjuk és nem fordulunk fogorvoshoz, akkor a legegyszerűbb gyulladás is tovább terjedhet.",
    hasFullContent: true,
  },
  {
    slug: "fogagybetegseg-kezelese",
    name: "Fogágybetegség kezelése",
    category: "Fogmegtartás",
    icon: HeartPulse,
    doctors: ["dr-maraz-kinga"],
    summary:
      "Fogágybetegség esetén erre vonatkozó protokoll szerint végezzük a tisztítási lépéseket. Több fogágybetegség típusról tudományos bizonyítást nyert, hogy hátterében jellegzetes baktériumok jelenléte áll.",
  },

  {
    slug: "esztetikai-fogaszat",
    name: "Esztétikai fogászat",
    category: "Esztétikai fogászat",
    icon: Sparkles,
    doctors: ["dr-vadasz-anna", "dr-sebok-eszter"],
    summary:
      "Az esztétikai fogászat egy igényes összetett szemlélet, mely több szakterület együttműködésével foglalja magába: a szép fogszínt, az ideális és archoz illő fogformát, fémmentes fogpótlásokat, tökéletes illesztéseket.",
    hasFullContent: true,
  },
  {
    slug: "fogfeherites",
    name: "Fogfehérítés",
    category: "Esztétikai fogászat",
    icon: Smile,
    doctors: ["dr-sebok-eszter"],
    summary:
      "A fogfehérítés napjainkban biztonságos és könnyen elvégezhető beavatkozás, melyet rendelőnkben is nap mint nap végzünk. Szeretettel várjuk rendelőnkben, látogasson el hozzánk!",
    hasFullContent: true,
  },
  {
    slug: "digitalis-mosolytervezes",
    name: "Digitális mosolytervezés",
    category: "Esztétikai fogászat",
    icon: Wand2,
    doctors: ["dr-vadasz-anna", "dr-maraz-kinga", "dr-meszaros-csongor"],
    summary:
      "Digitális mosolytervezés (Digital Smile Design, DSD) segítségével már a kezelés elején meg tudjuk jeleníteni a várható végeredményt anélkül, hogy azt a valóságban kiviteleztük volna, így a páciens nem vállal kockázatot. Egy speciális tervező szoftverrel, a kezelőorvossal együttműködve készül a személyre szabott mosolyterv.",
    hasFullContent: true,
  },

  {
    slug: "fogpotlas",
    name: "Fogpótlás",
    category: "Pótlás és implantológia",
    icon: Crown,
    doctors: ["dr-maraz-kinga"],
    summary:
      "A fogak elvesztését időben elvégzett, korszerű fogmegtartó regeneratív módszerekkel meg lehet előzni. Amennyiben mégis foghiánya van, akkor fogpótlásra lesz szüksége, mert már egyetlen fog elvesztésével is megbomlik a fogazat egysége.",
  },
  {
    slug: "fogbeultetes",
    name: "Fogbeültetés",
    category: "Pótlás és implantológia",
    icon: Layers,
    doctors: ["dr-maraz-kinga", "dr-meszaros-csongor"],
    summary:
      "A fogászati implantáció a hiányzó fogak pótlásának olyan módszere, melynek során a specialista fogorvos implantátumot ültet be az állcsontba, amely implantátum a gyógyulás és a fogpótlás elkészítését követően képes az elvesztett fogak szerepét átvenni.",
  },
  {
    slug: "implantatum",
    name: "Implantátum",
    category: "Pótlás és implantológia",
    icon: Bone,
    doctors: ["dr-maraz-kinga", "dr-meszaros-csongor"],
    summary:
      "Rendelőnkben kiemelten magas szakmai színvonalú implantológiai ellátással találkozhat. Mindezt emelt szintű külföldi képzéseken elsajátított korszerű módszerek és a magas minőségű Nobel® implantátumok alkalmazása teszi lehetővé. Mert a minőség a legjobb döntés, és ez a választás egy életre szól.",
    hasFullContent: true,
  },

  {
    slug: "szajsebeszet",
    name: "Szájsebészet",
    category: "Szájsebészet",
    icon: Scissors,
    doctors: ["dr-maraz-kinga", "dr-meszaros-csongor", "dr-roszik-melitta"],
    summary:
      "A fogeltávolítások többségében elegendő csak egy egyszerű műszerrel kibillenteni a beteg fogat, viszont a mélyebben fekvő gyökerek, elő nem tört fogak csak szájsebészeti kisműtéttel távolíthatóak el. Ezeket feltárásból végzett fogeltávolításnak nevezzük.",
    hasFullContent: true,
  },
  {
    slug: "bolcsessegfog",
    name: "Bölcsességfog",
    category: "Szájsebészet",
    icon: Syringe,
    doctors: ["dr-maraz-kinga", "dr-meszaros-csongor"],
    summary:
      "A bölcsességfogak jellemzően az utolsóként előtörő maradófogaink. 18-25 éves kor körül várható megjelenésük, viszont már jóval korábban okozhatnak gondot. Bölcsesség helyett inkább panaszokkal nehezítik meg napjainkat, mivel gyakran fordul elő, hogy nem férnek el az állkapocsban, ferdén vagy egyáltalán nem törnek elő, nyomják a szomszédos fogat vagy egyszerűen fájdalmat okoznak.",
    hasFullContent: true,
  },

  {
    slug: "fogszabalyozas",
    name: "Fogszabályozás",
    category: "Speciális kezelések",
    icon: Drill,
    doctors: ["dr-vadasz-anna"],
    summary:
      "Az orthodontia (fogszabályozás) a fogorvoslás egyik legdinamikusabban fejlődő és egyben legkorábban önállóvá vált szakterülete. A fogak, a fogmeder-nyúlvány és az állcsontok alaki és helyzeti rendellenességeinek diagnosztizálását, azok további rosszabbodásának megelőzését és gyógyítását foglalja magába.",
    hasFullContent: true,
  },
  {
    slug: "lezerfogaszat",
    name: "Lézerfogászat",
    category: "Speciális kezelések",
    icon: Zap,
    doctors: ["dr-maraz-kinga"],
    summary:
      "A korszerű fogászati ellátásban mára a lézerrel végzett kezelések is méltó helyükre kerültek. A Dentoplant Fogászati és Implantológiai Rendelőben alkalmazott lézer készülék segítségével 3 különböző hullámhosszon végzünk fogászati kezeléseket, mellyel a lézeres fogászat széles indikációs területét látjuk el.",
  },
];

export const SERVICE_CATEGORIES: { name: ServiceCategory; description: string }[] = [
  {
    name: "Megelőzés és diagnosztika",
    description: "Az alapok: első találkozás, szájhigiénia és a gyermekek fogainak megőrzése.",
  },
  {
    name: "Fogmegtartás",
    description: "Saját fogai megőrzése áll a fókuszban — gyökérkezeléstől parodontológiáig.",
  },
  {
    name: "Esztétikai fogászat",
    description: "Természetes hatású, archoz illő mosoly — digitális tervezéssel és kerámia megoldásokkal.",
  },
  {
    name: "Pótlás és implantológia",
    description: "Fix és kivehető pótlások, Nobel® implantátumokkal, kompromisszumok nélkül.",
  },
  {
    name: "Szájsebészet",
    description: "Szakszerű fogeltávolítás és kisműtétek, biztonságos környezetben.",
  },
  {
    name: "Speciális kezelések",
    description: "Fogszabályozás és lézeres kezelések — pontosan, modern eszközökkel.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

/* -------------------------------------------------------------------------- */
/*  Lokalizált getterek                                                       */
/* -------------------------------------------------------------------------- */

export function serviceName(service: Service, locale: Locale): string {
  return locale === "en" ? SERVICE_EN[service.slug]?.name ?? service.name : service.name;
}

export function serviceSummary(service: Service, locale: Locale): string {
  return locale === "en"
    ? SERVICE_EN[service.slug]?.summary ?? service.summary
    : service.summary;
}

export function categoryLabel(category: ServiceCategory, locale: Locale): string {
  return locale === "en" ? CATEGORY_EN[category]?.name ?? category : category;
}

export function categoryDescription(
  cat: { name: ServiceCategory; description: string },
  locale: Locale,
): string {
  return locale === "en" ? CATEGORY_EN[cat.name]?.description ?? cat.description : cat.description;
}
