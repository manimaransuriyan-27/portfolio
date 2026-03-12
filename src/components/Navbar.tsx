import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14"
          >
            {/* Logo Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600  blur-md opacity-40 group-hover:opacity-80 transition-all duration-300 group-hover:scale-110"></div>
            
            {/* Logo Container */}
            <div className="absolute inset-0 bg-slate-950 border border-slate-700/60 group-hover:border-primary-500/50 transition-colors duration-300 overflow-hidden flex items-center justify-center shadow-2xl">
              {/* Inner ambient light reflection */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
              
              {/* Typography overlay */}
              <div className="relative flex items-end justify-center font-extrabold tracking-tighter z-10 transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-blue-500">
                  M
                </span>
                <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-blue-500 -ml-1">
                  S
                </span>
                {/* <span className="w-1.5 h-1.5 rounded-full bg-primary-500 absolute -right-2 md:-right-2.5 bottom-1.5 md:bottom-2"></span> */}
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/manimaransuriyan-27" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <a href="#contact" className="px-5 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-colors">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-primary-400 hover:bg-slate-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-4">
              <a href="https://github.com/manimaransuriyan-27" className="text-slate-300 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-slate-300 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="mailto:manimaransuriyan@gmail.com" className="text-slate-300 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
