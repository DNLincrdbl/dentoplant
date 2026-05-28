import { BulletList, Callout, CardGrid, Lead, ProcessSteps, Section } from "../ui";

export default function FogfeheritesContent() {
  return (
    <div className="space-y-12">
      <Section title="Magabiztos mosoly fogfehérítéssel">
        <Lead>
          Egy megnyerő mosoly és szép, fehér fogak magabiztosabbá tesznek hétköznapjainkban,
          sikeresebbé karrierünkben.
        </Lead>
        <p>
          A fogfehérítés napjainkban biztonságos és könnyen elvégezhető beavatkozás, melyet
          rendelőnkben is nap mint nap végzünk. Rendelőnkben a legkorszerűbb fogfehérítési
          módszereket alkalmazzuk pácienseink elégedett, ellenállhatatlan mosolyáért.
        </p>
      </Section>

      <Section title="Külső és belső elszíneződések">
        <CardGrid
          items={[
            {
              title: "Külső elszíneződések",
              body: "Okozhatja a fogkő, kávé, gyakori teafogyasztás, dohányzás és a nem megfelelő fogmosási technika. Ezeket a szájhigiéniás kezelés során eltávolítjuk: Prophy Mate sópolírozással, Piezo depurálással és speciális abrazív pasztával történő polírozással.",
            },
            {
              title: "Belső elszíneződések",
              body: "A fog mélyebb rétegeit érintő elszíneződéseket egy eredetileg sötétebb fogszín, gyermekkorban szedett gyógyszerek, zománc- és dentinfejlődési rendellenességek, illetve elhalt vagy nem megfelelően gyökérkezelt fogak okozhatják.",
            },
          ]}
        />
        <p>
          A belső elszíneződéseket karbamid-peroxidot vagy hidrogén-peroxidot tartalmazó zselékkel
          és speciális LED lámpás aktivátor fénnyel kezeljük, melyek együtt gyorsabb oxidációs
          mechanizmus során elszíntelenítik az elszíneződést okozó pigmenteket. Számtalan
          nemzetközi vizsgálat tanúsítja, hogy akár <strong>5-8 árnyalatnyi világosodás</strong> is
          biztonságosan elérhető.
        </p>
      </Section>

      <Section title="A kezelés menete">
        <ProcessSteps
          steps={[
            {
              title: "Előkészítés",
              body: (
                <>
                  Fogorvosi vizsgálat és professzionális szájhigiéniás kezelés. A hibás záródású
                  töméseket és szuvas fogakat is el kell látni — ha az újonnan készülő tömések az
                  esztétikai zónát érintik, ideiglenes tömést alkalmazunk, és csak a fehérítés után
                  fejezzük be ezek kezelését, immár az új fogszínhez választva a tömőanyag színét.
                </>
              ),
            },
            {
              title: "Rendelői fogfehérítés (In Office Whitening)",
              body: (
                <>
                  Fotókon rögzítjük a kiindulási fogszínt és kiválasztjuk az elérni kívánt
                  árnyalatot. Az ajkakat krémmel, a fogínyt speciális ínymaszkkal és „habbal"
                  védjük, ajakterpesz biztosítja a kényelmet. A fogak felszínére felvisszük a 25%
                  aktív hidrogén-peroxid tartalmú zselét, melyet lámpával aktiválunk — a
                  felszabaduló aktív oxigén egyenletesen eltávolítja az elszíneződéseket. A
                  kezelést érzékenységet csökkentő fluoridos oldattal zárjuk.
                </>
              ),
            },
            {
              title: "Otthoni, fenntartó fázis",
              body: (
                <>
                  A rendelőben lenyomatokat veszünk, melyek alapján egyedi fogfehérítő síneket
                  készíttetünk. A síneket éjszakára helyezi fel, az átlagos fehérítési idő 4-6
                  nap. Az otthoni zselék biztonságosság miatt kisebb koncentrációban tartalmaznak
                  karbamid-peroxidot (kb. 15% aktív hidrogén-peroxid). Mindezt fogorvosa szoros
                  kontrollja mellett javasoljuk.
                </>
              ),
            },
          ]}
        />
      </Section>

      <Callout
        title="Készen áll egy ragyogóbb mosolyra?"
        body="A fogfehérítést mindig megelőzi egy alapos vizsgálat és szájhigiéniás kezelés — így a végeredmény tartós és egyenletes lesz."
        ctaLabel="Időpontot kérek"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
