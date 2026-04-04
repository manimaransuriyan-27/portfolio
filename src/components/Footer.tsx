import { Github, Linkedin, Target, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalData } from '../constants/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 mb-6 md:mb-0 cursor-pointer"
          >
            <Target className="text-cyan-400" size={32} />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              {personalData.name}
            </span>
          </motion.div>

          <div className="flex space-x-8">
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href={personalData.socialLinks.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-500 hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href={personalData.socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href={personalData.socialLinks.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-500 hover:text-pink-400 transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-zinc-500 font-medium tracking-wide">
          <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
