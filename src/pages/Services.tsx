import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue, 
} from "framer-motion";
import { 
  ArrowUpRight, 
  Play, 
  Aperture, 
  Mic, 
  Zap, 
  Users, 
  Clapperboard, 
  Crown,
  MonitorPlay,
  Handshake,
  Palette
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StaggeredMenu from "@/components/ui/StaggeredMenu";
import Slider from "@/components/slider";
import { servicesInfo } from "@/lib/info";

const services = [
  {
    id: "media-prod",
    title: "Media Production",
    tag: "Full Spectrum",
    desc: "Comprehensive production ecosystems. We handle the entire lifecycle from storyboard conceptualization, logistics, and principal photography to high-end VFX, color grading, and final broadcast mastering.",
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2560&auto=format&fit=crop",
    col: "md:col-span-2 md:row-span-2",
    icon: <Clapperboard />,
    link: "/services/media-production",
  },
  {
    id: "youtube",
    title: "YouTube Architecture",
    tag: "Growth Engine",
    desc: "Data-driven long-form content strategies. We engineer high-retention videos with optimized pacing, click-through-rate focused thumbnails, and SEO to trigger algorithmic discovery and sustainable channel dominance.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-1",
    icon: <MonitorPlay />,
    link: "/services/youtube-architecture",
  },
  {
    id: "wedding",
    title: "Wedding Cinema",
    tag: "Documentary",
    desc: "Transforming your special day into a cinematic masterpiece. We utilize non-intrusive storytelling techniques to capture raw, candid emotions, delivering a timeless narrative of your union.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-1",
    icon: <Crown />,
    link: "/services/wedding-cinema",
  },
  {
    id: "reels",
    title: "Instant Viral Reels",
    tag: "Real-Time",
    desc: "The speed of culture. We shoot, edit, and deliver high-impact short-form content within hours of the event, ensuring you capitalize on trending moments and maximize engagement while the hype is alive.",
    img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-2",
    icon: <Zap />,
    link: "/services/instant-reels",
  },
  {
    id: "content",
    title: "Social Engine",
    tag: "Daily Output",
    desc: "Your dedicated in-house media team. We provide a consistent stream of high-quality photos, videos, and graphics to maintain brand presence and keep your audience engaged daily.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-1",
    icon: <Play />,
    link: "/services/social-engine",
  },
  {
    id: "cinematic",
    title: "Cinematic Commercials",
    tag: "High-Fidelity",
    desc: "Elevate your brand perception with commercial-grade visuals. We utilize cinema cameras, professional lighting, and elite color grading to create visually stunning narratives that resonate with premium audiences.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-2 md:row-span-1",
    icon: <Aperture />,
    link: "/services/cinematic-commercials",
  },
  {
    id: "podcast",
    title: "Podcast Production",
    tag: "Multi-Cam",
    desc: "Professional studio setups for thought leaders. We offer 4K multi-camera recording, crystal-clear audio engineering, and micro-content clipping services to maximize your show's reach across all platforms.",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-1",
    icon: <Mic />,
    link: "/services/podcast-production",
  },
  {
    id: "events",
    title: "Event Experience",
    tag: "On-Ground",
    desc: "Holistic event coverage. From corporate summits to music festivals, we ensure every angle is captured and the event flow is documented seamlessly for future marketing assets.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-2 md:row-span-1",
    icon: <Users />,
    link: "/services/event-experience",
  },
  {
    id: "brand-collab",
    title: "Brand Partnerships",
    tag: "Strategy",
    desc: "Bridging the gap between creators and commerce. We structure high-ROI campaigns that align brand values with authentic creator voices to drive conversion.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-1",
    icon: <Handshake />,
    link: "/services/brand-partnerships",
  },
  {
    id: "creative-collab",
    title: "Creative Labs",
    tag: "Experimental",
    desc: "Pushing boundaries with artistic collaborations. We merge diverse styles and mediums to create avant-garde projects that challenge norms.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1 md:row-span-1",
    icon: <Palette />,
    link: "/services/creative-labs",
  }
];

const ServicesPage = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Pricing', ariaLabel: 'View pricing plans', link: '/#pricing' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-yellow-500 selection:text-black font-sans overflow-x-hidden">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#FFFFFF"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={['#FFD700', '#FFA500']}
        accentColor="#FFD700"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      <CustomCursor />
      <Hero />
      <Slider info={servicesInfo} />
      <BentoGrid />
      <CTA />
    </div>
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-yellow-500 pointer-events-none z-[90] hidden md:block mix-blend-difference"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="absolute inset-0 bg-yellow-500 opacity-20 rounded-full blur-sm" />
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.1),_transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <motion.div 
        style={{ y: y1 }}
        className="relative z-10 flex flex-col items-center text-center space-y-2"
      >
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 600 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600"
          >
            DIGITAL
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 600 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-yellow-500 mix-blend-overlay"
          >
            ALCHEMY
          </motion.h1>
        </div>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-12 left-0 right-0 z-10 flex justify-between px-8 md:px-16"
      >
        <p className="max-w-xs text-xs md:text-sm font-mono text-gray-400 uppercase leading-relaxed">
          Transforming static noise into <br/> viral signals.
        </p>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border border-dashed border-yellow-500 rounded-full grid place-items-center">
             <ArrowUpRight className="w-6 h-6 text-yellow-500" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const StatsTicker = () => {
  return (
    <div className="w-full bg-yellow-500 py-3 overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {new Array(10).fill("").map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4 text-black font-bold text-lg md:text-xl uppercase tracking-wider">
            <span>Strategy</span>
            <span className="w-2 h-2 bg-black rounded-full" />
            <span>Production</span>
            <span className="w-2 h-2 bg-black rounded-full" />
            <span>Distribution</span>
            <span className="w-2 h-2 bg-black rounded-full" />
            <span>Analytics</span>
            <span className="w-2 h-2 bg-black rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <section className="relative z-10 px-4 md:px-8 py-32 max-w-[1800px] mx-auto">
      <div className="mb-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
        >
          Our <span className="text-yellow-500">Capabilities</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          className="h-1 bg-yellow-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[350px] gap-4 md:gap-6">
        {services.map((service, i) => (
          <Card key={service.id} data={service} index={i} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ data, index }) => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  const handleClick = () => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(data.link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
      className={`${data.col} relative group`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        onClick={handleClick}
        className="h-full w-full relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-yellow-500/50 transition-colors duration-500 cursor-pointer"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-yellow-500 border border-white/5 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
              {data.icon}
            </div>
            <div className="px-3 py-1 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white group-hover:border-yellow-500/30 transition-colors">
              {data.tag}
            </div>
          </div>

          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white group-hover:text-yellow-500 transition-colors">
              {data.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-3 md:line-clamp-none group-hover:text-gray-200 transition-colors leading-relaxed">
              {data.desc}
            </p>
          </div>
          
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
             <ArrowUpRight className="text-yellow-500 w-6 h-6" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              GO VIRAL?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Stop creating content. Start creating culture. 
            Join the agency that understands the algorithm.
          </p>

          <button onClick={() => navigate('/contact')} className="group relative px-12 py-6 bg-yellow-500 text-black font-bold text-xl rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="relative z-10 flex items-center gap-3">
              START PROJECT <ArrowUpRight className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;