type Chunk = { id: string; title: string; keywords: string; text: string };

const CHUNKS: Chunk[] = [
  {
    id: "kapcsolat",
    title: "Elérhetőség és bejelentkezés",
    keywords: "hol vagytok cim cimetek telefon email szeged fo fasor idopont foglalas bejelentkezes kapcsolat",
    text:
      "Dentoplant Fogászati és Implantológiai Rendelő, Szeged. Cím: 6726 Szeged, Fő fasor 45. Telefon: +36 30 264 5024. Email: info@dentoplant.hu. Magánrendelő, előzetes bejelentkezés alapján. Időpont: telefonon vagy a /kapcsolat űrlapon.",
  },
  {
    id: "nyitvatartas",
    title: "Nyitvatartás",
    keywords: "mikor nyitva nyitvatartas orarend hetfo kedd szerda csutortok pentek szombat vasarnap opening hours",
    text: "Hétfő: 12:00–19:00. Kedd–csütörtök: 08:00–19:00. Péntek: 08:00–16:00. Szombat–vasárnap: zárva.",
  },
  {
    id: "elso-latogatas",
    title: "Első találkozás",
    keywords: "elso latogatas vizsgalat kontroll szuro",
    text: "Az első alkalommal kérdőív, vizsgálat, szükség szerint röntgen vagy CBCT és kezelési terv. Felnőtteknek és gyermekeknek félévente kontroll. Oldal: /szolgaltatasok/elso-talalkozas",
  },
  {
    id: "biztositas",
    title: "TB, biztosítás, egészségpénztár",
    keywords: "tb taj biztosito egeszsegpenztar maganrendelo",
    text: "Magánrendelő: közvetlen TB-elszámolás nincs. A számla utólag a legtöbb egészségpénztárnál elfogadható. Árlista: /arak",
  },
  {
    id: "arak",
    title: "Tájékoztató árak (2025. 04. 15-től)",
    keywords: "ar arak mennyibe kerul koltseg konzultacio rontgen cbct fogko gbt",
    text: "Konzultáció, státuszfelvétel: 18.000 Ft. Szakorvosi konzultáció (Dr. Maráz Kinga): 28.000 Ft. Panoráma röntgen: 12.000 Ft. Teljes szájhigiénia: 32.000–36.000 Ft. GBT: 42.000 Ft. Tájékoztató árak, teljes lista: /arak",
  },
  {
    id: "kezelesek",
    title: "Szolgáltatások",
    keywords: "szolgaltatas kezeles implantatum gyokerkezeles szabalyozas bolcsesseg",
    text: "Szájhigiénia, GBT, gyermekfogászat, gyökérkezelés, mikroszkóp, parodontológia, esztétika, DSD, implantátum, szájsebészet, fogszabályozás. Lista: /szolgaltatasok",
  },
  {
    id: "csapat",
    title: "Orvosok és csapat",
    keywords: "orvos orvosok doki maraz vadasz meszaros sebok roszik higienikus",
    text: "Dr. Maráz Kinga, Dr. Vadász Anna, Dr. Mészáros Csongor, Dr. Sebők Eszter, Dr. Roszik Melitta. Oldal: /munkatarsaink",
  },
  {
    id: "garancia",
    title: "Garancia",
    keywords: "garancia jotallas",
    text: "Garancia a Dentoplantban végzett munkákra. Nobel Biocare implantátum: élethosszig. Részletek: /garancia",
  },
];

const HOURS_ANSWER =
  "A Dentoplant rendelő nyitvatartása:\n• Hétfő: 12:00–19:00\n• Kedd–csütörtök: 08:00–19:00\n• Péntek: 08:00–16:00\n• Szombat–vasárnap: zárva\n\nElőzetes bejelentkezés kell. Időpont: +36 30 264 5024 vagy /kapcsolat";

const ADDRESS_ANSWER =
  "A rendelő címe: 6726 Szeged, Fő fasor 45. (Újszeged)\nTelefon: +36 30 264 5024\nEmail: info@dentoplant.hu\nTérkép: /kapcsolat";

