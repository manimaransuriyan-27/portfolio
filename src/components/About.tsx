import { Code, Server, Smartphone, Globe } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { personalData } from "../constants/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      icon: <Code size={32} className="text-cyan-500 dark:text-cyan-400" />,
    },
    {
      title: "MERN Stack Development",
      description:
        "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js with REST APIs and authentication.",
      icon: <Server size={32} className="text-purple-500 dark:text-purple-400" />,
    },
    {
      title: "Responsive UI/UX",
      description:
        "Designing responsive layouts, reusable components, and intuitive user interfaces with a focus on accessibility and user experience.",
      icon: <Smartphone size={32} className="text-pink-500 dark:text-pink-400" />,
    },
    {
      title: "Performance & Optimization",
      description:
        "Optimizing applications for performance, SEO, accessibility, and scalability to deliver fast and efficient web experiences.",
      icon: <Globe size={32} className="text-emerald-500 dark:text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-32 bg-background text-foreground relative">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              Me
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-10" />
          <motion.p variants={itemVariants} className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed font-light">
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
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="h-full">
              <Card className="group relative h-full rounded-2xl border-border ring-0 transition-all duration-300 hover:bg-accent/40 hover:border-cyan-500/30 [--card-spacing:--spacing(8)]">
                <CardHeader className="gap-4">
                  <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-inner">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
