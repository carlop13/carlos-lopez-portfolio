import { portfolioData } from '../data/portfolioData';
import { Award, Globe } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Certifications Card */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#248277]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-[#1e3a8a]">Certifications</h2>
          </div>
          <div className="flex flex-col gap-6">
            {portfolioData.certifications.map((cert, index) => {
              const hasValidLink = cert.link && cert.link !== "#" && cert.link !== "image-reference";
              
              return (
                <div key={index} className="flex flex-col border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <span className="text-gray-500 text-sm mt-1">{cert.issuer}</span>
                  {hasValidLink && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-medium text-[#248277] hover:underline transition-all w-fit mt-2"
                    >
                      View Certificate &rarr;
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages Card */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-[#248277]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-[#1e3a8a]">Languages</h2>
          </div>
          <div className="flex flex-col gap-6">
            {portfolioData.languages.map((lang, index) => (
              <div key={index} className="flex flex-col border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{lang.name}</h3>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {lang.level}
                  </span>
                </div>
                {lang.certificate && (
                  <a href={lang.certificate} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#248277] hover:underline transition-all w-fit mt-2">
                    View Certificate &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}