export type PriceRow = {
  /** Tétel megnevezése (lehet több sor — \n megengedett). */
  label: string;
  /** Ár kiírva, ahogy a hivatalos árlistában szerepel (Ft jelölés nélkül). \n megengedett. */
  price: string;
  /** Megjelölheti a sort kiemelten, pl. félkövér tétel névvel a hivatalos listában. */
  highlight?: boolean;
};

export type PriceCategory = {
  title: string;
  /** Hosszabb leíró szöveg a táblázat előtt. */
  intro?: string;
  rows: PriceRow[];
  /** Apró megjegyzés a táblázat alatt. */
  note?: string;
};

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    title: "Diagnosztika",
    rows: [
      { label: "Konzultáció, státuszfelvétel", price: "18.000,-" },
      {
        label: "Góckutatás írásos szakvéleménnyel (+ a szükséges képalkotó felvételek költsége)",
        price: "25.000,-",
      },
      {
        label: "Szakorvosi konzultáció és/vagy góckutatás (Dr. Maráz Kinga)",
        price: "28.000,-",
      },
      { label: "Digitális helyi röntgen felvétel", price: "6.000,-" },
      { label: "Digitális panoráma röntgen felvétel", price: "12.000,-" },
      { label: "Röntgenfelvétel küldése emailen", price: "Ingyenes" },
      { label: "Röntgenfelvétel CDre írása", price: "1.000,-" },
      { label: "Scan (Státusz, mosolyrögzítés esetén)", price: "24.000,-" },
      {
        label: "3D fogászati CBCT felvétel – nagy, áttekinthető, alsó-felső állcsont (implantológia)",
        price: "29.000,-",
        highlight: true,
      },
      {
        label: "3D CBCT ENDO felvétel – 3 fog felületéről, extra felbontású (gyökérkezeléshez)",
        price: "26.000,-",
        highlight: true,
      },
    ],
  },
  {
    title: "Digitális mosolytervezés",
    rows: [
      { label: "Digital Smile Design fotózás és vizuális terv készítése", price: "78.000,-" },
      { label: "DSD mosolytervezés 2. konzultáció", price: "28.000.-" },
      {
        label:
          "DSD számítógépes tervezést követő 3D terv a készülő fogmű formájának bemutatására (digitális wax-up)",
        price: "11.000,-/fog",
      },
      {
        label: "Intraorális scan (tervezéshez, állapotrögzítéshez, amennyiben fogpótlás nem készül)",
        price: "24.000,-",
      },
      {
        label: "Digitális tervezést követő 3D nyomtatott minta scanneléssel",
        price: "32.000,-",
      },
      {
        label:
          "Arcíves átvitel, pozíciós harapások rögzítése, egyéni értékű SAM artikulátor beállítása",
        price: "55.000,-",
      },
    ],
  },
  {
    title: "Prevenció és dentálhigiénia",
    intro:
      "Rendelőnkben a megelőzés és a szájhigiéniai kezelések kiemelten fontosak. Az egészséges fogágy egy olyan alap, ami nélkül sem tartós esztétikai eredmény, sem hosszú távon jól működő fogpótlás nem tartható fent. Így nem túlzás azt mondani, hogy a megfelelő szájápolási rutin elsajátítása és alkalmazása munkánk hosszú távú eredményességének egyik záloga. A Dentoplant Rendelőben, Szegeden 15 éve működik személyre szabott dentálhigiéniai szakrendelésünk, melyen a legkorszerűbb módszerekkel végezzük a fogkőeltávolítást, irányított biofilm kezelést, fogfehérítést és visszatérő pácienseink gondozását. Nálunk egy professzionális szájhigiéniás kezelés része a homokfúvás, vagy sokak által sópolírozásként ismert tisztítás. Nagyon ritka a kisebb területen végzett fogkőeltávolítás, mert a fogkő lerakódását a teljes kezeléssel és a teljes polírozással lehet lelassítani.",
    rows: [
      {
        label:
          "Teljes körű professzionális szájhigiéniás kezelés az alsó + felső fogíven – Piezo fogkőeltávolítás + Homokfúvás + Mikropolírozás (dentálhigiénikus) – dentálhigiénikus (fogkő mennyiségétől függően)",
        price: "32.000.-36.000,-",
      },
      {
        label:
          "Teljes körű professzionális szájhigiéniás kezelés az alsó + felső fogíven – Piezo fogkőeltávolítás + Homokfúvás + Mikropolírozás (dentálhigiénikus) – Rendelőnkben fogszabályozó kezelés alatt álló Pácienseink részére",
        price: "27.000,-",
      },
      {
        label:
          "Implantátum tisztítása spec. depurátorral – Piezon PI MAX® (1-3 db implantátum esetén a szájhig. kezelés felett)",
        price: "9.000,-",
      },
      {
        label:
          "Implantátum tisztítása spec. depurátorral – Piezon PI MAX® (4 db implantátumtól a szájhig. kezelés felett)",
        price: "17.000,-",
      },
      {
        label: "Irányított biofilm terápia EMS AIRFLOW® Prophylaxis Master",
        price: "42.000,-",
      },
    ],
  },
  {
    title: "Gyermek fogászat",
    rows: [
      { label: "Tejfog tömése", price: "23.000,-" },
      { label: "Barázdazárás", price: "21.000,-" },
      {
        label: "Szájhigiéniás tanácsadás lepedékfestéssel, oktatással, 1 db ajándék Curaprox fogkefével",
        price: "27.000,-",
      },
    ],
  },
  {
    title: "Konzerváló fogászat",
    rows: [
      { label: "Fognyaki tömés", price: "30.000,-" },
      { label: "Esztétikus fotopolimerizációs tömés (GC Essentia)", price: "34.000,-tól" },
      { label: "Üvegszálas csap behelyezése gyökérkezelt fog megerősítése", price: "49.000,-" },
      { label: "Everx üvegszál erősítésű alap", price: "16.000,- (a tömésen felül)" },
      { label: "Kofferdam izolálás felhelyezése", price: "6.000,-" },
      { label: "ICON kezelés (4 db fognál)", price: "47.000,-/fog" },
      { label: "ICON kezelés (4 db fog felett)", price: "26.000,-/fog" },
    ],
  },
  {
    title: "Endodoncia, gyökérkezelés",
    intro:
      "Rendelőnk alapvető szemlélete, hogy a saját foganyag megőrzése érték. A gyökérkezelés megmentheti a fogat a fogeltávolítástól és lehetővé teszi a páciens számára, hogy hosszabb ideig megőrizhesse természetes fogait. A Dentoplant Fogászati Rendelőnkben a gyökérkezelést specialista endodontus szakorvos végzi. A kezelésekhez a legkorszerűbb műszerkészlet mellett a nyugat-európai standardoknak megfelelően Zeiss Extaro 300 mikroszkópot is alkalmazunk. A mikroszkóp erős fénye és nagyítása segítségével lehetőségünk adódik nagyobb mennyiségű ép foganyag megőrzésére, bonyolultabb csatornarendszer feltárására, régi gyökérkezelések korrekciójára egy sokkal precízebb koncepcióval.\nEgy fog gyökérkezelése nem egy alkalommal, hanem több ülésben történik. A kialakított árak egy kezelési folyamatot tartalmaznak, pl. az első lépés a trepanálás: magába foglalja az érzéstelenítést, a fog megnyitását, a fertőzött gyökércsatorna tisztítását, a fertőtlenítését, megmunkálását és ideiglenes tömését. A gyökércsatorna megmunkálása a következő fontos lépés, mely gyakran a terpanálással egy időben történik, de vannak olyan helyzetek, amikor külön kezelésként végezi el szakorvosunk. A kezelés menete, vagy az, hogy mikroszkóppal, vagy anélkül szükséges az adott kezelést elvégezni, az orvosszakmai kérdések, melyről endodontus kollégánk dönt. A gyökérkezelések különböző folyamatainak kidolgozott árjegyzéke rendelőnkben nyitvatartási időben megtekinthető. A gyökérkezelés megkezdése előtt javasolt a személyes konzultáció, melynek során a konkrét esetet felmérve a kezelés pontos áráról tudja szakorvos kollégánk tájékoztatni.",
    rows: [
      { label: "Trepanálás 1 gyökércsatorna esetén", price: "35.000,-" },
      { label: "Trepanálás 2 gyökércsatorna esetén", price: "39.000,-" },
      { label: "Trepanálás 3 gyökércsatorna esetén", price: "44.000,-" },
      {
        label: "Trepanálás koronán keresztül",
        price: "+ 13.000,- fémkerámia korona esetén\n+ 19.000,- cirkon korona esetén",
      },
      { label: "Gyökércsatorna megmunkálás gyökércsatornánként", price: "15.000,-" },
      { label: "Régi gyökértömés eltávolítása revízióhoz", price: "28.000,-tól" },
      { label: "Gyökérkezelést kiegészítő lézerkezelés / gyökércsatorna", price: "38.000,-" },
      { label: "Mikroszkópos endo diagnosztika", price: "42.000,-" },
      { label: "Mikroszkóp gyökérkezelési felár", price: "55.000-82.000,-" },
      { label: "MTA retrográd gyökértömés (plug)", price: "45.000,-" },
      {
        label: "Betört műszer eltávolítása gyökércsatornából mikroszkóppal",
        price: "84.000,-",
      },
    ],
  },
  {
    title: "Protetika / Fogpótlástan",
    rows: [
      { label: "Fémkerámia korona /db", price: "95.000,-tól" },
      {
        label: "Fémmentes esztétikus Prettau cirkón CAD/CAM korona /db",
        price: "114.000,-tól",
      },
      { label: "Fémmentes leplezett cirkón korona / db", price: "112.000,-" },
      { label: "Fémmentes esztétikus e.Max préskerámia korona /db", price: "118.000,-" },
      { label: "Arany inlay (+arany ára)", price: "110.000,- + Au" },
      { label: "Gradia inlay", price: "95.000,-" },
      { label: "Préskerámia inlay", price: "140.000,-" },
      {
        label: "Precíziós digitális lenyomatvétel felár scanneléssel (a fogpótláson felül)",
        price: "16.000,-",
      },
    ],
  },
  {
    title: "Parodontológia",
    rows: [
      { label: "Bakteriológiai tenyésztés levétele és leletezése", price: "48.000,-" },
      {
        label: "Lézeres fogágykezelés Photolase hatóanyaggal /állcsont (APDT)",
        price: "68.000,-",
      },
      { label: "Sebészi tasakkezelés lézerrel", price: "48.000,-tól" },
      { label: "Vesztibulum plasztika", price: "143.000,-" },
      { label: "Lézeres ajakfék eltávolítás (gyerek)", price: "58.000,-" },
    ],
  },
  {
    title: "Szájsebészet",
    rows: [
      { label: "Fogeltávolítás", price: "26.000,-" },
      { label: "Foggyökér eltávolítása", price: "32.000,-" },
      { label: "Bölcsességfog eltávolítása", price: "36.000,-tól" },
      { label: "Bölcsességfog műtéti eltávolítása", price: "68.000,-tól" },
      { label: "Dissectio", price: "26.000,-" },
      { label: "Cysta eltávolítása 2 cm alatt", price: "48.000,-" },
      { label: "Cysta eltávolítása 2 cm felett", price: "87.000,-" },
      { label: "Sinus zárása (a fogeltávolításon felül)", price: "68.000,-" },
      { label: "Gyökércsúcs rezekció (műtéti díj)", price: "98.000,-" },
    ],
    note: "Műtött pácienseinket ellenőrzésre sűrűn rendeljük vissza, hogy a sebgyógyulást kontrolláljuk és a varratokat tisztítsuk. A műtéti díj tartalmazza a sebtisztítást és ellenőrzések díját, ezért külön nem kell fizetni, csak a varratszedésért.",
  },
  {
    title: "Implantológia, fogbeültetés",
    intro:
      "A fogbeültetés a hiányzó fogak pótlásának olyan módszere, melynek során a szakorvos előzetes tervezést követően implantátumot ültet be az állcsontba. A beültetett implantátum már rögzített pillérként szolgál, így erre fix híd készülhet. Amennyiben a csontmennyiség nem megfelelő az implantátum behelyzéséhez kiegészítő műtéti beavatkozásokra lehet szükség: csontpótlásra, vertikális és horizontális csonthiányok esetén, az arcüreg emelésére, vagy a lágyrészek plasztikai korrekciójára. Rendelőnkben több árfekvésben kínálunk implantátumot és sokféle csavarral rögzített fogpótlás típus közül választhatnak. A korszerű felépítmények kiválasztása eset és egyénfüggő, ezért a személyes konzultáció során tudjuk ismertetni.",
    rows: [
      {
        label:
          "Implantátum (tartalmaz 1 db implantátumot, lenyomatvételi fejet, gyógyulási csavart, ínyformázót, a protetikai felépítményt nem!)",
        price: "198.000,-tól",
      },
      { label: "Implantátum protetikai felépítmény", price: "78.000,-tól" },
      { label: "Implantátum felszabadítás /db", price: "24.000,-" },
      {
        label: "Implantátumra készülő felcsavarozható fémkerámia korona /db",
        price: "108.000,-",
      },
      {
        label: "Implantátumra felcsavarozható monolit cirkón CAD/CAM korona / db",
        price: "142.000,-",
      },
      { label: "Éber szedálás aneszteziológus közreműködésével (1 óra)", price: "170.000,- /óra" },
      {
        label: "Csontpótlás műtéti díj – egyszerű esetben, csontpótló anyag nélkül",
        price: "187.000,-tól",
      },
      {
        label: "Műtéti konzultáció, részletes kezelési terv és árajánlat készítése*",
        price: "46.000,-",
      },
    ],
    note: "* A fenti összeg levonásra kerül a műtét árából, ha a kezelést rendelőnkben veszi igénybe.",
  },
  {
    title: "Fogszabályozás",
    rows: [
      { label: "Első vizsgálat", price: "23.000,-" },
      {
        label: "Dokumentáció (alsó felső alginát lenyomat, extra és intraorális fotók készítése)",
        price: "28.000,-",
      },
      { label: "Kezelési terv", price: "38.000,-" },
      { label: "Rögzített fém fogszabályozó készülék fogívenként", price: "295.000,-tól" },
      {
        label: "Rögzített esztétikus fogszabályozó készülék fogívenként",
        price: "355.000,-tól",
      },
      { label: "Kivehető fogszabályozó készülék", price: "120.000,-tól" },
      { label: "Kivehető fogszabályozó készülék ellenőrzése", price: "18.000,-" },
      { label: "Rögzített fogszabályozó készülék ellenőrzése 1 fogív", price: "18.000,-" },
      { label: "Rögzített fogszabályozó készülék ellenőrzése 2 fogív", price: "28.000,-" },
      { label: "Hyrax", price: "130.000,-tól" },
      { label: "Hyrax ellenőrzés", price: "21.000,-tól" },
      { label: "Hyrax eltávolítás", price: "38.000,-" },
      { label: "Rögzített helyfenntartó készülék", price: "45.000,-tól" },
      { label: "Rögzített fogszabályozó készülék eltávolítása és polírozás", price: "42.000,-" },
      { label: "Retainer ragasztás állcsontonként", price: "49.000,- /állcsont" },
      { label: "Retainer javítás", price: "28.000,-" },
      {
        label:
          "ALIGNER (fogszabályozás átlátszó sínnel) kezelési terv\n(Típusától, eset nehézségétől függően egyedi ár – Clear Correct, Angel Aligner)",
        price: "40.000,-",
      },
    ],
  },
];

