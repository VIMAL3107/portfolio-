import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { JourneySection } from '@/components/portfolio/JourneySection';
import { CertificationsSection } from '@/components/portfolio/CertificationsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import { ScrollProgress } from '@/components/effects/ScrollProgress';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
