import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-12 px-4 bg-gray-900/20 border-t border-gray-800/50 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Links Section */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a 
            href="https://github.com/ayxse/MotionScroll" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white font-inter font-medium transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="https://www.apache.org/licenses/LICENSE-2.0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white font-inter font-medium transition-colors duration-200"
          >
            Apache License
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-500 font-inter text-sm">
          © {currentYear} Cristian. Open source • Privacy policy
        </p>
      </div>
    </footer>
  );
}

export default Footer; 