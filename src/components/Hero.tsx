"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircularGallery from "@/components/ui/CircularGallery";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050505] flex flex-col pt-32 overflow-hidden selection:bg-yellow-500 selection:text-black font-sans">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-gray-300 transition-all hover:bg-white/10 hover:border-yellow-500/50 hover:text-yellow-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span>Instagram Reels • Dhasha Media</span>
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-yellow-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </button>
        </motion.div>

        <div className="relative mb-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]"
          >
            VIRAL REELS.
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 leading-[0.9]"
          >
            REAL RESULTS.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center gap-4 mb-10 max-w-2xl mx-auto"
        >
          <div className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed flex flex-wrap justify-center gap-x-2">
            <span>Dhasha Media crafts reels that</span>
            <WordRotator words={["scale", "elevate", "amplify", "transform", "boost"]} />
            <span>your reach.</span>
          </div>
          <p className="text-sm md:text-base text-gray-500 font-mono mt-2">
            Expert production strategy to dominate the algorithm.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4"
        >
          <Button 
            onClick={() => navigate("/services")}
            className="group relative h-14 w-full sm:w-auto min-w-[200px] overflow-hidden rounded-none bg-yellow-500 px-8 text-black font-bold text-lg hover:bg-yellow-400 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Services <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/40 skew-x-12" />
          </Button>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="group h-14 w-full sm:w-auto min-w-[200px] rounded-none border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-yellow-500 hover:text-yellow-500 backdrop-blur-sm transition-all"
          >
            <span className="flex items-center justify-center gap-2">
              Get in Touch <Instagram className="w-4 h-4" />
            </span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
        className="relative w-full h-[500px] md:h-[600px] mt-12 md:mt-0"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505] via-transparent to-transparent pointer-events-none" />
        
        <CircularGallery 
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.05}
          scrollSpeed={2}
        />
      </motion.div>
    </section>
  );
};

const WordRotator = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative h-[1.5em] w-[4rem] sm:w-[5rem] md:w-[7rem] inline-flex justify-center overflow-hidden align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="absolute font-semibold text-yellow-500 italic"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Hero;