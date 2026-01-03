import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'CNN', 'Transformers'],
  },
  {
    title: 'Programming & Data',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Analytics', 'Data Visualization', 'Data Cleaning'],
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'REST APIs', 'Webhooks', 'SQLAlchemy', 'SQLite', 'PostgreSQL'],
  },
  {
    title: 'Frontend & Tools',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Tableau', 'Excel', 'Git'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['Cloud Deployment', 'Render', 'Big Data', 'API Integration'],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'p-6 rounded-2xl bg-card border border-border hover-lift hover-glow transition-all duration-700',
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-95'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-semibold mb-4 text-gradient">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <p className={cn(
            'text-primary font-mono text-sm mb-2 transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            What I work with
          </p>
          <h2 className={cn(
            'text-4xl font-bold transition-all duration-500 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
