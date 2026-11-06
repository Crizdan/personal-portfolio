
import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">

        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          CrizDan<span>.</span>
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

      </nav>
    </header>
  );
}

export default Navbar;