import { Code, Server, Smartphone, Globe } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, performant, and accessible user interfaces using modern frameworks like React and Angular.',
      icon: <Code size={32} className="text-primary-400" />
    },
    {
      title: 'Responsive UI/UX',
      description: 'Crafting responsive layouts and intuitive user interfaces using Tailwind CSS and CSS3.',
      icon: <Smartphone size={32} className="text-blue-400" />
    },
    {
      title: 'Clean Architecture',
      description: 'Focusing on modular, component-based architecture and Micro Frontends (Single-SPA).',
      icon: <Server size={32} className="text-purple-400" />
    },
    {
      title: 'Web Optimization',
      description: 'Enhancing application speed, SEO, and accessibility to create the best possible user experience.',
      icon: <Globe size={32} className="text-orange-400" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mb-8" />
          <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed font-light">
            I am a Frontend Developer with over 3+ years of experience creating scalable, responsive, and user-friendly web applications. I specialize in React, Angular, TypeScript, and Tailwind CSS. I focus on building reusable components, clean architecture, and performance optimization while collaborating with cross-functional teams in Agile environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <div className="mb-6 bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-100">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
