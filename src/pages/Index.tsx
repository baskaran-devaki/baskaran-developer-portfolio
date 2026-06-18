import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import IndividualProjectsSection from "@/components/IndividualProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import PodcastSection from "@/components/PodcastSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <IndividualProjectsSection />
      <ExperienceSection />
      <WhyHireMeSection />
      <PodcastSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
