"use client";

import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [asciiArt, setAsciiArt] = useState("");

  useEffect(() => {
    fetch('/projects/ascii-art.txt')
      .then(r => r.text())
      .then(text => setAsciiArt(text))
      .catch(e => console.error("Could not load ASCII", e));
  }, []);

  return (
    <main className="w-full flex-col flex items-center text-primary bg-black min-h-screen relative font-mono overflow-x-hidden selection:bg-primary selection:text-black">

      {/* Top Marquee */}
      <div className="w-full border-b border-primary/30 overflow-hidden py-[10px] fixed top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="animate-marquee inline-block whitespace-nowrap text-sm font-bold tracking-widest text-primary">
          <span className="mx-4">{portfolioData.hero.title} /// </span>
          {portfolioData.metrics.map(m => (
            <span key={m.label} className="mx-4">{m.label}: {m.value} /// </span>
          ))}
          <span className="mx-4">SYSTEM STATUS: ONLINE /// </span>
          <span className="mx-4">LATENCY: SUB-60MS /// </span>
          <span className="mx-4">{portfolioData.hero.title} /// </span>
          {portfolioData.metrics.map(m => (
            <span key={m.label + '2'} className="mx-4">{m.label}: {m.value} /// </span>
          ))}
        </div>
      </div>

      {/* Floating Header Info */}
      <div className="w-full flex justify-between absolute top-20 px-8 z-40 text-xs md:text-sm font-bold">
        <div className="flex gap-4">
          <a href={portfolioData.contact.github} target="_blank" className="hover:text-white transition-colors">[ GITHUB ]</a>
          <a href={portfolioData.contact.linkedin} target="_blank" className="hover:text-white transition-colors">[ LINKEDIN ]</a>
          <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-white transition-colors">[ EMAIL ]</a>
        </div>
        <div className="hidden md:block opacity-70">
          LOCATION // CUSAT, 2023-27
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative pt-20 pb-32 overflow-hidden">

        {/* Floating Typography BEHIND ASCII */}
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 md:pl-16 lg:pl-20 z-10 pointer-events-none w-full">
          <h1 className="text-[18vw] font-black tracking-tighter leading-[0.8] mb-4 bg-gradient-to-r from-white via-white/70 to-transparent bg-clip-text text-transparent w-[140%] pointer-events-none">
            AJAY SHYAM<br />SUNDAR P.
          </h1>
          <p className="text-primary font-bold text-lg md:text-2xl uppercase tracking-widest mt-2 bg-black/60 p-3 border border-primary/40 inline-block pointer-events-auto backdrop-blur-md">
            &gt; {portfolioData.hero.title}_<span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Massive ASCII Art ON TOP */}
        <div className="absolute inset-0 z-20 w-full overflow-hidden flex justify-center items-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-[1.1] origin-center pointer-events-none">

          {/* Black radial mask to block the text exactly behind the portrait */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,1)_15%,rgba(0,0,0,0.8)_35%,transparent_65%)] pointer-events-none" />

          {/* ASCII text with complex glowing colored shades */}
          <pre className="relative z-30 text-[8px] sm:text-[9px] md:text-[10px] leading-[8px] sm:leading-[9px] md:leading-[10px] font-mono whitespace-pre font-bold select-none text-center bg-[radial-gradient(ellipse_at_center,#bcedc5_0%,var(--color-primary)_35%,var(--color-primary-dark)_65%,#1b2b1d_100%)] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(138,185,145,0.15)]">
            {asciiArt}
          </pre>
        </div>

      </section>

      {/* Terminal Output Sections */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-32 flex flex-col md:flex-row gap-12 lg:gap-16 relative z-30 mt-16">

        {/* Profile Output (Left Column) */}
        <div className="flex-1 border border-primary/30 bg-black/80 backdrop-blur-md p-6 lg:p-8 self-start sticky top-24">
          <div className="border-b border-primary/30 pb-3 mb-6 flex gap-3 items-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <h3 className="font-bold tracking-widest text-lg">~ /system/dna.sh</h3>
          </div>
          <div className="space-y-4 opacity-90 text-[15px] lg:text-[16px] leading-relaxed">
            <p className="text-white">&gt; Executing user_profile.scan()...</p>
            <p className="text-white">&gt; Initialization complete.</p>
            <p>&gt; <span className="text-primary">Profile:</span> {portfolioData.profile.description1}</p>
            <p>&gt; <span className="text-primary">Mission:</span> {portfolioData.profile.description2}</p>
            <br />
            <p className="text-white">&gt; Scanning modules...</p>
            <p className="text-primary">&gt; System Capabilities Found:</p>
            <ul className="list-none pl-4 text-white/90 space-y-2">
              <li>[+] RAG Pipelines</li>
              <li>[+] Reinforcement Learning</li>
              <li>[+] Computer Vision</li>
              <li>[+] Python / FastAPI</li>
              <li>[+] Next.js / TypeScript</li>
            </ul>
          </div>
        </div>

        {/* Projects Log (Right Column) */}
        <div className="flex-[1.5] border border-primary/30 bg-black/80 backdrop-blur-md p-6 lg:p-8">
          <div className="border-b border-primary/30 pb-3 mb-8 flex gap-3 items-center">
            <div className="w-3 h-3 bg-white rounded-full" />
            <h3 className="font-bold tracking-widest text-lg">~ /system/deployments.log</h3>
          </div>
          <div className="flex flex-col gap-10">
            {portfolioData.projects.map((project, idx) => (
              <div key={project.id} className="group border-l-[3px] border-primary-dark pl-5 py-2 hover:border-primary transition-colors cursor-pointer">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
                    <h4 className="font-bold text-xl lg:text-[22px] tracking-widest text-white group-hover:text-primary transition-colors">
                      [{project.title}]
                    </h4>
                    <span className="text-sm font-bold border border-primary/40 px-4 py-1.5 bg-primary/10 group-hover:bg-primary group-hover:text-black transition-all">
                      EXECUTE &rarr;
                    </span>
                  </div>
                  <p className="text-sm mt-4 uppercase tracking-widest opacity-80 text-primary">
                    &gt; tech_stack: [ {project.tags.join(", ")} ]
                  </p>
                  <p className="mt-3 text-white/80 leading-relaxed">
                    &gt; {project.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Footer Log */}
      <footer className="w-full border-t border-primary/40 py-10 text-center text-sm opacity-60 font-bold bg-black">
        &gt; CONNECTION SECURE. SYSTEM READY. EOF.
      </footer>

    </main>
  );
}
