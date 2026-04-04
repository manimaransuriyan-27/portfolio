import { GraduationCap, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Education() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemRightVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const education = [
    {
      degree: 'B.E Computer Science and Engineering',
      institution: 'Annai Mathammal Sheela Engineering College, Namakkal',
      year: '2016 – 2020',
      icon: <GraduationCap size={24} className="text-cyan-400" />
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Development (MERN Stack)',
      issuer: 'Crampete Learning Institute Pvt Ltd, Chennai',
      icon: <Award size={24} className="text-purple-400" />
    },
    {
      title: 'Next.js Certification',
      issuer: 'GUVI Geek Networks (HCL & Google Partner)',
      icon: <Award size={24} className="text-pink-400" />
    }
  ];

  return (
    <section id="education" className="py-32 bg-[#0a0a0a] text-white border-b border-white/5 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <GraduationCap size={32} className="text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Education</span>
              </h2>
            </motion.div>
            
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:bg-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm group shadow-lg"
                >
                  <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20 mb-5 inline-block">
                    {edu.year}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-400 font-medium flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemRightVariants} className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Award size={32} className="text-purple-400" />
              </div>
              <h2 className="text-4xl font-bold">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Licenses & Certifications</span>
              </h2>
            </motion.div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemRightVariants}
                  whileHover={{ x: 5 }}
                  className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 group shadow-md"
                >
                  <div className="w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-inner">
                    {cert.icon}
                  </div>
                  <div className="mt-1">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
