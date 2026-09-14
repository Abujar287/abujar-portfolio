import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const coreExpertise = [
  {
    title: 'Analytics & Business Intelligence',
    description:
      'Turning business data into meaningful insights, KPI analysis and decision-ready dashboards.',
    skills: ['Data Analysis', 'Business Intelligence', 'KPI Analysis', 'Dashboard Development'],
  },
  {
    title: 'SQL & Data',
    description:
      'Working with structured data and databases to extract, analyze and deliver reliable business insights.',
    skills: ['SQL', 'MySQL', 'Database Analysis', 'Query Optimization', 'DBGate'],
  },
  {
    title: 'Automation & Productivity',
    description:
      'Automating reporting and repetitive processes to improve efficiency, accuracy and operational productivity.',
    skills: ['Advanced Excel', 'Google Sheets', 'Python', 'Pandas', 'Process Automation'],
  },
  {
    title: 'BI & Dashboards',
    description:
      'Building interactive dashboards that provide clear visibility into KPIs, business performance and operational metrics.',
    skills: ['Metabase', 'Apache Superset', 'Data Visualization', 'KPI Reporting'],
  },
  {
    title: 'Customer Intelligence',
    description:
      'Using customer and lifecycle data to understand behavior, improve data quality and support better business decisions.',
    skills: ['CRM', 'CLM', 'Customer Analytics', 'Customer Insights'],
  },
  {
    title: 'Operational Analytics',
    description:
      'Analyzing performance, identifying process gaps and transforming operational data into actionable improvements.',
    skills: ['Performance Analysis', 'Trend Analysis', 'Operational Reporting', 'Process Improvement'],
  },
]

const technicalSkills = [
  { name: 'SQL', category: 'Querying', level: 'Advanced' },
  { name: 'Advanced Excel', category: 'Modeling', level: 'Expert' },
  { name: 'Python', category: 'Data Analysis', level: 'Advanced' },
  { name: 'Business Intelligence', category: 'Analytics', level: 'Advanced' },
  { name: 'Metabase', category: 'Dashboards', level: 'Proficient' },
  { name: 'Apache Superset', category: 'Dashboards', level: 'Proficient' },
  { name: 'Google Sheets', category: 'Modeling', level: 'Advanced' },
  { name: 'CRM & CLM', category: 'Operations', level: 'Specialist' },
]

const professionalExperience = [
  {
    period: '11/2023 - Present',
    location: 'Jashore, Bangladesh',
    title: 'Sr. Data Analyst',
    company: 'Sheba.xyz Services Limited',
    responsibilities: [
      'Business Data Analysis & Actionable Insights.',
      'Automated Dashboard & Operational Reporting.',
      'Telesales & KAM KPI Performance Analysis.',
      'Customer Cohort Analysis & Lead Optimization.',
      'Cross-functional Team Performance Analysis.',
      'Payroll, Attendance & Agent Utilization Automation.',
      'SQL Query Optimization & Reporting Workflow Improvement.',
    ],
  },
  {
    period: '09/2022 - 10/2023',
    location: 'Jashore, Bangladesh',
    title: 'Jr. Data Analyst',
    company: 'Chaldal PLC',
    responsibilities: [
      'Financial Reconciliation.',
      'Customer Clustering.',
      'Monetization Planning.',
      'Product Reconciliation.',
      'Team-wise KPI & Dashboard Analysis.',
    ],
  },
  {
    period: '03/2021 - 08/2022',
    location: 'Jashore, Bangladesh',
    title: 'Associate Data Analyst',
    company: 'Chaldal PLC',
    responsibilities: [
      'Product Pricing & Mapping.',
      'Sudden Report Analysis.',
      'Cohort Analysis.',
      'Protocol Ticket Analysis.',
    ],
  },
]

