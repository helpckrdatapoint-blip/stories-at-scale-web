"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Twitter, ArrowUpRight, Send } from 'lucide-react';

const ContactSection = () => {
  
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden font-sans">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* --- LEFT COLUMN: INFO --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={formVariants}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <motion.div variants={itemVariants} className="inline-block px-3 py-1 mb-6 border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                Contact Us
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
                Let's start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  conversation.
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-md mb-12 leading-relaxed font-light">
                Ready to scale your reach? Tell us about your project, and we'll help you build a viral strategy.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-8">
              {/* Email */}
              <div className="group">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@storiesatscale.in" className="text-2xl sm:text-3xl text-white font-medium hover:text-yellow-500 transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                  hello@dhashamedia.com
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6" />
                </a>
              </div>

              {/* Phone */}
              <div className="group">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+91 98765 43210" className="text-2xl sm:text-3xl text-white font-medium hover:text-yellow-500 transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                  +91 98765 43210
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6" />
                </a>
              </div>
            </motion.div>
            
            {/* Social Media Links */}
            <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/10">
              <div className="flex space-x-6">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" }
                ].map((Social, index) => (
                  <a 
                    key={index}
                    href={Social.href} 
                    className="group relative flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 transition-all hover:bg-yellow-500 hover:border-yellow-500 rounded-none"
                  >
                    <Social.icon size={20} className="text-gray-400 transition-colors group-hover:text-black" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* --- RIGHT COLUMN: FORM --- */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
            <form className="space-y-12 bg-transparent">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {/* Name Input */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl text-white outline-none transition-all focus:border-yellow-500 placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-0 top-4 text-lg text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-500 peer-focus:uppercase peer-focus:tracking-widest peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl text-white outline-none transition-all focus:border-yellow-500 placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 top-4 text-lg text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-500 peer-focus:uppercase peer-focus:tracking-widest peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-xl text-white outline-none transition-all focus:border-yellow-500 placeholder-transparent"
                  placeholder="Subject"
                />
                <label 
                  htmlFor="subject" 
                  className="absolute left-0 top-4 text-lg text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-500 peer-focus:uppercase peer-focus:tracking-widest peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                >
                  Subject (Optional)
                </label>
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="peer w-full resize-none bg-transparent border-b border-white/20 py-4 text-xl text-white outline-none transition-all focus:border-yellow-500 placeholder-transparent"
                  placeholder="Your Message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-4 text-lg text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-yellow-500 peer-focus:uppercase peer-focus:tracking-widest peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                >
                  Tell us about your project...
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  // CHANGED: rounded-full to rounded-none for sharp edges
                  className="group relative w-full sm:w-auto overflow-hidden rounded-none bg-yellow-500 px-10 py-5 font-bold text-black transition-all hover:bg-yellow-400 shadow-[0_5px_20px_-5px_rgba(234,179,8,0.4)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  
                  {/* Button Glare Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
