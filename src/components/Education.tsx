import { GraduationCap, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      icon: <GraduationCap size={24} className="text-cyan-600 dark:text-cyan-400" />
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Development (MERN Stack)',
      issuer: 'Crampete Learning Institute Pvt Ltd, Chennai',
      icon: <Award size={24} className="text-purple-600 dark:text-purple-400" />
    },
    {
      title: 'Next.js Certification',
      issuer: 'GUVI Geek Networks (HCL & Google Partner)',
      icon: <Award size={24} className="text-pink-600 dark:text-pink-400" />
    }
  ];

  return (
    <section id="education" className="py-32 bg-background text-foreground border-b border-border relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

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
                <GraduationCap size={32} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-4xl font-bold">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Education</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }}>
                  <Card className="group rounded-3xl border-border shadow-lg ring-0 backdrop-blur-sm transition-all duration-300 hover:bg-accent/40 hover:border-cyan-500/30 [--card-spacing:--spacing(8)]">
                    <CardHeader className="gap-5">
                      <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {edu.icon}
                      </div>
                      <Badge
                        variant="outline"
                        className="h-auto w-max rounded-full border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400"
                      >
                        {edu.year}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                        {edu.institution}
                      </p>
                    </CardContent>
                  </Card>
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
                <Award size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-4xl font-bold">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Licenses & Certifications</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div key={idx} variants={itemRightVariants} whileHover={{ x: 5 }}>
                  <Card className="group rounded-2xl border-border shadow-md ring-0 transition-all duration-300 hover:bg-accent/40 hover:border-purple-500/30 [--card-spacing:--spacing(6)]">
                    <CardContent className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-inner">
                        {cert.icon}
                      </div>
                      <div className="mt-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {cert.issuer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
