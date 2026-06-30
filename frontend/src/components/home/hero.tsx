"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-data";

/**
 * Modul-szintű flag: teljes oldalbetöltéskor (frissítés/megnyitás) a modul
 * újra kiértékelődik, így false lesz → lefut a belépő animáció.
 * Kliensoldali navigációnál a modul a memóriában marad → már true, nem animál újra.
 */
let heroHasAnimated = false;

const REVEAL = "transition-all duration-[900ms] ease-out will-change-transform";

export function Hero() {
  const [show, setShow] = useState(() => heroHasAnimated);

  useEffect(() => {
    if (heroHasAnimated) return;
    heroHasAnimated = true;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setShow(true);
      return;
    }
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Belépő-állapotok irány szerint — a végére minden a helyére áll össze.
  const rc = (hidden: string) =>
    `${REVEAL} ${show ? "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0" : hidden}`;
  const delay = (ms: number) => ({ transitionDelay: show ? `${ms}ms` : "0ms" });

  return (
    <section className="relative isolate flex items-center overflow-hidden bg-white lg:min-h-[calc(100svh-5rem)]">
      {/* Lágy fény-haló a fog mögött — mélységet ad a fehér háttérnek */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78vmin] w-[78vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(115,48,138,0.10),transparent_62%)]"
      />

      {/* Tartalom — kiegyensúlyozott triptichon: bal szöveg · fog · jobb szöveg */}
      <div className="container-page relative z-10 grid w-full items-center gap-8 pt-12 pb-[22vw] sm:pb-[18vw] md:pt-16 md:pb-[15vw] lg:grid-cols-[1.1fr_minmax(0,400px)_1fr] lg:gap-8 lg:py-0">
        {/* Bal — főcím + bevezető */}
        <div className="text-center lg:order-1 lg:text-left">
          <h1
            style={delay(150)}
            className={`font-sans text-4xl font-extrabold leading-[1.03] tracking-tight text-brand-900 sm:text-5xl xl:text-6xl ${rc("opacity-0 -translate-x-10")}`}
          >
            A mosolyod többet
            <br className="hidden sm:block" /> érdemel, mint egy
            <br className="hidden sm:block" /> egyszerű kezelést.
          </h1>
          <p
            style={delay(300)}
            className={`mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground lg:mx-0 ${rc("opacity-0 -translate-x-8")}`}
          >
            Prémium fogászati és implantológiai rendelő Szegeden, ahol a precizitás,
            a naprakész szaktudás és a páciensek tisztelete találkozik.
          </p>
        </div>

        {/* Közép — a fog, in-flow, nagyban (lg-n felskálázva) */}
        <div
          className={`relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:order-2 lg:max-w-none lg:scale-[1.12] ${REVEAL} ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: show ? "100ms" : "0ms" }}
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/herologo.png"
              alt="Dentoplant fogászati és implantológiai rendelő – stilizált fog ikon"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 500px"
              className="object-contain drop-shadow-[0_35px_70px_rgba(115,48,138,0.28)]"
            />
          </div>
        </div>

        {/* Jobb — másodlagos cím + CTA */}
        <div className="text-center lg:order-3 lg:text-right">
          <h2
            style={delay(450)}
            className={`font-sans text-3xl font-extrabold leading-[1.05] tracking-tight text-brand-700 sm:text-4xl xl:text-5xl ${rc("opacity-0 translate-x-10")}`}
          >
            Prémium ellátás,
            <br className="hidden sm:block" /> személyre szabva.
          </h2>
          <div
            style={delay(600)}
            className={`mt-7 flex justify-center lg:justify-end ${rc("opacity-0 translate-x-8")}`}
          >
            <Link
              href="/kapcsolat"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-600 py-1.5 pl-1.5 pr-6 text-white shadow-lg shadow-brand-900/15 transition-colors hover:bg-brand-700"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-transform group-hover:scale-105">
                <CalendarDays className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">Időpontfoglalás</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Nagy DENTOPLANT felirat — faltól falig, az oldal alján, a fog mögött */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none text-brand-500/[0.09] transition-all duration-[1100ms] ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: show ? "750ms" : "0ms" }}
      >
        <svg viewBox="0 0 1200 150" preserveAspectRatio="xMidYMax meet" className="block w-full">
          <text
            x="600"
            y="145"
            textAnchor="middle"
            textLength="1190"
            lengthAdjust="spacingAndGlyphs"
            className="fill-current font-sans"
            style={{ fontSize: "150px", fontWeight: 800 }}
          >
            DENTOPLANT
          </text>
        </svg>
      </div>
    </section>
  );
}
