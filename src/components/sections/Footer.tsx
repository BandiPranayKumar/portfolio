import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#050810] border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-muted text-sm font-medium">
          &copy; {currentYear} Pranay Kumar Bandi. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link href="#home" className="text-2xl font-heading font-black tracking-tighter text-white/50 hover:text-white transition-colors">
            &lt;Pranay<span className="text-cyan">/&gt;</span>
          </Link>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/BandiPranayKumar" target="_blank" rel="me noopener noreferrer" aria-label="Pranay Kumar Bandi on GitHub" className="text-muted hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/pranaykumarbandi/" target="_blank" rel="me noopener noreferrer" aria-label="Pranay Kumar Bandi on LinkedIn" className="text-muted hover:text-white transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
