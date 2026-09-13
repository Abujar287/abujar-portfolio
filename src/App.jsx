<section id="skills" className="section expertise-section">
  <div className="section-title">
    <h2>Core Expertise</h2>
  </div>

  <div className="expertise-intro">
    <p>
      Data, technology and business expertise combined to build
      smarter decisions and scalable solutions.
    </p>
  </div>

  <div className="expertise-showcase">
    {expertiseGroups.map((group, index) => (
      <article
        className="expertise-item"
        key={group.number}
        style={{ '--delay': `${index * 0.12}s` }}
      >
        <div className="expertise-index">
          {group.number}
        </div>

        <div className="expertise-main">
          <div className="expertise-heading">
            <h3>{group.title}</h3>
            <span className="expertise-icon">↗</span>
          </div>

          <p>{group.description}</p>

          <div className="expertise-skills">
            {group.skills.map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>
