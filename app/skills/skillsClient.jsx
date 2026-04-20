"use client"

import React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
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
import { Icon } from "@iconify/react";
import SkillsThreeScene from "../components/SkillsThreeScene";

const TECH_STACK = [
  { name: "Next.js", icon: "logos:nextjs-icon", color: "#ffffff" },
  { name: "Flutter", icon: "logos:flutter", color: "#02569B" },
  { name: "Android", icon: "logos:android-icon", color: "#3DDC84" },
  { name: "React", icon: "logos:react", color: "#61DAFB" },
  { name: "PHP", icon: "logos:php", color: "#777BB4" },
  { name: "MySQL", icon: "logos:mysql-icon", color: "#4479A1" },
  { name: "Bootstrap", icon: "logos:bootstrap", color: "#7952B3" },
  { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
  { name: "GitHub", icon: "mdi:github", color: "#ffffff" },
  { name: "Git", icon: "logos:git-icon", color: "#F05032" },
  { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" },
  { name: "Express.js", icon: "simple-icons:express", color: "#000000" },
  { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47A248" },
];

const skills = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      glow: "shadow-cyan-500/20",
      items: ["HTML", "CSS", "Next.js", "Tailwind", "React", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      glow: "shadow-indigo-500/20",
      items: ["Node.js", "PHP", "Express.js" ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      glow: "shadow-rose-500/20",
      items: ["Flutter", "Native Android",],
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

const HaloItem = ({ skill, index, total, isMobile, setHoveredSkill }) => {
  const angle = (index / total) * (2 * Math.PI);
  const radius = isMobile ? 40 : (skill.size === 'lg' ? 38 : skill.size === 'md' ? 30 : 22);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, left: "50%", top: "50%" }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        left: `calc(50% + ${Math.cos(angle) * radius}%)`,
        top: `calc(50% + ${Math.sin(angle) * radius}%)`
      }}
      transition={{ delay: index * 0.05, duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
    >
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 75, ease: "linear" }}
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
        className={`
        relative flex items-center justify-center rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-white/20
        ${skill.size === 'lg' ? 'p-6 md:p-8 shadow-2xl' : skill.size === 'md' ? 'p-5 md:p-6 shadow-xl' : 'p-2 md:p-3 shadow-lg'}
      `}>
        {/* Brand Glow */}
        <div 
          className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full pointer-events-none"
          style={{ backgroundColor: skill.color }}
        />
        
        <div className={`
          flex items-center justify-center
          ${skill.size === 'lg' ? 'w-16 h-16 md:w-20 md:h-20' : skill.size === 'md' ? 'w-12 h-12 md:w-14 md:h-14' : 'w-9 h-9 md:w-10 md:h-10'}
        `}>
          <Icon 
            icon={skill.icon} 
            className="w-full h-full object-contain" 
            style={{ color: skill.name === "GitHub" ? skill.color : undefined }}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-800 border border-white/10 text-[8px] md:text-[10px] font-black text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest z-50">
          {skill.name}
        </div>
      </motion.div>
    </motion.div>
  );
};


const TiltCard = ({ category, index, cardVariants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    x.set(mx / width - 0.5);
    y.set(my / height - 0.5);
    mouseX.set(mx);
    mouseY.set(my);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`;

  return (
    <motion.div
      variants={cardVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-[1px] rounded-[2rem] bg-linear-to-b from-white/20 via-transparent to-transparent transition-all duration-500 shadow-2xl ${category.glow}`}
    >
      <motion.div 
        className="absolute inset-0 z-0 rounded-[2rem] pointer-events-none"
        style={{ background }}
      />
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="h-full rounded-[2rem] bg-slate-950/90 backdrop-blur-3xl p-7 flex flex-col border border-white/5 relative z-10"
      >
        {/* Visual Flair Background Icon */}
        <div 
          style={{ transform: "translateZ(-20px)" }}
          className="absolute -right-4 -top-4 text-white/5 scale-[2.5] group-hover:text-white/10 transition-all duration-700 -rotate-12 group-hover:rotate-0"
        >
          {category.icon}
        </div>

        <div 
          style={{ transform: "translateZ(40px)" }}
          className="flex items-center gap-4 mb-8 relative z-10"
        >
          <div className={`p-3 rounded-2xl bg-linear-to-br ${category.color} shadow-lg ring-1 ring-white/20`}>
            {React.cloneElement(category.icon, { className: "w-6 h-6 text-white" })}
          </div>
          <h2 className={`text-2xl font-bold bg-linear-to-r ${category.color} text-transparent bg-clip-text`}>
            {category.title}
          </h2>
        </div>

        {/* Chips Container */}
        <div 
          style={{ transform: "translateZ(20px)" }}
          className="flex flex-wrap gap-2.5 mt-auto relative z-10"
        >
          {category.items.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)", y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", y: -2 }}
              className="px-4 py-2 rounded-xl text-slate-300 text-sm font-semibold border border-white/5 backdrop-blur-md transition-all cursor-default flex items-center gap-2 group/chip"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${category.color} shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/chip:scale-125 transition-transform`} />
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsClient() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const wheelRotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const wheelRotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  React.useEffect(() => {
    const checkRes = () => setIsMobile(window.innerWidth < 768);
    checkRes();
    window.addEventListener('resize', checkRes);

    const handleGlobalMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const xPct = e.clientX / window.innerWidth - 0.5;
      const yPct = e.clientY / window.innerHeight - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('resize', checkRes);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    
    <div className="min-h-screen w-full text-white pt-16 pb-20 px-6 relative overflow-hidden selection:bg-purple-500/30">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#030712] z-0" />
      
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <SkillsThreeScene />
      </div>

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-cyan-500/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-purple-500/10 blur-[100px] rounded-full animate-pulse" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-20">
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
          
          <h1 className="text-5xl md:text-7xl font-extrabold py-2 inline-block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.1] tracking-tight">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6"
        >
          {skills.map((category, index) => (
            <TiltCard key={index} category={category} index={index} cardVariants={cardVariants} />
          ))}

          {/* Closing/Evolution Card */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 p-[1px] rounded-[2rem] bg-linear-to-tr from-cyan-500/30 via-purple-500/30 to-rose-500/30"
          >
            <div className="h-full rounded-[2rem] bg-slate-950/90 backdrop-blur-3xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Layers className="text-cyan-400 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 italic">Lifelong Learning</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                I’m committed to continuous learning and adapting to new tools and frameworks to stay at the forefront of innovation.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center mt-12 md:mt-6 lg:mt-0 mb-2 lg:mb-0 w-full max-w-[800px] mx-auto" style={{ perspective: 1200 }}>
          {/* The Halo Container */}
          <motion.div 
            style={{ 
              rotateX: isMobile ? 0 : wheelRotateX,
              rotateY: isMobile ? 0 : wheelRotateY,
              transformStyle: "preserve-3d" 
            }}
            className="relative w-full aspect-square flex items-center justify-center"
          >
            {/* Dynamic background rings */}
            <div className="absolute inset-[25%] rounded-full border border-white/3 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[50%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* Center Brand / Signature */}
            <motion.div 
              animate={hoveredSkill ? { scale: 1.05, opacity: 1 } : { scale: [0.95, 1.05, 0.95], opacity: [0.5, 1, 0.5] }}
              transition={hoveredSkill ? { duration: 0.2 } : { duration: 4, repeat: Infinity }}
              className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              <AnimatePresence>
                {hoveredSkill ? (
                  <motion.div 
                    key={hoveredSkill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-20"
                  >
                    <Icon 
                      icon={hoveredSkill.icon} 
                      className="w-8 h-8 md:w-10 md:h-10 mb-1" 
                      style={{ color: hoveredSkill.name === "GitHub" ? hoveredSkill.color : undefined }}
                    />
                    <p className="text-center text-[10px] md:text-xs font-bold text-white tracking-widest uppercase px-1 leading-tight">{hoveredSkill.name}</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <p className="text-center text-sm md:text-base font-bold text-white tracking-widest uppercase px-4">
                      Skills
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 rounded-full border-t border-cyan-500/30 animate-spin pointer-events-none z-30" />
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 75, ease: "linear" }}
            >
              {TECH_STACK.map((skill, idx) => (
                <HaloItem key={skill.name} skill={skill} index={idx} total={TECH_STACK.length} isMobile={isMobile} setHoveredSkill={setHoveredSkill} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-0 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 px-4"
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