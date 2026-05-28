import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { SERVICES, getService, getServicesByCategory } from "@/lib/services";
import { SITE } from "@/lib/site-data";
import { SERVICE_CONTENTS } from "@/components/services/contents";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Dentoplant Fogászat Szeged`,
    description: service.summary.slice(0, 160),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.name}
        description={service.summary}
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Szolgáltatások", href: "/szolgaltatasok" },
          { label: service.name },
        ]}
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <article className="prose-content">
            <FullServiceContent slug={service.slug} fallbackName={service.name} />
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Kategória</div>
                  <div className="font-semibold text-brand-900">{service.category}</div>
                </div>
              </div>
              <Link href="/kapcsolat" className="btn-primary mt-6 !w-full">
                Időpontfoglalás <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-brand-700 hover:border-brand-300"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>

            {related.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  Kapcsolódó szolgáltatások
                </div>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/szolgaltatasok/${r.slug}`}
                        className="group flex items-start gap-3"
                      >
                        <r.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                        <span className="text-sm font-medium text-foreground group-hover:text-brand-700">
                          {r.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

function PlaceholderContent({ name }: { name: string }) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-foreground/85">
      <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-6 text-sm text-brand-800">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
          <div>
            <strong className="block font-semibold text-brand-900">Részletes tartalom hamarosan</strong>
            <span className="text-brand-800/80">
              A <em>{name}</em> oldal részletes leírását hamarosan frissítjük. Addig is keressen
              minket bizalommal — kérdéseire szívesen válaszolunk személyes konzultáción.
            </span>
          </div>
        </div>
      </div>

      <h2 className="font-display text-2xl text-brand-900">Hogyan tudunk segíteni?</h2>
      <p>
        Foglaljon időpontot egy első konzultációra, ahol részletesen feltérképezzük az állapotát és
        személyre szabott kezelési tervet javaslunk. A Dentoplant Rendelőben naprakész szakmai
        ismereteken és sokéves klinikai tapasztalaton alapuló ellátást kap.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        <li className="rounded-xl border border-border bg-background p-4 text-sm">
          <strong className="block text-brand-800">Részletes vizsgálat</strong>
          Digitális röntgen és szükség esetén Cone Beam CT a pontos diagnózishoz.
        </li>
        <li className="rounded-xl border border-border bg-background p-4 text-sm">
          <strong className="block text-brand-800">Személyre szabott terv</strong>
          Áttekinthető, lépésről lépésre kidolgozott kezelési tervet kap.
        </li>
        <li className="rounded-xl border border-border bg-background p-4 text-sm">
          <strong className="block text-brand-800">Modern technológia</strong>
          Mikroszkópos pontosság, lézer és digitális tervezés ahol indokolt.
        </li>
        <li className="rounded-xl border border-border bg-background p-4 text-sm">
          <strong className="block text-brand-800">Hosszú távú gondozás</strong>
          Rendszeres kontroll és utánkövetés, hogy a kezelés eredménye tartós legyen.
        </li>
      </ul>
    </div>
  );
}

/**
 * Service-specific full content. Loaded from the registry in
 * `@/components/services/contents`. Falls back to a placeholder when no
 * detailed content has been written yet.
 */
function FullServiceContent({
  slug,
  fallbackName,
}: {
  slug: string;
  fallbackName: string;
}) {
  const Component = SERVICE_CONTENTS[slug];
  if (Component) return <Component />;
  return <PlaceholderContent name={fallbackName} />;
}