const BOOKING_ANSWER =
  "Időpontot itt a chaten nem tudok foglalni, de gyorsan megy telefonon vagy űrlapon:\n• +36 30 264 5024\n• űrlap: /kapcsolat\n\nMagánrendelő, előzetes bejelentkezéssel. Nyitvatartás: H 12–19, K–Cs 8–19, P 8–16, hétvégén zárva.";

const CONSULT_PRICE_ANSWER =
  "A konzultáció, státuszfelvétel tájékoztató ára 18.000 Ft. Dr. Maráz Kinga szakorvosi konzultációja / góckutatása 28.000 Ft. A végleges díj a vizsgálattól függ. Teljes lista: /arak";

const INSURANCE_ANSWER =
  "Magánrendelő vagyunk, közvetlen TB-elszámolás nincs. A számlát utólag a legtöbb egészségpénztár és magánbiztosító elfogadja. Részletek: /arak";

const DIRECT: { needles: string[]; answer: string }[] = [
  {
    needles: ["nyitva", "nyitvatart", "orarend", "opening hour", "mikor vagytok", "meddig vagytok"],
    answer: HOURS_ANSWER,
  },
  {
    needles: ["hol vagytok", "hol van a", "cimetek", "cím", "cim", "merre van", "address", "fo fasor"],
    answer: ADDRESS_ANSWER,
  },
  {
    needles: ["idopont", "bejelentkez", "foglal", "book", "appointment"],
    answer: BOOKING_ANSWER,
  },
  {
    needles: ["konzultacio", "konzultáció", "consultation"],
    answer: CONSULT_PRICE_ANSWER,
  },
  {
    needles: ["tb", "taj", "egeszsegpenztar", "egészségpénztár", "biztosit", "biztosít"],
    answer: INSURANCE_ANSWER,
  },
];

const SYMPTOM = ["faj", "fáj", "duzzad", "verzik", "vérzik", "genny", "mit szedjek", "antibiotikum", "sürgős"];

function fold(text: string) {
  return text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function tokens(text: string) {
  return new Set((fold(text).match(/[a-z0-9]{3,}/g) ?? []));
}

export function directAnswer(question: string): string | null {
  const folded = fold(question);
  for (const row of DIRECT) {
    if (row.needles.some((n) => fold(n) && folded.includes(fold(n)))) {
      return row.answer;
    }
  }
  return null;
}

function retrieve(question: string): Chunk[] {
  const q = tokens(question);
  if (q.size === 0) return CHUNKS.slice(0, 2);
  const scored: { score: number; chunk: Chunk }[] = [];
  for (const chunk of CHUNKS) {
    const haySrc = `${chunk.title} ${chunk.text} ${chunk.id} ${chunk.keywords}`;
    const hay = tokens(haySrc);
    const folded = fold(haySrc);
    let overlap = 0;
    for (const tok of q) if (hay.has(tok)) overlap += 1;
    let fuzzy = 0;
    for (const tok of q) {
      if (tok.length < 4) continue;
      if (folded.includes(tok) || [...hay].some((h) => h.includes(tok) || h.startsWith(tok))) fuzzy += 1;
    }
    const score = overlap * 3 + fuzzy;
    if (score) scored.push({ score, chunk });
  }
  scored.sort((a, b) => b.score - a.score);
  if (!scored.length) return [CHUNKS[0]];
  return scored.slice(0, 3).map((s) => s.chunk);
}

export function answerChat(question: string): string {
  const canned = directAnswer(question);
  if (canned) return canned;
  const lower = question.toLowerCase();
  if (SYMPTOM.some((h) => lower.includes(h))) {
    return "Panaszra, fájdalomra vagy sürgős esetre itt nem tudok orvosi választ adni. Kérjük, hívja a rendelőt: +36 30 264 5024, vagy írjon az info@dentoplant.hu címre.";
  }
  return retrieve(question)[0]?.text ?? ADDRESS_ANSWER;
}