export const PRICE_CATEGORIES_EN: PriceCategory[] = [
  {
    title: "Diagnostics",
    rows: [
      { label: "Consultation, status assessment", price: "18.000,-" },
      {
        label: "Focus investigation with a written expert opinion (+ the cost of the necessary imaging)",
        price: "25.000,-",
      },
      {
        label: "Specialist consultation and/or focus investigation (Dr. Kinga Maráz)",
        price: "28.000,-",
      },
      { label: "Digital intraoral X-ray", price: "6.000,-" },
      { label: "Digital panoramic X-ray", price: "12.000,-" },
      { label: "Sending the X-ray by email", price: "Free" },
      { label: "Writing the X-ray to CD", price: "1.000,-" },
      { label: "Scan (for status, smile recording)", price: "24.000,-" },
      {
        label: "3D dental CBCT scan – large, comprehensive, upper-lower jaw (implantology)",
        price: "29.000,-",
        highlight: true,
      },
      {
        label: "3D CBCT ENDO scan – of the surface of 3 teeth, extra resolution (for root canal treatment)",
        price: "26.000,-",
        highlight: true,
      },
    ],
  },
  {
    title: "Digital Smile Design",
    rows: [
      { label: "Digital Smile Design photography and creating a visual plan", price: "78.000,-" },
      { label: "DSD smile design, 2nd consultation", price: "28.000.-" },
      {
        label:
          "3D plan following DSD computer design to present the shape of the future restoration (digital wax-up)",
        price: "11.000,-/tooth",
      },
      {
        label: "Intraoral scan (for planning, status recording, if no restoration is made)",
        price: "24.000,-",
      },
      {
        label: "3D-printed model following digital design, with scanning",
        price: "32.000,-",
      },
      {
        label: "Facebow transfer, recording position bites, setting an individual-value SAM articulator",
        price: "55.000,-",
      },
    ],
  },
  {
    title: "Prevention and dental hygiene",
    intro:
      "Prevention and oral hygiene treatments are especially important in our clinic. A healthy periodontium is a foundation without which neither a lasting aesthetic result nor a long-term well-functioning restoration can be maintained. So it is no exaggeration to say that acquiring and applying the proper oral care routine is one of the guarantees of the long-term success of our work. Our personalised dental hygiene practice has been operating in the Dentoplant clinic in Szeged for 15 years, where we perform tartar removal, guided biofilm therapy, teeth whitening and the care of returning patients with the most modern methods. Here, air-polishing — the cleaning known by many as salt polishing — is part of a professional oral hygiene treatment. Tartar removal performed on a small area is very rare, because the deposition of tartar can be slowed down with a full treatment and full polishing.",
    rows: [
      {
        label:
          "Comprehensive professional oral hygiene treatment on the lower + upper arch – Piezo tartar removal + air-polishing + micro-polishing (dental hygienist) – dental hygienist (depending on the amount of tartar)",
        price: "32.000.-36.000,-",
      },
      {
        label:
          "Comprehensive professional oral hygiene treatment on the lower + upper arch – Piezo tartar removal + air-polishing + micro-polishing (dental hygienist) – for our patients undergoing orthodontic treatment in our clinic",
        price: "27.000,-",
      },
      {
        label:
          "Cleaning an implant with a special scaler – Piezon PI MAX® (for 1-3 implants, on top of the oral hygiene treatment)",
        price: "9.000,-",
      },
      {
        label:
          "Cleaning an implant with a special scaler – Piezon PI MAX® (from 4 implants, on top of the oral hygiene treatment)",
        price: "17.000,-",
      },
      {
        label: "Guided biofilm therapy, EMS AIRFLOW® Prophylaxis Master",
        price: "42.000,-",
      },
    ],
  },
  {
    title: "Paediatric dentistry",
    rows: [
      { label: "Filling a milk tooth", price: "23.000,-" },
      { label: "Fissure sealing", price: "21.000,-" },
      {
        label: "Oral hygiene advice with plaque disclosing, education, 1 free Curaprox toothbrush",
        price: "27.000,-",
      },
    ],
  },
  {
    title: "Conservative dentistry",
    rows: [
      { label: "Tooth-neck filling", price: "30.000,-" },
      { label: "Aesthetic light-cured filling (GC Essentia)", price: "from 34.000,-" },
      { label: "Placing a fibreglass post to reinforce a root-treated tooth", price: "49.000,-" },
      { label: "Everx fibreglass-reinforced base", price: "16.000,- (on top of the filling)" },
      { label: "Placing a rubber dam", price: "6.000,-" },
      { label: "ICON treatment (for 4 teeth)", price: "47.000,-/tooth" },
      { label: "ICON treatment (over 4 teeth)", price: "26.000,-/tooth" },
    ],
  },
  {
    title: "Endodontics, root canal treatment",
    intro:
      "The basic view of our clinic is that preserving your own tooth substance is valuable. Root canal treatment can save the tooth from extraction and allows the patient to keep their natural teeth for longer. In our Dentoplant Dental Clinic, root canal treatment is performed by a specialist endodontist. For the treatments, in addition to the most modern instrument set, we also use a Zeiss Extaro 300 microscope in line with Western European standards. With the microscope's strong light and magnification, we have the opportunity to preserve a larger amount of intact tooth substance, to explore more complex canal systems and to correct old root canal treatments with a much more precise concept.\nThe root canal treatment of a tooth is done not on a single occasion but over several sessions. The prices set out cover a treatment process; e.g. the first step is trepanation: it includes anaesthesia, opening the tooth, cleaning the infected root canal, disinfecting, shaping and temporarily filling it. Shaping the root canal is the next important step, which often happens at the same time as trepanation, but there are situations when our specialist performs it as a separate treatment. The course of the treatment, or whether a given treatment needs to be performed with or without a microscope, are medical questions that our endodontist colleague decides on. The detailed price list of the various root canal treatment processes can be viewed at our clinic during opening hours. Before starting root canal treatment, a personal consultation is recommended, during which — assessing the specific case — our specialist colleague can inform you of the exact price of the treatment.",
    rows: [
      { label: "Trepanation for 1 root canal", price: "35.000,-" },
      { label: "Trepanation for 2 root canals", price: "39.000,-" },
      { label: "Trepanation for 3 root canals", price: "44.000,-" },
      {
        label: "Trepanation through a crown",
        price: "+ 13.000,- for a metal-ceramic crown\n+ 19.000,- for a zirconia crown",
      },
      { label: "Root canal shaping per canal", price: "15.000,-" },
      { label: "Removing an old root filling for retreatment", price: "from 28.000,-" },
      { label: "Laser treatment complementing root canal treatment / canal", price: "38.000,-" },
      { label: "Microscopic endo diagnostics", price: "42.000,-" },
      { label: "Microscope root canal surcharge", price: "55.000-82.000,-" },
      { label: "MTA retrograde root filling (plug)", price: "45.000,-" },
      {
        label: "Removing a broken instrument from a root canal with a microscope",
        price: "84.000,-",
      },
    ],
  },
  {
    title: "Prosthetics / Dental prosthetics",
    rows: [
      { label: "Metal-ceramic crown /pc", price: "from 95.000,-" },
      {
        label: "Metal-free aesthetic Prettau zirconia CAD/CAM crown /pc",
        price: "from 114.000,-",
      },
      { label: "Metal-free veneered zirconia crown /pc", price: "112.000,-" },
      { label: "Metal-free aesthetic e.Max pressed-ceramic crown /pc", price: "118.000,-" },
      { label: "Gold inlay (+ price of gold)", price: "110.000,- + Au" },
      { label: "Gradia inlay", price: "95.000,-" },
      { label: "Pressed-ceramic inlay", price: "140.000,-" },
      {
        label: "Precision digital impression surcharge with scanning (on top of the restoration)",
        price: "16.000,-",
      },
    ],
  },
  {
    title: "Periodontology",
    rows: [
      { label: "Taking and reporting a bacteriological culture", price: "48.000,-" },
      {
        label: "Laser periodontal treatment with Photolase agent /jaw (aPDT)",
        price: "68.000,-",
      },
      { label: "Surgical pocket treatment with laser", price: "from 48.000,-" },
      { label: "Vestibuloplasty", price: "143.000,-" },
      { label: "Laser lip-frenulum removal (child)", price: "58.000,-" },
    ],
  },
  {
    title: "Oral surgery",
    rows: [
      { label: "Tooth removal", price: "26.000,-" },
      { label: "Root removal", price: "32.000,-" },
      { label: "Wisdom tooth removal", price: "from 36.000,-" },
      { label: "Surgical wisdom tooth removal", price: "from 68.000,-" },
      { label: "Dissection", price: "26.000,-" },
      { label: "Cyst removal under 2 cm", price: "48.000,-" },
      { label: "Cyst removal over 2 cm", price: "87.000,-" },
      { label: "Sinus closure (on top of the extraction)", price: "68.000,-" },
      { label: "Apicoectomy (surgical fee)", price: "98.000,-" },
    ],
    note: "We schedule our operated patients back frequently for check-ups to monitor wound healing and clean the sutures. The surgical fee includes wound cleaning and the fee for check-ups, so there is no separate charge, only for suture removal.",
  },
  {
    title: "Implantology, dental implantation",
    intro:
      "Dental implantation is a method of replacing missing teeth in which the specialist, after prior planning, places an implant into the jawbone. The placed implant serves as a fixed abutment, so a fixed bridge can be made on it. If the amount of bone is not sufficient for placing the implant, additional surgical procedures may be needed: bone grafting for vertical and horizontal bone deficiencies, sinus lift, or plastic correction of the soft tissues. In our clinic we offer implants in several price ranges and you can choose from many types of screw-retained restoration. The choice of modern superstructures is case- and individual-dependent, so we can present it during a personal consultation.",
    rows: [
      {
        label:
          "Implant (includes 1 implant, an impression cap, a healing screw and a gingiva former; not the prosthetic superstructure!)",
        price: "from 198.000,-",
      },
      { label: "Implant prosthetic superstructure", price: "from 78.000,-" },
      { label: "Implant uncovering /pc", price: "24.000,-" },
      {
        label: "Screw-retained metal-ceramic crown on an implant /pc",
        price: "108.000,-",
      },
      {
        label: "Screw-retained monolithic zirconia CAD/CAM crown on an implant /pc",
        price: "142.000,-",
      },
      { label: "Conscious sedation with an anaesthesiologist (1 hour)", price: "170.000,- /hour" },
      {
        label: "Bone grafting surgical fee – in a simple case, without bone graft material",
        price: "from 187.000,-",
      },
      {
        label: "Surgical consultation, detailed treatment plan and quotation*",
        price: "46.000,-",
      },
    ],
    note: "* The above amount is deducted from the price of the surgery if you undergo the treatment in our clinic.",
  },
  {
    title: "Orthodontics",
    rows: [
      { label: "First examination", price: "23.000,-" },
      {
        label: "Documentation (lower-upper alginate impression, extra- and intraoral photos)",
        price: "28.000,-",
      },
      { label: "Treatment plan", price: "38.000,-" },
      { label: "Fixed metal orthodontic appliance per arch", price: "from 295.000,-" },
      {
        label: "Fixed aesthetic orthodontic appliance per arch",
        price: "from 355.000,-",
      },
      { label: "Removable orthodontic appliance", price: "from 120.000,-" },
      { label: "Check-up of a removable orthodontic appliance", price: "18.000,-" },
      { label: "Check-up of a fixed orthodontic appliance, 1 arch", price: "18.000,-" },
      { label: "Check-up of a fixed orthodontic appliance, 2 arches", price: "28.000,-" },
      { label: "Hyrax", price: "from 130.000,-" },
      { label: "Hyrax check-up", price: "from 21.000,-" },
      { label: "Hyrax removal", price: "38.000,-" },
      { label: "Fixed space maintainer", price: "from 45.000,-" },
      { label: "Removal of a fixed orthodontic appliance and polishing", price: "42.000,-" },
      { label: "Retainer bonding per jaw", price: "49.000,- /jaw" },
      { label: "Retainer repair", price: "28.000,-" },
      {
        label:
          "ALIGNER (orthodontics with clear trays) treatment plan\n(Individual price depending on type and case difficulty – Clear Correct, Angel Aligner)",
        price: "40.000,-",
      },
    ],
  },
];

export function getPriceCategories(locale: string): PriceCategory[] {
  return locale === "en" ? PRICE_CATEGORIES_EN : PRICE_CATEGORIES;
}

export const HEALTH_FUNDS: string[] = [
  "ADOSZT Egészségpénztár",
  "TEMPO Önkéntes Kiegészítő Egészségpénztár",
  "GENERALI Egészségpénztár",
  "MKB Egészségpénztár",
  "OTP Országos Egészségpénztár",
  "WELLNESS Országos Önkéntes Egészségpénztár (Ticket Wellness utalvány — Accor Services)",
  "Fitt Egészségpénztár",
  "Új Pillér Egészségpénztár",
  "VITAMIN Egészségpénztár",
  "K&H MEDICINA Egészségpénztár",
  "DIMENZIÓ Önkéntes Kölcsönös Egészségpénztár",
  "VASUTAS Önkéntes Kölcsönös Kiegészítő Egészségpénztár",
  "AXA Egészségpénztár (CREDIT SUISSE, WINTERTHUR, ERSTE, UNIQUA)",
  "Patika Egészségpénztár",
  "ERSTE Egészségpénztár",
];
