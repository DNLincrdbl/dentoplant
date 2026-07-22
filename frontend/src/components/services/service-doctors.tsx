import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMember, initials, type TeamMember } from "@/lib/team";
import { TeamPortrait } from "@/components/team-portrait";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

/**
 * A szolgáltatás-oldal végén megjelenő „kezelőorvosaink" blokk.
 * A `slugs` a `lib/team.ts` munkatárs-azonosítóit tartalmazza.
 */
export async function ServiceDoctors({ slugs }: { slugs?: string[] }) {
  const locale = await getLocale();
  const members = (slugs ?? [])
    .map((slug) => getMember(slug, locale))
    .filter((m): m is TeamMember => Boolean(m));

  if (members.length === 0) return null;

  const heading =
    locale === "en" ? "Specialists providing this treatment" : "A kezelést végző szakembereink";
  const profileLabel = locale === "en" ? "Profile" : "Bemutatkozás";

  return (
    <section className="mt-14 border-t border-border pt-10">
      <h2 className="font-display text-2xl text-brand-900 md:text-3xl">{heading}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {members.map((m) => (
          <DoctorCard key={m.slug} member={m} locale={locale} profileLabel={profileLabel} />
        ))}
      </div>
    </section>
  );
}

function DoctorCard({
  member,
  locale,
  profileLabel,
}: {
  member: TeamMember;
  locale: import("@/lib/i18n/config").Locale;
  profileLabel: string;
}) {
  const inner = (
    <>
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500">
        {member.image ? (
          <TeamPortrait member={member} sizes="64px" />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="font-display text-xl font-semibold text-white/90">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-lg text-brand-900">{member.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-brand-700">{member.role}</p>
        {member.focus && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{member.focus}</p>
        )}
        {member.hasProfile && (
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
            {profileLabel} <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </>
  );

  const cardClass =
    "group flex gap-4 rounded-2xl border border-border bg-background p-5 transition-all";

  if (member.hasProfile) {
    return (
      <Link
        href={localizeHref(`/munkatars/${member.slug}`, locale)}
        className={`${cardClass} hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5`}
      >
        {inner}
      </Link>
    );
  }
  return <article className={cardClass}>{inner}</article>;
}
