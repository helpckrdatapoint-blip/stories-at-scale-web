"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Importing assets
import certifiedCreator from "@/assets/features/certified-creator.jpg";
import easyBooking from "@/assets/features/easy-booking.jpg";
import pricing from "@/assets/features/pricing.jpg";
import secure from "@/assets/features/secure.jpg";
import instantDelivery from "@/assets/features/instant-delivery.jpg";
import womenSafety from "@/assets/features/women-safety.jpg";

const Statement = () => {
  // REMOVED: colSpan properties. All items are now equal.
  const features = [
    {
      id: 1,
      title: "Certified Creators",
      description: "Every creator undergoes a rigorous 6-step verification process before joining our roster.",
      image: certifiedCreator,
    },
    {
      id: 2,
      title: "Unbeatable Pricing",
      description: "Transparent costs starting at ₹1999.",
      image: pricing,
    },
    {
      id: 3,
      title: "Seamless Booking",
      description: "Book verified pros in just 3 clicks.",
      image: easyBooking,
    },
    {
      id: 4,
      title: "100% Secure",
      description: "Military-grade encryption for all your data and assets.",
      image: secure,
    },
    {
      id: 5,
      title: "Instant Delivery",
      description: "48-hour turnaround time.",
      image: instantDelivery,
    },
    {
      id: 6,
      title: "Women Safety",
      description: "Exclusive female booking options.",
      image: womenSafety,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 px-4 overflow-hidden">
      
      {/* Background Gradients/Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500 mb-4">
              The Dhasha Standard
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Performance.</span>
              <br />
              Designed for <span className="text-white/40">Trust.</span>
            </h3>
          </div>
          <div className="hidden md:block pb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <ArrowUpRight className="h-5 w-5 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* UNIFORM GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // CHANGED: Fixed grid cols (1 mobile, 2 tablet, 3 desktop)
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              // CHANGED: Added h-[420px] for uniform vertical rectangle height
              className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                
                {/* Top Row: Index */}
                <div className="flex items-start justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-mono text-white/70 backdrop-blur-md">
                    0{i + 1}
                  </span>
                  
                  {/* Hover Action Icon */}
                  <div className="translate-x-4 -translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                     <div className="rounded-full bg-yellow-400 p-2 text-black">
                       <ArrowUpRight size={18} />
                     </div>
                  </div>
                </div>

                {/* Bottom Row: Text */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-300 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Border Hover Effect */}
              <div className="absolute inset-0 z-20 pointer-events-none rounded-3xl border border-yellow-500/0 transition-colors duration-500 group-hover:border-yellow-500/50" />
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
