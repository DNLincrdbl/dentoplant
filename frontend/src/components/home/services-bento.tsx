import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers, Microscope } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";
import { localizeHref } from "@/lib/i18n/config";
import { TonedSection } from "./toned-section";

const tiles = [
  {
    id: "fogagy",
    href: "/szolgaltatasok/fogagybetegseg-kezelese",
    span: "md:col-span-7",
    tone: "image" as const,
    image: "/heroes/precizios-fogagykezeles-nagy-nagyitasban-dr-maraz-kinga.jpg",
    icon: null,
    hu: {
      label: "Fogágybetegség kezelése",
      title: "Korai felismerés, regeneratív kezelés",
      description:
        "A fogágybetegség nem csak az íny megbetegedése, hanem a fogakat körülvevő ínyt, csontot és a parodontális ligamentumokat együttesen érintő, kiterjedtebb gyulladás. A korai felismerés a kulcs.",
      bullets: [
        "Részletes parodontális státusz felmérés",
        "Nem-sebészi és sebészi parodontális kezelés",
        "Regeneratív és csontpótló eljárások",
      ],
      cta: "Bővebben",
    },
    en: {
      label: "Periodontal disease",
      title: "Early detection, regenerative treatment",
      description:
        "Periodontal disease is not only a gum condition, but a more extensive inflammation affecting the gum, bone and periodontal ligaments surrounding the teeth together. Early detection is the key.",
      bullets: [
        "Detailed periodontal status assessment",
        "Non-surgical and surgical periodontal treatment",
        "Regenerative and bone-grafting procedures",
      ],
      cta: "Learn more",
    },
  },
  {
    id: "fogbeultetes",
    href: "/szolgaltatasok/fogbeultetes",
    span: "md:col-span-5",
    tone: "brand" as const,
    image: null as string | null,
    icon: Layers,
    hu: {
      label: "Fogbeültetés",
      title: "Implantációs fogpótlás, kompromisszumok nélkül",
      description:
        "A fogbeültetés a hiányzó fogak pótlásának olyan módszere, melynek során a specialista fogorvos implantátumot ültet be az állcsontba. A gyógyulás és a fogpótlás elkészítését követően az elvesztett fogak szerepét tartósan átveszi.",
      bullets: [
        "Sebészeti sablonnal végzett, pontos behelyezés",
        "Egyedi, csavarozható Nobel Procera™ pótlások",
        "Csontpótlás és arcüreg emelés (sinus lift) szükség esetén",
      ],
      cta: "Bővebben",
    },
    en: {
      label: "Dental implants",
      title: "Implant-borne restoration, without compromise",
      description:
        "Dental implantation is a method of replacing missing teeth in which the specialist places an implant into the jawbone. After healing and once the restoration is complete, it permanently takes over the role of the lost teeth.",
      bullets: [
        "Precise placement with a surgical guide",
        "Custom, screw-retained Nobel Procera™ restorations",
        "Bone grafting and sinus lift where needed",
      ],
      cta: "Learn more",
    },
  },
  {
    id: "mikroszkopos",
    href: "/szolgaltatasok/mikroszkopos-fogaszat",
    span: "md:col-span-5",
    tone: "muted" as const,
    image: null as string | null,
    icon: Microscope,
    hu: {
      label: "Mikroszkópos kezelések",
      title: "A saját fog megmentése a cél",
      description:
        "A fogászatban az utóbbi évtized tendenciája jól mutatja, hogy a pácienseink számára a saját fog megmentése egyre fontosabb cél. A mikroszkópos kezelések a legapróbb részleteknél is támogatnak minket.",
      bullets: [
        "Mikroszkópos gyökérkezelés",
        "Esztétikus, élethű fogtömések",
        "Komplex, fogmegtartó kezelések",
      ],
      cta: "Bővebben",
    },
    en: {
      label: "Microscope treatments",
      title: "Saving your own tooth is the goal",
      description:
        "The trend of the past decade in dentistry clearly shows that saving one's own tooth is an increasingly important goal for our patients. Microscope-assisted treatments support us down to the finest details.",
      bullets: [
        "Microscope-assisted root canal treatment",
        "Aesthetic, lifelike fillings",
        "Complex, tooth-preserving treatments",
      ],
      cta: "Learn more",
    },
  },
  {
    id: "fogszabalyozas",
    href: "/szolgaltatasok/fogszabalyozas",
    span: "md:col-span-7",
    tone: "image" as const,
    image: "/heroes/20-dr-vadasz-anna-esztetikai-kezeles-kozben-dentoplant-fogaszat.jpg",
    icon: null,
    hu: {
      label: "Professzionális fogszabályozás",
      title: "Életkortól függetlenül, személyre szabva",
      description:
        "Neves, újszegedi rendelőnkben életkortól függetlenül, személyre szabott megoldást biztosítunk a makulátlan, rendezett mosoly elérésére.",
      bullets: [
        "Esztétikus, kerámia és láthatatlan fogszabályozók",
        "Felnőtt korban is biztonsággal végezhető",
        "Komplex, fogpótlással kombinált tervezés",
      ],
      cta: "Bővebben",
    },
    en: {
      label: "Professional orthodontics",
      title: "Personalised, at any age",
      description:
        "At our respected clinic in Újszeged we provide personalised solutions for a flawless, well-ordered smile, regardless of age.",
      bullets: [
        "Aesthetic, ceramic and invisible braces",
        "Safe to perform in adulthood too",
        "Complex planning combined with restorations",
      ],
      cta: "Learn more",
    },
  },
];

export async function ServicesBento() {
  const locale = await getLocale();
  const en = locale === "en";
  const l = (href: string) => localizeHref(href, locale);

  const t = {
    eyebrow: en ? "Our services" : "Szolgáltatásaink",
    title: en ? "Comprehensive dental care in Újszeged" : "Komplex fogászati ellátás Újszegeden",
    lead: en
      ? "You will find the Dentoplant Dental and Implantology Clinic on the classic promenade of Fő fasor in Újszeged. Our colleagues work in a kind, cheerful community that loves its work."
      : "A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden a Fő fasor klasszikus sétányán találja. Munkatársaink kedves, életvidám, munkájukat szerető közösségben dolgoznak.",
  };

  return (
    <TonedSection className="py-28 md:py-36">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{t.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-base text-muted-foreground">{t.lead}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
          {tiles.map((tile) => {
            const c = en ? tile.en : tile.hu;
            const Icon = tile.icon;

            return (
              <Link
                key={tile.id}
                href={l(tile.href)}
                className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-500 ease-out hover:-translate-y-1 md:min-h-[300px] md:p-8 ${tile.span} ${
                  tile.tone === "brand"
                    ? "bg-brand-100/90 text-brand-900"
                    : "bg-background text-brand-900 shadow-sm shadow-brand-900/5 ring-1 ring-border"
                }`}
              >
                {tile.image && (
                  <>
                    <Image
                      src={tile.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 58vw"
                      quality={80}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/35"
                    />
                  </>
                )}

                <div className="relative z-[1] flex h-full flex-col justify-between gap-6">
                  <div>
                    {Icon && (
                      <span
                        className={`mb-5 grid h-11 w-11 place-items-center rounded-full ${
                          tile.tone === "brand"
                            ? "bg-brand-600 text-white"
                            : "bg-brand-100 text-brand-700"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    )}
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600/80">
                      {c.label}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-brand-900 md:text-[1.7rem] md:leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-900">
                    {c.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </TonedSection>
  );
}
