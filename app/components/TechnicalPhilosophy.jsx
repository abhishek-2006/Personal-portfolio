"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Layout, ShieldCheck, Star } from "lucide-react";

export default function TechnicalPhilosophy() {
  const principles = [
    {
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      title: "User-Centric Frontend Architecture",
      description: "Building responsive, modern, and accessible interfaces. Leveraging Next.js and React 19 for optimized server-side rendering, code-splitting, and fast visual loads.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "Full-Stack System Engineering",
      description: "Designing RESTful and real-time APIs using Node.js and Express. Emphasizing clean, secure architecture, modular routing, and proper middleware implementations.",
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Data Modeling & Integration",
      description: "Structuring scalable databases with MongoDB and MySQL. Utilizing indexing, replication safety, and performance-tuned queries to ensure high data integrity and minimal latency.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Cross-Platform Mobile Strategy",
      description: "Developing cross-platform applications in Flutter and Dart. Customizing UI schemas, managing states robustly, and targeting seamless Android/iOS performance.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-slate-950/20 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wider text-cyan-400 mb-4">
            <Star size={12} className="animate-spin [animation-duration:10s]" />
            Development Standards & Methodologies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Engineering Philosophy
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            As a full-stack engineer, my development strategy centers on reliability, speed, and clean separation of concerns. I focus on deploying highly performant digital systems that adapt to shifting scale requirements.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authoritative Essay */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Bridging Client-Side Aesthetics and High-Scale Backends
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              My engineering methodology addresses the full lifecycle of modern digital products. By standardizing on modular clean code practices, I build frontend interfaces that feel fast and responsive to the user, paired with robust backend services that remain resilient under load.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Whether building dynamic web apps with React and Tailwind, or engineering mobile experiences with Flutter, my primary objectives are: minimizing visual layout shifts, maintaining clean system logic, and building secure database integrations.
            </p>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h4 className="text-white font-bold text-sm mb-2">Technical Core Stack Summary</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                <div>• Next.js / React 19</div>
                <div>• Flutter / Dart</div>
                <div>• Node.js / Express</div>
                <div>• MongoDB / MySQL</div>
                <div>• TypeScript / JS</div>
                <div>• Git / GitHub Actions</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Principles Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {principles.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
              >
                {/* Accent Background Glow on Hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-500/0 group-hover:bg-cyan-500/[0.02] transition-colors duration-300" />
                
                <div className="mb-4 p-3 rounded-xl bg-slate-950 w-fit border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  {p.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {p.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
