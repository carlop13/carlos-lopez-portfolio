import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

export default function Hero() {
  const { name, role, location, about } = portfolioData.personalInfo;

  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh]" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
          Hi, I'm {name.split(' ')[0]}.
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl font-light">
          {role}
        </h2>
        
        <p className="text-base md:text-lg text-gray-500 max-w-3xl leading-relaxed mb-10">
          {about}
        </p>
        
        <div className="flex gap-4">
          <a href="#projects" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            View Work
          </a>
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:border-gray-900 transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}