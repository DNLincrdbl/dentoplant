import { BulletList, Callout, CardGrid, InfoPanel, Lead, MediaText, Section, SubSection } from "../ui";
import { GalleryGrid } from "@/components/gallery-grid";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";
import photos from "@/lib/service-photos.json";

export default function GyermekfogaszatContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  const imgs = photos.gyermek.map((p, i) => ({
    src: p.src,
    width: p.width,
    height: p.height,
    alt: `${c.alt} (${i + 1})`,
  }));
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody1}</p>
        <p>{c.introBody2}</p>
      </Section>

      <Section title={c.whenBrushTitle}>
        {imgs[0] ? (
          <MediaText image={imgs[0]}>
            <p>{c.whenBrushBody}</p>
          </MediaText>
        ) : (
          <p>{c.whenBrushBody}</p>
        )}
      </Section>


      <Section title={c.checkTitle}>
        <p>{c.checkBody}</p>
        <InfoPanel title={c.sealTitle}>
          <p>{c.sealBody1}</p>
          <p>{c.sealBody2}</p>
        </InfoPanel>
      </Section>

      <Section title={c.traumaTitle}>
        <p>{c.traumaBody1}</p>
        <p>{c.traumaBody2}</p>
      </Section>

      <Section title={c.thumbTitle}>
        <p>{c.thumbBody1}</p>
        <p>{c.thumbBody2}</p>
      </Section>

      <Section title={c.cariesTitle}>
        <p>{c.cariesBody1}</p>
        <p>{c.cariesBody2}</p>
        <SubSection title={c.causesTitle}>
          <CardGrid items={c.causes} />
          <p>{c.causesBody}</p>
        </SubSection>
      </Section>

      <Section title={c.twoRowsTitle}>
        <p>{c.twoRowsBody}</p>
      </Section>

      <GalleryGrid images={imgs.slice(1)} labels={c.galleryLabels} />

      <Callout
        title={c.calloutTitle}
        body={c.calloutBody}
        ctaLabel={c.calloutCta}
        ctaHref={localizeHref("/kapcsolat", locale as Locale)}
      />

      <Section title={c.blogTitle}>
        <Lead>{c.blogLead}</Lead>
        <p>{c.blogIntro}</p>
        <SubSection title={c.blogProcessTitle}>
          <p>{c.blogProcess}</p>
        </SubSection>
        <SubSection title={c.blogRiskTitle}>
          <p>{c.blogRisk}</p>
        </SubSection>
        <SubSection title={c.blogMoveTitle}>
          <p>{c.blogMove}</p>
        </SubSection>
        <SubSection title={c.blogExtractTitle}>
          <p>{c.blogExtract}</p>
        </SubSection>
        <SubSection title={c.blogOrthoTitle}>
          <p>{c.blogOrtho}</p>
        </SubSection>
        <SubSection title={c.blogColorTitle}>
          <p>{c.blogColor}</p>
        </SubSection>
        <SubSection title={c.blogSymTitle}>
          <BulletList items={c.blogSym} />
        </SubSection>
        <p>{c.blogClose}</p>
      </Section>
    </div>
  );
}

