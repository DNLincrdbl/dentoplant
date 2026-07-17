import { BulletList, Callout, CardGrid, InfoPanel, Lead, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function BolcsessegfogContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      <Section title={c.specialTitle}>
        {c.special.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section title={c.impactedTitle}>
        <p>{c.impactedBody}</p>
      </Section>

      <Callout
        title={c.calloutTitle}
        body={c.calloutBody}
        ctaLabel={c.calloutCta}
        ctaHref={localizeHref("/kapcsolat", locale as Locale)}
      />

      <Section title={c.complaintsTitle}>
        <CardGrid items={c.complaints} columns={3} />
      </Section>

      <Section title={c.removalTitle}>
        <p>{c.removalBody1}</p>
        <p>{c.removalBody2}</p>
      </Section>

      <Section title={c.whenTitle}>
        <p>{c.whenBody}</p>
        <SubSection title={c.whenYesTitle}>
          <BulletList items={c.whenYes} />
        </SubSection>
        <SubSection title={c.whenNoTitle}>
          <BulletList items={c.whenNo} />
        </SubSection>
      </Section>

      <InfoPanel title={c.cbctTitle}>
        <p>{c.cbctBody1}</p>
        <p>{c.cbctBody2}</p>
      </InfoPanel>

      <Section title={c.luckyTitle}>
        <p>{c.luckyBody1}</p>
        <p>{c.luckyBody2}</p>
      </Section>
    </div>
  );
}

const HU = {
  introTitle: "Amit a bölcsességfogakról tudni érdemes",
  introLead:
    "A bölcsességfogak jellemzően az utolsóként előtörő maradófogaink. 18-25 éves kor körül várható megjelenésük, viszont már jóval korábban okozhatnak gondot.",
  introBody:
    "Bölcsesség helyett inkább panaszokkal nehezítik meg napjainkat: gyakran nem férnek el az állkapocsban, ferdén vagy egyáltalán nem törnek elő, nyomják a szomszédos fogat vagy egyszerűen fájdalmat okoznak. Problémás bölcsességfoggal érdemes időben fogorvoshoz fordulni, így sok álmatlan éjszakától és kellemetlenségtől kímélheti meg magát.",
  specialTitle: "Miért különlegesek a bölcsességfogak?",
  special: [
    "Bölcsességfogaink a régmúlt maradványai. Az ősidőkben az emberek többnyire olyan nyers táplálékon éltek, melyek elfogyasztásához erőteljes rágásra, így minél több és erősebb őrlőfogakra, valamint erős rágóizomzatra volt szükség. Az őskori ember életmódja mellett a bölcsességfogak a fogív teljes értékű tagjai voltak.",
    "A civilizáció azonban a táplálkozásunkat is jelentősen megváltoztatta. Ma sokkal több olyan főtt, előkészített ételt fogyasztunk, melyhez már nincs szükség akkora őrlőmunkára. Az evolúció során fogazatunk és arcberendezésünk is alkalmazkodott: az állkapocs mérete, izomzata csökkent, és a bölcsességfogak lassan „fölöslegessé” váltak.",
    "A bölcsességfogak formailag is a legváltozatosabb maradófogaink. Alakjuk nagyon különböző, gyökereik formavilága és a gyökércsatorna lefutása szintén sokféle lehet — és a legextrémebb helyzetekben is találkozhatunk vele az állkapocsban.",
  ],
  impactedTitle: "Mit nevezünk nehezített fogelőtörésnek?",
  impactedBody:
    "A leggyakoribb panaszokat a nehezített fogelőtörés okozza, vagyis az a helyzet, amikor a bölcsességfog növekedés közben megakad a csontban vagy szomszédos fogban, és nem természetes helyzetben megáll az előtörése. Ezt szaknyelven impakciónak nevezzük. Az impaktált bölcsességfogak különböző helyzetekben állhatnak, és a többi fog torlódását, a szomszédos fog gyökérfelszívódását, fogágygyulladást, akár tályogot is okozhatnak. A részben ínnyel fedett bölcsességfog körüli gyulladás dentális eredetű gócbetegség kiindulópontja is lehet.",
  calloutTitle: "Konzultáljunk a bölcsességfogairól",
  calloutBody:
    "Egy vizsgálatot követően pontos képet kap fogainak állapotáról és a szükséges fogászati kezelésekről.",
  calloutCta: "Bejelentkezés",
  complaintsTitle: "Milyen panaszokat okozhatnak?",
  complaints: [
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
  ],
  removalTitle: "Bölcsességfog húzás vagy műtéti eltávolítás?",
  removalBody1:
    "A bölcsességfogak eltávolítása lehet egy egyszerű foghúzás, de bonyolultabb esetben akár egy hosszabb műtéti feltárás is. Az eltávolítás módja és a beavatkozás nehézségi foka attól függ, hogy az eltávolítandó bölcsességfog milyen mélyen helyezkedik el az állcsontban, milyen pozícióban és milyen anatómiai képletek közelében fekszik.",
  removalBody2:
    "Az olyan szájsebészeti beavatkozások után, mint bölcsességfog eltávolítás, fogbeültetés vagy csontpótlás, az orvos tanácsainak pontos betartásával a páciens is sokat tehet azért, hogy a gyógyulási folyamat gyorsabb és panaszmentesebb legyen. Javasoljuk, hogy műtét után figyeljen magára, lassítson a tempón — adjon magának 2 napot, amit pihenéssel tölt.",
  whenTitle: "Mikor kell, és mikor nem kell eltávolítani?",
  whenBody:
    "Hogy egy bölcsességfogat el kell-e távolítani, azt a szakirodalmi ajánlások alapján dönti el a szájsebész szakorvos. Mindig mérlegelni kell a páciens szempontjából jelentkező érveket és ellenérveket.",
  whenYesTitle: "El kell távolítani, ha:",
  whenYes: [
    "Gyulladást okoz, és normális előtörésére nincs remény",
    "A páciens nem tudja megfelelően tisztítani",
    "Nagyon szuvas",
    "Ciszta vagy daganat kiindulópontja",
    "Fogszabályzó kezelés tervezésekor a megfelelő eredmény eléréséhez szükséges",
  ],
  whenNoTitle: "Nem távolítjuk el, ha:",
  whenNo: [
    "Elfér a fogívben, a páciens tudja tisztítani, és van vele szemben rágásban résztvevő bölcsességfog",
    "Panaszmentes, és műtéti szempontból kritikus pozícióban helyezkedik el",
  ],
  cbctTitle: "3 dimenziós CBCT diagnosztika",
  cbctBody1:
    "A bölcsességfog műtéti eltávolításának megtervezésében nélkülözhetetlen segítséget jelent, hogy rendelőnkben 3 dimenziós CT felvételen tudjuk kiértékelni a pontos anatómiai helyzetet.",
  cbctBody2:
    "A bölcsességfogak radiológiai vizsgálatához a hagyományos panoráma röntgen felvételek nem adnak elegendő adatot. Amikor gyanús, figyelmeztető jeleket azonosítunk az OPT röntgen felvételen, csak egy 3D CBCT vizsgálattal lehet tisztázni a fog pontos anatómiáját. Előfordulnak 90 fokos görbe gyökérhelyzetek, az ideget körbevevő gyökerek, vagy az arcüregbe és az alsó állcsont idegcsatornájába belógó gyökerek — ezek megítélésében csak a 3 dimenziós felvétel kiértékelésével tud tapasztalt szakember is megfelelő döntést hozni.",
  luckyTitle: "Az a szerencsés 20%",
  luckyBody1:
    "A Berni Egyetemen 2020-ban készült tanulmány szerint az európai populációban 20%-ban hiányzik valakinek legalább egy bölcsességfoga. Azok között pedig, akiknél egyéb fog csírahiánya is kimutatható volt, 50%-ban a bölcsességfog csírahiánya is jelen volt.",
  luckyBody2:
    "Egy személyes konzultáció a bölcsességfog eltávolítás megítélésének kérdésében segít a személyre szabott és Önnek a legkényelmesebb kezelési megoldást megtalálni.",
};

