#!/usr/bin/env python3
"""Import publikus WP blogcikkeket a dentoplant.hu-ról a Flask blog_posts táblába.

A WP admin export (export.php) 403-at ad, a REST API 404. A nyilvános RSS
listázza az összes bejegyzést (~150); minden cikkoldalt lescrapelünk,
a képeket letöltjük app/static/uploads alá.

Használat (backend mappából, venv aktív):

    python scripts/import_wp_blog.py --dry-run
    python scripts/import_wp_blog.py --limit 3
    python scripts/import_wp_blog.py
"""
from __future__ import annotations

import argparse
import html as htmlmod
import os
import re
import ssl
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
import uuid
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

os.chdir(ROOT)

from app import create_app, db  # noqa: E402
from app.models import BlogPost  # noqa: E402

BASE = "https://dentoplant.hu"
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
)
CTX = ssl.create_default_context()

AUTHORS = [
    ("dr. maráz kinga", "Dr. Maráz Kinga", "dr-maraz-kinga"),
    ("dr maráz kinga", "Dr. Maráz Kinga", "dr-maraz-kinga"),
    ("dr. vadász anna", "Dr. Vadász Anna", "dr-vadasz-anna"),
    ("dr vadász anna", "Dr. Vadász Anna", "dr-vadasz-anna"),
    ("dr. mészáros csongor", "Dr. Mészáros Csongor", "dr-meszaros-csongor"),
    ("dr mészáros csongor", "Dr. Mészáros Csongor", "dr-meszaros-csongor"),
    ("dr. sebők eszter", "Dr. Sebők Eszter", "dr-sebok-eszter"),
    ("dr sebők eszter", "Dr. Sebők Eszter", "dr-sebok-eszter"),
    ("dr. roszik melitta", "Dr. Roszik Melitta", "dr-roszik-melitta"),
    ("csató-dobó huanita", "Csató-Dobó Huanita", "dobo-huanita"),
    ("dobó huanita", "Csató-Dobó Huanita", "dobo-huanita"),
]

CATEGORY_MAP = {
    "egyéb": ("egyeb", "Egyéb"),
    "egyeb": ("egyeb", "Egyéb"),
    "fogágy": ("fogagy", "Fogágy"),
    "implantológia": ("implantologia", "Implantológia"),
    "fogszabályozás": ("fogszabalyozas", "Fogszabályozás"),
    "esztétika": ("esztetika", "Esztétika"),
    "szájhigiénia": ("szajhigiena", "Szájhigiénia"),
    "események": ("esemenyek", "Események, képzések"),
}


def fetch(url: str) -> bytes:
    parts = urllib.parse.urlsplit(url)
    path = urllib.parse.quote(urllib.parse.unquote(parts.path), safe="/")
    safe = urllib.parse.urlunsplit((parts.scheme, parts.netloc, path, parts.query, parts.fragment))
    req = urllib.request.Request(safe, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60, context=CTX) as r:
        return r.read()


def extract_inner(html: str, class_name: str) -> str | None:
    pat = re.compile(
        rf'<([a-zA-Z0-9]+)([^>]*\bclass="[^"]*\b{re.escape(class_name)}\b[^"]*"[^>]*)>',
        re.I,
    )
    m = pat.search(html)
    if not m:
        return None
    tag = m.group(1).lower()
    i = m.end()
    depth = 1
    open_re = re.compile(rf"<{tag}\b", re.I)
    close_re = re.compile(rf"</{tag}>", re.I)
    while i < len(html) and depth:
        nxt_open = open_re.search(html, i)
        nxt_close = close_re.search(html, i)
        if not nxt_close:
            return html[m.end() :].strip()
        if nxt_open and nxt_open.start() < nxt_close.start():
            depth += 1
            i = nxt_open.end()
        else:
            depth -= 1
            if depth == 0:
                return html[m.end() : nxt_close.start()].strip()
            i = nxt_close.end()
    return None


def strip_tags(s: str) -> str:
    text = htmlmod.unescape(re.sub(r"<[^>]+>", " ", s))
    return text.replace("\xa0", " ").replace("&nbsp;", " ")


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text)
    return text.strip("-")


def strip_wp_size(url: str) -> str:
    return re.sub(r"-\d+x\d+(\.[a-zA-Z]+)$", r"\1", url)


def meta_prop(html: str, prop: str) -> str | None:
    m = re.search(
        rf'<meta[^>]+property=["\']{re.escape(prop)}["\'][^>]+content=["\']([^"\']+)["\']',
        html,
        re.I,
    )
    if m:
        return htmlmod.unescape(m.group(1))
    m = re.search(
        rf'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']{re.escape(prop)}["\']',
        html,
        re.I,
    )
    return htmlmod.unescape(m.group(1)) if m else None


