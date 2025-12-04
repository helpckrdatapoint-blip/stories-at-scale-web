"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { MessageCircle, PenTool, Star, Zap, Quote } from "lucide-react";

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Spring configuration for smoothness
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // --- Animation Physics ---
  const x1 = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const r1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const r2 = useTransform(scrollYProgress, [0, 1], [-60, 10]);

  const x3 = useTransform(scrollYProgress, [0, 1], [300, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 200]);
  const r3 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const y4 = useTransform(scrollYProgress, [0, 1], [50, 200]);
  const r4 = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  const x5 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [250, -50]);
  const r5 = useTransform(scrollYProgress, [0, 1], [50, -40]);

  const x6 = useTransform(scrollYProgress, [0, 1], [-400, 200]);
  const r6 = useTransform(scrollYProgress, [0, 1], [20, -30]);

  const x7 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y7 = useTransform(scrollYProgress, [0, 1], [200, 200]);
  const r7 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const x8 = useTransform(scrollYProgress, [0, 1], [-100, 10]);
  const y8 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  const r8 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const x9 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  const y9 = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const r9 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  // Apply springs
  const smoothX1 = useSpring(x1, springConfig);
  const smoothY1 = useSpring(y1, springConfig);
  const smoothR1 = useSpring(r1, springConfig);
  const smoothX2 = useSpring(x2, springConfig);
  const smoothY2 = useSpring(y2, springConfig);
  const smoothR2 = useSpring(r2, springConfig);
  const smoothX3 = useSpring(x3, springConfig);
  const smoothY3 = useSpring(y3, springConfig);
  const smoothR3 = useSpring(r3, springConfig);
  const smoothY4 = useSpring(y4, springConfig);
  const smoothR4 = useSpring(r4, springConfig);
  const smoothX5 = useSpring(x5, springConfig);
  const smoothY5 = useSpring(y5, springConfig);
  const smoothR5 = useSpring(r5, springConfig);
  const smoothX6 = useSpring(x6, springConfig);
  const smoothR6 = useSpring(r6, springConfig);
  const smoothX7 = useSpring(x7, springConfig);
  const smoothY7 = useSpring(y7, springConfig);
  const smoothR7 = useSpring(r7, springConfig);
  const smoothX8 = useSpring(x8, springConfig);
  const smoothY8 = useSpring(y8, springConfig);
  const smoothR8 = useSpring(r8, springConfig);
  const smoothX9 = useSpring(x9, springConfig);
  const smoothY9 = useSpring(y9, springConfig);
  const smoothR9 = useSpring(r9, springConfig);

  return (
    <div
      ref={ref}
      id="testimonials"
      className="relative min-h-[80vh] xl:min-h-screen flex justify-center items-center overflow-hidden bg-[#0a0a0a] py-20 xl:py-40"
    >
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* --- FLOATING ELEMENTS (Desktop Only) --- */}
      <div className="hidden xl:block z-10">
        
        {/* Testimonial 1 */}
        <motion.div style={{ x: smoothX1, y: smoothY1, rotate: smoothR1 }} className="absolute top-0 left-0 z-20">
          <Card
            testimonial="Dhasha Media is in the top 1% of agencies I've worked with. They genuinely care about the metrics."
            reviewer="Rishi"
            role="Content Creator"
          />
        </motion.div>

        {/* Floating Icon: Star - SHARP SQUARE */}
        <motion.div style={{ x: smoothX2, y: smoothY2, rotate: smoothR2 }} className="absolute top-70 left-10 z-10">
          <div className="p-6 bg-yellow-500 rounded-none shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
             <Star className="w-12 h-12 text-black fill-black" />
          </div>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div style={{ x: smoothX3, y: smoothY3, rotate: smoothR3 }} className="absolute left-0 bottom-50 z-20">
          <Card
            testimonial="Delivered in weeks what we'd been trying to achieve for over a year. Game-changing quality."
            reviewer="Arjun"
            role="Brand Manager"
          />
        </motion.div>

        {/* Floating Icon: Chat - SHARP SQUARE */}
        <motion.div style={{ y: smoothY4, rotate: smoothR4 }} className="absolute left-20 bottom-0 z-10">
           <div className="p-5 bg-neutral-900 border border-white/20 rounded-none shadow-2xl">
              <MessageCircle className="w-10 h-10 text-white" />
           </div>
        </motion.div>

        {/* Testimonial 3 */}
        <motion.div style={{ x: smoothX5, y: smoothY5, rotate: smoothR5 }} className="absolute right-10 top-0 z-20">
          <Card
            testimonial="When our most critical stakeholders praised the editing, we knew Dhasha had nailed it."
            reviewer="Naveen"
            role="CEO, TechStart"
          />
        </motion.div>

        {/* Floating Icon: Pen - SHARP SQUARE */}
        <motion.div style={{ x: smoothX6, rotate: smoothR6 }} className="absolute right-20 top-80 z-10">
           <div className="p-4 bg-white/5 border border-white/10 rounded-none backdrop-blur-md">
             <PenTool className="w-12 h-12 text-yellow-500" />
           </div>
        </motion.div>

        {/* Testimonial 4 */}
        <motion.div style={{ x: smoothX7, y: smoothY7, rotate: smoothR7 }} className="absolute right-0 z-20">
          <Card
            testimonial="Huge thanks to the team. Incredibly proud of the viral reach we built together."
            reviewer="Sarah"
            role="Influencer"
          />
        </motion.div>

        {/* Floating Icon: Zap - SHARP SQUARE */}
        <motion.div style={{ x: smoothX8, y: smoothY8, rotate: smoothR8 }} className="absolute right-50 bottom-30 z-10">
          <div className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-none shadow-lg">
             <Zap className="w-8 h-8 text-black fill-black" />
          </div>
        </motion.div>

        {/* Testimonial 5 */}
        <motion.div style={{ x: smoothX9, y: smoothY9, rotate: smoothR9 }} className="absolute right-1/2 translate-1/2 bottom-0 z-20">
          <Card
            testimonial="Brought mind-opening ideas and turned them into tangible, effective reels. Truly impressive."
            reviewer="Karthik"
            role="Marketing Head"
          />
        </motion.div>
      </div>

      {/* --- CENTRAL CONTENT --- */}
      <div className="relative z-30 flex flex-col items-center max-w-4xl mx-auto px-4">
        
        {/* Animated Badge */}
        <div className="flex items-center gap-x-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-md rounded-none mb-6">
          <span className="text-xs xl:text-sm font-bold uppercase tracking-widest text-yellow-500">
            Real Feedback
          </span>
          <div className="flex space-x-1">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-center tracking-tight text-white mb-6">
          Clients can't say enough about <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Dhasha Media.</span>
        </h2>

        <p className="text-base xl:text-xl text-center text-gray-400 max-w-lg mx-auto">
          The industry standard for viral content. <br/> See what happens when you prioritize quality.
        </p>

        {/* --- MOBILE CARD STACK (Visible only on small screens) --- */}
        <div className="flex flex-col xl:hidden mt-12 w-full gap-6 px-2">
          <Card
            testimonial="Dhasha Media brought mind-opening ideas and turned them into tangible, effective designs."
            reviewer="Rishi"
            role="Content Creator"
          />
          <Card
            testimonial="Huge thanks to the team. Incredibly proud of what we built together."
            reviewer="Naveen"
            role="CEO"
          />
          <Card
            testimonial="Delivered in weeks what we'd been trying to achieve for over a year."
            reviewer="Arjun"
            role="Brand Manager"
          />
        </div>
      </div>
    </div>
  );
};

// --- Reusable Card Component (Updated for Brutalist Look) ---
const Card = ({
  testimonial,
  reviewer,
  role
}) => {
  return (
    <div className="relative group flex flex-col gap-y-4 rounded-none border border-white/10 bg-[#0f0f0f] p-6 xl:p-8 max-w-sm xl:max-w-md shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50">
      
      {/* Decorative Gold Accent Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-white/10 fill-white/5 mb-[-10px]" />

      <div className="font-medium text-base xl:text-lg text-gray-200 leading-relaxed z-10">
        "{testimonial}"
      </div>
      
      <div className="flex items-center gap-x-4 pt-4 mt-2 border-t border-white/5">
        <div className="h-10 w-10 rounded-none bg-white/10 flex items-center justify-center text-white font-bold text-lg border border-white/10">
           {reviewer.charAt(0)}
        </div>
        <div className="flex flex-col">
           <div className="text-sm font-bold text-white tracking-wide">{reviewer}</div>
           <div className="text-xs text-gray-500 uppercase tracking-widest">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
