import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto py-6 px-4 bg-gray-900/50 border-t border-gray-700/50 text-center text-gray-500 text-sm">
      {/* Links Section */}
      <div className="flex justify-center items-center space-x-4 mb-3">
        <a 
          href="https://github.com/ayxse/MotionScroll" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-300 hover:underline transition-colors"
        >
          GitHub Repository
        </a>
        <span>|</span> {/* Separator */}
        <a 
          href="https://www.apache.org/licenses/LICENSE-2.0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-300 hover:underline transition-colors"
        >
          Apache Licensed 2.0
        </a>
      </div>

      {/* Copyright Section */}
      <p>
        &copy; {currentYear} MotionScroll.
      </p>
    </footer>
  );
}

export default Footer; 