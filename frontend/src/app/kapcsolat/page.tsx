import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SITE, getHours } from "@/lib/site-data";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Booking — Dentoplant Dental Clinic Szeged" : "Bejelentkezés — Dentoplant Fogászat Szeged",
    description: en
      ? "Our private dental clinic operates by prior appointment: we arrange the times so that procedures can be carried out at the right time according to the treatment plan."
      : "Fogászati magánrendelőnk előzetes bejelentkezés alapján működik: az időpontokat úgy egyeztetjük, hogy a kezelési tervnek megfelelő időben végezhessük el a beavatkozásokat.",
  };
}

const CLINIC_ADDRESS = "6726 Szeged, Fő fasor 45.";

export default async function ContactPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  const hours = getHours(locale);
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.title }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl text-brand-900 md:text-3xl">{c.dearTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.dearBody}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
          <div>
            <span className="eyebrow">{c.reach}</span>
            <h3 className="mt-4 font-display text-2xl text-brand-900">
              Dentoplant {en ? "Dental and Implantology Clinic" : "Fogászati és Implantológiai Rendelő"}
            </h3>

            <div className="mt-8 space-y-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.mobile}
                  </span>
                  <span className="font-semibold text-brand-900">{SITE.phone}</span>
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="font-semibold text-brand-900">{SITE.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.address}
                  </span>
                  <span className="font-semibold text-brand-900">{CLINIC_ADDRESS}</span>
                </span>
              </div>

              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.hours}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-brand-900">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={c.mapTitle}
                src="https://maps.google.com/maps?q=Szeged%20F%C5%91%20fasor%2045&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6 md:p-8">
            <h3 className="font-display text-2xl text-brand-900">{c.formTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.formSub}</p>
            <form className="mt-6 grid gap-4">
              <Field label={c.name} name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label={c.subject} name="subject" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {c.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-500"
                  placeholder={c.messagePlaceholder}
                />
              </div>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[var(--brand-600)]" />
                <span>
                  {c.consentBefore}
                  <Link href={localizeHref("/adatvedelem", locale)} className="text-brand-700 underline">
                    {c.consentLink}
                  </Link>
                  .
                </span>
              </label>
              <button type="submit" className="btn-primary w-full">
                {c.submit} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-500"
      />
    </div>
  );
}

const HU = {
  eyebrow: "Kapcsolat",
  home: "Főoldal",
  title: "Bejelentkezés",
  heroDesc:
    "Fogászati magánrendelőnk előzetes bejelentkezés alapján működik — az időpontokat úgy egyeztetjük, hogy az egymásra épülő beavatkozásokat a kezelési terv szerinti megfelelő időben végezhessük el.",
  dearTitle: "Kedves érdeklődő!",
  dearBody:
    "Fogászati magánrendelőnk előzetes bejelentkezés alapján működik. Az időpontokat Önnel úgy egyeztetjük, hogy az egymásra épülő beavatkozásokat a kezelési terv szerinti megfelelő időben végezhessük el. Telefonos bejelentkezéskor recepciósunkkal veszi fel a kapcsolatot. Igyekszünk mindent elkövetni, hogy a megbeszélt időpontban ne várakoztassuk meg Önt, de kisebb csúszások előfordulhatnak, amelyekről időben értesítjük.",
  reach: "Elérhetőségeink",
  mobile: "Mobil",
  address: "Cím",
  hours: "Nyitvatartás",
  mapTitle: "Dentoplant rendelő térképe",
  formTitle: "Online bejelentkezés",
  formSub: "Töltse ki az űrlapot, és kollégánk hamarosan felveszi Önnel a kapcsolatot.",
  name: "Név",
  subject: "Tárgy",
  message: "Üzenet",
  messagePlaceholder: "Miben segíthetünk?",
  consentBefore: "Az űrlap kitöltésével elfogadom az ",
  consentLink: "adatvédelmi irányelveket",
  submit: "Üzenet küldése",
};

const EN = {
  eyebrow: "Contact",
  home: "Home",
  title: "Booking",
  heroDesc:
    "Our private dental clinic operates by prior appointment — we arrange the times so that consecutive procedures can be carried out at the right time according to the treatment plan.",
  dearTitle: "Dear enquirer!",
  dearBody:
    "Our private dental clinic operates by prior appointment. We arrange the times with you so that consecutive procedures can be carried out at the right time according to the treatment plan. When booking by phone, you get in touch with our receptionist. We do everything we can not to keep you waiting at the agreed time, but small delays can occur, of which we notify you in time.",
  reach: "Our contact details",
  mobile: "Mobile",
  address: "Address",
  hours: "Opening hours",
  mapTitle: "Map of the Dentoplant clinic",
  formTitle: "Online booking",
  formSub: "Fill in the form and our colleague will contact you shortly.",
  name: "Name",
  subject: "Subject",
  message: "Message",
  messagePlaceholder: "How can we help you?",
  consentBefore: "By filling in this form I accept the ",
  consentLink: "privacy policy",
  submit: "Send message",
};
