export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

const HEADING_RE = /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi;

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function plainText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, ""));
}

function slugifyHeading(text: string): string {
  const slug = text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || "szekcio";
}

function existingId(attrs: string): string | null {
  const m = attrs.match(/\bid\s*=\s*["']?([a-zA-Z][\w:-]*)["']?/);
  return m?.[1] ?? null;
}

function uniqueId(base: string, used: Set<string>): string {
  let id = base;
  let n = 2;
  while (used.has(id)) {
    id = `${base}-${n}`;
    n += 1;
  }
  used.add(id);
  return id;
}

export function withHeadingIds(html: string): { html: string; items: TocItem[] } {
  const used = new Set<string>();
  const items: TocItem[] = [];

  const next = html.replace(HEADING_RE, (full, levelStr: string, rawAttrs: string | undefined, inner: string) => {
    const text = plainText(inner);
    if (!text) return full;
    const level = Number(levelStr) as 2 | 3;
    const attrs = rawAttrs || "";
    const id = uniqueId(existingId(attrs) || slugifyHeading(text), used);
    items.push({ id, text, level });
    const withoutId = attrs.replace(/\s*\bid\s*=\s*["'][^"']*["']/i, "").replace(/\s*\bid\s*=\s*[^\s>]+/i, "");
    return `<h${level} id="${id}"${withoutId}>${inner}</h${level}>`;
  });

  return { html: next, items };
}

export function getTocItems(html: string): TocItem[] {
  return withHeadingIds(html).items;
}
