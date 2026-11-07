
import './Projects.css';

const projects = [
  {
    number: '01',
    name: 'Radiography Student Toolkit',
    category: 'Healthcare Technology',
    status: 'Python Prototype',

    description:
      'A Python-based application developed to provide Radiography students with practical tools for clinical learning and examination preparation.',

    problem:
      'During my clinical training, I recognised the need for accessible tools that could support Radiography students with common calculations, contrast procedure references and exposure-factor information.',

    contribution:
      'Identified the problem through my Radiography training and independently developed Python functions and modules for the implemented toolkit features.',

    highlights: [
      'BMI Calculator',
      'eGFR Calculator',
      'Contrast Procedure Reference',
      'Exposure-Factor Support',
    ],

    technologies: ['Python'],

    future:
      'Planned transition into a React-based web application after strengthening my JavaScript and React development skills.',

    github: 'https://github.com/Crizdan/Radiography_Student_Toolkit',
  },

  {
    number: '02',
    name: 'OfflineNaira',
    category: 'Mobile Application · Team Project',
    status: 'MVP Developed',

    description:
      'A mobile application exploring offline peer-to-peer transaction-data transfer using Bluetooth to address challenges caused by network disruptions.',

    problem:
      'Network outages can interrupt digital payment processes, making it difficult for people to complete transactions when connectivity is unavailable.',

    contribution:
      'Contributed to application screens and features, worked with the team on the MVP, and implemented and tested Bluetooth communication between physical Android devices. AI tools were also used during development.',

    highlights: [
      'Offline transaction-data transfer concept',
      'Bluetooth device-to-device communication',
      'Android device testing',
      'Mobile application development',
    ],

    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Kotlin',
    ],

    note:
      'This is an MVP exploring offline transaction-data transfer. It does not currently perform real bank payment settlement.',

    github: 'https://github.com/Crizdan/OfflineNaira',
  },
];

function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">

        <div className="projects-heading">
          <span className="section-eyebrow">
            What I've been building
          </span>

          <h2 id="projects-title">
            Featured Projects
          </h2>

          <p>
            Practical projects driven by real-world problems,
            continuous learning and an interest in building
            useful software.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-detail">
                <h4>The problem</h4>
                <p>{project.problem}</p>
              </div>

              <div className="project-detail">
                <h4>My contribution</h4>
                <p>{project.contribution}</p>
              </div>

              <div className="project-highlights">
                <h4>
                  {project.number === '01'
                    ? 'Implemented Features'
                    : 'Project Highlights'}
                </h4>

                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies</h4>

                <div className="technology-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {project.future && (
                <div className="project-note">
                  <h4>What's next?</h4>
                  <p>{project.future}</p>
                </div>
              )}

              {project.note && (
                <p className="project-disclaimer">
                  {project.note}
                </p>
              )}

              {project.github && (
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View source code
                  <span aria-hidden="true">↗</span>
                </a>
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;