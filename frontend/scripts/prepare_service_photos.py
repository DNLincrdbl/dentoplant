#!/usr/bin/env python3
"""Copy Drive photos into clean public paths, resize, redact eyes on portraits."""

from __future__ import annotations

import io
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "dento-web" / "Új Weboldal"
OUT = ROOT / "public" / "szolgaltatasok"
MAX_EDGE = 2000
JPEG_Q = 82


def find_dir(parent: Path, *needles: str) -> Path:
    for p in parent.iterdir():
        name = p.name.casefold()
        if all(n.casefold() in name for n in needles) and p.is_dir():
            return p
    raise FileNotFoundError(f"{needles} in {parent}")


def open_image(path: Path) -> Image.Image:
    data = path.read_bytes()
    im = Image.open(io.BytesIO(data))
    im = ImageOps.exif_transpose(im) or im
    return im.convert("RGB")


def resize(im: Image.Image) -> Image.Image:
    w, h = im.size
    scale = MAX_EDGE / max(w, h)
    if scale >= 1:
        return im
    return im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)


def redact_eyes(im: Image.Image, y0: float = 0.37, y1: float = 0.47) -> Image.Image:
    """Thick bar covering the eyes, not the forehead or the nose."""
    im = im.copy()
    w, h = im.size
    draw = ImageDraw.Draw(im)
    draw.rectangle((0, int(h * y0), w, int(h * y1)), fill=(0, 0, 0))
    return im


def save_jpeg(im: Image.Image, dest: Path) -> tuple[int, int]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=JPEG_Q, optimize=True, progressive=True)
    return im.size


def copy_one(src: Path, dest: Path, eyes: bool, band: tuple[float, float] | None = None) -> dict:
    im = resize(open_image(src))
    if eyes:
        y0, y1 = band or (0.37, 0.47)
        im = redact_eyes(im, y0, y1)
    w, h = save_jpeg(im, dest)
    rel = "/" + dest.relative_to(ROOT / "public").as_posix()
    print(f"{'EYES' if eyes else '    '} {rel}  {w}x{h}  from {src.name}")
    return {"src": rel, "width": w, "height": h, "from": src.name}


def files_in(d: Path) -> list[Path]:
    return sorted(
        p
        for p in d.iterdir()
        if p.is_file() and not p.name.startswith(".") and p.suffix.lower() != ".docx"
    )


