"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useLocalizedHref } from "@/lib/i18n/context";
import { getHours } from "@/lib/site-data";

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

const FOOTER_LINKS: { hu: string; en: string; href: string }[] = [
  { hu: "Jogi nyilatkozat", en: "Legal notice", href: "/jogi-nyilatkozat" },
  { hu: "ÁSZF", en: "Terms & Conditions", href: "/aszf" },
  { hu: "Garancia", en: "Guarantee", href: "/garancia" },
  { hu: "Adatvédelmi tájékoztató", en: "Privacy policy", href: "/adatvedelem" },
  { hu: "Oldaltérkép", en: "Sitemap", href: "/oldalterkep" },
  { hu: "Partnerek", en: "Partners", href: "/partnerek" },
  { hu: "Bejelentkezés", en: "Book appointment", href: "/kapcsolat" },
];

const FOOTER_SERVICES: { hu: string; en: string; href: string }[] = [
  { hu: "Digitális mosolytervezés", en: "Digital Smile Design", href: "/szolgaltatasok/digitalis-mosolytervezes" },
  { hu: "Fogágybetegség kezelése", en: "Periodontal disease treatment", href: "/szolgaltatasok/fogagybetegseg-kezelese" },
  { hu: "Fogbeültetés", en: "Dental implantation", href: "/szolgaltatasok/fogbeultetes" },
  { hu: "Fogszabályozás", en: "Orthodontics", href: "/szolgaltatasok/fogszabalyozas" },
  { hu: "Mikroszkópos fogászat", en: "Microscope dentistry", href: "/szolgaltatasok/mikroszkopos-fogaszat" },
];

export function SiteFooter() {
  const locale = useLocale();
  const l = useLocalizedHref();
  const en = locale === "en";
  const t = {
    tagline: en
      ? "Dental and implantology clinic in Szeged. Up-to-date professional knowledge, thorough preparation, many years of clinical experience and the most effective treatment methods in one place."
      : "Fogászati és implantológiai rendelő Szegeden. Naprakész szakmai ismeretek, alapos felkészültség, sokéves klinikai tapasztalat és a leghatékonyabb kezelési módszerek egy helyen.",
    services: en ? "Services" : "Szolgáltatások",
    contact: en ? "Contact" : "Kapcsolat",
    hours: en ? "Opening hours" : "Nyitvatartás",
    legalNav: en ? "Legal and other information" : "Jogi és egyéb információk",
    rights: en ? "All rights reserved." : "Minden jog fenntartva.",
  };
  const hours = getHours(locale);
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
            {t.tagline}
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
            {t.services}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={l(s.href)} className="hover:text-white">
                  {en ? s.en : s.hu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-200">
            {t.contact}
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
            {t.hours}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-100/90">
            {hours.map((h) => (
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
            aria-label={t.legalNav}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-wider text-brand-100/80"
          >
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={l(link.href)} className="hover:text-white">
                {en ? link.en : link.hu}
              </Link>
            ))}
          </nav>
          <p className="mt-5 text-center text-xs text-brand-100/60">
            © {new Date().getFullYear()} Dentoplant. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
