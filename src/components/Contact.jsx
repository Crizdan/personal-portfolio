
import {
  SiGithub,
  SiWhatsapp,
  SiX,
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

import { MdOutlineEmail } from 'react-icons/md';

import './Contact.css';

const contactLinks = [
  {
    name: 'GitHub',
    description: 'Explore my projects and code.',
    url: 'https://github.com/Crizdan',
    label: 'Visit GitHub',
    icon: SiGithub,
    className: 'github-icon',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally.',
    url: 'https://www.linkedin.com/in/oluebubedaniel77/',
    label: 'Connect on LinkedIn',
    icon: FaLinkedin,
    className: 'linkedin-icon',
  },
  {
    name: 'WhatsApp',
    description: 'Send me a direct message.',
    url: 'https://wa.me/2349121436636',
    label: 'Message on WhatsApp',
    icon: SiWhatsapp,
    className: 'whatsapp-icon',
  },
  {
    name: 'X',
    description: 'Follow my learning and development journey.',
    url: 'https://x.com/crizdan77',
    label: 'Follow on X',
    icon: SiX,
    className: 'x-icon',
  },
];

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">

        <div className="contact-content">
          <span className="section-eyebrow">Get in touch</span>

          <h2 id="contact-title">
            Let's build something meaningful.
          </h2>

          <p className="contact-intro">
            I'm open to connecting with recruiters, mentors,
            developers and collaborators interested in software
            development, healthcare technology and AI in medical imaging.
          </p>

          <a
            href="mailto:danieloluebube777@gmail.com"
            className="contact-email-button"
          >
            <MdOutlineEmail aria-hidden="true" />
            <span>Send me an email</span>
            <span className="contact-button-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <p className="contact-email">
            danieloluebube777@gmail.com
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                href={link.url}
                className="contact-link-card"
                key={link.name}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-link-info">
                  <span className={`contact-icon ${link.className}`}>
                    <Icon aria-hidden="true" />
                  </span>

                  <div className="contact-link-text">
                    <h3>{link.name}</h3>
                    <p>{link.description}</p>
                  </div>
                </div>

                <span className="contact-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Contact;