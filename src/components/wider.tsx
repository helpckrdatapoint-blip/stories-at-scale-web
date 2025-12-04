"use client";

import React from "react";
import { motion } from "framer-motion";

const dhashaMediaWords = [
  "Digital Strategy",
  "Viral Reels Production",
  "Content Marketing",
  "SEO Optimization",
  "Paid Ads Management",
  "Brand Storytelling",
  "Performance Focused",
];

const SocialProof = () => {
  return (
    <section className="relative w-full py-6 bg-yellow-500 overflow-hidden border-y border-yellow-600 z-20">
      
      {/* Optional: Subtle Grain Texture for the Dhasha Standard look */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

      <div className="flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30, // Adjusts speed
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex min-w-full items-center gap-12 whitespace-nowrap pr-12"
        >
          {/* 
             We render the list twice to create a seamless infinite loop.
             Every item gets a separator to ensure spacing between the last item 
             of set 1 and the first item of set 2.
          */}
          {[...dhashaMediaWords, ...dhashaMediaWords].map((word, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
                {word}
              </span>
              
              {/* Vertical Pipe Separator */}
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-black/40 pb-1">
                |
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
