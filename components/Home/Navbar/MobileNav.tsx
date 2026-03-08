"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Background Overlay - Glassmorphism effect with Pink Tint */}
      <div 
        className={`fixed ${navOpen} ${showNav ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} inset-0 transform transition-all duration-500 z-[10002] bg-black/80 backdrop-blur-md w-full h-screen`}
        onClick={closeNav}
      >
        {/* Subtle Pink Glow in Overlay */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Sidebar Content */}
      <div 
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-150 w-[80%] sm:w-[60%] bg-[#050505] border-r border-pink-500/20 z-[10005] shadow-[10px_0_30px_rgba(236,72,153,0.05)]`}
      >
        <div className="flex flex-col space-y-10 ml-10">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url || ""}>
              <p 
                onClick={closeNav}
                className="text-[25px] sm:text-[30px] font-black uppercase tracking-[0.25em] hover:text-pink-500 transition-all duration-300 inline-block relative group"
              >
                {/* Text Reveal Animation Vibe */}
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </Link>
          ))}
        </div>

        {/* Close Button with Pink Theme */}
        <div className="absolute top-[2rem] right-[2rem] p-2 rounded-full bg-white/5 border border-white/10 group">
            <CgClose 
            onClick={closeNav} 
            className="w-8 h-8 text-pink-500 cursor-pointer group-hover:rotate-90 transition-all duration-500" 
            />
        </div>

        {/* Bottom Tagline */}
        <div className="absolute bottom-10 ml-10">
            <p className="text-pink-500/30 font-mono text-xs tracking-widest uppercase italic">
                // Urmish v2.0
            </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;