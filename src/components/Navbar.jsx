
import { useState } from 'react';
import './Navbar.css';
import { FiSun, FiMoon } from 'react-icons/fi';

import darkLogo from '../assets/branding/crizdan-cd-icon-dark-web-optimized.png';
import lightLogo from '../assets/branding/crizdan-cd-icon-light-web-optimized.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Languages', href: '#languages' },
  { name: 'Contact', href: '#contact' },
];

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  const logo = theme === 'dark' ? darkLogo : lightLogo;

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">

        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="" aria-hidden="true" />
          <span>CrizDan<span className="brand-dot">.</span></span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="navigation-links"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;