import { BulletList, Callout, CardGrid, Lead, ProcessSteps, Section, SubSection } from "../ui";
import type { ServiceContentProps } from "./index";

export default function SzajhigieniaContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      <Section title={c.programTitle}>
        <p>{c.programBody1}</p>
        <p>{c.programBody2}</p>
      </Section>

      <Section title={c.tartarTitle}>
        <p>{c.tartarBody1}</p>
        <p>{c.tartarBody2}</p>
        <Callout title={c.tartarWhyTitle} body={<BulletList items={c.tartarWhy} />} />
      </Section>

      <Section title={c.toolsTitle}>
        <SubSection title={c.brushTitle}>
          <p>{c.brushBody1}</p>
          <p>{c.brushBody2}</p>
        </SubSection>

        <SubSection title={c.replaceTitle}>
          <p>{c.replaceBody}</p>
        </SubSection>

        <SubSection title={c.flossTitle}>
          {c.floss.map((f, i) => (
            <p key={i}>
              <strong className="text-brand-800">{f.label}:</strong> {f.text}
            </p>
          ))}
        </SubSection>

        <SubSection title={c.rinseTitle}>
          <CardGrid items={c.rinse} />
        </SubSection>
      </Section>

      <Section title={c.clinicTitle}>
        <ProcessSteps steps={c.clinic} />
      </Section>
    </div>
  );
}

