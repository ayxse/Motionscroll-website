import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-white/[0.06] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Brand */}
        <div className="flex items-center gap-2 text-gray-500">
          <span className="font-medium text-gray-400">MotionScroll</span>
          <span>·</span>
          <span>© {currentYear} Cristian</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-gray-500">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/guide" className="hover:text-gray-300 transition-colors">Guide</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <a
            href="https://github.com/ayxse/MotionScroll"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors inline-flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.236-.009-.866-.014-1.699-2.782.602-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.548 9.548 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.392.1 2.646.64.701 1.026 1.593 1.026 2.682 0 3.842-2.338 4.687-4.566 4.935.359.307.679.917.679 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Apache 2.0
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
