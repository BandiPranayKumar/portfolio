"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-[#050810]">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Let's <span className="text-cyan">Connect</span>
            </h2>
            <p className="text-muted text-lg mb-12 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <form 
              action="mailto:bandir063@gmail.com" 
              method="POST" 
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 pl-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-navy border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet/50 focus:ring-1 focus:ring-violet/50 transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80 pl-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full bg-navy border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet/50 focus:ring-1 focus:ring-violet/50 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80 pl-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="Hello Pranay, I'd like to discuss..."
                  required
                  className="w-full bg-navy border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-violet/50 focus:ring-1 focus:ring-violet/50 transition-all placeholder:text-white/20 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-violet text-white font-bold py-4 rounded-xl hover:bg-violet/90 transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(190,24,93,0.3)] hover:shadow-[0_0_30px_rgba(190,24,93,0.5)]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Large CTA or Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col items-end justify-center"
          >
            <div className="bg-navy-light p-10 rounded-[3rem] border border-white/5 relative overflow-hidden max-w-md w-full shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/20 blur-3xl rounded-full"></div>
              
              <MessageSquare size={48} className="text-cyan mb-8" />
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Got a project in mind?</h3>
              <p className="text-muted mb-8">Reach out directly via email or connect with me on professional platforms.</p>
              
              <div className="space-y-4">
                <a href="mailto:bandir063@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan/30 hover:bg-white/10 transition-all group">
                  <div className="p-3 bg-cyan/10 text-cyan rounded-xl group-hover:bg-cyan group-hover:text-navy transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium mb-1">Email Me</p>
                    <p className="text-white font-medium">bandir063@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-3 bg-violet/10 text-violet rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium mb-1">Location</p>
                    <p className="text-white font-medium">Punjab, India</p>
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
