import { portfolioData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

export function generateStaticParams() {
    return portfolioData.projects.map((p) => ({
        id: p.id,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const project = portfolioData.projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    const hasImages = project.images && project.images.length > 0;

    return (
        <main className={`min-h-screen container mx-auto px-4 ${hasImages ? 'max-w-6xl' : 'max-w-3xl'} py-12 lg:py-20`}>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">Back to Poster</span>
            </Link>

            <div className={`grid grid-cols-1 ${hasImages ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-12`}>

                {/* Left Side: Images (Only render if images exist) */}
                {hasImages && (
                    <div className="col-span-1 lg:col-span-7 space-y-8">
                        {project.images?.map((img, idx) => (
                            <div key={idx} className="relative w-full rounded-2xl overflow-hidden glass border border-white/10 group">
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white/60 font-mono text-xs">Fig {idx + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Right Side: Details */}
                <div className={`col-span-1 ${hasImages ? 'lg:col-span-5' : 'lg:col-span-1'}`}>
                    <div className={`${hasImages ? 'sticky top-12' : ''} space-y-8`}>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{project.title}</h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h3 className="text-primary font-display font-bold text-lg mb-4 uppercase tracking-wider">System Highlights</h3>
                            <ul className="space-y-4">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="text-primary mt-1">&gt;</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-8 flex flex-col gap-4">
                            {project.links?.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-white/20 glass hover:border-primary hover:text-primary transition-all font-semibold">
                                    <GithubIcon className="w-5 h-5" /> Source Code
                                </a>
                            )}
                            {project.links?.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-primary bg-primary text-black hover:bg-primary-dark transition-all font-semibold shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.6)]">
                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
