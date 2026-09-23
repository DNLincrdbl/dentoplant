import type { TocItem } from "@/lib/blog-toc";

export function BlogToc({
  items,
  title,
}: {
  items: TocItem[];
  title: string;
}) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label={title}
      className="mb-10 rounded-3xl border border-border bg-brand-50/50 p-5 md:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{title}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`inline-flex rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-brand-600 hover:bg-background hover:text-brand-700 ${
                item.level === 3
                  ? "border-transparent bg-transparent text-foreground/70"
                  : "border-border bg-background text-foreground/85"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
