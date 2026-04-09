"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { Float, FadeIn } from "@/components/ui/animations";
import { GlassCard } from "@/components/ui/glass-card";

export const HeroSection = () => {
    return (
        <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Huge Background Text */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-display font-bold text-white/[0.03] whitespace-nowrap select-none pointer-events-none uppercase">
                {portfolioData.hero.name.split(" ")[0]}
            </h1>

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl">

                {/* Left Side: Profile Info (Floating) */}
                <div className="order-2 lg:order-1 lg:col-span-3 space-y-6">
                    <Float delay={0}>
                        <GlassCard hoverEffect>
                            <h3 className="font-display font-bold text-xl mb-3 text-primary uppercase tracking-wider">
                                {portfolioData.profile.title}
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                {portfolioData.profile.description1}
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {portfolioData.profile.description2}
                            </p>
                        </GlassCard>
                    </Float>
                </div>

                {/* Center: Image & Titles */}
                <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col items-center justify-center text-center">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
                            AJAY SHYAM SUNDAR P
                        </h2>
                        <div className="inline-flex items-center gap-2 mb-6 pointer-events-none">
                            <span className="h-[2px] w-8 bg-primary"></span>
                            <p className="text-lg md:text-xl text-primary font-mono select-all">
                                {portfolioData.hero.title}
                            </p>
                            <span className="h-[2px] w-8 bg-primary"></span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm mx-auto uppercase tracking-widest mb-10">
                            {portfolioData.hero.subtitle}
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2} className="relative w-64 h-[400px] md:w-80 md:h-[500px] mx-auto select-none pointer-events-none">
                        {/* The character image. Assuming user places it at /hero.png */}
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                        <Image
                            src={portfolioData.hero.image}
                            alt="Ajay Shyam Sundar P"
                            fill
                            className="object-contain filter drop-shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                            priority
                        />
                    </FadeIn>
                </div>

                {/* Right Side: Key Metrics & Projects (Floating) */}
                <div className="order-3 lg:col-span-3 space-y-6 flex flex-col items-end">
                    <Float delay={0.2} className="w-full">
                        <GlassCard hoverEffect>
                            <h3 className="font-display font-bold text-xl mb-4 text-primary uppercase tracking-wider">
                                Key Metrics
                            </h3>
                            <div className="space-y-4">
                                {portfolioData.metrics.map((metric, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase">{metric.label}</span>
                                        <span className="text-base font-bold text-white">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </Float>

                    <Float delay={0.4} className="w-full">
                        <GlassCard hoverEffect>
                            <h3 className="font-display font-bold text-xl mb-3 text-primary uppercase tracking-wider">
                                Systems
                            </h3>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li>• DataOnCallEnv</li>
                                <li>• RAG Knowledge Engine</li>
                                <li>• Closer AI</li>
                                <li>• AI Interview Trainer</li>
                            </ul>
                        </GlassCard>
                    </Float>
                </div>

            </div>
        </section>
    );
};
