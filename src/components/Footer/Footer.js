import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { ISSUES_URL, LICENSE_URL, RELEASES_URL, REPO_URL } from '../../config';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Download', to: '/download' },
      { label: 'Setup guide', to: '/guide' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Source code', href: REPO_URL },
      { label: 'Releases', href: RELEASES_URL },
      { label: 'Report an issue', href: ISSUES_URL },
      { label: 'Apache 2.0 license', href: LICENSE_URL },
    ],
  },
];

const linkClass = 'text-sm text-muted transition-colors hover:text-ink';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight text-ink">MotionScroll</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Hands-free scrolling for Android. Free, open source, and private by design.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-medium text-ink">{column.title}</h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {currentYear} Cristian</p>
          <p>Made for busy hands.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
