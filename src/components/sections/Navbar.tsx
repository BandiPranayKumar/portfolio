"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Handle background scroll state
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Handle scrollspy for active sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <div 
        className={`transition-all duration-300 w-full max-w-6xl rounded-full px-6 py-4 flex items-center justify-between ${
          isScrolled ? "bg-navy-light/90 backdrop-blur-md border border-white/5 shadow-xl" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-heading font-black tracking-tighter text-white/90"
        >
          &lt;Pranay<span className="text-cyan">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-cyan/10 rounded-full z-0 border border-cyan/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Link
                  href={link.href}
                  className={`relative z-10 block px-5 py-2 text-sm transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-cyan font-bold"
                      : "font-medium text-muted hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Let's Talk CTA */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-violet/20 border border-violet/30 text-white font-medium text-sm hover:bg-violet transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-cyan transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-6 right-6 bg-navy-light border border-white/5 rounded-2xl p-6 lg:hidden flex flex-col gap-4 shadow-2xl z-50"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 mt-2 border-t border-white/10">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex px-6 py-3 rounded-full bg-violet text-white font-medium hover:bg-violet/90 transition-all duration-300 w-full justify-center"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
