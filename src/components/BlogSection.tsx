"use client";

import { portfolioData } from "@/lib/data";
import { FadeIn } from "@/components/ui/animations";
import { GlassCard } from "@/components/ui/glass-card";
import { Calendar, Clock } from "lucide-react";

export const BlogSection = () => {
    return (
        <section className="py-24 relative" id="blog">
            <div className="container mx-auto px-4 max-w-7xl">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Notes & Learnings
                        </h2>
                        <div className="h-[2px] w-20 bg-primary/50" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.blog.map((post, index) => (
                        <FadeIn key={post.id} delay={index * 0.1}>
                            <GlassCard hoverEffect className="cursor-pointer group flex flex-col h-full">
                                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime}</span>
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
