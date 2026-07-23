import { PageHero } from "@/components/page-hero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { CtaContact } from "@/components/home/cta-contact";
import { GalleryGrid } from "@/components/gallery-grid";
import { getGalleryImages } from "@/lib/gallery-data";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const en = locale === "en";
  return {
    title: en ? "Gallery — Dentoplant Dental Clinic Szeged" : "Galéria — Dentoplant Fogászat Szeged",
    description: en
      ? "Photos of the Dentoplant Dental and Implantology Clinic and our team at work. We welcome you in our new clinic: Szeged, Fő fasor 45."
      : "Képek a Dentoplant Fogászati és Implantológiai Rendelőről és csapatunkról munka közben. Új rendelőnkben várjuk Önöket: Szeged, Fő fasor 45.",
  };
}

export default async function GalleryPage() {
  const locale = await getLocale();
  const en = locale === "en";
  const images = getGalleryImages(locale);
  return (
    <>
      <PageHero
        eyebrow={en ? "Gallery" : "Galéria"}
        title={en ? "Snapshots from our clinic" : "Pillanatképek a rendelőnkből"}
        description={
          en
            ? "We welcome you in our new clinic — Szeged, Fő fasor 45. Take a look at the Dentoplant Dental and Implantology Clinic and our team at work."
            : "Új rendelőnkben várjuk Önöket — Szeged, Fő fasor 45. Tekintse meg a Dentoplant Fogászati és Implantológiai Rendelőt és csapatunkat munka közben."
        }
        crumbs={[{ label: en ? "Home" : "Főoldal", href: "/" }, { label: en ? "Gallery" : "Galéria" }]}
        image={PAGE_HEROES.galeria}
      />

      <section className="container-page py-14 md:py-20">
        <GalleryGrid
          images={images}
          labels={{
            close: en ? "Close" : "Bezárás",
            prev: en ? "Previous image" : "Előző kép",
            next: en ? "Next image" : "Következő kép",
          }}
        />
      </section>

      <CtaContact />
    </>
  );
}
