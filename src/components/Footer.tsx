import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-gray-100 bg-gray-50">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}