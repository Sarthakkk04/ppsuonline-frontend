import Hero from "@/components/homepage/Hero";
import Programs from "@/components/homepage/Programs";
import Accreditations from "@/components/homepage/Accreditations";
import WhyUs from "@/components/homepage/WhyUs";
import CampusGallery from "@/components/homepage/CampusGallery";
import FAQSection from "@/components/homepage/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Accreditations />
      <WhyUs />
      <CampusGallery />
      <FAQSection />
    </>
  );
}