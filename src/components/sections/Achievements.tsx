"use client";

import { motion } from "framer-motion";
import { Code, Trophy, Award, Briefcase } from "lucide-react";

const stats = [
  { label: "LeetCode Problems", value: "120+", icon: <Code size={24} className="text-cyan" /> },
  { label: "LPU Summer Training", value: "A++", icon: <Trophy size={24} className="text-violet" /> },
  { label: "Major Projects", value: "3+", icon: <Briefcase size={24} className="text-cyan" /> },
  { label: "Certifications", value: "5+", icon: <Award size={24} className="text-violet" /> },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-navy-light/30 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 border border-cyan/30 text-cyan text-sm font-bold uppercase tracking-widest rounded-full mb-6">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black">
            Coding <span className="text-violet">Profiles</span>
          </h2>
        </motion.div>

        {/* Coding Profiles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-navy p-8 rounded-3xl border border-white/5 hover:border-cyan/30 transition-colors group"
          >
            <div className="mb-6 w-12 h-12 rounded-xl bg-[#FFA116]/20 flex items-center justify-center">
              <Code size={24} className="text-[#FFA116]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">LeetCode</h3>
            <p className="text-cyan font-bold text-lg mb-4">120+ Problems Solved</p>
            <p className="text-muted leading-relaxed mb-6">
              Actively practicing Data Structures and Algorithms. Focusing on advanced problem solving.
            </p>
            <a
              href="https://leetcode.com/u/Pranay12416216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan font-medium text-sm hover:text-white transition-colors inline-flex items-center gap-2 group-hover:gap-3"
            >
              View Pranay Kumar on LeetCode →
            </a>
          </motion.div>

          {/* HackerRank */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-navy p-8 rounded-3xl border border-white/5 hover:border-violet/30 transition-colors group"
          >
            <div className="mb-6 w-12 h-12 rounded-xl bg-[#2EC866]/20 flex items-center justify-center">
              <Code size={24} className="text-[#2EC866]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">HackerRank</h3>
            <p className="text-violet font-bold text-lg mb-4">2 Skill Badges</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Problem Solving", "Java"].map((badge) => (
                <span key={badge} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80">
                  {badge}
                </span>
              ))}
            </div>
            <a
              href="https://www.hackerrank.com/profile/bandir063"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet font-medium text-sm hover:text-white transition-colors inline-flex items-center gap-2 group-hover:gap-3"
            >
              View Pranay Kumar on HackerRank →
            </a>
          </motion.div>
        </div>

        {/* Horizontal Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-navy p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center group hover:border-violet/30 transition-colors shadow-lg">
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-heading font-black text-white mb-2">{stat.value}</h4>
              <p className="text-muted font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Experience / Achievements Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
              Experience & <span className="text-violet">Milestones</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan to-violet rounded-full mb-8"></div>
            <p className="text-muted leading-relaxed">
              A track record of my practical experiences, competitive programming achievements, and professional certifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 relative border-l-2 border-white/10 ml-3 lg:ml-8 space-y-12"
          >
            {/* LPU Training */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-navy border-2 border-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              <div className="bg-navy p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-white">Summer Training Program</h3>
                  <span className="px-4 py-1.5 bg-violet/20 text-violet font-bold text-sm rounded-full whitespace-nowrap w-max">A++ Grade</span>
                </div>
                <p className="text-cyan font-medium mb-4">Lovely Professional University</p>
                <p className="text-muted leading-relaxed">
                  Participated in a rigorous summer training program focused on advanced data structures, algorithms, and full-stack development methodologies. Delivered a capstone project and achieved the highest grading bracket.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-navy border-2 border-white/30"></div>
              <div className="bg-navy p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">Technical Certifications</h3>
                <p className="text-violet font-medium mb-6">AWS & Coursera</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-white font-bold mb-1">AWS Academy Cloud Foundations</h4>
                    <p className="text-muted text-sm mb-3">Amazon Web Services</p>
                    <span className="text-xs font-bold text-cyan">Verified Badge</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-white font-bold mb-1">Supervised Machine Learning</h4>
                    <p className="text-muted text-sm mb-3">Coursera (Stanford)</p>
                    <span className="text-xs font-bold text-cyan">Completed</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
