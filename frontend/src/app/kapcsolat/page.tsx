import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/site-data";

export const metadata = {
  title: "Bejelentkezés — Dentoplant Fogászat Szeged",
  description:
    "Fogászati magánrendelőnk előzetes bejelentkezés alapján működik: az időpontokat úgy egyeztetjük, hogy a kezelési tervnek megfelelő időben végezhessük el a beavatkozásokat.",
};

const CLINIC_ADDRESS = "6726 Szeged, Fő fasor 45.";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kapcsolat"
        title="Bejelentkezés"
        description="Fogászati magánrendelőnk előzetes bejelentkezés alapján működik — az időpontokat úgy egyeztetjük, hogy az egymásra épülő beavatkozásokat a kezelési terv szerinti megfelelő időben végezhessük el."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Bejelentkezés" }]}
      />

      <section className="container-page py-14 md:py-20">
        {/* Bevezető */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl text-brand-900 md:text-3xl">Kedves érdeklődő!</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Fogászati magánrendelőnk előzetes bejelentkezés alapján működik. Az időpontokat Önnel úgy
            egyeztetjük, hogy az egymásra épülő beavatkozásokat a kezelési terv szerinti megfelelő
            időben végezhessük el. Telefonos bejelentkezéskor recepciósunkkal veszi fel a kapcsolatot.
            Igyekszünk mindent elkövetni, hogy a megbeszélt időpontban ne várakoztassuk meg Önt, de
            kisebb csúszások előfordulhatnak, amelyekről időben értesítjük.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
          {/* Elérhetőségeink */}
          <div>
            <span className="eyebrow">Elérhetőségeink</span>
            <h3 className="mt-4 font-display text-2xl text-brand-900">
              Dentoplant Fogászati és Implantológiai Rendelő
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
                    Mobil
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
                    Cím
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
                    Nyitvatartás
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {SITE.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-3">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-brand-900">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Térkép */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Dentoplant rendelő térképe"
                src="https://maps.google.com/maps?q=Szeged%20F%C5%91%20fasor%2045&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>
          </div>

          {/* Online bejelentkezés */}
          <div className="rounded-3xl border border-border bg-muted/30 p-6 md:p-8">
            <h3 className="font-display text-2xl text-brand-900">Online bejelentkezés</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Töltse ki az űrlapot, és kollégánk hamarosan felveszi Önnel a kapcsolatot.
            </p>
            <form className="mt-6 grid gap-4">
              <Field label="Név" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Tárgy" name="subject" />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Üzenet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-500"
                  placeholder="Miben segíthetünk?"
                />
              </div>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[var(--brand-600)]" />
                <span>
                  Az űrlap kitöltésével elfogadom az{" "}
                  <Link href="/adatvedelem" className="text-brand-700 underline">
                    adatvédelmi irányelveket
                  </Link>
                  .
                </span>
              </label>
              <button type="submit" className="btn-primary w-full">
                Üzenet küldése <ArrowRight className="h-4 w-4" />
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
