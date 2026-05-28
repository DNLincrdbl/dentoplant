export type CareerEntry = { year: string; event: string };

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** Részletes szakmai háttér / titulusok — kártyán megjelenik. */
  credentials?: string[];
  /** „Szakterülete" — vesszővel elválasztott rövid lista. */
  focus?: string;
  /** Kép útvonal a /public mappához képest. Ha nincs, gradient placeholder jelenik meg. */
  image?: string;
  /** Ha true, a listaoldalon a kártya az /munkatars/[slug] profilra mutat. */
  hasProfile?: boolean;
  /** Hosszabb bemutatkozó bekezdések a profiloldalon. */
  bio?: string[];
  /** Idézet / személyes hangú részlet — kiemelt blokkban jelenik meg. */
  quote?: string;
  /** Szakmai életpálya — visszafelé időrendben. */
  career?: CareerEntry[];
  /** Szakmai szervezeti tagságok. */
  affiliations?: string[];
};

export type TeamGroup = {
  heading: string;
  members: TeamMember[];
};

export const TEAM: TeamGroup[] = [
  {
    heading: "Fogorvosok",
    members: [
      {
        slug: "dr-maraz-kinga",
        name: "Dr. Maráz Kinga",
        role: "Dento-alveoláris sebész szakorvos",
        credentials: [
          "Master of Implantology, University of California, Los Angeles",
          "Konzerváló fogászat és fogpótlástan szakorvosa",
          "Fog- és szájbetegségek szakorvosa",
        ],
        focus: "Fogágybetegségek kezelése, csontpótlás, implantológia",
        image: "/munkatarsak/dr-marazi-kinga.jpg",
        hasProfile: true,
        bio: [
          "Számtalan hazai és külföldi tudományos program résztvevőjeként a legmagasabb szakmai felkészültséget tekintem egy jól működő praxis alapjául.",
        ],
        quote:
          "Szerencsés vagyok, hogy a Dentoplant Fogászati és Implantológiai Rendelőben egy ilyen nagyszerű csapattal dolgozhatok együtt. Közös bennünk, hogy szenvedélyesen szeretjük hivatásunkat és igyekszünk a maximumot nyújtani. Pontosság, megbízhatóság és a páciensek tisztelete, amit minden kollégámtól elvárok a közös munka során. Naprakész szakmai ismeretek, alapos felkészültség és sok éves klinikai tapasztalat munkám értékmérője.",
        affiliations: [
          "International Team for Implantology (ITI) tagja",
          "Magyar Parodontológiai Társaság",
          "Magyar Implantológiai Társaság",
          "Magyar Arc-, Állcsont-, és Szájsebészeti Társaság tagja",
          "Magyar Orvosi Kamara Fogorvosi Tagozatának tagja",
        ],
        career: [
          { year: "2025", event: "Magyar Arc-, Állcsont és Szájsebészeti Társaság 2025. évi Kongresszusa, Visegrád" },
          { year: "2025", event: "EuroPerio 11, Bécs (május 14–17.)" },
          {
            year: "2025",
            event:
              "Perspektívák a paro-implantológiában és a komprehenzív fogászatban — Symposium Szeged",
          },
          { year: "2024", event: "Magyar Arc-, Állcsont és Szájsebészeti Társaság 2024. évi Kongresszusa, Szeged" },
          {
            year: "2024",
            event:
              "Recessziófedés kötőszövetes grafttal és tunnel technikával — Edward P. Allen Hands-on Workshop, Urban Regeneration Institute, Budapest",
          },
          { year: "2024", event: "4th Urban Regeneration Symposium, Budapest" },
          { year: "2024", event: "International Team for Implantology World Symposium, Szingapúr" },
          {
            year: "2024",
            event:
              "Symposium Szeged — Lágyrész menedzsment a parodontológiában, Hands-on workshop (Prof. Sculean)",
          },
          {
            year: "2023",
            event:
              "Advanced Bone and Soft Tissue Regeneration Course in Implant Dentistry — 3 napos intenzív elméleti és gyakorlati képzés Dr. Urbán Istvánnal, Urban Regeneration Institute, Budapest",
          },
          { year: "2022", event: "EuroPerio 10 Kongresszus, Koppenhága" },
          {
            year: "2021",
            event:
              "Alsó állcsonton kialakult ínyrecessziók megoldásának fogágy plasztikai sebészeti lehetőségei — koronálisan csúsztatott lebeny vagy tunnel technika? Department of Periodontology, University of Bern",
          },
          { year: "2019", event: "II. Urbán Kemény- és Lágyszövet Regenerációs Szimpózium, Budapest" },
          {
            year: "2019",
            event:
              "Dr. Joseph Kan DDS Pre Symposium Hands-on Workshop: implantátum behelyezés esztétikai zónába azonnali terheléssel és kötőszövetes szabadlebeny átültetéssel, Budapest",
          },
          { year: "2018", event: "Dento-alveoláris sebészet szakvizsga, Szegedi Tudományegyetem" },
          { year: "2018", event: "Lézergyógyászati Tanfolyam, Photolase, Budapest" },
          { year: "2017", event: "Első Nemzetközi Regenerációs Szimpózium, Budapest" },
          {
            year: "2017",
            event:
              "Dr. Michael A. Pikos DDS Pre Symposium Hands-on Workshop: állcsontok csontpótlási technikái, Urban Institute, Budapest",
          },
          {
            year: "2016",
            event:
              "Parodontológiai plasztikai sebészeti kurzus és recessziófedés a gyakorlatban (Dr. P. Cortellini és Prof. Dr. M. Tonetti), Firenze, Olaszország",
          },
          { year: "2015", event: "EuroPerio 8 Kongresszus, London, Egyesült Királyság" },
          {
            year: "2009",
            event: "Parodontológia mesterkurzus, Universität Bern Parodontológiai Osztálya, Svájc",
          },
          {
            year: "2008",
            event: "Master of Implantology diploma — UCLA, University of California Los Angeles, USA",
          },
          {
            year: "2007",
            event:
              "Tanulmányút a St. Radboud University Medical Center Parodontológiai Osztályán, Nijmegen",
          },
          {
            year: "2006",
            event:
              "Parodontológia szakirányú egyéni képzés a Semmelweis Orvostudományi Egyetem Parodontológiai Osztályán",
          },
          { year: "2006", event: "Konzerváló fogászat és fogpótlástan szakvizsga" },
          { year: "2001", event: "Dentoplant magánpraxis alapítása" },
          { year: "1998", event: "Fog- és szájbetegségek szakvizsga" },
          {
            year: "1996",
            event:
              "Szegedi Tudományegyetem Fogászati és Szájsebészeti Klinikáján klinikai orvos",
          },
          {
            year: "1996",
            event:
              "Fogorvosi diploma — Szegedi Tudományegyetem Fogorvostudományi Kar, „Summa cum laude”",
          },
        ],
      },
      {
        slug: "dr-vadasz-anna",
        name: "Dr. Vadász Anna",
        role: "Fogszabályozó szakorvos",
        focus: "Esztétikai fogászat és mosolytervezés",
      },
      {
        slug: "dr-meszaros-csongor",
        name: "Dr. Mészáros Csongor",
        role: "Fogorvos",
        credentials: ["Dentoalveoláris sebész szakorvos jelölt"],
        focus: "Szájsebészeti beavatkozások, digitális fogászati megoldások",
      },
      {
        slug: "dr-sebok-eszter",
        name: "Dr. Sebők Eszter",
        role: "Fogorvos, endodontus fogszakorvos",
        focus: "Gyökérkezelések, restauratív fogászat, esztétikai fogászat",
      },
      {
        slug: "dr-roszik-melitta",
        name: "Dr. Roszik Melitta",
        role: "Aneszteziológus szakorvos",
        focus: "Fájdalom csillapítás, anesztézia",
      },
    ],
  },
  {
    heading: "Rendelővezető",
    members: [
      {
        slug: "biacsine-krivan-anett",
        name: "Biacsiné Kriván Anett",
        role: "Rendelővezető",
      },
    ],
  },
  {
    heading: "Asszisztensek",
    members: [
      {
        slug: "dobo-huanita",
        name: "Csató-Dobó Huanita",
        role: "Vezető dentálhigiénikus",
      },
      {
        slug: "olajos-katalin",
        name: "Olajos Katalin",
        role: "Fogászati szakasszisztens, dentálhigiénikus",
      },
      {
        slug: "ludanyi-dora",
        name: "Ludányi Dóra",
        role: "Fogászati szakasszisztens",
      },
      {
        slug: "megyes-fanni",
        name: "Megyes Fanni",
        role: "Fogászati szakasszisztens",
      },
    ],
  },
];

/** Egyszerű kétbetűs monogram-generátor a placeholder körhöz. */
export function initials(fullName: string): string {
  const parts = fullName
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
