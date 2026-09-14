"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left side: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">
              About <span className="text-violet">Pranay Kumar Bandi</span>
            </h2>
            <div className="prose prose-invert prose-lg text-muted">
              <p className="mb-6 leading-relaxed">
                I'm B. Pranay Kumar, a Computer Science Engineering student at Lovely Professional University with a strong interest in full-stack development, backend systems, databases, and AI-powered applications.
              </p>
              <p className="leading-relaxed mb-10">
                I enjoy turning ideas into practical software and solving problems through clean and scalable solutions. My current focus is strengthening my development skills while consistently improving my problem-solving ability through competitive programming.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-light p-6 rounded-2xl border border-white/5 hover:border-violet/30 transition-colors">
                <Code className="text-cyan mb-4" size={28} />
                <h4 className="text-white font-bold mb-1">Full-Stack</h4>
                <p className="text-muted text-sm">Primary Focus</p>
              </div>
              <div className="bg-navy-light p-6 rounded-2xl border border-white/5 hover:border-violet/30 transition-colors">
                <BrainCircuit className="text-violet mb-4" size={28} />
                <h4 className="text-white font-bold mb-1">AI & Backend</h4>
                <p className="text-muted text-sm">Interests</p>
              </div>
            </div>
          </motion.div>

          {/* Right side: Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-2"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Education</h3>
            
            <div className="relative border-l-2 border-white/10 ml-3 space-y-10">
              
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-navy border-2 border-violet"></div>
                <h4 className="text-xl font-bold text-white mb-1">B.Tech — Computer Science & Engineering</h4>
                <p className="text-cyan font-medium mb-3">Lovely Professional University</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                  <span className="flex items-center gap-1.5"><GraduationCap size={16} /> Aug 2024 — Present</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Punjab, India</span>
                </div>
                <div className="inline-block px-3 py-1 bg-white/5 rounded text-sm text-white font-medium">CGPA: 7.4</div>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-navy border-2 border-white/30"></div>
                <h4 className="text-xl font-bold text-white mb-1">Intermediate — PCM</h4>
                <p className="text-white/60 font-medium mb-3">Shivani Junior College</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                  <span className="flex items-center gap-1.5"><GraduationCap size={16} /> Apr 2022 — Mar 2024</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Telangana, India</span>
                </div>
                <div className="inline-block px-3 py-1 bg-white/5 rounded text-sm text-white font-medium">Percentage: 96%</div>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-navy border-2 border-white/30"></div>
                <h4 className="text-xl font-bold text-white mb-1">Matriculation</h4>
                <p className="text-white/60 font-medium mb-3">MJPTBCWR School</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted mb-3">
                  <span className="flex items-center gap-1.5"><GraduationCap size={16} /> Mar 2021 — May 2022</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Telangana, India</span>
                </div>
                <div className="inline-block px-3 py-1 bg-white/5 rounded text-sm text-white font-medium">Percentage: 98%</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
