import { Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter text-gray-900">
          CL.
        </a>
        
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
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
          </div>
        </div>
      </div>
    </nav>
  );
}