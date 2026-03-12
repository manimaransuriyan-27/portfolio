import { Github, Linkedin, Target, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Target className="text-primary-500" size={28} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-500">
              Manimaran Suriyan
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/manimaransuriyan-27" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/iam_maara_" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Manimaran Suriyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
