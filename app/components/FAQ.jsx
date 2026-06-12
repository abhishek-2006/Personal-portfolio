"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Who is Abhishek Shah?",
      answer: "Abhishek Shah is a professional Full-Stack Developer and Software Engineer based in Bardoli, Gujarat, India. He builds high-performance web applications using the MERN Stack and Next.js, and designs cross-platform mobile applications using Flutter and Dart.",
    },
    {
      question: "What core technologies does Abhishek specialize in?",
      answer: "Abhishek's primary expertise includes React, Next.js, Node.js, Express, MongoDB, MySQL, Flutter, Dart, Tailwind CSS, TypeScript, and Git. He works across the full development lifecycle, from system design to database administration and Vercel/Firebase deployments.",
    },
    {
      question: "What development services does Abhishek Shah provide?",
      answer: "He provides full-stack web application development, responsive and fast landing pages, cross-platform Android/iOS mobile application development, RESTful API design, database modeling & query speed-ups, and modern SEO & Generative Engine optimization (GEO).",
    },
    {
      question: "Is Abhishek Shah available for freelance work and collaborations?",
      answer: "Yes, Abhishek is actively open to freelance opportunities, consulting work, and collaborative software projects. You can request a quote or pitch a collaboration directly through the Contact page.",
    },
    {
      question: "Where can I see games built by Abhishek Shah?",
      answer: "Abhishek has developed interactive web-based editions of classic games, including Tic Tac Toe and Chess. You can play them directly in the browser by visiting the Games section on this website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wider text-cyan-400 mb-4">
            <MessageSquare size={12} />
            Quick Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Find immediate answers about my background, services, skills, and availability.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden transition-colors duration-300 hover:bg-white/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-white font-bold text-base md:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 text-slate-400"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-15 text-slate-300 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4 bg-slate-950/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
