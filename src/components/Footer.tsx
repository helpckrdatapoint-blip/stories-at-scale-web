"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Twitter, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '#services' },
    { name: 'Pricing', url: '#pricing' },
    { name: 'Testimonials', url: '#testimonials' },
    { name: 'Contact', url: '#contact' },
  ];

  const services = [
    'Instagram Reels',
    'YouTube Shorts',
    'Brand Content',
    'Product Shoots',
    'Event Coverage',
    'Content Strategy',
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <footer className="relative bg-[#050505] pt-20 overflow-hidden border-t border-white/5">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Top Section: Call to Action --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-16 gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to create <span className="text-yellow-500">impact?</span>
            </h2>
            <p className="text-gray-400">Let's turn your vision into viral reality.</p>
          </div>
          
          {/* CHANGED: Rounded-full to rounded-none for sharp edges */}
          <a 
            href="#contact"
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-bold hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)]"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* --- Main Grid Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Section (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter text-white">
              DHASHA<span className="text-yellow-500">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              We define the standard for short-form content. Strategic storytelling engineered for the algorithmic age.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // CHANGED: Social icons also slightly sharper (rounded-lg instead of full or kept slightly rounded for UI balance, let's go sharp for consistency)
                  className="group relative flex h-10 w-10 items-center justify-center rounded-none border border-white/10 bg-white/5 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-gray-400 transition-colors group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer (Span 1) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="group flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3 group-hover:mr-2">
                      <span className="h-[1px] w-2 bg-yellow-500 block my-2"></span>
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-gray-400 hover:text-white transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:hello@dhashamedia.com" className="group flex items-start gap-4 text-gray-400 hover:text-white transition-colors">
                  <div className="p-2 bg-white/5 rounded-none group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Email us</span>
                    hello@dhashamedia.com
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="group flex items-start gap-4 text-gray-400 hover:text-white transition-colors">
                  <div className="p-2 bg-white/5 rounded-none group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Call us</span>
                    +91 98765 43210
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-gray-400">
                  <div className="p-2 bg-white/5 rounded-none">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Visit us</span>
                    Hyderabad, Telangana, India
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 text-xs text-gray-600">
          <p>© {currentYear} Dhasha Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* --- Massive Brand Watermark --- */}
      <div className="w-full flex justify-center items-end overflow-hidden pointer-events-none select-none opacity-10">
        {/* CHANGED: Text color to yellow-500 and adjusted gradient for yellow appearance */}
        <h1 className="text-[12vw] sm:text-[14vw] leading-[0.75] font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-transparent tracking-tighter translate-y-2">
          DHASHA MEDIA
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
