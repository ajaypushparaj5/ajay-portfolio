"use client";

import { portfolioData } from "@/lib/data";
import { FadeIn } from "@/components/ui/animations";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

export const SystemsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="systems">
            {/* Background decoration */}
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Selected Systems
                        </h2>
                        <div className="h-[2px] w-20 bg-primary/50" />
                    </div>
                </FadeIn>

                <div className="space-y-16">
                    {portfolioData.projects.map((project, index) => (
                        <FadeIn key={project.id} delay={index * 0.1}>
                            <GlassCard className="p-0 overflow-hidden group">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image side */}
                                    <div className="w-full lg:w-5/12 h-64 lg:h-auto relative overflow-hidden bg-white/5">
                                        {project.images && project.images[0] ? (
                                            <Image
                                                src={project.images[0]}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                                Image Placeholder
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] to-transparent lg:w-1/4 lg:right-0 lg:left-auto bottom-0 w-full h-1/4 md:h-full pointer-events-none" />
                                    </div>

                                    {/* Content side */}
                                    <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag}>{tag}</Badge>
                                            ))}
                                        </div>

                                        <div className="space-y-3 mb-8">
                                            {project.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="text-primary mt-1 text-sm font-mono">&gt;</span>
                                                    <span className="text-sm text-gray-300">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 mt-auto">
                                            {project.links?.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-primary transition-colors hover:bg-white/5 py-2 px-4 rounded-full border border-white/10"
                                                >
                                                    <GithubIcon className="w-4 h-4" />
                                                    Source Code
                                                </a>
                                            )}
                                            {project.links?.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm font-semibold text-black bg-primary hover:bg-primary-dark transition-colors py-2 px-4 rounded-full border border-primary"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
