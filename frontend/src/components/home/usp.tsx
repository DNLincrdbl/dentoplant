import { Award, Microscope, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "20+ év tapasztalat",
    desc: "Évtizedes klinikai gyakorlat, kiszámítható és megbízható fogászati ellátás.",
  },
  {
    icon: Microscope,
    title: "Tudományos alapok",
    desc: "Naprakész szakmai ismereteken és bizonyítékokon alapuló kezelési módszerek.",
  },
  {
    icon: ShieldCheck,
    title: "Vezető szakorvosok",
    desc: "Nemzetközi képzésekkel rendelkező csapat, akik a páciens kényelmét tartják szem előtt.",
  },
  {
    icon: Sparkles,
    title: "Minimálisan invazív",
    desc: "Korszerű eszközökkel és technikákkal kíméletes kezelés, gyorsabb gyógyulás.",
  },
];

export function Usp() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <span className="eyebrow">Miért fontos</span>
          <h2 className="mt-5 font-display text-3xl leading-tight text-brand-900 md:text-5xl">
            A jó szájhigiénia az általános jólléted alapja.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Számunkra a fog több, mint egy fog: a teljes egészséged része. Megközelítésünkben
            megbízható kezelések, hosszú távú megelőzés és nyugodt, kényelmes páciensélmény találkozik.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-brand-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
