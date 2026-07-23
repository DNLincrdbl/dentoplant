import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { CtaContact } from "@/components/home/cta-contact";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Partners — Dentoplant Dental Clinic Szeged" : "Partnerek — Dentoplant Fogászat Szeged",
    description: en
      ? "The cooperating partners of the Dentoplant Dental Clinic and our contracted health insurance (health fund) partners."
      : "A Dentoplant Fogászati Rendelő együttműködő partnerei és szerződött egészségbiztosító (egészségpénztári) partnereink.",
  };
}

type Supplier = { name: string; address?: string; links?: { label: string; href: string }[] };

const SUPPLIERS: Supplier[] = [
  {
    name: "Nobel Biocare",
    address: "Nobel Biocare Magyarország Kft., 1113 Budapest, Bocskai u. 134-146.",
    links: [{ label: "nobelbiocare.com", href: "https://www.nobelbiocare.com" }],
  },
  {
    name: "Geistlich Pharma AG",
    address: "Magyarországi forgalmazó: Front-Dent Kft., 1094 Budapest, Ferenc tér 5.",
    links: [{ label: "geistlich-pharma.com", href: "https://www.geistlich-pharma.com" }],
  },
  {
    name: "Straumann GmbH",
    address:
      "Straumann GmbH Magyarországi Fióktelepe, H-1146 Budapest, M3 Business Center, Hungária krt. 179-187.",
  },
  {
    name: "Alfa Implant Fogászati és Kereskedelmi Kft.",
    address: "1027 Budapest, Central Business Center, Horvát u. 14-24.",
  },
  {
    name: "Camlog® – Logintech Magyarország Kft.",
    address: "6726 Szeged, Fő fasor 16-20.",
    links: [
      { label: "logintech.hu", href: "https://www.logintech.hu" },
      { label: "camlog.com", href: "https://www.camlog.com" },
    ],
  },
  {
    name: "Cranex® – Bardeco Kft.",
    address: "1122 Budapest, Ráth György utca 60.",
  },
  {
    name: "Curaprox® – Sager Dental Kft.",
    address: "1026 Budapest, Pasaréti út 122-124.",
    links: [{ label: "sagerdental.hu", href: "https://www.sagerdental.hu" }],
  },
  {
    name: "Morita® gépek, Tokuyama® tömőanyagok – Mori Dent Kft.",
    address: "1147 Budapest, Huszt u. 9.",
    links: [{ label: "morident.hu", href: "https://www.morident.hu" }],
  },
  {
    name: "USUS Kft.",
    address: "6726 Szeged, Szőregi út 38.",
    links: [{ label: "orvosi-eszkozok.hu", href: "https://www.orvosi-eszkozok.hu" }],
  },
  {
    name: "Dóm Dent Kft.",
    address: "6725 Szeged, Felhő utca 9.",
    links: [{ label: "dom-dent.hu", href: "https://www.dom-dent.hu" }],
  },
];

type Fund = { name: string; logo: string; w: number; h: number; address?: string };

