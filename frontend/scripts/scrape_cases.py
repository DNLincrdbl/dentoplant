#!/usr/bin/env python3
"""Letölti a dentoplant.hu/esetbemutatas oldal eseteit: minden eset címe,
leírása és a hozzá tartozó képek (full-size, sorrendben, előtte/utána jelöléssel)
a public/esetek mappába, és legenerál egy manifestet (src/lib/cases-data.ts).

A meglévő (kézzel finomított) alt-szövegek és leírások újrafuttatáskor megőrződnek."""
from __future__ import annotations

import html
import json
import re
import sys
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

PAGE_URL = "https://dentoplant.hu/esetbemutatas"
ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "esetek"
MANIFEST = ROOT / "src" / "lib" / "cases-data.ts"

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"

HU_MAP = {
    "á": "a", "é": "e", "í": "i", "ó": "o", "ö": "o", "ő": "o",
    "ú": "u", "ü": "u", "ű": "u",
}

# Ezeket a H3 cimeket nem tekintjuk esetnek
SKIP_HEADINGS = {"menü", "szolgáltatások"}


def fetch(url: str) -> bytes:
    parts = urllib.parse.urlsplit(url)
    safe = urllib.parse.urlunsplit(
        (parts.scheme, parts.netloc, urllib.parse.quote(parts.path), parts.query, parts.fragment)
    )
    req = urllib.request.Request(safe, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def image_size(data: bytes) -> tuple[int, int]:
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return int.from_bytes(data[16:20], "big"), int.from_bytes(data[20:24], "big")
    if data[:2] == b"\xff\xd8":
        i, n = 2, len(data)
        while i < n:
            if data[i] != 0xFF:
                i += 1
                continue
            marker = data[i + 1]
            if 0xC0 <= marker <= 0xCF and marker not in (0xC4, 0xC8, 0xCC):
                h = int.from_bytes(data[i + 5:i + 7], "big")
                w = int.from_bytes(data[i + 7:i + 9], "big")
                return w, h
            i += 2 + int.from_bytes(data[i + 2:i + 4], "big")
    return 0, 0


def slugify(name: str) -> str:
    name = name.lower()
    for k, v in HU_MAP.items():
        name = name.replace(k, v)
    name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", name)).strip("-")


def strip_size(url: str) -> str:
    return re.sub(r"-\d+x\d+(\.[a-zA-Z]+)$", r"\1", url)


def strip_tags(s: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def label_from(url: str) -> str | None:
    low = url.lower()
    if "elotte" in low or "-elotte" in low:
        return "előtte"
    if "utana" in low:
        return "utána"
    return None


def load_existing() -> dict[str, dict]:
    """src -> {alt, label} és slug -> description a meglévő manifestből."""
    out: dict[str, dict] = {"img": {}, "desc": {}}
    if not MANIFEST.exists():
        return out
    text = MANIFEST.read_text(encoding="utf-8")
    for src, alt in re.findall(r'"src":\s*"([^"]+)",\s*"alt":\s*"((?:[^"\\]|\\.)*)"', text):
        out["img"][src] = json.loads(f'"{alt}"')
    for slug, desc in re.findall(r'"slug":\s*"([^"]+)",\s*"title":[^\n]*?"description":\s*"((?:[^"\\]|\\.)*)"', text):
        out["desc"][slug] = json.loads(f'"{desc}"')
    return out


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    page = fetch(PAGE_URL).decode("utf-8", "replace")

    # Csak a tartalmi torzs: az elso eset H3-tol a "Szolgáltatások" H3-ig
    body = page
    m = re.search(r"<h3[^>]*>\s*Eszt[^<]*pr[^<]*</h3>", body, re.I)
    if m:
        body = body[m.start():]

    # Feldaraboljuk H3-ak menten, megtartva a cimeket
    parts = re.split(r"<h3[^>]*>(.*?)</h3>", body, flags=re.I | re.S)
    # parts: [pre, title1, seg1, title2, seg2, ...]
    existing = load_existing()
    cases: list[dict] = []
    used_slugs: set[str] = set()

    for idx in range(1, len(parts) - 1, 2):
        title = strip_tags(parts[idx])
        segment = parts[idx + 1]
        if not title or title.lower() in SKIP_HEADINGS:
            continue

        slug = slugify(title)[:60].strip("-")
        n = 2
        base_slug = slug
        while slug in used_slugs:
            slug = f"{base_slug}-{n}"
            n += 1
        used_slugs.add(slug)

        # Leiras: a szegmens <p> bekezdesei
        paras = [strip_tags(p) for p in re.findall(r"<p[^>]*>(.*?)</p>", segment, re.I | re.S)]
        paras = [p for p in paras if p and len(p) > 3]
        description = " ".join(paras).strip()
        description = existing["desc"].get(slug, description)

        # Kepek sorrendben: href (full) vagy src, /uploads/ ala eso jpg/png
        refs = re.findall(
            r'(?:href|src)="(https://dentoplant\.hu/wp-content/uploads/[^"]+?\.(?:jpg|jpeg|png|webp))"',
            segment,
            re.I,
        )
        seen_full: set[str] = set()
        ordered: list[str] = []
        for r in refs:
            full = strip_size(r)
            if full in seen_full:
                continue
            seen_full.add(full)
            ordered.append(full)

        if not ordered:
            print(f"  (nincs kép) {title}")
            continue

        images: list[dict] = []
        for j, url in enumerate(ordered, 1):
            ext = Path(url.split("?")[0]).suffix.lower() or ".jpg"
            fname = f"{slug}-{j:02d}{ext}"
            try:
                data = fetch(url)
            except Exception as e:
                print(f"    [SKIP] {url}: {e}")
                continue
            (OUT_DIR / fname).write_bytes(data)
            w, h = image_size(data)
            src = f"/esetek/{fname}"
            label = label_from(url)
            default_alt = f"{title} – {j}. kép" + (f" ({label})" if label else "")
            alt = existing["img"].get(src, default_alt)
            img: dict = {"src": src, "alt": alt, "width": w, "height": h}
            if label:
                img["label"] = label
            images.append(img)
            print(f"    {fname} ({len(data)//1024} KB, {w}x{h})" + (f" [{label}]" if label else ""))

        cases.append({"slug": slug, "title": title, "description": description, "images": images})
        print(f"## {title}  ({len(images)} kép)")

    # TS manifest
    out = [
        "// Auto-generálva: scripts/scrape_cases.py. A meglévő (kézzel finomított) alt-szövegek",
        "// és leírások újrafuttatáskor megőrződnek; a kép-src/méret frissül.",
        "export type CaseImage = { src: string; alt: string; width: number; height: number; label?: \"előtte\" | \"utána\" };",
        "export type CaseStudy = { slug: string; title: string; description: string; images: CaseImage[] };",
        "",
        "export const CASES: CaseStudy[] = [",
    ]
    for c in cases:
        out.append("  {")
        out.append(f"    \"slug\": {json.dumps(c['slug'], ensure_ascii=False)},")
        out.append(f"    \"title\": {json.dumps(c['title'], ensure_ascii=False)},")
        out.append(f"    \"description\": {json.dumps(c['description'], ensure_ascii=False)},")
        out.append("    \"images\": [")
        for im in c["images"]:
            out.append(f"      {json.dumps(im, ensure_ascii=False)},")
        out.append("    ],")
        out.append("  },")
    out.append("];")
    MANIFEST.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"\nManifest: {MANIFEST} ({len(cases)} eset, {sum(len(c['images']) for c in cases)} kép)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
