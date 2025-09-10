// src/components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { StaggeredMenu } from "@/components/ui/staggered-menu"; // Import the new component
// Example icons for social links
import { Github, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  
  // Define social items for the staggered menu
  const socialLinks = [
    { Icon: Github, href: "https://github.com" },
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    // The main navbar container is now simpler
    <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Site Name */}
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-foreground">
              Stories at Scale
            </a>
          </div>

          {/* Desktop Navigation (visible on md screens and up) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="rounded-full"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Staggered Menu (visible on screens smaller than md) */}
          <div className="md:hidden">
            <StaggeredMenu
              items={navLinks}
              onItemClick={scrollToSection}
              position="right"
              colors={["#c7d2fe", "#4f46e5"]} // Example: Indigo colors
              displaySocials={true}
              socialItems={socialLinks}
              displayItemNumbering={true}
              menuButtonColor="#111827" // Dark gray
              openMenuButtonColor="#ffffff" // White
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
