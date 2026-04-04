import { motion, type Variants } from 'framer-motion';
import { personalData } from '../constants/profile';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 mb-8 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-medium text-zinc-300 tracking-wide">
                Full stack Developer
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="font-extrabold tracking-tight text-white mb-6 leading-tight flex flex-col gap-2"
            >
              <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-zinc-100 font-bold">Hello, I'm</span>
              <span className="text-[2.5rem] leading-none sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 py-1 sm:py-2 drop-shadow-sm tracking-tight w-full overflow-hidden text-clip font-extrabold">
                {personalData.name}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-10"
            >
              {personalData.heroDescription}
            </motion.p>
          </motion.div>

          {/* Right Content / Visual */}
          <div 
            className="relative order-1 lg:order-2 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-transparent rounded-full animate-[spin_10s_linear_infinite] blur-xl" />
              <div className="absolute inset-2 bg-gradient-to-bl from-purple-500/40 via-cyan-500/20 to-transparent rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Container */}
              <div
                className="absolute inset-4 sm:inset-6 bg-[#111] rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.15)] backdrop-blur-xl"
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt={personalData.name}
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Inner shadow/overlay for depth */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
