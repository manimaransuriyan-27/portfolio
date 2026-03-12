import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-6 border border-slate-700/50 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300">Frontend Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Manimaran Suriyan</span>
            </h1>
            
            <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-10">
              Frontend Developer focused on building scalable and user-centric web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1"
              >
                Contact Me <ArrowRight size={20} />
              </a>
              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-slate-700 transform hover:-translate-y-1"
              >
                Download Resume <Download size={20} />
              </a> */}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-[500px] h-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/20 rounded-full animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center overflow-hidden border border-slate-800 shadow-2xl">
                {/* Profile Image */}
                <img 
                  src="/profile.jpeg" 
                  alt="Manimaran Suriyan" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