const HU = {
  alt: "Gyermekfogászat a Dentoplant rendelőben",
  galleryLabels: { close: "Bezárás", prev: "Előző kép", next: "Következő kép" },
  blogTitle: "Tények és tévhitek a fogváltással kapcsolatban",
  blogLead:
    "A tejfogaknak kisgyermekkorban nagyon fontos szerepük van. Megkönnyítik a szilárd táplálék fogyasztását, segítik a beszédet, részt vesznek az állcsontok fejlődésében, és őrzik a helyet a maradó fogaknak.",
  blogIntro:
    "6 éves kor körül elkezdenek mozogni, majd kiesnek. A gyerekeknek 20 tejfoga van, a felnőttnek 32 maradó foga — nem csupán fogváltásról van szó, hanem új fogak előbújásáról is.",
  blogProcessTitle: "Mi a gyermekkori fogváltás menete?",
  blogProcess:
    "Az alsó metszőfogak meglazulásával indul, 6–7 évesen. Ekkorra az első nagyőrlők (hatosok) már előtörtek vagy előtörőfélben vannak. Ezek előbújását nem előzi meg tejfog kiesése, ezért sok szülő tejfognak hiszi őket, és nem fordít rájuk kellő figyelmet.",
  blogRiskTitle: "Maradó fogak veszélyben",
  blogRisk:
    "Az új maradó rágófogak is gyorsan képesek elromlani a mély barázdák miatt. A legveszélyeztetettebbek az első nagyőrlők, hiszen hónapok is eltelhetnek, mire a szülő felfedezi őket. A cserélődő első tejfogak az alsó és felső nagymetszők; őket követik a kismetszők, a szemfogak, majd a kisőrlők. A fogváltás átlagosan 12 éves korra zárul a hetedik fogak előbújásával. A bölcsességfogak 17 éves kor után bújhatnak elő. A megelőzés: rendszeres kontroll, fogkőeltávolítás, helyes fogmosás és barázdazárás.",
  blogMoveTitle: "Szabad mozgatni a fogat, vagy hagyjuk, hogy magától essen ki?",
  blogMove:
    "Az erősen mozgó tejfog irritálhatja az ínyt. Nyugodtan mozgassák, hogy minél előbb helyreálljon az íny egészsége, és elősegítsük a maradó fog előtörését.",
  blogExtractTitle: "Kibújt a maradó fog, de a tejfog még nem esett ki. Ki kell húzni?",
  blogExtract:
    "Ha a tejfog mozog, és a maradó fog rágófelszínének csak egy kis része bújt elő, várhatunk pár hetet. Ha a korona legalább félig előtört, vagy a tengelye nem egyezik a tejfogéval, érdemes minél hamarabb eltávolítani, hogy a maradó fog ne rossz irányba bújjon.",
  blogOrthoTitle: "A frissen előtört maradó fogak nem tökéletesen illeszkednek. Mikortól kell szabályozni?",
  blogOrtho:
    "A maradó fogak mérete már előtöréskor megegyezik a felnőtt fogakéval, az állcsont még nem. Természetes, ha 6–8 évesen még nem férnek el tökéletesen. Az enyhe torlódás a növekedéssel megoldódhat; kifejezett eltérésnél fogszabályozás javasolt. Az első szűrővizsgálatra 7 éves korban érdemes eljönni. Ha az alsó maradó metszők a nyelv felől törnek elő, a tejfogak eltávolítása megkönnyítheti a sorba rendeződést.",
  blogColorTitle: "Nem pont olyan fehér a maradó fogak zománca. Mi az oka?",
  blogColor:
    "A tejfog és a maradó fog zománcának szerkezete eltér. A tejfogak inkább kékesfehérek, a maradó fogak sárgásfehérek. A különbség természetes; amikor már nem lesznek tejfogak, sokkal fehérebbnek látjuk a maradó fogakat.",
  blogSymTitle: "A fogváltást kísérő leggyakoribb tünetek",
  blogSym: [
    "A mozgó fogak körül az íny irritált, duzzadt, érzékeny lehet — ha túl sokáig mozog, a fogorvos eltávolíthatja.",
    "Fokozott nyáltermelés, akár a szájzug gyulladása.",
    "Az előtört fog egy részét még íny fedheti — a szájhigiénia ilyenkor is fontos.",
    "Ha a tejfog kiesett, és hosszú ideig nem bújik a maradó fog, vizsgálattal kell tisztázni, van-e csíra; hiány esetén fogszabályozó szakorvossal kell konzultálni.",
  ],
  blogClose:
    "A fogváltás minden gyermeknél egyéni ütemben történik, többnyire az iskolaérettséggel esik egy időszakra. Ha bizonytalanok, érdemes szakorvoshoz fordulni — egy vizsgálat után pontos képet kapnak.",
  introTitle: "Megelőzés és családi fogászati modell",
  introLead:
    "A gyermekek rendszeres fogászati ellenőrzését fél évente javasoljuk a Dentoplant Fogászati Rendelőben, Szegeden.",
  introBody1:
    "A gyermekek fogazatában számtalan változás történhet viszonylag rövid időn belül: fogváltás, tejfogak és maradófogak szuvasodása, vagy akár egy rapid gyors fogszuvasodás. A romlásnak indult tejfogakat gondosan be kell tömni, hiszen a környezetükben lévő, később kibújó maradó fogak is károsodhatnak. A tejfogak épségének megőrzése fontos a fogazat és az állcsontok szimmetrikus fejlődése szempontjából. A korán elvesztett tejfog később fogszabályzással kezelendő problémákhoz vezethet.",
  introBody2: (
    <>
      A Dentoplant Fogászati Rendelő filozófiája a megelőzés. Hiszünk abban, hogy személyes
      példamutatással és rendszeres fél évenkénti kontrollal a gyermekeink fogazata is egészségesen
      megőrizhető. Egy gyermek úgy viszonyul a fogmosáshoz, ahogy azt a szüleitől látja — ezért
      alkalmazzuk a <strong>családi fogászati modellt</strong>: megtervezzük, milyen ütemben tudnak
      együtt a gyermekkel eljönni a kezelésekre, és kiemelten fontos számunkra a szájhigiénia
      együttes oktatása.
    </>
  ),
  whenBrushTitle: "Mikortól kell a gyermek fogát mosni?",
  whenBrushBody:
    "A helyes szájhigiéniára nevelést nem lehet elég korán kezdeni. Ahogy a helyes táplálkozás már az anyaméhben kezdődik, a megfelelő szájápolás már csecsemőkorban. Kezdetben a szoptatási időszakban egy pelenka csücskével elég áttörölni a fogatlan íveket, de ahogy az első tejfogak megjelennek, el lehet kezdeni az ismerkedést a fogkefével. Dentálhigiénikusunk segít kiválasztani a gyermek életkorának legmegfelelőbb fogkefét.",
  checkTitle: "Miért fontos a fél évenkénti ellenőrzés?",
  checkBody:
    "Nem szabad elmulasztani a megfelelő időt a frissen kibújt maradó őrlőfogak megelőző barázdazárására, és időben fel kell ismerni a fogszabályozó kezelés szükségességét is. Azok a gyerekek, akiket szülei rendszeresen fél évente elhoznak ellenőrzésre, mindig szívesebben látogatnak el hozzánk később felnőtt korukban is. A rendszeresség miatt náluk hamarabb észrevesszük a tisztítási hibákat vagy egyéb eltéréseket — így általában megelőzhető a fog fúrása, vagy csak minimális kellemetlenséggel megúszható.",
  sealTitle: "Mi az a barázdazárás?",
  sealBody1:
    "A maradó őrlőfogakon legkorábban elvégezhető védőréteg kialakítása. Mivel kisgyermekkorban a fogmosás még nem tökéletes, és gyakran marad lepedék a fogakon, először a bonyolultan barázdált őrlőfogak rizikóbarázdái szuvasodnak. Ezeket a frissen előtört, ép maradófogak rágófelületén lévő barázdákat fényre kötő, fluoridot leadó lakkal töltjük fel.",
  sealBody2: (
    <>
      <strong>Figyelem:</strong> az első előtörő maradó őrlőfog (a 6-os) kibújásakor, általában 6
      éves kor körül kell elvégezni az első barázdazárásokat!
    </>
  ),
  traumaTitle: "Fogakat érő traumák",
  traumaBody1:
    "Minden évben, a nyári időszakban megnövekszik a gyermek fogbalesetek száma. Óvodás korban klasszikus fogsérülést okoz a lábbal hajtós kismotor, roller, később a bicikli. Viseljünk védőfelszerelést, bukósisakot — de ha már megtörtént a baj, fontos tudni, mi a teendő. Lehetőség szerint forduljunk azonnal képzett fogorvoshoz.",
  traumaBody2:
    "A fogsérüléseket az International Association of Dental Traumatology DENTAL TRAUMA GUIDELINES egyezményes besorolása szerint osztályozzuk, és minden sérülés ellátása ezen ajánlások szerint történik. Ha a fogból nagyobb darab letört és a dentin szabaddá válik, érzékenység lép fel, ami akár a fog elhalásához is vezethet. Ha a trauma következtében félbe törik egy fog, akkor egyből megnyílik a fogbél — ilyenkor a fogat azonnal gyökérkezelni kell. Az ütést elszenvedett fogak tartószerkezete akkor is sérül, ha a fog nem tört le; gyakori panasz a ráharapáskor jelentkező fájdalom. Ha a fogak enyhén mozgathatóvá válnak, azonnali fogsínezésre van szükség.",
  thumbTitle: "Ujjszopás és egyéb gyermekkori rossz szokások",
  thumbBody1:
    "A rossz szokások közül az egyik leggyakoribb az ujjszopás, amelynek gyakorisága elérheti a 35-40%-ot is. Az újszülöttek és csecsemők esetében természetes folyamat, hogy a nyelv és az ajak stimulációjával ismerik meg környezetüket — azonban a rendszeres és hosszan tartó szokás hatással van a fogak és állcsontok fejlődésére.",
  thumbBody2:
    "Napi 4-6 órás ujjszopás már fogelmozdulást okozhat. Klasszikus következményes elváltozások közé tartozik az elülső nyitott harapás, felső állcsont szűkület, keresztharapás, gótikus szájpad, a felső metszőfogak kifelé és az alsók befelé dőlése, valamint az alsó állcsont hátrahelyeződése. Mindez megbontja a normál fogsorzáródást, zavarhatja a rágást, az esztétikát és beszédhibát is okozhat. Ha az ujjszopás tartós szokássá rögzül, körülbelül 4 éves korig érdemes leszoktatni róla a gyermeket — ennél idősebb korban már nagyobb valószínűséggel alakulnak ki olyan állcsont- és fogazati problémák, amelyek megoldásához fogszabályozó készülék válik szükségessé.",
  cariesTitle: "Körkörös tejfogszuvasodás (circularis caries)",
  cariesBody1:
    "A tejfogak szuvasodása többek között azért is következik be könnyebben, mert a zománc vastagsága feleakkora, mint a maradó fogak esetében. A fogszuvasodás akár már fél-egy évvel a fogáttörés után bekövetkezhet.",
  cariesBody2: (
    <>
      Az <em>Early Childhood Caries (ECC)</em> a születéstől 71 hónapos korig terjedő életkorban egy
      vagy több kavitációval járó vagy anélküli szuvas lézió, caries miatt elvesztett vagy tömött
      tejfog. Leggyakrabban a felső metszőfogak, súlyosabb esetben az első tejmolárisok érintettek. A
      circularis caries a metszők külső felszínén, az ínyszél mentén kezdődő, gyorsan terjedő,
      körbefutó fogszuvasodás, amely már egy éves korban megjelenhet.
    </>
  ),
  causesTitle: "Kiváltó okok",
  causes: [
    {
      title: "Külső (exogén) tényezők",
      body: "Cukros folyadékok (tea, gyümölcslevek, szörpök) és cariogén ételek (magas sav- és cukortartalmú termékek).",
    },
    {
      title: "Belső (endogén) tényezők",
      body: "Koraszülés, exudatív diatézis, TBC, rachitis (angolkór).",
    },
  ],
  causesBody:
    "Terápiáját tekintve fontos lépés a cariogén étrend megváltoztatása. Korai stádiumban adhezív technikával (barázdazáró vagy folyékony kompozit) is kezelhetők. Az előrehaladottabb állapotban lévőket töméssel, felépítéssel, esetleg koronával lehet ellátni, végső esetben pedig fogeltávolításra kerül sor — ekkor különösen fontos figyelembe venni a beszédtanulási hatásokat és biztosítani a helyfenntartást a később előtörő maradó fogak számára.",
  twoRowsTitle: "Alsó tejfogak növekedése — „két sorban állnak a fogak”",
  twoRowsBody:
    "Sok kérdést kapunk, mert „elől két sorban állnak a gyermek fogai”. Nem kell megijedni: legtöbbször természetes fogváltási folyamatról van szó. Az alsó maradó frontfogak belülről, a nyelv felől közelítik meg a tejfogakat — így fordulhat elő egy 6 év körüli gyermek szájában, hogy a két alsó maradó frontfog a nyelvi oldalon már előbújt, miközben az alsó tej frontfogak még a helyükön vannak. A tejfogak hetek vagy hónapok múlva meglazulnak és kihullanak, a maradó frontfogakat pedig a nyelv és a növekedési mozgások szépen a helyükre rendezik.",
  calloutTitle: "Hozza el gyermekét bátran",
  calloutBody:
    "A családi fogászati modell keretében a gyermekkel együtt tervezzük meg a kontrollokat. Egy első konzultáción pontos képet kap a fogazat állapotáról és a megelőző kezelések ütemezéséről.",
  calloutCta: "Időpontot kérek",
};

