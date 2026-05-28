import { Info, ShieldCheck, Wallet } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { HEALTH_FUNDS, PRICE_CATEGORIES, type PriceCategory } from "@/lib/prices";

export const metadata = {
  title: "Árak — Dentoplant Fogászat Szeged",
  description:
    "A Dentoplant Fogászati és Implantológiai Rendelő tájékoztató árlistája — diagnosztika, dentálhigiénia, gyökérkezelés, fogpótlás, szájsebészet, implantológia és fogszabályozás. 2025. 04. 15. napjától érvényes.",
};

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Árak"
        title="Tájékoztató árlistánk"
        description="Magánrendelőnkben gyakran feltett kérdés, hogy a kezelés mennyibe fog kerülni. Az alábbiakban tájékoztató jelleggel megadjuk egy-egy fogászati beavatkozás árát — a pontos kezelési tervet és végleges ajánlatot egyedi felmérés alapján készítjük."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Árak" }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            Azt, hogy egy adott esetben pontosan milyen kezelést szükséges egy foggal elvégezni,
            csak a pácienssel történt személyes találkozást és állapotfelmérést követően tudjuk
            eldönteni. Árainkat igyekeztük úgy kialakítani, hogy a hozzánk bizalommal forduló
            valamennyi páciens megtalálja a számára megfelelő ajánlatot. A megbeszélt és kiadott
            árajánlatok <strong>30 napig érvényesek</strong>.
          </p>
          <p>
            Felhívjuk pácienseink figyelmét, hogy a máshol készült képalkotó röntgenfelvételek
            beküldése mellett csak előzetes, tájékoztató jellegű kezelési ajánlatot tudunk
            készíteni. A terv véglegesítése előtt saját rendszerünkben is készítünk pontos
            felvételeket. A rendelőnkben működő korszerű digitális röntgen és CBCT felvételezéshez
            tartozó digitális tervező rendszerek pontosabb szerkesztést tesznek lehetővé a páciens
            biztonsága érdekében.
          </p>
          <p>
            Személyes konzultációt követően egyéni kezelési tervet készítünk, ahol több
            alternatívát felsorolva lehetőséget biztosítunk arra, hogy a várható költségek
            figyelembevételével megfelelő döntést hozhasson. Fogtechnikus munkáját igénylő
            beavatkozások esetén a teljes összeg <strong>50%-át lenyomatvételkor</strong>, a
            fennmaradó összeget átadáskor szükséges megfizetni.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-brand-200/70 bg-brand-50/60 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
            <div className="text-sm text-brand-900">
              <strong className="block">Nincs infekció kontroll díj</strong>
              Rendelőnkben nem számolunk fel külön infekció kontroll díjat.
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
            <div className="text-sm text-foreground/85">
              <strong className="block text-brand-900">Érvényesség</strong>
              Az alábbi árak <strong>2025. 04. 15.</strong> napjától érvényesek. Végleges árat
              kalkulálni csak egyedi felmérés alapján áll módunkban.
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl space-y-12">
          {PRICE_CATEGORIES.map((cat) => (
            <PriceTable key={cat.title} category={cat} />
          ))}
        </div>
      </section>

      <HealthFundsSection />

      <CtaContact />
    </>
  );
}

function PriceTable({ category }: { category: PriceCategory }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm shadow-brand-900/5">
      {/* Lila szekciófejléc */}
      <div className="bg-brand-700 px-6 py-4 md:px-8">
        <h2 className="font-display text-xl font-semibold text-white md:text-2xl">
          {category.title}
        </h2>
      </div>

      {category.intro && (
        <div className="border-b border-border bg-muted/30 px-6 py-5 text-sm leading-relaxed text-foreground/80 md:px-8 md:text-[15px]">
          {category.intro.split("\n").map((para, i) => (
            <p key={i} className={i > 0 ? "mt-3" : ""}>
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Sorok — desktopon táblázat-szerű, mobilon függőlegesen tördelt */}
      <div className="divide-y divide-border">
        {category.rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col gap-1.5 px-6 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8 md:px-8 ${
              i % 2 === 1 ? "bg-muted/30" : "bg-background"
            }`}
          >
            <div
              className={`text-[15px] leading-relaxed ${
                row.highlight ? "font-semibold text-brand-900" : "text-foreground/85"
              }`}
            >
              {row.label.split("\n").map((line, idx) => (
                <span key={idx} className={idx > 0 ? "mt-0.5 block text-sm text-muted-foreground" : "block"}>
                  {line}
                </span>
              ))}
            </div>
            <div className="whitespace-pre-line text-[15px] font-semibold text-brand-800 sm:min-w-[180px] sm:text-right">
              {row.price}
            </div>
          </div>
        ))}
      </div>

      {category.note && (
        <div className="border-t border-border bg-brand-50/40 px-6 py-4 text-sm leading-relaxed text-brand-900/85 md:px-8">
          {category.note}
        </div>
      )}
    </div>
  );
}

function HealthFundsSection() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <span className="eyebrow">Egészségpénztári partnerek</span>
              <h2 className="mt-3 font-display text-2xl text-brand-900 md:text-3xl">
                Szerződött egészségbiztosító partnereink
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Az egészségpénztárak tagjaik számára különféle kedvezményeket biztosítanak. Az
                elmúlt évek során a felmerülő igények alapján alakítottuk ki az alábbi
                egészségpénztárakkal való szerződéses kapcsolatainkat, amelyek hosszú idők óta
                megbízhatóan működnek.
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {HEALTH_FUNDS.map((fund) => (
              <li
                key={fund}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground/85"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
                <span>{fund}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
