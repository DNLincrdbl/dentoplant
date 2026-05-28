import { Callout, InfoPanel, Lead, ProcessSteps, Section } from "../ui";

export default function ImplantatumContent() {
  return (
    <div className="space-y-12">
      <Section title="Kiemelt szakmai színvonal, Nobel® minőség">
        <Lead>
          A Dentoplant Fogászati Rendelőben Szegeden kiemelten magas szakmai színvonalú
          implantológiai ellátással találkozhat.
        </Lead>
        <p>
          Mindezt emelt szintű külföldi képzéseken elsajátított korszerű módszerek és a magas
          minőségű <strong>Nobel®</strong> implantátumok alkalmazása teszi lehetővé. Rendelőnkben
          Nobel® implantátumot használunk, mert <em>a minőség a legjobb döntés és ez a választás
          egy életre szól</em>.
        </p>
        <p>
          A Nobel Biocare a világ vezető implantátumokat gyártó és fejlesztő cége. Implantátum
          típusok széles palettáját kínálja az egy fog hiánytól a teljes fogatlanság megoldásáig.
          Rendelőnk számára mégis a legfontosabb az, hogy a Nobel® cég eljárásai a legelső
          tapasztalatoktól tudományos bizonyítékokkal rendelkeznek. Nevükhöz kapcsolódik, hogy már
          az 1950-es évektől érdeklődéssel fordultak azon tudományos kísérletek irányába, melyek
          során a csontba ültetett titán felszín kölcsönhatását vizsgálták — vagyis felfedezték az
          osszeointegrációt.
        </p>
      </Section>

      <Section title="Mérföldkövek a Nobel® implantátumok fejlesztésében">
        <ProcessSteps
          steps={[
            {
              title: "2000 — TiUnite implantátum felület",
              body: "A Nobel Biocare bevezette a TiUnite felületet, amely támogatja az osszeointegrációs folyamatokat és felgyorsítja a csontosodást. Az összes implantátum típus ezzel a felületi struktúrával kerül forgalomba.",
            },
            {
              title: "2008 — Nobel Active®",
              body: "A Nobel Active® implantátum piacra kerülése. Az új implantátum forma lehetőséget teremt a gyengébb csontminőségű esetek biztonságosabb megoldásához.",
            },
          ]}
        />
      </Section>

      <InfoPanel title="Tudományos háttér">
        <p>
          A Nobel Biocare implantátumokra vonatkozó klinikai vizsgálatok eredményei és a kapcsolódó
          tudományos publikációk megtekinthetők a gyártó hivatalos oldalán:{" "}
          <a
            className="font-semibold text-brand-700 underline-offset-2 hover:underline"
            href="https://www.nobelbiocare.com/en/resource-library/scientific-evidence"
            target="_blank"
            rel="noreferrer"
          >
            nobelbiocare.com
          </a>
          .
        </p>
      </InfoPanel>

      <Callout
        title="Egyetlen foghiánytól a teljes szájrekonstrukcióig"
        body="Egy alapos vizsgálat és 3D CBCT diagnosztika alapján személyre szabott implantációs tervet készítünk Önnek. A tervezést követően lépésről lépésre haladunk együtt a végeredményig."
        ctaLabel="Konzultációt kérek"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
