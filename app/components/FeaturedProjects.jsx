"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Zap, Github, Gamepad2, ArrowRight, Heart } from 'lucide-react';

const SignatureBar = () => {
  return (
    <div className="w-full flex justify-center py-10 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-2xl hover:bg-white/[0.08] transition-all duration-500"
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          <Image
            src="/favicon.ico" 
            alt="Abhishek Shah Portfolio Logo"
            width={16}
            height={16}
            className="w-full h-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        <div className="w-px h-3 bg-white/10" />

        <p className="text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase text-slate-500 flex items-center gap-2 whitespace-nowrap">
          Made with 
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Heart size={12} className="text-rose-500 fill-rose-500" />
          </motion.span>
          by 
          <span className="text-white group-hover:text-cyan-400 transition-colors">
            Abhishek
          </span>
        </p>

        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </div>
  );
};

const projects = [
  {
    title: "TicTacToe",
    desc: "A premium Android reimagining of the classic game. Features adaptive AI, Neo-Dark UI, and smooth 60FPS animations.",
    tech: ["Flutter", "Dart", "Android"],
    githubUrl: "https://github.com/abhishek-2006/Tictactoe", 
    liveUrl: "/tictactoe", 
    category: "Mobile Game",
    isGame: true
  },
  {
    title: "Hotel Management System",
    desc: "A professional-grade booking engine and administrative suite. Handles real-time availability and billing infrastructure.",
    tech: ["PHP", "MySQL", "Bootstrap", "TailwindCSS"],
    githubUrl: "https://github.com/abhishek-2006/Hotel-Management-System.git",
    liveUrl: null,
    category: "Full Stack"
  },
  {
    title: "Currency Converter",
    desc: "A lightning-fast financial tool featuring real-time exchange rates via API integration. Focused on precision and speed.",
    tech: ["JavaScript", "REST API", "TailwindCSS"],
    githubUrl: "https://github.com/abhishek-2006/Currency-Converter",
    liveUrl: "https://abhishek-2006.github.io/Currency-Converter",
    category: "Web Utility"
  }
];

const ProjectCard = ({ project, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative p-px rounded-4xl bg-linear-to-b transition-all duration-500 shadow-2xl ${
        project.isGame 
          ? "from-cyan-500/40 via-transparent to-transparent" 
          : "from-white/20 via-transparent to-transparent"
      }`}
    >

      <div className="relative h-full rounded-4xl bg-slate-950/90 backdrop-blur-3xl p-8 flex flex-col border border-white/5 overflow-hidden">
        
        {/* Background Decorative Icon */}
        <div className="absolute -right-4 -top-4 text-white/5 scale-[2.5] group-hover:text-white/10 transition-all duration-700 -rotate-12 group-hover:rotate-0">
          {project.isGame ? <Gamepad2 size={48} /> : <Zap size={48} />}
        </div>

        {/* Category & Links */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
            {project.category}
          </span>
          <div className="flex gap-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors relative z-10">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 grow relative z-10">
          {project.desc}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 relative z-10 mt-auto">
          {project.tech.map((t, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-lg bg-white/5 border border-white/10 text-slate-500 group-hover:text-cyan-400 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Dynamic Hover Glow */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden transition-colors duration-500 selection:bg-cyan-500/30">

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase mb-6 text-cyan-400 shadow-2xl"
          >
            <Zap size={14} className="animate-pulse" />
            Curated Showcase
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl py-4 font-black bg-linear-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none mb-6 tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
            A selection of my most impactful work, ranging from <span className="text-white font-bold">mobile gaming</span> to <span className="text-white font-bold">enterprise systems</span>.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} i={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="/projects" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-black text-xs tracking-widest uppercase hover:bg-cyan-400 transition-all shadow-xl active:scale-95"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Branded Footer Signature */}
      <div className="mt-12">
        <SignatureBar />
      </div>
    </section>
  );
}