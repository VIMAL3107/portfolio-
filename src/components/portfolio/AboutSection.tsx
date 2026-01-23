import { Target, Zap, MessageSquare, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const focusPoints = [
  'Developing machine learning and deep learning models for real-world challenges.',
  'Implementing NLP, computer vision, and AI automation solutions.',
  'Leveraging big data and cloud technologies for scalable AI applications.',
];

const strengths = [
  { icon: Zap, text: 'Strong analytical and problem-solving skills' },
  { icon: Target, text: 'Experienced in AI model development and performance optimization' },
  { icon: MessageSquare, text: 'Clear communicator of complex AI concepts to diverse stakeholders' },
];

export const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: focusRef, isVisible: focusVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: strengthsRef, isVisible: strengthsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aspirationRef, isVisible: aspirationVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div ref={headerRef} className="text-center">
            <p className={cn(
              'text-primary font-mono text-sm mb-2 transition-all duration-500',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}>
              Get to know me
            </p>
            <h2 className={cn(
              'text-4xl font-bold mb-4 transition-all duration-500 delay-100',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}>
              About Me
            </h2>
          </div>

          <p
            ref={contentRef}
            className={cn(
              'text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto transition-all duration-700',
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            Computer Science graduate passionate about artificial intelligence and machine learning.
            Skilled in Python, TensorFlow, PyTorch, SQL, and data visualization, with experience
            building predictive models, AI-driven solutions, and intelligent systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div
              ref={focusRef}
              className={cn(
                'space-y-4 transition-all duration-700',
                focusVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              )}
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Current Focus
              </h3>
              <ul className="space-y-2">
                {focusPoints.map((point, index) => (
                  <li
                    key={index}
                    className={cn(
                      'flex items-start gap-3 text-muted-foreground transition-all duration-500',
                      focusVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    )}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div
              ref={strengthsRef}
              className={cn(
                'space-y-4 transition-all duration-700',
                strengthsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              )}
            >
              <h3 className="text-xl font-semibold">Strengths</h3>
              <div className="grid gap-3">
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover-lift transition-all duration-500',
                      strengthsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    )}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <strength.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-muted-foreground">{strength.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={aspirationRef}
            className={cn(
              'p-4 rounded-lg bg-gradient-primary text-primary-foreground max-w-2xl mx-auto transition-all duration-700',
              aspirationVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
          >
            <h4 className="font-semibold mb-2 text-center">Career Aspiration</h4>
            <p className="text-sm opacity-90 text-center">
              Aiming to contribute to innovative AI projects that drive operational efficiency,
              intelligent decision-making, and measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
