import {
  BeforeAfter,
  BulletList,
  Callout,
  InfoPanel,
  Lead,
  MediaText,
  ProcessSteps,
  Section,
  VideoEmbed,
} from "../ui";
import { ToothModelViewer } from "../tooth-model-viewer-lazy";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

const DIR = "/szolgaltatasok/dsd";

export default function DsdContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;

  return (
    <div className="space-y-12">
      <BeforeAfter
        before={{ src: `${DIR}/dsd-elotte.jpg`, alt: c.altBefore, width: 1800, height: 1098 }}
        after={{ src: `${DIR}/dsd-utana.jpg`, alt: c.altAfter, width: 1800, height: 1098 }}
        beforeLabel={c.beforeLabel}
        afterLabel={c.afterLabel}
      />

      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      <Section title={c.archTitle}>
        <p>{c.archIntro}</p>
        <ToothModelViewer locale={locale as Locale} />
      </Section>

      <Section title={c.whatTitle}>
        <MediaText
          image={{ src: `${DIR}/dsd-csapat.jpg`, alt: c.altTeam, width: 1600, height: 1066 }}
        >
          <p>{c.whatBody[0]}</p>
        </MediaText>
        <p>{c.whatBody[1]}</p>
        <p>{c.whatBody[2]}</p>
      </Section>

      <Section title={c.videoTitle}>
        <VideoEmbed id="mo90lrm2EBQ" title={c.videoTitle} />
        <p className="text-center text-lg font-medium italic text-brand-800">{c.videoCaption}</p>
      </Section>

      <Callout
        title={c.calloutTitle}
        body={c.calloutBody}
        ctaLabel={c.calloutCta}
        ctaHref={localizeHref("/kapcsolat", locale as Locale)}
      />

      <Section title={c.stepsTitle}>
        <MediaText
          image={{
            src: `${DIR}/dsd-fotodokumentacio.jpg`,
            alt: c.altPhoto,
            width: 1200,
            height: 1799,
          }}
        >
          <p>{c.stepsIntro}</p>
        </MediaText>
        <ProcessSteps steps={c.steps} />
      </Section>

      <InfoPanel title={c.scanTitle}>
        <p>
          {c.scanBody1}
          <strong>Medit i700</strong>
          {c.scanBody2}
        </p>
      </InfoPanel>

      <Section title={c.captureTitle}>
        <MediaText
          image={{ src: `${DIR}/dsd-szkenner.jpg`, alt: c.altScanner, width: 1600, height: 1200 }}
        >
          <p>{c.captureBody}</p>
        </MediaText>
      </Section>

      <Section title={c.retrieveTitle}>
        <MediaText
          reverse
          image={{ src: `${DIR}/dsd-szkenneles.jpg`, alt: c.altScanning, width: 1600, height: 1200 }}
        >
          <p>{c.retrieveBody}</p>
        </MediaText>
      </Section>

      <Section title={c.benefitsTitle}>
        <MediaText
          reverse
          image={{ src: "/csongor_dm.jpg", alt: c.altPlanning, width: 4032, height: 1872 }}
        >
          <p>{c.benefitsBody}</p>
        </MediaText>
        {c.benefitsParas.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <Section title={c.forWhomTitle}>
        <BulletList items={c.forWhom} />
      </Section>
    </div>
  );
}

