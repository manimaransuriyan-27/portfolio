import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "Next js" , "HTML5", "CSS3", "Tailwind CSS", "TanStack", "MobX"]
    },
    {
      title: "Architecture",
      skills: ["Micro Frontends (Single-SPA)", "Component-Based Architecture", "Modular Architecture"]
    },
    {
      title: "Web Development",
      skills: ["REST API Integration", "Responsive Web Design", "Cross-Browser Compatibility"]
    },
    {
      title: "Tools",
      skills: ["Git", "Visual Studio Code", "Cursor IDE"]
    },
    {
      title: "Practices",
      skills: ["Agile Development", "Clean Code", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-primary-500" size={24} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:border-primary-500/50 hover:text-primary-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
