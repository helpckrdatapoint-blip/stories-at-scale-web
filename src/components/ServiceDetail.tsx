import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, Star, Zap, Sparkles, TrendingUp, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailProps {
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  heroImage: string;
  sampleWorks: string[];
  features: string[];
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  iconComponent: React.ComponentType<{ size?: number; className?: string }>;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  tag,
  description,
  longDescription,
  heroImage,
  sampleWorks,
  features,
  pricing,
  iconComponent: IconComponent,
}) => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const shaderCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Shader effect for hero
  useEffect(() => {
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Shader program
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_uv = (a_position + 1.0) * 0.5;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      varying vec2 v_uv;
      
      void main() {
        vec2 uv = v_uv;
        vec2 mouse = u_mouse / u_resolution;
        
        // Animated noise
        float noise = sin(uv.x * 10.0 + u_time) * sin(uv.y * 10.0 + u_time * 0.7) * 0.5 + 0.5;
        
        // Radial gradient from mouse
        float dist = distance(uv, mouse);
        float radial = 1.0 - smoothstep(0.0, 0.5, dist);
        
        // Combine effects
        vec3 color = vec3(0.0);
        color += vec3(1.0, 0.85, 0.0) * radial * 0.3; // Yellow glow
        color += vec3(1.0, 0.85, 0.0) * noise * 0.1; // Noise overlay
        
        gl_FragColor = vec4(color, 0.15);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    let time = 0;
    const animate = () => {
      time += 0.01;
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(mouseLocation, mousePosition.x, mousePosition.y);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    setIsLoaded(true);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition.x, mousePosition.y]);

  // Page transition effect
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [title]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations for title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll(".char"),
          {
            y: 100,
            opacity: 0,
            rotationX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "power3.out",
          }
        );
      }

      // Parallax effect for hero image
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => {
      ctx.revert(); // Cleanup
    };
  }, []);

  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-yellow-500 selection:text-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <AnimatePresence>
        <motion.section
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-screen w-full overflow-hidden"
        >
          {/* Shader Canvas */}
          <canvas
            ref={shaderCanvasRef}
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Animated Background Grid */}
          <div className="absolute inset-0 z-[2] opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.15),_transparent_70%)]"
            />
          </div>

          <div ref={heroRef} className="absolute inset-0 z-[3]">
            <motion.img
              src={heroImage}
              alt={title}
              className="w-full h-[120%] object-cover"
              style={{ opacity, scale }}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
            
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            />
          </div>

        <div className="relative z-[10] h-full flex flex-col justify-center items-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="px-4 py-2 rounded-full border border-yellow-500/30 bg-black/40 backdrop-blur-sm text-yellow-500 text-xs font-bold uppercase tracking-widest inline-block">
              {tag}
            </div>
          </motion.div>

          <div ref={titleRef} className="text-center mb-8">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
              {title.split("").map((char, i) => (
                <span
                  key={i}
                  className="char inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl text-center leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Button
              onClick={() => navigate("/contact")}
              className="group relative px-8 py-6 bg-yellow-500 text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                START PROJECT <ArrowUpRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-yellow-500 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      </AnimatePresence>

      {/* Description Section */}
      <section className="relative py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 mb-8 border border-yellow-500/30">
                <IconComponent className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                What We <span className="text-yellow-500">Deliver</span>
              </h2>
            </div>
            <div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {longDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 md:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
            >
              Key <span className="text-yellow-500">Features</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-yellow-500 mx-auto"
            />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const icons = [Sparkles, TrendingUp, Rocket, Check, Star, Zap];
              const Icon = icons[index % icons.length];
              
              // Feature descriptions mapping
              const descriptions: Record<string, string> = {
                  "End-to-end production management": "Complete oversight from concept to delivery, ensuring seamless coordination across all production phases.",
                  "Professional cinematography": "Cinema-grade camera work with expert framing, lighting, and composition for stunning visual narratives.",
                  "Advanced VFX and post-production": "Cutting-edge visual effects and meticulous post-production to bring your creative vision to life.",
                  "Color grading and mastering": "Professional color correction and mastering to achieve the perfect mood and visual aesthetic.",
                  "Multi-camera setups": "Sophisticated multi-angle coverage for dynamic and comprehensive content capture.",
                  "Professional audio engineering": "Crystal-clear audio capture and mixing for broadcast-quality sound production.",
                  "Script development and storyboarding": "Creative storytelling from initial concept through detailed visual planning.",
                  "Location scouting and management": "Expert site selection and logistics coordination for optimal production environments.",
                  "Equipment rental coordination": "Access to professional-grade equipment and seamless rental management.",
                  "Final delivery in multiple formats": "Versatile output formats optimized for all platforms and distribution channels.",
                  "Channel strategy development": "Data-driven approach to building and growing your YouTube presence systematically.",
                  "SEO-optimized content creation": "Content engineered for maximum discoverability and algorithmic performance.",
                  "Thumbnail design & A/B testing": "Eye-catching thumbnails optimized through systematic testing for maximum CTR.",
                  "Video optimization for algorithm": "Strategic optimization to maximize watch time and engagement signals.",
                  "Analytics & performance tracking": "Comprehensive data analysis to inform content strategy and growth decisions.",
                  "Content calendar planning": "Strategic content scheduling aligned with trends and audience behavior.",
                  "Title & description optimization": "SEO-focused metadata crafted to maximize visibility and click-through rates.",
                  "Engagement strategy development": "Proven tactics to boost comments, likes, and community interaction.",
                  "Community management": "Active engagement and relationship building with your audience.",
                  "Monetization optimization": "Strategic approaches to maximize revenue potential across all platforms.",
                  "Cinematic wedding films": "Artistic storytelling that captures the emotion and beauty of your special day.",
                  "Multiple camera angles": "Comprehensive coverage from multiple perspectives for complete event documentation.",
                  "Drone footage included": "Aerial cinematography to add breathtaking perspectives to your wedding film.",
                  "Same-day highlight reel": "Quick turnaround highlight video delivered on your wedding day for immediate sharing.",
                  "Full ceremony & reception coverage": "Complete documentation of all key moments from your celebration.",
                  "Custom soundtrack options": "Personalized music selection to perfectly match your wedding film's emotional tone.",
                  "Pre-wedding consultation": "Detailed planning session to understand your vision and preferences.",
                  "Multiple delivery formats (Wedding)": "Flexible output options for easy sharing and archiving.",
                  "Same-day delivery": "Lightning-fast turnaround to capitalize on trending moments and maximize engagement.",
                  "Trending audio integration": "Strategic use of popular sounds and music to boost discoverability.",
                  "Multiple format exports (Reels)": "Optimized exports for Instagram, TikTok, YouTube Shorts, and more.",
                  "On-site editing available": "Real-time editing capabilities for immediate content delivery.",
                  "Social media optimization": "Platform-specific formatting and optimization for maximum performance.",
                  "Hashtag research & strategy": "Data-driven hashtag selection to maximize reach and engagement.",
                  "Engagement-optimized cuts": "Editing techniques designed to maximize viewer retention and interaction.",
                  "Quick turnaround guarantee": "Reliable delivery timelines to ensure you never miss a trending moment.",
                  "Daily content creation": "Consistent stream of high-quality content to maintain strong brand presence.",
                  "Multi-platform optimization": "Content tailored and optimized for each social media platform's unique requirements.",
                  "Photo & video production": "Professional photography and videography for diverse content needs.",
                  "Graphic design included": "Custom graphics and visual elements to enhance your content.",
                  "Content calendar management": "Strategic planning and scheduling for consistent brand messaging.",
                  "Trend research & integration": "Stay ahead of trends with proactive research and timely content integration.",
                  "Brand consistency": "Maintained visual and messaging consistency across all content touchpoints.",
                  "Analytics & reporting": "Regular performance insights to inform content strategy and optimization.",
                  "Community engagement": "Active interaction and relationship building with your audience.",
                  "Cinema camera production": "Premium camera systems for commercial-grade visual quality.",
                  "Professional lighting design": "Expert lighting setups to create mood and visual impact.",
                  "Elite color grading": "Premium color correction for sophisticated visual aesthetics.",
                  "Motion graphics & VFX": "Custom animated graphics and visual effects for brand enhancement.",
                  "Professional talent coordination": "Seamless coordination with actors, models, and on-screen talent.",
                  "Broadcast-ready delivery": "Final outputs meeting all broadcast standards and requirements.",
                  "Multi-format exports (Commercial)": "Versatile delivery options for various distribution channels.",
                  "Multi-camera 4K recording": "High-resolution multi-angle capture for professional podcast production.",
                  "Professional audio engineering (Podcast)": "Studio-quality sound capture and mixing for crystal-clear audio.",
                  "Studio or remote setup": "Flexible production environments to accommodate any recording scenario.",
                  "Live streaming capability (Podcast)": "Real-time streaming options for live podcast broadcasts.",
                  "Micro-content clipping": "Strategic content repurposing to maximize reach across platforms.",
                  "Show notes & transcripts": "Comprehensive documentation for improved SEO and accessibility.",
                  "Distribution management": "Multi-platform publishing and distribution coordination.",
                  "Post-production editing": "Professional editing to ensure polished final content.",
                  "Multi-angle coverage": "Comprehensive event documentation from multiple perspectives.",
                  "Live streaming capability (Event)": "Real-time broadcast options for remote audience engagement.",
                  "Photo & video package": "Complete visual documentation combining photography and videography.",
                  "Interview capture": "Professional interview recording with optimal audio and video quality.",
                  "Social media content": "Platform-optimized content created from event footage.",
                  "Post-event deliverables": "Comprehensive asset package for marketing and archival purposes.",
                  "Brand integration": "Seamless incorporation of brand elements into event coverage.",
                  "Creator-brand matching": "Strategic pairing of brands with compatible creators for authentic partnerships.",
                  "Campaign strategy development": "Data-driven campaign planning for maximum ROI and engagement.",
                  "Content creation coordination": "Seamless management of creator content production workflows.",
                  "ROI tracking & analytics": "Comprehensive performance measurement and optimization insights.",
                  "Contract negotiation support": "Expert guidance through partnership agreement processes.",
                  "Campaign management": "End-to-end campaign oversight from planning to execution.",
                  "Performance reporting": "Detailed analytics and insights for campaign optimization.",
                  "Relationship management": "Ongoing relationship building and partnership development.",
                  "Multi-platform campaigns": "Coordinated campaigns across multiple social media platforms.",
                  "Artistic collaboration": "Creative partnerships with diverse artists and creators.",
                  "Experimental formats": "Innovation-driven content formats that push creative boundaries.",
                  "Cross-medium projects": "Projects that blend multiple creative disciplines and mediums.",
                  "Creative direction": "Expert artistic guidance to realize unique creative visions.",
                  "Unique visual styles": "Distinctive visual aesthetics tailored to each project.",
                  "Innovation-focused": "Cutting-edge approaches that challenge conventional creative norms.",
                  "Custom concept development": "Tailored creative concepts developed specifically for your vision.",
                  "Multi-artist projects": "Collaborative projects featuring multiple creative talents.",
                  "Avant-garde production": "Experimental production techniques for groundbreaking content.",
                  "Portfolio-building content": "High-quality work designed to enhance creative portfolios.",
                };
              
              // Generate description based on feature
              const getDescription = (featureText: string) => {
                // Try exact match first
                const exactMatch = descriptions[featureText];
                if (exactMatch) return exactMatch;
                
                // Try partial match for similar features
                const lowerFeature = featureText.toLowerCase();
                for (const [key, value] of Object.entries(descriptions)) {
                  const lowerKey = key.toLowerCase();
                  if (lowerKey.includes(lowerFeature.substring(0, 15)) || 
                      lowerFeature.includes(lowerKey.substring(0, 15))) {
                    return value;
                  }
                }
                
                return "Professional service designed to elevate your content and maximize your impact in the digital landscape.";
              };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08
                  }}
                  whileHover={{ 
                    y: -8,
                  }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-[#050505] border border-white/10 group-hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                    {/* Hover glow effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute -inset-0.5 bg-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Subtle background gradient on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 border border-yellow-500/20 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Feature Title */}
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors duration-300">
                        {feature}
                      </h3>
                      
                      {/* Feature Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {getDescription(feature)}
                      </p>

                      {/* Bottom accent line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                        className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent group-hover:via-yellow-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Works Section */}
      <section className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tighter"
          >
            Sample <span className="text-yellow-500">Works</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <img
                  src={work}
                  alt={`Sample work ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">Project {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-4 md:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              Transparent <span className="text-yellow-500">Pricing</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-3xl p-1 transition-all duration-300 h-full ${
                  plan.popular
                    ? "bg-gradient-to-b from-yellow-500 via-yellow-500/20 to-transparent"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              >
                <div className="absolute inset-0 bg-neutral-900 rounded-[22px] m-[1px] z-0" />

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-yellow-500/20">
                      <Star className="w-3.5 h-3.5 fill-black" />
                      Best Value
                    </div>
                  </div>
                )}

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-200"}`}>
                          {plan.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                          {plan.popular ? <Star className="w-3 h-3 text-yellow-500" /> : <Zap className="w-3 h-3 text-yellow-500" />}
                          {plan.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">₹{plan.price}</div>
                  </div>

                  <div className="flex-grow space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-yellow-500/20 text-yellow-500" : "bg-white/10 text-gray-400"}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => navigate("/contact")}
                    className={`w-full py-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                      plan.popular
                        ? "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-[1.02] shadow-lg shadow-yellow-500/25"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden bg-[#050505]">
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
                GET STARTED?
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Let's bring your vision to life. Contact us today to discuss your project.
            </p>

            <Button
              onClick={() => navigate("/contact")}
              className="group relative px-12 py-6 bg-yellow-500 text-black font-bold text-xl rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                START PROJECT <ArrowUpRight className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

