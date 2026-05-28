import { Callout, InfoPanel, Lead, ProcessSteps, Section, SubSection } from "../ui";

export default function GyokerkezelesContent() {
  return (
    <div className="space-y-12">
      <Section title="Gyökérkezelés a fogak megtartásáért">
        <Lead>
          A gyökérkezelés a fog megtartását szolgáló beavatkozás, melyet akkor végzünk, ha a pulpa,
          vagyis a fogbél visszafordíthatatlan károsodást szenvedett.
        </Lead>
        <p>
          A gyökérkezelés szükségességét számtalan kórkép okozhatja: előrehaladott, mély szuvas
          folyamat, a fog traumája, fogágybetegséggel összefüggő gyulladások, abrázió, erózió. Egy
          komplex fogászati ellátást nyújtó rendelőben alapvető feltétel, hogy a gyökérkezeléseket
          felkészült stáb végezze, mert a későbbi fogpótlásoknak sokszor ezek a fogak lesznek a
          pillérei. A Dentoplant Fogászati és Implantológiai Rendelőben a gyökérkezeléseket
          korszerű fájdalomcsillapítás mellett, a legmagasabb szakmai irányelvek szerint végzik
          kollégáink.
        </p>
      </Section>

      <Section title="Fogfájdalom és fogbélgyulladás">
        <p>
          Fogbélgyulladás esetén hideg vagy meleg ingerekre a fog éles, percekig elhúzódó
          fájdalommal reagál; előrehaladott folyamat esetén spontán fájdalom jelentkezik — tipikus
          példa az éjszaka jelentkező, fájdalomcsillapítóra nem reagáló fájdalom. A fog azonban
          lehet panaszmentes is, ha a fogbél már elhalt: ekkor a baktériumok zavartalanul nőnek,
          krónikus gyulladást tartanak fenn, amely a gyökércsúcson át a fog körüli szövetekre is
          továbbterjedhet. Az akut gyökércsúcsi gyulladás akár tályoghoz vezethet, kezeletlen
          esetben súlyos szövődményekkel. A krónikus gyökércsúcsi gyulladás általában tünetszegény
          — sokszor csak röntgenfelvételen kerül diagnosztizálásra. Ezek az elhalt fogak
          gócbetegség kiindulópontjai lehetnek.
        </p>
        <InfoPanel title="A fogászati góc">
          <p>
            A fogászati góc helyileg tüneteket alig okozó, krónikus gyulladásos folyamat — ebből
            kórokozók és toxinok is juthatnak a szervezetbe. A leggyakoribb másodlagos, góc eredetű
            betegségek: foltos hajhullás, ekcémák, allergiás kiütések, szemgyulladások, ízületi
            gyulladások, érgyulladások, vesebetegségek.
          </p>
        </InfoPanel>
      </Section>

      <Section title="A gyökérkezelés menete">
        <ProcessSteps
          steps={[
            {
              title: "Megnyitás és hozzáférés kialakítása",
              body: "Megfelelő érzéstelenítés után a fog trepanálása, és olyan nyílás kialakítása a fogkoronán, hogy a fogbélkamra és a gyökércsatornák bemenete kellően láthatóvá és hozzáférhetővé váljon.",
            },
            {
              title: "Kofferdám izolálás",
              body: "A nyálrekesz felhelyezésével megakadályozzuk, hogy a nyálból további baktériumok kerüljenek a gyökércsatornába, száraz körülményeket biztosítunk a gyökértöméshez, és az egész kezelést tisztán, precízen tudjuk elvégezni.",
            },
            {
              title: "A gyökércsatorna-rendszer feltérképezése",
              body: "Röntgenfelvételek, és szükség esetén CBCT 3D felvétel segítségével pontosítjuk a csatornák lefutását. A modern CBCT-vel célzottan tudunk az adott fogról felvételt készíteni, így jelentősen kisebb a sugárterhelés is.",
            },
            {
              title: "Munkahossz meghatározása",
              body: "Helyi röntgenfelvétellel (tűkontroll) és elektromos endométerrel állapítjuk meg, mely konstans elektromos impedanciát mér a száj lágyrészei és az apicalis parodontium között. Erre a célra a korszerű Morita DentaPort ZX© rendszert alkalmazzuk.",
            },
            {
              title: "Csatornatágítás és tisztítás",
              body: "Korszerű Endowave© és ProTaper Next© gépi tűkkel hatékonyan, gyorsan tisztítjuk a gyökércsatorna-rendszert. A mechanikai megmunkálást alapos kémiai átöblítéssel egészítjük ki, hogy a megmunkálás által el nem ért területek és a mellékcsatornák is fertőtlenítve legyenek.",
            },
            {
              title: "Köztes ellátás",
              body: "A következő ülésig fertőtlenítő, gyógyhatású kálcium-hidroxid pasztát helyezünk a csatornarendszerbe, és ideiglenes töméssel látjuk el a fogat.",
            },
            {
              title: "Gyökértömés (laterál kondenzáció)",
              body: "Guttapercha pointokat és sealert használva, point-kontroll röntgennel ellenőrizve töltjük fel a csatornát. Spreader eszközzel tömörítve további pointokat helyezünk, majd újabb röntgennel ellenőrizzük az eredményt.",
            },
            {
              title: "Restaurálás",
              body: "A gyökérkezelt fog elveszti keringését, ezért hajlamosabbá válik törésre — meg kell erősíteni. Üvegszállal megerősített csap és kompozit, illetve esztétikus tömés / inlay / korona biztosítja a tartós, jól záró helyreállítást.",
            },
          ]}
        />
      </Section>

      <Section title="A gyökértömés revíziója — a fog utolsó esélye">
        <p>
          A revízió a korábban készült, sikertelen gyökérkezelések megismétlése — ez az utolsó
          védvonal, mielőtt a fog megmentése vagy eltávolítása érdekében sebészi eszközökhöz
          nyúlnánk. Általában a régi, rosszul záródó vagy inkomplett gyökértömés cseréjét jelenti.
        </p>
        <p>
          Eltávolítjuk a régi gyökértömést, és többszöri ismételt kezelések alkalmával igyekszünk
          megoldani minden tényezőt, ami a sikertelenséget okozhatta — meg nem talált
          gyökércsatorna, elégtelen tágítás-átöblítés, helytelen munkahossz. Csak ezután készítjük
          el az új gyökértömést. Ha a fog 2 hónappal a gyökértömés után is panaszos, duzzanatos,
          vagy gyökércsúcsi lézió alakul ki utólag, a revízió elkerülhetetlen.
        </p>
        <SubSection title="Mikor javasolt panaszmentes fognál is?">
          <p>
            Akkor is mérlegeljük a revíziót, ha a páciens panaszmentes, de a röntgenfelvételen
            elégtelen a gyökértömés és a fogat pillérként szeretnénk felhasználni egy
            restaurátumhoz, vagy implantátumot tervezünk a fog mellé. Ilyenkor különösen fontos a
            cseréje, hogy a későbbi költséges fogpótlást vagy implantátumot ne veszélyeztesse egy
            kiújuló gyulladás.
          </p>
        </SubSection>
      </Section>

      <Callout
        title="Mentsük meg a saját fogát"
        body="A korszerű, mikroszkóp-pontos gyökérkezeléssel olyan fogak is megtarthatóak, amelyeket korábban talán már menthetetlennek ítéltek. Egy alapos vizsgálat és CBCT diagnosztika alapján pontos képet kap a lehetőségekről."
        ctaLabel="Időpontot kérek"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
