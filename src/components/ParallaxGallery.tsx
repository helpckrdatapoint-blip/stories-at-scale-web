import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

// NOTE: Using a single, publicly accessible demo video URL for all items.
const DEMO_VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4"; 

const videos = new Array(13).fill(DEMO_VIDEO_URL);

const ParallaxGallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis();

      const raf = (time: number) => {
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
      };
    }
  }, []);

  return (
    <div className="w-full bg-background">
      
      {/* --- START: PROFESSIONAL HEADER --- */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center pt-20 pb-12">
        
        {/* Animated content container */}
        <div className="flex flex-col items-center text-center z-10 max-w-5xl px-6">
          
          {/* 1. Small 'Eyebrow' Label */}
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             className="mb-8 flex flex-col items-center gap-4"
          >
            {/* Vertical Line for structure */}
            <div className="h-12 w-[1px] bg-border/60"></div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
              Agency Portfolio
            </span>
          </motion.div>

          {/* 2. Main Headline - Large, clean, tight tracking */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl font-bold tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Viral <span className="text-primary opacity-90">Work</span>
          </motion.h1>

          <motion.div
             initial={{ opacity: 0, width: 0 }}
             animate={{ opacity: 1, width: "100px" }}
             transition={{ duration: 1, delay: 0.4 }}
             className="my-8 h-1 rounded-full bg-primary"
          />

          {/* 3. Subtitle - Clean sans-serif, constrained width */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
          >
            A curated selection of high-impact short-form content. 
            <br className="hidden sm:block"/>
            Precision editing meets algorithmic performance.
          </motion.p>

        </div>
      </section>
      {/* --- END: PROFESSIONAL HEADER --- */}

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
      >
        <Column videos={videos.slice(0, 3)} y={y} />
        <Column videos={videos.slice(3, 6)} y={y2} />
        <Column videos={videos.slice(6, 9)} y={y3} />
        <Column videos={videos.slice(9, 12)} y={y4} />
      </div>

      <div className="flex h-[40vh] items-center justify-center py-8">
        <div className="grid content-start justify-items-center gap-6 text-center">
          <p className="max-w-2xl text-xl font-medium tracking-tight text-foreground">
            Ready to elevate your brand presence?
          </p>
          <button className="group relative overflow-hidden rounded-full bg-primary px-10 py-4 font-semibold text-black transition-all hover:scale-105">
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

type ColumnProps = {
  videos: string[]; 
  y: MotionValue<number>;
};

const Column = ({ videos, y }: ColumnProps) => { 
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {videos.map((src, i) => ( 
        <div key={i} className="relative h-full w-full overflow-hidden rounded-sm bg-muted">
          <video
            src={src}
            autoPlay 
            loop     
            muted    
            playsInline 
            className="h-full w-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
            poster="https://via.placeholder.com/300x500/000000/FFFFFF?text=Loading+Video" 
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;
