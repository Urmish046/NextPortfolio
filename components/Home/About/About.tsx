"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FiBookOpen, FiGlobe, FiBriefcase } from "react-icons/fi";

const About = () => {
  const education = [
    {
      year: "2026 — Present",
      degree: "BS in Computer Science",
      school: "COMSATS University Islamabad",
    },
    {
      year: "2020 — 2022",
      degree: "Intermediate (Pre-Medical)",
      school: "Fazaia Degree College MRF PAC",
    },
  ];

  const experience = [
    {
      period: "11/2025 — 12/2025",
      role: "React JS Intern",
      company: "YoungDev Intern",
      desc: "Developed responsive UIs and reusable components using React.js and Tailwind CSS.",
    },
    {
      period: "05/2024 — 12/2025",
      role: "Front-end Developer",
      company: "University Projects",
      desc: "Built multiple web applications, focusing on state management and UI responsiveness.",
    },
  ];

  const languages = [
    { name: "Urdu", level: "Native", percent: "100%" },
    { name: "English", level: "Fluent", percent: "90%" },
  ];

  // --- VARIANTS ---
  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    // ✅ STEP 1: Removed bg-[#050505] from section
    <section id="about" className="py-24 text-white relative overflow-hidden min-h-screen">

      {/* GLOW EFFECTS - Kept these for aesthetics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-[94%] md:w-[90%] mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            ABOUT <span className="text-pink-500 animate-pulse">.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed border-l-2 border-pink-500/30 pl-8 max-w-3xl">
            I am <span className="text-white font-bold">Urmish Zaman</span>, a Computer Science student and web developer passionate about building clean, responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">

          {/* EXPERIENCE BOX */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideLeft}
            // ✅ STEP 2: Used bg-white/[0.05] (Glass effect) instead of solid color
            className="p-6 md:p-8 rounded-[2rem] bg-white/[0.05] border border-white/5 backdrop-blur-md relative group overflow-hidden h-full"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-pink-500/10 rounded-2xl shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                  <FiBriefcase className="text-purple-500 text-xl" />
                </div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-500 font-bold">Experience</h3>
              </div>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_8px_#ec4899]"></div>
                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-1">{exp.period}</p>
                    <h4 className="text-white font-bold group-hover:text-pink-500 transition-colors text-sm leading-tight">{exp.role}</h4>
                    <p className="text-pink-500/60 text-[10px] font-black uppercase tracking-widest mt-1">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* EDUCATION BOX */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideUp}
            className="p-6 md:p-8 rounded-[2rem] bg-white/[0.05] border border-white/5 backdrop-blur-md relative group overflow-hidden h-full"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-pink-500/10 rounded-2xl shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                  <FiBookOpen className="text-purple-500 text-xl" />
                </div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-500 font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_8px_#ec4899]"></div>
                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-1">{edu.year}</p>
                    <h4 className="text-white font-bold group-hover:text-pink-500 transition-colors text-sm leading-tight">{edu.degree}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-tight">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LANGUAGES BOX */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideRight}
            className="p-6 md:p-8 rounded-[2rem] bg-white/[0.05] border border-white/5 backdrop-blur-md relative group overflow-hidden h-full"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-purple-500/10 rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <FiGlobe className="text-purple-500 text-xl" />
                </div>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-500 font-bold">Languages</h3>
              </div>
              <div className="space-y-10">
                {languages.map((lang, idx) => (
                  <div key={idx} className="group/lang">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-white font-bold tracking-tight">{lang.name}</span>
                      <span className="text-[10px] font-mono text-pink-500 font-black uppercase tracking-widest">{lang.level}</span>
                    </div>
                    <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.percent }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;