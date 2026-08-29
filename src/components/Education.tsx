import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="education">
      <h2 className="text-3xl font-bold tracking-tight text-[#1e3a8a] mb-12 text-center md:text-left">
        Education
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#248277]/10 p-3 rounded-2xl flex-shrink-0">
                <GraduationCap className="text-[#248277]" size={28} />
              </div>
              <span className="text-sm font-bold text-[#248277] uppercase tracking-wider">
                {edu.period}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">{edu.degree}</h3>
            
            {/* El mt-auto asegura que la institución siempre quede al fondo, alineada con la otra tarjeta */}
            <h4 className="text-base text-gray-500 font-medium mt-auto pt-5 border-t border-gray-50">
              {edu.institution}
            </h4>
            
          </div>
        ))}
      </div>
    </section>
  );
}