import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// NOTE: Using a single, publicly accessible demo video URL for all items.
const DEMO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4"; 

const videos = new Array(13).fill(DEMO_VIDEO_URL);

const ParallaxGallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  // Adjusted parallax speeds for a smoother flow
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // Only initialize Lenis if window is defined
    if (typeof window !== 'undefined') {
      const lenis = new Lenis();

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", resize);
      requestAnimationFrame(raf);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
        // Clean up lenis instance if needed, though usually handled globally
        lenis.destroy(); 
      };
    }
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] relative overflow-hidden">
      
      {/* --- BACKGROUND ASSETS (Dhasha Standard) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* --- START: PROFESSIONAL HEADER --- */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center pt-24 pb-12 z-10">
        
        {/* Animated content container */}
        <div className="flex flex-col items-center text-center max-w-5xl px-6">
          
          {/* 1. Small 'Eyebrow' Label with Vertical Line */}
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             className="mb-8 flex flex-col items-center gap-4"
          >
            {/* Vertical Line for structure */}
            <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent"></div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Agency Portfolio
            </span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Viral <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Work</span>
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
             initial={{ opacity: 0, width: 0 }}
             whileInView={{ opacity: 1, width: "100px" }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.4 }}
             className="my-8 h-1 rounded-full bg-white/10"
          />

          {/* 3. Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-lg font-light leading-relaxed text-gray-400 sm:text-xl"
          >
            A curated selection of high-impact short-form content. 
            <br className="hidden sm:block"/>
            Precision editing meets algorithmic performance.
          </motion.p>

        </div>
      </section>
      {/* --- END: PROFESSIONAL HEADER --- */}

      {/* --- GALLERY GRID --- */}
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw] z-10"
      >
        <Column videos={videos.slice(0, 3)} y={y} />
        <Column videos={videos.slice(3, 6)} y={y2} />
        <Column videos={videos.slice(6, 9)} y={y3} />
        <Column videos={videos.slice(9, 12)} y={y4} />
      </div>

      {/* --- CTA SECTION --- */}
      <div className="flex h-[40vh] items-center justify-center py-8 relative z-10">
        <div className="grid content-start justify-items-center gap-6 text-center">
          <p className="max-w-2xl text-2xl font-medium tracking-tight text-white">
            Ready to elevate your brand presence?
          </p>
          
          <button className="group relative overflow-hidden rounded-full bg-yellow-500 px-10 py-4 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-400">
            <span className="relative z-10 flex items-center gap-2">
              Book a Consultation <ArrowUpRight className="h-5 w-5" />
            </span>
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-white/40 skew-x-12 transition-transform duration-700 group-hover:translate-x-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Column = ({ videos, y }) => { 
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[200px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {videos.map((src, i) => ( 
        <div key={i} className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
          <video
            src={src}
            autoPlay 
            loop     
            muted    
            playsInline 
            className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
            poster="https://via.placeholder.com/300x500/000000/FFFFFF?text=Loading+Video" 
          />
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;
