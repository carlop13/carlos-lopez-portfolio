import { portfolioData } from '../data/portfolioData';

export default function About() {
  const mainStack = ["NODE.JS", "SPRING BOOT", "REACT AND VITE", "REACT NATIVE", "POSTGRESQL", "PRISMA", "AWS", "TYPESCRIPT", "JAVA", "REST APIs"];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="about">
      <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100">
        
        <div className="md:w-5/12 w-full flex-shrink-0">
          <img 
            src="/foto-certificado.jpeg" 
            alt="Carlos holding certificate" 
            className="w-full aspect-[4/5] object-cover rounded-2xl shadow-md"
          />
        </div>
        
        <div className="md:w-7/12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a8a] mb-6 text-center">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Hey! 👋🏻 I'm {portfolioData.personalInfo.name.split(' ')[0]}, a software engineer originally from {portfolioData.personalInfo.location}. 
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            {portfolioData.personalInfo.about}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Curious, driven, and always ready to learn. I thrive in collaborative environments and take pride in delivering high-quality work through clean architecture and <span className="bg-yellow-200/70 px-1 font-medium text-gray-800">full-stack development</span>.
          </p>

          <div>
            <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Main Stack</h3>
            <div className="flex flex-wrap gap-2">
              {mainStack.map((tech, index) => (
                <span key={index} className="bg-[#248277] text-white px-3 py-1.5 rounded text-xs font-bold tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}