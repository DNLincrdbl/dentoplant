import { Callout, InfoPanel, Lead, ProcessSteps, Section, SubSection } from "../ui";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { ServiceContentProps } from "./index";

export default function GyokerkezelesContent({ locale }: ServiceContentProps) {
  const en = locale === "en";
  const c = en ? EN : HU;
  return (
    <div className="space-y-12">
      <Section title={c.introTitle}>
        <Lead>{c.introLead}</Lead>
        <p>{c.introBody}</p>
      </Section>

      <Section title={c.painTitle}>
        <p>{c.painBody}</p>
        <InfoPanel title={c.focusTitle}>
          <p>{c.focusBody}</p>
        </InfoPanel>
      </Section>

      <Section title={c.stepsTitle}>
        <ProcessSteps steps={c.steps} />
      </Section>

      <Section title={c.revTitle}>
        <p>{c.revBody1}</p>
        <p>{c.revBody2}</p>
        <SubSection title={c.revSubTitle}>
          <p>{c.revSubBody}</p>
        </SubSection>
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
  introTitle: "Gyökérkezelés a fogak megtartásáért",
  introLead:
    "A gyökérkezelés a fog megtartását szolgáló beavatkozás, melyet akkor végzünk, ha a pulpa, vagyis a fogbél visszafordíthatatlan károsodást szenvedett.",
  introBody:
    "A gyökérkezelés szükségességét számtalan kórkép okozhatja: előrehaladott, mély szuvas folyamat, a fog traumája, fogágybetegséggel összefüggő gyulladások, abrázió, erózió. Egy komplex fogászati ellátást nyújtó rendelőben alapvető feltétel, hogy a gyökérkezeléseket felkészült stáb végezze, mert a későbbi fogpótlásoknak sokszor ezek a fogak lesznek a pillérei. A Dentoplant Fogászati és Implantológiai Rendelőben a gyökérkezeléseket korszerű fájdalomcsillapítás mellett, a legmagasabb szakmai irányelvek szerint végzik kollégáink.",
  painTitle: "Fogfájdalom és fogbélgyulladás",
  painBody:
    "Fogbélgyulladás esetén hideg vagy meleg ingerekre a fog éles, percekig elhúzódó fájdalommal reagál; előrehaladott folyamat esetén spontán fájdalom jelentkezik — tipikus példa az éjszaka jelentkező, fájdalomcsillapítóra nem reagáló fájdalom. A fog azonban lehet panaszmentes is, ha a fogbél már elhalt: ekkor a baktériumok zavartalanul nőnek, krónikus gyulladást tartanak fenn, amely a gyökércsúcson át a fog körüli szövetekre is továbbterjedhet. Az akut gyökércsúcsi gyulladás akár tályoghoz vezethet, kezeletlen esetben súlyos szövődményekkel. A krónikus gyökércsúcsi gyulladás általában tünetszegény — sokszor csak röntgenfelvételen kerül diagnosztizálásra. Ezek az elhalt fogak gócbetegség kiindulópontjai lehetnek.",
  focusTitle: "A fogászati góc",
  focusBody:
    "A fogászati góc helyileg tüneteket alig okozó, krónikus gyulladásos folyamat — ebből kórokozók és toxinok is juthatnak a szervezetbe. A leggyakoribb másodlagos, góc eredetű betegségek: foltos hajhullás, ekcémák, allergiás kiütések, szemgyulladások, ízületi gyulladások, érgyulladások, vesebetegségek.",
  stepsTitle: "A gyökérkezelés menete",
  steps: [
    {
      title: "Megnyitás és hozzáférés kialakítása",
      body: "Megfelelő érzéstelenítés után a fog trepanálása, és olyan nyílás kialakítása a fogkoronán, hogy a fogbélkamra és a gyökércsatornák bemenete kellően láthatóvá és hozzáférhetővé váljon.",
    },
    {
      title: "Kofferdám izolálás",
      body: "A nyálrekesz felhelyezésével megakadályozzuk, hogy a nyálból további baktériumok kerüljenek a gyökércsatornába, száraz körülményeket biztosítunk a gyökértöméshez, és az egész kezelést tisztán, precízen tudjuk elvégezni.",
    },
    {
      title: "A gyökércsatorna-rendszer feltérképezése",
      body: "Röntgenfelvételek, és szükség esetén CBCT 3D felvétel segítségével pontosítjuk a csatornák lefutását. A modern CBCT-vel célzottan tudunk az adott fogról felvételt készíteni, így jelentősen kisebb a sugárterhelés is.",
    },
    {
      title: "Munkahossz meghatározása",
      body: "Helyi röntgenfelvétellel (tűkontroll) és elektromos endométerrel állapítjuk meg, mely konstans elektromos impedanciát mér a száj lágyrészei és az apicalis parodontium között. Erre a célra a korszerű Morita DentaPort ZX© rendszert alkalmazzuk.",
    },
    {
      title: "Csatornatágítás és tisztítás",
      body: "Korszerű Endowave© és ProTaper Next© gépi tűkkel hatékonyan, gyorsan tisztítjuk a gyökércsatorna-rendszert. A mechanikai megmunkálást alapos kémiai átöblítéssel egészítjük ki, hogy a megmunkálás által el nem ért területek és a mellékcsatornák is fertőtlenítve legyenek.",
    },
    {
      title: "Köztes ellátás",
      body: "A következő ülésig fertőtlenítő, gyógyhatású kálcium-hidroxid pasztát helyezünk a csatornarendszerbe, és ideiglenes töméssel látjuk el a fogat.",
    },
    {
      title: "Gyökértömés (laterál kondenzáció)",
      body: "Guttapercha pointokat és sealert használva, point-kontroll röntgennel ellenőrizve töltjük fel a csatornát. Spreader eszközzel tömörítve további pointokat helyezünk, majd újabb röntgennel ellenőrizzük az eredményt.",
    },
    {
      title: "Restaurálás",
      body: "A gyökérkezelt fog elveszti keringését, ezért hajlamosabbá válik törésre — meg kell erősíteni. Üvegszállal megerősített csap és kompozit, illetve esztétikus tömés / inlay / korona biztosítja a tartós, jól záró helyreállítást.",
    },
  ],
  revTitle: "A gyökértömés revíziója — a fog utolsó esélye",
  revBody1:
    "A revízió a korábban készült, sikertelen gyökérkezelések megismétlése — ez az utolsó védvonal, mielőtt a fog megmentése vagy eltávolítása érdekében sebészi eszközökhöz nyúlnánk. Általában a régi, rosszul záródó vagy inkomplett gyökértömés cseréjét jelenti.",
  revBody2:
    "Eltávolítjuk a régi gyökértömést, és többszöri ismételt kezelések alkalmával igyekszünk megoldani minden tényezőt, ami a sikertelenséget okozhatta — meg nem talált gyökércsatorna, elégtelen tágítás-átöblítés, helytelen munkahossz. Csak ezután készítjük el az új gyökértömést. Ha a fog 2 hónappal a gyökértömés után is panaszos, duzzanatos, vagy gyökércsúcsi lézió alakul ki utólag, a revízió elkerülhetetlen.",
  revSubTitle: "Mikor javasolt panaszmentes fognál is?",
  revSubBody:
    "Akkor is mérlegeljük a revíziót, ha a páciens panaszmentes, de a röntgenfelvételen elégtelen a gyökértömés és a fogat pillérként szeretnénk felhasználni egy restaurátumhoz, vagy implantátumot tervezünk a fog mellé. Ilyenkor különösen fontos a cseréje, hogy a későbbi költséges fogpótlást vagy implantátumot ne veszélyeztesse egy kiújuló gyulladás.",
  calloutTitle: "Mentsük meg a saját fogát",
  calloutBody:
    "A korszerű, mikroszkóp-pontos gyökérkezeléssel olyan fogak is megtarthatóak, amelyeket korábban talán már menthetetlennek ítéltek. Egy alapos vizsgálat és CBCT diagnosztika alapján pontos képet kap a lehetőségekről.",
  calloutCta: "Időpontot kérek",
};

const EN = {
  introTitle: "Root canal treatment to save teeth",
  introLead:
    "Root canal treatment is a procedure aimed at saving the tooth, which we perform when the pulp (the dental nerve) has suffered irreversible damage.",
  introBody:
    "The need for root canal treatment can be caused by numerous conditions: advanced, deep decay, tooth trauma, inflammation associated with periodontal disease, abrasion, erosion. In a clinic providing comprehensive dental care, it is essential that root canal treatments are carried out by a well-trained team, because these teeth often become the abutments of later restorations. At the Dentoplant Dental and Implantology Clinic, our colleagues perform root canal treatments with modern pain relief, according to the highest professional guidelines.",
  painTitle: "Toothache and pulpitis",
  painBody:
    "In the case of pulpitis, the tooth reacts to cold or hot stimuli with sharp pain lasting for minutes; in an advanced process, spontaneous pain occurs — a typical example is pain that appears at night and does not respond to painkillers. However, the tooth can also be symptom-free if the pulp has already died: in this case the bacteria grow undisturbed and sustain a chronic inflammation that can spread through the root tip to the tissues around the tooth. Acute apical inflammation can even lead to an abscess, with serious complications if left untreated. Chronic apical inflammation is usually low in symptoms — it is often only diagnosed on an X-ray. These dead teeth can be the starting point of focal disease.",
  focusTitle: "The dental focus",
  focusBody:
    "The dental focus is a chronic inflammatory process that hardly causes local symptoms — pathogens and toxins can also enter the body from it. The most common secondary, focus-related diseases: patchy hair loss, eczema, allergic rashes, eye inflammations, joint inflammations, vascular inflammations, kidney diseases.",
  stepsTitle: "The course of root canal treatment",
  steps: [
    {
      title: "Opening and creating access",
      body: "After appropriate anaesthesia, trepanation of the tooth and creating an opening in the crown so that the pulp chamber and the entrances of the root canals become sufficiently visible and accessible.",
    },
    {
      title: "Rubber dam isolation",
      body: "By placing the rubber dam, we prevent further bacteria from the saliva entering the root canal, provide dry conditions for the root filling, and can carry out the whole treatment cleanly and precisely.",
    },
    {
      title: "Mapping the root canal system",
      body: "With X-rays and, if necessary, a CBCT 3D scan, we clarify the course of the canals. With modern CBCT we can take a targeted image of the given tooth, so the radiation exposure is also significantly lower.",
    },
    {
      title: "Determining the working length",
      body: "We determine it with a local X-ray (file control) and an electronic apex locator, which measures the constant electrical impedance between the soft tissues of the mouth and the apical periodontium. For this purpose we use the modern Morita DentaPort ZX© system.",
    },
    {
      title: "Canal shaping and cleaning",
      body: "With modern Endowave© and ProTaper Next© rotary files, we clean the root canal system efficiently and quickly. We complement the mechanical work with thorough chemical irrigation, so that areas not reached by the instruments and the accessory canals are also disinfected.",
    },
    {
      title: "Interim care",
      body: "Until the next session, we place a disinfecting, medicinal calcium hydroxide paste into the canal system and provide the tooth with a temporary filling.",
    },
    {
      title: "Root filling (lateral condensation)",
      body: "Using gutta-percha points and a sealer, checked with a point-control X-ray, we fill the canal. Compacting with a spreader, we place additional points, then check the result with another X-ray.",
    },
    {
      title: "Restoration",
      body: "A root-treated tooth loses its blood supply and therefore becomes more prone to fracture — it must be reinforced. A fibreglass-reinforced post and composite, or an aesthetic filling / inlay / crown provides a durable, well-sealing restoration.",
    },
  ],
  revTitle: "Retreatment of a root filling — the tooth's last chance",
  revBody1:
    "Retreatment is the repetition of previously performed, unsuccessful root canal treatments — it is the last line of defence before resorting to surgical means to save or remove the tooth. It usually means replacing the old, poorly sealing or incomplete root filling.",
  revBody2:
    "We remove the old root filling and, over several repeated treatments, try to resolve every factor that may have caused the failure — an undiscovered root canal, insufficient shaping and irrigation, incorrect working length. Only after this do we create the new root filling. If the tooth is still painful or swollen 2 months after the root filling, or an apical lesion develops later, retreatment is unavoidable.",
  revSubTitle: "When is it recommended even for a symptom-free tooth?",
  revSubBody:
    "We also consider retreatment if the patient is symptom-free but the X-ray shows an inadequate root filling and we want to use the tooth as an abutment for a restoration, or we are planning an implant next to the tooth. In such cases replacing it is especially important, so that a recurring inflammation does not endanger the later, expensive restoration or implant.",
  calloutTitle: "Let's save your own tooth",
  calloutBody:
    "With modern, microscope-precise root canal treatment, even teeth that were previously perhaps deemed hopeless can be retained. Based on a thorough examination and CBCT diagnostics you receive an accurate picture of the options.",
  calloutCta: "Book an appointment",
};
