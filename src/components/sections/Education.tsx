"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "Aug 2024 — Present",
    location: "Phagwara, Punjab",
    score: "CGPA: 7.4",
  },
  {
    degree: "Intermediate — PCM",
    institution: "Shivani Junior College",
    period: "Apr 2022 — Mar 2024",
    location: "Warangal, Telangana",
    score: "Percentage: 96%",
  },
  {
    degree: "Matriculation",
    institution: "MJPTBCWR School",
    period: "Mar 2021 — May 2022",
    location: "Bhupalapally, Telangana",
    score: "Percentage: 98%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:items-start items-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-cyan">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan to-violet rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12 pb-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-navy border-4 border-cyan">
                  <div className="absolute inset-0 bg-cyan rounded-full blur-[4px] opacity-50"></div>
                </div>

                <div className="glass-card p-6 md:p-8 hover:border-cyan/30 transition-colors group">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-violet font-medium mb-4">{edu.institution}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-muted mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-cyan/70" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-violet/70" />
                      {edu.location}
                    </div>
                  </div>

                  <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white font-medium">
                    {edu.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
