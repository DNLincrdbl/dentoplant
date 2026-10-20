"""Nyilvános, általános infó a Dentoplant chathez. Nem orvosi tanács."""

from __future__ import annotations

import re
import unicodedata

CHUNKS: list[dict[str, str]] = [
    {
        "id": "kapcsolat",
        "title": "Elérhetőség és bejelentkezés",
        "keywords": "hol vagytok cim cimetek telefon email szeged fo fasor idopont foglalas bejelentkezes kapcsolat",
        "text": (
            "Dentoplant Fogászati és Implantológiai Rendelő, Szeged. "
            "Cím: 6726 Szeged, Fő fasor 45. "
            "Telefon: +36 30 264 5024. Email: info@dentoplant.hu. "
            "Facebook: facebook.com/dentoplant. Instagram: instagram.com/dentoplant. "
            "Magánrendelő, előzetes bejelentkezés alapján működik. "
            "Időpont: telefonon a recepcióval, vagy a /kapcsolat oldali űrlapon. "
            "Oldal: /kapcsolat"
        ),
    },
    {
        "id": "nyitvatartas",
        "title": "Nyitvatartás",
        "keywords": "mikor nyitva nyitvatartas orarend hetfo kedd szerda csutortok pentek szombat vasarnap opening hours",
        "text": (
            "Hétfő: 12:00–19:00. Kedd–csütörtök: 08:00–19:00. "
            "Péntek: 08:00–16:00. Szombat–vasárnap: zárva. "
            "Kisebb csúszás előfordulhat; erről időben értesítik a pácienst."
        ),
    },
    {
        "id": "elso-latogatas",
        "title": "Első találkozás",
        "keywords": "elso latogatas vizsgalat kontroll szuro",
        "text": (
            "Az első alkalommal kórelőzmény-kérdőív, vizsgálat, szükség szerint "
            "digitális röntgen vagy CBCT, fotódokumentáció és kezelési terv. "
            "Felnőtteknek félévente kontroll és professzionális szájhigiénia javasolt. "
            "Gyermekeknek szintén félévente. Oldal: /szolgaltatasok/elso-talalkozas"
        ),
    },
    {
        "id": "biztositas",
        "title": "TB, biztosítás, egészségpénztár",
        "keywords": "tb taj biztosito egeszsegpenztar maganrendelo",
        "text": (
            "Magánrendelő: közvetlen TB-elszámolás és biztosítói kártyás fizetés nincs. "
            "A számla utólag a legtöbb egészségpénztárnál és magánbiztosítónál elszámolható. "
            "Részletek időpontfoglaláskor. Árlista: /arak"
        ),
    },
    {
        "id": "arak",
        "title": "Tájékoztató árak (2025. 04. 15-től)",
        "keywords": "ar arak mennyibe kerul koltseg konzultacio rontgen cbct fogko gbt",
        "text": (
            "Az árak tájékoztató jellegűek, a végleges díj a vizsgálattól függ. "
            "Konzultáció, státuszfelvétel: 18.000 Ft. "
            "Szakorvosi konzultáció / góckutatás (Dr. Maráz Kinga): 28.000 Ft. "
            "Digitális helyi röntgen: 6.000 Ft. Panoráma röntgen: 12.000 Ft. "
            "3D CBCT (alsó-felső, implantológia): 29.000 Ft. "
            "3D CBCT ENDO: 26.000 Ft. "
            "Teljes szájhigiénia (Piezo + homokfúvás + mikropolírozás): 32.000–36.000 Ft. "
            "GBT (EMS AIRFLOW Prophylaxis Master): 42.000 Ft. "
            "Esztétikus tömés (GC Essentia): 34.000 Ft-tól. "
            "Tejfog tömés: 23.000 Ft. Barázdazárás: 21.000 Ft. "
            "DSD fotózás és vizuális terv: 78.000 Ft. "
            "Nincs rendelési díj a kezelésen felül. Teljes lista: /arak"
        ),
    },
    {
        "id": "kezelesek",
        "title": "Szolgáltatások",
        "keywords": "szolgaltatas kezeles implantatum gyokerkezeles szabalyozas bolcsesseg",
        "text": (
            "Szájhigiénia, fogkőeltávolítás, GBT, implantátum higiénia, gyermekfogászat. "
            "Gyökérkezelés, mikroszkópos fogászat (Zeiss Extaro 300). "
            "Parodontológia, ínygyulladás, fogágybetegség, hyaDENT BG, Emdogain, "
            "csontpótlás fogak mellett, ínyplasztika. "
            "Esztétika, fogfehérítés, digitális mosolytervezés (DSD). "
            "Fogpótlás, fogbeültetés, Nobel implantátumok. "
            "Szájsebészet: fogeltávolítás, alveólus prezerváció, csontpótlás, "
            "arcüregemelés, vestibulum plasztika, fogmegtartó műtétek, bölcsességfog. "
            "Fogszabályozás, lézerfogászat. Lista: /szolgaltatasok"
        ),
    },
    {
        "id": "szajhigienia",
        "title": "Szájhigiénia és GBT",
        "keywords": "fogko lepedek higienia gbt biofilm airflow",
        "text": (
            "Professzionális fogkőeltávolítás, polírozás, sópolírozás. "
            "A GBT (Guided Biofilm Therapy) 8 lépéses, kíméletes biofilm-eltávolítás. "
            "Implantátumokhoz külön, implantátumra tervezett tisztítás kell. "
            "Oldalak: /szolgaltatasok/szajhigienia, "
            "/szolgaltatasok/iranyitott-biofilm-kezeles, "
            "/szolgaltatasok/implantatum-higenia"
        ),
    },
    {
        "id": "csapat",
        "title": "Orvosok és csapat",
        "keywords": "orvos orvosok doki maraz vadasz meszaros sebok roszik higienikus",
        "text": (
            "Fogorvosok: Dr. Maráz Kinga (dento-alveoláris sebész, implantológia, fogágy), "
            "Dr. Vadász Anna (fogszabályozás, esztétika, DSD, gyermek), "
            "Dr. Mészáros Csongor (implantológia, szájsebészet, DSD), "
            "Dr. Sebők Eszter (gyökérkezelés, mikroszkóp, esztétika, fogfehérítés), "
            "Dr. Roszik Melitta (szájsebészet). "
            "Dentálhigiénikusok: Csató-Dobó Huanita, Olajos Katalin. "
            "Recepció: Biacsiné Kriván Anett. "
            "Asszisztensek: Ludányi Dóra, Megyes Fanni. "
            "Oldal: /munkatarsaink"
        ),
    },
    {
        "id": "garancia",
        "title": "Garancia",
        "keywords": "garancia jótállás jotallas",
        "text": (
            "Garancia csak a Dentoplant orvosai által végzett beavatkozásokra "
            "és a saját fogtechnikai munkákra. Érvényesítés: 6726 Szeged, Fő fasor 45. "
            "Nobel Biocare implantátum gyártói garancia: élethosszig. "
            "Camlog és AlfaBio anyag: 5 év. Cirkonkerámia: 3 év. "
            "Fémkerámia / préskerámia / inlay: 2 év. Tömés és kivehető pótlás: 1 év. "
            "Implantátumra készülő rögzített pótlás: 3 év. "
            "Feltétel: féléves szűrés és dentálhigiénia, megfelelő otthoni tisztítás. "
            "Panaszt 14 napon belül be kell jelenteni. Oldal: /garancia"
        ),
    },
    {
        "id": "felelem",
        "title": "Fájdalom és fogorvosfélelem",
        "keywords": "felelem szorongas erzestelenites fajdalommentes",
        "text": (
            "Helyi érzéstelenítés és kíméletes technikák. "
            "A kezelést a páciens tempójához igazítják. "
            "A chatbot nem mondja meg, hogy egy adott panasz fáj-e vagy mit kell műteni."
        ),
    },
    {
        "id": "feherites",
        "title": "Fogfehérítés",
        "keywords": "feherites feherit feher fogszin",
        "text": (
            "Rendelői fogfehérítés. A hatás életmódtól függően kb. 6 hónap–2 év. "
            "Oldal: /szolgaltatasok/fogfeherites"
        ),
    },
]


