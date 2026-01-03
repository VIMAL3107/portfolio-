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
    title: 'Master of Computer Applications (MCA)',
    organization: 'SRM IST Chennai',
    location: 'Chennai, India',
    period: 'Expected Dec 2025',
    description: 'Specialization in Artificial Intelligence.',
    icon: GraduationCap,
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
    title: "Bachelor's Degree in Computer Science",
    organization: 'Loyola College',
    location: 'Chennai, India',
    period: 'Jun 2020 - May 2023',
    description:
      'Built a strong foundation in programming, algorithms, and software development. Participated in technical clubs and coding projects.',
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
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid md:grid-cols-2 gap-8 md:gap-16 transition-all duration-700',
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
          isEven ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
        )}
      >
        <div
          className={cn(
            'p-6 rounded-2xl bg-card border border-border hover-lift hover-glow',
            isEven ? 'md:ml-auto' : ''
          )}
        >
          <div
            className={cn(
              'flex items-center gap-3 mb-3',
              isEven ? 'md:flex-row-reverse' : ''
            )}
          >
            <div
              className={cn(
                'p-2 rounded-lg',
                item.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-cyan/20 text-cyan'
              )}
            >
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
          </div>

          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-primary font-medium mb-2">{item.organization}</p>

          <div
            className={cn(
              'flex items-center gap-1 text-sm text-muted-foreground mb-3',
              isEven ? 'md:justify-end' : ''
            )}
          >
            <MapPin className="w-3 h-3" />
            {item.location}
          </div>

          <p className="text-sm text-muted-foreground">{item.description}</p>

          {item.grade && (
            <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
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
    <section id="journey" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <p className={cn(
            'text-primary font-mono text-sm mb-2 transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            My Path
          </p>
          <h2 className={cn(
            'text-4xl font-bold transition-all duration-500 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <JourneyItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
