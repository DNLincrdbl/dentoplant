import { BulletList, Callout, Lead, Section } from "../ui";

export default function EsztetikaiFogaszatContent() {
  return (
    <div className="space-y-12">
      <Section title="Smile Makeover — a mosoly esztétikája">
        <Lead>
          Az esztétikai fogászat napjainkra már nem egy esztétikus tömés készítéséről szól.
        </Lead>
        <p>
          Az esztétikai fogászat egy igényes, összetett szemlélet, mely több szakterület
          együttműködésével foglalja magába a szép fogszínt, az ideális és archoz illő fogformát,
          a fémmentes fogpótlásokat és a tökéletes illesztéseket. A fehér fogak esztétikáját
          összehangoljuk az íny lefutásának korrekciójával — a mosoly esztétikáján mindezek
          harmóniáját értjük.
        </p>
        <p>
          Az esztétikai fogászat egy komprehenzív szemlélet, ennek megfelelően a kezelés lépéseit
          és elemeit egyénre szabva alakítjuk ki. <strong>Smile Makeover</strong> — az esztétikai
          fogászat segítségével a Dentoplant Fogászati Rendelőben mosolya megújul.
        </p>
      </Section>

      <Section title="Esztétikai fogászati beavatkozások a Dentoplantban">
        <BulletList
          items={[
            "Fotózás és mosolytervezés",
            "Fogszín és fogforma feltérképezése",
            "Mock-up készítése",
            "Szájhigiéniai kezelések, Prophy Mate „sópolírozás”",
            "Fogfehérítés",
            "Magas minőségű esztétikus fotopolimerizációs tömések",
            "Kerámia héjak",
            "Cirkónium koronák, hidak",
            "Magas esztétikájú Procera® koronák, hidak",
            "Inlay — nagy precizitású esztétikus tömések",
            "Inlay préskerámiából",
            "Procera® Nobel® teljes kerámia inlay",
            "Teljes kerámia felépítmények",
            "Ínyplasztikák",
            "Finishing — összetett befejező fázis",
          ]}
        />
      </Section>

      <Callout
        title="Tervezzük meg együtt az új mosolyát"
        body="A digitális mosolytervezéssel (DSD) már a kezelés elején bemutatható a várható végeredmény — kockázat nélkül, lépésről lépésre."
        ctaLabel="Konzultációt kérek"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
