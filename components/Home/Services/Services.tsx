"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiLayout, 
  FiCode, 
  FiSmartphone, 
  FiZap, 
  FiCpu 
} from "react-icons/fi";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Building high-performance, scalable web applications using React and Next.js with a focus on clean code.",
    icon: <FiCode />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Crafting visually stunning and intuitive user interfaces that provide seamless digital experiences.",
    icon: <FiLayout />,
  },
  {
    id: 3,
    title: "Mobile Application Development",
    desc: "Developing cross-platform mobile applications with a focus on performance and user experience.",
    icon: <FiSmartphone />,
  },
  {
    id: 4,
    title: "Web Development",
    desc: "Creating responsive and dynamic websites that deliver exceptional user experiences across all devices.",
    icon: <FiZap />,
  },
  {
    id: 5, 
    title: "API Integration",
    desc: "Seamlessly connecting frontend architectures with complex backends and third-party services.",
    icon: <FiCpu />,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-[90%] md:w-[85%] mx-auto relative z-10">
        
        {/* SECTION HEADING - Slides Down from Top */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h4 
            className="text-pink-500 font-mono tracking-[0.3em] text-xs uppercase mb-4"
          >
            // My Expertise
          </motion.h4>
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            SPECIALIZED <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-500">SERVICES</span>
          </motion.h2>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id + index}
              // ✅ Slides Up from Bottom
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ 
                delay: index * 0.1, // Staggered entry
                duration: 0.6, 
                ease: "easeOut" 
              }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-pink-500/30 backdrop-blur-sm shadow-2xl"
            >
              {/* HOVER GLOW EFFECT */}
              <div className="absolute -inset-px bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* ICON BOX */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-pink-500 text-2xl mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                  {service.icon}
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm group-hover:text-gray-400 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* DECORATIVE CORNER LIGHT */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;