const EN = {
  introTitle: "What is worth knowing about wisdom teeth",
  introLead:
    "Wisdom teeth are typically the last of our permanent teeth to erupt. Their appearance is expected around the age of 18-25, but they can cause trouble much earlier.",
  introBody:
    "Instead of wisdom, they tend to complicate our days with complaints: they often do not fit in the jaw, erupt crooked or not at all, press on the neighbouring tooth or simply cause pain. With a problematic wisdom tooth it is worth seeing a dentist in time, sparing yourself many sleepless nights and much discomfort.",
  specialTitle: "Why are wisdom teeth special?",
  special: [
    "Our wisdom teeth are relics of the distant past. In ancient times people mostly lived on raw food that required forceful chewing, so as many and as strong molars as possible and strong chewing muscles were needed. With the lifestyle of prehistoric humans, wisdom teeth were full-fledged members of the dental arch.",
    "Civilisation, however, significantly changed our diet as well. Today we eat far more cooked, prepared food that no longer requires such grinding work. Over the course of evolution, our dentition and facial structure also adapted: the size and musculature of the jaw decreased, and wisdom teeth slowly became “superfluous”.",
    "Wisdom teeth are also our most varied permanent teeth in form. Their shape is very diverse, the form of their roots and the course of the root canal can also be very varied — and we can encounter it in the most extreme positions in the jaw.",
  ],
  impactedTitle: "What do we call difficult eruption?",
  impactedBody:
    "The most common complaints are caused by difficult eruption, i.e. the situation when the wisdom tooth gets stuck in the bone or a neighbouring tooth while growing, and its eruption stops in a non-natural position. In professional terms this is called impaction. Impacted wisdom teeth can be in various positions and can cause crowding of the other teeth, root resorption of the neighbouring tooth, periodontal inflammation, even an abscess. Inflammation around a partially gum-covered wisdom tooth can also be the starting point of a dental-origin focal disease.",
  calloutTitle: "Let's consult about your wisdom teeth",
  calloutBody:
    "After an examination you receive an accurate picture of the condition of your teeth and the necessary dental treatments.",
  calloutCta: "Book now",
  complaintsTitle: "What complaints can they cause?",
  complaints: [
    {
      title: "Gum inflammation (pericoronitis)",
      body: "The gum tears over a wisdom tooth stuck in its growth — bacteria enter the pocket, causing inflammation. In extensive cases it can even lead to lockjaw.",
    },
    {
      title: "Pressing pain",
      body: "A classic symptom in the lower jaw. In case of lack of space, the tooth germ meets an anatomical obstacle and therefore cannot erupt.",
    },
    {
      title: "Toothache",
      body: "A decayed wisdom tooth or decay of the second molar in front of it can cause severe toothache.",
    },
    {
      title: "Decay of the wisdom tooth",
      body: "A half-erupted wisdom tooth is hard to clean — it can easily decay if it stays in a half-erupted position for years.",
    },
    {
      title: "Decay of the second molar",
      body: "A tilted wisdom tooth presses against the second molar, where decay develops. First the removal of the wisdom tooth, then the filling.",
    },
    {
      title: "Resorption (root resorption)",
      body: "The crown of the wisdom tooth presses against the second molar and triggers resorption — often it cannot be treated cleanly due to the tooth's deeper position.",
    },
    {
      title: "Limited mouth opening",
      body: "A maximum mouth opening of 3 cm is a classic symptom of inflammation of an impacted wisdom tooth; be sure to ask your dentist for help.",
    },
    {
      title: "Lockjaw (trismus)",
      body: "The distance between the edges of the lower and upper incisors is at most 1 cm. Inflammation accompanied by muscle spasm is a serious symptom — see an oral surgeon immediately.",
    },
    {
      title: "Numbness, tingling",
      body: "A rarer symptom: if the lower wisdom tooth is located deep in the jaw, close to the nerve canal, the inflammation around it can easily reach the nerve fibre.",
    },
  ],
  removalTitle: "Wisdom tooth extraction or surgical removal?",
  removalBody1:
    "Removing wisdom teeth can be a simple extraction, but in more complicated cases it can even be a longer surgical exposure. The method of removal and the difficulty of the procedure depend on how deep the wisdom tooth to be removed lies in the jaw, in what position, and near which anatomical structures it is located.",
  removalBody2:
    "After oral surgery procedures such as wisdom tooth removal, implant placement or bone grafting, by precisely following the doctor's advice the patient can also do a lot to make the healing process faster and more comfortable. We recommend that after surgery you take care of yourself, slow down the pace — give yourself 2 days to spend resting.",
  whenTitle: "When should and when should they not be removed?",
  whenBody:
    "Whether a wisdom tooth should be removed is decided by the oral surgeon based on the recommendations in the literature. The arguments for and against from the patient's perspective must always be weighed.",
  whenYesTitle: "It must be removed if:",
  whenYes: [
    "It causes inflammation and there is no hope of normal eruption",
    "The patient cannot clean it properly",
    "It is very decayed",
    "It is the starting point of a cyst or tumour",
    "It is necessary for achieving the proper result when planning orthodontic treatment",
  ],
  whenNoTitle: "We do not remove it if:",
  whenNo: [
    "It fits in the dental arch, the patient can clean it, and there is an opposing wisdom tooth participating in chewing",
    "It is symptom-free and located in a surgically critical position",
  ],
  cbctTitle: "3-dimensional CBCT diagnostics",
  cbctBody1:
    "In planning the surgical removal of a wisdom tooth, it is an indispensable help that in our clinic we can evaluate the exact anatomical situation on a 3-dimensional CT scan.",
  cbctBody2:
    "For the radiological examination of wisdom teeth, traditional panoramic X-rays do not provide enough data. When we identify suspicious, warning signs on the OPG X-ray, only a 3D CBCT examination can clarify the exact anatomy of the tooth. There are 90-degree curved root positions, roots surrounding the nerve, or roots protruding into the maxillary sinus and the nerve canal of the lower jaw — in assessing these, even an experienced specialist can only make the right decision by evaluating the 3-dimensional scan.",
  luckyTitle: "That lucky 20%",
  luckyBody1:
    "According to a 2020 study at the University of Bern, in 20% of the European population someone is missing at least one wisdom tooth. And among those who also had a congenital absence of other teeth, the congenital absence of the wisdom tooth was also present in 50% of cases.",
  luckyBody2:
    "A personal consultation on the question of assessing wisdom tooth removal helps to find the personalised treatment solution that is most comfortable for you.",
};
