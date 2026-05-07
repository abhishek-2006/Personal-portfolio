"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function SignatureBar() {
  return (
    <div className="w-full flex justify-center py-10 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-xs hover:shadow-md hover:bg-white/8 transition-all duration-500"
      >
        {/* Branding: Project Favicon */}
        <div className="relative w-4 h-4 flex items-center justify-center">
          <Image
            src="/favicon.ico" 
            alt="Abhishek Shah Portfolio Logo" 
            width={16}
            height={16}
            className="w-full h-full grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
          />
        </div>

        {/* Decorative Divider */}
        <div className="w-px h-3 bg-white/10" />

        {/* Text Content */}
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
          <span className="text-cyan-600 group-hover:text-cyan-400 transition-colors">
            Abhishek
          </span>
        </p>

        {/* Adaptive Hover Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </div>
  );
}