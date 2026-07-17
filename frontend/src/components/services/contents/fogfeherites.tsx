import { Callout, CardGrid, Lead, ProcessSteps, Section } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function FogfeheritesContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      <Section title={c.discTitle}>
        <CardGrid items={c.disc} />
        <p>
          {c.discBody1}
          <strong>{c.discShades}</strong>
          {c.discBody2}
        </p>
      </Section>

      <Section title={c.stepsTitle}>
        <ProcessSteps steps={c.steps} />
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
  introTitle: "Magabiztos mosoly fogfehérítéssel",
  introLead:
    "Egy megnyerő mosoly és szép, fehér fogak magabiztosabbá tesznek hétköznapjainkban, sikeresebbé karrierünkben.",
  introBody:
    "A fogfehérítés napjainkban biztonságos és könnyen elvégezhető beavatkozás, melyet rendelőnkben is nap mint nap végzünk. Rendelőnkben a legkorszerűbb fogfehérítési módszereket alkalmazzuk pácienseink elégedett, ellenállhatatlan mosolyáért.",
  discTitle: "Külső és belső elszíneződések",
  disc: [
    {
      title: "Külső elszíneződések",
      body: "Okozhatja a fogkő, kávé, gyakori teafogyasztás, dohányzás és a nem megfelelő fogmosási technika. Ezeket a szájhigiéniás kezelés során eltávolítjuk: Prophy Mate sópolírozással, Piezo depurálással és speciális abrazív pasztával történő polírozással.",
    },
    {
      title: "Belső elszíneződések",
      body: "A fog mélyebb rétegeit érintő elszíneződéseket egy eredetileg sötétebb fogszín, gyermekkorban szedett gyógyszerek, zománc- és dentinfejlődési rendellenességek, illetve elhalt vagy nem megfelelően gyökérkezelt fogak okozhatják.",
    },
  ],
  discBody1:
    "A belső elszíneződéseket karbamid-peroxidot vagy hidrogén-peroxidot tartalmazó zselékkel és speciális LED lámpás aktivátor fénnyel kezeljük, melyek együtt gyorsabb oxidációs mechanizmus során elszíntelenítik az elszíneződést okozó pigmenteket. Számtalan nemzetközi vizsgálat tanúsítja, hogy akár ",
  discShades: "5-8 árnyalatnyi világosodás",
  discBody2: " is biztonságosan elérhető.",
  stepsTitle: "A kezelés menete",
  steps: [
    {
      title: "Előkészítés",
      body: "Fogorvosi vizsgálat és professzionális szájhigiéniás kezelés. A hibás záródású töméseket és szuvas fogakat is el kell látni — ha az újonnan készülő tömések az esztétikai zónát érintik, ideiglenes tömést alkalmazunk, és csak a fehérítés után fejezzük be ezek kezelését, immár az új fogszínhez választva a tömőanyag színét.",
    },
    {
      title: "Rendelői fogfehérítés (In Office Whitening)",
      body: "Fotókon rögzítjük a kiindulási fogszínt és kiválasztjuk az elérni kívánt árnyalatot. Az ajkakat krémmel, a fogínyt speciális ínymaszkkal és „habbal” védjük, ajakterpesz biztosítja a kényelmet. A fogak felszínére felvisszük a 25% aktív hidrogén-peroxid tartalmú zselét, melyet lámpával aktiválunk — a felszabaduló aktív oxigén egyenletesen eltávolítja az elszíneződéseket. A kezelést érzékenységet csökkentő fluoridos oldattal zárjuk.",
    },
    {
      title: "Otthoni, fenntartó fázis",
      body: "A rendelőben lenyomatokat veszünk, melyek alapján egyedi fogfehérítő síneket készíttetünk. A síneket éjszakára helyezi fel, az átlagos fehérítési idő 4-6 nap. Az otthoni zselék biztonságosság miatt kisebb koncentrációban tartalmaznak karbamid-peroxidot (kb. 15% aktív hidrogén-peroxid). Mindezt fogorvosa szoros kontrollja mellett javasoljuk.",
    },
  ],
  calloutTitle: "Készen áll egy ragyogóbb mosolyra?",
  calloutBody:
    "A fogfehérítést mindig megelőzi egy alapos vizsgálat és szájhigiéniás kezelés — így a végeredmény tartós és egyenletes lesz.",
  calloutCta: "Időpontot kérek",
};

const EN = {
  introTitle: "A confident smile with teeth whitening",
  introLead:
    "A winning smile and beautiful, white teeth make us more confident in everyday life and more successful in our careers.",
  introBody:
    "Teeth whitening today is a safe and easily performed procedure that we carry out day after day in our clinic. We use the most modern whitening methods for our patients' satisfied, irresistible smile.",
  discTitle: "External and internal discolouration",
  disc: [
    {
      title: "External discolouration",
      body: "It can be caused by tartar, coffee, frequent tea consumption, smoking and improper brushing technique. We remove these during the oral hygiene treatment: with Prophy Mate salt polishing, Piezo scaling and polishing with a special abrasive paste.",
    },
    {
      title: "Internal discolouration",
      body: "Discolouration affecting the deeper layers of the tooth can be caused by an originally darker tooth colour, medications taken in childhood, enamel and dentin developmental disorders, or dead or improperly root-treated teeth.",
    },
  ],
  discBody1:
    "We treat internal discolouration with gels containing carbamide peroxide or hydrogen peroxide and a special LED activator light, which together decolourise the pigments causing the discolouration through a faster oxidation mechanism. Numerous international studies confirm that even ",
  discShades: "5–8 shades of lightening",
  discBody2: " can be safely achieved.",
  stepsTitle: "The course of the treatment",
  steps: [
    {
      title: "Preparation",
      body: "Dental examination and professional oral hygiene treatment. Fillings with poor margins and decayed teeth must also be treated — if the new fillings affect the aesthetic zone, we apply a temporary filling and only finish their treatment after whitening, now matching the filling material colour to the new tooth shade.",
    },
    {
      title: "In-office whitening",
      body: "We record the starting tooth colour in photos and select the desired shade. We protect the lips with cream and the gums with a special gum mask and “foam”, while a lip retractor provides comfort. We apply the gel containing 25% active hydrogen peroxide to the tooth surface and activate it with a lamp — the released active oxygen evenly removes the discolouration. We finish the treatment with a sensitivity-reducing fluoride solution.",
    },
    {
      title: "Home maintenance phase",
      body: "We take impressions in the clinic, based on which we have custom whitening trays made. You wear the trays overnight; the average whitening time is 4–6 days. For safety, the home gels contain carbamide peroxide in a lower concentration (about 15% active hydrogen peroxide). We recommend all of this under the close supervision of your dentist.",
    },
  ],
  calloutTitle: "Ready for a brighter smile?",
  calloutBody:
    "Teeth whitening is always preceded by a thorough examination and oral hygiene treatment — so the result is lasting and even.",
  calloutCta: "Book an appointment",
};
