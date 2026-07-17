import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Legal notice — Dentoplant Dental Clinic Szeged" : "Jogi nyilatkozat — Dentoplant Fogászat Szeged",
    description: en
      ? "Legal notice on the protection of the written and visual content of the dentoplant.hu website: copyright, terms of use, statistical data collection and liability."
      : "Jogi nyilatkozat a dentoplant.hu weboldal írott és vizuális tartalmainak védelméről: szerzői jogok, felhasználási feltételek, statisztikai adatgyűjtés és felelősség.",
  };
}

export default async function LegalNoticePage() {
  const locale = await getLocale();
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.eyebrow}
        description={c.heroDesc}
        crumbs={[{ label: c.home, href: "/" }, { label: c.eyebrow }]}
      />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-foreground/85">
          <div className="space-y-4">
            <p className="font-medium text-brand-900">{c.dear}</p>
            <p>
              {c.introBefore}
              <a
                href="https://www.dentoplant.hu"
                className="font-medium text-brand-700 hover:text-brand-600"
              >
                www.dentoplant.hu
              </a>
              {c.introAfter}
            </p>
          </div>

          {c.sections.map((s) => (
            <div key={s.heading} className="space-y-4">
              <h2 className="font-display text-2xl text-brand-900">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}

          <div className="space-y-4">
            <h2 className="font-display text-2xl text-brand-900">Google Analytics</h2>
            <p>
              {c.gaBefore}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-700 hover:text-brand-600"
              >
                {c.gaLink}
              </a>
              {c.gaAfter}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed">
            <p>{c.footer}</p>
            <p className="mt-3 font-medium text-brand-900">{c.footerOwner}</p>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}

const HU = {
  eyebrow: "Jogi nyilatkozat",
  home: "Főoldal",
  heroDesc: "A dentoplant.hu weboldal írott és vizuális tartalmainak védelméről.",
  dear: "Tisztelt Látogató!",
  introBefore: "Kérjük, figyelmesen olvassa el az alábbiakat! A ",
  introAfter:
    " weblap vagy annak bármely oldalának megnyitásával Ön elfogadja az itt felsorolt feltételeket. Kérjük, amennyiben nem ért egyet az alábbiakkal, ne nyissa meg weboldalainkat!",
  sections: [
    {
      heading: "Szerzői jogok, hivatkozás a weblapra",
      paragraphs: [
        "A www.dentoplant.hu weblap felületein található összes adat, leírás, tájékoztató szöveg, kép Dr. Maráz Kinga tulajdonát képezik. Az oldal grafikai és technikai terve, szerkezete, funkcióinak megvalósítása és annak módja, az ezen oldalt készítő eVista Kft. Kreatív Ügynökség (www.e-vista.hu) kizárólagos tulajdonát képezik. A honlap információi kizárólag a forrás megjelölésével alkalmazhatóak.",
        "A másodközlésnek meg kell felelnie – többek között – a Polgári Törvénykönyv 1957. évi IV. tv., a Büntető Törvénykönyv 1978. évi IV. tv., a Szerzői jogról szóló 1999. évi LXXVI. tv. és a Sajtóról szóló 1986. évi II. tv. vonatkozó rendelkezéseinek. A tartalomszolgáltató engedélye nélkül az oldalak bármely alkotóeleme (együtt és külön-külön is) on-line vagy nyomtatott reprodukálása nyilvános közzététel céljából tilos.",
        "Előzetes írásos engedély nélkül a honlap tartalmi elemei nem helyezhetők el sem nyilvános, sem zárt adatbázisban. A honlap jól dokumentált saját fotókat és esetmegoldásokat tartalmaz, melyek mind Dr. Maráz Kinga saját munkái, az ezekről készült fotók Dr. Maráz Kinga saját tulajdonát képezik. A honlap tartalmi és formai alkotórészei közlési engedély esetén sem változtathatók meg és nem használhatók fel a honlap tartalmától eltérő célra. A honlap tartalmának szerzői joga (különös tekintettel a fényképekre) a tartalomszolgáltatót illeti meg, kivéve abban az esetben, ha a konkrét dokumentumban más forrás van feltüntetve, illetve a szerzői joggal kapcsolatban egyéb közlés történik. A tartalomszolgáltató által közzétett, harmadik személyek szellemi alkotásait (cikkek, tanulmányok) felhasználni kizárólag a Szerzői jogról szóló 1999. évi LXXVI. tv. rendelkezései szerint lehetséges. Minden ezen korlátokat átlépő felhasználáshoz az adott szerző hozzájárulása szükséges.",
      ],
    },
    {
      heading: "A felhasználásra került nem saját képekről",
      paragraphs: [
        "A www.dentoplant.hu weblap tartalmi elemei között felhasználásra került Nobel Biocare szellemi tulajdonát képező és általuk biztosított képeket Dr. Maráz Kinga a Nobel Biocare Magyarország Kft. (1113 Budapest, Bocskai u. 134-146.) engedélyével használta fel.",
        "A www.dentoplant.hu weblap tartalmi elemei között felhasználásra került Straumann GmbH szellemi tulajdonát képező és általuk biztosított képeket Dr. Maráz Kinga a Straumann GmbH Magyarországi Fióktelepe (H-1146 Budapest, M3 Business Center, Hungária krt. 179-187.) engedélyével használta fel.",
        "A www.dentoplant.hu weblap tartalmi elemei között felhasználásra került Geistlich© Pharma AG szellemi tulajdonát képező és általuk biztosított képeket Dr. Maráz Kinga a magyarországi forgalmazójuk, a Front-Dent Kft. (1094 Budapest, Ferenc tér 5.) engedélyével használta fel.",
        "A www.dentoplant.hu weblap kezdőoldalára mutató linket bárki saját felületén is csak külön hozzájárulásunkkal helyezhet el. Belső oldalakra mutató linkek elhelyezhetők abban az esetben, ha ezek a teljes oldal, és nem csak egyetlen elem (pl. kép) elérési útját tartalmazzák, illetve az oldal tartalmára semmilyen módon nincsenek hatással, további paramétereket nem tartalmaznak. Tilos linket úgy elhelyezni, hogy az a www.dentoplant.hu oldalt valamely más oldal részeként jelenítse meg.",
      ],
    },
    {
      heading: "A www.dentoplant.hu weboldalon található információkról",
      paragraphs: [
        "Dr. Maráz Kinga minden ésszerű és racionális erőfeszítést megtett annak érdekében, hogy a www.dentoplant.hu weblapon közölt minden információ pontos legyen feltöltése időpontjában. Ennek ellenére, Dr. Maráz Kinga sem kifejezetten, sem ráutaló módon nem vállal szavatosságot a jelen weblapon keresztül nyújtott információkért, és fenntartja a jogot arra, hogy értesítés nélkül bármikor változtatásokat és javításokat hajtson végre, illetve a portált vagy az azon közölt információkat részben vagy egészben megszüntesse. Dr. Maráz Kinga nem vállal felelősséget a weblapon előforduló semmilyen pontatlanságért, vagy hiányosságért.",
        "A www.dentoplant.hu weblapon található információkon alapuló bármilyen döntés a felhasználó saját felelőssége.",
        "Dr. Maráz Kinga nem tartozik felelősséggel azokért az esetlegesen bekövetkező károkért, veszteségekért, költségekért, amelyek a weblap használatából, azok használatra képtelen állapotából, nem megfelelő működéséből, üzemzavarából, az adatok bárki által történő illetéktelen megváltoztatásából keletkeznek, illetve amelyek az információtovábbítási késedelemből, számítógépes vírusból, vonal- vagy rendszerhibából vagy más hasonló okból származnak.",
      ],
    },
    {
      heading: "A weboldal statisztikai adatgyűjtéséről",
      paragraphs: [
        "Amikor Ön az Üzemeltető internetes portáljának oldalait böngészi, egyidejűleg adatot is szolgáltat a társaság számára. Az adatszolgáltatás részben automatikusan (pl. weblap statisztika), részben az űrlapok kitöltésével vagy hírlevél megrendelése útján történik.",
        "Amennyiben Ön megadja e-mail címét, postai címét, telefonszámát, mobilszámát, online bejelentkezéskor, azzal hozzájárul, hogy a későbbiekben a www.dentoplant.hu portál a portállal, illetve az Üzemeltető tevékenységével összefüggő témában elektronikus levél, postai levél útján, továbbá sms vagy telefonhívás formájában felkeresse.",
        "A www.dentoplant.hu-ra való belépéssel számítógépének egyes paramétereiről, illetve annak IP címéről naplófile készül. Az adatok kizárólag statisztikai célokat szolgálnak, az Üzemeltető kizárólag a Weboldal fejlesztése érdekében használja fel őket. Az IP cím és a naplófile egyes esetekben személyes adatnak minősülhet.",
        "A www.dentoplant.hu portál egyes alkalmazásai kis szöveges információs fájlokat, ún. „cookie”-kat használnak, amelyek a felhasználók azonosításának és további látogatásának megkönnyítése érdekében a látogatók merevlemezén tárolódnak. A portál használója meghatározhatja, hogy kívánja-e fogadni a cookie-kat vagy sem, illetve eldöntheti, hogy kapjon-e értesítést, ha a megtekintett oldal cookie-t küld számára. Amennyiben Ön böngészőjében engedélyezi a „cookie”-k használatát, úgy hozzájárul ahhoz, hogy az így közvetített információt a www.dentoplant.hu weboldal a működtetés céljából felhasználja. Ne feledje, amennyiben Ön nem engedélyezi a cookie-k fogadását, abban az esetben a weboldal egyes szolgáltatásai nem vagy korlátozottan lesznek igénybe vehetőek.",
      ],
    },
    {
      heading: "Személyre szabott reklámok/tartalmak",
      paragraphs: [
        "Amennyiben a felhasználó igényelte a hírlevél küldési szolgáltatást, a Szolgáltató a hírlevelekben személyre szabott reklámokat/tartalmakat jeleníthet meg.",
        "Az Üzemeltetőt nem terheli felelősség a Honlap látogatásával kapcsolatban közvetlenül, közvetetten vagy véletlenszerűen felmerülő hibáért, kárért, adatvesztésért, illetve a Honlap tartalmi hibáiért vagy hiányosságaiért.",
        "A www.dentoplant.hu weboldalon szereplő bejegyzett védjegyek, márkanevek és domain nevek minden esetben az azokat bejegyző cégek kizárólagos tulajdonát képezik. Az Üzemeltető által bejegyzett védjegyeket, márkaneveket és domain neveket az Üzemeltető írásos engedélye nélkül felhasználni tilos.",
      ],
    },
  ],
  gaBefore:
    "A www.dentoplant.hu a Google által nyújtott Google Analitika webanalitikai szolgáltatást használja. A rendszer személyes adatokat gyűjt a felhasználókról. Az adatgyűjtések köréről, illetve felhasználási módjáról a ",
  gaLink: "Google Adatvédelmi irányelvei",
  gaAfter: " adnak bővebb tájékoztatást.",
  footer:
    "A honlappal kapcsolatos minden szerzői jog Dr. Maráz Kingát illeti. Dr. Maráz Kinga a www.dentoplant.hu honlappal kapcsolatos minden további jogát fenntartja. Minden nem tárgyalt jogi hivatkozással kapcsolatban a magyarországi jogszabályokat és hatósági döntéseket tartjuk irányadónak.",
  footerOwner: "A www.dentoplant.hu üzemeltetője és tulajdonosa: Dr. Maráz Kinga",
};

const EN = {
  eyebrow: "Legal notice",
  home: "Home",
  heroDesc: "On the protection of the written and visual content of the dentoplant.hu website.",
  dear: "Dear Visitor!",
  introBefore: "Please read the following carefully! By opening the ",
  introAfter:
    " website or any of its pages, you accept the conditions listed here. If you do not agree with the following, please do not open our websites!",
  sections: [
    {
      heading: "Copyright, linking to the website",
      paragraphs: [
        "All data, descriptions, informational texts and images on the pages of the www.dentoplant.hu website are the property of Dr. Kinga Maráz. The graphic and technical design of the site, its structure, and the implementation and manner of its functions are the exclusive property of the creative agency that made this site, eVista Kft. (www.e-vista.hu). The website's information may only be used with attribution of the source.",
        "Any republication must comply with — among others — the relevant provisions of Act IV of 1957 (Civil Code), Act IV of 1978 (Criminal Code), Act LXXVI of 1999 on Copyright and Act II of 1986 on the Press. Without the content provider's permission, the online or printed reproduction of any element of the pages (jointly and separately) for the purpose of public disclosure is prohibited.",
        "Without prior written permission, the content elements of the website may not be placed in either a public or a closed database. The website contains well-documented own photos and case solutions, all of which are Dr. Kinga Maráz's own work, and the photos taken of them are Dr. Kinga Maráz's own property. The content and formal components of the website may not be modified even with a publication permit, and may not be used for any purpose other than the website's content. The copyright of the website's content (with particular regard to the photographs) belongs to the content provider, except where another source is indicated in the specific document, or where another statement is made regarding copyright. The intellectual works of third parties (articles, studies) published by the content provider may be used exclusively in accordance with the provisions of Act LXXVI of 1999 on Copyright. Any use exceeding these limits requires the consent of the given author.",
      ],
    },
    {
      heading: "About the non-own images used",
      paragraphs: [
        "Among the content elements of the www.dentoplant.hu website, the images that are the intellectual property of Nobel Biocare and provided by them were used by Dr. Kinga Maráz with the permission of Nobel Biocare Magyarország Kft. (1113 Budapest, Bocskai u. 134-146).",
        "Among the content elements of the www.dentoplant.hu website, the images that are the intellectual property of Straumann GmbH and provided by them were used by Dr. Kinga Maráz with the permission of the Hungarian branch of Straumann GmbH (H-1146 Budapest, M3 Business Center, Hungária krt. 179-187).",
        "Among the content elements of the www.dentoplant.hu website, the images that are the intellectual property of Geistlich© Pharma AG and provided by them were used by Dr. Kinga Maráz with the permission of their Hungarian distributor, Front-Dent Kft. (1094 Budapest, Ferenc tér 5).",
        "A link pointing to the home page of the www.dentoplant.hu website may only be placed by anyone on their own interface with our separate consent. Links pointing to internal pages may be placed provided that they contain the path of the entire page and not just a single element (e.g. an image), do not affect the content of the page in any way, and contain no additional parameters. It is prohibited to place a link in a way that displays the www.dentoplant.hu site as part of another page.",
      ],
    },
    {
      heading: "About the information on the www.dentoplant.hu website",
      paragraphs: [
        "Dr. Kinga Maráz has made every reasonable and rational effort to ensure that all information published on the www.dentoplant.hu website was accurate at the time of its upload. Nevertheless, Dr. Kinga Maráz assumes no warranty, either expressly or implicitly, for the information provided through this website, and reserves the right to make changes and corrections at any time without notice, or to discontinue the portal or the information published on it in part or in whole. Dr. Kinga Maráz assumes no responsibility for any inaccuracy or omission on the website.",
        "Any decision based on the information on the www.dentoplant.hu website is the user's own responsibility.",
        "Dr. Kinga Maráz is not liable for any damage, loss or cost that may arise from the use of the website, from its being unusable, from its improper operation or malfunction, from the unauthorised modification of the data by anyone, or that arises from delay in the transmission of information, a computer virus, a line or system error, or another similar cause.",
      ],
    },
    {
      heading: "About the website's statistical data collection",
      paragraphs: [
        "When you browse the pages of the Operator's internet portal, you simultaneously provide data to the company. The data provision takes place partly automatically (e.g. website statistics) and partly by filling in forms or by subscribing to the newsletter.",
        "If you provide your email address, postal address, telephone number or mobile number when booking online, you consent to the www.dentoplant.hu portal contacting you in the future on topics related to the portal or the Operator's activities, by electronic mail, postal letter, as well as by SMS or phone call.",
        "Upon entering www.dentoplant.hu, a log file is created about certain parameters of your computer and its IP address. The data serve statistical purposes only, and the Operator uses them exclusively for the development of the Website. In some cases the IP address and the log file may qualify as personal data.",
        "Certain applications of the www.dentoplant.hu portal use small text information files, so-called “cookies”, which are stored on visitors' hard drives to facilitate the identification of users and their further visits. The user of the portal can determine whether they wish to accept cookies or not, and can decide whether to receive a notification when a viewed page sends them a cookie. If you enable the use of “cookies” in your browser, you consent to the www.dentoplant.hu website using the information thus transmitted for the purpose of operation. Please note that if you do not allow cookies, some services of the website will be unavailable or available only in a limited way.",
      ],
    },
    {
      heading: "Personalised advertisements/content",
      paragraphs: [
        "If the user has requested the newsletter service, the Service Provider may display personalised advertisements/content in the newsletters.",
        "The Operator bears no liability for any error, damage or data loss arising directly, indirectly or accidentally in connection with visiting the Website, or for content errors or omissions of the Website.",
        "The registered trademarks, brand names and domain names appearing on the www.dentoplant.hu website are in all cases the exclusive property of the companies that registered them. The trademarks, brand names and domain names registered by the Operator may not be used without the Operator's written permission.",
      ],
    },
  ],
  gaBefore:
    "www.dentoplant.hu uses the Google Analytics web analytics service provided by Google. The system collects personal data about users. More detailed information about the scope and manner of data collection is provided by the ",
  gaLink: "Google Privacy Policy",
  gaAfter: ".",
  footer:
    "All copyright related to the website belongs to Dr. Kinga Maráz. Dr. Kinga Maráz reserves all further rights related to the www.dentoplant.hu website. Regarding all legal references not discussed, we consider Hungarian legislation and official decisions to be authoritative.",
  footerOwner: "Operator and owner of www.dentoplant.hu: Dr. Kinga Maráz",
};
