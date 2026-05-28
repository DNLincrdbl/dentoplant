import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna K.",
    quote:
      "Az első hívástól az utolsó kontrollig minden gördülékeny volt. Profi, kedves csapat, akik figyelnek a páciens kényelmére.",
  },
  {
    name: "Botond P.",
    quote:
      "Évek óta visszajárok, és mindig kiszámítható, gondoskodó ellátást kapok. Nem mennék máshova.",
  },
  {
    name: "Eszter M.",
    quote:
      "A mosolyom most jobban néz ki, mint valaha! Nagyon elégedett vagyok az eredménnyel és a törődéssel.",
  },
  {
    name: "Tamás L.",
    quote:
      "A gyerekeim szeretnek ide járni. A személyzet hihetetlenül kedves és játékossá teszik a fogászatot.",
  },
];

export function Testimonials() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">Páciensek mondják</span>
          <h2 className="mt-5 font-display text-3xl text-brand-900 md:text-5xl">
            Évtizedes gondoskodás, ezernyi mosoly.
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            Generációk bíznak ránk: kiszámítható, együttérző fogászati ellátás következetes
            eredményekkel és a hosszú távú egészség fókuszában.
          </p>
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
              <strong className="text-foreground">Kiváló értékelés</strong>
              <br />
              Pácienseink visszajelzései alapján.
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                „{t.quote}”
              </blockquote>
              <figcaption className="mt-4 font-semibold text-brand-800">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
