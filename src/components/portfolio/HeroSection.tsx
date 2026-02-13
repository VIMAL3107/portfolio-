import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import profilePhoto from '@/assets/profile-photo-nobg.png';


export const HeroSection = () => {
  const { ref: imageRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0 md:pt-0"
    >
      {/* Smooth Multi-Layer Wave Background (LIKE IMAGE) */}
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="absolute right-0 top-0 h-full w-full md:w-[75%] lg:w-[65%] pointer-events-none opacity-90"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#86efac', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Layer 1 (Lightest) - Spread deeply to center */}
        <path
          d="M550,0
             C350,250 450,450 350,650
             C250,850 100,950 0,1000
             L1000,1000 L1000,0 Z"
          fill="#dcfce7"
          className="opacity-70"
        />

        {/* Layer 2 */}
        <path
          d="M650,0
             C450,250 550,450 450,650
             C350,850 200,950 100,1000
             L1000,1000 L1000,0 Z"
          fill="#bbf7d0"
          className="opacity-80"
        />

        {/* Layer 3 */}
        <path
          d="M750,0
             C550,250 650,450 550,650
             C450,850 350,950 250,1000
             L1000,1000 L1000,0 Z"
          fill="#86efac"
        />

        {/* Layer 4 */}
        <path
          d="M850,0
             C650,250 750,450 650,650
             C550,850 500,950 400,1000
             L1000,1000 L1000,0 Z"
          fill="#4ade80"
        />

        {/* Layer 5 */}
        <path
          d="M920,0
             C750,250 850,450 750,650
             C650,850 650,950 550,1000
             L1000,1000 L1000,0 Z"
          fill="#22c55e"
        />

        {/* Layer 6 (Darkest - closest to image edge) */}
        <path
          d="M980,0
             C850,250 900,450 850,650
             C750,850 800,950 700,1000
             L1000,1000 L1000,0 Z"
          fill="#166534"
        />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-up">
              <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
            </div>

            <h1 className="animate-fade-up stagger-1 text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">R.VIMAL</span>{' '}
              <span className="text-gradient">RAJ</span>
            </h1>

            <div className="animate-fade-up stagger-2">
              <p className="text-xl sm:text-2xl text-muted-foreground mb-2">
                AI Engineer & Machine Learning Specialist
              </p>
              <p className="text-muted-foreground max-w-xl mb-8">
                Transforming complex data into intelligent solutions. Passionate about building
                AI-driven applications that drive innovation and measurable impact.
              </p>
            </div>

            <div className="animate-fade-up stagger-3 flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => handleScroll('#projects')}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/AI ENGINEER VIMAL RAJ R.pdf" download="Vimal_Raj_R_AI_Engineer_Resume.pdf">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="animate-fade-up stagger-4 flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/VIMAL3107"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vimalraj@email.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors hover-lift"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image - Large with scroll-triggered side pop animation */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end -mt-18 lg:-mt-24">
            <div
              ref={imageRef}
              className={`-mt-14 relative w-[500px] h-[700px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[600px] lg:w-[800px] lg:h-[805px] transition-all duration-700 ease-out ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
                }`}
            >
              <img
                src={profilePhoto}
                alt="R.Vimal Raj - AI Engineer"
                className="w-full h-full object-contain object-bottom transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleScroll('#about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section >
  );
};
