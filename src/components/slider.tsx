"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { Star, StarIcon, Stars } from "lucide-react";



const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const SocialProof = ({ info }: { info: string[] }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const baseSpeed = useRef(0.5); 

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseSpeed.current * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const handleMouseEnter = () => {
    baseSpeed.current = 0.2; 
  };

  const handleMouseLeave = () => {
    baseSpeed.current = 0.5; 
  };

  return (
    <section 
        className="relative w-full py-6 bg-[#FACC15] overflow-hidden border-y border-black z-20"
    >
      <div className="flex overflow-hidden select-none">
        <motion.div
          className="flex flex-nowrap whitespace-nowrap"
          style={{ x }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mr-10">
              {info.map((word, index) => {
                const isOutline = index % 2 !== 0;
                return (
                  <div key={index} className="flex items-center gap-10">
                    <span
                      className={`
                        text-5xl md:text-7xl font-extrabold uppercase tracking-tight
                        transition-all duration-300 ease-out
                        ${isOutline ? "text-transparent hover:text-black hover:opacity-100 opacity-80" : "text-black"}
                      `}
                      style={{
                        WebkitTextStroke: isOutline ? "1.5px black" : "unset",
                      }}
                    >
                      {word}
                    </span>
                    <span className="text-black/80 text-3xl text-center md:text-5xl pb-2">
                        <Stars fill="black" size={65} />
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;