def _fold(text: str) -> str:
    nfkd = unicodedata.normalize("NFKD", text.lower())
    return "".join(ch for ch in nfkd if not unicodedata.combining(ch))


_TOKEN_RE = re.compile(r"[a-z0-9]{3,}", re.I)


def _tokens(text: str) -> set[str]:
    return set(_TOKEN_RE.findall(_fold(text)))


HOURS_ANSWER = (
    "A Dentoplant rendelő nyitvatartása:\n"
    "• Hétfő: 12:00–19:00\n"
    "• Kedd–csütörtök: 08:00–19:00\n"
    "• Péntek: 08:00–16:00\n"
    "• Szombat–vasárnap: zárva\n\n"
    "Előzetes bejelentkezés kell. Időpont: +36 30 264 5024 vagy /kapcsolat"
)

ADDRESS_ANSWER = (
    "A rendelő címe: 6726 Szeged, Fő fasor 45. (Újszeged)\n"
    "Telefon: +36 30 264 5024\n"
    "Email: info@dentoplant.hu\n"
    "Térkép: /kapcsolat"
)

BOOKING_ANSWER = (
    "Időpontot itt a chaten nem tudok foglalni, de gyorsan megy telefonon vagy űrlapon:\n"
    "• +36 30 264 5024\n"
    "• űrlap: /kapcsolat\n\n"
    "Magánrendelő, előzetes bejelentkezéssel. "
    "Nyitvatartás: H 12–19, K–Cs 8–19, P 8–16, hétvégén zárva."
)

