"use client"

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Server, 
  Database, 
  Terminal, 
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";

export default function App() {
  const skills = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      glow: "shadow-cyan-500/20",
      items: ["HTML", "CSS", "JavaScript", "Next.js", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      glow: "shadow-indigo-500/20",
      items: ["Node.js", "PHP"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      glow: "shadow-rose-500/20",
      items: ["Flutter", "Native Android"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      glow: "shadow-orange-500/20",
      items: ["MySQL", "MongoDB", "Firebase", "Firestore"],
    },
    {
      title: "Tools & Environment",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-green-500 to-lime-500",
      glow: "shadow-lime-500/20",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen w-full bg-[#030712] text-white pt-16 pb-20 px-6 relative overflow-hidden selection:bg-purple-500/30">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-cyan-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-purple-500/10 blur-[100px] rounded-full animate-pulse" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex justify-center w-full mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 shadow-xl shadow-cyan-900/10">
              <Sparkles size={14} className="animate-pulse" />
              Technical Arsenal
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold py-2 inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.1] tracking-tight">
            Skills & Technologies
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-medium leading-relaxed">
            A specialized collection of tools and languages I use to turn 
            <span className="text-white"> complex logic </span> into seamless digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 via-transparent to-transparent transition-all duration-500 shadow-2xl ${category.glow}`}
            >
              <div className="h-full rounded-[2rem] bg-slate-950/90 backdrop-blur-3xl p-8 flex flex-col border border-white/5 overflow-hidden">
                {/* Visual Flair Background Icon */}
                <div className="absolute -right-4 -top-4 text-white/5 scale-[2.5] group-hover:text-white/10 transition-all duration-700 -rotate-12 group-hover:rotate-0">
                  {category.icon}
                </div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg ring-1 ring-white/20`}>
                    {React.cloneElement(category.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}>
                    {category.title}
                  </h2>
                </div>

                {/* Chips Container */}
                <div className="flex flex-wrap gap-2.5 mt-auto relative z-10">
                  {category.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                      className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm font-semibold border border-white/5 backdrop-blur-md transition-all cursor-default flex items-center gap-2 group/chip"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/chip:scale-125 transition-transform`} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Closing/Evolution Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 p-[1px] rounded-[2rem] bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-rose-500/30"
          >
            <div className="h-full rounded-[2rem] bg-slate-950/90 backdrop-blur-3xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Layers className="text-cyan-400 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 italic">Lifelong Learning</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Currently mastering advanced system architectures and performance optimization techniques.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4"
        > 
          <a 
            href="/projects" 
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group font-bold tracking-widest text-xs uppercase"
          >
            See these skills in action
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}