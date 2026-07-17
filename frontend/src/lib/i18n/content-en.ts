/**
 * Angol fordítások az adatvezérelt tartalomhoz (szolgáltatások, kategóriák,
 * navigáció). A magyar az „igazság forrása" a saját adatmoduljaiban
 * (`lib/services.ts`, `lib/site-data.ts`); itt csak az angol változatokat
 * tartjuk, slug/kulcs szerint.
 */

export const SERVICE_EN: Record<string, { name: string; summary: string }> = {
  "elso-talalkozas": {
    name: "First visit",
    summary:
      "At our first meeting we discuss the dental problem you would like our advice on. You will be asked to fill in a questionnaire covering your personal details, medications, allergies and any medical conditions.",
  },
  szajhigienia: {
    name: "Oral hygiene",
    summary:
      "A healthy smile boosts your confidence and everyday success. Long-term results depend on a beautiful, healthy smile — which starts with learning the brushing technique that suits your case, delivered through our individual oral hygiene programme.",
  },
  gyermekfogaszat: {
    name: "Paediatric dentistry",
    summary:
      "We believe that with personal example and regular six-monthly check-ups, children's teeth can also be kept healthy. A child relates to brushing and dental visits as much as the parent does — which is why we apply the family dentistry model.",
  },
  gyokerkezeles: {
    name: "Root canal treatment",
    summary:
      "Root canal treatment to preserve your teeth. It is a tooth-saving procedure performed when the pulp — the living tissue inside the tooth — has suffered irreversible damage.",
  },
  parodontologia: {
    name: "Periodontology",
    summary:
      "Periodontology is an independent field dealing with the diseases and treatment of the tooth-supporting tissues. It offers solutions from simple gingivitis to saving otherwise hopeless, mobile teeth whose supporting tissues have receded.",
  },
  inygyulladas: {
    name: "Gingivitis",
    summary:
      "Gingivitis is a superficial inflammation of the gum surrounding the teeth, and is generally well treatable. Caught early it only affects the gum margin, but left untreated even the mildest inflammation can spread further.",
  },
  "fogagybetegseg-kezelese": {
    name: "Periodontal disease treatment",
    summary:
      "For periodontal disease we perform the cleaning steps according to a dedicated protocol. Several types of periodontal disease have been scientifically shown to be driven by the presence of characteristic bacteria.",
  },
  "esztetikai-fogaszat": {
    name: "Cosmetic dentistry",
    summary:
      "Cosmetic dentistry is a demanding, holistic approach combining several disciplines: beautiful tooth colour, ideal and face-matching tooth shape, metal-free restorations and perfect fit.",
  },
  fogfeherites: {
    name: "Teeth whitening",
    summary:
      "Teeth whitening is a safe and easily performed procedure that we carry out day after day in our clinic. We look forward to welcoming you — pay us a visit!",
  },
  "digitalis-mosolytervezes": {
    name: "Digital Smile Design",
    summary:
      "With Digital Smile Design (DSD) we can visualise the expected outcome already at the start of treatment, without having carried it out in reality — so the patient takes no risk. Using dedicated design software, the personalised smile plan is created together with the treating dentist.",
  },
  fogpotlas: {
    name: "Dental prosthetics",
    summary:
      "Tooth loss can be prevented with timely, modern tooth-preserving and regenerative methods. If you do have missing teeth, a restoration is needed — because even the loss of a single tooth disrupts the unity of the dentition.",
  },
  fogbeultetes: {
    name: "Dental implantation",
    summary:
      "Dental implantation is a method of replacing missing teeth in which the specialist places an implant into the jawbone. After healing and once the restoration is complete, the implant takes over the role of the lost teeth.",
  },
  implantatum: {
    name: "Implants",
    summary:
      "Our clinic offers implantology care of an exceptionally high standard. This is made possible by advanced methods learned on high-level international courses and the use of premium Nobel® implants. Because quality is the best decision — and this choice lasts a lifetime.",
  },
  szajsebeszet: {
    name: "Oral surgery",
    summary:
      "In most extractions it is enough to loosen the affected tooth with a simple instrument, but deeper roots and unerupted teeth can only be removed by minor oral surgery. These are called surgical extractions with flap elevation.",
  },
  bolcsessegfog: {
    name: "Wisdom teeth",
    summary:
      "Wisdom teeth are typically the last permanent teeth to erupt. They usually appear around the age of 18–25, but can cause trouble much earlier. Instead of wisdom, they often bring complaints: frequently there is no room in the jaw, they erupt at an angle or not at all, press on the neighbouring tooth, or simply cause pain.",
  },
  fogszabalyozas: {
    name: "Orthodontics",
    summary:
      "Orthodontics is one of the most dynamically developing and earliest independent fields of dentistry. It covers the diagnosis of shape and position anomalies of the teeth, the alveolar ridge and the jaws, the prevention of their worsening, and their treatment.",
  },
  lezerfogaszat: {
    name: "Laser dentistry",
    summary:
      "Laser-assisted treatments have earned their rightful place in modern dental care. At the Dentoplant clinic our laser device delivers treatments on 3 different wavelengths, covering the broad range of indications of laser dentistry.",
  },
};

export const CATEGORY_EN: Record<string, { name: string; description: string }> = {
  "Megelőzés és diagnosztika": {
    name: "Prevention & diagnostics",
    description: "The basics: first visit, oral hygiene and preserving children's teeth.",
  },
  Fogmegtartás: {
    name: "Tooth preservation",
    description: "Keeping your own teeth is the focus — from root canal treatment to periodontology.",
  },
  "Esztétikai fogászat": {
    name: "Cosmetic dentistry",
    description:
      "A natural, face-matching smile — with digital design and ceramic solutions.",
  },
  "Pótlás és implantológia": {
    name: "Prosthetics & implantology",
    description: "Fixed and removable restorations with Nobel® implants, without compromise.",
  },
  Szájsebészet: {
    name: "Oral surgery",
    description: "Professional extractions and minor surgery in a safe environment.",
  },
  "Speciális kezelések": {
    name: "Special treatments",
    description: "Orthodontics and laser treatments — precisely, with modern tools.",
  },
};

/** Felső szintű navigációs címkék. */
export const NAV_LABELS_EN: Record<string, string> = {
  Bemutatkozás: "About us",
  Orvosaink: "Our doctors",
  Szolgáltatások: "Services",
  Árak: "Prices",
  Garancia: "Guarantee",
  Esetek: "Cases",
  Galéria: "Gallery",
  Blog: "Blog",
  Kapcsolat: "Contact",
};
