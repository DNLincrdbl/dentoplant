#!/usr/bin/env python3
"""Letölti a dentoplant.hu/munkatars/<slug> profiloldalak fotóit a public/munkatarsak mappába,
és kinyeri a bemutatkozó szöveget (bio, szakmai életpálya, ösztöndíjak, tagságok, idézet).
Kimenet: src/lib/team-profiles.generated.ts (PROFILES objektum slug -> profil).

A team.ts kézi metaadatai (role, focus, credentials, Dr. Maráz Kinga teljes profilja)
ELSŐBBSÉGET élveznek; ez a fájl csak kitölti a hiányokat (kép, bio, career, affiliations, quote)."""
from __future__ import annotations

import html
import json
import re
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "munkatarsak"
MANIFEST = ROOT / "src" / "lib" / "team-profiles.generated.ts"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36"

SLUGS = [
    "dr-maraz-kinga",
    "dr-vadasz-anna",
    "dr-meszaros-csongor",
    "dr-sebok-eszter",
    "dr-roszik-melitta",
    "biacsine-krivan-anett",
    "dobo-huanita",
    "olajos-katalin",
    "ludanyi-dora",
    "megyes-fanni",
]

# Ezeknél a team.ts kézi profilja a forrás; csak a képet frissítjük, a szöveget nem generáljuk.
SKIP_TEXT = {"dr-maraz-kinga"}

SECTION_LABELS = {
    "career": "szakmai életpálya",
    "scholarships": "ösztöndíjak",
    "affiliations": "szakmai szervezetek",
}


def fetch(url: str) -> bytes:
    parts = urllib.parse.urlsplit(url)
    safe = urllib.parse.urlunsplit(
        (parts.scheme, parts.netloc, urllib.parse.quote(parts.path), parts.query, parts.fragment)
    )
    req = urllib.request.Request(safe, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def strip_size(url: str) -> str:
    return re.sub(r"-\d+x\d+(\.[a-zA-Z]+)$", r"\1", url)


def worker_block(h: str) -> str:
    i = h.find("dp-worker__content")
    if i < 0:
        return ""
    # a kapcsolódó cikkek blokkjáig
    j = h.find("dp-related", i)
    return h[i : j if j > 0 else i + 8000]


def to_lines(seg: str) -> list[str]:
    seg = re.sub(r"<(p|br|li|h[1-6]|div|tr)[^>]*>", "\n", seg, flags=re.I)
    seg = re.sub(r"<[^>]+>", "", seg)
    seg = html.unescape(seg)
    return [l.strip() for l in seg.splitlines() if l.strip()]


def parse_profile(slug: str, h: str) -> dict:
    seg = worker_block(h)
    lines = to_lines(seg)
    # az elso sor gyakran a "dp-worker__content">" maradvany
    lines = [l for l in lines if "dp-worker__content" not in l]

    intro: list[str] = []
    career: list[dict] = []
    affiliations: list[str] = []
    current = "intro"

    quote = None
    for raw in lines:
        low = raw.lower().rstrip(":")
        matched = False
        for key, label in SECTION_LABELS.items():
            if low.startswith(label):
                current = key
                matched = True
                break
        if matched:
            continue

        ym = re.match(r"^(\d{4})\s*[–-]\s*(.+)$", raw)
        if current in ("career", "scholarships"):
            if ym:
                career.append({"year": ym.group(1), "event": ym.group(2).strip()})
            continue
        if current == "affiliations":
            affiliations.append(raw)
            continue
        # intro
        intro.append(raw)

    # idezet kiszedese a teljes szovegbol
    joined = " ".join(lines)
    qm = re.search(r"[„\"]([^„”\"]{20,}?)[”\"]", joined)
    if qm:
        quote = qm.group(1).strip()
        # ha az idezet az affiliations/intro koze keveredett, tisztitsuk
        affiliations = [a for a in affiliations if a not in quote and quote not in a]
        intro = [a for a in intro if a not in quote and quote not in a]

    # career rendezese ev szerint csokkeno
    career.sort(key=lambda c: c["year"], reverse=True)

    prof: dict = {"image": None}
    bio = [p for p in intro if len(p) > 3 and not p.lower().startswith("dr.")]
    if bio:
        prof["bio"] = bio
    if career:
        prof["career"] = career
    if affiliations:
        prof["affiliations"] = affiliations
    if quote:
        prof["quote"] = quote
    return prof


def download_image(slug: str, h: str) -> str | None:
    # a profilfoto a dp-worker blokkban van (content elott); a teljes oldalon keressuk,
    # az elso "uploads" kep, ami nem logo/ikon
    cands = re.findall(
        r'<img[^>]+src="(https://dentoplant\.hu/wp-content/uploads/[^"]+?\.(?:jpg|jpeg|png|webp))"',
        h,
        re.I,
    )
    cands = [c for c in cands if not re.search(r"logo|icon|h_img|palyazat", c, re.I)]
    if not cands:
        return None
    full = strip_size(cands[0])
    ext = Path(full.split("?")[0]).suffix.lower() or ".jpg"
    fname = f"{slug}{ext}"
    try:
        data = fetch(full)
    except Exception as e:
        print(f"    [IMG SKIP] {full}: {e}")
        return None
    (OUT_DIR / fname).write_bytes(data)
    print(f"    kép: {fname} ({len(data)//1024} KB)")
    return f"/munkatarsak/{fname}"


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    profiles: dict[str, dict] = {}
    for slug in SLUGS:
        print(f"## {slug}")
        h = fetch(f"https://dentoplant.hu/munkatars/{slug}").decode("utf-8", "replace")
        img = download_image(slug, h)
        if slug in SKIP_TEXT:
            prof = {}
            if img:
                prof["image"] = img
            profiles[slug] = prof
            continue
        prof = parse_profile(slug, h)
        if img:
            prof["image"] = img
        else:
            prof.pop("image", None)
        profiles[slug] = {k: v for k, v in prof.items() if v}
        c = profiles[slug]
        print(f"    bio:{len(c.get('bio',[]))} career:{len(c.get('career',[]))} "
              f"tags:{len(c.get('affiliations',[]))} quote:{'igen' if c.get('quote') else 'nem'}")

    out = [
        "// Auto-generálva: scripts/scrape_team.py — a profiloldalak fotói és szövegei.",
        "// A team.ts kézi mezői (role, focus, credentials, Dr. Maráz Kinga) elsőbbséget élveznek.",
        "import type { CareerEntry } from \"./team\";",
        "",
        "export type GeneratedProfile = {",
        "  image?: string;",
        "  bio?: string[];",
        "  career?: CareerEntry[];",
        "  affiliations?: string[];",
        "  quote?: string;",
        "};",
        "",
        "export const PROFILES: Record<string, GeneratedProfile> = {",
    ]
    for slug, p in profiles.items():
        out.append(f"  {json.dumps(slug, ensure_ascii=False)}: {json.dumps(p, ensure_ascii=False)},")
    out.append("};")
    MANIFEST.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"\nManifest: {MANIFEST} ({len(profiles)} profil)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
