
import './About.css';

const focusAreas = [
  {
    number: '01',
    title: 'Software Development',
    description:
      'Building a strong foundation in programming and developing practical applications using Python and JavaScript.',
  },
  {
    number: '02',
    title: 'Healthcare Technology',
    description:
      'Exploring how thoughtfully designed software can improve healthcare education, clinical workflows and access to useful information.',
  },
  {
    number: '03',
    title: 'AI in Medical Imaging',
    description:
      'Developing an understanding of artificial intelligence and its potential applications in medical imaging and Radiography.',
  },
];

function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container">

        <div className="about-heading">
          <p className="section-eyebrow">GET TO KNOW ME</p>

          <h2 id="about-title">
            Where healthcare meets technology.
          </h2>
        </div>

        <div className="about-layout">

          <div className="about-story">
            <p>
              I'm <strong>Oluebube Daniel Hillary</strong>,
              known as <strong>CrizDan</strong>. I'm a
              Radiography student at Nnamdi Azikiwe University
              with a growing interest in software development
              and healthcare technology.
            </p>

            <p>
              My interest in software development comes from
              wanting to do more than identify problems. I want
              to understand how technology can help solve them.
            </p>

            <p>
              As I progressed through my Radiography training,
              I became increasingly interested in how software
              could support healthcare education, clinical
              workflows and medical practice. This curiosity
              led me to begin learning programming and building
              practical projects.
            </p>

            <p>
              I'm currently developing my skills in Python
              and JavaScript, exploring web development, and
              working towards a long-term goal of contributing
              to healthcare technology and AI applications in
              medical imaging.
            </p>
          </div>

          <div className="about-focus">

            <h3>What I'm focused on</h3>

            <div className="focus-list">
              {focusAreas.map((area) => (
                <article
                  className="focus-card"
                  key={area.number}
                >
                  <span className="focus-number">
                    {area.number}
                  </span>

                  <div>
                    <h4>{area.title}</h4>
                    <p>{area.description}</p>
                  </div>
                </article>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;