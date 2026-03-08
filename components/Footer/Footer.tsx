"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // ✅ CHANGED: Reduced padding (pt-10 pb-6) for less height
    <footer className="relative pt-10 pb-6 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      
      {/* GLOWING TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-[90%] md:w-[85%] mx-auto relative z-10">
        
        {/* ✅ CHANGED: Reduced margin bottom (mb-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-3">
            <h2 className="text-3xl font-black tracking-tighter text-white">
              URMISH<span className="text-pink-500">.</span>
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Crafting digital experiences with a touch of logic and a splash of design.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-pink-500 pl-3">Quick Links</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {["Home", "About", "Services", "Works", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-pink-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-pink-500 pl-3">Contact</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <FiMail className="text-pink-500 text-base" />
                <span>urmishzaman@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 shadow-[0_0_8px_#22c55e]"></div>
                <span>Available for freelance</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SOCIALS & BACK TO TOP */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-pink-500 pl-3">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { icon: <FiGithub />, url: "https://github.com/Urmish046" },
                  { icon: <FiLinkedin />, url: "https://linkedin.com/in/urmish-zaman/" },
                  // ✅ REMOVED: Instagram Icon
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#ec4899", borderColor: "#ec4899" }}
                    className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-lg transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* SCROLL TO TOP BUTTON */}
            <button 
              onClick={scrollToTop}
              className="mt-6 lg:mt-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-pink-500 transition-colors self-start lg:self-end group"
            >
              Back to Top
              <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <FiArrowUp />
              </div>
            </button>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-[10px]">
            © {currentYear} Urmish Zaman. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] flex items-center gap-1">
            Made with <span className="text-pink-500 animate-pulse">❤</span> in Next.js
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;