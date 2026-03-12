import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'UI/UX Software Engineer',
      company: 'Steerwise Solutions Pvt Ltd',
      location: 'Coimbatore',
      date: 'Jun 2025 – Dec 2025',
      description: 'Built responsive layouts using Tailwind CSS with custom breakpoints, maintained reusable component libraries for UI consistency, and improved frontend scalability and code structure.',
      icon: <Briefcase className="text-primary-500" size={24} />
    },
    {
      role: 'UI/UX Software Engineer',
      company: 'Steerwise Solutions Pvt Ltd',
      location: 'Coimbatore',
      date: 'Oct 2022 – Jan 2025',
      description: 'Worked on a Data Mesh platform for distributed domain teams. Built reusable React components across the platform, enhanced microfrontend architecture using Single-SPA, and collaborated with cross-functional teams to build scalable UI.',
      icon: <Briefcase className="text-blue-500" size={24} />
    },
    {
      role: 'Frontend Developer',
      company: 'Apple Pro IT Solutions Pvt Ltd',
      location: 'Chennai',
      date: 'Apr 2021 – Sept 2022',
      description: 'Developed financial platform UI using Angular, built responsive and reusable UI components, implemented TypeScript-based architecture, and integrated frontend features with backend APIs.',
      icon: <Briefcase className="text-purple-500" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-slate-700 ml-4 md:ml-0 md:border-none md:flex md:flex-col md:items-center space-y-16">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute w-px bg-slate-700 h-full left-1/2 -translate-x-1/2 top-0" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full justify-between pl-6 md:pl-0 group`}>
                
                {/* Timeline dot */}
                <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-slate-700">
                  {exp.icon}
                </div>

                {/* Content Box */}
                <div className={`md:w-[45%] w-full ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} pt-[2px]`}>
                  <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm">
                    <div className={`flex flex-col md:flex-row ${isEven ? 'md:justify-start' : 'md:justify-start'} gap-2 mb-4`}>
                      <span className="inline-block py-1 px-3 w-max bg-slate-900/50 rounded-full text-xs font-semibold text-primary-400 tracking-wider border border-slate-700/50">
                        {exp.date}
                      </span>
                      <span className="inline-block py-1 px-3 w-max bg-slate-900/50 rounded-full text-xs font-semibold text-slate-300 border border-slate-700/50">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 flex justify-start">
                      {exp.role}
                    </h3>
                    <h4 className="text-slate-400 font-medium mb-4 flex items-center gap-2 md:justify-start">
                      {isEven && <span className="hidden md:inline-block w-2 h-2 rounded-full bg-slate-600" />}
                      {exp.company}
                      {!isEven && <span className="hidden md:inline-block w-2 h-2 rounded-full bg-slate-600" />}
                    </h4>
                    
                    <p className={`mt-4 text-slate-400 text-sm leading-relaxed ${isEven ? 'md:text-left' : 'md:text-left'}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
