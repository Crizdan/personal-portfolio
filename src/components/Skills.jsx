import './Skills.css';

const skillCategories = [
  {
    title: 'Programming',
    description:
      'Building a foundation in programming through practical problem-solving and application development.',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
  },
  {
    title: 'Web Development',
    description:
      'Understanding the fundamentals of building responsive and accessible web interfaces.',
    skills: [
      { name: 'HTML5', level: 'Working knowledge' },
      { name: 'CSS3', level: 'Working knowledge' },
      { name: 'React', level: 'Currently learning' },
    ],
  },
  {
    title: 'Backend Development',
    description:
      'Exploring server-side development, application architecture and communication between software systems.',
    skills: [
      { name: 'Flask', level: 'Practical experience' },
      { name: 'REST APIs', level: 'Foundational' },
      { name: 'Authentication', level: 'Foundational' },
      { name: 'Backend Architecture', level: 'Foundational' },
    ],
  },
  {
    title: 'Tools & Development Workflow',
    description:
      'Using development tools and version control to organise code and manage software projects.',
    skills: [
      { name: 'Git', level: 'Developing' },
      { name: 'GitHub', level: 'Developing' },
      { name: 'VS Code', level: 'Working knowledge' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Developing an understanding of artificial intelligence and its potential applications in healthcare.',
    skills: [
      { name: 'Machine Learning Concepts', level: 'Foundational' },
      { name: 'Deep Learning Concepts', level: 'Foundational' },
      { name: 'Convolutional Neural Networks', level: 'Foundational' },
    ],
  },
  {
    title: 'Healthcare & Medical Imaging',
    description:
      'Combining academic Radiography knowledge with supervised clinical exposure and an interest in healthcare technology.',
    skills: [
      { name: 'Radiography', level: 'Academic knowledge' },
      { name: 'Medical Imaging', level: 'Academic knowledge' },
      { name: 'Clinical Workflows', level: 'Clinical exposure' },
    ],
  },
];

function Skills() {
  return (
    <section
      className="skills-section section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">What I work with</span>

          <h2 id="skills-title">Skills & Technologies</h2>

          <p>
            A growing combination of technical skills, software
            development knowledge and healthcare experience.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article className="skill-card" key={category.title}>
              <span className="skill-card-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{category.title}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>

                    <span className="skill-level">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;