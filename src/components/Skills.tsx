import { CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-cyan-400/20 to-cyan-500/5",
      iconColor: "text-cyan-400",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Single SPA"
      ]
    },
    {
      title: "Backend",
      color: "from-purple-400/20 to-purple-500/5",
      iconColor: "text-purple-400",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Design",
        "JWT Authentication",
      ]
    },
    {
      title: "Database",
      color: "from-pink-400/20 to-pink-500/5",
      iconColor: "text-pink-400",
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "PostgreSQL",
        "Schema Design",
        "Data Modeling"
      ]
    },
    {
      title: "State Management",
      color: "from-emerald-400/20 to-emerald-500/5",
      iconColor: "text-emerald-400",
      skills: [
        "MobX",
        "Redux Toolkit",
        "Zustand",
        "React Context API",
        "TanStack Query",
        "MobX keystone",
      ]
    },
    {
      title: "Architecture",
      color: "from-blue-400/20 to-blue-500/5",
      iconColor: "text-blue-400",
      skills: [
        "Micro Frontends",
        "Modular Architecture",
        "MVC Pattern",
      ]
    },
    {
      title: "Tools & Practices",
      color: "from-orange-400/20 to-orange-500/5",
      iconColor: "text-orange-400",
      skills: [
        "Git & GitHub",
        "Agile Development",
        "Clean Code",
        "Postman",
        "Performance Opt.",
        "Debugging"
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative bg-[#111] border border-white/5 p-8 rounded-3xl overflow-hidden group hover:border-white/10 transition-colors"
            >
              {/* Subtle top gradient bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              {/* Inner ambient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

              <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <CheckCircle2 className={category.iconColor} size={24} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-black/50 text-zinc-300 rounded-full text-sm font-medium border border-white/5 hover:border-white/20 hover:text-white transition-all cursor-default shadow-sm group-hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
