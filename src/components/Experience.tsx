import { Briefcase } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'UI/UX Software Engineer',
      company: 'Steerwise Solutions Pvt Ltd',
      location: 'Coimbatore',
      date: 'Jun 2025 – Dec 2025',
      description: 'Built responsive layouts using Tailwind CSS with custom breakpoints, maintained reusable component libraries for UI consistency, and improved frontend scalability and code structure.',
      icon: <Briefcase className="text-cyan-400" size={24} />
    },
    {
      role: 'UI/UX Software Engineer',
      company: 'Steerwise Solutions Pvt Ltd',
      location: 'Coimbatore',
      date: 'Oct 2022 – Jan 2025',
      description: 'Worked on a Data Mesh platform for distributed domain teams. Built reusable React components across the platform, enhanced microfrontend architecture using Single-SPA, and collaborated with cross-functional teams to build scalable UI.',
      icon: <Briefcase className="text-purple-400" size={24} />
    },
    {
      role: 'Frontend Developer',
      company: 'Apple Pro IT Solutions Pvt Ltd',
      location: 'Chennai',
      date: 'Apr 2021 – Sept 2022',
      description: 'Developed financial platform UI using Angular, built responsive and reusable UI components, implemented TypeScript-based architecture, and integrated frontend features with backend APIs.',
      icon: <Briefcase className="text-pink-400" size={24} />
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-32 bg-[#0a0a0a] text-white border-b border-white/5 relative">
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none md:flex md:flex-col md:items-center space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent h-full left-1/2 -translate-x-1/2 top-0" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center w-full justify-between pl-6 md:pl-0 group`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[#111] border-4 border-[#0a0a0a] flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)] z-10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:bg-[#1a1a1a]">
                  {exp.icon}
                </div>

                {/* Content Box */}
                <div className={`md:w-[45%] w-full ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} pt-[2px]`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#111]/80 p-8 rounded-2xl border border-white/5 group-hover:bg-[#161616] group-hover:border-white/10 transition-colors duration-300 backdrop-blur-md relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none" />

                    <div className={`flex flex-col md:flex-row ${isEven ? 'md:justify-end' : 'md:justify-start'} gap-3 mb-6 relative z-10`}>
                      <span className="inline-block py-1 px-4 w-max bg-cyan-500/10 rounded-full text-xs font-semibold text-cyan-400 tracking-wider border border-cyan-500/20">
                        {exp.date}
                      </span>
                      <span className="inline-block py-1 px-4 w-max bg-white/5 rounded-full text-xs font-semibold text-zinc-300 border border-white/10">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-cyan-400 transition-colors ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                      {exp.role}
                    </h3>
                    <h4 className={`text-purple-400 font-medium mb-4 flex items-center gap-2 relative z-10 justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {!isEven && <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-purple-500" />}
                      {exp.company}
                      {isEven && <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-purple-500" />}
                    </h4>
                    
                    <p className={`text-zinc-400 text-sm leading-relaxed relative z-10 ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
