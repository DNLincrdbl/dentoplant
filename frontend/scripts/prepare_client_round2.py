#!/usr/bin/env python3
"""Client round 2: heroes, extra cases, thicker eye bars, Kinga portrait, new page photos."""

from __future__ import annotations

import io
import json
import unicodedata
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SRC2 = next(p for p in (PUBLIC / "dento-web").iterdir() if p.is_dir() and "2" in p.name)
OUT = PUBLIC / "szolgaltatasok"
MAX_EDGE = 2000
JPEG_Q = 82
MANIFEST = ROOT / "src" / "lib" / "service-photos.json"


def norm(s: str) -> str:
    return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().casefold()


def find_dir(parent: Path, *needles: str) -> Path:
    for p in parent.iterdir():
        name = norm(p.name)
        if p.is_dir() and all(norm(n) in name for n in needles):
            return p
    raise FileNotFoundError(f"{needles} in {[x.name for x in parent.iterdir() if x.is_dir()]}")


def open_image(path: Path) -> Image.Image:
    im = Image.open(io.BytesIO(path.read_bytes()))
    im = ImageOps.exif_transpose(im) or im
    return im.convert("RGB")


def resize(im: Image.Image, max_edge: int = MAX_EDGE) -> Image.Image:
    w, h = im.size
    scale = max_edge / max(w, h)
    if scale >= 1:
        return im
    return im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)


def save_jpeg(im: Image.Image, dest: Path) -> tuple[int, int]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=JPEG_Q, optimize=True, progressive=True)
    return im.size


def copy_one(src: Path, dest: Path) -> dict:
    im = resize(open_image(src))
    w, h = save_jpeg(im, dest)
    rel = "/" + dest.relative_to(PUBLIC).as_posix()
    print(f"    {rel}  {w}x{h}  from {src.name}")
    return {"src": rel, "width": w, "height": h, "from": src.name}


def files_in(d: Path) -> list[Path]:
    return sorted(
        p
        for p in d.iterdir()
        if p.is_file()
        and not p.name.startswith(".")
        and p.suffix.lower() not in {".docx", ".ds_store"}
        and "képernyő" not in p.name.casefold()
        and "kepernyo" not in p.name.casefold()
    )


def thicken_eyes() -> None:
    emese = PUBLIC / "szolgaltatasok/dsd/esetek/szabo-hejja-emese"
    src = SRC2
    dsd = find_dir(src, "DSD")
    teljes = find_dir(dsd, "Teljes")
    emese_src = next(p for p in teljes.iterdir() if p.is_dir() and "emese" in p.name.casefold())
    portrait = next(p for p in files_in(emese_src) if p.name.startswith("6"))
    im = resize(open_image(portrait))
    w, h = im.size
    draw = ImageDraw.Draw(im)
    draw.rectangle((0, int(h * 0.40), w, int(h * 0.52)), fill=(0, 0, 0))
    dest = emese / "06v3.jpg"
    save_jpeg(im, dest)
    print("thicker emese bar", dest)

    bere = PUBLIC / "szolgaltatasok/dsd/esetek/bereczki-eszter"
    bere_src = find_dir(teljes, "Bereczki")
    for name, out_name, band in (("04.jpg", "04v2.jpg", (0.35, 0.52)), ("06.jpg", "06v2.jpg", (0.35, 0.52))):
        src_p = bere_src / name
        if not src_p.exists():
            continue
        im = resize(open_image(src_p))
        w, h = im.size
        y0, y1 = band
        ImageDraw.Draw(im).rectangle((0, int(h * y0), w, int(h * y1)), fill=(0, 0, 0))
        save_jpeg(im, bere / out_name)
        print("thicker bereczki", out_name)


def heroes_and_bolcs() -> None:
    micro07 = PUBLIC / "szolgaltatasok/mikroszkopos-fogaszat/munka/07.jpg"
    im = open_image(micro07).transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    save_jpeg(resize(im), PUBLIC / "szolgaltatasok/mikroszkopos-fogaszat/hero.jpg")
    print("micro hero flipped")

    bolcs01 = PUBLIC / "szolgaltatasok/bolcsessegfog/munka/01.jpg"
    im = open_image(bolcs01)
    w, h = im.size
    im = im.crop((0, int(h * 0.22), w, h))
    save_jpeg(resize(im), PUBLIC / "szolgaltatasok/bolcsessegfog/hero.jpg")
    print("bolcs hero cropped")

    bolcs_dir = find_dir(SRC2, "Bölcsfog")
    extra = bolcs_dir / "3 2.jpg"
    if extra.exists():
        copy_one(extra, PUBLIC / "szolgaltatasok/bolcsessegfog/eset-elotte-utana/06.jpg")


