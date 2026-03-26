import { HeroSection } from "../../components/sections/HeroSection";
import { FeaturedProjectsSection } from "../../components/sections/FeaturedProjectsSection";
import { ContactSection } from "../../components/sections/ContactSection";
import { AboutPanel } from "../../components/sections/AboutPanel";
import { PageMeta } from "../../components/ui/PageMeta";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="NULL//SIGNAL is the portfolio of Luis Fonseca — software engineer, frontend builder, and creator of sharp, technically driven interfaces."
      />
      <HeroSection />
      <AboutPanel />
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  );
}
