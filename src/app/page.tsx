"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";
import { FadeIn, Float } from "@/components/ui/animations";

// Natural looking hand-drawn arrow pointing down-right
const SquigglyArrow1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="100" height="110" viewBox="0 0 60 70" fill="none" className="text-primary stroke-current drop-shadow-[0_0_8px_rgba(94,255,94,0.6)]" {...props}>
    <path d="M5 5 C 15 20, 30 40, 50 45" strokeWidth="4" strokeLinecap="round" />
    <path d="M40 55 L 53 45 L 45 32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Natural looking hand-drawn arrow pointing left
const SquigglyArrow2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="70" height="40" viewBox="0 0 50 30" fill="none" className="text-primary stroke-current drop-shadow-[0_0_8px_rgba(94,255,94,0.6)]" {...props}>
    <path d="M45 15 C 30 10, 20 20, 5 15" strokeWidth="3" strokeLinecap="round" />
    <path d="M15 5 L 5 15 L 15 25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Arrow pointing up-right
const SquigglyArrow3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="70" height="70" viewBox="0 0 60 60" fill="none" className="text-primary stroke-current drop-shadow-[0_0_8px_rgba(94,255,94,0.6)]" {...props}>
    <path d="M10 50 Q 25 35 50 15" strokeWidth="3" strokeLinecap="round" />
    <path d="M35 15 L 50 15 L 45 30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Arrow pointing right
