"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "/month",
      description: "Perfect for individuals and small creators starting their journey.",
      features: [
        "5 Professional Reels per month",
        "Basic editing & color grading",
        "Script consultation",
        "2 rounds of revisions",
        "HD quality export (1080p)",
        "48-hour delivery",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹0",
      period: "/month",
      description: "Ideal for growing brands and serious content creators.",
      features: [
        "15 Professional Reels per month",
        "Advanced editing & VFX",
        "Strategic content planning",
        "Unlimited revisions",
        "4K quality export",
        "24-hour express delivery",
        "Trending audio & effects",
        "Priority support",
        "Monthly analytics report",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹0",
      period: "/month",
      description: "Full-scale solution for agencies and established brands.",
      features: [
        "Unlimited Professional Reels",
        "Premium cinematic editing",
        "Dedicated content strategist",
        "Unlimited revisions",
        "8K quality export",
        "12-hour rush delivery",
        "Custom graphics & animations",
        "Multi-platform optimization",
        "Weekly strategy calls",
        "Brand asset management",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // REDUCED PADDING: py-16 sm:py-24 (was py-24 sm:py-32)
    <section id="pricing" className="relative py-16 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* --- Header --- */}
          {/* REDUCED MARGIN: mb-12 (was mb-20) */}
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wide uppercase mb-4 backdrop-blur-md"
            >
              Pricing Plans
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Growth Plan</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Transparent pricing. No hidden fees. <br className="hidden md:block"/>
              Scale your content production with precision.
            </motion.p>
          </div>

          {/* --- Pricing Cards Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // REDUCED PADDING INSIDE CARD: p-6 sm:p-8 (was just p-8)
                className={`relative rounded-[2rem] p-6 sm:p-8 transition-all duration-500 flex flex-col h-full border ${
                  plan.popular
                    ? "bg-neutral-900 border-yellow-500/50 shadow-[0_0_50px_-10px_rgba(234,179,8,0.15)] z-20 scale-100 lg:scale-105"
                    : "bg-neutral-900/50 border-white/10 hover:border-white/20 z-10 hover:bg-neutral-900"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                {/* REDUCED PADDING/MARGIN: mb-6 pb-6 (was mb-8 pb-8) */}
                <div className="mb-6 pb-6 border-b border-white/5">
                  <div className="flex items-center justify-between mb-2">
                     <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-200'}`}>
                        {plan.name}
                     </h3>
                     <span className={`font-mono text-lg font-medium tracking-tighter ${plan.popular ? 'text-yellow-500' : 'text-white/20'}`}>
                       0{index + 1}
                     </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-5xl font-bold tracking-tight ${plan.popular ? 'text-yellow-400' : 'text-white'}`}>
                        {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                {/* REDUCED MARGIN: mb-6 (was mb-8) */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? 'bg-yellow-500/20' : 'bg-white/10'}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.popular ? 'text-yellow-500' : 'text-gray-300'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className={`w-full h-11 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-500 hover:bg-yellow-400 text-black hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
                      : "bg-white/5 text-white hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {plan.popular ? "Get Started Now" : "Choose Plan"}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          {/* REDUCED MARGIN: mt-10 (was mt-16) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-500 text-sm">
              Need a custom plan?{' '}
              <button 
                onClick={scrollToContact}
                className="text-yellow-500 hover:text-yellow-400 hover:underline underline-offset-4 font-medium transition-colors"
              >
                Contact us
              </button>{' '}
              for enterprise solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
