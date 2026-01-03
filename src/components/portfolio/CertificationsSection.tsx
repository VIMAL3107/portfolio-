import { Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const certifications = [
  {
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture North America via Forage',
    date: 'Issued Jul 2024',
    credentialId: 'CzPYBHynaHpGjGjiM',
    skills: ['Data Analysis', 'Data Cleaning'],
  },
  {
    title: 'GenAI Job Simulation',
    issuer: 'BCG via Forage',
    date: 'Issued Jul 2024',
    credentialId: 'uhM2Dvr2a3rrhM5Ro',
    skills: ['Deep Learning', 'Natural Language Processing (NLP)'],
  },
  {
    title: 'SQL for Beginners: Learn SQL using MySQL and Database Design',
    issuer: 'Scaler',
    date: 'Completed',
    skills: ['SQL', 'Data Cleaning', 'Data Analytics'],
  },
];

const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'group p-6 rounded-2xl bg-card border border-border hover-lift hover-glow transition-all duration-700',
        isVisible
          ? 'opacity-100 translate-y-0 rotate-0'
          : 'opacity-0 translate-y-10 rotate-2'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          'p-3 rounded-xl bg-primary/10 text-primary transition-all duration-500',
          isVisible ? 'scale-100' : 'scale-0'
        )}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        >
          <Award className="w-6 h-6" />
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
        {cert.title}
      </h3>
      <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
      <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>

      {cert.credentialId && (
        <p className="text-xs text-muted-foreground font-mono mb-4">
          ID: {cert.credentialId}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <p className={cn(
            'text-primary font-mono text-sm mb-2 transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Credentials
          </p>
          <h2 className={cn(
            'text-4xl font-bold transition-all duration-500 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
