import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Első konzultáció",
    desc: "Részletes kivizsgálás és konzultáció, hogy megértsük az igényeit és elképzeléseit.",
  },
  {
    n: "02",
    title: "Személyre szabott terv",
    desc: "Az állapota és céljai alapján kidolgozott, átlátható kezelési terv.",
  },
  {
    n: "03",
    title: "Kíméletes kezelés",
    desc: "Modern eszközökkel, minimálisan invazív technikákkal végrehajtott beavatkozások.",
  },
  {
    n: "04",
    title: "Gondozás",
    desc: "Rendszeres kontroll és utánkövetés, hogy mosolya hosszú távon megmaradjon.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(167,109,187,0.45),transparent_55%)]" />
      <div className="container-page relative">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-end">
          <div>
            <span className="eyebrow !text-brand-200">A folyamat</span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl">
              A szép mosolyt érdemes megőrizni.
            </h2>
            <p className="mt-4 max-w-md text-base text-brand-100/80">
              A konzultációtól a folyamatos gondozásig minden lépésben kényelem, tisztaság és
              szakértői figyelem kíséri Önt.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link href="/kapcsolat" className="btn-primary !bg-white !text-brand-700 hover:!bg-brand-50">
              Időpontfoglalás <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
            >
              <div className="font-display text-4xl text-brand-200">{s.n}</div>
              <h3 className="mt-4 font-display text-xl text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