const HU = {
  archTitle: "Fedezze fel a mosolyát",
  archIntro:
    "A mosoly minden foga saját szerepet tölt be az esztétikában és a rágásban. Kattintson az alábbi 3D fogsor bármely fogára — a kamera ráközelít, a fog kiemelkedik és megjelenik a neve.",
  videoTitle: "Nézze meg, hogyan tervezzük meg mosolyát",
  videoCaption:
    "A digitális mosolytervezés segítségével egyedi és személyes mosolyterv készül Önnek! A számítógépes tervezés során be tudjuk mutatni, hogy milyen esztétikai változtatások lehetnek előnyösek ahhoz, hogy mosolya hibátlan legyen. Kérjen időpontot konzultációra!",
  beforeLabel: "Előtte",
  afterLabel: "Tervezés után",
  altBefore: "A fogsor a digitális mosolytervezés előtt",
  altAfter: "A fogsor a digitális mosolytervezés után",
  altTeam: "Dentoplant fogorvosok munka közben",
  altPhoto: "Fogorvos fotódokumentációt készít a mosolytervezéshez",
  altScanner: "Medit i700 intraorális szkenner",
  altScanning: "Páciens intraorális szkennelése",
  altPlanning: "Digitális mosolytervezés a rendelőben",
  introTitle: "Digitális mosolytervezés",
  introLead:
    "A Dentoplant Fogászati Rendelőben a frontfogakra készülő fogpótlásokat és a teljes szájrekonstrukciókat az esztétikai fogászat korszerű irányelveit követve, digitális mosolytervezéssel (Digital Smile Design, DSD) végezzük.",
  introBody:
    "A kiindulási állapot során elkészített standardizált fotódokumentáció, majd az intraorális szkennelés segítségével olyan komplex módon tudjuk számítógépen megjeleníteni eseteinket, ami jelentősen növeli a kapott funkcionális és esztétikai eredményeket. A mosolytervezés kiemelkedő előnye, hogy a páciensnek előre be tudjuk mutatni a kezelés várható kimenetelét, így láthatja a jövőbeli mosolyát. A tervezést mindig a meglévő mosoly elemzésével indítjuk el, melynek során elemezzük, hogy milyen változtatások lehetnek előnyösek ahhoz, hogy a páciens elképzelései megvalósuljanak.",
  whatTitle: "Mi is az a DSD?",
  whatBody: [
    "A digitális mosolytervezés (angolul Digital Smile Design, DSD) segítségével már a kezelés elején képesek vagyunk megjeleníteni a várható esztétikai végeredményt anélkül, hogy azt a valóságban kiviteleztük volna, így a páciens nem vállal semmilyen kockázatot.",
    "A fogászati kezelések tervezése és kivitelezése során számos egészségügyi, funkcionális, statikai vagy kényelmi szempontot kell figyelembe vennünk a tökéletes végeredmény érdekében. Természetesen minden fogpótlás vagy restauráció készítése során alapvető követelmény az esztétikus kidolgozás, a színegyezés, az élethű kivitelezés. Nem szabad azonban figyelmen kívül hagyni a páciens szájüregen kívüli adottságait sem. A lehető leggyönyörűbb fogpótlás sem éri el a célját, ha az nem illeszkedik megfelelően a páciens arckarakteréhez, arányaihoz, tónusaihoz.",
    "Ezért személyre szabott esztétikus mosoly a kezelőorvossal együttműködve kerül megtervezésre egy speciális fogászati tervező szoftver segítségével. Ennek köszönhetően a páciens arctípusához és lágyrészeihez illő, egyedileg kivitelezhető rekonstrukciók jelennek meg megoldási lehetőségként. A letöredezett, réses vagy elszíneződött fogakból percek alatt, az arctípushoz és a lágyrészekhez illő, gyönyörű fogakat varázsolhatunk a képernyőre. A kivitelezhetőség mellett az egyéni archarmóniát figyelembe véve csak olyan tervek készülnek, amelyek a valóságban is megvalósíthatók.",
  ],
  calloutTitle: "Kérjen időpontot digitális mosolytervezésre!",
  calloutBody: "Legyen olyan a mosolya, amilyet mindig is szeretett volna.",
  calloutCta: "Bejelentkezés",
  stepsTitle: "Melyek a digitális mosolytervezés lépései?",
  stepsIntro:
    "A digitális mosolytervezés egy egyszerű és élvezetes közös munka a kezelőorvossal. A tervezés előtt részletes konzultációra kerül sor, amikor felvesszük a kórelőzményeket, megvizsgáljuk a pácienst, panoráma röntgenfelvételt, intraorális szkennt készítünk és megbeszéljük a beteg elképzeléseit az új mosolyával kapcsolatban. Ezt követően indulhat a folyamat:",
  steps: [
    {
      title: "Fotódokumentáció",
      body: "Nagy felbontású digitális képek sorozatát készítjük el (intraorális/fogfotók-extraorális/portrék), hogy pontos ismereteket szerezzünk az arc- és a fogak arányáról. Ez lehetővé teszi számunkra, hogy megítéljük a fogak, az íny, az ajkak és az arc pozíciós viszonyát, valamint a különböző érzelmek arckifejezéseit.",
    },
    {
      title: "Importálás a szoftverbe",
      body: "A fotók, valamint az elemzések átkerülnek a DSD programba, és láthatóvá válnak a képernyőn. A demonstráció folyamán csak azok a lehetőségek jelennek meg, mely orvos-szakmai szempontból kivitelezhetők, így nem készülnek valóságtól elrugaszkodott tervek, csakis olyanok, melyek a páciensre vannak szabva.",
    },
    {
      title: "Digitális mosolyelemzés",
      body: "A fotók és az intraorális szkennelés adatainak segítségével megjelenítjük a jelenlegi, kiindulási állapotot és azt a pácienssel közösen áttekintjük. A mosoly elemzés gyakorlatilag egy részletes konzultáció, melynek során kielemezzük a szimmetria viszonyokat, az ajkak és a fogak állását és áttekintjük, milyen módosítások lennének előnyösek a páciens részére. Meghallgatjuk, mik a páciens elvárásai a kezeléssel kapcsolatban, pontosan min szeretne változtatni.",
    },
    {
      title: "Digitális Tervezés",
      body: "A kezdeti, kiindulási helyzet meghatározását követően a fogorvos egy javaslatot dolgoz ki a számítógépen, amely a meglévő helyzet lehetséges változataként jelenik meg. Mostantól a szín, az alak és a design megváltoztatható, amíg megtaláljuk a kívánt megoldást. Ezután a tervezési adatok alapján prototípus hozható létre a laboratóriumban. 3D nyomtató segítségével a fogtechnikus az elképzelt tervet (teljes fogívet kinyomtatva) vagy egy olyan mock-up-ot (ideiglenes fogpótlást) is készíthet a kiválasztott, megtervezett mosoly alapján, melyet a fogorvosi rendelőben a fogakra felhelyezve lehet tesztelni mielőtt még bármilyen beavatkozás megtörténne!",
    },
    {
      title: "Mock-up – Prototípus ideiglenes koronák felhelyezése",
      body: "Ezt követően a modellből kapott prototípust a fogorvos ideiglenes műanyagból a szájban is szemlélteti. Ekkor a páciens ki tudja próbálni, beszéd, mosolygás során a digitális terv pontos mását, és ha szükséges elvégezhető a korrekció is. Élőben, ott helyben lehet módosítani, elvenni, hozzá építeni az ideiglenes prototípushoz, így kipróbálható egy-egy változtatás még ideiglenes jelleggel.",
    },
    {
      title: "Fogak előkészítése, végleges fogpótlás elkészítése",
      body: "Ezután fotódokumentáció és prezentáció készül, s ha a páciens jóváhagyja a tervet, megkezdődik a fogak előkészítése a végleges fogpótláshoz. A fogtechnika a digitális terv pontos mását kerámiából készíti el, amelyet a fogorvos a páciens fogához precízen rögzít, így válik valóra az új esztétikus és funkcionálisan is kielégítő hőn áhított mosoly.",
    },
    {
      title: "Dokumentáció",
      body: "A kezelés végén ismét fotódokumentáció készül, melynek segítségével összehasonlítjuk a kiindulási állapotot a kapott eredménnyel és prezentáljuk a páciens számára, így az ő feladata már csak az, hogy élvezze megszépült, új mosolyát.",
    },
  ],
  scanTitle: "Mi az a szkennelés?",
  scanBody1:
    "A Dentoplant Fogászati és Implantológiai Rendelőben egyes fogpótlásokat már lenyomatvétel nélkül, teljesen digitális munkafolyamattal készítjük el. A lenyomatvétel helyett optikai leképezést, azaz szkennelést végzünk és a fájlt digitálisan küldjük el a fogtechnikára. A digitális szkennelést egy igen korszerű és gyors ",
  scanBody2:
    " szkennerrel végezzük, amelynek segítségével nem csak koronák és hidak, hanem a kiindulási állapot és az eredeti harapás rögzítésére is lehetőségünk van.",
  captureTitle: "Mi az a digitális mosolyrögzítés és fogtérkép?",
  captureBody:
    "A Medit i700 szkenner segítségével a kiindulási helyzet megőrizhető és gondoskodhat mosolya időtállóságáról, a mosolyrögzítés erre kiváló lehetőség. A szkennelést követően 3D-ben digitalizáljuk fogsor modelljét az utolsó apró részletig, mely a jövőben bármikor előkereshető az archívumból. Érdemes a mosolyrögzítést minél előbb elvégezni, mikor fogaink állapota ép és esztétikailag ideális. Amennyiben Ön rendelkezik digitalizált fogtérképpel, az a későbbiekben bármilyen fogsérülés esetén nagy pontossággal rekonstruálható.",
  retrieveTitle: "Mit nevezünk digitális visszakeresésnek?",
  retrieveBody:
    "Azáltal, hogy a kiindulási helyzet egy korábbi időpontban el lett tárolva a program archívumában, bármikor visszakereshető és előhívható 3D modellként. A fogtechnikai labor pedig egy fogsérülés, vagy fogpótlás esetén a tárolt formavilágot és a fogszínt is tudja használni, hogy az eredeti helyzethez minél hasonlóbb megoldást tudjunk egy fogpótlásban megvalósítani. Ez biztonság a páciensnek és a kezelőorvosnak is.",
  benefitsTitle: "Melyek a digitális mosolytervezés előnyei?",
  benefitsBody:
    "A mosolytervező szoftver perspektívái sokkal messzebbre mutatnak, mint azt gondolnánk. Ez nem egy digitális rajzoló program, hanem egy olyan fogorvosi eszköz, mely teljes mértékben fel van vértezve a megvalósítás lehetőségeivel. Ez azt jelenti, hogy nem hoz létre olyan eredményt, amely nem valósítható meg a páciens esetében. Csakis olyan képet produkál, ami az egyéni paramétereket tekintve orvos-szakmai és fogtechnikusi szempontból megvalósítható. Ez a nagyszerű előnye tette a programot egyedülállóvá és rendkívül hasznossá.",
  benefitsParas: [
    "A mosolytervezés egyik óriási előnye, hogy a páciensek előre látják a kezelés várható végeredményét, ezáltal tudják, hogy mire számíthatnak. Ennél azonban sokkal több előnnyel jár a kezelőorvos számára, hiszen megkönnyíti a kommunikációt a fogorvos és a fogtechnikus között. Ezzel kizárható a félreértés lehetősége.",
    "A fogtechnikus munkáját is nagymértékben megkönnyíti, ha a diagnózishoz és a tervhez mosolytervezés által pontos paramétereket, precíz méréseket kap, hiszen így teljesen egyértelművé válik a várt eredmény. A szoftver segítségével készített fotók teljes valójában megmutatják a páciens elvárásait, ami sokkal pontosabb lehet bármilyen leírásnál.",
    "További előnynek számít az, hogy kontrollálhatók a költségek, melyek a kezelési terv alapján módosíthatók, és a páciens lehetőségeihez alkalmazkodva ütemezhetők.",
  ],
  forWhomTitle: "Kinek javasoljuk a digitális mosolytervezést?",
  forWhom: [
    "Minden olyan páciensnek, aki esztétikai területre készülő fogpótlás megkezdése előtt áll",
    "Olyan komplex esetekben, amikor alsó és felső fogívet is kezeljük",
    "Azoknak, akik kisebb, vagy nagyobb változtatásra szánták el magukat, de nem mernek belevágni",
    "Azoknak, akik elégedetlenek fogaik küllemével, de félnek a bizonytalan végeredménytől",
    "Olyan pácienseknek, akik pontosan szeretnék tudni, hogyan változtatja meg küllemüket a kezelés",
  ],
};

