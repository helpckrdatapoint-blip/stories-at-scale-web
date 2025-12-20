"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,899",
      description: "Perfect for quick shoots and consistent basic content.",
      highlight: "1 Hour Session",
      features: [
        "1 Hour On-site Session",
        "1 Reel (Instant Delivery)",
        "5 Professional Reels / month",
        "Branding Included",
        "Basic Editing & Color Grading",
        "Script Consultation",
        "2 Rounds of Revisions",
        "HD Quality Export (1080p)",
        "48-hour Delivery (Standard)",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "3,899",
      description: "Comprehensive coverage for serious brand growth.",
      highlight: "3 Hour Session",
      features: [
        "3 Hours On-site Session",
        "2 Reels + Candid Photos",
        "15 Professional Reels / month",
        "Branding Included",
        "Advanced Editing & VFX",
        "Strategic Content Planning",
        "Unlimited Revisions",
        "4K Quality Export",
        "24-hour Express Delivery",
        "Trending Audio & Effects",
        "Monthly Analytics Report",
        "Priority Support",
      ],
      popular: true,
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate();

  return (
    <section id="pricing" className="relative w-full py-24 sm:py-32 bg-black overflow-hidden">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-black to-black" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* --- Header --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Simple, Transparent <span className="text-yellow-500">Pricing</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Combine on-site production with monthly content management.
            </p>
          </motion.div>

          {/* --- Pricing Cards Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`relative group rounded-3xl p-1 transition-all duration-300 h-full ${
                  plan.popular
                    ? "bg-gradient-to-b from-yellow-500 via-yellow-500/20 to-transparent"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              >
                <div className="absolute inset-0 bg-neutral-900 rounded-[22px] m-[1px] z-0" />
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-yellow-500/20">
                      <Star className="w-3.5 h-3.5 fill-black" />
                      Best Value
                    </div>
                  </div>
                )}

                <div className="relative z-10 p-8 flex flex-col h-full">
                  
                  {/* Plan Top Section */}
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-200'}`}>
                          {plan.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                          {index === 0 ? <Zap className="w-3 h-3 text-yellow-500" /> : <Camera className="w-3 h-3 text-yellow-500" />}
                          {plan.highlight}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">₹{plan.price}</div>
                        <div className="text-xs text-gray-500">per session</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 leading-relaxed border-b border-white/5 pb-6">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-grow space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-yellow-500/20 text-yellow-500' : 'bg-white/10 text-gray-400'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={`text-sm transition-colors ${i < 2 ? 'text-white font-medium' : 'text-gray-400 group-hover/item:text-gray-300'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
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
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              All plans include standard licensing. <span onClick={() => navigate('/contact')} className="text-white hover:text-yellow-500 cursor-pointer transition-colors">Contact us</span> for custom enterprise packages.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;