"use client";

import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";
import StyledLink from "../components/StyledLink";
import { Zap, Clock, GraduationCap } from 'lucide-react';
import { Poppins } from "next/font/google";
import Link from "next/link";

const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Card = ({ children, delay }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/40 to-blue-500/20 
                 shadow-2xl hover:shadow-cyan-500/30 transition-shadow duration-500"
    >
      <div className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-8 
                      border border-indigo-700/20 hover:border-cyan-500/50 
                      transition-colors duration-500">
        {children}
      </div>
    </motion.div>
  );
};

export default function About({ setPage }) {
  const education = [
    {
      title: "B. Tech in Computer Engineering",
      inst: "Uka Tarsadia University",
      year: "2025-2028",
      detail: "Anticipated Graduation",
    },
    {
      title: "Diploma in Computer Engineering",
      inst: "Gujarat Technological University",
      year: "2022 – 2025",
      detail: "CGPA: 8.40",
    },
    {
      title: "Secondary (10th)",
      inst: "Gujarat Board — Bardoli",
      year: "Completed in 2022",
      detail: "Percentile: 75.23 PR",
    },
  ];

  return (
    <div className={`${pop.className} min-h-screen w-full text-gray-100 pt-10 pb-20 px-6`}>
      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-extrabold text-center 
                     bg-gradient-to-r from-cyan-400 to-indigo-400 
                     text-transparent bg-clip-text mb-16 pt-10"
        >
          My Story
        </motion.h1>

        {/* BIO SECTION (NO BOX) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10 md:gap-16 mt-10"
        >
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
        </motion.div>

        {/* Right Side Text */}
        <div className="flex flex-col max-w-2xl text-center md:text-left">

        {/* Header */}
        <div className="flex items-center justify-center md:justify-start mb-4 text-cyan-400">
          <Zap className="w-6 h-6 mr-2" />
          <h2 className="text-3xl font-bold tracking-wide">Bio</h2>
        </div>

        {/* Typed Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 leading-relaxed font-[Poppins] min-h-[140px]"
        >
        <ReactTyped
          strings={[
            "I'm Abhishek, a Computer Engineering student who loves building clean UI, smooth apps, and fast backends.",
            "I enjoy working with Flutter, Next.js, Android XML, PHP, and Node.js.",
            "I'm deeply passionate about designing modern systems and pixel-perfect UIs."
          ]}
          typeSpeed={35}
          backSpeed={20}
          loop
          cursorChar="|"
          className="text-gray-200"
        />
        </motion.div>
      </div>
    </motion.div>


        {/* SEPARATOR */}
        <div className="my-20 h-px w-1/2 mx-auto bg-indigo-500/30"></div>


        {/* EDUCATION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mt-16 mb-12 text-indigo-400 
          text-center flex items-center justify-center"
        >
          <GraduationCap className="w-8 h-8 mr-3" />
          Academic Timeline
        </motion.h2>

        {/* EDUCATION CARDS */}
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, i) => (
            <Card key={i} delay={0.1 * i}>
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">{edu.title}</h3>
                  <p className="text-gray-400 mt-1 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {edu.inst}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-cyan-300 font-mono text-sm block">{edu.year}</span>
                  <span className="text-gray-500 text-sm block">{edu.detail}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="projects">
            <StyledLink> See My Projects </StyledLink>
          </Link>
        </div>
      </div>
    </div>
  );
}
