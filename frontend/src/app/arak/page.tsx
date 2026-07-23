import { Info, ShieldCheck, Wallet } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { CtaContact } from "@/components/home/cta-contact";
import { HEALTH_FUNDS, getPriceCategories, type PriceCategory } from "@/lib/prices";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Prices — Dentoplant Dental Clinic Szeged" : "Árak — Dentoplant Fogászat Szeged",
    description: en
      ? "The indicative price list of the Dentoplant Dental and Implantology Clinic — diagnostics, dental hygiene, root canal treatment, prosthetics, oral surgery, implantology and orthodontics. Valid from 15 April 2025."
      : "A Dentoplant Fogászati és Implantológiai Rendelő tájékoztató árlistája — diagnosztika, dentálhigiénia, gyökérkezelés, fogpótlás, szájsebészet, implantológia és fogszabályozás. 2025. 04. 15. napjától érvényes.",
  };
}

export default async function PricesPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  const categories = getPriceCategories(locale);
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
        image={PAGE_HEROES.arak}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-4xl space-y-6 text-base leading-relaxed text-foreground/85">
          <p>
            {c.intro1a}
            <strong>{c.intro1b}</strong>
            {c.intro1c}
          </p>
          <p>{c.intro2}</p>
          <p>
            {c.intro3a}
            <strong>{c.intro3b}</strong>
            {c.intro3c}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-brand-200/70 bg-brand-50/60 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
            <div className="text-sm text-brand-900">
              <strong className="block">{c.noFeeTitle}</strong>
              {c.noFeeBody}
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
            <div className="text-sm text-foreground/85">
              <strong className="block text-brand-900">{c.validityTitle}</strong>
              {c.validityBodyA}
              <strong>2025. 04. 15.</strong>
              {c.validityBodyB}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl space-y-12">
          {categories.map((cat) => (
            <PriceTable key={cat.title} category={cat} />
          ))}
        </div>
      </section>

      <HealthFundsSection en={en} />

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

function HealthFundsSection({ en }: { en: boolean }) {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <span className="eyebrow">{en ? "Health fund partners" : "Egészségpénztári partnerek"}</span>
              <h2 className="mt-3 font-display text-2xl text-brand-900 md:text-3xl">
                {en ? "Our contracted health insurance partners" : "Szerződött egészségbiztosító partnereink"}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {en
                  ? "Health funds provide various discounts for their members. Over the past years we have established our contractual relationships with the health funds below based on the needs that arose, and they have been operating reliably for a long time."
                  : "Az egészségpénztárak tagjaik számára különféle kedvezményeket biztosítanak. Az elmúlt évek során a felmerülő igények alapján alakítottuk ki az alábbi egészségpénztárakkal való szerződéses kapcsolatainkat, amelyek hosszú idők óta megbízhatóan működnek."}
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

const HU = {
  eyebrow: "Árak",
  home: "Főoldal",
  title: "Tájékoztató árlistánk",
  heroDesc:
    "Magánrendelőnkben gyakran feltett kérdés, hogy a kezelés mennyibe fog kerülni. Az alábbiakban tájékoztató jelleggel megadjuk egy-egy fogászati beavatkozás árát — a pontos kezelési tervet és végleges ajánlatot egyedi felmérés alapján készítjük.",
  intro1a:
    "Azt, hogy egy adott esetben pontosan milyen kezelést szükséges egy foggal elvégezni, csak a pácienssel történt személyes találkozást és állapotfelmérést követően tudjuk eldönteni. Árainkat igyekeztük úgy kialakítani, hogy a hozzánk bizalommal forduló valamennyi páciens megtalálja a számára megfelelő ajánlatot. A megbeszélt és kiadott árajánlatok ",
  intro1b: "30 napig érvényesek",
  intro1c: ".",
  intro2:
    "Felhívjuk pácienseink figyelmét, hogy a máshol készült képalkotó röntgenfelvételek beküldése mellett csak előzetes, tájékoztató jellegű kezelési ajánlatot tudunk készíteni. A terv véglegesítése előtt saját rendszerünkben is készítünk pontos felvételeket. A rendelőnkben működő korszerű digitális röntgen és CBCT felvételezéshez tartozó digitális tervező rendszerek pontosabb szerkesztést tesznek lehetővé a páciens biztonsága érdekében.",
  intro3a:
    "Személyes konzultációt követően egyéni kezelési tervet készítünk, ahol több alternatívát felsorolva lehetőséget biztosítunk arra, hogy a várható költségek figyelembevételével megfelelő döntést hozhasson. Fogtechnikus munkáját igénylő beavatkozások esetén a teljes összeg ",
  intro3b: "50%-át lenyomatvételkor",
  intro3c: ", a fennmaradó összeget átadáskor szükséges megfizetni.",
  noFeeTitle: "Nincs infekció kontroll díj",
  noFeeBody: "Rendelőnkben nem számolunk fel külön infekció kontroll díjat.",
  validityTitle: "Érvényesség",
  validityBodyA: "Az alábbi árak ",
  validityBodyB: " napjától érvényesek. Végleges árat kalkulálni csak egyedi felmérés alapján áll módunkban.",
};

const EN = {
  eyebrow: "Prices",
  home: "Home",
  title: "Our indicative price list",
  heroDesc:
    "A frequently asked question in our private clinic is how much the treatment will cost. Below we give the price of individual dental procedures for guidance — the exact treatment plan and final offer are prepared based on an individual assessment.",
  intro1a:
    "We can only decide exactly what treatment a tooth needs in a given case after a personal meeting and status assessment with the patient. We have tried to set our prices so that every patient who turns to us with trust finds the offer that suits them. The agreed and issued quotations are ",
  intro1b: "valid for 30 days",
  intro1c: ".",
  intro2:
    "We draw our patients' attention to the fact that, alongside submitting imaging X-rays taken elsewhere, we can only prepare a preliminary, indicative treatment offer. Before finalising the plan we also take precise images in our own system. The digital planning systems belonging to the modern digital X-ray and CBCT imaging operating in our clinic enable more precise editing for the patient's safety.",
  intro3a:
    "Following a personal consultation we prepare an individual treatment plan, in which — listing several alternatives — we provide the opportunity to make the right decision taking the expected costs into account. For procedures requiring a dental technician's work, ",
  intro3b: "50% of the total amount must be paid at the impression",
  intro3c: ", and the remaining amount on delivery.",
  noFeeTitle: "No infection control fee",
  noFeeBody: "We do not charge a separate infection control fee in our clinic.",
  validityTitle: "Validity",
  validityBodyA: "The prices below are valid from ",
  validityBodyB: ". We can only calculate a final price based on an individual assessment.",
};
