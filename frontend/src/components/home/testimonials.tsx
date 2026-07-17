import { Star } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";

const testimonials = [
  {
    name: "Anna K.",
    hu: "Az első hívástól az utolsó kontrollig minden gördülékeny volt. Profi, kedves csapat, akik figyelnek a páciens kényelmére.",
    en: "From the first call to the last check-up, everything was smooth. A professional, kind team who care about patient comfort.",
  },
  {
    name: "Botond P.",
    hu: "Évek óta visszajárok, és mindig kiszámítható, gondoskodó ellátást kapok. Nem mennék máshova.",
    en: "I have been coming back for years and always receive predictable, caring treatment. I wouldn't go anywhere else.",
  },
  {
    name: "Eszter M.",
    hu: "A mosolyom most jobban néz ki, mint valaha! Nagyon elégedett vagyok az eredménnyel és a törődéssel.",
    en: "My smile looks better than ever! I am very happy with the result and the care.",
  },
  {
    name: "Tamás L.",
    hu: "A gyerekeim szeretnek ide járni. A személyzet hihetetlenül kedves és játékossá teszik a fogászatot.",
    en: "My children love coming here. The staff are incredibly kind and make dentistry playful.",
  },
];

export async function Testimonials() {
  const locale = await getLocale();
  const en = locale === "en";
  const t = {
    eyebrow: en ? "What patients say" : "Páciensek mondják",
    title: en ? "Decades of care, thousands of smiles." : "Évtizedes gondoskodás, ezernyi mosoly.",
    lead: en
      ? "Generations trust us: predictable, compassionate dental care with consistent results and a focus on long-term health."
      : "Generációk bíznak ránk: kiszámítható, együttérző fogászati ellátás következetes eredményekkel és a hosszú távú egészség fókuszában.",
    ratingTitle: en ? "Excellent rating" : "Kiváló értékelés",
    ratingSub: en ? "Based on our patients' feedback." : "Pácienseink visszajelzései alapján.",
  };
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">{t.lead}</p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-muted p-5">
            <div>
              <div className="font-display text-4xl text-brand-700">4.9</div>
              <div className="flex items-center gap-0.5 text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">{t.ratingTitle}</strong>
              <br />
              {t.ratingSub}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                „{en ? item.en : item.hu}”
              </blockquote>
              <figcaption className="mt-4 font-semibold text-brand-800">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
