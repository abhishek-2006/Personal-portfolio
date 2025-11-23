"use client";
import { motion } from "framer-motion";
import React from "react";
import { ReactTyped } from "react-typed";

export default function MiniAbout() {
  return (
    <section className="w-full py-24 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 
        bg-gradient-to-r from-cyan-400 to-indigo-400 
        text-transparent bg-clip-text drop-shadow-lg"
      >
        Who Am I?
      </motion.h2>

      {/* Typed Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg md:text-xl leading-relaxed text-gray-300 font-light px-2"
      >
      <ReactTyped
        strings={[
          "A developer who genuinely enjoys building stuff — apps, websites, systems, whatever. If it can be coded, I’m in. I love turning ideas into clean, smooth and practical digital experiences."
        ]}
        typeSpeed={40}
        backSpeed={20}
        showCursor={true}
        cursorChar="|"
        className="font-space-grotesk tracking-wide"
      />
      </motion.p>
    </motion.div>
  </section>

  );
}
