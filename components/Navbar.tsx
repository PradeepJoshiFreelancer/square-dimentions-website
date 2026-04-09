"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F0EB] shadow-xl backdrop-blur-md"
          : "bg-transparent/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-display text-2xl tracking-tight hover:scale-105 transition-transform duration-300"
          style={{ color: "#1a1a1a" }}
        >
          <span style={{ color: "#C4813D" }}>Square </span>Dimensions
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="nav-link text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 relative group"
            style={{ color: "#1a1a1a" }}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4813D] group-hover:w-full transition-all duration-300 origin-left" />
          </Link>

          <Link
            href="#services"
            className="nav-link text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 relative group"
            style={{ color: "#1a1a1a" }}
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4813D] group-hover:w-full transition-all duration-300 origin-left" />
          </Link>

          <Link
            href="#projects"
            className="nav-link text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 relative group"
            style={{ color: "#1a1a1a" }}
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4813D] group-hover:w-full transition-all duration-300 origin-left" />
          </Link>
          <Link
            href="#team"
            className="nav-link text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 relative group"
            style={{ color: "#1a1a1a" }}
          >
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4813D] group-hover:w-full transition-all duration-300 origin-left" />
          </Link>
          <Link
            href="#contact"
            className="nav-link text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 relative group"
            style={{ color: "#1a1a1a" }}
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4813D] group-hover:w-full transition-all duration-300 origin-left" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#F5F0EB]/50 transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" style={{ color: "#1a1a1a" }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: "#1a1a1a" }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-[#F5F0EB]/95 backdrop-blur-md border-t border-[#D4C4B0]/50">
          <Link
            href="#about"
            className="block py-3 text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 border-l-4 border-transparent hover:border-[#C4813D] pl-4"
            style={{ color: "#1a1a1a" }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="#services"
            className="block py-3 text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 border-l-4 border-transparent hover:border-[#C4813D] pl-4"
            style={{ color: "#1a1a1a" }}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="block py-3 text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 border-l-4 border-transparent hover:border-[#C4813D] pl-4"
            style={{ color: "#1a1a1a" }}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="#team"
            className="block py-3 text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 border-l-4 border-transparent hover:border-[#C4813D] pl-4"
            style={{ color: "#1a1a1a" }}
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>

          <Link
            href="#contact"
            className="block py-3 text-sm font-medium uppercase tracking-widest hover:text-[#C4813D] transition-colors duration-300 border-l-4 border-transparent hover:border-[#C4813D] pl-4"
            style={{ color: "#1a1a1a" }}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
