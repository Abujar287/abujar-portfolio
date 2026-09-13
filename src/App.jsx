import React from 'react'

const skills = [
  'Data Analysis & Business Intelligence',
  'SQL & Database Analysis',
  'Query Optimization',
  'Advanced Excel & Google Sheets',
  'Python Data Processing (Pandas)',
  'Dashboard Development',
  'KPI & Performance Analytics',
  'Business Process Automation',
  'Operational Reporting & MIS',
  'Customer Cohort Analysis',
  'Lead Management & Optimization',
  'Call Center & CX Analytics'
]

const tools = [
  'SQL',
  'Advanced Excel',
  'Python',
  'Pandas',
  'Metabase',
  'Apache Superset',
  'DBGate',
  'Google Sheets',
  'MySQL'
]

const projects = [
  {
    title: 'Telesales Lead Management',
    text: 'Developed Google Sheets-based lead management automation for 70+ agents, improving lead tracking, allocation and operational efficiency.',
    tags: ['Google Sheets', 'SQL', 'Automation']
  },
  {
    title: 'Operational Performance Dashboards',
    text: 'Built dashboards and automated reports for Call Center, DQM, Back Office, Complaint Management and QAT teams.',
    tags: ['SQL', 'BI', 'Dashboard', 'KPI']
  },
  {
    title: 'Payroll & Attendance Automation',
    text: 'Automated payroll, attendance and agent utilization reporting to reduce repetitive manual work and improve reporting accuracy.',
    tags: ['Excel', 'Python', 'Automation']
  },
  {
    title: 'Calling System Implementation',
    text: 'Implemented Gplex, Cube and Pendulum calling systems and related operational processes for telesales activities.',
    tags: ['Operations', 'Telesales', 'Process']
  }
]

const experiences = [
  {
    date: 'Nov 2023 — Present',
    role: 'Senior Officer — Data & Analytics',
    company: 'sheba.xyz Service Ltd.',
    points: [
      'Analyzed business data and delivered actionable insights to support business decision-making.',
      'Developed automated dashboards and operational reports using SQL, Python and BI tools.',
      'Monitored telesales and KAM performance through KPI tracking and performance analytics.',
      'Performed customer cohort analysis and lead optimization to improve campaign effectiveness.',
      'Tracked operational performance across Call Center, DQM, Back Office, Complaint Management and QAT teams.',
      'Automated payroll, attendance and agent utilization reporting processes.',
      'Optimized SQL queries and reporting workflows to improve data processing efficiency.'
    ]
  },
  {
    date: 'Sep 2021 — Oct 2023',
    role: 'Junior Data Analyst',
    company: 'Chaldal PLC',
    points: [
      'Created performance dashboards and operational reports for business monitoring.',
      'Automated reporting processes and analyzed business data to improve operational efficiency.',
      'Managed product pricing, mapping and inventory-related analysis.',
      'Identified data gaps and provided insights to support business decisions.'
    ]
  },
  {
    date: 'Mar 2021 — Aug 2021',
    role: 'Academic Counselor',
    company: 'Shikho PLC',
    points: [
      'Guided students and parents regarding academic programs.',
      'Managed customer communication and enrollment activities.',
      'Supported sales operations through effective customer engagement.'
    ]
  }
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#">AA</a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">DATA ANALYST • BUSINESS INTELLIGENCE</p>

            <h1>
              ABUJAR <span>AL-GIFARI</span>
            </h1>

            <h2>
              Data Analyst | Business Intelligence | Excel, SQL & Python | CRM & CLM
            </h2>

            <p className="hero-text">
              Data & Business Insights Analyst with nearly 5 years of experience
              in Business Intelligence, Data Analytics, Reporting Automation,
              and Operational Performance Analysis.
            </p>

            <p className="hero-text">
              I transform complex data into actionable insights, optimize
              business processes and build automated reporting solutions to
              support data-driven decision-making.
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

              <a href="mailto:abujar287.algifari@gmail.com">
                Email
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
              <span>Business Intelligence</span>
            </div>

            <div>
              <strong>Excel</strong>
              <span>Advanced Analytics</span>
            </div>

            <div>
              <strong>CRM</strong>
              <span>Customer Analytics</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">PROFESSIONAL SUMMARY</p>

          <h2>Turning data into actionable business insights.</h2>

          <p className="section-text">
            Data & Business Insights Analyst with nearly 5 years of experience
            in Business Intelligence, Data Analytics, Reporting Automation,
            and Operational Performance Analysis.
          </p>

          <p className="section-text">
            Experienced in SQL, Advanced Excel, Python, BI tools and reporting
            automation to transform complex data into actionable insights,
            optimize business processes and support data-driven decisions.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">CORE EXPERTISE</p>

          <h2>What I work with.</h2>

          <div className="skill-grid">
            {skills.map(skill => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>

          <div className="tools">
            <h3>Technical Tools</h3>

            <div className="tags">
              {tools.map(tool => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>

          <h2>My professional journey.</h2>

          <div className="timeline">
            {experiences.map(experience => (
              <article className="experience" key={experience.role}>
                <div className="experience-date">
                  {experience.date}
                </div>

                <div className="experience-content">
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>

                  <ul>
                    {experience.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">KEY PROJECTS</p>

          <h2>Analytics & process improvements.</h2>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{projects.indexOf(project) + 1}
                </div>

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

        <section className="section achievements">
          <p className="eyebrow">KEY ACHIEVEMENTS</p>

          <h2>Impact through automation & analytics.</h2>

          <div className="achievement-grid">
            <div>
              <strong>70+</strong>
              <span>Telesales agents supported through lead automation</span>
            </div>

            <div>
              <strong>3.0M+</strong>
              <span>NR achieved during manual business operations</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Years of data & business analytics experience</span>
            </div>

            <div>
              <strong>4+</strong>
              <span>Major operational areas supported</span>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <p className="eyebrow">ACADEMIC QUALIFICATIONS</p>

          <h2>Education.</h2>

          <div className="education-grid">
            <article className="education-card">
              <span>B.Sc.</span>
              <h3>Bachelor of Science in Botany</h3>
              <p>Jashore Govt. City College</p>
              <small>National University</small>
              <strong>CGPA: 2.99 / 4.00</strong>
            </article>

            <article className="education-card">
              <span>H.S.C.</span>
              <h3>Higher Secondary Certificate — Science</h3>
              <p>Raipur School & College, Jashore</p>
              <strong>GPA: 3.50 / 5.00</strong>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">GET IN TOUCH</p>

          <h2>Let's turn data into decisions.</h2>

          <p>
            Open to opportunities in Data Analytics, Business Intelligence,
            Reporting, Automation and data-driven business operations.
          </p>

          <div className="buttons">
            <a className="primary-button" href="mailto:abujar287.algifari@gmail.com">
              Contact Me
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/abujar-al-gifari/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Abujar Al-Gifari</span>
        <span>Data Analyst • BI • SQL • Excel • Python • CRM & CLM</span>
      </footer>
    </div>
  )
}

export default App
