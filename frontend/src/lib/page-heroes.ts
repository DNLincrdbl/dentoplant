/** Aloldal PageHero háttérképek — előre átméretezett, progressive JPEG-ek (/public/heroes). */
export const PAGE_HEROES = {
  bemutatkozas: "/heroes/6-dentoplant-fogaszati-es-implantologiai-rendelo.jpg",
  munkatarsaink: "/heroes/dentoplant-fogaszati-es-implantologiai-rendelo-csapata-szeged.jpg",
  munkatars: "/heroes/3-kozos-munka-a-dentoplant-fogaszati-es-implantologiai-rendeloben-szegeden.jpg",
  kapcsolat: "/heroes/24-recepcio-a-dentoplant-fogaszati-rendeloben.jpg",
  arak: "/heroes/12-rogzitett-idopont-a-dentoplant-fogaszati-rendeloben-szeged.jpg",
  galeria: "/heroes/5-dekoracio-a-dentoplant-fogaszati-rendeloben.jpg",
  esetek: "/heroes/19-dentoplant-fogaszati-rendelo-elegedett-paciense.jpg",
  blog: "/heroes/4-dentoplant-fogaszati-rendeloben-mosolytervezes.jpg",
  szolgaltatasok: "/heroes/28-dr-maraz-kinga-kezeles-tervezese-a-dentoplant-fogaszati-rendeloben.jpg",
  partnerek: "/heroes/7-dentoplant-fogaszati-es-implantologiai-rendelo-szeged-dr-maraz-kinga.jpg",
  garancia: "/heroes/14-elso-talalkozas-dentoplant-fogaszat-szeged.jpg",
  legal: "/heroes/dentoplant-fogaszat-szeged34.jpg",
  default: "/heroes/6-dentoplant-fogaszati-es-implantologiai-rendelo.jpg",
} as const;

/** Szolgáltatás-kategória → hero kép. */
export const SERVICE_CATEGORY_HEROES: Record<string, string> = {
  "Megelőzés és diagnosztika": "/heroes/14-elso-talalkozas-dentoplant-fogaszat-szeged.jpg",
  Fogmegtartás: "/heroes/33-fogmegtarto-kezeles-morita-gyokerkezelessel.jpg",
  "Esztétikai fogászat": "/heroes/20-dr-vadasz-anna-esztetikai-kezeles-kozben-dentoplant-fogaszat.jpg",
  "Pótlás és implantológia": "/heroes/dentoplant-fogaszat-szeged17.jpg",
  Szájsebészet: "/heroes/40-szajsebeszeti-beavatkozasok-a-dentoplant-fogaszati-rendeloben-szegeden.jpg",
  "Speciális kezelések": "/heroes/21-lezerkezeles-dentoplant-szeged.jpg",
};
