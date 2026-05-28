import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, GraduationCap, Quote, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { TEAM, type TeamMember, initials } from "@/lib/team";

function findMember(slug: string): { member: TeamMember; group: string } | null {
  for (const g of TEAM) {
    const m = g.members.find((x) => x.slug === slug);
    if (m) return { member: m, group: g.heading };
  }
  return null;
}

export function generateStaticParams() {
  return TEAM.flatMap((g) => g.members)
    .filter((m) => m.hasProfile)
    .map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findMember(slug);
  if (!found) return { title: "Munkatárs nem található — Dentoplant" };
  const { member } = found;
  return {
    title: `${member.name} — Dentoplant Fogászat Szeged`,
    description: `${member.name}, ${member.role}${member.focus ? ". Szakterülete: " + member.focus : ""}.`,
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findMember(slug);
  if (!found || !found.member.hasProfile) notFound();
  const { member, group } = found;

  return (
    <>
      <PageHero
        eyebrow={group}
        title={member.name}
        description={member.role}
        crumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Orvosaink", href: "/munkatarsaink" },
          { label: member.name },
        ]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Bal oszlop — fotó + alapinfó */}
          <aside className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500 shadow-lg shadow-brand-900/10">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_60%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-8xl font-semibold text-white/90 drop-shadow-sm">
                      {initials(member.name)}
                    </span>
                  </div>
                </>
              )}
            </div>

            {member.credentials && member.credentials.length > 0 && (
              <div className="rounded-3xl border border-border bg-background p-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Végzettség és szakvizsgák
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/85">
                  {member.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.focus && (
              <div className="rounded-3xl bg-brand-700 p-6 text-white shadow-lg shadow-brand-900/20">
                <div className="flex items-center gap-2 text-white/80">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Szakterülete
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed">{member.focus}</p>
              </div>
            )}

            <Link href="/kapcsolat" className="btn-primary !w-full">
              Időpontkérés <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>

          {/* Jobb oszlop — szöveges tartalom */}
          <div className="space-y-12">
            {member.bio && member.bio.length > 0 && (
              <div className="space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
                {member.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            {member.quote && (
              <blockquote className="relative rounded-3xl border border-brand-200/70 bg-brand-50/60 p-7 md:p-9">
                <Quote className="absolute -top-3 left-7 h-7 w-7 rounded-full bg-brand-700 p-1.5 text-white" />
                <p className="font-display text-lg italic leading-relaxed text-brand-900 md:text-xl">
                  „{member.quote}"
                </p>
                <footer className="mt-4 text-sm font-semibold text-brand-700">
                  — {member.name}
                </footer>
              </blockquote>
            )}

            {member.affiliations && member.affiliations.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-brand-700">
                  <Award className="h-5 w-5" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Szakmai szervezetek, tagságok
                  </span>
                </div>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {member.affiliations.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.career && member.career.length > 0 && (
              <div>
                <h2 className="font-display text-3xl text-brand-900 md:text-4xl">
                  Szakmai életpálya
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Folyamatos képzések, kongresszusok és szakvizsgák — visszafelé időrendben.
                </p>

                <ol className="mt-8 relative space-y-5 border-l border-brand-200 pl-7">
                  {member.career.map((c, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[33px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-brand-600 bg-background">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      </span>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                        <div className="flex-shrink-0 font-display text-lg font-semibold text-brand-700 sm:w-20">
                          {c.year}
                        </div>
                        <div className="text-sm leading-relaxed text-foreground/85 md:text-[15px]">
                          {c.event}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/munkatarsaink"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Vissza a csapathoz
          </Link>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
