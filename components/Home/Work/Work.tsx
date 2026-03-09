"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowRight, FiArrowLeft } from "react-icons/fi";

// --- PROJECT DATA (Cloudinary Links Updated) ---
const mainProjects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Portfolio",
    description: "A portfolio made by Next.js and typescript.",
    // Cloudinary optimized link
    video: "https://res.cloudinary.com/dx71stucg/video/upload/q_auto,f_auto/v1773055311/portfolio_ezeryx.mp4",
    tech: ["Next.js", "Typescript"],
    links: { live: "#" } 
  }, 
  {
    id: 2,
    title: "Fitness Tracker",
    category: "Health & Wellness",
    description: "Workout exercises and diet tracking dashboard.",
    // Cloudinary optimized link
    video: "https://res.cloudinary.com/dx71stucg/video/upload/q_auto,f_auto/v1773055133/Fitness_avg5zw.mp4",
    tech: ["React", "RapidAPI"],
    links: { live: "https://fitness-app-frontend9.netlify.app/" }
  },
  {
    id: 3,
    title: "EduPortal",
    category: "Management",
    description: "Auto grading & course registration.",
    // Cloudinary optimized link
    video: "https://res.cloudinary.com/dx71stucg/video/upload/q_auto,f_auto/v1773055256/LMSL_s90kpg.mp4",
    tech: ["React", "JavaScript"],
    links: { live: "https://lmslite.netlify.app/" }
  },
];

const extraProjects = [
  {
    id: 4,
    title: "LMS Lite",
    category: "EdTech",
    description: "Career tracks & interactive modules.",
    // Cloudinary optimized link
    video: "https://res.cloudinary.com/dx71stucg/video/upload/q_auto,f_auto/v1773054837/edup_tcag0g.mp4",
    tech: ["React", "TailwindCSS"],
    links: { live: "https://educationportal-ep.netlify.app/" }
  },
  {
    id: 5,
    title: "Food Delivery",
    category: "E-Commerce",
    description: "Seamless food ordering platform with cart system.",
    // Note: Iska link aapne nahi bheja tha, agar ye bhi Cloudinary par hai to update kar dein
    video: "/videos/Food.mp4", 
    tech: ["React"],
    links: { live: "https://food-delivery-88.netlify.app/" }
  }
];

// --- HELPER FOR 2X SPEED ---
const PlaybackVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, [src]); // Dependency added to handle source changes

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out"
    />
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? [...mainProjects, ...extraProjects] : mainProjects;

  const handleToggle = () => {
    setShowAll(!showAll);
    const section = document.getElementById("works");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="works" className="py-20 text-white relative overflow-hidden min-h-screen flex flex-col justify-center">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* CONTAINER */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          layout
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-3">
            {showAll ? "All" : "Latest"} <span className="text-pink-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            {showAll ? "A complete collection of my technical work." : "A selection of my recent work."}
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="group relative h-[200px] rounded-[1.25rem] overflow-hidden cursor-pointer shadow-lg border border-white/5 bg-[#121212]"
              >

                {/* VIDEO LAYER */}
                <div className="absolute inset-0 z-0">
                  <PlaybackVideo src={project.video} />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">

                  {/* Category Tag */}
                  <div className="mb-auto transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-500 text-[9px] font-bold uppercase tracking-widest border border-pink-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-pink-500 transition-colors drop-shadow-md">
                      {project.title}
                    </h3>

                    {/* Expandable Details */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                      <div className="overflow-hidden">
                        <p className="text-gray-300 text-[10px] leading-relaxed mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-1">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-[9px] font-mono text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Links (Only Live) */}
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] font-bold text-white hover:text-pink-500 transition-colors">
                            <FiExternalLink size={12} /> Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM BUTTON */}
        <div className="mt-12 flex justify-center">
          <motion.button
            layout
            onClick={handleToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-pink-600 text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:bg-pink-500 transition-all"
          >
            {showAll ? (
              <>
                <FiArrowLeft /> Back to Highlights
              </>
            ) : (
              <>
                View All Projects <FiArrowRight />
              </>
            )}
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Works;