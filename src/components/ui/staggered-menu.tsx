// src/components/ui/staggered-menu.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Define the types for the props based on your request
type StaggeredMenuItem = {
  id: string;
  label: string;
};

type StaggeredMenuSocialItem = {
  Icon: React.ElementType;
  href: string;
};

type StaggeredMenuProps = {
  items: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  onItemClick: (id: string) => void;
  position?: 'left' | 'right';
  colors?: string[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
};

const menuVariants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const StaggeredMenu = ({
  items,
  socialItems = [],
  onItemClick,
  position = 'right',
  colors = ["#B19EEF", "#5227FF"],
  displaySocials = false,
  displayItemNumbering = true,
  menuButtonColor = "#000",
  openMenuButtonColor = "#fff",
}: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Background layers
  const layers = colors.map((color, i) => (
    <motion.div
      key={i}
      style={{ backgroundColor: color, zIndex: 10 - i }}
      className="absolute inset-0"
      initial={{ y: "100%" }}
      animate={{ y: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (colors.length - 1 - i) * 0.1 }}
    />
  ));

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 p-2 rounded-full focus:outline-none"
        style={{ color: isOpen ? openMenuButtonColor : menuButtonColor }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed inset-0 z-[9] flex flex-col justify-center p-10 ${position === 'left' ? 'items-start' : 'items-center'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background layers */}
            <div className="absolute inset-0 -z-10">{layers}</div>

            {/* Navigation Links */}
            <motion.ul
              className="list-none p-0 m-0"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {items.map((item, i) => (
                <motion.li key={item.id} variants={menuItemVariants} className="mb-8">
                  <button
                    onClick={() => {
                      onItemClick(item.id);
                      setIsOpen(false);
                    }}
                    className="flex items-center text-4xl md:text-6xl font-bold text-white hover:text-gray-300 transition-colors"
                  >
                    {displayItemNumbering && (
                      <span className="text-2xl font-normal mr-4 opacity-50">0{i + 1}</span>
                    )}
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            {/* Social Links */}
            {displaySocials && socialItems.length > 0 && (
                 <motion.div 
                    className="mt-12 flex space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
                 >
                    {socialItems.map(({ Icon, href }, i) => (
                        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-75 transition-opacity">
                            <Icon size={24} />
                        </a>
                    ))}
                 </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
