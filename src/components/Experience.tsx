import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold tracking-tight text-[#1e3a8a] mb-12 text-center md:text-left">
        Professional Experience
      </h2>
      <div className="flex flex-col gap-8">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12 hover:-translate-y-1 transition-transform duration-300">
            
            <div className="md:w-1/4 flex flex-col gap-5 pt-1">
              <span className="text-sm font-bold text-[#248277] uppercase tracking-wider">
                {exp.period}
              </span>
              {exp.logo && (
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  className="w-24 h-24 md:w-28 md:h-28 object-contain mix-blend-multiply"
                />
              )}
            </div>

            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
              <h4 className="text-lg text-[#1e3a8a] font-medium mb-4">{exp.company}</h4>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-[#248277] text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}