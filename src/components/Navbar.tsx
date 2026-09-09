import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  // Limpiamos el número para que quede solo "524423535507" para las URLs
  const cleanPhone = portfolioData.personalInfo.phone.replace(/\D/g, '');

  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter text-gray-900">
          Carlos Guadalupe López Trejo
        </a>
        
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#education" className="hover:text-black transition-colors">Education</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-black transition-colors">Certifications</a>
          </div>
          
          <div className="flex gap-4 border-l pl-6 border-gray-200">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <FaGithub size={18} />
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-gray-500 hover:text-black transition-colors">
              <Mail size={18} />
            </a>
            {/* Ícono de WhatsApp */}
            <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <FaWhatsapp size={18} />
            </a>
            {/* Ícono de Teléfono Normal (Puedes borrar este bloque si decides dejar solo WhatsApp) 
            <a href={`tel:+${cleanPhone}`} className="text-gray-500 hover:text-black transition-colors">
              <Phone size={18} />
            </a>
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}