const SquigglyArrow4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="80" height="40" viewBox="0 0 60 40" fill="none" className="text-primary stroke-current drop-shadow-[0_0_8px_rgba(94,255,94,0.6)]" {...props}>
    <path d="M5 25 Q 30 5 55 20" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 10 L 55 20 L 45 30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Home() {
  return (
    <main className="w-full flex justify-center text-foreground py-16 lg:py-24 overflow-x-clip min-h-screen relative">

      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-primary/5 blur-[200px] opacity-40 rounded-full pointer-events-none" />

      {/* Reduced max-width globally to physically force columns to overlap and sit tightly next to the hero portrait */}
      <div className="relative w-full xl:w-[95%] max-w-[1350px] flex flex-col items-center px-4 xl:px-0">

        {/* TOP SECTION: Huge Text Above Image */}
        <FadeIn direction="up" className="w-full text-center z-20 mb-8 lg:mb-12">
          {/* Scaled typography text dramatically, dropping min font to 42px to fit mobile */}
          <h1 className="uppercase font-display flex flex-col tracking-tighter select-none text-[#2b2b2b] drop-shadow-sm leading-[0.80] text-[clamp(42px,15vw,260px)] font-black">
            <span>AJAY SHYAM</span>
            <span>SUNDAR P</span>
          </h1>
          <h2 className="text-[#6a6a6a] font-display font-bold text-xl md:text-4xl lg:text-5xl xl:text-7xl tracking-widest uppercase mt-4 lg:mt-8">
            AI SYSTEMS ENGINEER
          </h2>

          <div className="mt-6 lg:mt-10 flex justify-center w-full">
            <a
              href="https://drive.google.com/file/d/1ZhumNEnHF3KxH0t-6hHyqf-mrUm071tR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-white uppercase tracking-[0.2em] font-mono text-sm md:text-base border-b border-primary/30 hover:border-white transition-all pb-1 group"
            >
              View my resume
              <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>
          </div>
        </FadeIn>

        {/* MIDDLE SECTION: Scrollable Canvas with Centers Image and Side Cards */}
        <div className="relative w-full flex flex-col lg:flex-row justify-center items-center lg:items-start lg:min-h-[1450px] mt-8 lg:mt-0">

          {/* ----- MOBILE ONLY: Renders blocks linearly instead of absolute ----- */}
          <div className="lg:hidden flex flex-col w-full gap-6 mb-12">
            <FadeIn direction="up" delay={0.2}>
              <div className="poster-card p-6">
                <h3 className="text-white font-display font-bold text-2xl mb-4 uppercase">System DNA</h3>
                <ul className="text-primary font-bold text-[15px] mb-4 space-y-2 font-mono">
                  <li>4+ Major Systems.</li>
                  <li>Sub-60ms Latency.</li>
                  <li>One obsessive engineering mind.</li>
                </ul>
                <p className="text-[14px] text-gray-300 leading-relaxed font-sans mt-2 opacity-90">
                  I&apos;m an engineer who found home in hard problems, crafting pipelines
                  that blur the lines between software, machine learning, and
                  real-world deployments.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ----- CENTER IMAGE ----- */}
          {/* Greatly scaled up height bounds for the hero image */}
          <FadeIn direction="up" delay={0.3} className="relative z-10 w-[95%] max-w-[800px] h-[60vh] lg:h-[1150px] pointer-events-none mx-auto lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
            <Image
              src="/hero.png"
              alt="Ajay Shyam Sundar P"
              fill
              className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              priority
            />
          </FadeIn>

          {/* ----- DESKTOP LEFT COLUMN ----- */}
          {/* Expanded wrapper container widths to 460px */}
          <div className="hidden lg:flex absolute left-0 top-0 lg:top-[8%] flex-col gap-14 w-[420px] 2xl:w-[480px] z-20">
            <Float delay={0.1}>
              <div className="relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 opacity-70 hidden xl:block">
                  <SquigglyArrow4 className="transform rotate-[15deg] w-20" />
                </div>
                <div className="poster-card p-10 py-12 relative z-20">
                  <h3 className="text-white font-display font-bold text-2xl mb-5 uppercase">System DNA</h3>
                  <ul className="text-primary font-bold text-[16px] xl:text-[18px] mb-5 space-y-2 font-mono">
                    <li>4+ Major Systems.</li>
                    <li>Sub-60ms Latency.</li>
                    <li>One obsessive engineering mind.</li>
                  </ul>
                  <p className="text-[15px] xl:text-[17px] text-gray-300 leading-relaxed font-sans mt-2 opacity-90">
                    I&apos;m an engineer who found home in hard problems, crafting pipelines
                    that blur the lines between software, machine learning, and
                    real-world deployments.
                  </p>
                </div>
              </div>
            </Float>

            <Float delay={0.2}>
              <div className="poster-card p-8 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors relative overflow-hidden">
                <div className="flex items-center gap-6 relative z-10 w-full">
                  <div className="w-20 h-20 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-white border border-white/10 shrink-0">
                    <GithubIcon className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-display font-bold text-xl uppercase tracking-wide">GitHub</h3>
                    <p className="text-[15px] text-gray-400 font-medium mt-1">Click my world.</p>
                  </div>
                </div>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 opacity-80 group-hover:opacity-100 group-hover:-translate-x-2 transition-all">
                  <SquigglyArrow2 />
                </div>
                <a href="https://github.com/ajaypushparaj5" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />
              </div>
            </Float>

            <Float delay={0.3}>
              <div className="relative">
                <div className="absolute -right-16 -top-8 z-10 opacity-70 hidden xl:block">
                  <SquigglyArrow3 className="transform rotate-90 scale-y-[-1] w-20" />
                </div>
                <div className="poster-card p-10 relative z-20">
                  <h3 className="text-primary font-display font-bold text-xl xl:text-2xl mb-5 uppercase tracking-widest">About Me</h3>
                  <div className="flex flex-col gap-3">
                    <p className="text-gray-300 text-[15px] xl:text-[17px] leading-relaxed font-medium">
                      I am a 3rd-year B.Tech IT student profoundly passionate about orchestrating scalable AI architectures.
                    </p>
                    <p className="text-gray-400 text-[14px] xl:text-[16px] leading-relaxed">
                      From training <span className="text-white font-semibold">reinforcement learning benchmarks</span> for pipeline debugging, to crafting <span className="text-white font-semibold">sub-second local RAG engines</span>, I thrive on distilling complex, chaotic ML research into highly optimized, deployment-ready software.
                    </p>
                  </div>
                </div>
              </div>
            </Float>

            <Float delay={0.4} className="mt-6 ml-2">
              <div className="flex flex-col gap-5 pl-2">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded bg-white text-black flex items-center justify-center group-hover:bg-primary transition-colors"><Mail className="w-5 h-5" /></div>
                  <span className="text-[16px] font-semibold tracking-wide">{portfolioData.contact.email}</span>
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded bg-white text-black flex items-center justify-center group-hover:bg-primary transition-colors"><LinkedinIcon className="w-5 h-5" /></div>
                  <span className="text-[16px] font-semibold tracking-wide">LinkedIn Profile</span>
                </a>
              </div>
            </Float>
          </div>

          {/* ----- DESKTOP RIGHT COLUMN ----- */}
          <div className="hidden lg:flex absolute right-0 top-0 lg:top-[5%] flex-col items-end w-[420px] 2xl:w-[480px] z-20 space-y-16 pb-20">

            <div className="relative w-full flex flex-col items-end">
              <Float delay={0.1} className="w-full">
                <div className="relative w-full">
                  <div className="absolute -left-16 top-0 z-10 opacity-70 hidden xl:block">
                    <SquigglyArrow1 className="transform -scale-x-100 rotate-90 w-24 h-24" />
                  </div>
                  <div className="text-right mt-6 pr-6 relative z-20">
                    <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-wide">Education</h3>
                    <p className="text-[16px] xl:text-[18px] text-gray-300 leading-relaxed font-sans opacity-95">
                      B.Tech Information Technology,<br />
                      2023-27<br />
                      CUSAT<br />

                    </p>
                  </div>
                </div>
              </Float>

              <Float delay={0.2} className="w-full mt-10">
                <div className="flex flex-col items-end w-full pr-6 relative">
                  {/* Visual Arrow + Circle Header */}
                  <div className="relative w-full flex justify-end mb-10 mr-4 h-32 items-center">
                    <div className="absolute left-[10%] xl:left-[20%] -top-4 z-30 transform -rotate-[15deg] hover:rotate-0 transition-transform duration-500">
                      <SquigglyArrow1 />
                    </div>
                    <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                      <div className="absolute inset-0 animate-spin-slow opacity-90 pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-white text-[12.5px] font-bold tracking-[0.12em] font-display">
                          <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                          <text>
                            <textPath href="#curve" startOffset="0%">
                              ENGINEER • AI SYSTEMS ENGINEER •
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="text-right mt-4 lg:mt-8">
                    <h3 className="text-primary font-display font-bold text-xl mb-5 uppercase tracking-widest">Skills</h3>
                    <ul className="text-[16px] xl:text-[18px] text-gray-300 space-y-3 font-medium flex flex-col items-end selection:bg-primary/30">
                      <li className="hover:text-white transition-colors">RAG Pipelines</li>
                      <li className="hover:text-white transition-colors">Reinforcement Learning</li>
                      <li className="hover:text-white transition-colors">Computer Vision</li>
                      <li className="hover:text-white transition-colors">Python / FastAPI</li>
                      <li className="hover:text-white transition-colors">Next.js / TypeScript</li>
                      <li className="hover:text-white transition-colors">Vector Search (FAISS)</li>
                      <li className="hover:text-white transition-colors">Optimization & Low Latency</li>
                    </ul>
                  </div>
                </div>
              </Float>
            </div>

            <FadeIn direction="up" delay={0.3} className="w-full">
              <div className="relative">
                <div className="absolute -left-12 -top-12 z-10 opacity-70 hidden xl:block">
                  <SquigglyArrow4 className="transform -scale-x-100 rotate-[20deg] w-24" />
                </div>
                <div className="w-[420px] 2xl:w-[480px] poster-card p-8 pl-10 pr-10 relative z-20">
                  <h3 className="text-white font-display font-bold text-2xl xl:text-3xl mb-8 uppercase tracking-wider">Systems Journey</h3>

                  <div className="space-y-8">
                    {portfolioData.projects.map((project, idx) => (
                      <Link href={`/projects/${project.id}`} key={project.id} className="block group">
                        <div className="flex flex-col relative before:absolute before:-left-6 before:top-[6px] before:w-2.5 before:h-2.5 before:bg-gray-600 before:rounded-full group-hover:before:bg-primary before:transition-colors">
                          <h4 className={`font-display font-bold text-lg xl:text-[20px] tracking-wider transition-colors ${idx === 0 ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                            {project.title}
                          </h4>
                          <p className="text-[13px] text-gray-400 mt-2 uppercase tracking-widest font-mono">
                            {project.tags.slice(0, 2).join(" / ")}
                          </p>
                          <p className="text-[12.5px] text-gray-400 italic mt-2 group-hover:text-gray-200 transition-colors">
                            Click to view details
                          </p>
                        </div>
                      </Link>
                    ))}

                    <div className="flex flex-col relative before:absolute before:-left-6 before:top-4 before:w-2.5 before:h-2.5 before:bg-gray-600 before:rounded-full pt-6 mt-4 border-t border-white/10">
                      <h4 className="font-display font-bold text-lg xl:text-[20px] text-white tracking-wider">
                        AI Behavioral Research
                      </h4>
                      <p className="text-[13px] text-gray-400 mt-2 uppercase tracking-widest font-mono">
                        RGNIYD Workflow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* ----- MOBILE ONLY: Sub-image blocks ----- */}
          <div className="lg:hidden flex flex-col w-full gap-6 mt-12 px-2 z-20">
            <FadeIn direction="up">
              <div className="text-center mb-8">
                <h3 className="text-primary font-display font-bold text-xl mb-4 uppercase">Skills</h3>
                <ul className="text-lg text-gray-300 space-y-2 font-medium">
                  <li>RAG Pipelines</li>
                  <li>Reinforcement Learning</li>
                  <li>Computer Vision</li>
                  <li>Python / FastAPI</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <div className="poster-card p-8">
                <h3 className="text-white font-display font-bold text-xl mb-8 uppercase tracking-wider text-center">Systems Journey</h3>
                <div className="space-y-6">
                  {portfolioData.projects.map((project, idx) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="block group text-center border-b border-white/5 pb-4 last:border-b-0">
                      <h4 className="font-display font-bold text-[18px] text-white group-hover:text-primary">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-2">View Case Study</p>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* ----- EXPLICIT FOOTER ----- */}
        <FadeIn direction="up" className="w-full">
          <footer className="w-full border-t border-white/10 mt-16 lg:mt-32 pt-12 flex flex-col md:flex-row justify-between items-center z-30 pb-16 gap-10">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-wider">Work with Me?</h2>
              <p className="text-gray-400 text-[15px]">Let&apos;s build production-grade AI systems together.</p>
            </div>

            <div className="flex items-center gap-4 xl:gap-8">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-semibold uppercase tracking-widest text-[14px] hidden sm:block mt-1">Email</span>
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <span className="font-semibold uppercase tracking-widest text-[14px] hidden sm:block mt-1">GitHub</span>
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="font-semibold uppercase tracking-widest text-[14px] hidden sm:block mt-1">LinkedIn</span>
              </a>
            </div>
          </footer>
        </FadeIn>
      </div>
    </main>
  );
}