def collect_feed_items() -> list[dict]:
    items: list[dict] = []
    seen: set[str] = set()
    for page in (None, 2):
        url = f"{BASE}/feed/" if page is None else f"{BASE}/feed/?paged={page}"
        root = ET.fromstring(fetch(url))
        for it in root.findall(".//item"):
            link = (it.findtext("link") or "").strip()
            if not link or link in seen:
                continue
            seen.add(link)
            pub = it.findtext("pubDate")
            published = None
            if pub:
                try:
                    published = parsedate_to_datetime(pub)
                except (TypeError, ValueError):
                    published = None
            cat = it.findtext("category") or ""
            items.append(
                {
                    "title": htmlmod.unescape(it.findtext("title") or "").strip(),
                    "link": link,
                    "published": published,
                    "category": htmlmod.unescape(cat).strip(),
                }
            )
    return items


def guess_author(title: str, content_text: str) -> tuple[str | None, str | None]:
    blob = f"{title} {content_text}".lower()
    for needle, name, slug in AUTHORS:
        if needle in blob:
            return name, slug
    return None, None


def map_category(raw: str) -> tuple[str | None, str | None]:
    if not raw:
        return None, None
    key = raw.strip().lower()
    if key in CATEGORY_MAP:
        return CATEGORY_MAP[key]
    return slugify(raw) or None, raw.strip() or None


def sidebar_images(html: str) -> list[tuple[str, str]]:
    block = extract_inner(html, "dp-post__sidebar") or ""
    out: list[tuple[str, str]] = []
    for m in re.finditer(r'<img[^>]+>', block, re.I):
        tag = m.group(0)
        src_m = re.search(r'\bsrc=["\']([^"\']+)["\']', tag, re.I)
        if not src_m:
            continue
        src = htmlmod.unescape(src_m.group(1))
        alt_m = re.search(r'\balt=["\']([^"\']*)["\']', tag, re.I)
        alt = htmlmod.unescape(alt_m.group(1)) if alt_m else ""
        if "/wp-content/uploads/" in src:
            out.append((strip_wp_size(src), alt))
    return out


def clean_content(raw: str) -> str:
    text = raw
    text = re.sub(r"<span\s+style=\"font-weight:\s*400;?\">", "", text, flags=re.I)
    text = re.sub(r"</span>", "", text, flags=re.I)
    text = re.sub(r"<p>\s*(?:&nbsp;|\xa0|\s)*</p>", "", text, flags=re.I)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def rewrite_images(content: str, url_map: dict[str, str]) -> str:
    def repl(m: re.Match[str]) -> str:
        tag = m.group(0)
        src_m = re.search(r'\bsrc=["\']([^"\']+)["\']', tag, re.I)
        if not src_m:
            return tag
        src = htmlmod.unescape(src_m.group(1))
        full = strip_wp_size(src)
        local = url_map.get(full) or url_map.get(src)
        if not local:
            return tag
        tag = re.sub(r'\bsrc=["\'][^"\']+["\']', f'src="{local}"', tag, count=1)
        tag = re.sub(r'\bsrcset=["\'][^"\']*["\']', "", tag, flags=re.I)
        tag = re.sub(r'\bsizes=["\'][^"\']*["\']', "", tag, flags=re.I)
        return tag

    return re.sub(r"<img[^>]+>", repl, content, flags=re.I)


def download_image(url: str, dest_dir: Path, cache: dict[str, str]) -> str | None:
    full = strip_wp_size(url)
    if full in cache:
        return cache[full]
    try:
        data = fetch(full)
    except Exception:
        if full != url:
            try:
                data = fetch(url)
            except Exception as e:
                print(f"    ! kép hiba {full}: {e}")
                return None
        else:
            print(f"    ! kép hiba {full}")
            return None
    ext = Path(urllib.parse.urlsplit(full).path).suffix.lower()
    if ext not in {".jpg", ".jpeg", ".png", ".gif", ".webp"}:
        ext = ".jpg"
    name = f"{uuid.uuid4().hex}{ext}"
    dest_dir.mkdir(parents=True, exist_ok=True)
    (dest_dir / name).write_bytes(data)
    local = f"/api/upload/files/{name}"
    cache[full] = local
    cache[url] = local
    return local


