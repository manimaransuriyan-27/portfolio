import { CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      iconColor: "text-cyan-600 dark:text-cyan-400",
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
      iconColor: "text-purple-600 dark:text-purple-400",
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
      iconColor: "text-pink-600 dark:text-pink-400",
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
      iconColor: "text-emerald-600 dark:text-emerald-400",
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
      iconColor: "text-blue-600 dark:text-blue-400",
      skills: [
        "Micro Frontends",
        "Modular Architecture",
        "MVC Pattern",
      ]
    },
    {
      title: "Tools & Practices",
      color: "from-orange-400/20 to-orange-500/5",
      iconColor: "text-orange-600 dark:text-orange-400",
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
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="relative overflow-hidden rounded-3xl border-border ring-0 transition-colors group hover:border-cyan-500/30 [--card-spacing:--spacing(8)]">
                {/* Subtle top gradient bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                    <CheckCircle2 className={category.iconColor} size={24} />
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="h-auto rounded-full border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:border-cyan-500/40 hover:text-foreground group-hover:shadow-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
