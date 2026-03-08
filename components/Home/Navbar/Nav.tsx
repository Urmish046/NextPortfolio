"use client";

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiTerminal } from "react-icons/fi"; 
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); 

  useEffect(() => {
    const handler = () => {
      const currentScroll = window.scrollY;

      // 1. Background Logic
      if (currentScroll >= 90) setNavBg(true);
      else setNavBg(false);

      // ✅ 2. SPECIAL CHECK: Agar page bilkul top par hai (Footer Back-to-Top ke liye)
      if (currentScroll <= 50) {
        setActiveLink("home");
        return; // Loop chalane ki zaroorat nahi, yahin ruk jao
      }

      // 3. Normal Scroll Spy Logic (Baki sections ke liye)
      if (NavLinks.length > 0) {
          const sections = NavLinks.map((link) => link.url?.replace("#", "") || "");
          const scrollPosition = currentScroll + window.innerHeight / 2; 

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;

              if (
                scrollPosition >= top && 
                scrollPosition < top + height
              ) {
                setActiveLink(section);
              }
            }
          }
      }
    };

    window.addEventListener("scroll", handler);
    handler(); 
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, url: string) => {
    e.preventDefault();
    const targetId = url.replace("#", "");

    if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveLink("home");
        return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: "smooth",
      });
      setActiveLink(targetId); 
    }
  };

  return (
    <nav 
      className={`fixed w-full transition-all duration-300 z-[30000] top-0 left-0 overflow-hidden ${
        navBg 
        ? "bg-[#050505] shadow-lg py-2" 
        : "bg-transparent py-4"
      }`}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <motion.div
          className="absolute top-0 h-full w-[150px] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[30deg]"
          initial={{ left: "-100%" }}
          animate={{ left: "200%" }} 
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
        />
      </div>

      <div className="flex items-center justify-between w-[92%] md:w-[85%] mx-auto relative z-10">
        
        {/* LOGO */}
        <div 
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center space-x-3 cursor-pointer group"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0], boxShadow: ["0 0 0px rgba(236, 72, 153, 0)", "0 0 15px rgba(236, 72, 153, 0.6)", "0 0 0px rgba(236, 72, 153, 0)"], borderColor: ["rgba(236, 72, 153, 0.3)", "rgba(236, 72, 153, 0.8)", "rgba(236, 72, 153, 0.3)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-10 h-10 flex items-center justify-center border border-pink-500/30 rounded-lg bg-pink-500/5 backdrop-blur-sm"
          >
            <motion.div className="text-pink-500" animate={{ filter: ["drop-shadow(0 0 0px rgba(236, 72, 153, 0))", "drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))", "drop-shadow(0 0 0px rgba(236, 72, 153, 0))"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <FiTerminal className="w-6 h-6" />
            </motion.div>
          </motion.div>
          <div className="relative overflow-hidden py-1 px-1 flex flex-col justify-center">
            <div className="flex items-baseline">
                <motion.span className="text-2xl md:text-3xl font-black block tracking-widest" animate={{ color: ["#ffffff", "#ec4899", "#ffffff"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>URMISH</motion.span>
                <motion.span className="text-3xl font-black text-pink-500 ml-1" animate={{ opacity: [1, 0.5, 1], textShadow: ["0 0 0px rgba(236,72,153,0)", "0 0 10px rgba(236,72,153,1)", "0 0 0px rgba(236,72,153,0)"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>.</motion.span>
            </div>
            <motion.div className="h-[3px] bg-pink-500 rounded-full" initial={{ width: "0%" }} animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </div>

        {/* MENU */}
        <div className="hidden lg:flex items-center space-x-10 ml-auto mr-8">
          {NavLinks?.map((link) => {
              const isActive = activeLink === link.url?.replace("#", "");
              return (
                <Link 
                  key={link.id} 
                  href={link.url || "#"} 
                  onClick={(e) => handleScrollTo(e, link.url || "")} 
                  className={`relative text-[13px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 group ${
                      isActive ? "text-pink-500" : "text-gray-300 hover:text-pink-500"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-pink-500 transition-all duration-300 shadow-[0_0_8px_#ec4899] ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
          })}
        </div>

        {/* MOBILE ICON */}
        <div className="flex items-center space-x-4">
          <div onClick={openNav} className="lg:hidden p-2 text-white cursor-pointer hover:text-pink-500 transition-colors">
            <HiBars3BottomRight className="w-8 h-8" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;