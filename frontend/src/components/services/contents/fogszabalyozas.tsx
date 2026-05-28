import { BulletList, Callout, CardGrid, InfoPanel, Lead, ProcessSteps, Section, SubSection } from "../ui";

export default function FogszabalyozasContent() {
  return (
    <div className="space-y-12">
      <Section title="Fájdalommentes fogszabályozás Szegeden">
        <Lead>
          Életkortól függetlenül, személyre szabott megoldást biztosítunk a makulátlan, rendezett
          mosoly elérésére.
        </Lead>
        <p>
          A szakorvosaink által megtervezett fogszabályozó kezelésre tekinthet úgy, akár egy
          egészségügyi-szépészeti befektetésre, amelyet egy életen át kamatoztatni tud majd. A
          fogszabályozás az esztétikus fogsor elérésén túl a rágófunkció helyreállításában, így az
          életminőség javításában is szerepet játszik.
        </p>
      </Section>

      <Section title="Miért érdemes belevágni?">
        <BulletList
          items={[
            "A harapási rendellenességek miatt nehezítetté válhat a rágás, beszéd, légzés — a nem megfelelő érintkezés miatt a fogak túlterhelődhetnek, ami később fogvesztéssel járhat.",
            "Fogtorlódás esetén nehézkesebb a tisztítás, ami fogínygyulladáshoz és fogszuvasodáshoz vezet.",
            "A helytelen harapás állkapocs ízületi problémákat (pl. fájdalom, kattogás) is eredményezhet.",
          ]}
        />
        <p>
          A fogszabályozó kezelés célja mindezen problémák együttes kezelése a harmonikusan
          illeszkedő, szabályos fogívek megteremtésével.
        </p>
      </Section>

      <Section title="Felnőtt fogszabályozás — nem késő belevágni">
        <p>
          Fogszabályozni felnőttkorban is lehet. Egy harmonikus, magabiztos mosollyal pozitív
          energiát tükrözünk — az esztétikai igények mellett pedig nem hagyhatjuk figyelmen kívül
          az orvosi és egészségügyi szempontokat sem. A felnőttkori fogszabályozás szükséges lehet
          pótlások előkészítésénél is: ha egy implantátum számára kevés a hely, és célunk rést
          nyitni a fogszabályozóval; vagy foghiány mellett bedőlt fogak felegyenesítésénél; front
          torlódás megszüntetésénél, és számos egyéb esetben.
        </p>
        <p>
          Ma már az elváltozások súlyosságától függően, és a kezelési céloknak megfelelően sokféle
          készülék és technológia áll rendelkezésünkre. Tudni kell azonban, hogy állcsontnövekedéssel
          felnőttkorban már nem számolhatunk — komplex dento-skeletális elváltozás korrekt ellátása
          olykor állcsont áthelyező műtétet jelenthet. Akik zavarónak érzik a hagyományos fém
          fogszabályozókat, számukra remek alternatíva a láthatatlan fogszabályozás, azon belül is
          a rendelőnkben alkalmazott professzionális <strong>Clear Correct™</strong> rendszer.
        </p>
      </Section>

      <Section title="Gyermekkori fogszabályozás — irány a suli!">
        <p>
          Fontos a gyermekek rendszeres fogorvosi vizsgálata, hiszen korán kiszűrhetők azok az
          elváltozások, amelyek szükségessé tehetik a fogszabályozást. Figyelmeztető jel lehet a
          nyitott szájtartás, a gátolt orrlégzés és a beszédhiba is. Érdemes gyermekét már
          <strong> 6-7 éves korban</strong> egy első konzultációra elhozni rendelőnkbe.
        </p>
        <p>
          Ekkor felmérjük a növekedési tendenciát, a fogak előtörésének várható idejét, és
          kiszűrjük a gyermekkori rossz szokások miatt kialakuló esetleges rendellenességeket. Nem
          kell megvárnunk, hogy az összes tejfog leváltódjon — még az előtt el lehet kezdeni akár
          a kivehető készülékes kezelést is. Ez a leghatékonyabb időszak, mivel befolyásolhatjuk
          és irányítani tudjuk az állcsontok növekedését. Ha ezt elmulasztjuk, akkor egyes
          rendellenességek később már csak sebészi módszerekkel korrigálhatók.
        </p>
        <InfoPanel title="A funkcionális készülékek használata">
          <p>
            Sokan helytelenül „éjszakai készüléknek” hívják ezeket — viszont az eredményesség
            érdekében naponta minimum <strong>12-14 órát</strong> szükséges viselni. A funkcionális
            kezelést követheti a rögzített készülékkel végzett második szakasz, amikor beállítjuk a
            hibátlan fogsorzáródást. Esetenként elegendő lehet csupán a kivehető készülék is.
          </p>
        </InfoPanel>
      </Section>

      <Section title="A kezelés folyamata">
        <ProcessSteps
          steps={[
            {
              title: "Első konzultáció",
              body: "Előre egyeztetett időpontban átbeszéljük az igényeket és az elérendő célt. Funkcionális vizsgálat, szájhigiénia és a fogak állapotának felmérése. Alapfeltétel a tökéletes szájhigiénia és a meglévő szuvasodások ellátása, hiszen a készülék felhelyezését követően nehezítetté válik a tisztítás és az egyéb fogászati ellátás.",
            },
            {
              title: "Dokumentáció",
              body: "Röntgenek, fotók és lenyomatok készítése. A kiértékelés alapján határozzuk meg a pontos kezelési tervet. Fontos, hogy ekkorra már rendezett szájhigiéniával és fogazattal rendelkezzen a páciens.",
            },
            {
              title: "Kezelési terv és árajánlat",
              body: "A személyre szabott kezelési terv részletes megbeszélése és az árajánlat ismertetése. Nagy hangsúlyt fektetünk arra, hogy minden érthető legyen — beleegyezés esetén indul a készülékrendelés.",
            },
            {
              title: "Készülék felhelyezése",
              body: "A rögzített készülék felragasztása precíz munka, hiszen a bracketek helye határozza meg a fogak jövőbeli pozícióját. Korszerű ragasztók védik a fogat, fluort adnak le, és speciális lámpa fényére azonnal megkötnek. Ezután praktikus tanácsokkal látjuk el Önt: érzékenység, étkezés, fogmosás a készülékkel.",
            },
            {
              title: "Aktiválás és kontroll",
              body: "Rögzített készüléknél biztosítani kell a rendszeres (általában havi) kontrollt. Ekkor történik az ellenőrzés, szükség esetén ívcsere, elasztikus elemek és rugók felhelyezése. Az aktiválás után pár napos fogérzékenység lehet.",
            },
          ]}
        />
      </Section>

      <Section title="Fogszabályozó készülékek">
        <p>
          Manapság már szinte bármilyen fogászati rendellenesség orvosolható a megfelelő
          készülékkel. A rögzítés módját tekintve megkülönböztetünk kivehető és rögzített
          készülékeket.
        </p>

        <SubSection title="Kivehető készülékek">
          <p>
            A páciens által könnyedén eltávolítható eszközök, amelyek általában műanyagból
            készülnek, de tartalmazhatnak fém részeket is (labiál ív, drótkapcsok, csavar).
          </p>
          <CardGrid
            items={[
              {
                title: "Előnyök",
                body: "Könnyen tisztíthatóak; nem akadályozzák a szájhigiéniát; kevésbé szembetűnőek; gyermekkorban pozitívan befolyásolják az állcsontok fejlődését.",
              },
              {
                title: "Hátrány",
                body: "A megfelelő hordási idő (napi 12-14 óra) elengedhetetlen a hatás kifejtéséhez.",
              },
            ]}
          />
        </SubSection>

        <SubSection title="Hagyományos, rögzített fogszabályozó">
          <p>
            A bracketeket és az ívet drót- vagy gumigyűrű tartja a helyén, melyeket minden
            aktiváláskor cserélni kell.
          </p>
          <CardGrid
            items={[
              {
                title: "Előnyök",
                body: "Hatékonyak; a legolcsóbb megoldás; rengeteg színből választhat gumigyűrűt.",
              },
              {
                title: "Hátrányok",
                body: "Hosszabb a kezelési idő; gyakrabban kell aktiválni; kevésbé tágítható velük a fogív, így több a foghúzással kombinált eset.",
              },
            ]}
          />
        </SubSection>

        <SubSection title="Önligírozó, rögzített fogszabályozó">
          <p>
            A modernebb csoport — a bracketbe épített zárszerkezet rögzíti az ívet, gumi vagy
            drótligatúra nélkül.
          </p>
          <CardGrid
            items={[
              {
                title: "Előnyök",
                body: "Ritkábban kell aktiválni; rövidebb az aktiválás és a teljes kezelés; könnyebben tisztán tarthatók.",
              },
              {
                title: "Hátrány",
                body: "Drágábbak, mint a hagyományos készülékek.",
              },
            ]}
          />
        </SubSection>

        <SubSection title="Láthatatlan fogszabályozó — Clear Correct™">
          <p>
            Átlátszó sínek (alignerek) számítógéppel modellezett rendszere. Vékony, mélyhúzott vagy
            3D-nyomtatott fóliák, amelyek előre megtervezett setup-modellekre készülnek — a kezelés
            több aligner sorozatából áll, melyek egymást követik és apró lépésekben mozgatják a
            fogakat. A Cear Correct™ a fogászat és implantológia területén jól ismert{" "}
            <strong>Straumann</strong> cég rendszere.
          </p>
          <CardGrid
            items={[
              {
                title: "Előnyök",
                body: "Szinte észrevehetetlen; étkezés előtt eltávolítható; nincs étkezési korlátozás; nem akadályozza a fogselyem és a fogkefe használatát; rövidebb kontrollok; kényelmesebb a hagyományosnál.",
              },
              {
                title: "Hátrány",
                body: "Nem minden harapási rendellenesség korrekciójára alkalmas — szakorvosi mérlegelés szükséges.",
              },
            ]}
          />
        </SubSection>
      </Section>

      <Callout
        title="Kérjen konzultációs időpontot"
        body="Az első személyes találkozó során átbeszéljük az igényeit, és az azokhoz igazított legmegfelelőbb kezelési lehetőségeket — kortól és nemtől függetlenül, személyre szabottan."
        ctaLabel="Kapcsolatfelvétel"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
