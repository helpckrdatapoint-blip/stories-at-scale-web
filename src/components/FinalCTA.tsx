"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const FinalCTA = () => {
  const words = [
    {
      text: "Ready",
      className: "text-white font-light",
    },
    {
      text: "to",
      className: "text-white font-light",
    },
    {
      text: "dominate",
      className: "text-white font-medium",
    },
    {
      text: "your",
      className: "text-white font-light",
    },
    {
      text: "niche?",
      className: "text-yellow-500 font-bold",
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[60vh] py-24 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      
      {/* --- Background: Ghost Typography --- */}
      {/* This creates a huge, subtle texture behind the content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[20vw] font-black text-transparent leading-none tracking-tighter opacity-[0.03]"
              style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.5)" }}>
          SCALE
        </span>
      </div>

      {/* --- Background: Lighting Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Bottom Horizon Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-yellow-500/10 blur-[150px] rounded-full" />
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* 1. Minimalist Line Decoration */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-transparent via-yellow-500 to-transparent mb-8"
          />

          {/* 2. Main Headline (Typewriter) */}
          <div className="mb-8">
            <TypewriterEffectSmooth words={words} cursorClassName="bg-yellow-500 h-8 sm:h-10 md:h-12" />
          </div>

          {/* 3. Subtext (High Contrast) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl leading-relaxed font-light"
          >
            Stop competing. Start leading. <br className="hidden sm:block"/>
            We engineer the content that builds empires.
          </motion.p>

          {/* 4. Action Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Primary Button - Solid Gold Block */}
            <Button 
              size="lg" 
              className="h-14 px-10 rounded-none bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg tracking-wide uppercase transition-transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(234,179,8,0.3)]"
              onClick={() => scrollToSection('contact')}
            >
              Start Project
            </Button>

            {/* Secondary Button - Minimalist Underline */}
            <Button 
              variant="ghost" 
              size="lg" 
              className="h-14 px-8 rounded-none text-white hover:bg-transparent hover:text-yellow-500 text-lg font-medium group"
              onClick={() => scrollToSection('pricing')}
            >
              <span className="relative">
                View Plans
                {/* Custom Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
