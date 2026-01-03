import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { JourneySection } from '@/components/portfolio/JourneySection';
import { CertificationsSection } from '@/components/portfolio/CertificationsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
