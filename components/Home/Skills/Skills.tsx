"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiDatabase, FiLayout, FiTerminal } from "react-icons/fi";

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FiLayout,
    skills: [
      { name: "React.js", level: "Advanced" },
      {name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Basic" },
      { name: "HTML5 / CSS3", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
    ]
  },
  {
    id: 2,
    title: "Backend & Core",
    icon: FiDatabase,
    skills: [
      { name: "Java", level: "Intermediate" },
      { name: "OOP", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Data Structures", level: "Basic" },
      { name: "SQL", level: "Advanced" },
    ]
  },
  {
    id: 3,
    title: "Tools & Soft Skills",
    icon: FiTerminal,
    skills: [
      { name: "Ubuntu / Linux", level: "Intermediate" },
      { name: "Problem Solving", level: "Intermediate" },
      { name: "Communication", level: "Advanced" },
      { name: "Teamwork", level: "Advanced" },
      { name: "Canva / Design", level: "Advanced" },
      {name: "Git & GitHub", level: "Intermediate"},
      {name: "Figma", level: "Intermediate"}
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24  text-white relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* CONTAINER */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER - Slides down from top */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // Plays every time
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-3">
            My <span className="text-pink-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Technical expertise and professional capabilities.
          </p>
        </motion.div>

        {/* SKILL CATEGORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              // ANIMATION: Slide from Left to Right
              initial={{ opacity: 0, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }} // Plays every time
              transition={{ 
                delay: index * 0.2, // Staggered effect (1st card, then 2nd, then 3rd)
                duration: 0.6, 
                ease: "easeOut" 
              }}
              className="p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-base font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        skill.level === "Advanced" 
                          ? "bg-pink-500/10 text-pink-500 border border-pink-500/20" 
                          : skill.level === "Intermediate"
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    {/* Progress Bar Animation */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ 
                          width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "70%" : "40%" 
                        }}
                        viewport={{ once: false }} // Re-animates bar every time
                        transition={{ duration: 1, delay: 0.4 + (i * 0.1) }}
                        className={`h-full rounded-full ${
                          skill.level === "Advanced" ? "bg-gradient-to-r from-pink-500 to-pink-400" : "bg-gradient-to-r from-purple-500 to-purple-400"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;