import React, { useEffect, useState } from 'react'

const skills = [
  'Data Analysis',
  'Business Intelligence',
  'SQL',
  'Advanced Excel',
  'Python',
  'Metabase',
  'Apache Superset',
  'DBGate',
  'Google Sheets',
  'MySQL',
  'CRM',
  'CLM',
  'Dashboard Development',
  'Process Automation'
]

const projects = [
  {
    title: 'Telesales Lead Management Automation',
    text: 'Developed an automated telesales lead management solution using Python and Google Sheets for 70+ agents, streamlining lead generation, distribution, tracking and management.',
    tags: ['Python', 'Google Sheets', 'Automation']
  },
  {
    title: 'Operational BI Dashboards',
    text: 'Built operational dashboards for Call Center, DQM, Complaint Management, Back Office and QAT teams to monitor KPIs and business performance.',
    tags: ['SQL', 'BI', 'Dashboard']
  },
  {
    title: 'Payroll & Attendance Automation',
    text: 'Automated payroll, attendance and agent utilization processes using digiGo Attendance, variable calculation logic and Google Sheets, reducing manual effort and improving reporting accuracy.',
    tags: ['digiGo Attendance', 'Variable Calculation', 'Google Sheets']
  },
  {
    title: 'Reporting Workflow Automation',
    text: 'Built automated reporting workflows using SQL, Python and Google Sheets to streamline recurring operational reports.',
    tags: ['SQL', 'Python', 'Google Sheets']
  },
  {
    title: 'Customer Cohort & Lead Analysis',
    text: 'Performed customer cohort analysis and lead optimization to identify customer behavior patterns and improve acquisition and retention strategies.',
    tags: ['SQL', 'Cohort Analysis', 'CRM']
  },
  {
    title: 'Calling System Implementation',
    text: 'Implemented Gplex, Cube and Pendulum calling systems and related operational processes to support telesales activities.',
    tags: ['Gplex', 'Cube', 'Pendulum']
  }
]

