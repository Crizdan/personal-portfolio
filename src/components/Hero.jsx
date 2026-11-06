
import './Hero.css';
import profilePhoto from '../assets/profile-photo.jpg';
import { useEffect, useState } from 'react';

const roles = [
    'A Radiography Student',
    'An Aspiring Software Developer',
    'A Healthcare Technology Enthusiast',
    'An Enthusiast in AI for Medical Imaging'
]

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
    const currentRole = roles[roleIndex];

    // Respect users who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setDisplayedText(roles[0]);
        return;
    }

    let timeout;

    if (!isDeleting && displayedText === currentRole) {
        // Pause when the complete description is displayed.
        timeout = setTimeout(() => {
        setIsDeleting(true);
        }, 1600);
    } else if (isDeleting && displayedText === '') {
        // Move to the next description.
        setIsDeleting(false);
        setRoleIndex((previousIndex) =>
        (previousIndex + 1) % roles.length
        );
    } else {
        // Type or erase one character.
        timeout = setTimeout(() => {
        setDisplayedText((previousText) =>
            isDeleting
            ? previousText.slice(0, -1)
            : currentRole.slice(0, previousText.length + 1)
        );
        }, isDeleting ? 45 : 85);
    }

    return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, roleIndex]);
  return (
    <section
      className="hero container"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">

        <p className="hero-eyebrow">
          HELLO, I'M
        </p>

        <h1 id="hero-title" className="hero-name">
          CrizDan<span>.</span>
        </h1>

        <p className="hero-full-name">
          Oluebube Daniel Hillary
        </p>

        <p className="hero-role">
    <span>I'm  </span>

    <span className="typed-role" aria-hidden="true">
        {displayedText}
    </span>

    <span className="typing-cursor" aria-hidden="true">
        |
    </span>

    <span className="visually-hidden">
        Radiography student and aspiring software developer.
    </span>
    </p>

        <h2 className="hero-headline">
          Turning real-world problems into practical software.
        </h2>

        <p className="hero-description">
          I'm a Radiography student and aspiring software
          developer interested in creating practical solutions
          to real-world problems. My healthcare background
          shapes my approach to technology, with a growing
          interest in healthcare software and AI applications
          in medical imaging.
        </p>

        <div className="hero-tags">
          <span>Radiography</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>Healthcare Technology</span>
        </div>

        <div className="hero-availability">
          <span className="availability-dot"></span>

          <p>
            Open to internships, collaborations and
            entry-level opportunities.
          </p>
        </div>

        <div className="hero-actions">
          <a
            href="#projects"
            className="hero-button primary-button"
          >
            Explore my projects
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="#contact"
            className="hero-button secondary-button"
          >
            Let's connect
          </a>
        </div>

      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img
            src={profilePhoto}
            alt="Oluebube Daniel Hillary"
            className="hero-image"
          />
        </div>

        <p className="hero-image-caption">
          Healthcare Domain Knowledge. Technical Innovation.
        </p>
      </div>
    </section>
  );
}

export default Hero;