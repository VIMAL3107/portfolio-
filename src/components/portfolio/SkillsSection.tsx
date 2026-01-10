import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'CNN', 'Transformers'],
    percentage: 90,
  },
  {
    title: 'Programming & Data',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Analytics', 'Data Visualization', 'Data Cleaning'],
    percentage: 95,
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'REST APIs', 'Webhooks', 'SQLAlchemy', 'SQLite', 'PostgreSQL'],
    percentage: 88,
  },
  {
    title: 'Frontend & Tools',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Tableau', 'Excel', 'Git'],
    percentage: 85,
  },
  {
    title: 'Cloud & Deployment',
    skills: ['Cloud Deployment', 'Render', 'Big Data', 'API Integration'],
    percentage: 82,
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
    
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-64 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onClick={handleClick}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className={cn(
            'absolute inset-0 p-6 rounded-2xl bg-card border border-border hover-glow transition-all overflow-hidden',
            'backface-hidden'
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute w-4 h-4 bg-primary/30 rounded-full animate-ping"
              style={{
                left: ripple.x - 8,
                top: ripple.y - 8,
              }}
            />
          ))}
          
          <h3 className="text-lg font-semibold mb-4 text-gradient">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.slice(0, 6).map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div
          className="absolute inset-0 p-6 rounded-2xl bg-gradient-primary text-primary-foreground"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-lg font-semibold mb-4">Proficiency</h3>
          <div className="flex flex-col justify-center h-32">
            <div className="text-5xl font-bold mb-4">{category.percentage}%</div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isFlipped ? `${category.percentage}%` : 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
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
