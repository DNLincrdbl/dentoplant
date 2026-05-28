import { BulletList, Callout, CardGrid, InfoPanel, Lead, NumberedList, ProcessSteps, Section, SubSection } from "../ui";

export default function SzajhigieniaContent() {
  return (
    <div className="space-y-12">
      <Section title="Egészséges mosoly, hosszú távú eredmény">
        <Lead>
          Egészséges mosolya erősíti önbizalmát és sikereit a mindennapokban. Munkánk hosszú távú
          eredményességének feltétele az Ön szép és egészséges mosolya.
        </Lead>
        <p>
          Ennek alapja, hogy pácienseink elsajátítsák az esetüknek megfelelő fogmosási technikát,
          melyet egyéni szájhigiéniás programunk valósít meg. Számtalan tudományos vizsgálat
          bizonyította, hogy a fogkő és az ínygyulladás jelenlétének egészség- és fogkárosító
          hatása is van: szívbetegséget, gócbetegségeket (hajhullást, bőrgyulladásokat,
          nőgyógyászati gyulladásokat, szembetegségeket, stb.) és koraszülés okozója is lehet.
        </p>
      </Section>

      <Section title="Az egyéni szájhigiéniás program">
        <p>
          Az egyéni szájhigiéniás programot a specialista fogorvos és a dentálhigiénikus közösen
          alakítják ki. Mivel minden eset más és más, csak egy személyre szabott program lehet elég
          alapos, hogy az hosszú távon az egészséges fogágy fenntartását támogassa. Ennek során
          felhívjuk a páciens figyelmét a nehezen tisztítható „kritikus" területekre, melyek időről
          időre visszatérő gyulladásos panaszokat okoztak.
        </p>
        <p>
          Rendelőnkben dolgozó dentálhigiénikus kolléganők speciális iTOP (Individually Trained
          Oral Prophylaxis – egyéni szájhigiénés profilaxis tréning) képzéseken tökéletesítik
          tudásukat, hogy a legkorszerűbb szájápolási tanácsokkal lássák el pácienseinket. A
          dentálhigiénikus bemutatja és megtanítja a megfelelő fogmosási technikát és a
          professzionális szájhigiénia eszközeit, segít kiválasztani a megfelelő fogkefét,
          fogselymet, fogpótlás alatti tisztító selymeket, az implantátumokat tisztító speciális
          keféket, elektromos fogkefét és szájöblítő oldatot.
        </p>
      </Section>

      <Section title="Mi is pontosan a fogkő?">
        <p>
          A fogkő az elmeszesedett dentális plakk, azaz lepedék. Amikor a fogakról nem távolítjuk
          el a lepedéket maradéktalanul, idővel a nyálból mészkristályok rakódnak le benne, és
          kialakul a fogkő. A fogkő olyan erősen tapad a foghoz, hogy eltávolítása egyszerű
          fogmosással kivitelezhetetlen, csak szakember (fogorvos, dentálhigiénikus) tudja
          megfelelően letisztítani.
        </p>
        <p>
          A fogkő sárgás-barnás színű felrakódás, leggyakrabban az alsó metszőfogak nyelv felőli
          felszínén és a felső őrlőfogak orca felőli oldalán alakul ki, ugyanis itt találhatók a
          nagy nyálmirigyek kivezetőcsövei. A fogkő színét számtalan baktérium anyagcsere
          termékéből származó festékanyag, vérfesték, vagy külső festékanyagok (koffein, nikotin,
          kóla) okozzák.
        </p>
        <Callout
          title="Miért érdemes komolyan venni a fogkövet?"
          body={
            <BulletList
              items={[
                "A fogkő az ínyt irritálva ínygyulladást okozhat és a gyulladást fenntartja.",
                "A hosszabb távon fennálló gyulladás fogágybetegséget, csontpusztulást, a fogak kilazulását, majd elvesztését okozhatja.",
                "A fogkő esztétikailag csúnya, ápolatlan benyomást tesz.",
                "A fogkő elszínezheti a fogakat és hozzájárul a kellemetlen szájszag kialakulásához.",
              ]}
            />
          }
        />
      </Section>

      <Section title="Eszközök, melyeket használhat otthon">
        <SubSection title="Milyen fogkefét válasszunk?">
          <p>
            A jó fogkefe egyszerű, közepes vagy lágy szálerősségű, sűrű szálakból áll és kisebb
            fejű. Fontos, hogy a műanyag sörték vége legömbölyített legyen, így nem rostozódnak és
            nem sértik meg a fogágyat. A bonyolult fejkiképzésű, rugalmas nyakú változatokkal nem
            lehet elég pontosan irányítani a tisztító, seprő mozdulatokat — minél egyszerűbb,
            annál jobb.
          </p>
          <p>
            Az elektromos fogkefék közül a kisebb kerek fejű, oda-vissza forgó mozgást végző
            változatot ajánljuk; ehhez is kapható puhább „sensitive" fej. Az egycsomós fogkefe
            pontos fogközi tisztításra alkalmas, használata viszont időigényes. A helyes
            fogmosási technika legalább annyira fontos, mint maga a fogkefe.
          </p>
        </SubSection>

        <SubSection title="Mikor cseréljük a fogkefét?">
          <p>
            Általánosságban 3 havonta ajánlott. Egy használt fogkefén átlagosan 1,2 millió
            baktérium van. Fontos, hogy a fogkefét úgy tároljuk, hogy minden nap alaposan ki tudjon
            száradni — a nedves közeg kedvező a baktériumok számára. Ha a családban nátha,
            influenza vagy fertőző betegség jelentkezik, utána minden fogkefét le kell cserélni.
          </p>
        </SubSection>

        <SubSection title="Fogselyem és fogközi kefe">
          <p>
            <strong className="text-brand-800">Hagyományos fogselyem:</strong> a szomszédos fogak
            közötti lepedék eltávolítására szolgál. Használatát külön meg kell tanulni — különösen
            torlódott frontfogak területén lehet hasznos. Legalább 50 cm darabot tépjünk le egy
            alapos tisztításhoz, és mindig tiszta selymet vezessünk a fogak közé, kifelé mozgatva.
          </p>
          <p>
            <strong className="text-brand-800">Speciális fogselymek:</strong> fogpótlások alatti
            tisztításhoz, implantátumokhoz és sínezett fogak között különböző vastagságú,
            szálanként álló változatokat használunk.
          </p>
          <p>
            <strong className="text-brand-800">Fogközi kefe:</strong> a fogak szomszédos felszíneinek
            tisztítására. Bemérjük a fogközt egy speciális szondával, és ez alapján választunk ki
            több lehetőséget, amit otthon kipróbál, majd egy következő alkalommal átbeszélünk.
          </p>
        </SubSection>

        <SubSection title="Szájöblítők, nyelvkaparó, lepedékfestő">
          <CardGrid
            items={[
              {
                title: "Szájöblítő folyadékok",
                body: "Fogágybetegségek kezelésének kiegészítésére chlorhexidin-diglükonát (CHX) hatóanyagú szájöblítőt javaslunk. Egészséges fogágy esetén fluoriddal kombinált oldat ajánlott. Soha nem helyettesíti a fogmosást.",
              },
              {
                title: "Nyelvkaparó",
                body: "A nyelvháton számtalan kórokozó tapad meg. Rossz lehelet esetén a nyelvkaparó használata a napi rutin része kell legyen.",
              },
              {
                title: "Lepedékfestő tabletta",
                body: "Fogmosás után elrágva lilára festi a visszamaradt lepedéket — segít ellenőrizni, hogy alapos volt-e a tisztítás. Gyermekek tanításakor különösen hasznos.",
              },
            ]}
          />
        </SubSection>
      </Section>

      <Section title="A rendelőben végzett szájhigiéniás kezelés">
        <ProcessSteps
          steps={[
            {
              title: "1. ülés — állapotfelmérés és fogkőeltávolítás",
              body: (
                <>
                  Parodontológiai státuszfelvétel, az alsó és felső fogsoron teljes ultrahangos
                  fogkőeltávolítás és tisztítás, majd speciális kézi műszerekkel átdolgozzuk a
                  kezelt felületeket. A fogfelszíneket abrazív pasztával és gumiharangokkal
                  polírozzuk. Akinél inkább elszíneződés a jellemző, már első alkalommal ajánljuk a
                  „Prophy Mate neo" sópolírozást.
                </>
              ),
            },
            {
              title: "2. ülés — mélyebb területek és berni rizikóbecslés",
              body: (
                <>
                  Az ínygyulladás javul, a duzzadt íny visszahúzódik, így olyan területekről is
                  eltávolítható a fogkő, melyeket az előző kezelés alkalmával nem lehetett elérni.
                  A kezelést sópolírozással egészítjük ki. Befejezéskor felvesszük Önt egyéni
                  szájhigiénés programunkba, és berni rizikóbecslés alapján 3, 4 vagy 6 havonta
                  rendeljük vissza.
                </>
              ),
            },
          ]}
        />
      </Section>
    </div>
  );
}
