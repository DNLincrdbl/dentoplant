import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21.95v-7.46h2.5l.37-2.9h-2.87V9.74c0-.84.23-1.41 1.43-1.41h1.53V5.74a20.5 20.5 0 0 0-2.23-.11c-2.21 0-3.73 1.35-3.73 3.83v2.13H8v2.9h2.5v7.46a10 10 0 1 0 3 0Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
import { SITE } from "@/lib/site-data";

// A linkek szövegét/útvonalát később linkenként véglegesítjük.
const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Jogi nyilatkozat", href: "/jogi-nyilatkozat" },
  { label: "ÁSZF", href: "/aszf" },
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelem" },
  { label: "Oldaltérkép", href: "/oldalterkep" },
  { label: "Partnerek", href: "/partnerek" },
  { label: "Bejelentkezés", href: "/kapcsolat" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-50">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 text-sm font-sans font-bold">
              D
            </span>
            <span>
              Dento<span className="text-brand-200">plant</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-100/80">
            Fogászati és implantológiai rendelő Szegeden. Naprakész szakmai ismeretek,
            alapos felkészültség, sokéves klinikai tapasztalat és a leghatékonyabb
            kezelési módszerek egy helyen.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.social.facebook}
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.instagram}
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-200">
            Szolgáltatások
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/szolgaltatasok/digitalis-mosolytervezes" className="hover:text-white">Digitális mosolytervezés</Link></li>
            <li><Link href="/szolgaltatasok/fogagybetegseg-kezelese" className="hover:text-white">Fogágybetegség kezelése</Link></li>
            <li><Link href="/szolgaltatasok/fogbeultetes" className="hover:text-white">Fogbeültetés</Link></li>
            <li><Link href="/szolgaltatasok/fogszabalyozas" className="hover:text-white">Fogszabályozás</Link></li>
            <li><Link href="/szolgaltatasok/mikroszkopos-fogaszat" className="hover:text-white">Mikroszkópos fogászat</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-200">
            Kapcsolat
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-100/90">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
          <h4 className="mt-8 font-sans text-sm font-semibold uppercase tracking-wider text-brand-200">
            Nyitvatartás
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-100/90">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span className="text-white">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <nav
            aria-label="Jogi és egyéb információk"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-wider text-brand-100/80"
          >
            {FOOTER_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-5 text-center text-xs text-brand-100/60">
            © {new Date().getFullYear()} Dentoplant. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
