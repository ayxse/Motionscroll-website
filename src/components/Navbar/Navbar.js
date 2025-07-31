import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="select-none">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8">
        <li><Link to="/" className="text-gray-400 hover:text-white font-inter font-medium transition-colors duration-200">Home</Link></li>
        <li><Link to="/download" className="text-gray-400 hover:text-white font-inter font-medium transition-colors duration-200">Download</Link></li>
        <li><Link to="/guide" className="text-gray-400 hover:text-white font-inter font-medium transition-colors duration-200">Guide</Link></li>
        <li><Link to="/about" className="text-gray-400 hover:text-white font-inter font-medium transition-colors duration-200">About</Link></li>
      </ul>
      
      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul className="flex items-center space-x-2 sm:space-x-3">
          <li><Link to="/" className="text-gray-400 hover:text-white text-xs sm:text-sm font-inter font-medium transition-colors duration-200">Home</Link></li>
          <li><Link to="/download" className="text-gray-400 hover:text-white text-xs sm:text-sm font-inter font-medium transition-colors duration-200">Download</Link></li>
          <li><Link to="/guide" className="text-gray-400 hover:text-white text-xs sm:text-sm font-inter font-medium transition-colors duration-200">Guide</Link></li>
          <li><Link to="/about" className="text-gray-400 hover:text-white text-xs sm:text-sm font-inter font-medium transition-colors duration-200">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;