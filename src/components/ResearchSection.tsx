"use client";

import { portfolioData } from "@/lib/data";
import { FadeIn } from "@/components/ui/animations";
import { GlassCard } from "@/components/ui/glass-card";
import { FlaskConical } from "lucide-react";

export const ResearchSection = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="research">
            <div className="container mx-auto px-4 max-w-7xl">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Research & Experimentation
                        </h2>
                        <div className="h-[2px] w-20 bg-primary/50" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.research.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 0.2}>
                            <GlassCard hoverEffect className="h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <FlaskConical className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-1">{item.institution}</h3>
                                        <h4 className="text-2xl font-display font-bold">{item.title}</h4>
                                    </div>
                                </div>

                                <div className="mt-4 space-y-3 pl-[3.25rem]">
                                    {item.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                                            <span className="text-gray-300">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