def main() -> None:
    bolcs = find_dir(SRC, "Bölcsfog")
    dsd = find_dir(SRC, "DSD")
    micro = find_dir(SRC, "Mikroszkóp")

    manifest: dict[str, list[dict]] = {}

    # --- DSD munka ---
    munka = find_dir(dsd, "Munka")
    dsd_work = []
    n = 1
    for p in files_in(munka):
        if "ötlet" in p.name.casefold() or "otlet" in p.name.casefold():
            continue
        dsd_work.append(copy_one(p, OUT / "dsd" / "munka" / f"{n:02d}.jpg", False))
        n += 1
    manifest["dsd_munka"] = dsd_work

    # --- DSD cases ---
    teljes = find_dir(dsd, "Teljes")
    bereczki = find_dir(teljes, "Bereczki")
    emese = find_dir(teljes, "Szabó") if any(True for _ in []) else None
    for p in teljes.iterdir():
        if p.is_dir() and "szabó" in p.name.casefold() or (p.is_dir() and "szabo" in p.name.casefold()):
            emese = p
        if p.is_dir() and "héjja" in p.name.casefold() or (p.is_dir() and "hejja" in p.name.casefold()):
            emese = p
    if emese is None:
        for p in teljes.iterdir():
            if p.is_dir() and p != bereczki:
                emese = p
    assert emese is not None

    bereczki_out = []
    for i, p in enumerate(files_in(bereczki), 1):
        eyes = p.name in {"04.jpg", "06.jpg"}
        band = (0.38, 0.48) if eyes else None
        bereczki_out.append(
            copy_one(p, OUT / "dsd" / "esetek" / "bereczki-eszter" / f"{i:02d}.jpg", eyes, band)
        )
    manifest["dsd_bereczki"] = bereczki_out

    emese_out = []
    for i, p in enumerate(files_in(emese), 1):
        eyes = p.name.startswith("6.") or p.name == "6.jpg"
        band = (0.415, 0.48) if eyes else None
        emese_out.append(
            copy_one(p, OUT / "dsd" / "esetek" / "szabo-hejja-emese" / f"{i:02d}.jpg", eyes, band)
        )
    manifest["dsd_emese"] = emese_out

    # --- DSD áttűnő ---
    attuno = find_dir(dsd, "Áttünő") if False else None
    for p in dsd.iterdir():
        if p.is_dir() and "áttünő" in p.name.casefold() or (p.is_dir() and "attuno" in p.name.casefold()):
            attuno = p
        if p.is_dir() and "áttűnő" in p.name.casefold():
            attuno = p
    if attuno is None:
        for p in dsd.iterdir():
            if p.is_dir() and "tt" in p.name.casefold() and "eset" in p.name.casefold() and not p.name.startswith("_"):
                attuno = p
    assert attuno is not None, list(dsd.iterdir())

    groups: dict[str, list[Path]] = {}
    for p in files_in(attuno):
        stem = p.name.split(".")[0]  # "1" from "1.1" or "1.1.jpg"
        # files named 1.1, 1.2, 1.3.jpg
        parts = p.name.replace(".jpg", "").replace(".JPG", "").split(".")
        key = parts[0]
        groups.setdefault(key, []).append(p)
    attuno_out: dict[str, list[dict]] = {}
    for key in sorted(groups, key=lambda k: int(k) if k.isdigit() else 99):
        seq = []
        for i, p in enumerate(sorted(groups[key], key=lambda x: x.name), 1):
            seq.append(copy_one(p, OUT / "dsd" / "attuno" / f"{key}-{i}.jpg", False))
        attuno_out[key] = seq
    manifest["dsd_attuno"] = attuno_out  # type: ignore

    # --- Bölcsességfog ---
    b_munka = find_dir(bolcs, "Munka")
    b_work = []
    for i, p in enumerate(files_in(b_munka), 1):
        b_work.append(copy_one(p, OUT / "bolcsessegfog" / "munka" / f"{i:02d}.jpg", False))
    manifest["bolcs_munka"] = b_work

    b_ba = None
    b_fekvo = None
    for p in bolcs.iterdir():
        if not p.is_dir():
            continue
        n = p.name.casefold()
        if "1_1" in n or "előtte-utána" in n or "elotte" in n:
            b_ba = p
        if "fekvő" in n or "fekvo" in n:
            b_fekvo = p
    assert b_ba and b_fekvo
    ba = []
    for i, p in enumerate(files_in(b_ba), 1):
        ba.append(copy_one(p, OUT / "bolcsessegfog" / "eset-elotte-utana" / f"{i:02d}.jpg", False))
    manifest["bolcs_ba"] = ba
    fekvo = []
    for i, p in enumerate(files_in(b_fekvo), 1):
        fekvo.append(copy_one(p, OUT / "bolcsessegfog" / "eset-fekvo" / f"{i:02d}.jpg", False))
    manifest["bolcs_fekvo"] = fekvo

    # --- Mikroszkóp ---
    m_munka = find_dir(micro, "Munka")
    m_work = []
    for i, p in enumerate(files_in(m_munka), 1):
        m_work.append(copy_one(p, OUT / "mikroszkopos-fogaszat" / "munka" / f"{i:02d}.jpg", False))
    manifest["micro_munka"] = m_work

    m_eset = find_dir(micro, "Teljes")
    m_cases = []
    for i, p in enumerate(files_in(m_eset), 1):
        m_cases.append(copy_one(p, OUT / "mikroszkopos-fogaszat" / "esetek" / f"{i:02d}.jpg", False))
    manifest["micro_esetek"] = m_cases

    dest = ROOT / "src" / "lib" / "service-photos.json"
    dest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", dest)


if __name__ == "__main__":
    main()
