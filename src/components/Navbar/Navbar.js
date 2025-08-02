import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="select-none py-2 px-3 rounded bg-white/2 backdrop-blur-sm border border-gray-700/20">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-2">
        <li><Link to="/" className="text-gray-400 hover:text-white font-inter font-thin transition-all duration-200 px-3 py-1 rounded hover:bg-white/10">Home</Link></li>
        <li><Link to="/download" className="text-gray-400 hover:text-white font-inter font-thin transition-all duration-200 px-3 py-1 rounded hover:bg-white/10">Download</Link></li>
        <li><Link to="/guide" className="text-gray-400 hover:text-white font-inter font-thin transition-all duration-200 px-3 py-1 rounded hover:bg-white/10">Guide</Link></li>
        <li><Link to="/about" className="text-gray-400 hover:text-white font-inter font-thin transition-all duration-200 px-3 py-1 rounded hover:bg-white/10">About</Link></li>
      </ul>
      
      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul className="flex items-center space-x-2">
          <li><Link to="/download" className="text-gray-400 hover:text-white text-sm font-inter font-thin transition-all duration-200 px-2 py-1 rounded hover:bg-white/10">Download</Link></li>
          <li><Link to="/guide" className="text-gray-400 hover:text-white text-sm font-inter font-thin transition-all duration-200 px-2 py-1 rounded hover:bg-white/10">Guide</Link></li>
          <li><Link to="/about" className="text-gray-400 hover:text-white text-sm font-inter font-thin transition-all duration-200 px-2 py-1 rounded hover:bg-white/10">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;