import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.E Computer Science and Engineering',
      institution: 'Annai Mathammal Sheela Engineering College, Namakkal',
      year: '2016 – 2020',
      icon: <GraduationCap size={24} className="text-primary-500" />
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Development (MERN Stack)',
      issuer: 'Crampete Learning Institute Pvt Ltd, Chennai',
      icon: <Award size={24} className="text-blue-500" />
    },
    {
      title: 'Next.js Certification',
      issuer: 'GUVI Geek Networks (HCL Partnership | Google for Education Partner)',
      icon: <Award size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 text-white border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap size={32} className="text-primary-500" />
              <h2 className="text-3xl font-bold">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Education</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-colors backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    {edu.icon}
                  </div>
                  <span className="text-primary-400 font-semibold text-sm tracking-wider uppercase bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20 mb-4 inline-block">
                    {edu.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-400 font-medium flex items-center gap-2 mt-4">
                    <span className="w-2 h-2 rounded-full bg-slate-600 inline-block"></span>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Award size={32} className="text-blue-500" />
              <h2 className="text-3xl font-bold">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-500">Certifications</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-colors flex items-start gap-4 shadow-sm group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
