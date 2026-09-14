import { useEffect, useRef, useState } from 'react'
import './index.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
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

const coreExpertise = [
  {
    title: 'Analytics & Business Intelligence',
    description:
      'Turning business data into meaningful insights, KPI analysis and decision-ready dashboards.',
    skills: [
      'Data Analysis',
      'Business Intelligence',
      'KPI Analysis',
      'Dashboard Development',
    ],
  },
  {
    title: 'SQL & Data',
    description:
      'Working with structured data and databases to extract, analyze and deliver reliable business insights.',
    skills: [
      'SQL',
      'MySQL',
      'Database Analysis',
      'Query Optimization',
      'DBGate',
    ],
  },
  {
    title: 'Automation & Productivity',
    description:
      'Automating reporting and repetitive processes to improve efficiency, accuracy and operational productivity.',
    skills: [
      'Advanced Excel',
      'Google Sheets',
      'Python',
      'Pandas',
      'Process Automation',
    ],
  },
  {
    title: 'BI & Dashboards',
    description:
      'Building interactive dashboards that provide clear visibility into KPIs, business performance and operational metrics.',
    skills: [
      'Metabase',
      'Apache Superset',
      'Data Visualization',
      'KPI Reporting',
    ],
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
    skills: [
      'Performance Analysis',
      'Trend Analysis',
      'Operational Reporting',
      'Process Improvement',
    ],
  },
]

const professionalExperience = [
  {
    title: 'Sr. Data Analyst',
    company: 'Sheba.xyz',
    period: '11/2023 - Present',
    duration: '2 Years 10 Months',
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
    title: 'Jr. Data Analyst',
    company: 'Chaldal PLC',
    period: '09/2022 - 10/2023',
    duration: '1 Year 2 Months',
    responsibilities: [
      'Financial Reconciliation.',
      'Customer Clustering.',
      'Monetization Planning.',
      'Product Reconciliation.',
      'Team-wise KPI & Dashboard Analysis.',
    ],
  },
  {
    title: 'Associate Data Analyst',
    company: 'Chaldal PLC',
    period: '03/2021 - 08/2022',
    duration: '1 Year 6 Months',
    responsibilities: [
      'Product Pricing & Mapping.',
      'Sudden Report Analysis.',
      'Cohort Analysis.',
      'Protocol Ticket Analysis.',
    ],
  },
]

function App() {
  const [active, setActive] = useState('home')
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [expertiseVisible, setExpertiseVisible] = useState(false)
  const [experienceVisible, setExperienceVisible] = useState(false)

  const skillsRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)

  const scrollTo = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setActive(id)
    }
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const createObserver = (ref, callback) => {
      if (!ref.current) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            callback(true)
            observer.disconnect()
          }
        },
        {
          threshold: 0.15,
        },
      )

      observer.observe(ref.current)

      return observer
    }

    const skillsObserver = createObserver(
      skillsRef,
      setSkillsVisible,
    )

    const expertiseObserver = createObserver(
      expertiseRef,
      setExpertiseVisible,
    )

    const experienceObserver = createObserver(
      experienceRef,
      setExperienceVisible,
    )

    return () => {
      skillsObserver?.disconnect()
      expertiseObserver?.disconnect()
      experienceObserver?.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-inner">
          <button
            className="logo"
            onClick={() => scrollTo('home')}
          >
            ABUJAR<span>.</span>
          </button>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={active === item.id ? 'active' : ''}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

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

                <img
                  src="/profile_picture.jpg"
                  alt="Portrait of Abujar Al-Gifari"
                />
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span />
            SCROLL TO EXPLORE
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-grid">
            <div>
              <span className="about-label">ABOUT ME</span>
            </div>

            <div className="about-content">
              <h3>
                Data &amp; Business Insights Analyst focused on turning
                complex data into practical business decisions.
              </h3>

              <p>
                With nearly 5 years of experience in Business Intelligence,
                Data Analytics, Reporting Automation and Operational
                Performance Analysis, I work across data, technology and
                business operations.
              </p>

              <p>
                My work focuses on transforming raw business data into
                meaningful insights, automated reporting solutions,
                dashboards and performance-driven recommendations.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-title">
            <h2>Technical Skills</h2>
          </div>

          <div
            ref={skillsRef}
            className={`skills-grid${
              skillsVisible ? ' skills-active' : ''
            }`}
          >
            {technicalSkills.map((skill, index) => (
              <article
                key={skill.name}
                className="skill-card"
                style={{
                  '--skill-delay': `${index * 0.08}s`,
                }}
              >
                <span className="skill-category">
                  {skill.category}
                </span>

                <span className="skill-arrow">↗</span>

                <h3>{skill.name}</h3>

                <span className="skill-level">
                  {skill.level}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          id="expertise"
          className="section expertise-section"
        >
          <div className="section-title">
            <h2>Core Expertise</h2>

            <p>
              Data, technology and business expertise combined to build
              smarter decisions and scalable solutions.
            </p>
          </div>

          <div
            ref={expertiseRef}
            className={`expertise-grid${
              expertiseVisible ? ' expertise-active' : ''
            }`}
          >
            {coreExpertise.map((item, index) => (
              <article
                key={item.title}
                className="expertise-card"
                style={{
                  '--expertise-delay': `${index * 0.08}s`,
                }}
              >
                <span className="expertise-arrow">↗</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="expertise-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section"
        >
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>

          <div
            ref={experienceRef}
            className={`experience-showcase${
              experienceVisible ? ' experience-active' : ''
            }`}
          >
            {professionalExperience.map((job, index) => (
              <article
                key={`${job.company}-${job.period}`}
                className="experience-card"
                style={{
                  '--experience-delay': `${index * 0.18}s`,
                }}
              >
                <div className="experience-card-top">
                  <span className="experience-label">
                    PROFESSIONAL EXPERIENCE
                  </span>

                  <span className="experience-arrow">↗</span>
                </div>

                <div className="experience-heading">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>

                <div className="experience-meta">
                  <span>{job.period}</span>
                  <strong>({job.duration})</strong>
                </div>

                <div className="experience-divider" />

                <ul className="experience-list">
                  {job.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <li
                        key={responsibilityIndex}
                        style={{
                          '--point-delay': `${
                            index * 0.18 +
                            responsibilityIndex * 0.08 +
                            0.35
                          }s`,
                        }}
                      >
                        <span className="experience-bullet" />
                        <span>{responsibility}</span>
                      </li>
                    ),
                  )}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <h2>Let&apos;s build something meaningful with data.</h2>

            <p>
              Open to opportunities, collaborations and data-driven
              projects where analytics can create measurable business
              impact.
            </p>

            <div className="contact-links">
              <a
                className="contact-link"
                href="mailto:abujar287.algifari@gmail.com"
              >
                abujar287.algifari@gmail.com
              </a>

              <a
                className="contact-link"
                href="tel:+8801952980445"
              >
                +880 1952-980445
              </a>

              <a
                className="contact-link"
                href="tel:+8801605089778"
              >
                +880 1605089778
              </a>

              <a
                className="contact-link"
                href="https://www.linkedin.com/in/abujar-al-gifari/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2026 ABUJAR AL-GIFARI. All rights reserved.
        </p>

        <p>
          DATA ANALYST <span>•</span> BUSINESS INTELLIGENCE
        </p>
      </footer>
    </div>
  )
}

export default App
