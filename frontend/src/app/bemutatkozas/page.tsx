import Link from "next/link";
import { Award, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";

export const metadata = {
  title: "Bemutatkozás — Dentoplant Fogászat Szeged",
  description:
    "A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden, a Fő fasor klasszikus sétányán találja. A sikeres fogászati kezelés csapatmunka, középpontjában a pácienssel.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Megelőzés és szájhigiénia",
    body: "A megelőzés, a szájhigiéniai oktatás és a fogágybetegségek korai felismerése áll a munkánk alapjánál.",
  },
  {
    icon: HeartHandshake,
    title: "Regeneratív fogágy-stabilizáció",
    body: "A fogágybetegségek regeneratív módszerekkel történő hosszú távú stabilizálása.",
  },
  {
    icon: Sparkles,
    title: "Tartós implantációs fogpótlás",
    body: "Hosszú távon sikeres implantációs fogpótlások kivitelezése és gondozása.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Bemutatkozás"
        title="Csapatmunka, középpontjában a pácienssel"
        description="A Dentoplant Fogászati és Implantológiai Rendelőt Újszegeden, a Fő fasor klasszikus sétányán találja. Munkatársaink kedves, életvidám, munkájukat szerető közösségben dolgoznak."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Bemutatkozás" }]}
      />

      {/* Bevezető */}
      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
          <p>
            A sikeres fogászati kezelés csapatmunka, melynek középpontjában a páciens áll —
            számunkra fontos, hogy rendelőnkben kellemes környezetben érezze magát.
          </p>
          <p>
            Fontosnak tartjuk a megelőzést, a szájhigiénia oktatását, a fogágybetegségek korai
            felismerését és kezelését, a fogágy regeneratív módszerekkel történő stabilizálását,
            a hosszú távon sikeres implantációs fogpótlások kivitelezését és a gondozását. Mindezen
            értékrend alapján állítottuk össze színvonalas fogorvos és dentálhigiénikus
            csapatunkat, így a fogászat több szakterülete is elérhető rendelőnkben.
          </p>
        </div>
      </section>

      {/* Három pillér */}
      <section className="border-y border-border bg-muted/40">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Értékrendünk</span>
            <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-4xl">
              Három pilléren áll a munkánk
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-brand-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speciális esetek + szakképzés */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <div className="flex items-center gap-2 text-brand-700">
              <Users className="h-5 w-5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Szakmai együttműködés
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl text-brand-900 md:text-3xl">
              Speciális esetek, emelt szintű rekonstrukció
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Fogorvos kollégákkal való együttműködés során rendszeresen irányítanak rendelőnkbe
              pácienseket speciális esetek megoldására. Mindezen páciensek gyógyítása gyakran
              emelt szintű rekonstrukciós stratégiákat igényel, amelyek külön kihívást jelentenek
              számunkra.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-700 p-8 text-white shadow-lg shadow-brand-900/20 md:p-10">
            <div className="flex items-center gap-2 text-white/80">
              <GraduationCap className="h-5 w-5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Szakképző hely
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl md:text-3xl">
              Részt veszünk a fogorvosok szakképzésében
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Rendelőnk életének része a fogorvosok szakképzésében való részvétel,{" "}
              <strong className="font-semibold">Dr. Maráz Kinga</strong> tutor szakmai
              irányításával.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                <span>
                  <strong className="font-semibold">2006–2020</strong> — a Szegedi
                  Tudományegyetem Fogorvostudományi Karának akkreditált külső szakképző helye a
                  szakorvosjelöltek oktatásában.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                <span>
                  <strong className="font-semibold">2023-tól</strong> — a Szegedi Tudományegyetem
                  Szent-Györgyi Albert Orvostudományi Kar dentoalveoláris sebész szakfogorvos
                  képzésének külső gyakorlati helye, ahol rezidens kollégákat készítünk fel a
                  szakvizsgára.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nobel Biocare elismerés */}
      <section className="border-y border-border bg-muted/40">
        <div className="container-page py-16 md:py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand-200/70 bg-background p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-brand-700 text-white shadow-md shadow-brand-900/20">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <span className="eyebrow">Nemzetközi elismerés</span>
                <h2 className="mt-3 font-display text-2xl text-brand-900 md:text-3xl">
                  Nobel Biocare Esthetic Alliance mentorközpont
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  <strong>2014-től</strong> a Nobel Biocare Esthetic Alliance mentorközpontja
                  elismerésben részesült rendelőnk. Ennek keretében a fogászati implantáció iránt
                  érdeklődő, vagy már gyakorló szakorvos kollégák tudásának bővítéséhez nyújtunk
                  tényleges elméleti és gyakorlati hátteret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aláírás */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-2xl leading-relaxed text-brand-900 md:text-3xl">
            „Naprakész szakmai ismeretek, alapos felkészültség, sok éves klinikai tapasztalat és a
            leghatékonyabb kezelési módszerek alkalmazása munkánk értékmérője. A minőséget, az
            időtálló értéket képviseljük."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <Link
              href="/munkatars/dr-maraz-kinga"
              className="text-sm font-semibold text-brand-700 hover:text-brand-600"
            >
              Dr. Maráz Kinga →
            </Link>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
