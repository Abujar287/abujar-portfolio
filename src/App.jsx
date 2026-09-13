import React, { useEffect, useState } from 'react'

const skills = [
  'Data Analysis & Business Intelligence',
  'SQL & Database Analysis',
  'Query Optimization',
  'Advanced Excel & Google Sheets',
  'Python Data Processing',
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
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <header className="navbar">
        <a className="logo" href="#home">
          AA
        </a>

        <nav>
          {[
            ['home', 'Home'],
            ['about', 'About'],
            ['skills', 'Skills'],
            ['experience', 'Experience'],
            ['projects', 'Projects'],
            ['education', 'Education'],
            ['contact', 'Contact']
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow reveal">
              DATA ANALYST • BUSINESS INTELLIGENCE
            </p>

            <h1 className="hero-title reveal">
              ABUJAR <span>AL-GIFARI</span>
            </h1>

            <h2 className="hero-subtitle reveal">
              Data Analyst | Business Intelligence | Excel, SQL & Python | CRM & CLM
            </h2>

            <p className="hero-text reveal">
              Data & Business Insights Analyst with nearly 5 years of experience
              in Business Intelligence, Data Analytics, Reporting Automation,
              and Operational Performance Analysis.
            </p>

            <p className="hero-text reveal">
              I transform complex data into actionable insights, optimize
              business processes and build automated reporting solutions to
              support data-driven decision-making.
            </p>

            <div className="buttons reveal">
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

            <div className="links reveal">
              <a
                href="https://www.linkedin.com/in/abujar-al-gifari/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Abujar287"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="mailto:abujar287.algifari@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="profile-card floating">
            <div className="profile-top">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="profile-label">ANALYTICS PROFILE</p>

            <div className="profile-stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>

            <div className="profile-stat">
              <strong>SQL</strong>
              <span>Database Analysis</span>
            </div>

            <div className="profile-stat">
              <strong>BI</strong>
              <span>Business Intelligence</span>
            </div>

            <div className="profile-stat">
              <strong>Excel</strong>
              <span>Advanced Analytics</span>
            </div>

            <div className="profile-stat">
              <strong>CRM</strong>
              <span>Customer Analytics</span>
            </div>
          </div>
        </section>

        <section id="about" className="section reveal-section">
          <p className="eyebrow">01 — ABOUT ME</p>

          <h2>Turning data into actionable business insights.</h2>

          <div className="about-grid">
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
          </div>
        </section>

        <section id="skills" className="section reveal-section">
          <p className="eyebrow">02 — CORE EXPERTISE</p>

          <h2>What I work with.</h2>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill}
                style={{ '--delay': `${index * 0.04}s` }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{skill}</strong>
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

        <section id="experience" className="section reveal-section">
          <p className="eyebrow">03 — EXPERIENCE</p>

          <h2>My professional journey.</h2>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <article
                className="experience"
                key={experience.role}
                style={{ '--delay': `${index * 0.12}s` }}
              >
                <div className="experience-date">
                  {experience.date}
                </div>

                <div className="experience-line">
                  <span></span>
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

        <section id="projects" className="section reveal-section">
          <p className="eyebrow">04 — KEY PROJECTS</p>

          <h2>Analytics & process improvements.</h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="project-top">
                  <span>0{index + 1}</span>
                  <span>↗</span>
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

        <section className="section achievements reveal-section">
          <p className="eyebrow">05 — KEY ACHIEVEMENTS</p>

          <h2>Impact through automation & analytics.</h2>

          <div className="achievement-grid">
            <div className="achievement-card">
              <strong>70+</strong>
              <span>Telesales agents supported through lead automation</span>
            </div>

            <div className="achievement-card">
              <strong>3.0M+</strong>
              <span>NR achieved during manual business operations</span>
            </div>

            <div className="achievement-card">
              <strong>5+</strong>
              <span>Years of data & business analytics experience</span>
            </div>

            <div className="achievement-card">
              <strong>4+</strong>
              <span>Major operational areas supported</span>
            </div>
          </div>
        </section>

        <section id="education" className="section reveal-section">
          <p className="eyebrow">06 — EDUCATION</p>

          <h2>Academic qualifications.</h2>

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

        <section id="contact" className="contact reveal-section">
          <p className="eyebrow">07 — GET IN TOUCH</p>

          <h2>Let's turn data into decisions.</h2>

          <p>
            Open to opportunities in Data Analytics, Business Intelligence,
            Reporting, Automation and data-driven business operations.
          </p>

          <div className="contact-details">
            <a href="mailto:abujar287.algifari@gmail.com">
              <span>Email</span>
              abujar287.algifari@gmail.com
            </a>

            <a href="tel:+8801952980445">
              <span>Phone</span>
              +880 1952-980445
            </a>

            <a href="tel:+8801605089778">
              <span>Phone</span>
              +880 1605-089778
            </a>
          </div>

          <div className="buttons">
            <a
              className="primary-button"
              href="mailto:abujar287.algifari@gmail.com"
            >
              Contact Me
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/abujar-al-gifari/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
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
