import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "../constants/profile";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg shadow-black/50 py-4 border-white/5" 
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14"
          >
            {/* Logo Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Logo Container */}
            <div className="absolute inset-0 bg-[#111] border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300 overflow-hidden flex items-center justify-center rounded-xl shadow-2xl">
              {/* Inner ambient light reflection */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>

              {/* Typography overlay */}
              <div className="relative flex items-end justify-center font-extrabold tracking-tighter z-10">
                <span className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500">
                  {personalData.initials.charAt(0)}
                </span>
                <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 -ml-1">
                  {personalData.initials.charAt(1)}
                </span>
              </div>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative px-6 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-white/10 group overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0f0f] border-t border-white/5 absolute w-full left-0 top-full overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 px-4 py-4 mt-4 border-t border-white/5">
                <a href={personalData.socialLinks.github} className="text-zinc-400 hover:text-cyan-400">
                  <Github size={24} />
                </a>
                <a href={personalData.socialLinks.linkedin} className="text-zinc-400 hover:text-purple-400">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${personalData.email}`} className="text-zinc-400 hover:text-white">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
