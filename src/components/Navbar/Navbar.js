import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full max-w-4xl">
      {/* Desktop Menu - show on medium screens and above */}
      <ul className="hidden md:flex justify-center space-x-12">
        <li><Link to="/" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Home</Link></li>
        <li><Link to="/download" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Download</Link></li>
        <li><Link to="/guide" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Guide</Link></li>
        <li><Link to="/about" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">About</Link></li>
      </ul>
      
      {/* Mobile Menu - always visible on small screens */}
      <div className="md:hidden">
        <ul className="flex justify-center space-x-4 pt-1">
          <li><Link to="/" className="text-gray-300 hover:text-white text-sm px-2 py-1">Home</Link></li>
          <li><Link to="/download" className="text-gray-300 hover:text-white text-sm px-2 py-1">Download</Link></li>
          <li><Link to="/guide" className="text-gray-300 hover:text-white text-sm px-2 py-1">Guide</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-white text-sm px-2 py-1">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;