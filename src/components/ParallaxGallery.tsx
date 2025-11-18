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
      <div className="flex h-[20vh] items-center justify-center py-8">
        <div className="grid content-start w-full max-w-7xl px-4 mx-auto text-right"> 
          <h2 className="text-5xl font-semibold text-gray-900 md:text-6xl">
            {/* UPDATED: Added underline class to 'Showcase' */}
            Our <span className="text-blue-600">Viral Work</span> <span className="underline decoration-blue-600 decoration-4">Showcase</span>
          </h2>
          {/* Added ml-auto to push the max-width paragraph to the right */}
          <p className="max-w-3xl text-xl text-gray-500 mt-2 ml-auto">
            Explore a selection of high-impact Instagram Reels and short-form videos crafted by our certified creators. See the difference quality production makes.
          </p>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
      >
        {/* Pass videos in chunks for the columns */}
        <Column videos={videos.slice(0, 3)} y={y} />
        <Column videos={videos.slice(3, 6)} y={y2} />
        <Column videos={videos.slice(6, 9)} y={y3} />
        <Column videos={videos.slice(9, 12)} y={y4} />
      </div>

      <div className="flex h-[20vh] items-center justify-center py-8">
        <div className="grid content-start justify-items-center gap-4 text-center">
          <p className="max-w-2xl text-base text-muted-foreground">
            Ready to create viral content that stands out?
          </p>
          {/* Button color is black (bg-gray-900) */}
          <button className="mt-4 rounded-full bg-gray-900 px-8 py-3 font-semibold text-white shadow-xl transition duration-300 hover:bg-gray-700">
            Book Now
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
        <div key={i} className="relative h-full w-full overflow-hidden rounded-lg">
          <video
            src={src}
            autoPlay 
            loop     
            muted    
            playsInline 
            title={`Dhasha Media Reel Showcase ${i + 1}`}
            className="pointer-events-none h-full w-full object-cover"
            poster="https://via.placeholder.com/300x500/000000/FFFFFF?text=Loading+Video" 
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;
