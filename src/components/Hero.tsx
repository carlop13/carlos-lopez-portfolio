import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

export default function Hero() {
    const { location } = portfolioData.personalInfo;
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[85vh]" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        
        <motion.div 
          className="md:w-3/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
            <MapPin size={16} />
            <span>{location}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#111827] mb-4 leading-tight">
            Software <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2e3192] to-[#833ab4]">
              Engineer
            </span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            I help businesses transform complex problems into robust, scalable full-stack and mobile solutions that drive growth and efficiency.
          </p>
          
          <div className="flex gap-4">
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="bg-[#111827] text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-all flex items-center gap-2 text-sm">
              Work with me &rarr;
            </a>
            <a href="#projects" className="bg-white border border-gray-300 text-[#111827] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm shadow-sm">
              View my work
            </a>
          </div>

          {/* Sección de Tutor de Español - Versión Atractiva */}
          <a 
            href="https://preply.in/CARLOS6ES35033490102?ts=17896940" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 hover:border-indigo-200 hover:shadow-md transition-all w-fit group"
          >
            <span className="text-xl">🇲🇽</span>
            <span className="text-sm font-medium text-gray-700">
              I'm a Spanish teacher too! 
              <span className="text-[#2e3192] font-bold ml-1.5 group-hover:underline">
                Visit my profile
              </span>
            </span>
            <span className="text-[#2e3192] group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
        </motion.div>

        <motion.div 
          className="md:w-2/5 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src="/foto-circulo.jpeg" 
            alt={portfolioData.personalInfo.name} 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}