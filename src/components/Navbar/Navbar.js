import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { CloseIcon, DownloadIcon, GitHubIcon, MenuIcon } from '../ui/Icons';
import { REPO_URL } from '../../config';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/guide', label: 'Setup guide' },
  { to: '/about', label: 'About' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors duration-200 ${
        solid ? 'border-line bg-canvas/85 backdrop-blur-xl' : 'border-transparent bg-canvas'
      }`}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex items-center gap-2.5 justify-self-start rounded-lg">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight text-ink">MotionScroll</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  aria-current={isActive(to) ? 'page' : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive(to) ? 'bg-subtle font-medium text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 justify-self-end">
          <Button
            href={REPO_URL}
            external
            variant="ghost"
            size="icon"
            aria-label="MotionScroll on GitHub"
            className="hidden md:inline-flex"
          >
            <GitHubIcon />
          </Button>
          <Button to="/download" size="sm" className="ml-1">
            <DownloadIcon strokeWidth={2} />
            Download
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="-mr-2 ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-subtle md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-fade-in border-t border-line px-5 pb-6 pt-3 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  aria-current={isActive(to) ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-line py-3.5 text-[17px] ${
                    isActive(to) ? 'font-medium text-ink' : 'text-muted'
                  }`}
                >
                  {label}
                  {isActive(to) && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3.5 text-[17px] text-muted"
              >
                GitHub
                <GitHubIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
