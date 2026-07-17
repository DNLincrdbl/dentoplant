import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { getLocale } from "@/lib/i18n/server";
import { SITE } from "@/lib/site-data";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en
      ? "Privacy policy — Dentoplant Dental Clinic Szeged"
      : "Adatvédelmi tájékoztató — Dentoplant Fogászat Szeged",
    description: en
      ? "Privacy policy of the Dentoplant Dental and Implantology Clinic: how we process personal data in connection with the website and dental care."
      : "A Dentoplant Fogászati és Implantológiai Rendelő adatvédelmi tájékoztatója: hogyan kezeljük a személyes adatokat a weboldal és a fogászati ellátás kapcsán.",
  };
}

export default async function PrivacyPage() {
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
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-foreground/85">
          {c.sections.map((s) => (
            <div key={s.heading} className="space-y-4">
              <h2 className="font-display text-2xl text-brand-900">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}

          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed">
            <p className="font-medium text-brand-900">{c.contactTitle}</p>
            <p className="mt-2">
              {SITE.name}
              <br />
              {SITE.address}
              <br />
              <a href={SITE.phoneHref} className="text-brand-700 hover:underline">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="text-brand-700 hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

const HU = {
  eyebrow: "Adatvédelem",
  home: "Főoldal",
  title: "Adatvédelmi tájékoztató",
  heroDesc:
    "Tájékoztatás a Dentoplant Fogászati és Implantológiai Rendelő személyesadat-kezelési gyakorlatáról.",
  contactTitle: "Adatkezelő elérhetősége",
  sections: [
    {
      heading: "1. Az adatkezelő",
      paragraphs: [
        "Az adatkezelő a Dentoplant Fogászati Kft. (6726 Szeged, Fő fasor 45.; adószám: 13371160-1-06; cégjegyzékszám: 06 09 009529). A weboldal üzemeltetője és tulajdonosa: Dr. Maráz Kinga.",
      ],
    },
    {
      heading: "2. Milyen adatokat kezelünk?",
      paragraphs: [
        "A weboldalon keresztül megadott kapcsolati adatok (név, e-mail, telefonszám, üzenet tartalma), valamint a rendelői ellátás során szükséges egészségügyi és személyazonosító adatok. A weboldal látogatásakor technikai adatok (IP-cím, böngésző adatok, cookie-k) is keletkezhetnek.",
      ],
    },
    {
      heading: "3. Az adatkezelés célja és jogalapja",
      paragraphs: [
        "Az adatok kezelésének célja az időpontfoglalás és kapcsolattartás, a fogászati ellátás nyújtása, a jogszabályi kötelezettségek teljesítése, valamint — hozzájárulás esetén — tájékoztatás (pl. hírlevél). A jogalap az érintett hozzájárulása, a szerződés teljesítése, illetve jogi kötelezettség teljesítése (GDPR 6. cikk).",
      ],
    },
    {
      heading: "4. Adattovábbítás, megőrzés",
      paragraphs: [
        "Személyes adatait harmadik félnek csak jogszabályi kötelezettség vagy az ellátáshoz szükséges mértékben (pl. fogtechnikai partner, labor) adjuk át. Az adatokat a jogszabályokban előírt, illetve a cél megvalósításához szükséges ideig őrizzük meg.",
      ],
    },
    {
      heading: "5. Cookie-k és analitika",
      paragraphs: [
        "A weboldal cookie-kat használhat a működés és a felhasználói élmény javítása érdekében. A Google Analytics szolgáltatás személyes adatokat is gyűjthet — részletek a Google Adatvédelmi irányelveiben.",
      ],
    },
    {
      heading: "6. Az érintett jogai",
      paragraphs: [
        "Ön jogosult tájékoztatást kérni személyes adatai kezeléséről, kérheti azok helyesbítését, törlését vagy korlátozását, valamint tiltakozhat az adatkezelés ellen. Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat.",
      ],
    },
  ],
};

const EN = {
  eyebrow: "Privacy",
  home: "Home",
  title: "Privacy policy",
  heroDesc:
    "Information on the personal data processing practices of the Dentoplant Dental and Implantology Clinic.",
  contactTitle: "Controller contact details",
  sections: [
    {
      heading: "1. The data controller",
      paragraphs: [
        "The data controller is Dentoplant Fogászati Kft. (6726 Szeged, Fő fasor 45.; tax number: 13371160-1-06; company registration number: 06 09 009529). The operator and owner of the website is Dr. Kinga Maráz.",
      ],
    },
    {
      heading: "2. What data do we process?",
      paragraphs: [
        "Contact data provided through the website (name, email, phone number, message content), as well as health and personal identification data necessary for clinical care. Technical data (IP address, browser data, cookies) may also be generated when visiting the website.",
      ],
    },
    {
      heading: "3. Purpose and legal basis of processing",
      paragraphs: [
        "The purpose of processing is appointment booking and contact, providing dental care, fulfilling legal obligations, and — with consent — information (e.g. newsletter). The legal basis is the data subject's consent, performance of a contract, or compliance with a legal obligation (GDPR Article 6).",
      ],
    },
    {
      heading: "4. Transfer and retention of data",
      paragraphs: [
        "We only pass on your personal data to third parties pursuant to a legal obligation or to the extent necessary for care (e.g. dental laboratory partner). We retain the data for the period prescribed by law or necessary to achieve the purpose.",
      ],
    },
    {
      heading: "5. Cookies and analytics",
      paragraphs: [
        "The website may use cookies to improve operation and the user experience. The Google Analytics service may also collect personal data — details are in Google's Privacy Policy.",
      ],
    },
    {
      heading: "6. Rights of the data subject",
      paragraphs: [
        "You are entitled to request information about the processing of your personal data, to request their rectification, erasure or restriction, and to object to processing. You may lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH).",
      ],
    },
  ],
};