const HU = {
  introTitle: "Egészséges mosoly, hosszú távú eredmény",
  introLead:
    "Egészséges mosolya erősíti önbizalmát és sikereit a mindennapokban. Munkánk hosszú távú eredményességének feltétele az Ön szép és egészséges mosolya.",
  introBody:
    "Ennek alapja, hogy pácienseink elsajátítsák az esetüknek megfelelő fogmosási technikát, melyet egyéni szájhigiéniás programunk valósít meg. Számtalan tudományos vizsgálat bizonyította, hogy a fogkő és az ínygyulladás jelenlétének egészség- és fogkárosító hatása is van: szívbetegséget, gócbetegségeket (hajhullást, bőrgyulladásokat, nőgyógyászati gyulladásokat, szembetegségeket, stb.) és koraszülés okozója is lehet.",
  programTitle: "Az egyéni szájhigiéniás program",
  programBody1:
    "Az egyéni szájhigiéniás programot a specialista fogorvos és a dentálhigiénikus közösen alakítják ki. Mivel minden eset más és más, csak egy személyre szabott program lehet elég alapos, hogy az hosszú távon az egészséges fogágy fenntartását támogassa. Ennek során felhívjuk a páciens figyelmét a nehezen tisztítható „kritikus” területekre, melyek időről időre visszatérő gyulladásos panaszokat okoztak.",
  programBody2:
    "Rendelőnkben dolgozó dentálhigiénikus kolléganők speciális iTOP (Individually Trained Oral Prophylaxis – egyéni szájhigiénés profilaxis tréning) képzéseken tökéletesítik tudásukat, hogy a legkorszerűbb szájápolási tanácsokkal lássák el pácienseinket. A dentálhigiénikus bemutatja és megtanítja a megfelelő fogmosási technikát és a professzionális szájhigiénia eszközeit, segít kiválasztani a megfelelő fogkefét, fogselymet, fogpótlás alatti tisztító selymeket, az implantátumokat tisztító speciális keféket, elektromos fogkefét és szájöblítő oldatot.",
  tartarTitle: "Mi is pontosan a fogkő?",
  tartarBody1:
    "A fogkő az elmeszesedett dentális plakk, azaz lepedék. Amikor a fogakról nem távolítjuk el a lepedéket maradéktalanul, idővel a nyálból mészkristályok rakódnak le benne, és kialakul a fogkő. A fogkő olyan erősen tapad a foghoz, hogy eltávolítása egyszerű fogmosással kivitelezhetetlen, csak szakember (fogorvos, dentálhigiénikus) tudja megfelelően letisztítani.",
  tartarBody2:
    "A fogkő sárgás-barnás színű felrakódás, leggyakrabban az alsó metszőfogak nyelv felőli felszínén és a felső őrlőfogak orca felőli oldalán alakul ki, ugyanis itt találhatók a nagy nyálmirigyek kivezetőcsövei. A fogkő színét számtalan baktérium anyagcsere termékéből származó festékanyag, vérfesték, vagy külső festékanyagok (koffein, nikotin, kóla) okozzák.",
  tartarWhyTitle: "Miért érdemes komolyan venni a fogkövet?",
  tartarWhy: [
    "A fogkő az ínyt irritálva ínygyulladást okozhat és a gyulladást fenntartja.",
    "A hosszabb távon fennálló gyulladás fogágybetegséget, csontpusztulást, a fogak kilazulását, majd elvesztését okozhatja.",
    "A fogkő esztétikailag csúnya, ápolatlan benyomást tesz.",
    "A fogkő elszínezheti a fogakat és hozzájárul a kellemetlen szájszag kialakulásához.",
  ],
  toolsTitle: "Eszközök, melyeket használhat otthon",
  brushTitle: "Milyen fogkefét válasszunk?",
  brushBody1:
    "A jó fogkefe egyszerű, közepes vagy lágy szálerősségű, sűrű szálakból áll és kisebb fejű. Fontos, hogy a műanyag sörték vége legömbölyített legyen, így nem rostozódnak és nem sértik meg a fogágyat. A bonyolult fejkiképzésű, rugalmas nyakú változatokkal nem lehet elég pontosan irányítani a tisztító, seprő mozdulatokat — minél egyszerűbb, annál jobb.",
  brushBody2:
    "Az elektromos fogkefék közül a kisebb kerek fejű, oda-vissza forgó mozgást végző változatot ajánljuk; ehhez is kapható puhább „sensitive” fej. Az egycsomós fogkefe pontos fogközi tisztításra alkalmas, használata viszont időigényes. A helyes fogmosási technika legalább annyira fontos, mint maga a fogkefe.",
  replaceTitle: "Mikor cseréljük a fogkefét?",
  replaceBody:
    "Általánosságban 3 havonta ajánlott. Egy használt fogkefén átlagosan 1,2 millió baktérium van. Fontos, hogy a fogkefét úgy tároljuk, hogy minden nap alaposan ki tudjon száradni — a nedves közeg kedvező a baktériumok számára. Ha a családban nátha, influenza vagy fertőző betegség jelentkezik, utána minden fogkefét le kell cserélni.",
  flossTitle: "Fogselyem és fogközi kefe",
  floss: [
    {
      label: "Hagyományos fogselyem",
      text: "a szomszédos fogak közötti lepedék eltávolítására szolgál. Használatát külön meg kell tanulni — különösen torlódott frontfogak területén lehet hasznos. Legalább 50 cm darabot tépjünk le egy alapos tisztításhoz, és mindig tiszta selymet vezessünk a fogak közé, kifelé mozgatva.",
    },
    {
      label: "Speciális fogselymek",
      text: "fogpótlások alatti tisztításhoz, implantátumokhoz és sínezett fogak között különböző vastagságú, szálanként álló változatokat használunk.",
    },
    {
      label: "Fogközi kefe",
      text: "a fogak szomszédos felszíneinek tisztítására. Bemérjük a fogközt egy speciális szondával, és ez alapján választunk ki több lehetőséget, amit otthon kipróbál, majd egy következő alkalommal átbeszélünk.",
    },
  ],
  rinseTitle: "Szájöblítők, nyelvkaparó, lepedékfestő",
  rinse: [
    {
      title: "Szájöblítő folyadékok",
      body: "Fogágybetegségek kezelésének kiegészítésére chlorhexidin-diglükonát (CHX) hatóanyagú szájöblítőt javaslunk. Egészséges fogágy esetén fluoriddal kombinált oldat ajánlott. Soha nem helyettesíti a fogmosást.",
    },
    {
      title: "Nyelvkaparó",
      body: "A nyelvháton számtalan kórokozó tapad meg. Rossz lehelet esetén a nyelvkaparó használata a napi rutin része kell legyen.",
    },
    {
      title: "Lepedékfestő tabletta",
      body: "Fogmosás után elrágva lilára festi a visszamaradt lepedéket — segít ellenőrizni, hogy alapos volt-e a tisztítás. Gyermekek tanításakor különösen hasznos.",
    },
  ],
  clinicTitle: "A rendelőben végzett szájhigiéniás kezelés",
  clinic: [
    {
      title: "1. ülés — állapotfelmérés és fogkőeltávolítás",
      body: "Parodontológiai státuszfelvétel, az alsó és felső fogsoron teljes ultrahangos fogkőeltávolítás és tisztítás, majd speciális kézi műszerekkel átdolgozzuk a kezelt felületeket. A fogfelszíneket abrazív pasztával és gumiharangokkal polírozzuk. Akinél inkább elszíneződés a jellemző, már első alkalommal ajánljuk a „Prophy Mate neo” sópolírozást.",
    },
    {
      title: "2. ülés — mélyebb területek és berni rizikóbecslés",
      body: "Az ínygyulladás javul, a duzzadt íny visszahúzódik, így olyan területekről is eltávolítható a fogkő, melyeket az előző kezelés alkalmával nem lehetett elérni. A kezelést sópolírozással egészítjük ki. Befejezéskor felvesszük Önt egyéni szájhigiénés programunkba, és berni rizikóbecslés alapján 3, 4 vagy 6 havonta rendeljük vissza.",
    },
  ],
};

