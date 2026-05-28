/**
 * Blog adatréteg.
 *
 * Forrás: `NEXT_PUBLIC_API_URL` (Flask backend a `./backend` mappában).
 * Ha az env változó nincs beállítva, helyi MOCK adatokkal fut — így a frontend
 * fejlesztés mehet backend nélkül is.
 *
 * Backend response → frontend típus mapping a `mapBackendPost()` függvényben.
 */

import { API_BASE, apiGet, resolveAsset } from "./api";

export type BlogCategory = {
  slug: string;
  name: string;
};

export type BlogAuthor = {
  name: string;
  slug?: string;
  image?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 dátumstring (pl. "2025-09-15"). */
  publishedAt: string;
  category?: BlogCategory;
  author?: BlogAuthor;
  /** /public mappához viszonyított útvonal vagy abszolút URL. */
  coverImage?: string;
  /** Becsült olvasási idő percben. */
  readingMinutes?: number;
};

export type BlogPost = BlogPostMeta & {
  /**
   * Cikk tartalma renderelhető HTML-ként. A backend dönthet úgy is, hogy
   * Markdown-t küld — akkor itt kliensoldali renderelést kell hozzáadni.
   */
  contentHtml: string;
};

const USE_API = Boolean(API_BASE);

/* -------------------------------------------------------------------------- */
/*  Publikus API                                                              */
/* -------------------------------------------------------------------------- */

export async function getBlogPosts(opts?: {
  category?: string;
  limit?: number;
}): Promise<BlogPostMeta[]> {
  if (USE_API) {
    const raw = await apiGet<BackendPost[]>("/api/blog/public/posts");
    let posts = raw.map(mapBackendPost).map(stripContent);
    if (opts?.category) posts = posts.filter((p) => p.category?.slug === opts.category);
    posts.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
    if (opts?.limit) posts = posts.slice(0, opts.limit);
    return posts;
  }

  let arr = MOCK_POSTS.map(stripContent);
  if (opts?.category) arr = arr.filter((p) => p.category?.slug === opts.category);
  arr.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  if (opts?.limit) arr = arr.slice(0, opts.limit);
  return arr;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (USE_API) {
    try {
      const raw = await apiGet<BackendPost>(`/api/blog/public/posts/${slug}`);
      return mapBackendPost(raw);
    } catch (e) {
      // 404 → null, minden más feldob
      if ((e as { status?: number }).status === 404) return null;
      throw e;
    }
  }
  return MOCK_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  if (USE_API) {
    // A backend nem ad külön /categories endpointot — a published cikkekből
    // gyűjtjük össze az egyedi kategóriákat.
    const posts = await getBlogPosts();
    const map = new Map<string, BlogCategory>();
    for (const p of posts) {
      if (p.category && p.category.slug && !map.has(p.category.slug)) {
        map.set(p.category.slug, p.category);
      }
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "hu"));
  }
  return MOCK_CATEGORIES;
}

/** SSG / generateStaticParams számára. */
export async function getAllBlogSlugs(): Promise<string[]> {
  if (USE_API) {
    try {
      const posts = await getBlogPosts();
      return posts.map((p) => p.slug);
    } catch {
      return [];
    }
  }
  return MOCK_POSTS.map((p) => p.slug);
}

export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function stripContent(p: BlogPost): BlogPostMeta {
  const { contentHtml: _, ...meta } = p;
  void _;
  return meta;
}

/* -------------------------------------------------------------------------- */
/*  Backend → frontend mapping                                                */
/* -------------------------------------------------------------------------- */

type BackendPost = {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  category: { slug: string; name: string } | null;
  author: { name: string; slug: string | null } | null;
  reading_minutes: number | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

function mapBackendPost(p: BackendPost): BlogPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || "",
    publishedAt: p.published_at || p.created_at,
    category: p.category && p.category.slug ? p.category : undefined,
    author: p.author
      ? {
          name: p.author.name,
          slug: p.author.slug || undefined,
        }
      : undefined,
    coverImage: resolveAsset(p.cover_image),
    readingMinutes: p.reading_minutes ?? undefined,
    contentHtml: p.content,
  };
}

/* -------------------------------------------------------------------------- */
/*  MOCK ADATOK — csak amíg nincs backend                                     */
/* -------------------------------------------------------------------------- */

const MOCK_CATEGORIES: BlogCategory[] = [
  { slug: "fogagy", name: "Fogágy" },
  { slug: "implantologia", name: "Implantológia" },
  { slug: "fogszabalyozas", name: "Fogszabályozás" },
  { slug: "esztetika", name: "Esztétika" },
  { slug: "szajhigiena", name: "Szájhigiénia" },
  { slug: "esemenyek", name: "Események, képzések" },
];

const AUTHOR_KINGA: BlogAuthor = {
  name: "Dr. Maráz Kinga",
  slug: "dr-maraz-kinga",
};

