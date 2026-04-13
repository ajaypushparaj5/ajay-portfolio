"use client";

import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { useEffect, useState } from "react";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function Home() {
  const [asciiArt, setAsciiArt] = useState("");

  useEffect(() => {
    fetch('/projects/ascii-art.txt')
      .then(r => r.text())
      .then(text => setAsciiArt(text))
      .catch(e => console.error("Could not load ASCII", e));
  }, []);

  return (
    <main className="w-full flex-col flex items-center bg-black min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-black">

      {/* Floating Header Info */}
      <header className="w-full flex justify-between absolute top-12 px-6 md:px-12 z-40 text-xs md:text-sm font-medium text-white/70">
        <div className="flex gap-6 md:gap-10">
          <a href={portfolioData.contact.github} target="_blank" className="hover:text-primary transition-colors uppercase tracking-widest">GitHub</a>
          <a href={portfolioData.contact.linkedin} target="_blank" className="hover:text-primary transition-colors uppercase tracking-widest">LinkedIn</a>
          <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-primary transition-colors uppercase tracking-widest">Email</a>
        </div>
        <div className="hidden md:block uppercase tracking-widest">
          BTECH Information Technology
          <br />
          CUSAT, 2023-27
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative pt-20 pb-32 overflow-hidden">

        {/* Background Pattern */}
        <BGPattern className="!z-0 opacity-80" variant="grid" mask="fade-edges" fill="rgba(255,255,255,0.4)" size={32} />

        {/* Floating Typography BEHIND ASCII on Desktop, OVER ASCII on Mobile */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-30 md:z-10 pointer-events-none w-full font-display px-4">
          <h1 className="flex flex-col text-[17vw] sm:text-[16vw] lg:text-[14.5vw] font-black tracking-tighter leading-[0.8] mb-6 text-white pointer-events-none uppercase drop-shadow-2xl text-center w-full">
            <span className="whitespace-nowrap">AJAY SHYAM</span>
            <span className="whitespace-nowrap -mt-2 md:-mt-8">SUNDAR P.</span>
          </h1>
          <p className="text-white font-medium text-lg md:text-2xl uppercase tracking-widest bg-black/60 p-3 border border-white/20 inline-block pointer-events-auto backdrop-blur-md">
            {portfolioData.hero.title}
          </p>
        </div>

        {/* Massive ASCII Art ON TOP (desktop) / HIDDEN BEHIND TEXT (mobile) */}
        <div className="absolute inset-0 z-10 md:z-20 w-full overflow-hidden flex justify-center items-center scale-125 sm:scale-100 lg:scale-[1.1] origin-center pointer-events-none">

          {/* Black radial mask to tightly block the text exactly behind the portrait on DESKTOP ONLY */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,1)_15%,rgba(0,0,0,0.85)_35%,transparent_65%)] pointer-events-none hidden md:block" />

          {/* ASCII Text */}
          <pre className="ascii-gradient relative z-10 text-[6.5px] leading-[6.5px] sm:text-[6px] sm:leading-[6px] md:text-[7.5px] md:leading-[7.5px] lg:text-[10px] lg:leading-[10px] font-mono whitespace-pre font-bold select-none text-center drop-shadow-[0_0_15px_rgba(138,185,145,0.15)] flex justify-center items-center">
            {asciiArt}
          </pre>
        </div>
      </section>

      {/* Lower Details Content Wrapper with Texture */}
      <div className="w-full relative pt-16">
        <BGPattern className="!z-0 opacity-80 pointer-events-none" variant="dots" mask="fade-top" fill="rgba(255,255,255,0.45)" size={24} />

        {/* Minimalist Details Section */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-20 flex flex-col md:flex-row gap-12 lg:gap-16 relative z-30 font-sans">

          {/* Profile Output (Left Column) */}
          <div className="flex-1 bg-black p-8 border border-white/10 hover:border-white/20 transition-all self-start md:sticky top-24">
            <h3 className="font-display font-bold tracking-widest text-xl text-primary mb-8 uppercase">Profile DNA</h3>
            <div className="space-y-6 opacity-90 text-[15px] lg:text-[16px] leading-relaxed text-white">
              <p className="font-light">{portfolioData.profile.description1}</p>
              <p className="font-light">{portfolioData.profile.description2}</p>

              <div className="pt-6 border-t border-white/10">
                <h4 className="font-bold text-sm tracking-widest uppercase mb-4 text-white/50">Core Capabilities</h4>
                <ul className="space-y-3 font-light text-white/80">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-primary/70 rounded-full" /> RAG Pipelines</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-primary/70 rounded-full" /> Reinforcement Learning</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-primary/70 rounded-full" /> Computer Vision</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-primary/70 rounded-full" /> Python / FastAPI</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-primary/70 rounded-full" /> Next.js / TypeScript</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Log (Right Column) */}
          <div className="flex-[1.5] bg-black p-8 border border-white/10 hover:border-white/20 transition-all">
            <h3 className="font-display font-bold tracking-widest text-xl text-primary mb-8 uppercase">Systems & Deployments</h3>

            <div className="flex flex-col gap-12">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="group flex flex-col">
                  <Link href={`/projects/${project.id}`} className="block">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
                      <h4 className="font-display font-bold text-2xl lg:text-3xl tracking-wide text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-sm font-bold uppercase tracking-widest border border-white/20 px-4 py-2 group-hover:border-primary group-hover:text-primary transition-all text-white/60">
                        View Detail
                      </span>
                    </div>
                    <p className="text-xs mt-4 uppercase tracking-widest text-primary/70 font-mono">
                      {project.tags.join(" / ")}
                    </p>
                    <p className="mt-4 text-white/70 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-white/10 py-16 flex flex-col md:flex-row justify-between items-center z-30 gap-10 px-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Connect</h2>
            <p className="text-white/50 text-sm font-light">Building intelligent, production-grade AI systems.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8">
            <a href={`mailto:${portfolioData.contact.email}`} className="text-white/60 hover:text-primary transition-colors font-medium tracking-widest uppercase text-sm">
              Email
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors font-medium tracking-widest uppercase text-sm">
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors font-medium tracking-widest uppercase text-sm">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
