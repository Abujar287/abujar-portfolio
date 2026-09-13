import React, { useEffect, useState } from 'react'

const skills = [
  'SQL',
  'Advanced Excel',
  'Python',
  'Pandas',
  'Power BI',
  'Metabase',
  'Superset',
  'Google Sheets',
  'CRM',
  'CLM',
  'Data Analytics',
  'Automation'
]

const projects = [
  {
    title: 'Telesales Lead Management',
    text: 'Automated lead distribution, tracking and performance monitoring for telesales operations with 70+ agents.',
    tags: ['Google Sheets', 'Automation', 'KPI']
  },
  {
    title: 'Business Intelligence Dashboard',
    text: 'Developed operational dashboards for monitoring sales, KAM, call center and back-office performance.',
    tags: ['SQL', 'BI', 'Dashboard']
  },
  {
    title: 'Customer Cohort Analysis',
    text: 'Analyzed customer behavior, service history and order patterns to support retention and acquisition strategies.',
    tags: ['SQL', 'Python', 'Analytics']
  },
  {
    title: 'Payroll & Attendance Automation',
    text: 'Automated payroll, attendance and utilization reporting to reduce manual operational workload.',
    tags: ['Excel', 'Python', 'Automation']
  }
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [typedText, setTypedText] = useState('')

  const titles = [
    'Data Analyst',
    'Business Intelligence Analyst',
    'Data & Business Insights Analyst'
  ]

  useEffect(() => {
    let titleIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const type = () => {
      const current = titles[titleIndex]

      if (!deleting) {
        setTypedText(current.substring(0, charIndex + 1))
        charIndex++

        if (charIndex === current.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        setTypedText(current.substring(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
          deleting = false
          titleIndex = (titleIndex + 1) % titles.length
        }
      }

      timer = setTimeout(type, deleting ? 45 : 85)
    }

    type()

    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
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
      clearTimeout(timer)
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

          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-content">

            <p className="eyebrow">
              DATA ANALYST • BUSINESS INTELLIGENCE
            </p>

            <h1>
              ABUJAR
              <span>AL-GIFARI</span>
            </h1>

            <div className="typing">
              {typedText}
              <span className="cursor">|</span>
            </div>

            <p className="hero-text">
              Turning complex data into actionable insights,
              intelligent dashboards and business decisions.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollTo('projects')}
              >
                View My Work
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo('contact')}
              >
                Contact Me
              </button>
            </div>

            <div className="hero-stats">

              <div>
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Analytics Skills</span>
              </div>

              <div>
                <strong>20+</strong>
                <span>Automation Projects</span>
              </div>

            </div>

          </div>

          <div className="hero-card">

            <div className="card-orbit orbit-one"></div>
            <div className="card-orbit orbit-two"></div>

            <div className="data-card">

              <div className="card-header">
                <span>DATA INSIGHTS</span>
                <span className="live-dot">● LIVE</span>
              </div>

              <div className="chart">
                <div style={{ height: '35%' }}></div>
                <div style={{ height: '52%' }}></div>
                <div style={{ height: '44%' }}></div>
                <div style={{ height: '68%' }}></div>
                <div style={{ height: '61%' }}></div>
                <div style={{ height: '82%' }}></div>
                <div style={{ height: '74%' }}></div>
              </div>

              <div className="chart-footer">
                <span>Performance</span>
                <strong>+32.8%</strong>
              </div>

            </div>

          </div>

        </section>

        <section id="about" className="section about">

          <div className="section-title">
            <span>01</span>
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
            <span>02</span>
            <h2>Core Expertise</h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{skill}</h3>

                <div className="skill-line"></div>

              </div>
            ))}

          </div>

        </section>

        <section id="experience" className="section experience">

          <div className="section-title">
            <span>03</span>
            <h2>Experience</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <p className="date">
                  NOV 2023 — PRESENT
                </p>

                <h3>
                  Senior Officer – Data & Analytics
                </h3>

                <h4>
                  Sheba.xyz Service Ltd.
                </h4>

                <p>
                  Responsible for business data analysis, SQL reporting,
                  BI dashboards, operational performance analysis and
                  data-driven decision support.
                </p>

                <ul>
                  <li>Telesales & KAM KPI monitoring</li>
                  <li>Customer cohort & lead optimization</li>
                  <li>Call Center & DQM analytics</li>
                  <li>Complaint Management analytics</li>
                  <li>Payroll & attendance automation</li>
                  <li>Operational reporting automation</li>
                </ul>

              </div>

            </div>

          </div>

        </section>

        <section id="projects" className="section">

          <div className="section-title">
            <span>04</span>
            <h2>Selected Projects</h2>
          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.text}
                </p>

                <div className="tags">

                  {project.tags.map(tag => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </section>

        <section id="contact" className="section contact">

          <div className="contact-content">

            <p className="eyebrow">
              LET'S CONNECT
            </p>

            <h2>
              Let's turn data into
              <span> meaningful insights.</span>
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
        <span>
          © 2026 Abujar Al-Gifari
        </span>

        <span>
          Data • Insights • Intelligence
        </span>
      </footer>

    </div>
  )
}

export default App
