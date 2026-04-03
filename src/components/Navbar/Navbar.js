import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/guide', label: 'Guide' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav className="select-none flex items-center gap-1 relative">
      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-0.5">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`relative text-sm font-medium transition-colors duration-150 px-3 py-1.5 rounded-md
                ${isActive(to)
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                }`}
            >
              {label}
              {isActive(to) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-px bg-violet-400/70 rounded-full" />
              )}
            </Link>
          </li>
        ))}
        <li className="ml-3">
          <Link
            to="/download"
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-lg border transition-all duration-150
              ${isActive('/download')
                ? 'bg-white/12 text-white border-white/25'
                : 'bg-transparent text-gray-300 border-white/15 hover:bg-white/8 hover:text-white hover:border-white/25'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
              <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
            Download
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-2">
        <Link
          to="/download"
          className="inline-flex items-center px-3 py-1.5 bg-transparent text-gray-300 hover:text-white text-xs font-medium rounded-lg border border-white/15 hover:border-white/25 hover:bg-white/8 transition-all duration-150"
        >
          Download
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-400 hover:text-white p-1.5 rounded-md hover:bg-white/8 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full right-0 mt-2 w-44 bg-[#0f0f0f] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/60 py-1.5 z-50 md:hidden">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                ${isActive(to)
                  ? 'text-white bg-white/5'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {label}
              {isActive(to) && (
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
