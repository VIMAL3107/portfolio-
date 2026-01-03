import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profilePhoto from '@/assets/profile-photo-nobg.png';
import aiBackground from '@/assets/ai-background-premium.png';

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
      {/* AI Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aiBackground}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                onClick={() => handleScroll('#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Me
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
                className="w-full h-full object-contain object-bottom drop-shadow-[0_0_35px_rgba(45,212,191,0.6)] hover:drop-shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-500"
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
    </section>
  );
};
