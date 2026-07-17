import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { getTeam, type TeamMember, initials } from "@/lib/team";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref, type Locale } from "@/lib/i18n/config";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Our doctors — Dentoplant Dental Clinic Szeged" : "Orvosaink — Dentoplant Fogászat Szeged",
    description: en
      ? "At the Dentoplant Dental Clinic in Szeged, a team committed to healing provides quality dental care: introductions to our dentists, dental hygienist and assistant colleagues."
      : "A Dentoplant Fogászat szegedi rendelőjében a gyógyítás iránt elkötelezett csapat végez minőségi fogászati ellátást: fogorvosaink, dentálhigiénikus és asszisztens kollégáink bemutatkozása.",
  };
}

export default async function TeamPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const team = getTeam(locale);
  const t = {
    home: en ? "Home" : "Főoldal",
    eyebrow: en ? "Our doctors" : "Orvosaink",
    title: en ? "The Dentoplant team" : "A Dentoplant csapata",
    desc: en
      ? "We assembled our team committed to healing so that several specialties of dentistry are available in our clinic. Up-to-date professional knowledge, thorough preparation and many years of clinical experience — these are the measures of our work."
      : "A gyógyítás iránt elkötelezett csapatunkat úgy állítottuk össze, hogy rendelőnkben a fogászat több szakterülete is elérhető legyen. Naprakész szakmai ismeretek, alapos felkészültség és sok éves klinikai tapasztalat — ezek munkánk értékmérői.",
    focus: en ? "Specialty" : "Szakterülete",
    details: en ? "Details" : "Részletek",
  };
  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.desc}
        crumbs={[{ label: t.home, href: "/" }, { label: t.eyebrow }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="space-y-16 md:space-y-20">
          {team.map((group) => (
            <div key={group.heading}>
              <div className="mb-8 flex items-end justify-between gap-6">
                <h2 className="font-display text-3xl text-brand-900 md:text-4xl">{group.heading}</h2>
                <div className="hidden h-px flex-1 bg-border md:block" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((m) => (
                  <TeamCard
                    key={m.slug}
                    member={m}
                    locale={locale}
                    focusLabel={t.focus}
                    detailsLabel={t.details}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaContact />
    </>
  );
}

function TeamCard({
  member,
  locale,
  focusLabel,
  detailsLabel,
}: {
  member: TeamMember;
  locale: Locale;
  focusLabel: string;
  detailsLabel: string;
}) {
  const cardClass =
    "group flex flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm shadow-brand-900/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10";

  const body = (
    <TeamCardBody member={member} focusLabel={focusLabel} detailsLabel={detailsLabel} />
  );

  if (member.hasProfile) {
    return (
      <Link href={localizeHref(`/munkatars/${member.slug}`, locale)} className={cardClass}>
        {body}
      </Link>
    );
  }
  return <article className={cardClass}>{body}</article>;
}

function TeamCardBody({
  member,
  focusLabel,
  detailsLabel,
}: {
  member: TeamMember;
  focusLabel: string;
  detailsLabel: string;
}) {
  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-7xl font-semibold text-white/90 drop-shadow-sm">
                {initials(member.name)}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
        <div>
          <h3 className="font-display text-xl text-brand-900 md:text-2xl">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-brand-700">{member.role}</p>
        </div>

        {member.credentials && member.credentials.length > 0 && (
          <ul className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
            {member.credentials.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-400" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        )}

        {member.focus && (
          <div className="rounded-xl bg-brand-50/60 px-4 py-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              {focusLabel}
            </div>
            <p className="mt-1 text-sm text-foreground/85">{member.focus}</p>
          </div>
        )}

        {member.hasProfile && (
          <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
            {detailsLabel} <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </>
  );
}
