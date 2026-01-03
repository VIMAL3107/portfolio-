import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Hotel Harriet Guest Assistant',
    subtitle: 'Server-to-Server WhatsApp Integration',
    description:
      'A headless middleware solution bridging WhatsApp Business API with hotel management systems. Allows guests to access hotel services directly through WhatsApp without downloading additional software.',
    techStack: ['Python', 'FastAPI', 'WhatsApp API', 'Render', 'Webhooks'],
    highlights: [
      'Zero-UI Guest Experience via WhatsApp',
      'System User Integration with secure tokens',
      'Rich Media Messaging with PDFs & videos',
      'Intelligent Webhook Handling',
    ],
    role: 'Backend Engineer & API Architect',
    status: 'Live',
    github: 'https://github.com/VIMAL3107',
  },
  {
    title: 'AI Zero',
    subtitle: 'Intelligent Enterprise Operating System',
    description:
      'A next-generation all-in-one business management platform unifying CRM, Marketing, Sales, and Service. Leverages embedded AI for natural language data querying and workflow automation.',
    techStack: ['React.js', 'FastAPI', 'SQLAlchemy', 'NLP', 'Tailwind CSS'],
    highlights: [
      'Unified Dashboard for all business metrics',
      'AI-Powered CRM with natural language queries',
      'Comprehensive Suite: CRM, CMS, Sales, Service',
      'Modern UI with "calm" aesthetic design',
    ],
    role: 'Full-Stack Architect',
    status: 'In Development',
    github: 'https://github.com/VIMAL3107',
  },
  {
    title: 'Event Horizon AI',
    subtitle: 'Multimodal AI Assistant Interface',
    description:
      'A next-generation multimodal AI assistant using Google Gemini models to process text, images, audio, and documents in real-time with persistent memory across sessions.',
    techStack: ['React.js', 'FastAPI', 'SQLite', 'Google Gemini', 'CSS3'],
    highlights: [
      'Multimodal Intelligence: text, voice, visuals',
      'Streaming Responses in real-time',
      'Session Management & Persistent Memory',
      'Glassmorphism UI Design',
    ],
    role: 'Full-Stack Developer',
    status: 'In Development',
    github: 'https://github.com/VIMAL3107',
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        'grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover-glow transition-all duration-700',
        isVisible
          ? 'opacity-100 translate-x-0'
          : isEven ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
      )}
    >
      {/* Project Info */}
      <div className={cn('space-y-4', !isEven && 'lg:order-2')}>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {project.role}
          </span>
          <span
            className={cn(
              'px-3 py-1 text-xs font-medium rounded-full',
              project.status === 'Live'
                ? 'bg-green-500/10 text-green-600'
                : 'bg-yellow-500/10 text-yellow-600'
            )}
          >
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
          <p className="text-primary font-medium">{project.subtitle}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button asChild variant="default" size="sm" className="bg-gradient-primary">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </div>

      {/* Project Highlights */}
      <div className={cn('space-y-3', !isEven && 'lg:order-1')}>
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Key Features
        </h4>
        <div className="grid gap-3">
          {project.highlights.map((highlight, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono text-sm">
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="text-sm text-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <p className={cn(
            'text-primary font-mono text-sm mb-2 transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Featured Work
          </p>
          <h2 className={cn(
            'text-4xl font-bold transition-all duration-500 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Projects
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