const achievements = [
  'Streamlined reporting workflows by automating repetitive processes and improving data accuracy.',
  'Developed Python & Google Sheets-based reporting automation solutions to reduce manual reporting efforts.',
  'Developed operational dashboards for Call Center, DQM, Complaint Management and Back Office teams.',
  'Automated telesales lead management for 70+ agents.',
  'Successfully managed manual business operations for 1.5 months, achieving 3.0M+ NR.'
]

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'achievements',
        'education',
        'contact'
      ]

      sections.forEach(section => {
        const element = document.getElementById(section)

        if (!element) return

        const top = element.getBoundingClientRect().top

        if (top <= 150 && top >= -element.offsetHeight + 150) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = section => {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">
          AG<span>.</span>
        </div>

        <div className="nav-links">
          {[
            'home',
            'about',
            'skills',
            'experience',
            'projects',
            'achievements',
            'education',
            'contact'
          ].map(item => (
            <button
              key={item}
              className={activeSection === item ? 'active' : ''}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                ABUJAR
                <strong>AL-GIFARI</strong>
              </h1>

              <div className="hero-title">
                <div className="title-line">
                  <span className="word word-1">DATA</span>
                  <span className="word word-2">ANALYST</span>
                  <span className="word word-3 separator">|</span>
                  <span className="word word-4">BUSINESS</span>
                  <span className="word word-5">INTELLIGENCE</span>
                </div>

                <div className="title-line second-line">
                  <span className="word word-6">EXCEL,</span>
                  <span className="word word-7">SQL</span>
                  <span className="word word-8">&amp;</span>
                  <span className="word word-9">PYTHON</span>
                  <span className="word word-10 separator">|</span>
                  <span className="word word-11">CRM</span>
                  <span className="word word-12">&amp;</span>
                  <span className="word word-13">CLM</span>
                </div>
              </div>

              <p className="hero-description">
                Turning complex data into actionable insights, intelligent
                dashboards, automated reporting solutions and data-driven
                business decisions.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollTo('projects')}
                >
                  View My Work
                  <span>↗</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollTo('contact')}
                >
                  Contact Me
                </button>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>5+</strong>
                  <span>Years Experience</span>
                </div>

                <div>
                  <strong>8+</strong>
                  <span>Teams Analyzed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-title">
            <h2>Professional Summary</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="large-text">
                Data & Business Insights Analyst with nearly 5 years of
                experience in Business Intelligence, Data Analytics,
                Reporting Automation, and Operational Performance Analysis.
              </p>

              <p>
                Proficient in SQL, Python, Advanced Excel, and BI tools
                to transform complex data into actionable insights,
                optimize business processes, and support data-driven
                decision-making.
              </p>
            </div>

            <div className="about-box">
              <div>
                <span>FOCUS</span>
                <strong>Business Intelligence</strong>
              </div>

              <div>
                <span>EXPERTISE</span>
                <strong>Data Analytics</strong>
              </div>

              <div>
                <span>SPECIALIZATION</span>
                <strong>CRM & CLM</strong>
              </div>

              <div>
                <span>APPROACH</span>
                <strong>Data Driven</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">
            <h2>Core Expertise</h2>
          </div>

          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill-card" key={skill}>
                <h3>{skill}</h3>
                <div className="skill-line"></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <p className="date">NOV 2023 — PRESENT</p>

                <h3>Senior Officer – Data & Analytics</h3>

                <h4>sheba.xyz Service Ltd.</h4>

                <p>
                  Responsible for business data analysis, SQL reporting,
                  BI dashboards, operational performance analysis and
                  data-driven decision support.
                </p>

                <ul>
                  <li>Analyzed business data and delivered actionable insights.</li>
                  <li>Developed automated dashboards and operational reports.</li>
                  <li>Monitored telesales and KAM performance through KPI analytics.</li>
                  <li>Performed customer cohort analysis and lead optimization.</li>
                  <li>Analyzed Call Center, DQM, Back Office, Complaint Management and QAT operations.</li>
                  <li>Automated payroll, attendance and agent utilization reporting.</li>
                  <li>Optimized SQL queries and reporting workflows.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <p className="date">SEP 2021 — OCT 2023</p>

                <h3>Junior Data Analyst</h3>

                <h4>Chaldal PLC</h4>

                <p>
                  Supported business monitoring and operational decision-making
                  through dashboards, reporting automation and business data analysis.
                </p>

                <ul>
                  <li>Created performance dashboards and operational reports.</li>
                  <li>Automated reporting processes.</li>
                  <li>Analyzed business data to improve operational efficiency.</li>
                  <li>Managed product pricing, mapping and inventory analysis.</li>
                  <li>Identified data gaps and provided business insights.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <p className="date">MAR 2021 — AUG 2021</p>

                <h3>Academic Counselor</h3>

                <h4>Shikho PLC</h4>

                <p>
                  Managed customer communication, enrollment activities and
                  sales support through effective student and parent engagement.
                </p>

                <ul>
                  <li>Guided students and parents regarding academic programs.</li>
                  <li>Managed customer communication and enrollment activities.</li>
                  <li>Supported sales operations through customer engagement.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-title">
            <h2>Key Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
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

        <section id="achievements" className="section achievements">
          <div className="section-title">
            <h2>Key Achievements</h2>
          </div>

          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <div className="achievement-card" key={achievement}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-title">
            <h2>Education & Technical Skills</h2>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <p>BACHELOR OF SCIENCE</p>
              <h3>B.Sc. in Botany</h3>
              <h4>Jashore Govt. City College</h4>
              <span>National University</span>
              <strong>CGPA: 2.99 / 4.00</strong>
            </div>

            <div className="education-card">
              <p>HIGHER SECONDARY CERTIFICATE</p>
              <h3>H.S.C. in Science</h3>
              <h4>Raipur School & College, Jashore</h4>
              <strong>GPA: 3.50 / 5.00</strong>
            </div>

            <div className="education-card technical-card">
              <p>TECHNICAL SKILLS</p>

              <div className="technical-list">
                <span>SQL</span>
                <span>Advanced Excel</span>
                <span>Python (Pandas)</span>
                <span>Data Visualization</span>
                <span>Dashboard Development</span>
                <span>Metabase</span>
                <span>Apache Superset</span>
                <span>DBGate</span>
                <span>Google Sheets Automation</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-content">
            <p className="eyebrow">LET'S CONNECT</p>

            <h2>
              Let's turn data into
              <span>meaningful insights.</span>
            </h2>

            <p>
              Interested in data analytics, business intelligence,
              automation or collaboration? Let's connect.
            </p>

            <div className="contact-info">
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

            <div className="contact-buttons">
              <a
                href="mailto:abujar287.algifari@gmail.com"
                className="primary-button"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/abujar-al-gifari/"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Abujar Al-Gifari</span>
        <span>Data • Insights • Intelligence</span>
      </footer>
    </div>
  )
}

export default App
