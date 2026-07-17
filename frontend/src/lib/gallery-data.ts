// Auto-generálva: scripts/scrape_gallery.py. A meglévő (kézzel finomított) alt-szövegek
// újrafuttatáskor megőrződnek; a src/width/height frissül.
export type GalleryImage = { src: string; alt: string; width: number; height: number };

/** Egyszerű, szabályalapú HU→EN alt fordítás a galéria képeihez. */
function translateAlt(alt: string): string {
  return alt
    .replaceAll("Dentoplant Fogászati és Implantológiai Rendelő", "Dentoplant Dental and Implantology Clinic")
    .replaceAll("Dentoplant Fogászati Rendelő", "Dentoplant Dental Clinic")
    .replaceAll("Dentoplant Fogászat", "Dentoplant Dental Clinic")
    .replaceAll("Dentoplant fogászat", "Dentoplant dental clinic")
    .replaceAll("Fogászati Rendelő", "Dental Clinic")
    .replaceAll("Fogászati rendelő", "Dental clinic")
    .replaceAll("fogászati rendelő", "dental clinic")
    .replaceAll("fogászati", "dental")
    .replaceAll("Fogászati", "Dental")
    .replaceAll("szájsebész szakorvos", "oral surgeon specialist")
    .replaceAll("szájsebész", "oral surgeon")
    .replaceAll("dentoalveoláris", "dentoalveolar")
    .replaceAll("dentálhigiénikus", "dental hygienist")
    .replaceAll("Dentalhigienikus", "dental hygienist")
    .replaceAll("páciens koordinátora", "patient coordinator")
    .replaceAll("pácienskoordinátorral", "patient coordinator")
    .replaceAll("Páciens tájékoztatása", "Patient consultation")
    .replaceAll("Páciensek telefonos koordinálása", "Phone coordination of patients")
    .replaceAll("esztétikai fogászati kezelést végez", "performing aesthetic dental treatment")
    .replaceAll("esztétikai kezelést végez", "performing aesthetic treatment")
    .replaceAll("esztétikai kezelés közben", "during aesthetic treatment")
    .replaceAll("esztétikus tömést készít", "making an aesthetic filling")
    .replaceAll("fogászati kezelést végez", "performing dental treatment")
    .replaceAll("fogászati vizsgálat közben", "during a dental examination")
    .replaceAll("precíziós esztétikai helyreállítást végez", "performing precision aesthetic restoration")
    .replaceAll("gyermekfogászat", "paediatric dentistry")
    .replaceAll("Gyermekfogászat", "Paediatric dentistry")
    .replaceAll("mosolytervezés", "smile design")
    .replaceAll("helyes fogmosás bemutatása", "demonstrating correct tooth brushing")
    .replaceAll("Helyes fogmosás technika reprezentálása", "Demonstration of correct brushing technique")
    .replaceAll("első találkozás", "first meeting")
    .replaceAll("Első találkozás", "First meeting")
    .replaceAll("Röntgenbeállítás", "X-ray positioning")
    .replaceAll("Panoráma röntgen felvétel", "Panoramic X-ray image")
    .replaceAll("Korszerű CBCT 3D röntgen", "Modern CBCT 3D X-ray")
    .replaceAll("Korszerű CBCT és 3D röntgen", "Modern CBCT and 3D X-ray")
    .replaceAll("Korszerű digitális röntgen", "Modern digital X-ray")
    .replaceAll("Lézerkezelés", "Laser treatment")
    .replaceAll("Recepció", "Reception")
    .replaceAll("Dekoráció", "Decoration")
    .replaceAll("Időpontegyeztetés", "Appointment scheduling")
    .replaceAll("elégedett páciense", "satisfied patient")
    .replaceAll("Fogmegtartó kezelés", "Tooth-preserving treatment")
    .replaceAll("gyökérkezeléssel", "with root canal treatment")
    .replaceAll("gyökérkezelés", "root canal treatment")
    .replaceAll("Speciális szájhigieniéniás kezelés", "Special oral hygiene treatment")
    .replaceAll("Szájsebészeti beavatkozások", "Oral surgery procedures")
    .replaceAll("kezelés tervezése", "treatment planning")
    .replaceAll("Fogorvos", "Dentist")
    .replaceAll("születésnapja", "anniversary")
    .replaceAll("Húsvét", "Easter")
    .replaceAll("enteriőrje", "interior")
    .replaceAll("váróterme", "waiting room")
    .replaceAll("Váró", "Waiting area")
    .replaceAll("kezelőkhöz", "to the treatment rooms")
    .replaceAll("kezelőegység", "dental unit")
    .replaceAll("kezelőhelyisége", "treatment room")
    .replaceAll("kezelője", "treatment room")
    .replaceAll("belső tere", "interior")
    .replaceAll("munka közben", "at work")
    .replaceAll("közösen dolgoznak", "working together")
    .replaceAll("megbeszélés közben", "during a discussion")
    .replaceAll("Ideális fogszín kiválasztása", "Selecting the ideal tooth shade")
    .replaceAll("Esztétikai rekonstrukció kofferdam izolálás és fotó", "Aesthetic reconstruction with rubber dam isolation and photo")
    .replaceAll("Precíziós fogágykezelés nagy nagyításban", "Precision periodontal treatment under high magnification")
    .replaceAll("Megelőzés, prevenció mindennapi munkánk része", "Prevention is part of our everyday work")
    .replaceAll("legkorszerűbb diagnosztikai módszerei", "most modern diagnostic methods")
    .replaceAll("nyári hangulatban", "in summer atmosphere")
    .replaceAll("csapata", "team")
    .replaceAll("Újszegedi óvodások", "Kindergarten children from Újszeged")
    .replaceAll("Steril, korszerű környezet", "Sterile, modern environment")
    .replaceAll("Fogászati ellátás", "Dental care")
    .replaceAll("Korszerű fogászati ellátás", "Modern dental care")
    .replaceAll("Korszerű fogászati kezelő", "Modern dental treatment room")
    .replaceAll("Air flow polírozás a szép fehér fogakért", "Air-flow polishing for beautiful white teeth")
    .replaceAll("Kontroll vizsgálat", "Follow-up examination")
    .replaceAll("Implantáció közben", "During implantation")
    .replaceAll("Egyszerű fogászati beavatkozásokat is végzünk", "We also perform simple dental procedures")
    .replaceAll("Precizitás - nagyítás", "Precision – magnification")
    .replaceAll("A parodontológiai plasztikai sebészet mikroszkópos nagyítást igényel", "Periodontal plastic surgery requires microscopic magnification")
    .replaceAll("A szájhigiénia tanulását nem lehet elég korán kezdeni", "Learning oral hygiene cannot begin early enough")
    .replaceAll("Ügyes gyermekpácienseknek öröm dolgozni", "A pleasure to work with skilled child patients")
    .replaceAll("A fotózás mindennapi munkánk része", "Photography is part of our everyday work")
    .replaceAll("A könyvespolc", "The bookshelf")
    .replaceAll("asszisztenssel", "with assistant");
}

