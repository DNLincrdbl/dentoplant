import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";

export const metadata = {
  title: "Jogi nyilatkozat — Dentoplant Fogászat Szeged",
  description:
    "Jogi nyilatkozat a dentoplant.hu weboldal írott és vizuális tartalmainak védelméről: szerzői jogok, felhasználási feltételek, statisztikai adatgyűjtés és felelősség.",
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHero
        eyebrow="Jogi nyilatkozat"
        title="Jogi nyilatkozat"
        description="A dentoplant.hu weboldal írott és vizuális tartalmainak védelméről."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Jogi nyilatkozat" }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-foreground/85">
          <div className="space-y-4">
            <p className="font-medium text-brand-900">Tisztelt Látogató!</p>
            <p>
              Kérjük, figyelmesen olvassa el az alábbiakat! A{" "}
              <a
                href="https://www.dentoplant.hu"
                className="font-medium text-brand-700 hover:text-brand-600"
              >
                www.dentoplant.hu
              </a>{" "}
              weblap vagy annak bármely oldalának megnyitásával Ön elfogadja az itt felsorolt
              feltételeket. Kérjük, amennyiben nem ért egyet az alábbiakkal, ne nyissa meg
              weboldalainkat!
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">
              Szerzői jogok, hivatkozás a weblapra
            </h2>
            <p>
              A www.dentoplant.hu weblap felületein található összes adat, leírás, tájékoztató
              szöveg, kép Dr. Maráz Kinga tulajdonát képezik. Az oldal grafikai és technikai terve,
              szerkezete, funkcióinak megvalósítása és annak módja, az ezen oldalt készítő eVista
              Kft. Kreatív Ügynökség (www.e-vista.hu) kizárólagos tulajdonát képezik. A honlap
              információi kizárólag a forrás megjelölésével alkalmazhatóak.
            </p>
            <p>
              A másodközlésnek meg kell felelnie – többek között – a Polgári Törvénykönyv 1957. évi
              IV. tv., a Büntető Törvénykönyv 1978. évi IV. tv., a Szerzői jogról szóló 1999. évi
              LXXVI. tv. és a Sajtóról szóló 1986. évi II. tv. vonatkozó rendelkezéseinek. A
              tartalomszolgáltató engedélye nélkül az oldalak bármely alkotóeleme (együtt és
              külön-külön is) on-line vagy nyomtatott reprodukálása nyilvános közzététel céljából
              tilos.
            </p>
            <p>
              Előzetes írásos engedély nélkül a honlap tartalmi elemei nem helyezhetők el sem
              nyilvános, sem zárt adatbázisban. A honlap jól dokumentált saját fotókat és
              esetmegoldásokat tartalmaz, melyek mind Dr. Maráz Kinga saját munkái, az ezekről
              készült fotók Dr. Maráz Kinga saját tulajdonát képezik. A honlap tartalmi és formai
              alkotórészei közlési engedély esetén sem változtathatók meg és nem használhatók fel a
              honlap tartalmától eltérő célra. A honlap tartalmának szerzői joga (különös
              tekintettel a fényképekre) a tartalomszolgáltatót illeti meg, kivéve abban az
              esetben, ha a konkrét dokumentumban más forrás van feltüntetve, illetve a szerzői
              joggal kapcsolatban egyéb közlés történik. A tartalomszolgáltató által közzétett,
              harmadik személyek szellemi alkotásait (cikkek, tanulmányok) felhasználni kizárólag a
              Szerzői jogról szóló 1999. évi LXXVI. tv. rendelkezései szerint lehetséges. Minden
              ezen korlátokat átlépő felhasználáshoz az adott szerző hozzájárulása szükséges.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">
              A felhasználásra került nem saját képekről
            </h2>
            <p>
              A www.dentoplant.hu weblap tartalmi elemei között felhasználásra került Nobel Biocare
              szellemi tulajdonát képező és általuk biztosított képeket Dr. Maráz Kinga a Nobel
              Biocare Magyarország Kft. (1113 Budapest, Bocskai u. 134-146.) engedélyével használta
              fel.
            </p>
            <p>
              A www.dentoplant.hu weblap tartalmi elemei között felhasználásra került Straumann GmbH
              szellemi tulajdonát képező és általuk biztosított képeket Dr. Maráz Kinga a Straumann
              GmbH Magyarországi Fióktelepe (H-1146 Budapest, M3 Business Center, Hungária krt.
              179-187.) engedélyével használta fel.
            </p>
            <p>
              A www.dentoplant.hu weblap tartalmi elemei között felhasználásra került Geistlich©
              Pharma AG szellemi tulajdonát képező és általuk biztosított képeket Dr. Maráz Kinga a
              magyarországi forgalmazójuk, a Front-Dent Kft. (1094 Budapest, Ferenc tér 5.)
              engedélyével használta fel.
            </p>
            <p>
              A www.dentoplant.hu weblap kezdőoldalára mutató linket bárki saját felületén is csak
              külön hozzájárulásunkkal helyezhet el. Belső oldalakra mutató linkek elhelyezhetők
              abban az esetben, ha ezek a teljes oldal, és nem csak egyetlen elem (pl. kép) elérési
              útját tartalmazzák, illetve az oldal tartalmára semmilyen módon nincsenek hatással,
              további paramétereket nem tartalmaznak. Tilos linket úgy elhelyezni, hogy az a
              www.dentoplant.hu oldalt valamely más oldal részeként jelenítse meg.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">
              A www.dentoplant.hu weboldalon található információkról
            </h2>
            <p>
              Dr. Maráz Kinga minden ésszerű és racionális erőfeszítést megtett annak érdekében,
              hogy a www.dentoplant.hu weblapon közölt minden információ pontos legyen feltöltése
              időpontjában. Ennek ellenére, Dr. Maráz Kinga sem kifejezetten, sem ráutaló módon nem
              vállal szavatosságot a jelen weblapon keresztül nyújtott információkért, és fenntartja
              a jogot arra, hogy értesítés nélkül bármikor változtatásokat és javításokat hajtson
              végre, illetve a portált vagy az azon közölt információkat részben vagy egészben
              megszüntesse. Dr. Maráz Kinga nem vállal felelősséget a weblapon előforduló semmilyen
              pontatlanságért, vagy hiányosságért.
            </p>
            <p>
              A www.dentoplant.hu weblapon található információkon alapuló bármilyen döntés a
              felhasználó saját felelőssége.
            </p>
            <p>
              Dr. Maráz Kinga nem tartozik felelősséggel azokért az esetlegesen bekövetkező
              károkért, veszteségekért, költségekért, amelyek a weblap használatából, azok
              használatra képtelen állapotából, nem megfelelő működéséből, üzemzavarából, az adatok
              bárki által történő illetéktelen megváltoztatásából keletkeznek, illetve amelyek az
              információtovábbítási késedelemből, számítógépes vírusból, vonal- vagy rendszerhibából
              vagy más hasonló okból származnak.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">
              A weboldal statisztikai adatgyűjtéséről
            </h2>
            <p>
              Amikor Ön az Üzemeltető internetes portáljának oldalait böngészi, egyidejűleg adatot
              is szolgáltat a társaság számára. Az adatszolgáltatás részben automatikusan (pl. weblap
              statisztika), részben az űrlapok kitöltésével vagy hírlevél megrendelése útján
              történik.
            </p>
            <p>
              Amennyiben Ön megadja e-mail címét, postai címét, telefonszámát, mobilszámát, online
              bejelentkezéskor, azzal hozzájárul, hogy a későbbiekben a www.dentoplant.hu portál a
              portállal, illetve az Üzemeltető tevékenységével összefüggő témában elektronikus
              levél, postai levél útján, továbbá sms vagy telefonhívás formájában felkeresse.
            </p>
            <p>
              A www.dentoplant.hu-ra való belépéssel számítógépének egyes paramétereiről, illetve
              annak IP címéről naplófile készül. Az adatok kizárólag statisztikai célokat
              szolgálnak, az Üzemeltető kizárólag a Weboldal fejlesztése érdekében használja fel
              őket. Az IP cím és a naplófile egyes esetekben személyes adatnak minősülhet.
            </p>
            <p>
              A www.dentoplant.hu portál egyes alkalmazásai kis szöveges információs fájlokat, ún.
              „cookie”-kat használnak, amelyek a felhasználók azonosításának és további
              látogatásának megkönnyítése érdekében a látogatók merevlemezén tárolódnak. A portál
              használója meghatározhatja, hogy kívánja-e fogadni a cookie-kat vagy sem, illetve
              eldöntheti, hogy kapjon-e értesítést, ha a megtekintett oldal cookie-t küld számára.
              Amennyiben Ön böngészőjében engedélyezi a „cookie”-k használatát, úgy hozzájárul
              ahhoz, hogy az így közvetített információt a www.dentoplant.hu weboldal a működtetés
              céljából felhasználja. Ne feledje, amennyiben Ön nem engedélyezi a cookie-k fogadását,
              abban az esetben a weboldal egyes szolgáltatásai nem vagy korlátozottan lesznek
              igénybe vehetőek.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">
              Személyre szabott reklámok/tartalmak
            </h2>
            <p>
              Amennyiben a felhasználó igényelte a hírlevél küldési szolgáltatást, a Szolgáltató a
              hírlevelekben személyre szabott reklámokat/tartalmakat jeleníthet meg.
            </p>
            <p>
              Az Üzemeltetőt nem terheli felelősség a Honlap látogatásával kapcsolatban közvetlenül,
              közvetetten vagy véletlenszerűen felmerülő hibáért, kárért, adatvesztésért, illetve a
              Honlap tartalmi hibáiért vagy hiányosságaiért.
            </p>
            <p>
              A www.dentoplant.hu weboldalon szereplő bejegyzett védjegyek, márkanevek és domain
              nevek minden esetben az azokat bejegyző cégek kizárólagos tulajdonát képezik. Az
              Üzemeltető által bejegyzett védjegyeket, márkaneveket és domain neveket az Üzemeltető
              írásos engedélye nélkül felhasználni tilos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">Google Analytics</h2>
            <p>
              A www.dentoplant.hu a Google által nyújtott Google Analitika webanalitikai
              szolgáltatást használja. A rendszer személyes adatokat gyűjt a felhasználókról. Az
              adatgyűjtések köréről, illetve felhasználási módjáról a{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-700 hover:text-brand-600"
              >
                Google Adatvédelmi irányelvei
              </a>{" "}
              adnak bővebb tájékoztatást.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed">
            <p>
              A honlappal kapcsolatos minden szerzői jog Dr. Maráz Kingát illeti. Dr. Maráz Kinga a
              www.dentoplant.hu honlappal kapcsolatos minden további jogát fenntartja. Minden nem
              tárgyalt jogi hivatkozással kapcsolatban a magyarországi jogszabályokat és hatósági
              döntéseket tartjuk irányadónak.
            </p>
            <p className="mt-3 font-medium text-brand-900">
              A www.dentoplant.hu üzemeltetője és tulajdonosa: Dr. Maráz Kinga
            </p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
