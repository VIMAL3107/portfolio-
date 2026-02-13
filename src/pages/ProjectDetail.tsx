import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2, Layers, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button asChild>
                    <Link to="/">Go Home</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="container mx-auto px-4 h-16 flex items-center">
                    <Button variant="ghost" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
                        <Link to="/#projects" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </Button>
                </div>
            </nav>

            <div className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12 animate-fade-up">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            {project.role}
                        </span>
                        <span
                            className={cn(
                                'px-3 py-1 text-sm font-medium rounded-full border',
                                project.status === 'Live'
                                    ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                    : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                            )}
                        >
                            {project.status}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                        {project.title}
                    </h1>
                    <p className="text-xl text-muted-foreground w-full max-w-2xl">
                        {project.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content (Left Col) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Video Player */}
                        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl animate-fade-up stagger-1 aspect-video group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <iframe
                                src={project.videoUrl}
                                title={`${project.title} Demo Video`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Deep Explanation */}
                        <div className="animate-fade-up stagger-2">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Code2 className="w-6 h-6 text-primary" />
                                Deep Dive
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right Col) */}
                    <div className="space-y-8 animate-fade-in stagger-3">
                        {/* Action Card */}
                        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-lg sticky top-24">
                            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                <Layers className="w-5 h-5 text-primary" />
                                Project Details
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-xs font-mono bg-muted/50 text-foreground rounded-md border border-border/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-border/50 pt-6">
                                    <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Key Highlights</h4>
                                    <ul className="space-y-3">
                                        {project.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 pt-6 border-t border-border/50">
                                    <Button asChild size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            View Source Code
                                        </a>
                                    </Button>

                                    {project.liveUrl && (
                                        <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <Globe className="w-4 h-4 mr-2" />
                                                Live Website
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
