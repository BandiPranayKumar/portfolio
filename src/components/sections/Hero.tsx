"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-navy">
      
      {/* Intro Animation Overlay */}
      {!introFinished && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-navy pointer-events-none"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-black text-white/90"
          >
            Welcome to my portfolio
            <div className="h-1 w-20 bg-gradient-to-r from-cyan to-violet mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </motion.div>
      )}

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/MyImage.png"
          alt="Pranay Kumar Bandi — Full Stack Developer and Computer Science Engineering student"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-navy"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/70"></div>
      </div>

      {/* Left and Right Content */}
      <div className="max-w-[1400px] w-full relative z-30 mx-auto px-8 md:px-12 h-full flex flex-col lg:flex-row items-center justify-between pointer-events-none pb-20 pt-32 lg:pt-0">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="max-w-[320px] w-full space-y-5 pointer-events-auto mt-20 lg:mt-0"
        >
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white/95 leading-[1.1] tracking-tight">
            <span className="sr-only">Pranay Kumar Bandi — </span>I build <span className="text-violet">digital products.</span>
          </h1>
          <p className="text-muted text-sm lg:text-base leading-relaxed">
            Crafting scalable applications and AI-driven platforms with clean, efficient code.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="#projects" className="px-6 py-3 rounded-full bg-violet/80 hover:bg-violet text-white transition-all font-medium flex items-center gap-2">
              View My Work <ArrowRight size={16} />
            </Link>
            <Link href="#about" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-medium">
              Learn More
            </Link>
          </div>
          
          <div className="flex items-center gap-4 pt-6">
            <a href="https://github.com/BandiPranayKumar" target="_blank" rel="me noopener noreferrer" aria-label="Pranay Kumar Bandi on GitHub" className="p-3.5 rounded-full border border-white/10 text-muted hover:text-white hover:border-violet/50 transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/pranaykumarbandi/" target="_blank" rel="me noopener noreferrer" aria-label="Pranay Kumar Bandi on LinkedIn" className="p-3.5 rounded-full border border-white/10 text-muted hover:text-white hover:border-violet/50 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="https://leetcode.com/u/Pranay12416216/" target="_blank" rel="me noopener noreferrer" aria-label="Pranay Kumar Bandi on LeetCode" className="p-3.5 rounded-full border border-white/10 text-muted hover:text-white hover:border-violet/50 transition-all">
              <FaCode size={18} />
            </a>
            <a href="mailto:bandir063@gmail.com" aria-label="Email Pranay Kumar Bandi" className="p-3.5 rounded-full border border-white/10 text-muted hover:text-white hover:border-violet/50 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="max-w-[320px] w-full space-y-5 lg:text-right pointer-events-auto mt-auto lg:mt-0"
        >
          <p className="text-4xl lg:text-[2.75rem] font-heading font-black text-white leading-[1.1] tracking-tight" role="doc-subtitle">
            <span className="text-white/90 italic font-medium">Full Stack</span><br />
            <span className="text-violet italic">Developer.</span> <span className="text-white/90 font-medium text-2xl">&</span> AI<br />
            <span className="italic font-medium text-white/90">Enthusiast</span>
          </p>
          <p className="text-muted text-sm lg:text-base leading-relaxed lg:ml-auto">
            B.Tech CSE student at Lovely Professional University, turning complex problems into elegant web solutions.
          </p>
          <div className="pt-2 flex lg:justify-end">
            <Link href="#contact" className="px-8 py-3 rounded-full bg-violet text-white font-bold hover:bg-violet/90 transition-all flex items-center gap-2">
              Hire Me <Mail size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-auto"
      >
        <span className="text-muted text-[10px] tracking-[0.3em] font-bold uppercase">Scroll Down</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}>
          <ChevronDown size={20} className="text-violet" />
        </motion.div>
      </motion.div>

    </section>
  );
}