const EN = {
  archTitle: "Explore your smile",
  archIntro:
    "Every tooth in a smile plays its own role in both aesthetics and chewing. Click any tooth on the 3D model below — the camera zooms in, the tooth lights up and its name appears.",
  videoTitle: "See how we design your smile",
  videoCaption:
    "With Digital Smile Design, a unique and personal smile plan is created for you! During the computer-aided planning we can show which aesthetic changes would be beneficial to make your smile flawless. Book an appointment for a consultation!",
  beforeLabel: "Before",
  afterLabel: "After planning",
  altBefore: "The dentition before Digital Smile Design",
  altAfter: "The dentition after Digital Smile Design",
  altTeam: "Dentoplant dentists at work",
  altPhoto: "Dentist taking photo documentation for smile design",
  altScanner: "Medit i700 intraoral scanner",
  altScanning: "Intraoral scanning of a patient",
  altPlanning: "Digital smile design at the clinic",
  introTitle: "Digital Smile Design",
  introLead:
    "At the Dentoplant Dental Clinic we create restorations for the front teeth and complete oral reconstructions following the modern principles of aesthetic dentistry, using Digital Smile Design (DSD).",
  introBody:
    "With the help of standardised photo documentation taken of the starting condition, and then intraoral scanning, we can display our cases on a computer in such a comprehensive way that it significantly improves the resulting functional and aesthetic outcomes. A key advantage of smile design is that we can show the patient the expected outcome of the treatment in advance, so they can see their future smile. We always begin the planning by analysing the existing smile, considering which changes would be beneficial to make the patient's vision a reality.",
  whatTitle: "What exactly is DSD?",
  whatBody: [
    "With Digital Smile Design (DSD) we are able to visualise the expected aesthetic result at the very beginning of the treatment, without having carried it out in reality, so the patient takes no risk whatsoever.",
    "When planning and carrying out dental treatments, we must consider numerous health, functional, structural or comfort aspects to achieve a perfect result. Naturally, aesthetic craftsmanship, colour matching and lifelike execution are basic requirements for every restoration. However, the patient's features beyond the oral cavity must not be ignored either. Even the most beautiful restoration fails to reach its goal if it does not fit the patient's facial character, proportions and tones.",
    "This is why the personalised, aesthetic smile is designed together with the treating dentist using dedicated dental design software. As a result, individually feasible reconstructions that suit the patient's facial type and soft tissues appear as solution options. From chipped, gapped or discoloured teeth we can conjure up beautiful teeth on the screen within minutes, suited to the facial type and soft tissues. Beyond feasibility, taking individual facial harmony into account, only plans that can actually be realised are created.",
  ],
  calloutTitle: "Book an appointment for Digital Smile Design!",
  calloutBody: "Let your smile become the one you have always wanted.",
  calloutCta: "Book now",
  stepsTitle: "What are the steps of Digital Smile Design?",
  stepsIntro:
    "Digital Smile Design is a simple and enjoyable collaboration with your dentist. Before the design, a detailed consultation takes place: we record your medical history, examine you, take a panoramic X-ray and an intraoral scan, and discuss your ideas about the new smile. After this, the process can begin:",
  steps: [
    {
      title: "Photo documentation",
      body: "We take a series of high-resolution digital images (intraoral/tooth photos and extraoral/portraits) to gain accurate knowledge of the proportions of the face and teeth. This lets us assess the positional relationship of the teeth, gums, lips and face, as well as facial expressions of different emotions.",
    },
    {
      title: "Importing into the software",
      body: "The photos and analyses are transferred into the DSD program and become visible on screen. During the demonstration, only the options that are feasible from a professional dental standpoint are shown, so no unrealistic plans are made, only ones that are tailored to the patient.",
    },
    {
      title: "Digital smile analysis",
      body: "Based on the photos and intraoral scan data, we display the current, initial condition and review it together with the patient. The smile analysis is essentially a detailed consultation, during which we analyse the symmetry, the position of the lips and teeth, and review which modifications would be beneficial for the patient. We listen to the patient's expectations of the treatment and exactly what they would like to change.",
    },
    {
      title: "Digital design",
      body: "After defining the initial starting situation, the dentist develops a proposal on the computer that appears as a possible variant of the existing situation. From now on the colour, shape and design can be changed until we find the desired solution. Then, based on the design data, a prototype can be created in the laboratory. With a 3D printer, the dental technician can print the envisioned plan (printing the full arch) or create a mock-up (temporary restoration) based on the selected, designed smile, which can be tested in the dental office by placing it on the teeth before any intervention takes place!",
    },
    {
      title: "Mock-up – placing prototype temporary crowns",
      body: "Next, the dentist demonstrates the prototype obtained from the model in the mouth using temporary plastic. The patient can then try out an exact copy of the digital plan while speaking and smiling, and if needed, corrections can be made. Live, on the spot, it is possible to modify, remove from or add to the temporary prototype, so individual changes can be tried out on a temporary basis.",
    },
    {
      title: "Preparing the teeth, creating the final restoration",
      body: "Then photo documentation and a presentation are made, and once the patient approves the plan, preparation of the teeth for the final restoration begins. The dental laboratory creates an exact copy of the digital plan in ceramic, which the dentist precisely bonds to the patient's teeth, and this is how the new, aesthetic and functionally satisfying, long-desired smile becomes reality.",
    },
    {
      title: "Documentation",
      body: "At the end of the treatment, photo documentation is taken again, with which we compare the starting condition to the result and present it to the patient, so their only task is to enjoy their beautiful, new smile.",
    },
  ],
  scanTitle: "What is scanning?",
  scanBody1:
    "At the Dentoplant Dental and Implantology Clinic, some restorations are already made without taking impressions, using a fully digital workflow. Instead of an impression we perform optical imaging, i.e. scanning, and send the file digitally to the dental laboratory. We perform the digital scanning with a very modern and fast ",
  scanBody2:
    " scanner, which allows us to capture not only crowns and bridges but also the starting condition and the original bite.",
  captureTitle: "What is digital smile recording and the tooth map?",
  captureBody:
    "With the Medit i700 scanner, the starting situation can be preserved and you can ensure the longevity of your smile — smile recording is an excellent option for this. After scanning, we digitise the model of the dentition in 3D down to the last tiny detail, which can be retrieved from the archive at any time in the future. It is worth performing smile recording as early as possible, while your teeth are intact and aesthetically ideal. If you have a digitised tooth map, it can be reconstructed with great precision in the event of any future tooth injury.",
  retrieveTitle: "What do we call digital retrieval?",
  retrieveBody:
    "Because the starting situation was stored in the program's archive at an earlier point in time, it can be retrieved and recalled as a 3D model at any moment. In the event of a tooth injury or restoration, the dental laboratory can use the stored shape and tooth colour to create a solution in a restoration that is as close as possible to the original. This provides security for both the patient and the treating dentist.",
  benefitsTitle: "What are the benefits of Digital Smile Design?",
  benefitsBody:
    "The perspectives of smile design software reach much further than one might think. This is not a simple digital drawing program but a dental tool fully equipped with the means of realisation. This means it does not create a result that cannot be achieved for the patient. It only produces an image that is feasible for the individual parameters from both a professional dental and dental-technician standpoint. This great advantage made the program unique and extremely useful.",
  benefitsParas: [
    "One huge advantage of smile design is that patients see the expected result of the treatment in advance, so they know what to expect. But it brings far more benefits for the dentist, since it facilitates communication between the dentist and the dental technician. This eliminates the possibility of misunderstanding.",
    "It also greatly eases the dental technician's work when, for the diagnosis and the plan, they receive exact parameters and precise measurements through smile design, since this makes the expected result completely clear. The photos created with the software show the patient's expectations in their full reality, which can be much more accurate than any description.",
    "A further benefit is that costs can be controlled: based on the treatment plan they can be adjusted and scheduled to fit the patient's means.",
  ],
  forWhomTitle: "Who do we recommend Digital Smile Design for?",
  forWhom: [
    "Every patient about to begin a restoration in the aesthetic zone",
    "Complex cases where both the lower and upper dental arch are treated",
    "Those who have decided on a smaller or larger change but do not dare to take the plunge",
    "Those who are dissatisfied with the look of their teeth but fear an uncertain result",
    "Patients who want to know exactly how the treatment will change their appearance",
  ],
};
