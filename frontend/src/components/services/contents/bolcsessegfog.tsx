import { BulletList, Callout, CardGrid, InfoPanel, Lead, Section, SubSection } from "../ui";

export default function BolcsessegfogContent() {
  return (
    <div className="space-y-12">
      <Section title="Amit a bölcsességfogakról tudni érdemes">
        <Lead>
          A bölcsességfogak jellemzően az utolsóként előtörő maradófogaink. 18-25 éves kor körül
          várható megjelenésük, viszont már jóval korábban okozhatnak gondot.
        </Lead>
        <p>
          Bölcsesség helyett inkább panaszokkal nehezítik meg napjainkat: gyakran nem férnek el az
          állkapocsban, ferdén vagy egyáltalán nem törnek elő, nyomják a szomszédos fogat vagy
          egyszerűen fájdalmat okoznak. Problémás bölcsességfoggal érdemes időben fogorvoshoz
          fordulni, így sok álmatlan éjszakától és kellemetlenségtől kímélheti meg magát.
        </p>
      </Section>

      <Section title="Miért különlegesek a bölcsességfogak?">
        <p>
          Bölcsességfogaink a régmúlt maradványai. Az ősidőkben az emberek többnyire olyan nyers
          táplálékon éltek, melyek elfogyasztásához erőteljes rágásra, így minél több és erősebb
          őrlőfogakra, valamint erős rágóizomzatra volt szükség. Az őskori ember életmódja mellett
          a bölcsességfogak a fogív teljes értékű tagjai voltak.
        </p>
        <p>
          A civilizáció azonban a táplálkozásunkat is jelentősen megváltoztatta. Ma sokkal több
          olyan főtt, előkészített ételt fogyasztunk, melyhez már nincs szükség akkora őrlőmunkára.
          Az evolúció során fogazatunk és arcberendezésünk is alkalmazkodott: az állkapocs mérete,
          izomzata csökkent, és a bölcsességfogak lassan „fölöslegessé" váltak.
        </p>
        <p>
          A bölcsességfogak formailag is a legváltozatosabb maradófogaink. Alakjuk nagyon
          különböző, gyökereik formavilága és a gyökércsatorna lefutása szintén sokféle lehet — és
          a legextrémebb helyzetekben is találkozhatunk vele az állkapocsban.
        </p>
      </Section>

      <Section title="Mit nevezünk nehezített fogelőtörésnek?">
        <p>
          A leggyakoribb panaszokat a nehezített fogelőtörés okozza, vagyis az a helyzet, amikor a
          bölcsességfog növekedés közben megakad a csontban vagy szomszédos fogban, és nem
          természetes helyzetben megáll az előtörése. Ezt szaknyelven <em>impakciónak</em> nevezzük.
          Az impaktált bölcsességfogak különböző helyzetekben állhatnak, és a többi fog torlódását,
          a szomszédos fog gyökérfelszívódását, fogágygyulladást, akár tályogot is okozhatnak. A
          részben ínnyel fedett bölcsességfog körüli gyulladás dentális eredetű gócbetegség
          kiindulópontja is lehet.
        </p>
      </Section>

      <Callout
        title="Konzultáljunk a bölcsességfogairól"
        body="Egy vizsgálatot követően pontos képet kap fogainak állapotáról és a szükséges fogászati kezelésekről."
        ctaLabel="Bejelentkezés"
        ctaHref="/kapcsolat"
      />

      <Section title="Milyen panaszokat okozhatnak?">
        <CardGrid
          items={[
            {
              title: "Ínygyulladás (pericoronitis)",
              body: "A növekedésében elakadt bölcsességfog felett átszakad az íny — baktériumok jutnak a tasakba, gyulladást okozva. Kiterjedt esetben szájzárhoz is vezethet.",
            },
            {
              title: "Feszítő fájdalom",
              body: "Klasszikus tünet az alsó állcsontban. Helyhiány esetén a fogcsíra anatómiai akadályba ütközik, ezért nem tud előtörni.",
            },
            {
              title: "Fogfájdalom",
              body: "Erős fogfájdalmat okozhat egy szuvas bölcsességfog vagy az előtte lévő második nagyőrlőfog szuvasodása.",
            },
            {
              title: "Bölcsességfog szuvasodása",
              body: "Egy félig kinőtt bölcsességfogat nehéz tisztítani — könnyen elszuvasodhat, ha évekig félig kinőtt pozícióban marad.",
            },
            {
              title: "Második nagyőrlő szuvasodása",
              body: "A bedőlt bölcsességfog feszül a hetes őrlőfognak, ott szuvasodás alakul ki. Először a bölcsességfog eltávolítása, majd a tömés.",
            },
            {
              title: "Rezorpció (foggyökér felszívódás)",
              body: "A bölcsességfog koronája nekifeszül a hetes fognak, és felszívódást indít be — gyakran nem kezelhető tisztán a fog mélyebb pozíciója miatt.",
            },
            {
              title: "Szájnyitási korlátozottság",
              body: "Maximum 3 cm-es szájnyitás az impaktált bölcsességfog gyulladásának klasszikus tünete; mindenképp kérje fogorvosa segítségét.",
            },
            {
              title: "Szájzár",
              body: "Az alsó és felső metszők éle közötti távolság legfeljebb 1 cm. Az izomgörccsel kísért gyulladás komoly tünet — haladéktalanul forduljon szájsebészhez.",
            },
            {
              title: "Zsibbadás, zsibongás",
              body: "Ritkább tünet: ha az alsó bölcsességfog az állcsontban mélyen, az idegcsatornához közel helyezkedik el, a körülötte kialakult gyulladás könnyen elérheti az idegszálat.",
            },
          ]}
          columns={3}
        />
      </Section>

      <Section title="Bölcsességfog húzás vagy műtéti eltávolítás?">
        <p>
          A bölcsességfogak eltávolítása lehet egy egyszerű foghúzás, de bonyolultabb esetben akár
          egy hosszabb műtéti feltárás is. Az eltávolítás módja és a beavatkozás nehézségi foka
          attól függ, hogy az eltávolítandó bölcsességfog milyen mélyen helyezkedik el az
          állcsontban, milyen pozícióban és milyen anatómiai képletek közelében fekszik.
        </p>
        <p>
          Az olyan szájsebészeti beavatkozások után, mint bölcsességfog eltávolítás, fogbeültetés
          vagy csontpótlás, az orvos tanácsainak pontos betartásával a páciens is sokat tehet
          azért, hogy a gyógyulási folyamat gyorsabb és panaszmentesebb legyen. Javasoljuk, hogy
          műtét után figyeljen magára, lassítson a tempón — adjon magának 2 napot, amit pihenéssel
          tölt.
        </p>
      </Section>

      <Section title="Mikor kell, és mikor nem kell eltávolítani?">
        <p>
          Hogy egy bölcsességfogat el kell-e távolítani, azt a szakirodalmi ajánlások alapján dönti
          el a szájsebész szakorvos. Mindig mérlegelni kell a páciens szempontjából jelentkező
          érveket és ellenérveket.
        </p>
        <SubSection title="El kell távolítani, ha:">
          <BulletList
            items={[
              "Gyulladást okoz, és normális előtörésére nincs remény",
              "A páciens nem tudja megfelelően tisztítani",
              "Nagyon szuvas",
              "Ciszta vagy daganat kiindulópontja",
              "Fogszabályzó kezelés tervezésekor a megfelelő eredmény eléréséhez szükséges",
            ]}
          />
        </SubSection>
        <SubSection title="Nem távolítjuk el, ha:">
          <BulletList
            items={[
              "Elfér a fogívben, a páciens tudja tisztítani, és van vele szemben rágásban résztvevő bölcsességfog",
              "Panaszmentes, és műtéti szempontból kritikus pozícióban helyezkedik el",
            ]}
          />
        </SubSection>
      </Section>

      <InfoPanel title="3 dimenziós CBCT diagnosztika">
        <p>
          A bölcsességfog műtéti eltávolításának megtervezésében nélkülözhetetlen segítséget
          jelent, hogy rendelőnkben 3 dimenziós CT felvételen tudjuk kiértékelni a pontos
          anatómiai helyzetet.
        </p>
        <p>
          A bölcsességfogak radiológiai vizsgálatához a hagyományos panoráma röntgen felvételek
          nem adnak elegendő adatot. Amikor gyanús, figyelmeztető jeleket azonosítunk az OPT
          röntgen felvételen, csak egy 3D CBCT vizsgálattal lehet tisztázni a fog pontos
          anatómiáját. Előfordulnak 90 fokos görbe gyökérhelyzetek, az ideget körbevevő gyökerek,
          vagy az arcüregbe és az alsó állcsont idegcsatornájába belógó gyökerek — ezek
          megítélésében csak a 3 dimenziós felvétel kiértékelésével tud tapasztalt szakember is
          megfelelő döntést hozni.
        </p>
      </InfoPanel>

      <Section title="Az a szerencsés 20%">
        <p>
          A Berni Egyetemen 2020-ban készült tanulmány szerint az európai populációban 20%-ban
          hiányzik valakinek legalább egy bölcsességfoga. Azok között pedig, akiknél egyéb fog
          csírahiánya is kimutatható volt, 50%-ban a bölcsességfog csírahiánya is jelen volt.
        </p>
        <p>
          Egy személyes konzultáció a bölcsességfog eltávolítás megítélésének kérdésében segít a
          személyre szabott és Önnek a legkényelmesebb kezelési megoldást megtalálni.
        </p>
      </Section>
    </div>
  );
}
