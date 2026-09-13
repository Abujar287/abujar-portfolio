import React from 'react'

const skills = [
  'SQL & Database Analysis',
  'Business Intelligence',
  'Advanced Excel',
  'Python & Pandas',
  'Dashboard & KPI Reporting',
  'CRM & CLM Analytics'
]

const projects = [
  {
    title: 'Telesales Lead Management',
    text: 'Lead allocation, cohort analysis, customer segmentation and performance monitoring for telesales operations.',
    tags: ['SQL', 'Excel', 'Google Sheets', 'BI']
  },
  {
    title: 'Operational KPI Dashboard',
    text: 'Live monitoring of Acquisition, Retention, KAM, DQM and Back Office performance with actionable KPIs.',
    tags: ['SQL', 'BI', 'Dashboard', 'KPI']
  },
  {
    title: 'Payroll & Attendance Automation',
    text: 'Automated payroll, attendance and utilization reporting to reduce repetitive manual reporting work.',
    tags: ['Excel', 'Python', 'Automation']
  }
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">AA</div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk
        </a>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">DATA ANALYST • BUSINESS INTELLIGENCE</p>

            <h1>
              Turning data into <span>business insights.</span>
            </h1>

            <p className="hero-text">
              Data & Business Insights Analyst with nearly 5 years of experience
              in Business Intelligence, Data Analytics, Reporting Automation and
              Operational Performance Analysis.
            </p>

            <div className="buttons">
              <a className="primary-button" href="#projects">
                View Projects
              </a>

              <a
                className="secondary-button"
                href="/Abujar-Al-Gifari-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>

            <div className="links">
              <a href="mailto:your-email@example.com">Email</a>

              <a
                href="https://www.linkedin.com/in/abujar-al-gifari/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Abujar287"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="profile-card">
            <p>ANALYTICS PROFILE</p>

            <div>
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>SQL</strong>
              <span>Database Analysis</span>
            </div>

            <div>
              <strong>BI</strong>
              <span>Dashboard & Insights</span>
            </div>

            <div>
              <strong>CRM</strong>
              <span>Customer Analytics</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT ME</p>

          <h2>Data-driven thinking with an operational mindset.</h2>

          <p className="section-text">
            I work with business data to identify trends, monitor KPIs,
            automate reporting and help teams make better operational
            decisions. My core toolkit includes SQL, Advanced Excel, Python,
            BI dashboards and spreadsheet automation.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">CORE EXPERTISE</p>

          <h2>Tools I use to solve business problems.</h2>

          <div className="skill-grid">
            {skills.map(skill => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">SELECTED WORK</p>

          <h2>Projects & analytics work.</h2>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>

                <p>{project.text}</p>

                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">EXPERIENCE</p>

          <h2>Professional journey.</h2>

          <div className="experience">
            <p>Nov 2023 — Present</p>

            <div>
              <h3>Senior Officer — Data & Analytics</h3>

              <h4>sheba.xyz Service Ltd. (SSL)</h4>

              <p>
                Business data insights, SQL/Python reporting, BI dashboards,
                telesales and KAM KPI tracking, customer cohort analysis,
                lead optimization and operational reporting automation.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">GET IN TOUCH</p>

          <h2>Let's turn your data into decisions.</h2>

          <p>
            Open to analytics, BI, reporting and data-driven business
            opportunities.
          </p>

          <a className="primary-button" href="mailto:your-email@example.com">
            Contact Me
          </a>
        </section>
      </main>

      <footer>
        <span>© 2026 Abujar Al-Gifari</span>
        <span>Data Analyst | BI | SQL | Excel | Python | CRM & CLM</span>
      </footer>
    </div>
  )
}

export default App
