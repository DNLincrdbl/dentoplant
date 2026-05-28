import { BulletList, Callout, Lead, Section, SubSection } from "../ui";

export default function SzajsebeszetContent() {
  return (
    <div className="space-y-12">
      <Section title="Szájsebészeti beavatkozások">
        <Lead>
          Egyszerű és műtéti fogeltávolítástól a bonyolultabb csontpótlásig — szakszerűen, helyi
          érzéstelenítésben, kérésre éber szedálással.
        </Lead>
      </Section>

      <Section title="1. Egyszerű és műtéti fogeltávolítás">
        <p>
          A fogeltávolítások többségében elegendő egy egyszerű műszerrel kibillenteni a beteg
          fogat, viszont a mélyebben fekvő gyökerek, elő nem tört fogak csak szájsebészeti
          kisműtéttel távolíthatóak el. Ezeket a beavatkozásokat <em>feltárásból végzett
          fogeltávolításnak</em> nevezzük. A feltárást helyi érzéstelenítésben végezzük: felnyitjuk
          az ínyt, hogy jól hozzáférjünk a foghoz, majd a lebenyt varratokkal zárjuk.
        </p>
        <p>
          Az otthoni gondos utókezeléssel, a műtött terület hűtésével és a műtét utáni tanácsok
          betartásával sokat tehet azért, hogy kellemesebb legyen a gyógyulási időszak.
        </p>

        <SubSection title="Bölcsességfogak műtéti eltávolítása">
          <p>
            A mélyen fekvő bölcsességfogak eltávolításához szükség van az őket fedő íny
            leválasztására, majd a körülvevő csont részleges eltávolítására. Amennyiben lehetséges,
            a bölcsességfogat feldaraboljuk még a csonton belül, mert így kevesebb saját csont
            elfúrására lesz szükség. A fog eltávolítását követően a csontsebet kitisztítjuk,
            fertőtlenítjük, lazán varrjuk és drainezzük. Különösen fontos a megfelelő otthoni
            utókezelés.
          </p>
        </SubSection>
      </Section>

      <Section title="2. Alveólus prezerváció">
        <p>
          A kihúzott fog helyének <strong>azonnali ellátása</strong> csont- és kötőszövetpótlással.
          Fogeltávolítást követően a kihúzott fog helyén egy kráter alakul ki, amelyet hetek,
          hónapok alatt regenerál a szervezet. A foghúzást közvetlenül követő pár hétben az
          úgynevezett köteges csont lebomlik, és a foghúzás helyén a szövetek „összeesnek".
        </p>
        <p>
          Mindez megelőzhető. Esztétikus területen, vagy olyan régióban, ahová implantátumot
          tervezünk, ez a szövethiány kedvezőtlenül befolyásolja a végeredményt. Az alveólus
          prezerváció során a kihúzott fog helye azonnal kezelhető megfelelő csont- és
          kötőszövetpótlással, így minimális szöveti veszteséggel gyógyul. Ezzel a beavatkozással
          a szomszédos fogak helyzete is kedvezően befolyásolható: nem lazulnak meg, és a fogágy
          stabilizálódik.
        </p>
      </Section>

      <Section title="3. Csontpótlás">
        <p>
          Csontpótlásra akkor van szükség, amikor az elvesztett fogak helyén a csontállomány
          sorvadt, az állcsont vékony, és emiatt nem lehet megfelelő biztonsággal implantátumot
          beültetni. Az elmúlt években a regeneráció a fogászati területen is nagy fejlődést ért
          el: rendelőnkben csak helytálló klinikai eredményekkel igazolt prémium kategóriás
          csontpótlót és membránt építünk be. A csonthiány típusától függően saját csontot vagy
          szintetikus csontpótlók keverékét alkalmazzuk membránokkal.
        </p>
        <p>Csontpótlást végzünk:</p>
        <BulletList
          items={[
            "Foghúzást követően — alveólus prezerváció céljából",
            "Kisebb csonthiányoknál implantátumok körül a fogbeültetéssel egy időben (minor bone augmentation)",
            "A fogelvesztés miatt kialakult sorvadt, vékony állcsont csontpótlására (major bone augmentation)",
            "Arcüreg emeléskor",
            "Megtartott fogak körül regeneráció céljából, parodontális kezelést követően",
          ]}
        />
      </Section>

      <Section title="4. Arcüreg emelés (sinus lift)">
        <p>
          Az arcüreg alapjának helyi érzéstelenítésben végzett megvastagítása. A hiányzó felső
          őrlőfogak helyére sokszor azért nem lehet implantátumot beültetni, mert az arcüreg
          felőli csont nagyon vékony. Ezt részben egyéni anatómiai adottságok okozzák (tág arcüreg,
          arcüregbe benyúló foggyökerek), részben a korábbi fogeltávolítások következtében létrejött
          felső állcsont sorvadás.
        </p>
        <SubSection title="Zárt és nyitott arcüreg emelés">
          <p>
            <strong className="text-brand-800">Zárt arcüreg emelés</strong> során az implantátum
            beültetésével egy időben, az implantátum-fúraton keresztül speciális Summers sinus
            lift sorozatot alkalmazva emelünk.
          </p>
          <p>
            <strong className="text-brand-800">Nyitott arcüreg emeléskor</strong> helyi
            érzéstelenítésben lebenyképzést követően az arcüreg külső oldalfalán egy ablakot
            képzünk, amin keresztül az arcüreg nyálkahártyáját elválasztjuk és felemeljük, majd az
            így kialakult üreget feltöltjük csontpótló anyaggal. Ezt követően az arcüreg falán
            kialakított nyílást megfelelően zárjuk és az ínyt varratokkal az eredeti helyére
            rögzítjük.
          </p>
        </SubSection>
      </Section>

      <Section title="5. Vestibulum plasztika és áthajlásmélyítés">
        <p>Mikor javasolt leggyakrabban?</p>
        <BulletList
          items={[
            <span key="1">
              <strong className="text-brand-800">Praeprotetikai műtétként</strong> — fogatlan
              szájban, ha a kivehető fogpótlás sekély vestibulum miatt leesik. Sokszor elegendő
              csak egy kedvezőtlenül elhelyezkedő izomköteget korrigálni.
            </span>,
            <span key="2">
              <strong className="text-brand-800">Implantátumok körül</strong> — feszes íny
              helyreállítására és szélesítésére, hogy a rágás során a baktériumok ne préselődjenek
              be az ínybarázdába.
            </span>,
            <span key="3">
              <strong className="text-brand-800">Nagyobb csontpótlások után</strong> — a lebenyek
              nyújtása miatt beszűkült áthajlás helyreállítására.
            </span>,
            <span key="4">
              <strong className="text-brand-800">Fogíny lehúzódás esetén</strong> — recesszió
              sebészeti kiegészítéseként, ha nincs feszes íny vagy magasan tapadó frenulum
              szerepel az okok között.
            </span>,
          ]}
        />
      </Section>

      <Section title="6. Fogmegtartó műtétek">
        <p>
          Célja, hogy azokat a fogakat, amelyek különböző okokból már nem teljes értékű tagjai a
          fogívnek, gyulladásmentes, stabil állapotba hozzuk, és így megtarthatóak legyenek.
          Szűkebb értelemben gyökércsúcs-rezekciót értünk alatta, de a gyökérkezelés fejlődésével
          erre egyre ritkábban van szükség. Sokkal nagyobb az igény a fogágybetegségben sorvadt
          csont megerősítésére a parodontális kezelés során megtarthatónak ítélt fogak körül.
        </p>
        <SubSection title="Gyökércsúcs-rezekció">
          <p>
            A fog gyökerének csúcsi részén megmaradt gyulladt szövetek sebészi eltávolítása.
            Elhalt vagy már gyökérkezelt fogak gyökércsúcsa körül kialakult gyulladásokra,
            cisztákra, gócbetegség gyanújára lehet rá szükség. Helyi érzéstelenítésben, kis
            feltárásból készítünk lebenyt, eltávolítjuk a gyökércsúcs fertőzött részét, kitisztítjuk
            és fertőtlenítjük a gyulladt területet, majd zárunk.
          </p>
        </SubSection>
        <SubSection title="Csontpótlás megtartott fogak körül">
          <p>
            Logikailag a szájsebészeti beavatkozások közé sorolható, valójában azonban önálló
            szakterület — a fogágybetegségek kezelése és a fogágy regenerációja. Általában komplex
            fogágykezelés részeként tervezzük. Leggyakrabban alkalmazott formák:
          </p>
          <BulletList
            items={[
              "Fogágy stabilizálása Emdogainnal®",
              "Fogak melletti csonttasakok csontpótlása",
              "Őrlőfogak furkációjának csontpótlása",
              "Kötőszövetes lebennyel kombinált technikák",
            ]}
          />
        </SubSection>
      </Section>

      <Callout
        title="Aneszteziológus közreműködésével, kényelmesen"
        body={
          <>
            Nagyobb műtéti beavatkozásnál érdemes konzultálni aneszteziológus szakorvosunkkal a
            fogorvosi szakterületen túli érzéstelenítési és szedálási lehetőségekről. Az Ön
            fájdalommentes kezelése és kényelme a legfontosabb!
          </>
        }
        ctaLabel="Kérjen konzultációt"
        ctaHref="/kapcsolat"
      />
    </div>
  );
}
