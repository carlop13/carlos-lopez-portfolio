import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, FileText, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Esto evita que la página de fondo haga scroll cuando la modal está abierta
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const easyPlaceData = portfolioData.projects.find(p => p.id === 'easy-place');

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative" id="projects">
      <h2 className="text-3xl font-bold tracking-tight text-[#1e3a8a] text-center mb-16">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            </div>
            
            <p className="text-gray-500 mb-4 flex-grow leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Botón de "Ver más" exclusivo para Easy Place */}
            {project.id === 'easy-place' && (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mb-6 text-[#248277] font-bold text-sm flex items-center gap-1 hover:underline w-fit"
              >
                Read Full Details <ChevronRight size={16} />
              </button>
            )}
            
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-[#248277] text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            {/* Contenedor de enlaces anclado al fondo */}
            <div className="flex flex-wrap gap-5 pt-5 border-t border-gray-50">
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
                  <ExternalLink size={16} /> Admin
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

      {/* MODAL DE EASY PLACE */}
      {isModalOpen && easyPlaceData?.details && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111827]/40 backdrop-blur-sm p-4 md:p-6 transition-opacity">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100 bg-white">
              <h2 className="text-2xl font-bold text-[#1e3a8a]">Easy Place Deep Dive</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto bg-[#f8f9fa] flex-grow">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Columna Izquierda */}
                <div className="space-y-8">
                  
                  {/* Features */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      ✨ Key Features
                    </h3>
                    <ul className="space-y-3">
                      {easyPlaceData.details.features.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#248277] shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      🔒 Security
                    </h3>
                    <ul className="space-y-3">
                      {easyPlaceData.details.security.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#248277] shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Columna Derecha */}
                <div className="space-y-8">
                  
                  {/* Architecture */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">🏗 Architecture</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-[#248277] uppercase tracking-wider mb-2">Mobile App</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{easyPlaceData.details.architecture.mobile.join(' • ')}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-[#248277] uppercase tracking-wider mb-2">Backend</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{easyPlaceData.details.architecture.backend.join(' • ')}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-[#248277] uppercase tracking-wider mb-2">Infrastructure</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{easyPlaceData.details.architecture.infrastructure.join(' • ')}</p>
                    </div>
                  </div>

                  {/* Database */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">🗄 Database Design</h3>
                    <ul className="space-y-3">
                      {easyPlaceData.details.database.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-[#1e3a8a] shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}