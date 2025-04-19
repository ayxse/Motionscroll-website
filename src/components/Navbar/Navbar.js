import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Remove CSS import

function Navbar() {
  return (
    <nav className="w-full max-w-4xl"> 
      <ul className="flex justify-center space-x-12"> {/* Even more spacing */}
        {/* Even larger font size and padding */}
        <li><Link to="/" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Home</Link></li>
        <li><Link to="/download" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Download</Link></li>
        <li><Link to="/about" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
