import { BulletList, Callout, CardGrid, InfoPanel, Lead, MediaText, ProcessSteps, Section, SubSection } from "../ui";
import { Crossfade } from "../crossfade";
import { GalleryGrid } from "@/components/gallery-grid";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";
import photos from "@/lib/service-photos.json";

function labeled(
  list: { src: string; width: number; height: number }[],
  alt: (i: number) => string,
) {
  return list.map((p, i) => ({ src: p.src, width: p.width, height: p.height, alt: alt(i) }));
}

export default function FogszabalyozasContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  const gal = labeled(
    photos.fogszabalyozas.filter((p) => p.width >= 800),
    (i) => `${c.altGal} (${i + 1})`,
  );
  const oldal = labeled(photos.fogszabalyozas_oldal, (i) => `${c.altPage} (${i + 1})`);
  const fadePairs = [
    [gal[6], gal[7]],
    [gal[10], gal[11]],
    [gal[12], gal[13]],
  ].map((pair) => pair.filter(Boolean) as typeof gal);

  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      {oldal[7] && (
        <MediaText image={oldal[7]}>
          <p>{c.whyBody}</p>
        </MediaText>
      )}

      <Section title={c.whyTitle}>
        <BulletList items={c.why} />
        <p>{c.whyBody}</p>
      </Section>

      <Section title={c.adultTitle}>
        <p>{c.adultBody1}</p>
        {oldal[2] ? (
          <MediaText reverse image={oldal[2]}>
            <p>{c.adultBody2}</p>
          </MediaText>
        ) : (
          <p>{c.adultBody2}</p>
        )}
      </Section>

      <Section title={c.childTitle}>
        <p>{c.childBody1}</p>
        {oldal[3] ? (
          <MediaText image={oldal[3]}>
            <p>{c.childBody2}</p>
          </MediaText>
        ) : (
          <p>{c.childBody2}</p>
        )}
        <InfoPanel title={c.funcTitle}>
          <p>{c.funcBody}</p>
        </InfoPanel>
      </Section>

      <Section title={c.processTitle}>
        <ProcessSteps steps={c.process} />
      </Section>

      <Section title={c.devicesTitle}>
        <p>{c.devicesIntro}</p>
        {c.devices.map((d, i) => (
          <SubSection key={i} title={d.title}>
            <p>{d.body}</p>
            <CardGrid items={d.cards} />
          </SubSection>
        ))}
      </Section>

      <Section title={c.casesTitle}>
        <p>{c.casesIntro}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {fadePairs.map((frames, i) =>
            frames.length >= 2 ? (
              <Crossfade key={i} frames={frames} caption={`${c.fadeCase} ${i + 1}`} />
            ) : null,
          )}
        </div>
        {oldal[8] && <MediaText reverse image={oldal[8]}><p>{c.caseNote}</p></MediaText>}
        <GalleryGrid images={gal.slice(0, 12)} labels={c.galleryLabels} />
      </Section>

      <Section title={c.alignerTitle}>
        {oldal[1] && (
          <MediaText image={oldal[1]}>
            <Lead>{c.alignerLead}</Lead>
          </MediaText>
        )}
        <p>{c.alignerIntro}</p>
        <SubSection title={c.alignerFlowTitle}>
          <p>{c.alignerFlow}</p>
        </SubSection>
        <SubSection title={c.alignerStartTitle}>
          <p>{c.alignerStart}</p>
          <BulletList items={c.alignerSteps} />
        </SubSection>
        <SubSection title={c.alignerCtrlTitle}>
          <p>{c.alignerCtrl}</p>
        </SubSection>
        <SubSection title={c.alignerLifeTitle}>
          <p>{c.alignerLife}</p>
        </SubSection>
        <SubSection title={c.alignerCleanTitle}>
          <p>{c.alignerClean}</p>
        </SubSection>
        <SubSection title={c.alignerProTitle}>
          <BulletList items={c.alignerPros} />
        </SubSection>
        <SubSection title={c.alignerConTitle}>
          <BulletList items={c.alignerCons} />
        </SubSection>
        <p>{c.alignerClose}</p>
      </Section>

      <Callout
        title={c.calloutTitle}
        body={c.calloutBody}
        ctaLabel={c.calloutCta}
        ctaHref={localizeHref("/kapcsolat", locale as Locale)}
      />
    </div>
  );
}

