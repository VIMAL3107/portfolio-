import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const journeyItems = [
  {
    type: 'work',
    title: 'AI Engineer',
    organization: 'Aastra Technologies',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Jul 2025 - Present',
    description: 'Full-time position focusing on AI and machine learning solutions.',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'Data Science & AI Certification',
    organization: 'Besant Technologies',
    location: 'Chennai, India',
    period: 'Aug 2023 - Jul 2024',
    description:
      'Specialized in turning raw data into actionable insights. Expertise in Python, SQL, Tableau, Excel, and ML techniques for data analysis, visualization, and predictive modeling.',
    grade: 'Grade: A',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    organization: 'SRM IST Chennai',
    location: 'Chennai, India',
    period: 'Expected Dec 2025',
    description: 'Specialization in Artificial Intelligence.',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: "Bachelor's Degree in Computer Science",
    organization: 'Loyola College',
    location: 'Chennai, India',
    period: 'Jun 2020 - May 2023',
    description:
      'Built a strong foundation in programming, algorithms, and software development.',
    grade: 'Grade: B',
    icon: GraduationCap,
  },
];

interface JourneyItemProps {
  item: typeof journeyItems[0];
  index: number;
}

const JourneyItem = ({ item, index }: JourneyItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  // Swapped logic: Odd is now "left" (visually right in standard zigzag if 0 starts left), 
  // but "right to left" request implies reversing standard flow? 
  // Let's invert the standard zigzag: Even = Right side, Odd = Left side -> New: Even = Left side, Odd = Right side ??
  // The user asked "show cuurnty left to right but we want right to left". 
  // Standard zigzag usually starts Left. Let's start Right.
  // Standard (previously): Even (0) = Left, Odd (1) = Right.
  // New: Even (0) = Right, Odd (1) = Left.
  const isRightSide = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid md:grid-cols-2 gap-6 md:gap-12 transition-all duration-700', // Reduced gap
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className={cn(
        'absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 transition-all duration-500',
        isVisible ? 'scale-100' : 'scale-0'
      )}
        style={{ transitionDelay: `${index * 150 + 200}ms` }}
      />

      {/* Content */}
      <div
        className={cn(
          'ml-16 md:ml-0',
          isRightSide ? 'md:col-start-2 md:pl-12' : 'md:pr-12'
        )}
      >
        <div
          className={cn(
            'p-4 rounded-xl bg-card border border-border hover-lift hover-glow',
            !isRightSide ? 'md:ml-auto' : ''
          )}
        >
          <div
            className={cn(
              'flex items-center gap-3 mb-2'
            )}
          >
            <div
              className={cn(
                'p-1.5 rounded-lg',
                item.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-cyan/20 text-cyan'
              )}
            >
              <item.icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
          </div>

          <h3 className="text-lg font-bold mb-0.5">{item.title}</h3>
          <p className="text-primary font-medium text-sm mb-1">{item.organization}</p>

          <div
            className={cn(
              'flex items-center gap-1 text-xs text-muted-foreground mb-2'
            )}
          >
            <MapPin className="w-3 h-3" />
            {item.location}
          </div>

          <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>

          {item.grade && (
            <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full">
              {item.grade}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const JourneySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="journey" className="py-16"> {/* Reduced py */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-10"> {/* Reduced mb */}
          <p className={cn(
            'text-primary font-mono text-sm mb-2 transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            My Path
          </p>
          <h2 className={cn(
            'text-3xl font-bold transition-all duration-500 delay-100', // Reduced text size slightly
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-8"> {/* Reduced space-y */}
            {journeyItems.map((item, index) => (
              <JourneyItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
