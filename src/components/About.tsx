import { Code, Server, Smartphone, Globe } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { personalData } from "../constants/profile";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  const cards = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive, and high-performance user interfaces using React, Angular, Next.js, TypeScript, and Tailwind CSS.",
      icon: <Code size={32} className="text-cyan-400" />,
    },
    {
      title: "MERN Stack Development",
      description:
        "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js with REST APIs and authentication.",
      icon: <Server size={32} className="text-purple-400" />,
    },
    {
      title: "Responsive UI/UX",
      description:
        "Designing responsive layouts, reusable components, and intuitive user interfaces with a focus on accessibility and user experience.",
      icon: <Smartphone size={32} className="text-pink-400" />,
    },
    {
      title: "Performance & Optimization",
      description:
        "Optimizing applications for performance, SEO, accessibility, and scalability to deliver fast and efficient web experiences.",
      icon: <Globe size={32} className="text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Me
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-10" />
          <motion.p variants={itemVariants} className="max-w-4xl mx-auto text-lg text-zinc-400 leading-relaxed font-light">
            {personalData.aboutDescription}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-[#111] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:border-cyan-500/30"
            >
              {/* Internal glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-colors duration-300 pointer-events-none" />

              <div className="mb-6 bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-inner">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-zinc-100 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
