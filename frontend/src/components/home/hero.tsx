import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { SITE } from "@/lib/site-data";

const pills = [
  { icon: ShieldCheck, label: "Naprakész szakmai ismeretek" },
  { icon: Stethoscope, label: "Sok éves klinikai tapasztalat" },
  { icon: Sparkles, label: "Leghatékonyabb módszerek" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-background to-background pt-12 md:pt-20">
      <div className="container-page grid gap-12 pb-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
        <div>
          <span className="eyebrow">Dentoplant Szeged</span>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-brand-900 md:text-6xl lg:text-[68px]">
            Fogászati és <em className="not-italic text-brand-600">implantológiai</em> rendelő, a mosolyodért.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fogászati rendelőnkbe előzetes időpont egyeztetés alapján fogadjuk pácienseinket.
            Bejelentkezhet telefonon, a kapcsolat menüpont alatti felületen, vagy emailen.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/kapcsolat" className="btn-primary">
              Időpontfoglalás <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-brand-300">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Phone className="h-4 w-4" />
              </span>
              {SITE.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {pills.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground/80 backdrop-blur"
              >
                <p.icon className="h-4 w-4 text-brand-600" />
                {p.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-200 via-brand-300 to-brand-600 shadow-2xl shadow-brand-900/20">
            {/* Placeholder grafika; cseréld le valós fotóra a /public/images/hero.jpg-vel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_50%)]" />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">Páciens élmény</div>
                <p className="mt-2 max-w-xs font-display text-lg leading-snug text-brand-900">
                  „Pontosság, megbízhatóság és a páciensek tisztelete – ezt nyújtjuk minden találkozáskor.”
                </p>
                <div className="mt-3 text-sm text-muted-foreground">— Dr. Maráz Kinga</div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 hidden rounded-2xl border border-border bg-background p-4 shadow-xl md:block">
            <div className="text-3xl font-display text-brand-700">20+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">év tapasztalat</div>
          </div>
          <div className="absolute -right-4 bottom-12 hidden rounded-2xl border border-border bg-background p-4 shadow-xl md:block">
            <div className="text-3xl font-display text-brand-700">4.9★</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">páciens értékelés</div>
          </div>
        </div>
      </div>
    </section>
  );
}
