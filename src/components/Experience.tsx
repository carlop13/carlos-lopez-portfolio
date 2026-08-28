import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-100" id="experience">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Experience</h2>
      <div className="flex flex-col gap-12">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="md:w-1/4 text-sm font-medium text-gray-400 pt-1">
              {exp.period}
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{exp.company}</h4>
              <p className="text-gray-500 leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1 text-xs font-medium rounded-md">
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