const FUNDS: Fund[] = [
  { name: "ADOSZT Egészségpénztár", logo: "/partnerek/adoszt_ep.jpg", w: 82, h: 82 },
  { name: "TEMPO Önkéntes Kiegészítő Egészségpénztár", logo: "/partnerek/tempo_ep.gif", w: 201, h: 82, address: "1025 Budapest, Nagybányai út 92." },
  { name: "GENERALI Egészségpénztár", logo: "/partnerek/generali_ep.jpg", w: 238, h: 82, address: "1066 Budapest, Teréz krt. 42-44." },
  { name: "MKB Egészségpénztár", logo: "/partnerek/MKB_ep.jpg", w: 66, h: 82, address: "1821 Budapest, Váci u. 38." },
  { name: "OTP Országos Egészségpénztár", logo: "/partnerek/otp_ep.jpg", w: 107, h: 82, address: "1051 Budapest, Mérleg u. 4." },
  { name: "WELLNESS Országos Önkéntes Egészségpénztár", logo: "/partnerek/wellness_ep.jpg", w: 258, h: 82 },
  { name: "Fitt Egészségpénztár", logo: "/partnerek/fitt_ep.png", w: 115, h: 82 },
  { name: "Új Pillér Egészségpénztár", logo: "/partnerek/ujpiller_ep.jpg", w: 203, h: 82 },
  { name: "VITAMIN Egészségpénztár", logo: "/partnerek/vitamin_ep.png", w: 164, h: 82, address: "1011 Budapest, Iskola u. 13." },
  { name: "K&H MEDICINA Egészségpénztár", logo: "/partnerek/kh_ep.jpg", w: 96, h: 82, address: "1126 Budapest, Böszörményi út 24/b" },
  { name: "DIMENZIÓ Önkéntes Kölcsönös Egészségpénztár", logo: "/partnerek/dimenzio_ep.jpg", w: 55, h: 82, address: "1013 Budapest, Krisztina krt. 32." },
  { name: "VASUTAS Önkéntes Kölcsönös Kiegészítő Egészségpénztár", logo: "/partnerek/vasutas_ep.jpg", w: 82, h: 82, address: "1144 Budapest, Kőszeg u. 26." },
  { name: "AXA Egészségpénztár", logo: "/partnerek/axa_ep.jpg", w: 121, h: 82, address: "1138 Budapest, Váci út 135-139." },
  { name: "Patika Egészségpénztár", logo: "/partnerek/patika_ep.jpg", w: 205, h: 82 },
  { name: "ERSTE Egészségpénztár", logo: "/partnerek/erste_ep2.jpg", w: 267, h: 80 },
];

export default async function PartnersPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
        image={PAGE_HEROES.partnerek}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{c.suppliersEyebrow}</span>
          <h2 className="mt-4 font-display text-3xl text-brand-900">{c.suppliersTitle}</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SUPPLIERS.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-display text-lg text-brand-900">{s.name}</h3>
              {s.address && <p className="mt-2 text-sm text-muted-foreground">{s.address}</p>}
              {s.links && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {s.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-700 hover:text-brand-600"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">{c.fundsEyebrow}</span>
            <h2 className="mt-4 font-display text-3xl text-brand-900">{c.fundsTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.fundsDesc}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FUNDS.map((f) => (
              <div
                key={f.name}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <div className="grid h-20 w-24 flex-shrink-0 place-items-center rounded-xl bg-white p-2">
                  <Image
                    src={f.logo}
                    alt={`${f.name} ${en ? "logo" : "logó"}`}
                    width={f.w}
                    height={f.h}
                    className="h-auto max-h-16 w-auto max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-brand-900">{f.name}</h3>
                  {f.address && <p className="mt-1 text-xs text-muted-foreground">{f.address}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

const HU = {
  eyebrow: "Partnerek",
  home: "Főoldal",
  title: "Együttműködő partnereink",
  heroDesc:
    "A Dentoplant Fogászati Rendelő szakmai beszállító partnerei és szerződött egészségbiztosító partnereink.",
  suppliersEyebrow: "Szakmai partnerek",
  suppliersTitle: "Beszállítóink",
  fundsEyebrow: "Egészségpénztárak",
  fundsTitle: "Szerződött egészségbiztosító partnereink",
  fundsDesc:
    "Kezeléseink költségét az alábbi egészségpénztárak elszámolják. Kérjük, érdeklődjön pénztáránál a részletekről.",
};

const EN = {
  eyebrow: "Partners",
  home: "Home",
  title: "Our cooperating partners",
  heroDesc:
    "The professional supplier partners of the Dentoplant Dental Clinic and our contracted health insurance partners.",
  suppliersEyebrow: "Professional partners",
  suppliersTitle: "Our suppliers",
  fundsEyebrow: "Health funds",
  fundsTitle: "Our contracted health insurance partners",
  fundsDesc:
    "The following health funds reimburse the cost of our treatments. Please ask your fund for details.",
};
