import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Navbar = ({ isMenuOpen, onMenuToggle }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold" style={{ color: '#FFD700' }}>
          Dhasha Media
        </a>

        {/* Menu Toggle Button */}
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-full focus:outline-none text-white hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
