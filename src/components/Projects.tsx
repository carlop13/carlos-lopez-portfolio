import { portfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-100" id="projects">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-2xl p-8 hover:border-gray-900 transition-colors flex flex-col h-full group">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-6 mt-auto">
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                  <FaGithub size={16} /> Code
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                  <ExternalLink size={16} /> Live App
                </a>
              )}
              {project.links.apk && (
                <a href={project.links.apk} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                  <ExternalLink size={16} /> APK
                </a>
              )}
              {project.links.video && (
                <a href={project.links.video} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                  <ExternalLink size={16} /> Video Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}