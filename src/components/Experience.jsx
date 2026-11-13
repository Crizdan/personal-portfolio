
import './Experience.css';

const experiences = [
  {
    number: '01',
    category: 'Clinical Experience',
    title: 'Radiography Clinical Posting',
    organisation: 'Nnamdi Azikiwe University Teaching Hospital',
    period: 'Three months',
    description:
      'Completed a supervised clinical posting at Nnamdi Azikiwe University Teaching Hospital, Akamili, gaining practical exposure to the clinical environment and Radiography workflows.',
    highlights: [
      'Exposure to clinical imaging workflows and Radiography practice.',
      'Observation and learning within a supervised clinical environment.',
      'Connecting academic Radiography knowledge with clinical practice.',
    ],
    type: 'Clinical Training',
  },
  {
    number: '02',
    category: 'Community Contribution',
    title: 'AI Club Volunteer',
    organisation: 'Python Learning & Peer Teaching',
    period: 'Volunteer contribution',
    description:
      'Contribute to a learning community by helping others develop their understanding of Python programming.',
    highlights: [
      'Sharing Python programming knowledge.',
      'Supporting other learners in understanding programming concepts.',
      'Developing communication and technical explanation skills.',
    ],
    type: 'Volunteering',
  },
  {
    number: '03',
    category: 'Continuous Learning',
    title: 'AI in Medical Imaging',
    organisation: 'Independent Learning & Educational Activities',
    period: 'Ongoing',
    description:
      'Exploring how artificial intelligence and machine learning can contribute to medical imaging and healthcare practice.',
    highlights: [
      'Learning foundational machine learning and deep learning concepts.',
      'Exploring convolutional neural networks and their imaging applications.',
      'Participating in educational activities covering AI in Radiography and medical imaging.',
    ],
    type: 'Professional Development',
  },
];

function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="experience-heading">
          <span className="section-eyebrow">
            Beyond the code
          </span>

          <h2 id="experience-title">
            Experience & Contributions
          </h2>

          <p>
            Experiences, learning activities and contributions
            shaping my journey across Radiography, software
            development and healthcare technology.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.number}
            >
              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-content">
                <div className="experience-meta">
                  <span className="experience-category">
                    {experience.category}
                  </span>

                  <span className="experience-type">
                    {experience.type}
                  </span>
                </div>

                <h3>{experience.title}</h3>

                <div className="experience-organisation">
                  {experience.organisation}
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;