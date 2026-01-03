import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/VIMAL3107',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:vimalraj@email.com',
    icon: Mail,
  },
];

export const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <p className={cn(
            'text-primary font-mono text-sm mb-2 transition-all duration-500',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Get in touch
          </p>
          <h2 className={cn(
            'text-4xl font-bold transition-all duration-500 delay-100',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}>
            Let's Connect
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            ref={leftRef}
            className={cn(
              'space-y-8 transition-all duration-700',
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            )}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className={cn(
                'flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-500',
                leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              )}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className={cn(
                'flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-500',
                leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              )}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:vimalraj@email.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    vimalraj@email.com
                  </a>
                </div>
              </div>
            </div>

            <div className={cn(
              'transition-all duration-500',
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="font-medium mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-3 rounded-xl border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all hover-lift',
                      leftVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    )}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={rightRef}
            className={cn(
              'transition-all duration-700',
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-2xl bg-card border border-border">
              <div className={cn(
                'transition-all duration-500',
                rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              )}
                style={{ transitionDelay: '200ms' }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background"
                />
              </div>

              <div className={cn(
                'transition-all duration-500',
                rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              )}
                style={{ transitionDelay: '300ms' }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-background"
                />
              </div>

              <div className={cn(
                'transition-all duration-500',
                rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              )}
                style={{ transitionDelay: '400ms' }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={cn(
                  'w-full bg-gradient-primary hover:opacity-90 transition-all duration-500',
                  rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                )}
                style={{ transitionDelay: '500ms' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
