import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

import reel1 from "@/assets/gallery/reel1.jpg";
import reel2 from "@/assets/gallery/reel2.jpg";
import reel3 from "@/assets/gallery/reel3.jpg";
import reel4 from "@/assets/gallery/reel4.jpg";
import reel5 from "@/assets/gallery/reel5.jpg";
import reel6 from "@/assets/gallery/reel6.jpg";
import reel7 from "@/assets/gallery/reel7.jpg";
import reel8 from "@/assets/gallery/reel8.jpg";
import reel9 from "@/assets/gallery/reel9.jpg";
import reel10 from "@/assets/gallery/reel10.jpg";
import reel11 from "@/assets/gallery/reel11.jpg";
import reel12 from "@/assets/gallery/reel12.jpg";
import reel13 from "@/assets/gallery/reel13.jpg";

const images = [
  reel1,
  reel2,
  reel3,
  reel4,
  reel5,
  reel6,
  reel7,
  reel8,
  reel9,
  reel10,
  reel11,
  reel12,
  reel13,
];

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
  }, []);

  return (
    <div className="w-full bg-background">
      <div className="flex h-[20vh] items-center justify-center py-8">
        <div className="grid content-start justify-items-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured Work
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Scroll down to explore our stunning Instagram Reels production showcase
          </p>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>

      <div className="flex h-[20vh] items-center justify-center py-8">
        <div className="grid content-start justify-items-center gap-4 text-center">
          <p className="max-w-2xl text-base text-muted-foreground">
            Ready to create viral content that stands out?
          </p>
        </div>
      </div>
    </div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt={`Dhasha Media Instagram Reels production ${i + 1}`}
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;
