"use client";

import { FadeIn } from "@/components/ui/animations";
import { GlassCard } from "@/components/ui/glass-card";
import { Database, Cpu, BrainCircuit, RefreshCcw, ArrowRight } from "lucide-react";

export const ThinkingSection = () => {
    const steps = [
        {
            icon: Database,
            title: "Data Layer",
            desc: "Robust extraction & preprocessing pipelines for raw signals.",
            examples: "Vector stores, Log parsing",
        },
        {
            icon: Cpu,
            title: "Processing",
            desc: "High-performance inference execution at the edge.",
            examples: "CV Pipelines, Transformers",
        },
        {
            icon: BrainCircuit,
            title: "Intelligence",
            desc: "Semantic retrieval and agentic reasoning systems.",
            examples: "RAG, RL Agent Logic",
        },
        {
            icon: RefreshCcw,
            title: "Feedback",
            desc: "Multi-metric reward systems to refine performance dynamically.",
            examples: "Reward Modeling, Human-in-loop",
        },
    ];

    return (
        <section className="py-24 relative" id="thinking">
            <div className="container mx-auto px-4 max-w-7xl">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            How I Build Systems
                        </h2>
                        <div className="h-[2px] w-20 bg-primary/50" />
                    </div>
                </FadeIn>

                <div className="relative">
                    {/* Connector Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={index * 0.15} direction="up" className="h-full">
                                <GlassCard hoverEffect className="flex flex-col h-full bg-background/80 relative">
                                    <div className="mb-6 p-4 rounded-xl bg-primary/10 inline-block text-primary w-min">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-grow">{step.desc}</p>

                                    <div className="mt-auto">
                                        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Implementations</div>
                                        <div className="text-sm font-semibold text-primary/80">{step.examples}</div>
                                    </div>

                                    {/* Arrow indicating flow on desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center text-primary z-20">
                                            <ArrowRight className="w-5 h-5 opacity-50" />
                                        </div>
                                    )}
                                </GlassCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