const HU = {
  altGal: "Fogszabályozás a Dentoplant rendelőben",
  altPage: "Fogszabályozó kezelés",
  galleryLabels: { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
  casesTitle: "Esetek — előtte és utána",
  casesIntro: "Néhány kezelési eredmény: a képpárok lassan váltanak a kiindulási és a kész állapoton.",
  fadeCase: "Eset",
  caseNote: "A kezelési tervet mindig a harapás, az esztétika és a szájhigiénia együtt határozza meg.",
  alignerTitle: "Láthatatlan fogszabályozás átlátszó sínekkel, alignerekkel",
  alignerLead:
    "A láthatatlan fogszabályozó technika átlátszó sínek, azaz alignerek számítógéppel modellezett rendszere.",
  alignerIntro:
    "Az alignerek vékony, mélyhúzott vagy 3D-nyomtatott fóliák, amelyeket előre megtervezett setup-modellre készítenek. A terápia több sínnel megy végbe: minden lépéshez tartozik egy setup, amely az előzőtől és a következőtől kicsit különbözik. Az apró lépések sorozata maga a kezelés. A változások számítógépes szimulációval pontosan tervezhetők.",
  alignerFlowTitle: "Az aligneres fogszabályozás menete",
  alignerFlow:
    "Ha a harapási eltérés alignerrel korrigálható, dokumentációs alkalmon intraorális szkennerrel digitális lenyomatot, standardizált száj- és arcfotókat, valamint röntgent vagy CBCT-t készítünk. Az adatokat a fogtechnikai laborba küldjük pontos instrukciókkal. A program a kiindulási és végállapot közötti átmenetet felosztja (például egy fog egy sínnel maximum 0,25 mm-t mozoghat). A kész tervet a kezelőorvos és a páciens elfogadja, majd a síneket 3D-nyomtatott mintákra mélyhúzzák, vagy közvetlenül nyomtatják.",
  alignerStartTitle: "A kezelés elkezdése",
  alignerStart:
    "Összetettebb esetek is kezelhetők, de szakértelmet igényelnek. Attachmentek és interproximális redukció (IPR) egészíthetik ki a mozgást. A felhelyezés lépései:",
  alignerSteps: [
    "Izoláció — a fogfelszínt távol kell tartani a lágyrészektől és a nyáltól",
    "Alapos tisztítás",
    "Savazás ortofoszforsavval 30 másodpercig, lemosás, szárítás",
    "Bond felvitele, polimerizációs lámpával",
    "Attachmentek felragasztása a fogtechnikai sablonnal",
    "Szükség esetén fájdalommentes interproximális redukció",
    "A sín felpróbálása, instruálás, fotózás",
  ],
  alignerCtrlTitle: "Mi zajlik a kontrollok során?",
  alignerCtrl:
    "A kontrollok rövidek, körülbelül 15 percesek: ellenőrizzük, hogy minden a terv szerint halad-e, fotódokumentáció készül, és átadjuk a következő síneket. Általában 4–6 hetente.",
  alignerLifeTitle: "Élet láthatatlan fogszabályozóval",
  alignerLife:
    "A síneket a nap 22–24 órájában kell hordani, csak fogmosáskor és étkezéskor vehetők ki. Egy alignert általában 2 hétig viselünk. Túl gyors csere növeli a komplikációkat. Ha a sín nem illeszkedik, tovább kell hordani az aktuálisat. Enyhébb fogérzékenység előfordulhat. Enni-inni tilos a sínnel, kizárólag víz megengedett. Cukros étel után fogmosás nélkül visszahelyezve a fogak a sín alatt szuvasodhatnak. Az elhasznált síneket a kezelés végéig meg kell őrizni. Nem szabad zsebben hordani vagy napon hagyni.",
  alignerCleanTitle: "A láthatatlan fogszabályozó tisztítása",
  alignerClean:
    "Hideg vagy langyos víz és fogkefe. Kaphatók aligner-tisztító tabletták vagy habok (például Curaprox Aligner hab). Forró víz deformálhatja a sínt.",
  alignerProTitle: "Előnyük",
  alignerPros: [
    "a készülék szinte észrevehetetlen",
    "könnyen eltávolítható étkezés előtt",
    "nincs elem, amely mögé az étel beszorulna",
    "nem kell az étrendet korlátozni",
    "nem akadályozza a fogselymet és a fogmosást",
    "rövidebb kontrollok, kényelmesebb a hagyományosnál",
  ],
  alignerConTitle: "Hátrányuk",
  alignerCons: [
    "nem minden harapási rendellenesség korrekciójára alkalmazható",
    "az eredmény a páciens együttműködésétől függ — minimum 22 óra napi hordás",
  ],
  alignerClose:
    "A láthatatlan fogszabályozásnál fontos, hogy a páciens tájékozott legyen a módszer előnyeiről és hátrányairól. Ha felkeltette az érdeklődését, forduljon szakorvosunkhoz bizalommal.",
  introTitle: "Fájdalommentes fogszabályozás Szegeden",
  introLead:
    "Életkortól függetlenül, személyre szabott megoldást biztosítunk a makulátlan, rendezett mosoly elérésére.",
  introBody:
    "A szakorvosaink által megtervezett fogszabályozó kezelésre tekinthet úgy, akár egy egészségügyi-szépészeti befektetésre, amelyet egy életen át kamatoztatni tud majd. A fogszabályozás az esztétikus fogsor elérésén túl a rágófunkció helyreállításában, így az életminőség javításában is szerepet játszik.",
  whyTitle: "Miért érdemes belevágni?",
  why: [
    "A harapási rendellenességek miatt nehezítetté válhat a rágás, beszéd, légzés — a nem megfelelő érintkezés miatt a fogak túlterhelődhetnek, ami később fogvesztéssel járhat.",
    "Fogtorlódás esetén nehézkesebb a tisztítás, ami fogínygyulladáshoz és fogszuvasodáshoz vezet.",
    "A helytelen harapás állkapocs ízületi problémákat (pl. fájdalom, kattogás) is eredményezhet.",
  ],
  whyBody:
    "A fogszabályozó kezelés célja mindezen problémák együttes kezelése a harmonikusan illeszkedő, szabályos fogívek megteremtésével.",
  adultTitle: "Felnőtt fogszabályozás — nem késő belevágni",
  adultBody1:
    "Fogszabályozni felnőttkorban is lehet. Egy harmonikus, magabiztos mosollyal pozitív energiát tükrözünk — az esztétikai igények mellett pedig nem hagyhatjuk figyelmen kívül az orvosi és egészségügyi szempontokat sem. A felnőttkori fogszabályozás szükséges lehet pótlások előkészítésénél is: ha egy implantátum számára kevés a hely, és célunk rést nyitni a fogszabályozóval; vagy foghiány mellett bedőlt fogak felegyenesítésénél; front torlódás megszüntetésénél, és számos egyéb esetben.",
  adultBody2: (
    <>
      Ma már az elváltozások súlyosságától függően, és a kezelési céloknak megfelelően sokféle
      készülék és technológia áll rendelkezésünkre. Tudni kell azonban, hogy állcsontnövekedéssel
      felnőttkorban már nem számolhatunk — komplex dento-skeletális elváltozás korrekt ellátása
      olykor állcsont áthelyező műtétet jelenthet. Akik zavarónak érzik a hagyományos fém
      fogszabályozókat, számukra remek alternatíva a láthatatlan fogszabályozás, azon belül is a
      rendelőnkben alkalmazott professzionális <strong>Clear Correct™</strong> rendszer.
    </>
  ),
  childTitle: "Gyermekkori fogszabályozás — irány a suli!",
  childBody1: (
    <>
      Fontos a gyermekek rendszeres fogorvosi vizsgálata, hiszen korán kiszűrhetők azok az
      elváltozások, amelyek szükségessé tehetik a fogszabályozást. Figyelmeztető jel lehet a nyitott
      szájtartás, a gátolt orrlégzés és a beszédhiba is. Érdemes gyermekét már{" "}
      <strong>6-7 éves korban</strong> egy első konzultációra elhozni rendelőnkbe.
    </>
  ),
  childBody2:
    "Ekkor felmérjük a növekedési tendenciát, a fogak előtörésének várható idejét, és kiszűrjük a gyermekkori rossz szokások miatt kialakuló esetleges rendellenességeket. Nem kell megvárnunk, hogy az összes tejfog leváltódjon — még az előtt el lehet kezdeni akár a kivehető készülékes kezelést is. Ez a leghatékonyabb időszak, mivel befolyásolhatjuk és irányítani tudjuk az állcsontok növekedését. Ha ezt elmulasztjuk, akkor egyes rendellenességek később már csak sebészi módszerekkel korrigálhatók.",
  funcTitle: "A funkcionális készülékek használata",
  funcBody: (
    <>
      Sokan helytelenül „éjszakai készüléknek” hívják ezeket — viszont az eredményesség érdekében
      naponta minimum <strong>12-14 órát</strong> szükséges viselni. A funkcionális kezelést követheti
      a rögzített készülékkel végzett második szakasz, amikor beállítjuk a hibátlan fogsorzáródást.
      Esetenként elegendő lehet csupán a kivehető készülék is.
    </>
  ),
  processTitle: "A kezelés folyamata",
  process: [
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
  ],
  devicesTitle: "Fogszabályozó készülékek",
  devicesIntro:
    "Manapság már szinte bármilyen fogászati rendellenesség orvosolható a megfelelő készülékkel. A rögzítés módját tekintve megkülönböztetünk kivehető és rögzített készülékeket.",
  devices: [
    {
      title: "Kivehető készülékek",
      body: "A páciens által könnyedén eltávolítható eszközök, amelyek általában műanyagból készülnek, de tartalmazhatnak fém részeket is (labiál ív, drótkapcsok, csavar).",
      cards: [
        {
          title: "Előnyök",
          body: "Könnyen tisztíthatóak; nem akadályozzák a szájhigiéniát; kevésbé szembetűnőek; gyermekkorban pozitívan befolyásolják az állcsontok fejlődését.",
        },
        {
          title: "Hátrány",
          body: "A megfelelő hordási idő (napi 12-14 óra) elengedhetetlen a hatás kifejtéséhez.",
        },
      ],
    },
    {
      title: "Hagyományos, rögzített fogszabályozó",
      body: "A bracketeket és az ívet drót- vagy gumigyűrű tartja a helyén, melyeket minden aktiváláskor cserélni kell.",
      cards: [
        {
          title: "Előnyök",
          body: "Hatékonyak; a legolcsóbb megoldás; rengeteg színből választhat gumigyűrűt.",
        },
        {
          title: "Hátrányok",
          body: "Hosszabb a kezelési idő; gyakrabban kell aktiválni; kevésbé tágítható velük a fogív, így több a foghúzással kombinált eset.",
        },
      ],
    },
    {
      title: "Önligírozó, rögzített fogszabályozó",
      body: "A modernebb csoport — a bracketbe épített zárszerkezet rögzíti az ívet, gumi vagy drótligatúra nélkül.",
      cards: [
        {
          title: "Előnyök",
          body: "Ritkábban kell aktiválni; rövidebb az aktiválás és a teljes kezelés; könnyebben tisztán tarthatók.",
        },
        { title: "Hátrány", body: "Drágábbak, mint a hagyományos készülékek." },
      ],
    },
    {
      title: "Láthatatlan fogszabályozó — Clear Correct™",
      body: "Átlátszó sínek (alignerek) számítógéppel modellezett rendszere. Vékony, mélyhúzott vagy 3D-nyomtatott fóliák, amelyek előre megtervezett setup-modellekre készülnek — a kezelés több aligner sorozatából áll, melyek egymást követik és apró lépésekben mozgatják a fogakat. A Clear Correct™ a fogászat és implantológia területén jól ismert Straumann cég rendszere.",
      cards: [
        {
          title: "Előnyök",
          body: "Szinte észrevehetetlen; étkezés előtt eltávolítható; nincs étkezési korlátozás; nem akadályozza a fogselyem és a fogkefe használatát; rövidebb kontrollok; kényelmesebb a hagyományosnál.",
        },
        {
          title: "Hátrány",
          body: "Nem minden harapási rendellenesség korrekciójára alkalmas — szakorvosi mérlegelés szükséges.",
        },
      ],
    },
  ],
  calloutTitle: "Kérjen konzultációs időpontot",
  calloutBody:
    "Az első személyes találkozó során átbeszéljük az igényeit, és az azokhoz igazított legmegfelelőbb kezelési lehetőségeket — kortól és nemtől függetlenül, személyre szabottan.",
  calloutCta: "Kapcsolatfelvétel",
};

const EN = {
  altGal: "Orthodontics at the Dentoplant clinic",
  altPage: "Orthodontic treatment",
  galleryLabels: { close: "Close", prev: "Previous image", next: "Next image" },
  casesTitle: "Cases — before and after",
  casesIntro: "A few treatment results: the pairs fade slowly between the starting and finished state.",
  fadeCase: "Case",
  caseNote: "The plan is always set by bite, aesthetics and oral hygiene together.",
  alignerTitle: "Invisible orthodontics with clear trays, aligners",
  alignerLead:
    "Invisible orthodontics is a computer-modelled system of transparent trays — aligners.",
  alignerIntro:
    "Aligners are thin thermoformed or 3D-printed foils made on a planned setup model. Treatment uses several trays: each step has a setup slightly different from the last. The sequence of small steps is the treatment. Changes can be planned accurately with computer simulation.",
  alignerFlowTitle: "How aligner treatment proceeds",
  alignerFlow:
    "If the bite discrepancy can be corrected with aligners, we take a digital impression with an intraoral scanner, standardised oral and facial photos, and X-rays or CBCT. Data go to the lab with precise instructions. The software splits the path from start to finish (for example a tooth may move at most 0.25 mm per tray). After the plan is approved, trays are thermoformed on 3D-printed models or printed directly.",
  alignerStartTitle: "Starting treatment",
  alignerStart:
    "More complex cases can also be treated, but they need expertise. Attachments and interproximal reduction (IPR) may supplement movement. Placement steps:",
  alignerSteps: [
    "Isolation — keep the tooth surface away from soft tissue and saliva",
    "Thorough cleaning",
    "Etching with orthophosphoric acid for 30 seconds, rinse, dry",
    "Bond, light-cured",
    "Bonding attachments with the lab template",
    "Pain-free interproximal reduction if needed",
    "Try-in, instruction, photography",
  ],
  alignerCtrlTitle: "What happens at check-ups?",
  alignerCtrl:
    "Visits are short, about 15 minutes: we check that everything follows the plan, take photos and hand over the next trays. Usually every 4–6 weeks.",
  alignerLifeTitle: "Life with invisible braces",
  alignerLife:
    "Trays should be worn 22–24 hours a day, removed only for brushing and eating. One aligner is usually worn for 2 weeks. Changing too fast raises complications. If a tray does not fit, keep wearing the current one. Mild sensitivity can occur. No eating or drinking with the tray except water. Sugary food without brushing lets teeth soak under the tray. Keep used trays until the end of treatment. Do not carry them in a pocket or leave them in the sun.",
  alignerCleanTitle: "Cleaning invisible braces",
  alignerClean:
    "Cold or lukewarm water and a toothbrush. Aligner cleaning tablets or foams (e.g. Curaprox Aligner foam) are available. Hot water can warp the tray.",
  alignerProTitle: "Advantages",
  alignerPros: [
    "almost invisible",
    "easy to remove before eating",
    "no elements for food to lodge behind",
    "no dietary restriction",
    "does not hinder floss or brushing",
    "shorter visits, more comfortable than fixed braces",
  ],
  alignerConTitle: "Disadvantages",
  alignerCons: [
    "not suitable for every bite discrepancy",
    "result depends on cooperation — at least 22 hours a day",
  ],
  alignerClose:
    "With invisible orthodontics it matters that the patient knows both the advantages and the drawbacks. If it interests you, talk to our specialist.",
  introTitle: "Pain-free orthodontics in Szeged",
  introLead:
    "Regardless of age, we provide a personalised solution for achieving a flawless, well-ordered smile.",
  introBody:
    "You can regard the orthodontic treatment planned by our specialists as a health and beauty investment that you will be able to benefit from for a lifetime. Beyond achieving an aesthetic set of teeth, orthodontics also plays a role in restoring chewing function and thus in improving quality of life.",
  whyTitle: "Why is it worth getting started?",
  why: [
    "Bite disorders can make chewing, speaking and breathing more difficult — due to improper contact the teeth can become overloaded, which can later lead to tooth loss.",
    "In the case of crowding, cleaning is more difficult, which leads to gum inflammation and tooth decay.",
    "An incorrect bite can also result in jaw joint problems (e.g. pain, clicking).",
  ],
  whyBody:
    "The aim of orthodontic treatment is to address all these problems together by creating harmoniously fitting, regular dental arches.",
  adultTitle: "Adult orthodontics — it's not too late to start",
  adultBody1:
    "Orthodontic treatment is possible in adulthood too. With a harmonious, confident smile we radiate positive energy — and besides aesthetic needs, we cannot ignore the medical and health aspects either. Adult orthodontics can also be necessary when preparing for restorations: if there is little space for an implant and our goal is to open a gap with the appliance; or when uprighting teeth that have tilted next to a gap; when eliminating front crowding, and in many other cases.",
  adultBody2: (
    <>
      Today, depending on the severity of the changes and according to the treatment goals, a wide
      variety of appliances and technologies are available to us. However, it should be known that
      jaw growth can no longer be counted on in adulthood — the proper treatment of a complex
      dento-skeletal change can sometimes mean jaw-repositioning surgery. For those who find
      traditional metal braces disturbing, invisible orthodontics is a great alternative, and within
      that the professional <strong>Clear Correct™</strong> system used in our clinic.
    </>
  ),
  childTitle: "Childhood orthodontics — off to school!",
  childBody1: (
    <>
      Regular dental check-ups for children are important, since the changes that may make
      orthodontics necessary can be screened early. An open mouth posture, obstructed nasal breathing
      and a speech impediment can also be warning signs. It is worth bringing your child to our clinic
      for a first consultation already at <strong>6-7 years of age</strong>.
    </>
  ),
  childBody2:
    "At this point we assess the growth tendency, the expected timing of tooth eruption, and screen for any disorders developing due to childhood bad habits. We do not have to wait for all the milk teeth to be replaced — even before that, removable appliance treatment can be started. This is the most effective period, since we can influence and guide the growth of the jaws. If we miss this, some disorders can later only be corrected by surgical methods.",
  funcTitle: "Using functional appliances",
  funcBody: (
    <>
      Many people incorrectly call these “night appliances” — however, for effectiveness they need to
      be worn a minimum of <strong>12-14 hours</strong> a day. The functional treatment can be
      followed by a second phase with a fixed appliance, when we set the flawless bite. In some cases
      the removable appliance alone may be enough.
    </>
  ),
  processTitle: "The course of the treatment",
  process: [
    {
      title: "First consultation",
      body: "At a pre-arranged appointment we discuss the needs and the goal to be achieved. Functional examination, oral hygiene and assessment of the condition of the teeth. Perfect oral hygiene and the treatment of existing decay are basic requirements, since after placing the appliance cleaning and other dental care become more difficult.",
    },
    {
      title: "Documentation",
      body: "Taking X-rays, photos and impressions. Based on the evaluation we determine the exact treatment plan. It is important that by this time the patient has orderly oral hygiene and dentition.",
    },
    {
      title: "Treatment plan and quotation",
      body: "A detailed discussion of the personalised treatment plan and the presentation of the quotation. We place great emphasis on everything being understandable — if you agree, the appliance order begins.",
    },
    {
      title: "Placing the appliance",
      body: "Bonding the fixed appliance is precise work, since the position of the brackets determines the future position of the teeth. Modern adhesives protect the tooth, release fluoride and set immediately under the light of a special lamp. After this we give you practical advice: sensitivity, eating, brushing with the appliance.",
    },
    {
      title: "Activation and check-up",
      body: "With a fixed appliance, regular (usually monthly) check-ups must be ensured. This is when the check, and if necessary the archwire change and the placement of elastic elements and springs, takes place. After activation there may be a few days of tooth sensitivity.",
    },
  ],
  devicesTitle: "Orthodontic appliances",
  devicesIntro:
    "Nowadays almost any dental disorder can be remedied with the appropriate appliance. In terms of the way they are attached, we distinguish between removable and fixed appliances.",
  devices: [
    {
      title: "Removable appliances",
      body: "Devices that can be easily removed by the patient, usually made of plastic but which can also contain metal parts (labial arch, wire clasps, screw).",
      cards: [
        {
          title: "Advantages",
          body: "Easy to clean; they do not hinder oral hygiene; less conspicuous; in childhood they positively influence the development of the jaws.",
        },
        {
          title: "Disadvantage",
          body: "Proper wearing time (12-14 hours a day) is indispensable for the effect to develop.",
        },
      ],
    },
    {
      title: "Traditional fixed braces",
      body: "The brackets and the archwire are held in place by a wire or elastic ring, which must be replaced at every activation.",
      cards: [
        {
          title: "Advantages",
          body: "Effective; the cheapest solution; you can choose the elastic rings from many colours.",
        },
        {
          title: "Disadvantages",
          body: "Longer treatment time; more frequent activation needed; the dental arch can be expanded less with them, so there are more extraction-combined cases.",
        },
      ],
    },
    {
      title: "Self-ligating fixed braces",
      body: "The more modern group — a locking mechanism built into the bracket holds the archwire, without an elastic or wire ligature.",
      cards: [
        {
          title: "Advantages",
          body: "Less frequent activation needed; shorter activation and overall treatment; easier to keep clean.",
        },
        { title: "Disadvantage", body: "More expensive than traditional appliances." },
      ],
    },
    {
      title: "Invisible braces — Clear Correct™",
      body: "A computer-modelled system of transparent trays (aligners). Thin, thermoformed or 3D-printed foils made on pre-designed setup models — the treatment consists of a series of aligners that follow one another and move the teeth in tiny steps. Clear Correct™ is the system of Straumann, a company well known in the field of dentistry and implantology.",
      cards: [
        {
          title: "Advantages",
          body: "Almost imperceptible; removable before eating; no dietary restrictions; does not hinder the use of dental floss and toothbrush; shorter check-ups; more comfortable than traditional ones.",
        },
        {
          title: "Disadvantage",
          body: "Not suitable for correcting every bite disorder — specialist assessment is needed.",
        },
      ],
    },
  ],
  calloutTitle: "Request a consultation appointment",
  calloutBody:
    "During the first personal meeting we discuss your needs and the most appropriate treatment options tailored to them — regardless of age and gender, personalised.",
  calloutCta: "Get in touch",
};
