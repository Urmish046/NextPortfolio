"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import Background from "../../Background"; 

const Hero = () => {
  const mouseX = useSpring(useMotionValue(0), { damping: 25, stiffness: 150 });
  const mouseY = useSpring(useMotionValue(0), { damping: 25, stiffness: 150 });

  const tiltX = useTransform(mouseY, [-500, 500], [12, -12]);
  const tiltY = useTransform(mouseX, [-500, 500], [-12, 12]);

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative w-full min-h-screen flex items-center overflow-hidden group/hero font-sans"
    >
      {/* Interactive Background Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(350px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(236, 72, 153, 0.15), transparent 80%)`
          ),
        }}
      />

      <Background />

      {/* Static Glow Effects */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>

      <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.h4 
            className="text-pink-400 font-mono tracking-[0.4em] text-xs mb-4 uppercase"
          >
              A Certified Frontend Developer
          </motion.h4>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-7xl font-black text-white leading-tight tracking-tighter"
          >
            I&apos;M <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-500 font-black">URMISH</span>
          </motion.h1>

          <div className="mt-2 text-xl md:text-3xl font-bold text-gray-400 flex items-center justify-center lg:justify-start gap-2">
            <span>A</span>
            <span className="text-pink-500">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Web developer", "React.js Enthusiast", "Next.js Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>

          <p className="mt-6 text-gray-500 text-base md:text-lg max-w-[500px] mx-auto lg:mx-0 leading-relaxed font-medium">
            Building scalable digital experiences with <span className="text-white font-semibold">React & Next.js</span>. 
            Transforming complex logic into pixel-perfect user interfaces.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start items-center gap-8 text-gray-600">
            <motion.a 
              href="https://github.com/Urmish046" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ec4899", scale: 1.1 }} 
              className="cursor-pointer transition-all"
            >
              <FiGithub size={24} />
            </motion.a>

            <motion.a 
              href="https://linkedin.com/in/urmish-zaman/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#ec4899", scale: 1.1 }} 
              className="cursor-pointer transition-all"
            >
              <FiLinkedin size={24} />
            </motion.a>

            <motion.a 
              href="mailto:urmishzaman@gmail.com"
              whileHover={{ y: -5, color: "#e1306c", scale: 1.1 }} 
              className="cursor-pointer transition-all"
            >
              <HiMail size={26} />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center perspective-[1000px]"
        >
          <motion.div 
            style={{ rotateX: tiltX, rotateY: tiltY }}
            className="relative mb-12 transition-transform duration-200 ease-out"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] group/img"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-pink-400 rounded-full blur-[45px] opacity-0 group-hover/img:opacity-60 transition-all duration-700 scale-90 group-hover/img:scale-110"></div>
              
              <div className="relative w-full h-full bg-[#0a0a0a] rounded-full overflow-hidden border-2 border-white/10 p-2.5 group-hover/img:border-pink-500/80 transition-all duration-500 shadow-[0_0_30px_rgba(236,72,153,0.2)] group-hover/img:shadow-[0_0_60px_rgba(236,72,153,0.4)] z-10">
                {/* Image Path Updated */}
                <Image 
                  src="/image/image3.png" 
                  alt="Urmish"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-full brightness-[0.8] group-hover/img:grayscale-0 group-hover/img:brightness-110 group-hover/img:scale-105 transition-all duration-1000 ease-in-out"
                />
              </div>

              <motion.div 
                animate={{ rotate: [12, -12, 12] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-tighter shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                NEXT.JS
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RESUME BUTTON UPDATED */}
          <div className="w-full max-w-[280px] relative group/btn">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-20 group-hover/btn:opacity-100 transition duration-1000 animate-pulse"></div>
            
            {/* ✅ Path Updated: /resume/resume.pdf */}
            <a 
              href="/resume/resume.pdf" 
              download 
              className="relative group w-full flex items-center justify-between px-6 py-4 bg-[#080808] border border-white/10 rounded-2xl hover:border-pink-500/50 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col items-start z-10">
                <span className="text-[10px] uppercase tracking-widest text-pink-500 font-bold leading-none mb-1">Status: Ready</span>
                <span className="text-sm font-black text-white group-hover/btn:text-pink-400 transition-colors tracking-tight uppercase">Download CV</span>
              </div>
              
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="p-2 bg-white/5 rounded-lg group-hover/btn:bg-pink-500 group-hover/btn:text-white transition-all duration-300 z-10"
              >
                <HiDownload className="text-xl" />
              </motion.div>

              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000"></div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;