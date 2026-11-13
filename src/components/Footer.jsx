
import {
  SiGithub,
  SiX,
} from 'react-icons/si';

import { FaLinkedinIn } from 'react-icons/fa6';

import darkFullLogo from '../assets/branding/crizdan-full-logo-dark-web-optimized.png';
import lightFullLogo from '../assets/branding/crizdan-full-logo-light-web-optimized.png';

import './Footer.css';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Languages', href: '#languages' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Crizdan',
    icon: SiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/oluebubedaniel77/',
    icon: FaLinkedinIn,
  },
  {
    name: 'X',
    url: 'https://x.com/crizdan77',
    icon: SiX,
  },
];

function Footer({ theme }) {
  const footerLogo = theme === 'dark' ? darkFullLogo : lightFullLogo;

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src={footerLogo} alt="CrizDan — Code, Innovate, Impact" />
            </a>

            <p>
              Radiography student and aspiring software developer
              interested in healthcare technology and AI in medical imaging.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <nav aria-label="Footer navigation">
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer-social">
            <h3>Connect</h3>

            <div className="footer-social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    href={social.url}
                    key={social.name}
                    aria-label={`Visit my ${social.name} profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:danieloluebube777@gmail.com"
              className="footer-email"
            >
              danieloluebube777@gmail.com
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} CrizDan.
            All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;