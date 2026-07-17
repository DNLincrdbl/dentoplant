import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";

export async function CtaContact() {
  const locale = await getLocale();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "Contact" : "Kapcsolat",
    title: en ? "We're here to help." : "Itt vagyunk, hogy segítsünk.",
    lead: en
      ? "Call us, send an email or visit us at the clinic — we're happy to help with your dental needs."
      : "Hívjon minket, írjon emailt vagy keressen fel rendelőnkben — készséggel segítünk a fogászati igényei kapcsán.",
    phone: en ? "Phone" : "Telefon",
    email: "Email",
    address: en ? "Address" : "Cím",
    formTitle: en ? "Book an appointment" : "Foglaljon időpontot",
    formSub: en ? "We'll get back to you shortly with a confirmation." : "Hamarosan visszajelzünk a megerősítéssel.",
    name: en ? "Full name" : "Teljes név",
    phoneField: en ? "Phone number" : "Telefonszám",
    emailField: en ? "Email address" : "Email cím",
    message: en ? "Message" : "Üzenet",
    messagePlaceholder: en ? "How can we help you?" : "Mit szeretne, miben segítsünk?",
    consentBefore: en ? "I have read and accept the " : "Elolvastam és elfogadom az ",
    consentLink: en ? "privacy policy" : "adatvédelmi nyilatkozatot",
    consentAfter: en ? "." : ".",
    submit: en ? "Request appointment" : "Időpontkérés",
  };
  return (
    <section className="container-page py-20 md:py-28">
      <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-10 text-white shadow-2xl shadow-brand-900/20 md:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="eyebrow !text-brand-100">{t.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">{t.title}</h2>
            <p className="mt-4 max-w-md text-base text-brand-50/85">{t.lead}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-1">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-white/15">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-brand-100/80">{t.phone}</span>
                  <span className="font-semibold">{SITE.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-white/15">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-brand-100/80">{t.email}</span>
                  <span className="font-semibold">{SITE.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-white/15">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-brand-100/80">{t.address}</span>
                  <span className="font-semibold">{SITE.address}</span>
                </span>
              </div>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-6 text-foreground md:p-8">
            <h3 className="font-display text-2xl text-brand-900">{t.formTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.formSub}</p>
            <div className="mt-6 grid gap-4">
              <Field label={t.name} name="name" required />
              <Field label={t.phoneField} name="phone" type="tel" required />
              <Field label={t.emailField} name="email" type="email" />
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.message}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:bg-background"
                  placeholder={t.messagePlaceholder}
                />
              </div>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[var(--brand-600)]" />
                <span>
                  {t.consentBefore}
                  <Link href={localizeHref("/adatvedelem", locale)} className="text-brand-700 underline">
                    {t.consentLink}
                  </Link>
                  {t.consentAfter}
                </span>
              </label>
              <button type="submit" className="btn-primary w-full">
                {t.submit} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
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
        className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:bg-background"
      />
    </div>
  );
}