CONSULT_PRICE_ANSWER = (
    "A konzultáció, státuszfelvétel tájékoztató ára 18.000 Ft. "
    "Dr. Maráz Kinga szakorvosi konzultációja / góckutatása 28.000 Ft. "
    "A végleges díj a vizsgálattól függ. Teljes lista: /arak"
)

INSURANCE_ANSWER = (
    "Magánrendelő vagyunk, közvetlen TB-elszámolás nincs. "
    "A számlát utólag a legtöbb egészségpénztár és magánbiztosító elfogadja. "
    "Részletek: /arak"
)

_DIRECT: list[tuple[tuple[str, ...], str]] = [
    (
        (
            "nyitva",
            "nyitvatart",
            "orarend",
            "opening hour",
            "open today",
            "mikor vagytok",
            "meddig vagytok",
            "heti rend",
        ),
        HOURS_ANSWER,
    ),
    (
        ("hol vagytok", "hol van a", "cimetek", "cím", "cim", "merre van", "hol talalhato", "address", "fo fasor"),
        ADDRESS_ANSWER,
    ),
    (
        ("idopont", "bejelentkez", "foglal", "book", "appointment"),
        BOOKING_ANSWER,
    ),
    (
        ("konzultacio", "konzultáció", "mennyibe", "mennyibe kerul a konzult", "consultation"),
        CONSULT_PRICE_ANSWER,
    ),
    (
        ("tb", "taj", "egeszsegpenztar", "egészségpénztár", "biztosit", "biztosít"),
        INSURANCE_ANSWER,
    ),
]


def direct_answer(question: str) -> str | None:
    folded = _fold(question)
    for needles, answer in _DIRECT:
        if any(_fold(n) in folded for n in needles):
            return answer
    return None


def retrieve(question: str, limit: int = 5) -> list[dict[str, str]]:
    q = _tokens(question)
    if not q:
        return CHUNKS[:2]
    scored: list[tuple[int, dict[str, str]]] = []
    for chunk in CHUNKS:
        hay_src = f"{chunk['title']} {chunk['text']} {chunk['id']} {chunk.get('keywords', '')}"
        hay = _tokens(hay_src)
        folded = _fold(hay_src)
        overlap = len(q & hay)
        fuzzy = 0
        for tok in q:
            if len(tok) < 4:
                continue
            if tok in folded or any(tok in h or h.startswith(tok) for h in hay):
                fuzzy += 1
        score = overlap * 3 + fuzzy
        if score:
            scored.append((score, chunk))
    scored.sort(key=lambda item: item[0], reverse=True)
    if not scored:
        return [CHUNKS[0], CHUNKS[3]]
    return [c for _, c in scored[:limit]]
