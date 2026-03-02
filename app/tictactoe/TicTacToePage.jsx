"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ChevronLeft,
  ShieldCheck,
  Smartphone,
  Gamepad2,
  Info,
  Github,
  Zap,
  Activity,
  Cpu,
  Layers,
  ExternalLink,
  Star,
  Maximize2,
  ChevronRight
} from "lucide-react";

export default function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [apkUrl, setApkUrl] = useState("");
  const [version, setVersion] = useState("v1.3.0");
  const [size, setSize] = useState("4.2 MB");
  const [isMounted, setIsMounted] = useState(false);
  const [downloads, setDownloads] = useState(0);

  const game = {
    title: "TicTacToe",
    tagline: "Enhanced Edition",
    logo: "/tictactoe-logo.png",
    developer: "Abhishek Shah",
    tags: ["No Ads", "Offline", "AI Powered"],
    screenshots: [
      { id: 1, title: "Main Menu", url: "/images/tictactoe/main-menu.png" },
      { id: 2, title: "AI Gameplay", url: "/images/tictactoe/gameplay.png" },
      { id: 3, title: "Neural AI Selector", url: "/images/tictactoe/computer-modes.png" },
      { id: 4, title: "Settings", url: "/images/tictactoe/settings.png" },
      { id: 5, title: "Victory Screen", url: "/images/tictactoe/victory-dark.png" },
      { id: 6, title: "Local PvP", url: "/images/tictactoe/local-pvp-light.png" },
    ],
    features: [
      {
        icon: <Cpu className="w-6 h-6 text-cyan-500" />,
        title: "Adaptive AI",
        desc: "Neural-based difficulty levels that learn and adapt to your unique playstyle.",
      },
      {
        icon: <Layers className="w-6 h-6 text-indigo-500" />,
        title: "Neo-Dark UI",
        desc: "A custom-built, battery-efficient interface with buttery smooth 60FPS animations.",
      },
      {
        icon: <Zap className="w-6 h-6 text-amber-500" />,
        title: "Instant Play",
        desc: "Optimized binary size for near-zero loading times. Jump straight into the action.",
      },
      {
        icon: <Gamepad2 className="w-6 h-6 text-rose-500" />,
        title: "Local PvP",
        desc: "Challenge friends in the classic 1v1 local mode with haptic feedback.",
      },
    ],
  };

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 0);

    const fetchRelease = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/abhishek-2006/Tictactoe/releases/latest"
        );
        const data = await res.json();
        if (data && data.tag_name) {
          setVersion(data.tag_name);
          const apkAsset = data.assets?.find((a) => a.name.endsWith(".apk"));
          if (apkAsset) {
            setApkUrl(apkAsset.browser_download_url);
            setSize((apkAsset.size / (1024 * 1024)).toFixed(1) + " MB");
            setDownloads(apkAsset.download_count || 0);
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchRelease();
    return () => clearTimeout(mountTimer);
  }, []);

  // Favicon Swap Logic
  useEffect(() => {
    if (typeof window === "undefined") return;
    const favicon = document.querySelector("link[rel*='icon']");
    const originalHref = favicon?.href;
    if (favicon) favicon.href = game.logo;
    return () => {
      if (favicon && originalHref) favicon.href = originalHref;
    };
  }, [game.logo]);

  const handleDownload = () => {
    if (!apkUrl) return;
    setIsDownloading(true);
    const a = document.createElement("a");
    a.href = apkUrl;
    a.download = "TicTacToe_Abhishek.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setIsDownloading(false), 5000);
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden selection:bg-cyan-500/30 font-sans">
      {/* Scrollbar Removal Styles   */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        
        {/* NAVIGATION */}
        <header className="flex justify-between items-center mb-16 md:mb-24">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-xl"
          >
            <ChevronLeft size={18} className="text-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Portfolio</span>
          </motion.button>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-black">Lead Developer</p>
              <p className="text-xs font-bold text-slate-200">{game.developer}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
               <Image src="/favicon.ico" alt="AS" width={32} height={32} className="w-full h-full grayscale opacity-60" />
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-40">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-tr from-cyan-500/30 to-indigo-500/30 rounded-[4.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-slate-900 p-2.5 rounded-[4rem] border border-white/10 shadow-2xl">
                <Image src={game.logo} alt="Game Logo" width={320} height={320} className="w-64 h-64 md:w-80 md:h-80 rounded-[3.5rem] object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-widest uppercase">
                <Star size={12} className="fill-current" /> High Fidelity
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase text-white">
                {game.title}
                <span className="block text-3xl md:text-5xl not-italic font-medium text-slate-500 mt-2">{game.tagline}</span>
              </h1>
            </div>

            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Experience the classic game redefined for Android. Built with <span className="text-cyan-400 font-bold">Flutter</span> for ultimate performance.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: <Smartphone size={14} />, label: "Device", value: "Android 11+" },
                { icon: <Activity size={14} />, label: "Size", value: size },
                { icon: <ShieldCheck size={14} />, label: "Version", value: version },
                { icon: <Download size={14} />, label: "Downloads", value: downloads },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl shadow-xl backdrop-blur-md">
                  <div className="text-cyan-400">{stat.icon}</div>
                  <div className="text-left">
                    <p className="text-[8px] uppercase tracking-widest text-slate-500 font-black leading-none mb-1">{stat.label}</p>
                    <p className="text-[11px] font-bold text-slate-200">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DOWNLOAD CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-32 p-10 md:p-20 rounded-[4rem] bg-linear-to-br from-slate-900 to-black border border-white/5 shadow-2xl relative overflow-hidden group text-center md:text-left"
        >
          <div className="absolute top-0 right-0 p-16 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-1000 pointer-events-none">
            <Download size={250} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-none">Download the APK</h2>
              <p className="text-slate-400 text-lg font-medium max-w-md">Retrieve the latest compiled apk directly from the official source.</p>
              <div className="flex items-center justify-center md:justify-start gap-5 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-500"/> Secure</span>
                <span className="flex items-center gap-1.5"><Zap size={14} className="text-amber-500"/> Ads Free</span>
              </div>
            </div>

            <motion.button
              onClick={handleDownload}
              disabled={!apkUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-14 py-8 rounded-[2rem] font-black text-xs tracking-[0.3em] flex items-center gap-4 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                isDownloading
                  ? "bg-green-600 text-white"
                  : "bg-white text-black hover:bg-cyan-400 transition-colors"
              }`}
            >
              <AnimatePresence mode="wait">
                {!isDownloading ? (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                    <Download size={20} /> DOWNLOAD APK
                  </motion.div>
                ) : (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    STARTING...
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* GALLERY SECTION */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2">Visual Showcase</h2>
              <h3 className="text-4xl font-black text-white tracking-tight italic uppercase">Interface Gallery</h3>
            </div>
            <div className="hidden md:flex gap-2 text-slate-600 text-[10px] font-bold items-center uppercase tracking-widest">
              Scroll to explore <ChevronRight size={14} />
            </div>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
            {game.screenshots.map((img) => (
              <motion.div 
                key={img.id}
                whileHover={{ y: -10 }}
                className="snap-center shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-black tracking-widest uppercase italic">{img.title}</span>
                      <Maximize2 size={16} className="text-cyan-400" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {game.features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-cyan-500/40 transition-all group backdrop-blur-sm shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight text-white">{f.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SECURITY NOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row gap-8 items-center text-center md:text-left backdrop-blur-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
            <div className="p-3 bg-cyan-400/10 rounded-full">
              <Info className="text-cyan-400" size={28} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">Security Note</p>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Standard Android security may flag independent apk. This build is clean and verified by the developer. Tap <span className="text-white font-bold">&quot;Install Anyway&quot;</span> to begin playing.
            </p>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="mt-40 pt-16 border-t border-white/5 text-center flex flex-col items-center gap-10">
          <div className="flex gap-10 items-center transition-all duration-700">
             <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="w-8 h-8 relative z-10 opacity-80 hover:opacity-100 transition-opacity" />
             </div>
             <div className="w-[1px] h-6 bg-slate-800"></div>
             <a href="https://github.com/abhishek-2006" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github size={24} className="text-white" />
             </a>
          </div>
          
          <div className="space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
              © 2026 ABHISHEK SHAH • NEXT-GEN MOBILE SYSTEMS
            </p>
            <div className="flex justify-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <a href="https://github.com/abhishek-2006/Tictactoe" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">Repository <ExternalLink size={10}/></a>
              <span className="text-slate-900">|</span>
              <a href="/contact" className="hover:text-cyan-400 transition-colors">Inquiries</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}