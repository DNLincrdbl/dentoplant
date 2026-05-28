import { BulletList, Callout, Lead, Section } from "../ui";

export default function ElsoTalalkozasContent() {
  return (
    <div className="space-y-12">
      <Section title="Az első találkozás">
        <Lead>
          A pácienseinkkel történő első találkozáskor beszéljük meg, milyen fogászati problémára
          vár Tőlünk kezelési tanácsot.
        </Lead>
        <p>
          Ekkor Önnek egy kérdőívet kell kitöltenie, amely személyes adataira, gyógyszerszedési
          szokásaira, allergiájára és esetleges megbetegedéseire vonatkozó kérdéseket tartalmaz. A
          pontos kitöltésre különös gondot kell fordítania, mert először csak ennek segítségével
          tudjuk a kockázatokat felmérni és Önt a megfelelő előkészítésben részesíteni.
        </p>
        <p>
          Továbbiakban egy fogorvosi vizsgálatra kerül sor, melynek során rögzítésre kerül a
          kiindulási státusz. Az első konzílium szükséges része egy korszerű, digitális panoráma
          röntgen felvétel is, amelynek segítségével további fontos információkat kapunk a fogak,
          állcsontok és lágyrészek állapotáról, valamint a kiindulási fotó készítése. Műtéti
          tervezéskor további vizsgálatok is szükségesek, mint Cone Beam CT felvétel és vérkép.
        </p>
        <p>
          Minden új pácienssel való első találkozás egyben egy szájhigiéniás állapotfelmérés is,
          melynek során áttekintjük az íny és fogkő pillanatnyi állapotát, melyet fotókon rögzítünk
          és be is mutatjuk, mint kiindulási állapotot. Minden alkalommal szájüregi rákszűrést is
          végzünk. Szájhigiéniás tanácsadást és saját adottságaihoz igazított egyéni szájhigiéniás
          programot adunk.
        </p>
      </Section>

      <Section title="A pontos diagnózishoz szükséges vizsgálatok">
        <BulletList
          items={[
            "Digitális röntgenfelvétel",
            "Cone Beam CT felvétel",
            "Tasakmérések, berni parodontológiai státusz felvétele",
            "Fogágytasakokból vett baktériumok tenyésztési eredménye",
            "Kiindulási helyzet rögzítése fotókon",
            "Vérkép",
            "Tanulmányi minták készítése",
          ]}
        />
      </Section>

      <Callout
        title="Különös figyelmet szentelünk a szájhigiéniának"
        body={
          <>
            Munkánk hosszú távú eredményességének feltétele, hogy pácienseink elsajátítsák az
            esetüknek megfelelő fogmosási technikát, melyet egyéni szájhigiéniás programunk valósít
            meg. Az eredmény: egészséges fogak és ép, egészséges íny. Szaktanácsadást és személyre
            szóló kezelést kínálunk Önnek.
          </>
        }
        ctaLabel="Bejelentkezés"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