def parse_article(html: str, feed: dict) -> dict:
    title_html = extract_inner(html, "dp-post__title") or ""
    title_m = re.search(r"<h2[^>]*>([\s\S]*?)</h2>", title_html, re.I)
    title = strip_tags(title_m.group(1) if title_m else feed["title"]).strip()
    title = re.sub(r"\s+", " ", title)

    date_html = extract_inner(html, "dp-post__date") or ""
    date_txt = strip_tags(date_html).strip()
    published = feed.get("published")
    iso = meta_prop(html, "article:published_time")
    if iso:
        try:
            published = datetime.fromisoformat(iso.replace("Z", "+00:00"))
        except ValueError:
            pass
    if published is None and date_txt:
        m = re.search(r"(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})", date_txt)
        if m:
            published = datetime(int(m.group(1)), int(m.group(2)), int(m.group(3)), tzinfo=timezone.utc)

    content = extract_inner(html, "dp-post__content") or ""
    content = clean_content(content)
    side = sidebar_images(html)

    cat_raw = meta_prop(html, "article:section") or feed.get("category") or ""
    cat_slug, cat_name = map_category(cat_raw)

    excerpt = re.sub(r"\s+", " ", strip_tags(content)).strip()
    if len(excerpt) > 420:
        excerpt = excerpt[:417].rsplit(" ", 1)[0] + "…"

    words = len(excerpt.split()) + len(re.sub(r"\s+", " ", strip_tags(content)).split())
    minutes = max(1, round(words / 220))

    slug = urllib.parse.urlsplit(feed["link"]).path.strip("/")

    return {
        "title": title or feed["title"],
        "slug": slug,
        "content": content,
        "excerpt": excerpt or None,
        "published": published,
        "category_slug": cat_slug,
        "category_name": cat_name,
        "sidebar": side,
        "minutes": minutes,
    }


def import_posts(*, dry_run: bool, limit: int | None, delay: float) -> None:
    app = create_app()
    dest_dir = ROOT / "app" / "static" / "uploads"
    items = collect_feed_items()
    print(f"RSS: {len(items)} bejegyzés")
    if limit:
        items = items[:limit]
        print(f"Limit: {len(items)}")

    created = skipped = failed = 0
    with app.app_context():
        for i, feed in enumerate(items, 1):
            slug = urllib.parse.urlsplit(feed["link"]).path.strip("/")
            print(f"[{i}/{len(items)}] {slug}")
            existing = BlogPost.query.filter_by(slug=slug).first()
            if existing:
                print("    skip (már benne van)")
                skipped += 1
                continue
            try:
                html = fetch(feed["link"]).decode("utf-8", "replace")
            except Exception as e:
                print(f"    FAIL fetch: {e}")
                failed += 1
                continue
            parsed = parse_article(html, feed)
            if not parsed["content"] or len(parsed["content"]) < 40:
                print("    FAIL üres tartalom")
                failed += 1
                continue

            if dry_run:
                print(f"    DRY {parsed['title'][:70]!r} cat={parsed['category_name']} imgs={len(parsed['sidebar'])}")
                created += 1
                time.sleep(delay)
                continue

            cache: dict[str, str] = {}
            cover = None
            extra_html = []
            for idx, (src, alt) in enumerate(parsed["sidebar"]):
                local = download_image(src, dest_dir, cache)
                if not local:
                    continue
                if idx == 0:
                    cover = local
                extra_html.append(
                    f'<figure class="wp-imported"><img src="{local}" alt="{htmlmod.escape(alt)}" /></figure>'
                )

            content_imgs = re.findall(r'\bsrc=["\'](https?://dentoplant\.hu/wp-content/uploads/[^"\']+)["\']', parsed["content"], re.I)
            for src in content_imgs:
                download_image(htmlmod.unescape(src), dest_dir, cache)

            content = rewrite_images(parsed["content"], cache)
            if extra_html:
                # A WP oldalsávos képek a mi layoutunkban a cikk végére kerülnek,
                # a borító az első.
                rest = extra_html[1:] if cover else extra_html
                if rest:
                    content = content + "\n" + "\n".join(rest)

            author_name, author_slug = guess_author(parsed["title"], strip_tags(content))
            published = parsed["published"]
            if published and published.tzinfo is not None:
                published = published.astimezone(timezone.utc).replace(tzinfo=None)

            post = BlogPost(
                title=parsed["title"][:255],
                slug=parsed["slug"][:160],
                content=content,
                excerpt=(parsed["excerpt"] or None),
                cover_image=cover,
                category_slug=parsed["category_slug"],
                category_name=parsed["category_name"],
                author_name=author_name,
                author_slug=author_slug,
                reading_minutes=parsed["minutes"],
                is_published=True,
                published_at=published,
            )
            db.session.add(post)
            db.session.commit()
            print(f"    OK  {parsed['title'][:70]}")
            created += 1
            time.sleep(delay)

    print(f"\nKész. új={created} skip={skipped} hiba={failed}")


def main() -> None:
    p = argparse.ArgumentParser(description="WP blog import dentoplant.hu-ról")
    p.add_argument("--dry-run", action="store_true", help="Csak listáz, nem ír DB-t")
    p.add_argument("--limit", type=int, default=None, help="Max. ennyi cikk")
    p.add_argument("--delay", type=float, default=0.25, help="Szünet cikkek között (mp)")
    args = p.parse_args()
    import_posts(dry_run=args.dry_run, limit=args.limit, delay=args.delay)


if __name__ == "__main__":
    main()
