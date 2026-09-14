"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X, Sparkles, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  highlight: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
  visualExtra?: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "rideeasy",
    title: "RideEasy",
    highlight: "Rental Platform",
    description: "A full-stack vehicle rental platform built using React.js, TypeScript, Node.js, Express.js, MongoDB, JWT, Cloudinary, and Razorpay, allowing users to search, filter, check availability, and book vehicles online.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/project-rideeasy.png",
    features: [
      "Vehicle search and filtering",
      "Online booking",
      "JWT authentication & RBAC",
      "Razorpay payments",
    ],
    github: "https://github.com/BandiPranayKumar",
  },
  {
    id: "jobtracer",
    title: "Job Application Tracer",
    highlight: "Productivity Tool",
    description: "A full-stack job application tracking system built with Node.js, Express.js, MongoDB, Mongoose, JWT, JavaScript, HTML5, and CSS3 to help users organize and manage their job applications efficiently.",
    tech: ["Node.js", "Express", "MongoDB", "HTML5/CSS3"],
    image: "/project-jobtracker.png",
    features: [
      "Application management",
      "JWT authentication",
      "bcryptjs security",
      "REST APIs",
    ],
    github: "https://github.com/BandiPranayKumar",
  },
  {
    id: "smartadvisor",
    title: "Smart AI Group Advisor",
    highlight: "AI-Powered Platform",
    description: "An AI-powered group advisor platform using Node.js, Express.js, JavaScript, REST APIs, and Google Gemini API to provide intelligent recommendations for student teams.",
    tech: ["Node.js", "Express", "REST APIs", "Gemini API"],
    image: "/project-smartai.png",
    features: [
      "Group analysis",
      "Task distribution",
      "AI-powered recommendations",
      "Anonymous Feedback Transformer"
    ],
    github: "https://github.com/BandiPranayKumar",
    visualExtra: (
      <div className="mt-4 p-4 rounded-xl bg-navy border border-violet/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-red-400 text-sm italic">"His code is messy and he's lazy."</p>
        </div>
        <div className="flex items-center gap-2 text-cyan">
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">AI</span>
          <ArrowRight size={16} />
        </div>
        <div className="flex-1 text-center md:text-right">
          <p className="text-green-400 text-sm font-medium">"Consider adopting better code organization practices."</p>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
            Featured <span className="text-cyan">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan to-violet rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bg-navy-light rounded-3xl group cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-violet/40 flex flex-col h-full relative overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="w-full h-48 bg-navy border-b border-white/5 relative overflow-hidden">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.highlight} by Pranay Kumar Bandi`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-light/80 to-transparent"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-light to-transparent opacity-50"></div>
                    <div className="flex items-center justify-center h-full">
                      <ImageIcon size={48} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </>
                )}
                <span className="absolute bottom-4 right-4 text-xs font-bold uppercase tracking-widest text-cyan/70 bg-cyan/10 px-2 py-1 rounded z-10">
                  {project.highlight}
                </span>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-violet transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-white/80 rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium px-2.5 py-1 bg-white/5 text-white/80 rounded-full border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`View ${project.title} source code on GitHub`} className="text-muted hover:text-white transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan group-hover:text-violet transition-colors">
                    Details
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-navy-light p-6 md:p-10 shadow-2xl custom-scrollbar"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-muted hover:text-white transition-colors p-2 bg-white/5 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="mb-4">
                <span className="text-violet text-sm font-bold tracking-wider uppercase bg-violet/10 px-3 py-1 rounded-full border border-violet/20">
                  {selectedProject.highlight}
                </span>
                <h3 className="text-3xl md:text-5xl font-heading font-black text-white mt-4 mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-muted leading-relaxed max-w-3xl mb-8">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.visualExtra && (
                <div className="mb-10">
                  <h4 className="text-white font-heading font-bold text-xl mb-4">Feature Spotlight</h4>
                  {selectedProject.visualExtra}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="text-white font-heading font-bold text-xl mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-heading font-bold text-xl mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    <FaGithub size={20} /> View Source
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-cyan text-navy font-bold hover:bg-cyan/90 transition-colors"
                  >
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
