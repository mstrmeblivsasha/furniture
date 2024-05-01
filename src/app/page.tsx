import HeroSection from "@/sections/heroSection/HeroSection";
import styles from "./page.module.scss";
import AboutSection from "@/sections/aboutSection/AboutSection";
import BenefitsSection from "@/sections/benefitsSection/BenefitsSection";
import HomeCataloguesSection from "@/sections/homeCataloguesSection/HomeCataloguesSection";
import ContactUsSection from "@/sections/contactUsSection/ContactUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <BenefitsSection />
      {/* <HomeCataloguesSection />
      <ContactUsSection /> */}
    </>
  );
}
