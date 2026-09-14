"use client";

import { motion } from "framer-motion";
import { Code2, Monitor, Server, Wrench } from "lucide-react";
import {
  SiCplusplus, SiPython, SiJavascript,
  SiHtml5, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiSupabase,
  SiGit, SiGithub, SiVercel,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDocker } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbLetterC } from "react-icons/tb";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-cyan" size={24} />,
    skills: [
      { name: "C++", icon: <SiCplusplus size={20} color="#00599C" /> },
      { name: "Java", icon: <FaJava size={20} color="#ED8B00" /> },
      { name: "Python", icon: <SiPython size={20} color="#3776AB" /> },
      { name: "JavaScript", icon: <SiJavascript size={20} color="#F7DF1E" /> },
      { name: "C", icon: <TbLetterC size={20} color="#A8B9CC" /> },
    ],
  },
  {
    title: "Frontend",
    icon: <Monitor className="text-violet" size={24} />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 size={20} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={20} color="#1572B6" /> },
      { name: "React.js", icon: <SiReact size={20} color="#61DAFB" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={20} color="#06B6D4" /> },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Server className="text-cyan" size={24} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={20} color="#339933" /> },
      { name: "Express", icon: <SiExpress size={20} color="#FFFFFF" /> },
      { name: "MongoDB", icon: <SiMongodb size={20} color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql size={20} color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={20} color="#4169E1" /> },
      { name: "Firebase", icon: <SiFirebase size={20} color="#FFCA28" /> },
      { name: "Supabase", icon: <SiSupabase size={20} color="#3ECF8E" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="text-violet" size={24} />,
    skills: [
      { name: "Git", icon: <SiGit size={20} color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub size={20} color="#FFFFFF" /> },
      { name: "VS Code", icon: <VscCode size={20} color="#007ACC" /> },
      { name: "Vercel", icon: <SiVercel size={20} color="#FFFFFF" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-navy-light/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
            Technical <span className="text-violet">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan to-violet rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy p-8 md:p-10 rounded-3xl border border-white/5 hover:border-violet/30 group transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan transition-colors">
                  {category.title}
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/80 hover:bg-violet/10 hover:border-violet/25 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    <span className="flex-shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
