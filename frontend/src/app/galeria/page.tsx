import { PageHero } from "@/components/page-hero";
import { CtaContact } from "@/components/home/cta-contact";
import { GalleryGrid } from "@/components/gallery-grid";
import { GALLERY_IMAGES } from "@/lib/gallery-data";

export const metadata = {
  title: "Galéria — Dentoplant Fogászat Szeged",
  description:
    "Képek a Dentoplant Fogászati és Implantológiai Rendelőről és csapatunkról munka közben. Új rendelőnkben várjuk Önöket: Szeged, Fő fasor 45.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galéria"
        title="Pillanatképek a rendelőnkből"
        description="Új rendelőnkben várjuk Önöket — Szeged, Fő fasor 45. Tekintse meg a Dentoplant Fogászati és Implantológiai Rendelőt és csapatunkat munka közben."
        crumbs={[{ label: "Főoldal", href: "/" }, { label: "Galéria" }]}
      />

      <section className="container-page py-14 md:py-20">
        <GalleryGrid images={GALLERY_IMAGES} />
      </section>

      <CtaContact />
    </>
  );
}
