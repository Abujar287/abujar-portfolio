import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
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
    skills: [
      'CRM',
      'CLM',
      'Customer Analytics',
      'Customer Insights',
    ],
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

const technicalSkills = [
  { name: 'SQL', category: 'Querying', level: 'Advanced' },
  { name: 'Advanced Excel', category: 'Modeling', level: 'Expert' },
  { name: 'Python', category: 'Data Analysis', level: 'Advanced' },
  {
    name: 'Business Intelligence',
    category: 'Analytics',
    level: 'Advanced',
  },
  {
    name: 'Metabase',
    category: 'Dashboards',
    level: 'Proficient',
  },
  {
    name: 'Apache Superset',
    category: 'Dashboards',
    level: 'Proficient',
  },
  {
    name: 'Google Sheets',
    category: 'Modeling',
    level: 'Advanced',
  },
  {
    name: 'CRM & CLM',
    category: 'Operations',
    level: 'Specialist',
  },
]

const professionalExperience = [
  {
    title: 'Sr. Data Analyst',
    company: 'Sheba.xyz Services Limited',
    location: 'Jashore, Bangladesh',
    period: '11/2023 - PRESENT',
    duration: '2 YEARS 10 MONTHS',
    responsibilities: [
      'Business Data Analysis & Actionable Insights',
      'Automated Dashboard & Operational Reporting',
      'Telesales & KAM KPI Performance Analysis',
      'Customer Cohort Analysis & Lead Optimization',
      'Cross-functional Team Performance Analysis',
      'Payroll, Attendance & Agent Utilization Automation',
      'SQL Query Optimization & Reporting',
    ],
  },
  {
    title: 'Jr. Data Analyst',
    company: 'Chaldal PLC',
    location: 'Jashore, Bangladesh',
    period: '09/2022 - 10/2023',
    duration: '1 YEAR 2 MONTHS',
    responsibilities: [
      'Financial Reconciliation',
      'Customer Clustering',
      'Monetization Planning',
      'Product Reconciliation',
      'Team-wise KPI & Dashboard Analysis',
    ],
  },
  {
    title: 'Associate Data Analyst',
    company: 'Chaldal PLC',
    location: 'Jashore, Bangladesh',
    period: '03/2021 - 08/2022',
    duration: '1 YEAR 6 MONTHS',
    responsibilities: [
      'Product Pricing & Mapping',
      'Sudden Report Analysis',
      'Cohort Analysis',
      'Protocol Ticket Analysis',
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
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setActive(id)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 200) {
        setActive('home')
      }
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
      { threshold: 0.25 }
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
      { threshold: 0.15 }
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
      { threshold: 0.15 }
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
                Turning complex data into actionable insights,
                intelligent dashboards, automated reporting
                solutions and data-driven business decisions.
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

        {/* --- PROFESSIONAL SUMMARY SECTION --- */}
        <section id="about" className="section about">
          <div className="section-title">
            <h2>Professional Summary</h2>
          </div>

          <div className="about-grid">
            <div className="about-main-content">
              <div className="about-highlight-card">
                <p className="large-text">
                  Data Analyst with nearly <span className="highlight-text">5 years</span> of hands-on experience driving business impact through <span className="highlight-text">Business Intelligence</span>, advanced reporting automation, and performance analytics.
                </p>
              </div>

              <p className="about-desc">
                Experienced in analyzing operational and customer data, developing interactive KPI dashboards, automating complex reporting workflows, and delivering strategic insights for business decision-making. Highly proficient in SQL, Advanced Excel, Python, and modern BI tools with a strong focus on optimizing processes and data-driven operations.
              </p>

              <div className="about-pills">
                <span>⚡ KPI Dashboards</span>
                <span>📊 Workflow Automation</span>
                <span>🎯 Strategic Data Insights</span>
              </div>
            </div>

            <div className="about-box">
              <div className="about-stat-item">
                <span>FOCUS</span>
                <strong>Business Intelligence</strong>
              </div>

              <div className="about-stat-item">
                <span>EXPERTISE</span>
                <strong>Data Analytics</strong>
              </div>

              <div className="about-stat-item">
                <span>SPECIALIZATION</span>
                <strong>CRM &amp; CLM</strong>
              </div>

              <div className="about-stat-item">
                <span>APPROACH</span>
                <strong>Data Driven</strong>
              </div>
            </div>
          </div>
        </section>

        {/* --- TECHNICAL SKILLS --- */}
        <section id="skills" className="section technical-section">
          <div className="section-title">
            <h2>Technical Skills</h2>
          </div>

          <div
            ref={skillsRef}
            className={`technical-showcase${
              skillsVisible ? ' technical-active' : ''
            }`}
          >
            <div className="technical-top">
              <div className="technical-heading">
                <span className="technical-dot" />
                <span>CORE TOOLKIT &amp; PROFICIENCIES</span>
              </div>

              <span className="technical-count">
                {`0${technicalSkills.length} DISCIPLINES`}
              </span>
            </div>

            <div className="skills-grid-wrapper">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skills-card"
                  style={{
                    '--technical-delay': `${index * 0.08}s`,
                  }}
                >
                  <div className="skills-card-header">
                    <span className="skill-cat-badge">{skill.category}</span>
                    <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>

                  <div className="skills-card-body">
                    <h3 className="skill-title">{skill.name}</h3>
                    <span className="skills-icon">↗</span>
                  </div>
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
            Data, technology and business expertise combined to
            turn complex data into clear insights, smarter
            decisions and scalable solutions.
          </p>

          <div
            ref={expertiseRef}
            className={`expertise-showcase${
              expertiseVisible ? ' expertise-active' : ''
            }`}
          >
            {coreExpertise.map((item, index) => (
              <div
                key={item.title}
                className="expertise-item"
                style={{
                  '--expertise-delay': `${index * 0.12}s`,
                }}
              >
                <div className="expertise-bar" />

                <div className="expertise-main">
                  <div className="expertise-heading">
                    <h3>{item.title}</h3>
                    <span className="expertise-icon">↗</span>
                  </div>

                  <p>{item.description}</p>

                  <div className="expertise-skills">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        style={{
                          '--skill-delay': `${
                            index * 0.12 +
                            skillIndex * 0.06 +
                            0.3
                          }s`,
                        }}
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

        {/* --- PROFESSIONAL EXPERIENCE --- */}
        <section id="experience" className="section expertise-section">
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>

          <p className="expertise-intro">
            Proven track record of transforming business analytics, driving operational efficiency, and optimizing data workflows.
          </p>

          <div
            ref={experienceRef}
            className={`expertise-showcase exp-grid-layout${
              experienceVisible ? ' expertise-active' : ''
            }`}
          >
            {professionalExperience.map((job, index) => (
              <div
                key={`${job.company}-${index}`}
                className="expertise-item exp-card"
                style={{
                  '--expertise-delay': `${index * 0.15}s`,
                }}
              >
                <div className="expertise-bar" />

                <div className="expertise-main">
                  <div className="exp-heading">
                    <h3 className="exp-title">{job.title}</h3>
                    <span className="expertise-icon">↗</span>
                  </div>

                  <p className="exp-company">
                    <span className="company-name">{job.company}</span>{' '}
                    <span className="exp-location">• {job.location}</span>
                  </p>

                  <div className="exp-badge">
                    <span className="exp-period">{job.period}</span>
                    <span className="exp-dot">•</span>
                    <span className="exp-duration">{job.duration}</span>
                  </div>

                  <div className="expertise-skills exp-list">
                    {job.responsibilities.map((resp, idx) => (
                      <span
                        key={idx}
                        className="exp-item-tag"
                        style={{
                          '--skill-delay': `${
                            index * 0.12 + idx * 0.05 + 0.2
                          }s`,
                        }}
                      >
                        <span className="bullet-symbol">▸</span> {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-content">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              LET&apos;S WORK <span>TOGETHER</span>
            </h2>

            <p>
              Open to opportunities in data analysis, business
              intelligence, and reporting automation. Whether
              you have a question, a project, or just want to
              connect — feel free to reach out.
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
              <a
                href="mailto:abujar287.algifari@gmail.com"
                className="primary-button"
              >
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
        <span>
          {`© ${new Date().getFullYear()} ABUJAR AL-GIFARI`}
        </span>

        <span>DATA ANALYST · BUSINESS INTELLIGENCE</span>
      </footer>

      <style jsx global>{`
        /* --- PROFESSIONAL SUMMARY ENHANCEMENTS --- */
        .about-main-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-highlight-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 3px solid #a78bfa;
          padding: 20px;
          border-radius: 8px;
        }

        .highlight-text {
          color: #38bdf8;
          font-weight: 600;
        }

        .about-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          margin: 0;
        }

        .about-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 6px;
        }

        .about-pills span {
          font-size: 0.78rem;
          font-weight: 500;
          color: #cbd5e1;
          background: rgba(167, 139, 250, 0.08);
          border: 1px solid rgba(167, 139, 250, 0.2);
          padding: 5px 12px;
          border-radius: 20px;
        }

        .about-stat-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .about-stat-item:hover {
          background: rgba(167, 139, 250, 0.05);
          border-color: rgba(167, 139, 250, 0.25);
          transform: translateY(-2px);
        }

        /* --- TECHNICAL SKILLS ENHANCEMENTS --- */
        .skills-grid-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .skills-grid-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid-wrapper {
            grid-template-columns: 1fr;
          }
        }

        .skills-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .skills-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #a78bfa 0%, #38bdf8 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skills-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(167, 139, 250, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -10px rgba(167, 139, 250, 0.15);
        }

        .skills-card:hover::before {
          opacity: 1;
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .skill-cat-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.05);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .skill-level-badge {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 12px;
          letter-spacing: 0.3px;
        }

        .level-expert {
          color: #f472b6;
          background: rgba(244, 114, 182, 0.12);
          border: 1px solid rgba(244, 114, 182, 0.25);
        }

        .level-advanced {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .level-proficient, .level-specialist {
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.12);
          border: 1px solid rgba(167, 139, 250, 0.25);
        }

        .skills-card-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0.2px;
        }

        .skills-icon {
          color: #64748b;
          font-size: 0.9rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .skills-card:hover .skills-icon {
          color: #a78bfa;
          transform: translate(2px, -2px);
        }

        /* --- PROFESSIONAL EXPERIENCE --- */
        .exp-grid-layout {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 20px !important;
        }

        @media (max-width: 1024px) {
          .exp-grid-layout {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .exp-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }

        .exp-card {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }

        .exp-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .exp-title {
          font-size: 1.25rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.3px !important;
          color: #ffffff !important;
          margin: 0 !important;
        }

        .exp-company {
          font-size: 0.88rem !important;
          margin-bottom: 10px !important;
          letter-spacing: 0.2px;
        }

        .company-name {
          font-weight: 600 !important;
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .exp-location {
          color: #94a3b8 !important;
          font-weight: 400 !important;
          font-size: 0.82rem !important;
        }

        .exp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(167, 139, 250, 0.08);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 20px;
          padding: 4px 10px;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.4px !important;
          margin-bottom: 16px !important;
        }

        .exp-period {
          color: #38bdf8 !important;
        }

        .exp-duration {
          color: #ffffff !important;
        }

        .exp-dot {
          color: #94a3b8;
          opacity: 0.5;
        }

        .exp-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px !important;
        }

        .exp-item-tag {
          font-size: 0.80rem !important;
          font-weight: 400 !important;
          line-height: 1.4 !important;
          color: #e2e8f0 !important;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-left: 2px solid #a78bfa !important;
          border-radius: 4px;
          padding: 5px 8px;
          width: 100%;
          text-align: left;
          transition: all 0.2s ease;
        }

        .exp-item-tag:hover {
          background: rgba(167, 139, 250, 0.06);
          border-color: rgba(167, 139, 250, 0.3);
          transform: translateX(2px);
        }

        .bullet-symbol {
          color: #a78bfa;
          font-weight: bold;
          margin-right: 2px;
        }
      `}</style>
    </div>
  )
}
