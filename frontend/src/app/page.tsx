import { Hero } from "@/components/home/hero";
import { Usp } from "@/components/home/usp";
import { ServicesTabs } from "@/components/home/services-tabs";
import { ApproachTabs } from "@/components/home/approach-tabs";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { CtaContact } from "@/components/home/cta-contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Usp />
      <ServicesTabs />
      <ApproachTabs />
      <Process />
      <Testimonials />
      <Faq />
      <CtaContact />
    </>
  );
}
