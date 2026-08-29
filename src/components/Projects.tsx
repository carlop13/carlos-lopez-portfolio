import { portfolioData } from '../data/portfolioData';
import { ExternalLink, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold tracking-tight text-[#1e3a8a] text-center mb-16">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            </div>
            
            <p className="text-gray-500 mb-8 flex-grow leading-relaxed text-sm">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-[#248277] text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            {/* Contenedor de enlaces anclado al fondo */}
            <div className="flex flex-wrap gap-5 mt-auto pt-5 border-t border-gray-50">
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <FaGithub size={16} /> Code
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <ExternalLink size={16} /> Live App
                </a>
              )}
              {project.links.adminPanel && (
                <a href={project.links.adminPanel} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <ExternalLink size={16} /> Admin Panel
                </a>
              )}
              {project.links.apk && (
                <a href={project.links.apk} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <ExternalLink size={16} /> APK
                </a>
              )}
              {project.links.video && (
                <a href={project.links.video} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <ExternalLink size={16} /> Video
                </a>
              )}
              {project.links.apiDocs && (
                <a href={project.links.apiDocs} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <FileText size={16} /> API Docs
                </a>
              )}
              {project.links.docs && (
                <a href={project.links.docs} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <FileText size={16} /> Docs
                </a>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}