const MOCK_POSTS: BlogPost[] = [
  {
    slug: "mikor-erdemes-eloszor-fogszabalyozo-szakorvoshoz-fordulni",
    title: "Mikor érdemes először fogszabályozó szakorvoshoz fordulni?",
    excerpt:
      "Sok szülő bizonytalan abban, mikor mutassa meg gyermekét először fogszabályozó szakorvosnak — a választ a fogazat és az állcsontok fejlődési mintázata adja.",
    publishedAt: "2025-09-15",
    category: MOCK_CATEGORIES[2],
    author: { name: "Dr. Vadász Anna", slug: "dr-vadasz-anna" },
    readingMinutes: 6,
    contentHtml: `
      <p>A fogszabályozás megkezdésének ideális időpontja sokszor nem egyértelmű a szülők számára. A nemzetközi ajánlások szerint 6-7 éves kor körül érdemes az első konzultációra elvinni a gyermeket — ekkor felmérhető a növekedési tendencia és a fogak előtörésének várható idejereagáló rendellenességek.</p>
      <h2>Mire figyeljünk?</h2>
      <p>Figyelmeztető jel lehet a nyitott szájtartás, a gátolt orrlégzés és a beszédhiba. Ezek mindegyike utalhat olyan állcsont-elváltozásra, amely korai funkcionális kezeléssel jól befolyásolható.</p>
      <p>Nem kell megvárnunk, hogy az összes tejfog leváltódjon — még az előtt el lehet kezdeni akár a kivehető készülékes kezelést is.</p>
    `,
  },
  {
    slug: "alveolus-prezervacio-miert-fontos-a-foghuzas-utani-csontmegorzes",
    title: "Alveolus prezerváció — miért fontos a foghúzás utáni csontmegőrzés?",
    excerpt:
      "Egy foghúzás után az állcsont természetes módon elkezd visszahúzódni. Az alveolus prezerváció megőrzi a csontvolument a későbbi implantációhoz.",
    publishedAt: "2025-07-22",
    category: MOCK_CATEGORIES[1],
    author: AUTHOR_KINGA,
    readingMinutes: 8,
    contentHtml: `
      <p>Az alveolus prezerváció egy célzott sebészi eljárás, amelynek célja a foghúzás után visszamaradó csontüreg (alveolus) volumenének megőrzése.</p>
      <h2>Miért szükséges?</h2>
      <p>Foghúzás után 6 hónappal a horizontális csontveszteség akár 50% is lehet — ez különösen kritikus, ha implantátumot tervezünk az adott helyre.</p>
    `,
  },
  {
    slug: "iranyitott-biofilm-kezelessel-8-lepesben-a-tokeletes-szajhigienia-fele",
    title: "Irányított biofilm kezeléssel 8 lépésben a tökéletes szájhigiénia felé",
    excerpt:
      "A Guided Biofilm Therapy (GBT) protokoll 8 jól meghatározott lépésével a professzionális szájhigiéniai kezelések új generációja érkezett a Dentoplant-ba.",
    publishedAt: "2025-05-08",
    category: MOCK_CATEGORIES[4],
    author: { name: "Csató-Dobó Huanita", slug: "dobo-huanita" },
    readingMinutes: 7,
    contentHtml: `
      <p>A Guided Biofilm Therapy (GBT) egy svájci eredetű, EMS által kidolgozott protokoll, amely 8 standardizált lépésen keresztül vezet el a fogkő- és lepedékmentes szájüregig.</p>
    `,
  },
  {
    slug: "dr-maraz-kinga-az-europerio-11-kongresszuson-jart-becsben",
    title: "Dr. Maráz Kinga az EuroPerio 11 Kongresszuson járt Bécsben",
    excerpt:
      "2025. május 14-17. között Bécsben rendezték az európai parodontológia legjelentősebb eseményét, ahol rendelőnk vezetője is részt vett.",
    publishedAt: "2025-05-20",
    category: MOCK_CATEGORIES[5],
    author: AUTHOR_KINGA,
    readingMinutes: 4,
    contentHtml: `
      <p>Az EuroPerio kongresszus háromévente kerül megrendezésre, és a parodontológia legmagasabb szintű nemzetközi rendezvénye.</p>
    `,
  },
  {
    slug: "termeszetes-mosoly-keramia-hejakkal",
    title: "Természetes mosoly kerámia héjakkal",
    excerpt:
      "A kerámia héjak (veneerek) lehetővé teszik a természetes hatású, mégis tartós esztétikai változást — minimális foganyag-veszteséggel.",
    publishedAt: "2025-04-10",
    category: MOCK_CATEGORIES[3],
    readingMinutes: 6,
    contentHtml: `
      <p>A kerámia héjak vékony, kézzel készített porcelán lapok, amelyeket a fog külső felszínére ragasztunk. Természetes hatást keltenek, és minimális csiszolással helyezhetők fel.</p>
    `,
  },
  {
    slug: "fogagybetegseg-korszeru-kezeleserol",
    title: "A fogágybetegség korszerű kezeléséről",
    excerpt:
      "A fogágybetegség nemcsak az ínyt, hanem a fogakat körülvevő csontot és lágyrészeket is érintő gyulladás — a korai felismerés és a fázisos kezelés a kulcs.",
    publishedAt: "2025-02-18",
    category: MOCK_CATEGORIES[0],
    author: AUTHOR_KINGA,
    readingMinutes: 9,
    contentHtml: `
      <p>A modern parodontológia szerint a fogágybetegség kezelése fázisos folyamat: a megelőző és higiéniai szakasz után jön a nem-sebészi, majd szükség esetén a sebészi-regeneratív szakasz, végül a hosszú távú gondozás.</p>
    `,
  },
];
