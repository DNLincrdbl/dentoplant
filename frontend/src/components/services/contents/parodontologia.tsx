import { BulletList, Callout, CardGrid, Lead, NumberedList, Section, SubSection } from "../ui";

export default function ParodontologiaContent() {
  return (
    <div className="space-y-12">
      <Section title="Mi a parodontológia?">
        <Lead>
          A parodoncium (fogágy) betegségeivel és kezelésével foglalkozó önálló szakterület a
          fogászaton belül.
        </Lead>
        <p>
          A parodontológia kezelési lehetőséget biztosít az egyszerű ínygyulladás megoldásától a
          tartószövetek sorvadása miatt mozgathatóvá váló reménytelen fogak megtartásáig.
        </p>
        <p>
          Az ínygyulladás (gingivitis) és a fogágygyulladás (parodontitis) legfőbb oka a dentális
          plakk (lepedék), amihez több egyéb külső és szervezeti rizikótényező társulhat. A
          parodontológus feladata elsősorban a gyulladás és az azzal együtt járó visszahúzódás
          megszüntetése, valamint az elpusztult parodontális szövetek korrekciója és
          regenerációjának elősegítése.
        </p>
      </Section>

      <Section title="A fogkő, mint legfőbb gyulladásfenntartó tényező">
        <p>
          A legszembetűnőbb gyulladást fenntartó tényező a fogkő. Az elmeszesedett dentális plakk
          olyan erősen tapad a foghoz, hogy eltávolítása egyszerű fogmosással kivitelezhetetlen,
          csak fogorvos vagy dentálhigiénikus tudja megfelelően letisztítani.
        </p>
        <CardGrid
          items={[
            {
              title: "Fogfelszíni fogkő",
              body: "Szabad szemmel jól látható. Kezdetben kréta konzisztenciájú, sárgásfehér színű, később ásványianyag lerakódás miatt keményebb és elszíneződött. Felszíne érdes, mindig lepedék borítja.",
            },
            {
              title: "Íny alatti fogkő",
              body: "Nem látható, csak speciális eszközzel tapintható az ínytasakban. Fekete, érdes, nagyon kemény. Ép fogágy esetén nem alakul ki — a fogágybetegség fenntartásában játszik szerepet.",
            },
          ]}
        />
      </Section>

      <Section title="A fogágybetegségek általános tünetei">
        <BulletList
          items={[
            "Fogínyvérzés, az íny duzzanata, vörös-lila színe",
            "Fájdalom",
            "Ételbeékelődés",
            "Váladékozás",
            "A fogíny kóros visszahúzódása és a fognyakak láthatóvá válása",
            "Fognyaki érzékenység",
            "Mozgathatóvá váló, elvándorolt, elmozdult fogak",
            "Kellemetlen szájszag",
          ]}
        />
      </Section>

      <Section title="Mi okozhatja a fogágybetegséget?">
        <NumberedList
          items={[
            <span key="1">
              <strong className="text-brand-800">Szerzett okok:</strong> nem megfelelő szájhigiénia,
              sok plakk és fogkő, illetve helytelen fogmosási technika, akár túlzottan erős
              fogmosás, ami az ínyt sérti.
            </span>,
            <span key="2">
              <strong className="text-brand-800">Helyi irritáló tényezők:</strong> pontatlanul
              illeszkedő fogpótlások, elálló szélű koronák és tömések sok kárt okozhatnak a fogágy
              szöveteiben.
            </span>,
            <span key="3">
              <strong className="text-brand-800">Külső tényezők:</strong> egyes „Ca-csatorna
              blokkoló" szívgyógyszerek, epilepsziagyógyszerek, fogamzásgátlók és szervátültetést
              kísérő gyógyszerek károsíthatják a fogágyat.
            </span>,
            <span key="4">
              <strong className="text-brand-800">Örökletes faktorok:</strong> egyes
              génpolimorfizmusok csökkenthetik a fogágy védekezőképességét a fertőzésekkel
              szemben.
            </span>,
          ]}
        />
      </Section>

      <Section title="A parodontális megbetegedések osztályozása">
        <p>
          Az American Association of Periodontology által felállított rendszer alapján
          csoportosítjuk:
        </p>
        <NumberedList
          items={[
            "A fogíny megbetegedései — plakk okozta és nem plakk okozta fogínybetegségek",
            "Krónikus periodontitisz / fogágygyulladás",
            "Agresszív periodontitisz / fogágygyulladás",
            "Belgyógyászati betegség következtében kialakult fogágybetegségek",
            "Nekrotizáló ínygyulladás (NUG) és fogágygyulladás (NUP)",
            "Fogágytályogok",
            "Kombinált endo-parodontális léziók",
            "Fejlődési rendellenességek és azokkal összefüggő állapotok",
          ]}
        />
      </Section>

      <Callout
        title="Mozgó fog sem reménytelen eset"
        body={
          <>
            A modern parodontológia akár a tartószövetek sorvadása miatt mozgathatóvá vált fogak
            megtartására is megoldást kínál. Egy alapos vizsgálat után pontos képet kap fogainak
            állapotáról és a lehetséges kezelésekről.
          </>
        }
        ctaLabel="Kérjen konzultációt"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
