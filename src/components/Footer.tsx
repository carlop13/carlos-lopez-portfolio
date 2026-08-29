import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="pt-24 pb-8 px-6 text-center bg-[#f8f9fa] mt-12">
      <div className="max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-[#1e3a8a] mb-4">Let's Work Together</h2>
        <p className="text-gray-500 mb-8">
          Have a project in mind? I'm currently available for new opportunities and collaborations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="bg-[#111827] text-white px-8 py-3 rounded-lg font-medium hover:bg-black transition-all text-sm">
            Email Me
          </a>
          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="bg-white border border-gray-300 text-[#111827] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm shadow-sm">
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-gray-200 pt-8 flex flex-col items-center justify-center gap-1">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}