const EN = {
  alt: "Paediatric dentistry at the Dentoplant clinic",
  galleryLabels: { close: "Close", prev: "Previous image", next: "Next image" },
  blogTitle: "Facts and myths about tooth replacement",
  blogLead:
    "Milk teeth play a vital role in early childhood: chewing solid food, speech, jaw development, and holding space for permanent teeth.",
  blogIntro:
    "Around age 6 they loosen and fall out. Children have 20 milk teeth and adults 32 permanent teeth — so new teeth erupt as well as replacements.",
  blogProcessTitle: "How does childhood tooth replacement proceed?",
  blogProcess:
    "It starts with loosening of the lower incisors at 6–7. By then the first permanent molars (the ‘sixes’) have often already erupted, without a milk tooth falling out first — parents may think they are still milk teeth.",
  blogRiskTitle: "Permanent teeth at risk",
  blogRisk:
    "New permanent molars can decay quickly in deep fissures. The first molars are most at risk. Replacement starts with the central incisors, then laterals, canines and premolars, finishing around age 12 with the second molars. Wisdom teeth may appear after 17. Prevention: regular check-ups, tartar removal, brushing and fissure sealing.",
  blogMoveTitle: "May we wiggle the tooth, or leave it to fall out?",
  blogMove:
    "A very loose milk tooth can irritate the gum. Wiggle it so the gum recovers and the permanent tooth can erupt.",
  blogExtractTitle: "The permanent tooth has erupted but the milk tooth is still there. Extract it?",
  blogExtract:
    "If the milk tooth is loose and only a small part of the permanent occlusal surface has appeared, wait a few weeks. If at least half the crown has erupted or the axes do not match, remove the milk tooth soon so the permanent tooth does not erupt in the wrong direction.",
  blogOrthoTitle: "Newly erupted permanent teeth do not fit the row perfectly. When to start braces?",
  blogOrtho:
    "Permanent teeth are already adult-sized; the jaws are not. Mild crowding at 6–8 may resolve with growth; marked discrepancy warrants orthodontics. A first screening around age 7 is useful. Lower permanent incisors erupting from the tongue side may need milk-tooth removal so the tongue can align them.",
  blogColorTitle: "Permanent enamel is not as white as milk teeth. Why?",
  blogColor:
    "The enamel structure differs. Milk teeth are more bluish-white, permanent teeth yellowish-white. The contrast is natural; once milk teeth are gone, the permanent teeth look whiter.",
  blogSymTitle: "The most common accompanying symptoms",
  blogSym: [
    "Irritated, swollen, sensitive gum around a long-loose tooth — extraction often relieves it at once.",
    "Increased saliva, sometimes inflammation at the corners of the mouth.",
    "Gingiva still covering part of the erupted tooth — hygiene remains important.",
    "If a milk tooth is lost and the permanent tooth does not appear for a long time, check for a tooth germ; if missing, see an orthodontist.",
  ],
  blogClose:
    "The pace is individual, often around school age. If you are unsure, a specialist examination gives a clear picture.",
  introTitle: "Prevention and the family dental model",
  introLead:
    "We recommend regular dental check-ups for children every six months at the Dentoplant Dental Clinic in Szeged.",
  introBody1:
    "Numerous changes can occur in children's dentition within a relatively short time: tooth replacement, decay of milk teeth and permanent teeth, or even rapid, fast decay. Milk teeth that have begun to deteriorate must be carefully filled, since the permanent teeth around them that erupt later can also be damaged. Preserving the integrity of the milk teeth is important for the symmetrical development of the dentition and the jaws. A milk tooth lost early can lead to problems that later require orthodontic treatment.",
  introBody2: (
    <>
      The philosophy of the Dentoplant Dental Clinic is prevention. We believe that, with personal
      example and regular six-monthly check-ups, our children's dentition can also be kept healthy. A
      child relates to tooth brushing the way they see it from their parents — which is why we apply
      the <strong>family dental model</strong>: we plan the pace at which they can come to treatments
      together with the child, and the joint teaching of oral hygiene is especially important to us.
    </>
  ),
  whenBrushTitle: "From what age should a child's teeth be brushed?",
  whenBrushBody:
    "Education in proper oral hygiene cannot begin early enough. Just as proper nutrition begins already in the womb, proper oral care begins already in infancy. At first, during the breastfeeding period, it is enough to wipe the toothless arches with the corner of a nappy, but as the first milk teeth appear, getting acquainted with the toothbrush can begin. Our dental hygienist helps choose the toothbrush most suitable for the child's age.",
  checkTitle: "Why is the six-monthly check-up important?",
  checkBody:
    "The right time for the preventive fissure sealing of freshly erupted permanent molars must not be missed, and the need for orthodontic treatment must also be recognised in time. Children whose parents regularly bring them for check-ups every six months always visit us more willingly later in adulthood too. Because of the regularity, we notice cleaning mistakes or other deviations sooner in their case — so drilling the tooth can usually be prevented, or it can be managed with only minimal discomfort.",
  sealTitle: "What is fissure sealing?",
  sealBody1:
    "The creation of a protective layer that can be done on permanent molars at the earliest opportunity. Since in early childhood tooth brushing is not yet perfect and plaque often remains on the teeth, the risk fissures of the intricately grooved molars decay first. We fill these fissures on the chewing surface of freshly erupted, intact permanent teeth with a light-cured, fluoride-releasing varnish.",
  sealBody2: (
    <>
      <strong>Note:</strong> the first fissure sealings should be done when the first permanent molar
      (the “six”) erupts, usually around the age of 6!
    </>
  ),
  traumaTitle: "Trauma to the teeth",
  traumaBody1:
    "Every year, during the summer period, the number of children's tooth accidents increases. In kindergarten age, foot-powered ride-on toys and scooters, later the bicycle, cause classic tooth injuries. Let's wear protective equipment and a helmet — but if the accident has already happened, it is important to know what to do. If possible, see a trained dentist immediately.",
  traumaBody2:
    "We classify tooth injuries according to the standardised categorisation of the International Association of Dental Traumatology DENTAL TRAUMA GUIDELINES, and every injury is treated according to these recommendations. If a larger piece breaks off the tooth and the dentin becomes exposed, sensitivity occurs, which can even lead to the death of the tooth. If a tooth breaks in half as a result of trauma, the pulp opens immediately — in such cases the tooth must be root-treated at once. The supporting structure of teeth that have suffered a blow is damaged even if the tooth did not break off; a common complaint is pain on biting. If the teeth become slightly mobile, immediate splinting is needed.",
  thumbTitle: "Thumb-sucking and other childhood bad habits",
  thumbBody1:
    "One of the most common bad habits is thumb-sucking, whose prevalence can even reach 35-40%. In newborns and infants it is a natural process to get to know their environment through stimulation of the tongue and lips — however, a regular and long-lasting habit affects the development of the teeth and jaws.",
  thumbBody2:
    "4-6 hours of thumb-sucking a day can already cause tooth displacement. Classic resulting changes include an anterior open bite, upper jaw narrowing, crossbite, a gothic palate, the upper incisors tilting outwards and the lower ones inwards, and the retropositioning of the lower jaw. All this disrupts the normal bite, can interfere with chewing and aesthetics, and can also cause a speech impediment. If thumb-sucking becomes a fixed habit, it is worth weaning the child off it by about the age of 4 — at an older age, jaw and dental problems requiring an orthodontic appliance to solve are more likely to develop.",
  cariesTitle: "Circular milk-tooth decay (circular caries)",
  cariesBody1:
    "Decay of milk teeth occurs more easily partly because the thickness of the enamel is half that of permanent teeth. Decay can occur even within half a year to a year after the tooth erupts.",
  cariesBody2: (
    <>
      <em>Early Childhood Caries (ECC)</em> is, in the age range from birth to 71 months, one or more
      carious lesions with or without cavitation, or milk teeth lost or filled due to caries. Most
      often the upper incisors are affected, and in more severe cases the first milk molars. Circular
      caries is a fast-spreading, encircling decay that begins on the outer surface of the incisors
      along the gum margin and can appear as early as one year of age.
    </>
  ),
  causesTitle: "Triggering causes",
  causes: [
    {
      title: "External (exogenous) factors",
      body: "Sugary liquids (tea, fruit juices, syrups) and cariogenic foods (products high in acid and sugar).",
    },
    {
      title: "Internal (endogenous) factors",
      body: "Premature birth, exudative diathesis, TB, rickets.",
    },
  ],
  causesBody:
    "As for its therapy, an important step is changing the cariogenic diet. In the early stage they can also be treated with adhesive techniques (fissure sealant or flowable composite). Those in a more advanced state can be treated with fillings, build-ups, possibly a crown, and as a last resort extraction takes place — in which case it is especially important to consider the effects on learning to speak and to ensure space maintenance for the permanent teeth erupting later.",
  twoRowsTitle: "Lower milk teeth growing — “the teeth are in two rows”",
  twoRowsBody:
    "We get many questions because “the child's teeth are in two rows at the front”. There is no need to be alarmed: most often it is a natural tooth-replacement process. The lower permanent front teeth approach the milk teeth from the inside, from the tongue side — so it can happen in the mouth of a child around 6 that the two lower permanent front teeth have already erupted on the tongue side while the lower milk front teeth are still in place. The milk teeth loosen and fall out within weeks or months, and the tongue and growth movements nicely arrange the permanent front teeth into place.",
  calloutTitle: "Bring your child in with confidence",
  calloutBody:
    "Within the family dental model we plan the check-ups together with the child. At a first consultation you receive an accurate picture of the state of the dentition and the scheduling of preventive treatments.",
  calloutCta: "Book an appointment",
};
