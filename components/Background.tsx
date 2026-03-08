"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-50 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        // ✅ ADD THIS: This sets the background color to dark
        background: {
          color: {
            value: "#050505", 
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "parallax", 
            },
          },
          modes: {
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
        },
        particles: {
          color: { value: "#f7e450" }, // Changed to Pink to match your theme, or use "#22d3ee" for Cyan
          links: {
            color: "#ffffff", // White links look better on dark
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Background;