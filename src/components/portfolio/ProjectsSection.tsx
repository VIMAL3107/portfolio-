import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={cn(
        'h-full transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-200 h-full"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Project Image */}
        <div className="relative w-full aspect-video overflow-hidden border-b border-border/20">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-20">
            <span
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md shadow-sm border border-white/10',
                project.status === 'Live'
                  ? 'bg-green-500/80 text-white'
                  : 'bg-yellow-500/80 text-white'
              )}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-col flex-grow p-6 space-y-4">
          <div>
            <span className="text-xs font-medium text-primary mb-2 block tracking-wider uppercase opacity-80">
              {project.role}
            </span>
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">{project.subtitle}</p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack - limited to first 3-4 to keep card clean */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] font-mono bg-muted/50 text-muted-foreground rounded border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-[10px] font-mono bg-muted/50 text-muted-foreground rounded border border-border/50">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <Button asChild variant="default" size="sm" className="flex-1 bg-gradient-primary group-hover:opacity-90 hover:opacity-100 transition-all">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:opacity-90 hover:opacity-100 transition-all">
              <Link to={`/project/${project.id}`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo Video
              </Link>
            </Button>
          </div>
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
          <p className={cn(
            "mt-4 text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200",
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Showcasing a collection of my technical projects, ranging from AI integration to backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
