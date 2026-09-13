import React, { useEffect, useRef, useState } from 'react'

const heroSkills = [
  { name: 'SQL', type: 'DATABASE', level: 'Advanced' },
  { name: 'Advanced Excel', type: 'ANALYTICS', level: 'Advanced' },
  { name: 'Python', type: 'DATA', level: 'Pandas' },
  { name: 'Business Intelligence', type: 'BI', level: 'Expert' },
  { name: 'Metabase', type: 'BI TOOL', level: 'Dashboard' },
  { name: 'Apache Superset', type: 'BI TOOL', level: 'Dashboard' },
  { name: 'Google Sheets', type: 'AUTOMATION', level: 'Advanced' },
  { name: 'CRM & CLM', type: 'CUSTOMER', level: 'Analytics' }
]

const expertiseGroups = [
  {
    title: 'Analytics & BI',
    description: 'Turning business data into clear insights and decision-ready dashboards.',
    skills: ['Data Analysis', 'Business Intelligence', 'Dashboard Development']
  },
  {
    title: 'Data & Querying',
    description: 'Working with structured data, databases and efficient SQL workflows.',
    skills: ['SQL', 'MySQL', 'DBGate']
  },
  {
    title: 'Automation & Productivity',
    description: 'Automating repetitive reporting and operational processes.',
    skills: ['Advanced Excel', 'Google Sheets', 'Python', 'Process Automation']
  },
  {
    title: 'BI Platforms',
    description: 'Building and monitoring interactive business intelligence solutions.',
    skills: ['Metabase', 'Apache Superset']
  },
  {
    title: 'Customer Intelligence',
    description: 'Using customer and lifecycle data to improve business performance.',
    skills: ['CRM', 'CLM']
  }
]

const experiences = [
  {
    period: 'NOV 2023 — PRESENT',
    role: 'Senior Officer – Data & Analytics',
    company: 'sheba.xyz Service Ltd.',
    description:
      'Responsible for business data analysis, SQL reporting, BI dashboards, operational performance analysis and data-driven decision support.',
    highlights: [
      'Analyzed business data and delivered actionable insights.',
      'Developed automated dashboards and operational reports.',
      'Monitored telesales and KAM performance through KPI analytics.',
      'Performed customer cohort analysis and lead optimization.',
      'Analyzed Call Center, DQM, Back Office, Complaint Management and QAT operations.',
      'Automated payroll, attendance and agent utilization reporting.',
      'Optimized SQL queries and reporting workflows.'
    ]
  },
  {
    period: 'SEP 2021 — OCT 2023',
    role: 'Junior Data Analyst',
    company: 'Chaldal PLC',
    description:
      'Supported business monitoring and operational decision-making through dashboards, reporting automation and business data analysis.',
    highlights: [
      'Created performance dashboards and operational reports.',
      'Automated reporting processes.',
      'Analyzed business data to improve operational efficiency.',
      'Managed product pricing, mapping and inventory analysis.',
      'Identified data gaps and provided business insights.'
    ]
  },
  {
    period: 'MAR 2021 — AUG 2021',
    role: 'Academic Counselor',
    company: 'Shikho PLC',
    description:
      'Managed customer communication, enrollment activities and sales support through effective student and parent engagement.',
    highlights: [
      'Guided students and parents regarding academic programs.',
      'Managed customer communication and enrollment activities.',
      'Supported sales operations through customer engagement.'
    ]
  }
]

const achievements = [
  'Streamlined reporting workflows by automating repetitive processes and improving data accuracy.',
  'Developed Python & Google Sheets-based reporting automation solutions to reduce manual reporting efforts.',
  'Developed operational dashboards for Call Center, DQM, Complaint Management and Back Office teams.',
  'Automated telesales lead management for 70+ agents.',
  'Successfully managed manual business operations for 1.5 months, achieving 3.0M+ NR.'
]

