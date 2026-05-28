import { BulletList, InfoPanel, Lead, ProcessSteps, Section } from "../ui";

export default function DsdContent() {
  const steps = [
    {
      title: "Standardizált fotódokumentáció",
      body: "Részletes fotók és videók készítése előre meghatározott protokoll szerint, amelyek a digitális tervezés alapját képezik.",
    },
    {
      title: "Importálás a DSD szoftverbe",
      body: "A felvételeket a Digital Smile Design szoftverbe töltjük, ahol a páciens arckaraktere és mosolyvonala együtt elemezhető.",
    },
    {
      title: "Digitális mosolyelemzés",
      body: "Részletes 2D és 3D elemzés: arcközépvonal, mosolyvonal, fogarányok és a meglévő esztétikai adottságok.",
    },
    {
      title: "Mosolytervezés",
      body: "A személyre szabott mosolyterv elkészítése a kezelőorvossal együttműködve.",
    },
    {
      title: "Mock-up bemutatás",
      body: "A tervezett eredmény előzetes bemutatása a páciens szájában, közvetlen visszajelzés céljából.",
    },
    {
      title: "Végleges kivitelezés",
      body: "A jóváhagyott terv alapján készülnek el az esztétikus fogpótlások.",
    },
    {
      title: "Dokumentáció",
      body: "Az elkészült mosoly visszakereshetően dokumentálásra kerül a hosszú távú gondozás érdekében.",
    },
  ];

  return (
    <div className="space-y-12">
      <Section title="Mi az a DSD?">
        <Lead>
          A Dentoplant Fogászati Rendelőben a frontfogakra készülő fogpótlásokat és a teljes
          szájrekonstrukciókat az esztétikai fogászat korszerű irányelveit követve, digitális
          mosolytervezéssel végezzük.
        </Lead>
        <p>
          A digitális mosolytervezés (Digital Smile Design, DSD) segítségével már a kezelés elején
          meg tudjuk jeleníteni a várható végeredményt anélkül, hogy azt a valóságban kiviteleztük
          volna — így a páciens nem vállal semmilyen kockázatot. A személyre szabott esztétikus
          mosoly a kezelőorvossal együttműködve kerül megtervezésre egy speciális fogászati tervező
          szoftver segítségével, amely figyelembe veszi az arc karakterét, a mosolyvonalat és az
          egyéni esztétikai igényeket.
        </p>
      </Section>

      <Section title="A folyamat lépései">
        <ProcessSteps steps={steps} />
      </Section>

      <InfoPanel title="Szkennelés Medit i700 intraorális szkennerrel">
        <p>
          A digitális lenyomatvételt korszerű, érintésmentes intraorális szkennerrel végezzük, így
          a hagyományos lenyomatanyagok kellemetlen érzése nélkül készíthetünk pontos 3D modellt a
          fogazatáról. A szkennelés eredménye azonnal feldolgozható a digitális tervezéshez.
        </p>
      </InfoPanel>

      <Section title="Kinek javasoljuk?">
        <BulletList
          items={[
            "Esztétikailag igényes frontfogi pótlásra vágyóknak",
            "Komplex szájrekonstrukció előtt álló pácienseknek",
            "Akik fontosnak tartják a kockázatmentes előzetes bemutatást",
            "Akik szeretnék előre látni a végeredményt",
          ]}
        />
      </Section>
    </div>
  );
}
