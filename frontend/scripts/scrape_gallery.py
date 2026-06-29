#!/usr/bin/env python3
"""Letölti a dentoplant.hu/galeria-2 oldal képeit full-size-ban a public/galeria mappába,
és legenerál egy manifestet (src/lib/gallery-data.ts) az alt-szövegekkel."""
from __future__ import annotations

import html
import json
import re
import sys
import unicodedata
import urllib.request
import urllib.parse
from pathlib import Path

PAGE_URL = "https://dentoplant.hu/galeria-2"
ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "galeria"
MANIFEST = ROOT / "src" / "lib" / "gallery-data.ts"

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"

HU_MAP = {
    "á": "a", "é": "e", "í": "i", "ó": "o", "ö": "o", "ő": "o",
    "ú": "u", "ü": "u", "ű": "u",
}


def fetch(url: str) -> bytes:
    parts = urllib.parse.urlsplit(url)
    safe = urllib.parse.urlunsplit(
        (
            parts.scheme,
            parts.netloc,
            urllib.parse.quote(parts.path),
            parts.query,
            parts.fragment,
        )
    )
    req = urllib.request.Request(safe, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def image_size(data: bytes) -> tuple[int, int]:
    """Kép szélesség/magasság kiolvasása PIL nélkül (JPEG/PNG)."""
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        w = int.from_bytes(data[16:20], "big")
        h = int.from_bytes(data[20:24], "big")
        return w, h
    if data[:2] == b"\xff\xd8":  # JPEG
        i = 2
        n = len(data)
        while i < n:
            if data[i] != 0xFF:
                i += 1
                continue
            marker = data[i + 1]
            if 0xC0 <= marker <= 0xCF and marker not in (0xC4, 0xC8, 0xCC):
                h = int.from_bytes(data[i + 5:i + 7], "big")
                w = int.from_bytes(data[i + 7:i + 9], "big")
                return w, h
            seg = int.from_bytes(data[i + 2:i + 4], "big")
            i += 2 + seg
    return 0, 0


def load_existing_alts() -> dict[str, str]:
    """A meglevo manifestbol kiolvassa a src -> alt parokat, hogy a kezzel
    finomitott alt-szovegek ujrafuttataskor megorzodjenek."""
    if not MANIFEST.exists():
        return {}
    text = MANIFEST.read_text(encoding="utf-8")
    pairs = re.findall(r'"src":\s*"([^"]+)",\s*"alt":\s*"((?:[^"\\]|\\.)*)"', text)
    return {src: json.loads(f'"{alt}"') for src, alt in pairs}


def slugify(name: str) -> str:
    name = name.lower()
    for k, v in HU_MAP.items():
        name = name.replace(k, v)
    name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    name = re.sub(r"[^a-z0-9]+", "-", name).strip("-")
    return re.sub(r"-+", "-", name)


def strip_size(url: str) -> str:
    """WP méret-utótag levágása -> eredeti full-size URL."""
    return re.sub(r"-\d+x\d+(\.[a-zA-Z]+)$", r"\1", url)


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    page = fetch(PAGE_URL).decode("utf-8", "replace")

    # <a ... href="...jpg" ...> ... <img ... alt="..." ...>
    anchors = re.findall(
        r'<a\b[^>]*?href="(https://dentoplant\.hu/wp-content/uploads/[^"]+?\.(?:jpg|jpeg|png|webp))"[^>]*>.*?<img\b[^>]*?\balt="([^"]*)"',
        page,
        flags=re.IGNORECASE | re.DOTALL,
    )

    seen: dict[str, str] = {}
    ordered: list[tuple[str, str]] = []
    for href, alt in anchors:
        full = strip_size(href)
        if full in seen:
            continue
        seen[full] = alt
        ordered.append((full, html.unescape(alt)))

    print(f"{len(ordered)} egyedi kép találva.")

    curated = load_existing_alts()
    manifest: list[dict] = []
    used_names: set[str] = set()
    for i, (url, alt) in enumerate(ordered, 1):
        ext = Path(url.split("?")[0]).suffix.lower() or ".jpg"
        base = slugify(Path(url.split("?")[0]).stem) or f"kep-{i:02d}"
        fname = f"{base}{ext}"
        n = 2
        while fname in used_names:
            fname = f"{base}-{n}{ext}"
            n += 1
        used_names.add(fname)

        dest = OUT_DIR / fname
        try:
            data = fetch(url)
        except Exception as e:  # 404 a full-size-ra -> fallback a megjelenített méretre
            print(f"  [fallback] {url} -> {e}")
            try:
                data = fetch(seen_href(url))
            except Exception as e2:
                print(f"  [SKIP] {url}: {e2}")
                continue
        dest.write_bytes(data)
        w, h = image_size(data)
        size_kb = len(data) // 1024
        src = f"/galeria/{fname}"
        final_alt = curated.get(src, alt)  # kezzel finomitott alt megorzese
        print(f"  [{i:02d}/{len(ordered)}] {fname} ({size_kb} KB, {w}x{h})")
        manifest.append({"src": src, "alt": final_alt, "width": w, "height": h})

    # TS manifest
    lines = [
        "// Auto-generalva: scripts/scrape_gallery.py. A meglevo (kezzel finomitott) alt-szovegek",
        "// ujrafuttataskor megorzodnek; src/width/height frissul.",
        "export type GalleryImage = { src: string; alt: string; width: number; height: number };",
        "",
        "export const GALLERY_IMAGES: GalleryImage[] = [",
    ]
    for m in manifest:
        lines.append(f"  {json.dumps(m, ensure_ascii=False)},")
    lines.append("];")
    MANIFEST.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"\nManifest: {MANIFEST} ({len(manifest)} kép)")
    return 0


# nem használt fallback helper (a href->1024 verzió már nincs eltárolva), megtartva a jövőre
def seen_href(full_url: str) -> str:
    return full_url


if __name__ == "__main__":
    sys.exit(main())