const EN = {
  introTitle: "A healthy smile, lasting results",
  introLead:
    "A healthy smile strengthens your confidence and success in everyday life. A condition for the long-term success of our work is your beautiful and healthy smile.",
  introBody:
    "The basis of this is that our patients learn the brushing technique appropriate to their case, which our individual oral hygiene program provides. Numerous scientific studies have proven that the presence of tartar and gingivitis also has health- and tooth-damaging effects: it can cause heart disease, focal diseases (hair loss, skin inflammations, gynaecological inflammations, eye diseases, etc.) and even premature birth.",
  programTitle: "The individual oral hygiene program",
  programBody1:
    "The individual oral hygiene program is designed jointly by the specialist dentist and the dental hygienist. Since every case is different, only a personalised program can be thorough enough to support the long-term maintenance of a healthy periodontium. During this, we draw the patient's attention to the hard-to-clean “critical” areas that have from time to time caused recurring inflammatory complaints.",
  programBody2:
    "The dental hygienist colleagues working in our clinic perfect their knowledge in special iTOP (Individually Trained Oral Prophylaxis) courses, so that they can provide our patients with the most modern oral care advice. The dental hygienist demonstrates and teaches the proper brushing technique and the tools of professional oral hygiene, and helps you choose the right toothbrush, dental floss, cleaning floss for under restorations, special brushes for cleaning implants, an electric toothbrush and a mouthwash.",
  tartarTitle: "What exactly is tartar?",
  tartarBody1:
    "Tartar is calcified dental plaque. When plaque is not fully removed from the teeth, over time lime crystals from the saliva deposit into it and tartar forms. Tartar adheres to the tooth so strongly that it cannot be removed by simple brushing — only a professional (dentist, dental hygienist) can clean it off properly.",
  tartarBody2:
    "Tartar is a yellowish-brown deposit that most often forms on the tongue-side surface of the lower incisors and the cheek-side of the upper molars, because this is where the ducts of the large salivary glands are located. The colour of tartar is caused by pigments from the metabolic products of numerous bacteria, blood pigment, or external pigments (caffeine, nicotine, cola).",
  tartarWhyTitle: "Why is it worth taking tartar seriously?",
  tartarWhy: [
    "By irritating the gums, tartar can cause gingivitis and sustain the inflammation.",
    "Long-standing inflammation can cause periodontal disease, bone loss, loosening and then loss of the teeth.",
    "Tartar looks aesthetically unpleasant and gives an unkempt impression.",
    "Tartar can discolour the teeth and contributes to the development of unpleasant breath odour.",
  ],
  toolsTitle: "Tools you can use at home",
  brushTitle: "Which toothbrush should we choose?",
  brushBody1:
    "A good toothbrush is simple, of medium or soft bristle strength, made of dense bristles and with a smaller head. It is important that the ends of the plastic bristles are rounded, so they do not fray and do not injure the periodontium. With versions that have complex head shapes and flexible necks, the cleaning, sweeping movements cannot be directed accurately enough — the simpler, the better.",
  brushBody2:
    "Among electric toothbrushes, we recommend the version with a smaller round head performing a back-and-forth rotating movement; a softer “sensitive” head is also available for it. A single-tuft toothbrush is suitable for precise interdental cleaning, but its use is time-consuming. The correct brushing technique is at least as important as the toothbrush itself.",
  replaceTitle: "When should we replace the toothbrush?",
  replaceBody:
    "In general, every 3 months is recommended. A used toothbrush has an average of 1.2 million bacteria on it. It is important to store the toothbrush so that it can dry out thoroughly every day — a moist environment is favourable for bacteria. If a cold, flu or contagious illness appears in the family, every toothbrush must be replaced afterwards.",
  flossTitle: "Dental floss and interdental brush",
  floss: [
    {
      label: "Traditional dental floss",
      text: "used to remove plaque between adjacent teeth. Its use has to be learned separately — it can be especially useful in areas of crowded front teeth. Tear off at least 50 cm for a thorough cleaning, and always guide clean floss between the teeth, moving it outwards.",
    },
    {
      label: "Special flosses",
      text: "for cleaning under restorations, for implants and between splinted teeth we use versions of different thickness that stand up as individual strands.",
    },
    {
      label: "Interdental brush",
      text: "for cleaning the adjacent surfaces of the teeth. We measure the interdental space with a special probe, and based on this we select several options that you try at home, then discuss on a subsequent occasion.",
    },
  ],
  rinseTitle: "Mouthwashes, tongue scraper, plaque-disclosing tablet",
  rinse: [
    {
      title: "Mouthwash liquids",
      body: "As a supplement to the treatment of periodontal diseases, we recommend a mouthwash with chlorhexidine digluconate (CHX). For a healthy periodontium, a solution combined with fluoride is recommended. It never replaces brushing.",
    },
    {
      title: "Tongue scraper",
      body: "Numerous pathogens adhere to the back of the tongue. In case of bad breath, using a tongue scraper should be part of the daily routine.",
    },
    {
      title: "Plaque-disclosing tablet",
      body: "Chewed after brushing, it dyes the remaining plaque purple — it helps check whether the cleaning was thorough. Especially useful when teaching children.",
    },
  ],
  clinicTitle: "Oral hygiene treatment performed in the clinic",
  clinic: [
    {
      title: "Session 1 — assessment and tartar removal",
      body: "Recording the periodontal status, full ultrasonic tartar removal and cleaning on the lower and upper dentition, then we rework the treated surfaces with special hand instruments. We polish the tooth surfaces with abrasive paste and rubber cups. For those with more discolouration, we recommend the “Prophy Mate neo” salt polishing already at the first visit.",
    },
    {
      title: "Session 2 — deeper areas and Bern risk assessment",
      body: "The gingivitis improves, the swollen gums recede, so tartar can also be removed from areas that could not be reached during the previous treatment. We complement the treatment with salt polishing. At the end we enrol you in our individual oral hygiene program and, based on the Bern risk assessment, schedule your return every 3, 4 or 6 months.",
    },
  ],
};