export default function App() {
  const [active, setActive] = useState('home')
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [expertiseVisible, setExpertiseVisible] = useState(false)
  const [experienceVisible, setExperienceVisible] = useState(false)
  const skillsRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 200) setActive('home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const node = skillsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = expertiseRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExpertiseVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = experienceRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExperienceVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <header className="navbar">
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? 'active' : ''}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="hero-grid">
            <div className="hero-content">
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
                Turning complex data into actionable insights, intelligent dashboards, automated
                reporting solutions and data-driven business decisions.
              </p>
              <div className="hero-buttons">
                <button className="primary-button" onClick={() => scrollTo('experience')}>
                  View My Experience <span>↗</span>
                </button>
                <button className="secondary-button" onClick={() => scrollTo('contact')}>
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

            <div className="hero-photo">
              <div className="photo-frame">
                <span className="photo-corner top-left" />
                <span className="photo-corner top-right" />
                <span className="photo-corner bottom-left" />
                <span className="photo-corner bottom-right" />
                <img src="/profile_picture.jpg" alt="Portrait of Abujar Al-Gifari" />
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span />
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
                Data Analyst with nearly 5 years of experience in Business Intelligence, Data
                Analytics, Reporting Automation, and Business Performance Analysis.
              </p>
              <p>
                Experienced in analyzing operational and customer data, developing KPI dashboards,
                automating reporting workflows, and delivering insights for business decision-making.
                Proficient in SQL, Advanced Excel, Python, and BI tools, with a strong focus on
                improving processes, performance, and data-driven operations.
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
                <strong>CRM &amp; CLM</strong>
              </div>
              <div>
                <span>APPROACH</span>
                <strong>Data Driven</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section technical-section">
          <div className="section-title">
            <h2>Technical Skills</h2>
          </div>
          <div
            ref={skillsRef}
            className={`technical-showcase${skillsVisible ? ' technical-active' : ''}`}
          >
            <div className="technical-top">
              <div className="technical-heading">
                <span className="technical-dot" />
                <span>CORE TOOLKIT</span>
              </div>
              <span className="technical-count">{`0${technicalSkills.length} DISCIPLINES`}</span>
            </div>

            <div className="technical-list">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="technical-item"
                  style={{ '--technical-delay': `${index * 0.1}s` }}
                >
                  <div className="technical-main">
                    <span className="technical-name">{skill.name}</span>
                    <div className="technical-meta">
                      <span>{skill.category.toUpperCase()}</span>
                      <i />
                      <span>{skill.level.toUpperCase()}</span>
                    </div>
                  </div>
                  <span className="technical-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="section expertise-section">
          <div className="section-title">
            <h2>Core Expertise</h2>
          </div>
          <p className="expertise-intro">
            Data, technology and business expertise combined to turn complex data into clear
            insights, smarter decisions and scalable solutions.
          </p>
          <div
            ref={expertiseRef}
            className={`expertise-showcase${expertiseVisible ? ' expertise-active' : ''}`}
          >
            {coreExpertise.map((item, index) => (
              <div
                key={item.title}
                className="expertise-item"
                style={{ '--expertise-delay': `${index * 0.12}s` }}
              >
                <div className="expertise-bar" />
                <div className="expertise-main">
                  <div className="expertise-heading">
                    <h3>{item.title}</h3>
                    <span className="expertise-icon">↗</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="expertise-skills">
                    {item.skills.map((skill, sIndex) => (
                      <span
                        key={skill}
                        style={{ '--skill-delay': `${(index * 0.12) + (sIndex * 0.06) + 0.3}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>
          <div
            ref={experienceRef}
            className={`experience-grid${experienceVisible ? ' experience-active' : ''}`}
          >
            {professionalExperience.map((job, index) => (
              <div
                key={`${job.company}-${job.period}`}
                className="experience-card"
                style={{ '--experience-delay': `${index * 0.12}s` }}
              >
                <div className="experience-header">
                  <div className="experience-meta">
                    <span className="experience-period">{job.period}</span>
                    <span className="experience-location">{job.location}</span>
                  </div>
                </div>

                <div className="experience-title-group">
                  <h3 className="experience-role">{job.title}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>

                <div className="experience-divider" />

                <ul className="experience-list">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-content">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              LET'S WORK
              <span>TOGETHER</span>
            </h2>
            <p>
              Open to opportunities in data analysis, business intelligence, and reporting
              automation. Whether you have a question, a project, or just want to connect — feel
              free to reach out.
            </p>
            <div className="contact-info">
              <a href="mailto:abujar287.algifari@gmail.com">
                <span>EMAIL</span>
                abujar287.algifari@gmail.com
              </a>
              <a href="tel:+8801952980445">
                <span>PRIMARY PHONE</span>
                +880 1952-980445
              </a>
              <a href="tel:+8801605089778">
                <span>SECONDARY PHONE</span>
                +880 1605089778
              </a>
            </div>
            <div className="contact-buttons">
              <a href="mailto:abujar287.algifari@gmail.com" className="primary-button">
                Send Email <span>↗</span>
              </a>
              <a
                href="/Abujar-Al-Gifari-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>{`© ${new Date().getFullYear()} ABUJAR AL-GIFARI`}</span>
        <span>DATA ANALYST · BUSINESS INTELLIGENCE</span>
      </footer>
    </div>
  )
}
