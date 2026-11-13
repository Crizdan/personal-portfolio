
import './Languages.css';

const languages = [
  {
    name: 'English',
    proficiency: 'Fluent',
    description: 'Professional communication and technical learning.',
    level: 'Fluent',
  },
  {
    name: 'German',
    proficiency: 'Elementary (A2)',
    description: 'Currently learning, with a focus on everyday communication.',
    level: 'A2',
  },
];

function Languages() {
  return (
    <section
      className="languages-section"
      id="languages"
      aria-labelledby="languages-title"
    >
      <div className="container">
        <div className="languages-heading">
          <span className="section-eyebrow">Communication</span>
          <h2 id="languages-title">Languages</h2>
          <p>
            Languages I use in communication and continue
            developing as part of my personal growth.
          </p>
        </div>

        <div className="languages-grid">
          {languages.map((language) => (
            <article className="language-card" key={language.name}>
              <div className="language-card-top">
                <h3>{language.name}</h3>
                <span className="language-level">
                  {language.level}
                </span>
              </div>

              <p className="language-proficiency">
                {language.proficiency}
              </p>

              <p className="language-description">
                {language.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;