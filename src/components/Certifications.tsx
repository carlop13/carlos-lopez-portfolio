import { portfolioData } from '../data/portfolioData';
import { Award, Globe } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-100" id="certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-gray-900" size={24} />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Certifications</h2>
          </div>
          <div className="flex flex-col gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="flex flex-col">
                <a 
                  href={cert.link !== "#" && cert.link !== "image-reference" ? cert.link : undefined} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`text-lg font-semibold text-gray-900 ${cert.link !== "#" && cert.link !== "image-reference" ? "hover:underline" : ""}`}
                >
                  {cert.title}
                </a>
                <span className="text-gray-500">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-gray-900" size={24} />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Languages</h2>
          </div>
          <div className="flex flex-col gap-6">
            {portfolioData.languages.map((lang, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{lang.name}</h3>
                  <span className="text-gray-500 text-sm">— {lang.level}</span>
                </div>
                {lang.certificate && (
                  <a href={lang.certificate} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-black transition-colors">
                    View Certificate
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