export function getGalleryImages(locale: string): GalleryImage[] {
  if (locale !== "en") return GALLERY_IMAGES;
  return GALLERY_IMAGES.map((img) => ({ ...img, alt: translateAlt(img.alt) }));
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {"src": "/galeria/dentoplant-fogaszat-szeged35.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged34.jpg", "alt": "A Dentoplant Fogászati és Implantológiai Rendelő enteriőrje – Szeged, Fő fasor 45.", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged03.jpg", "alt": "Recepció és váró a Dentoplant Fogászati Rendelőben – Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged04.jpg", "alt": "A Dentoplant Fogászat váróterme – Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged05.jpg", "alt": "A Dentoplant Fogászati Rendelő recepciója – Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged06.jpg", "alt": "A könyvespolc - Dentoplant Fogászat Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged07.jpg", "alt": "Váró a kezelőkhöz a Dentoplant Fogászati Rendelőben – Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged09.jpg", "alt": "A fotózás mindennapi munkánk része - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged10.jpg", "alt": "Ügyes gyermekpácienseknek öröm dolgozni", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged11.jpg", "alt": "A szájhigiénia tanulását nem lehet elég korán kezdeni", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged13.jpg", "alt": "A parodontológiai plasztikai sebészet mikroszkópos nagyítást igényel - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged14.jpg", "alt": "Precizitás - nagyítás - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged16.jpg", "alt": "Egyszerű fogászati beavatkozásokat is végzünk - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged17.jpg", "alt": "Implantáció közben - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged18.jpg", "alt": "Kontroll vizsgálat - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged19.jpg", "alt": "Dr. Maráz Kinga Belovai Erzsébet asszisztenssel - Dentoplant Fogászat Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged20.jpg", "alt": "Air flow polírozás a szép fehér fogakért - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged21.jpg", "alt": "Dr. Maráz Kinga fogászati munka közben - Dentoplant Fogászat Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged29.jpg", "alt": "Korszerű fogászati kezelő a Dentoplant Rendelőben – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged30.jpg", "alt": "Fogászati kezelőegység a Dentoplant Fogászati Rendelőben – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged31.jpg", "alt": "A Dentoplant Fogászat modern kezelőhelyisége – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged32.jpg", "alt": "Fogászati ellátás a Dentoplant Rendelőben – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat-szeged33.jpg", "alt": "A Dentoplant Fogászati Rendelő belső tere – Szeged", "width": 683, "height": 1024},
  {"src": "/galeria/dentoplant-fogaszat-szeged24.jpg", "alt": "Steril, korszerű környezet a Dentoplant Fogászati Rendelőben – Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged25.jpg", "alt": "A Dentoplant Fogászat kezelője – Szeged", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged26.jpg", "alt": "Újszegedi óvodások a Dentoplant Fogászati Rendelőben", "width": 1024, "height": 682},
  {"src": "/galeria/dentoplant-fogaszat-szeged27.jpg", "alt": "Újszegedi óvodások a Dentoplant Fogászati Rendelőben", "width": 682, "height": 1024},
  {"src": "/galeria/dentoplant-fogaszat-35.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat36.jpg", "alt": "A Dentoplant Fogászat rendelőjének részlete – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszat37.jpg", "alt": "Korszerű fogászati ellátás a Dentoplant Rendelőben – Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/paciens-tajekoztatasa-a-dentoplant-rendeloben-szegeden.jpg", "alt": "Páciens tájékoztatása a Dentoplant rendelőben Szegeden", "width": 1024, "height": 683},
  {"src": "/galeria/dr-vida-agoston-melinda-megbeszeles-kozben.jpg", "alt": "Dr. Vida Ágoston Melinda megbeszélés közben", "width": 1024, "height": 683},
  {"src": "/galeria/bepillantas-a-szinfalak-koze-dr-maraz-kinga-rendelesen.jpg", "alt": "Bepillantás a színfalak közé Dr. Maráz Kinga rendelésén", "width": 683, "height": 1024},
  {"src": "/galeria/idealis-fogszin-kivalasztasa.jpg", "alt": "Ideális fogszín kiválasztása – Dentoplant Fogászat, Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszati-es-implantologiai-rendelo-csapata-szeged.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő csapata Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/dentoplant-fogaszati-es-implantologiai-rendelo-nyari-hangulatban.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő nyári hangulatban", "width": 1024, "height": 683},
  {"src": "/galeria/a-dentoplant-fogaszat-legkorszerubb-diagnosztikai-modszerei.jpg", "alt": "A Dentoplant fogászat legkorszerűbb diagnosztikai módszerei", "width": 1024, "height": 683},
  {"src": "/galeria/dr-gyorfi-gabriella-fogaszati-vizsgalat-kozben.jpg", "alt": "Dr. Győrfi Gabriella fogászati vizsgálat közben", "width": 1024, "height": 683},
  {"src": "/galeria/dr-gyorfi-gabriella-precizios-esztetikai-helyreallitast-vegez.jpg", "alt": "Dr. Győrfi Gabriella precíziós esztétikai helyreállítást végez", "width": 683, "height": 1024},
  {"src": "/galeria/dr-maraz-kinga-es-vadasz-anna.jpg", "alt": "Dr. Maráz Kinga és Vadász Anna", "width": 1024, "height": 684},
  {"src": "/galeria/dr-vida-agoston-melinda-fogaszati-kezelest-vegez.jpg", "alt": "Dr. Vida Ágoston Melinda fogászati kezelést végez", "width": 1024, "height": 683},
  {"src": "/galeria/dr-vida-agoston-melinda-esztetikus-tomest-keszit.jpg", "alt": "Dr. Vida Ágoston Melinda esztétikus tömést készít", "width": 1024, "height": 683},
  {"src": "/galeria/dr-vida-agoston-melinda.jpg", "alt": "Dr. Vida Ágoston Melinda", "width": 1024, "height": 683},
  {"src": "/galeria/esztetikai-rekonstrukcio-kofferdam-izolalas-es-foto.jpg", "alt": "Esztétikai rekonstrukció kofferdam izolálás és fotó", "width": 1024, "height": 683},
  {"src": "/galeria/precizios-fogagykezeles-nagy-nagyitasban-dr-maraz-kinga.jpg", "alt": "Precíziós fogágykezelés nagy nagyításban Dr. Maráz Kinga", "width": 683, "height": 1024},
  {"src": "/galeria/dr-maraz-kinga-es-dr-lippai-georg-kozosen-dolgoznak.jpg", "alt": "Dr. Maráz Kinga és Dr.Lippai Georg közösen dolgoznak", "width": 684, "height": 1024},
  {"src": "/galeria/megelozes-prevencio-mindennapi-munkank-resze.jpg", "alt": "Megelőzés, prevenció mindennapi munkánk része", "width": 1024, "height": 683},
  {"src": "/galeria/dobo-huanita-dentalhigienikus.jpg", "alt": "Dobó Huanita dentálhigiénikus – Dentoplant Fogászat, Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/korszeru-digitalis-rontgen.jpg", "alt": "Korszerű digitális röntgen – Dentoplant Fogászat, Szeged", "width": 1024, "height": 683},
  {"src": "/galeria/1-dr-riener-reka-esztetikai-fogaszati-kezelest-vegez-dentoplant-fogaszat-szeged.jpg", "alt": "Dr. Riener Réka esztétikai fogászati kezelést végez Dentoplant fogászat Szeged", "width": 2000, "height": 1333},
  {"src": "/galeria/2-dentoplant-fogaszati-es-implantologiai-rendelo-szeged-paciens-koordinatora-kovacs-lilla.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő Szeged páciens koordinátora, Kovács Lilla", "width": 4454, "height": 6674},
  {"src": "/galeria/3-kozos-munka-a-dentoplant-fogaszati-es-implantologiai-rendeloben-szegeden.jpg", "alt": "Közös munka a Dentoplant Fogászati és Implantológiai Rendelőben Szegeden", "width": 7272, "height": 4853},
  {"src": "/galeria/4-dentoplant-fogaszati-rendeloben-mosolytervezes.jpg", "alt": "Dentoplant Fogászati rendelőben mosolytervezés", "width": 2500, "height": 1667},
  {"src": "/galeria/5-dekoracio-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Dekoráció a Dentoplant Fogászati Rendelőben", "width": 5760, "height": 3840},
  {"src": "/galeria/6-dentoplant-fogaszati-es-implantologiai-rendelo.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő", "width": 5760, "height": 3840},
  {"src": "/galeria/7-dentoplant-fogaszati-es-implantologiai-rendelo-szeged-dr-maraz-kinga.jpg", "alt": "Dentoplant Fogászati és Implantológiai Rendelő Szeged Dr. Maráz Kinga", "width": 7360, "height": 4912},
  {"src": "/galeria/8-dentoplant-fogaszati-rendelo-5-szuletesnapja-szeged.jpg", "alt": "Dentoplant Fogászati rendelő 5. születésnapja Szeged", "width": 2000, "height": 1409},
  {"src": "/galeria/9-dr-maraz-kinga-szeged.jpg", "alt": "Dr. Maráz Kinga Szeged", "width": 7360, "height": 4912},
  {"src": "/galeria/10-dr-riener-reka-esztetikai-fogaszat.jpg", "alt": "Dr. Riener Réka esztétikai fogászat", "width": 6565, "height": 4799},
  {"src": "/galeria/11-dr-vadasz-anna-gyermekfogaszat-dentoplant-fogaszati-rendelo.jpg", "alt": "Dr. Vadász Anna gyermekfogászat, Dentoplant Fogászati Rendelő", "width": 2500, "height": 1666},
  {"src": "/galeria/12-rogzitett-idopont-a-dentoplant-fogaszati-rendeloben-szeged.jpg", "alt": "Rögzített időpont a Dentoplant Fogászati Rendelőben, Szeged", "width": 5472, "height": 3648},
  {"src": "/galeria/13-dr-maraz-kinga-szajsebesz-szakorvos.jpg", "alt": "Dr. Maráz Kinga szájsebész szakorvos", "width": 5760, "height": 3840},
  {"src": "/galeria/14-elso-talalkozas-dentoplant-fogaszat-szeged.jpg", "alt": "Első találkozás, Dentoplant Fogászat Szeged", "width": 5472, "height": 3648},
  {"src": "/galeria/15-dobo-huanita-dentalhigienikus-dentoplant-szeged.jpg", "alt": "Dobó Huanita Dentálhigiénikus Dentoplant Szeged", "width": 6358, "height": 4243},
  {"src": "/galeria/16-rontgenbeallitas-dentoplant-fogaszati-rendelo.jpg", "alt": "Röntgenbeállítás, Dentoplant Fogászati Rendelő", "width": 4802, "height": 3426},
  {"src": "/galeria/17-dr-vadasz-anna-esztetikai-kezelest-vegez-dentoplant-fogaszati-rendelo.jpg", "alt": "Dr. Vadász Anna esztétikai kezelést végez, Dentoplant Fogászati Rendelő", "width": 1333, "height": 2000},
  {"src": "/galeria/18-paciensek-telefonos-koordinalasa-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Páciensek telefonos koordinálása a Dentoplant Fogászati Rendelőben", "width": 7360, "height": 4912},
  {"src": "/galeria/19-dentoplant-fogaszati-rendelo-elegedett-paciense.jpg", "alt": "Dentoplant Fogászati rendelő elégedett páciense", "width": 5760, "height": 3840},
  {"src": "/galeria/20-dr-vadasz-anna-esztetikai-kezeles-kozben-dentoplant-fogaszat.jpg", "alt": "Dr. Vadász Anna esztétikai kezelés közben, Dentoplant fogászat", "width": 1816, "height": 1212},
  {"src": "/galeria/21-lezerkezeles-dentoplant-szeged.jpg", "alt": "Lézerkezelés Dentoplant Szeged", "width": 7221, "height": 4819},
  {"src": "/galeria/22-dobo-huanita-dentalhigienikus-dentoplant.jpg", "alt": "Dobó Huanita dentálhigiénikus Dentoplant", "width": 4767, "height": 7142},
  {"src": "/galeria/23-korszeru-cbct-3d-rontgen-a-dentoplant-fogaszati-rendeloben-szegeden.jpg", "alt": "Korszerű CBCT 3D röntgen a Dentoplant Fogászati Rendelőben Szegeden", "width": 7360, "height": 4912},
  {"src": "/galeria/24-recepcio-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Recepció a Dentoplant Fogászati Rendelőben", "width": 5472, "height": 3648},
  {"src": "/galeria/25-dr-vadasz-anna-helyes-fogmosas-bemutatasa-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Dr. Vadász Anna, helyes fogmosás bemutatása a Dentoplant Fogászati Rendelőben", "width": 2500, "height": 2000},
  {"src": "/galeria/26-morita-gyokerkezeles-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Morita gyökérkezelés a Dentoplant Fogászati Rendelőben", "width": 2398, "height": 3602},
  {"src": "/galeria/27-dr-maraz-kinga-fogorvos-szeged.jpg", "alt": "Dr. Maráz Kinga Fogorvos Szeged", "width": 4096, "height": 2733},
  {"src": "/galeria/28-dr-maraz-kinga-kezeles-tervezese-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Dr. Maráz Kinga kezelés tervezése a Dentoplant Fogászati rendelőben", "width": 2500, "height": 1667},
  {"src": "/galeria/29-helyes-fogmosas-technika-reprezentalasa-dobo-huanita-dentalhigienikus-altal.jpg", "alt": "Helyes fogmosás technika reprezentálása Dobó Huanita Dentalhigienikus által", "width": 4755, "height": 7124},
  {"src": "/galeria/30-panorama-rontgen-felvetel-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Panoráma röntgen felvétel a Dentoplant Fogászati Rendelőben", "width": 5472, "height": 3648},
  {"src": "/galeria/31-idopontegyeztetes-kovacs-lilla-pacienskoordinatorral-a-dentoplant-fogaszaton.jpg", "alt": "Időpontegyeztetés Kovács Lilla pácienskoordinátorral a Dentoplant Fogászaton", "width": 7222, "height": 4820},
  {"src": "/galeria/32-gyermekfogaszat-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Gyermekfogászat a Dentoplant Fogászati Rendelőben", "width": 2500, "height": 1667},
  {"src": "/galeria/33-fogmegtarto-kezeles-morita-gyokerkezelessel.jpg", "alt": "Fogmegtartó kezelés Morita gyökérkezeléssel", "width": 2028, "height": 1368},
  {"src": "/galeria/34-korszeru-cbct-es-3d-rontgen-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Korszerű CBCT és 3D röntgen a Dentoplant Fogászati Rendelőben", "width": 6542, "height": 4366},
  {"src": "/galeria/35-specialis-szajhigienienias-kezeles-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Speciális szájhigieniéniás kezelés a Dentoplant Fogászati Rendelőben", "width": 4327, "height": 6483},
  {"src": "/galeria/36-dr-maraz-kinga-dentoalveolaris-szajsebesz-szakorvos.jpg", "alt": "Dr. Maráz Kinga dentoalveoláris szájsebész szakorvos", "width": 1305, "height": 1007},
  {"src": "/galeria/37-korszeru-cbct-es-3d-rontgen-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Korszerű CBCT és 3D röntgen a Dentoplant Fogászati Rendelőben", "width": 7024, "height": 4688},
  {"src": "/galeria/38-dobo-huanita-dentalhigieniai-kezeles-kozben-a-dentoplant-fogaszati-rendeloben.jpg", "alt": "Dr. Vida Ágoston Melinda, Dentoplant Fogászati Rendelő, Szeged", "width": 4912, "height": 7360},
  {"src": "/galeria/39-dentoplant-fogaszati-rendelo-szeged-husvet.jpg", "alt": "Dentoplant Fogászati rendelő Szeged Húsvét", "width": 2000, "height": 1333},
  {"src": "/galeria/40-szajsebeszeti-beavatkozasok-a-dentoplant-fogaszati-rendeloben-szegeden.jpg", "alt": "Szájsebészeti beavatkozások a Dentoplant Fogászati Rendelőben Szegeden", "width": 2500, "height": 1753},
];