const navigation = [
  'home',
  'about',
  'skills',
  'experience',
  'achievements',
  'education',
  'contact'
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [technicalVisible, setTechnicalVisible] = useState(false)
  const technicalRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    navigation.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const element = technicalRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTechnicalVisible(true)
          }
        })
      },
      { threshold: 0.18 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const scrollTo = sectionId => {
    const element = document.getElementById(sectionId)
    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo" onClick={() => scrollTo('home')}>
          AG<span>.</span>
        </div>

        <div className="nav-links">
          {navigation.map(item => (
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
        {/* HERO SECTION */}
        <section id="home" className="section hero">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-label">DATA & BUSINESS INSIGHTS</p>

              <h1>
                ABUJAR <strong>AL-GIFARI</strong>
              </h1>

              <div className="hero-title">
                <div className="title-line">
                  <span className="word word-1">DATA</span>
                  <span className="word word-2">ANALYST</span>
                  <span className="word separator word-3">|</span>
                  <span className="word word-4">BUSINESS</span>
                  <span className="word word-5">INTELLIGENCE</span>
                </div>

                <div className="title-line second-line">
                  <span className="word word-6">EXCEL,</span>
                  <span className="word word-7">SQL</span>
                  <span className="word word-8">&amp;</span>
                  <span className="word word-9">PYTHON</span>
                  <span className="word separator word-10">|</span>
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
                  onClick={() => scrollTo('experience')}
                >
                  View My Experience <span>↗</span>
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
                  <strong>5+ Years Experience</strong>
                </div>

                <div>
                  <strong>8+</strong>
                  <span>Teams Analyzed</span>
                </div>
              </div>
            </div>

            {/* CLEAN PHOTO CONTAINER WITH NO TEXT OVERLAYS */}
            <div className="hero-photo">
              <div className="photo-frame">
                <div className="photo-corner top-left"></div>
                <div className="photo-corner top-right"></div>
                <div className="photo-corner bottom-left"></div>
                <div className="photo-corner bottom-right"></div>

                <img
                  src="/profile_picture.jpg"
                  alt="Abujar Al-Gifari"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* ABOUT SECTION */}
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
                Proficient in SQL, Python, Advanced Excel, and BI tools to
                transform complex data into actionable insights, optimize
                business processes, and support data-driven decision-making.
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

        {/* TECHNICAL SKILLS SECTION */}
        <section
          id="skills"
          className="section technical-section"
          ref={technicalRef}
        >
          <div className="section-title">
            <h2>Technical Skills</h2>
          </div>

          <div
            className={`technical-showcase ${
              technicalVisible ? 'technical-active' : ''
            }`}
          >
            <div className="technical-top">
              <div className="technical-heading">
                <span className="technical-dot"></span>
                <span>TECHNICAL SKILLS</span>
              </div>

              <span className="technical-count">SKILLS</span>
            </div>

            <div className="technical-list">
              {heroSkills.map((skill, index) => (
                <div
                  className="technical-item"
                  key={skill.name}
                  style={{
                    '--technical-delay': `${index * 0.12}s`
                  }}
                >
                  <div className="technical-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="technical-main">
                    <div className="technical-name">{skill.name}</div>

                    <div className="technical-meta">
                      <span>{skill.type}</span>
                      <i></i>
                      <span>{skill.level}</span>
                    </div>
                  </div>

                  <div className="technical-arrow">↗</div>
                </div>
              ))}
            </div>

            <div className="technical-footer">
              <span>DATA</span>
              <span>BI</span>
              <span>AUTOMATION</span>
              <span>CRM</span>
            </div>
          </div>
        </section>

        {/* CORE EXPERTISE SECTION */}
        <section className="section expertise-section">
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
              <article className="expertise-item" key={group.title}>
                <div className="expertise-index">
                  {String(index + 1).padStart(2, '0')}
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

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <section id="experience" className="section experience">
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <p className="date">{exp.period}</p>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>

                  <p>{exp.description}</p>

                  <ul>
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEY ACHIEVEMENTS SECTION */}
        <section id="achievements" className="section achievements">
          <div className="section-title">
            <h2>Key Achievements</h2>
          </div>

          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <div className="achievement-card" key={index}>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section education">
          <div className="section-title">
            <h2>Education</h2>
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
              <p>DATA & BUSINESS</p>

              <div className="education-focus">
                <strong>Business Intelligence</strong>
                <strong>Data Analytics</strong>
                <strong>Reporting Automation</strong>
                <strong>CRM & CLM</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
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
