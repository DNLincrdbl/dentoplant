import { BulletList, Callout, CardGrid, Lead, NumberedList, Section } from "../ui";

export default function InygyulladasContent() {
  return (
    <div className="space-y-12">
      <Section title="Mi az ínygyulladás?">
        <Lead>
          Az ínygyulladás a fogakat körülvevő íny felületes gyulladása, amely általában jól
          kezelhető.
        </Lead>
        <p>
          Időben észrevett ínygyulladás csak az ínyszélt érinti, ami megfelelő tisztítással és
          helyileg alkalmazott gyógyszerekkel szépen gyógyul. Ha azonban kezelés nélkül hagyjuk és
          nem fordulunk fogorvoshoz, akkor a legegyszerűbb gyulladás is tovább terjedhet a fogágy,
          valamint a mélyebb szövetek felé, és akár egy destruktív fogágybetegség alapja is lehet.
        </p>
        <p>
          Leggyakrabban az ínyszél mentén felhalmozódott dentális plakk, azaz a lepedék okozza, de
          ismertek nem plakk okozta ínygyulladási formák is. Kialakulásában szerepet játszhatnak
          szisztémás faktorok, hormonális tényezők, gyógyszerek, specifikus bakteriális, vírusos,
          gombás fertőzések, vagy nem megfelelően záródó, pontatlan koronaszél is. Gyakran kíséri a
          terhességet is.
        </p>
      </Section>

      <Section title="Az ínygyulladások főbb típusai">
        <NumberedList
          items={[
            <span key="1">
              <strong className="text-brand-800">Plakk okozta ínygyulladások:</strong> önmagukban,
              vagy egyéb irritáló tényezőkkel kombinálódva.
            </span>,
            <span key="2">
              <strong className="text-brand-800">Általános betegség hátterében:</strong> hormonális
              vagy hematológiai eredetűek, illetve gyógyszerszedéshez vagy hiánybetegségekhez
              társuló formák.
            </span>,
            <span key="3">
              <strong className="text-brand-800">Nem plakk okozta ínygyulladások:</strong>
              specifikus bakteriális, vírusos vagy gombás infekciók, genetikai háttérrel
              jelentkező és bőrgyógyászati kórképekkel együtt járó formák.
            </span>,
            <span key="4">
              <strong className="text-brand-800">Traumás ínyléziók:</strong> mechanikai sérülésből
              eredő gyulladások, valamint allergiás vagy egyéb eredetű ínybetegségek.
            </span>,
          ]}
        />
      </Section>

      <Section title="Az ínygyulladás tünetei">
        <p>
          Az ínygyulladás nagyon gyakori első tünete a fogmosáskor jelentkező vérzés. Még időben
          kérjen tanácsot a Dentoplant Fogorvosi Rendelő szakembereitől!
        </p>
        <CardGrid
          columns={3}
          items={[
            { title: "Ínyvérzés", body: "Különösen fogmosás közben jelentkezve." },
            { title: "Íny duzzanat", body: "Az ínyszél megvastagodása." },
            { title: "Fájdalom, érzékenység", body: "Étkezés vagy fogmosás során." },
            { title: "Vörös íny", body: "A gyulladás következtében kialakult színváltozás." },
            { title: "Lila íny", body: "Súlyosabb gyulladás kísérőjelensége." },
            { title: "Kontúrváltozás", body: "Az íny felülete és széle is megváltozik." },
          ]}
        />
      </Section>

      <Callout
        title="Megelőzés és kezelés a Dentoplantban"
        body={
          <>
            Fontos az ínygyulladás időben történő kezelése — elhanyagolt esetekben a gyulladás
            mélyebb szövetek felé terjed, ínysorvadás, csontpusztulás jöhet létre, a fogak
            mozgathatóvá válnak, végül fogelvesztés következhet be. Az ínygyulladás megelőzésében
            és gyógyításában is alapvető szerepe van a jó szájhigiéniának. Segítünk a helyes
            fogmosási technika elsajátításában, és egyéni szájhigiénés programunkkal biztosítjuk,
            hogy rendszeres kontroll alatt mindig egészséges maradjon.
          </>
        }
        ctaLabel="Kérjen időpontot"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
