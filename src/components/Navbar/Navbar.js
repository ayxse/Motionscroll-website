import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked (optional but good UX)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full max-w-4xl relative"> {/* Added relative positioning */}
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center space-x-12"> {/* Hide on small screens, flex on medium+ */}
        <li><Link to="/" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Home</Link></li>
        <li><Link to="/download" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Download</Link></li>
        <li><Link to="/guide" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">Guide</Link></li>
        <li><Link to="/about" className="text-gray-400 hover:text-gray-100 px-4 py-3 rounded-md text-base font-medium transition duration-150 ease-in-out">About</Link></li>
      </ul>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex justify-end px-4"> {/* Show only on small screens, align right */}
        <button
          onClick={toggleMenu}
          className="text-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md"
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // Close icon (X)
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 backdrop-blur-sm shadow-lg rounded-b-md z-20"> {/* Show only on small screens when open */}
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li><Link to="/" onClick={closeMenu} className="block text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out w-full text-center">Home</Link></li>
            <li><Link to="/download" onClick={closeMenu} className="block text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out w-full text-center">Download</Link></li>
            <li><Link to="/guide" onClick={closeMenu} className="block text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out w-full text-center">Guide</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="block text-gray-300 hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out w-full text-center">About</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