def kinga() -> None:
    png = PUBLIC / "munkatarsak/drmarazkinga.png"
    src = png if png.exists() else PUBLIC / "munkatarsak/drmarazkinga.jpg"
    im = open_image(src)
    w, h = save_jpeg(resize(im, 2400), PUBLIC / "munkatarsak/drmarazkinga.jpg")
    print(f"kinga portrait {w}x{h}")


def pack_folder(src: Path, dest_dir: Path) -> list[dict]:
    dest_dir.mkdir(parents=True, exist_ok=True)
    out = []
    n = 1
    for p in files_in(src):
        out.append(copy_one(p, dest_dir / f"{n:02d}.jpg"))
        n += 1
    return out


def new_page_photos(manifest: dict) -> None:
    gbt = find_dir(SRC2, "biofilm")
    gbt_use = find_dir(gbt, "használni") if any("használni" in p.name.casefold() for p in gbt.iterdir() if p.is_dir()) else gbt
    try:
        gbt_use = find_dir(gbt, "használni")
    except FileNotFoundError:
        gbt_use = gbt
    manifest["gbt"] = pack_folder(gbt_use, OUT / "gbt")

    fogko = find_dir(SRC2, "Fogkő")
    try:
        fogko_use = find_dir(fogko, "használni")
    except FileNotFoundError:
        fogko_use = fogko
    manifest["fogko"] = pack_folder(fogko_use, OUT / "fogkoeltavolitas")

    implant = find_dir(SRC2, "Implantátum hig")
    manifest["implant_higenia"] = pack_folder(implant, OUT / "implantatum-higenia")

    gyerek = find_dir(SRC2, "Gyermek")
    manifest["gyermek"] = pack_folder(gyerek, OUT / "gyermekfogaszat")

    estet = find_dir(SRC2, "Esztétikai") if False else None
    for p in SRC2.iterdir():
        if p.is_dir() and "esztétikai" in p.name.casefold() or (p.is_dir() and "esztetikai" in p.name.casefold()):
            estet = p
    if estet is None:
        for p in SRC2.iterdir():
            if p.is_dir() and "szte" in p.name.casefold():
                estet = p
    assert estet
    manifest["esztetika"] = pack_folder(estet, OUT / "esztetikai-fogaszat")

    ortho = find_dir(SRC2, "Fogszabályozás")
    kesz = None
    for p in ortho.iterdir():
        if p.is_dir() and "készülék" in p.name.casefold() or (p.is_dir() and "keszulek" in p.name.casefold()):
            kesz = p
    if kesz is None:
        kesz = next(p for p in ortho.iterdir() if p.is_dir())
    hero_src = next((p for p in files_in(kesz) if p.name.lower().startswith("0.") or "főkép" in p.name.casefold() or "fokep" in p.name.casefold()), files_in(kesz)[0])
    copy_one(hero_src, OUT / "fogszabalyozas" / "hero.jpg")
    manifest["fogszabalyozas"] = pack_folder(kesz, OUT / "fogszabalyozas" / "galeria")
    extra = pack_folder(ortho, OUT / "fogszabalyozas" / "oldal")
    manifest["fogszabalyozas_oldal"] = extra


def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    thicken_eyes()
    heroes_and_bolcs()
    kinga()
    new_page_photos(manifest)

    ba = manifest.get("bolcs_ba", [])
    extra = OUT / "bolcsessegfog/eset-elotte-utana/06.jpg"
    if extra.exists() and not any(x.get("src", "").endswith("/06.jpg") for x in ba):
        im = Image.open(extra)
        ba.append({"src": "/szolgaltatasok/bolcsessegfog/eset-elotte-utana/06.jpg", "width": im.size[0], "height": im.size[1], "from": "3 2.jpg"})
        manifest["bolcs_ba"] = ba

    for key, path, fname in (
        ("dsd_emese", "szolgaltatasok/dsd/esetek/szabo-hejja-emese/06v3.jpg", "06v3.jpg"),
        ("dsd_bereczki", "szolgaltatasok/dsd/esetek/bereczki-eszter/04v2.jpg", "04v2.jpg"),
        ("dsd_bereczki", "szolgaltatasok/dsd/esetek/bereczki-eszter/06v2.jpg", "06v2.jpg"),
    ):
        full = PUBLIC / path
        if not full.exists():
            continue
        im = Image.open(full)
        recs = manifest.get(key, [])
        for rec in recs:
            if rec["src"].endswith("/06v2.jpg") and fname == "06v3.jpg":
                rec["src"] = "/" + path
                rec["width"], rec["height"] = im.size
            if rec["src"].endswith("/04.jpg") and fname == "04v2.jpg":
                rec["src"] = "/" + path
                rec["width"], rec["height"] = im.size
            if rec["src"].endswith("/06.jpg") and fname == "06v2.jpg" and key == "dsd_bereczki":
                rec["src"] = "/" + path
                rec["width"], rec["height"] = im.size

    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", MANIFEST)


if __name__ == "__main__":
    main()
