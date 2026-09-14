import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

const coreExpertise = [
  {
    title: 'Analytics & BI',
    description:
      'Turning business data into meaningful insights, KPI tracking, and operational reporting.',
    skills: [
      'Data Analysis',
      'Business Intelligence',
      'KPI & Performance Analytics',
      'Dashboard Development',
      'MIS & Operational Reporting',
    ],
  },
  {
    title: 'Data & Querying',
    description:
      'Working with structured databases to extract, transform, and analyze business information.',
    skills: [
      'SQL',
      'MySQL',
      'Data Extraction',
      'Data Transformation',
      'Query-based Analysis',
    ],
  },
  {
    title: 'Excel & Automation',
    description:
      'Building automated reporting workflows, spreadsheets, and data validation systems.',
    skills: [
      'Advanced Excel',
      'Google Sheets',
      'Reporting Automation',
      'Data Validation',
      'Automated MIS Reporting',
    ],
  },
  {
    title: 'Agent & Operations Analytics',
    description:
      'Analyzing call center productivity, agent performance, work capacity, and operational workflows.',
    skills: [
      'Agent Performance Analysis',
      'Agent Productivity Analysis',
      'Call Center Analytics',
      'Telesales Analytics',
      'Inbound Analytics',
      'Back Office Operations',
      'Agent Hygiene Analysis',
      'Work Capacity Analysis',
    ],
  },
  {
    title: 'CRM & Customer Analytics',
    description:
      'Optimizing lead distribution, tracking customer cohorts, and analyzing conversion metrics.',
    skills: [
      'Lead Management & Optimization',
      'Lead Distribution & Assignment',
      'Telesales Lead Analytics',
      'Call Center Lead Analytics',
      'Customer Analysis',
      'Customer Follow-up Analysis',
      'Customer Cohort Analysis',
      'Conversion & Retention Analysis',
    ],
  },
  {
    title: 'Complaint & VOC Analytics',
    description:
      'Monitoring SLA/TAT, analyzing complaints, and utilizing voice of customer insights.',
    skills: [
      'Complaint Analysis',
      'Complaint Trend Analysis',
      'Resolution & Closure Analysis',
      'Pending & Aging Analysis',
      'SLA / TAT Monitoring',
      'VOC Analytics',
      'Root Cause Analysis',
    ],
  },
  {
    title: 'BI & Dashboard Tools',
    description:
      'Developing live interactive operational dashboards and monitoring business visualizations.',
    skills: [
      'Metabase',
      'Apache Superset',
      'Google Sheets',
      'Operational Dashboards',
      'Live Performance Dashboards',
    ],
  },
]

const technicalSkillCategories = [
  {
    category: 'Querying',
    skills: [
      { name: 'SQL', level: 'Advanced' },
    ],
  },
  {
    category: 'Spreadsheets & Tools',
    skills: [
      { name: 'Advanced Excel', level: 'Advanced' },
      { name: 'Google Sheets', level: 'Advanced' },
    ],
  },
  {
    category: 'Programming & Analytics',
    skills: [
      { name: 'Python — Pandas', level: 'Proficient' },
      { name: 'Business Intelligence', level: 'Advanced' },
    ],
  },
  {
    category: 'Visualization & Dashboards',
    skills: [
      { name: 'Metabase', level: 'Proficient' },
      { name: 'Apache Superset', level: 'Proficient' },
    ],
  },
  {
    category: 'CRM & Operations',
    skills: [
      { name: 'CRM & CLM', level: 'Specialist' },
    ],
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
      'Business & Operational Data Analysis',
      'KPI, MIS & Performance Reporting',
      'Agent Performance & Productivity Analysis',
      'Lead & Customer Analytics',
      'Cohort & Retention Analysis',
      'Dashboard & Reporting Automation',
      'Cross-Functional & Ad-hoc Analytics',
      'SQL, Excel, Python & BI Tools',
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

const projectList = [
  {
    title: 'Telesales Lead Management & Reporting Automation',
    tech: 'Excel · Google Sheets · iHelpBD · gPlex · Cube · Pendulum',
    subtitle: 'From Manual Lead Sharing to Automated Telesales Operations',
    description:
      'Started with manual Excel-based lead sharing and tracking, then developed structured Google Sheets workflows for automation, reporting, and performance monitoring. As the telesales operation evolved, the calling process moved from manual calling through iHelpBD to automated workflows using gPlex, followed by Cube and Pendulum.',
    points: [
      'Lead Management — Sharing, tracking & follow-up',
      'Reporting — Agent-wise & daily performance reporting',
      'Automation — Google Sheets-based workflow automation',
      'Analytics — Lead & agent performance monitoring',
      'Process Evolution — iHelpBD → gPlex → Cube → Pendulum',
    ],
  },
  {
    title: 'Team Performance & Operations',
    tech: 'SQL · Excel · Google Sheets · BI',
    subtitle: 'Comprehensive Cross-Team Operational Performance & Tracking',
    description:
      'Tracking and evaluating key operational metrics, target fulfillment, conversion ratios, order tracking, dispute resolution, and cross-functional team workflows across multiple operational units.',
    points: [
      'Target & Achievement',
      'Conversion Ratio',
      'Agent & Team Performance',
      'Live Dashboard & Reporting',
      'Customer & Order Tracking',
      'Live Dispute & Order Follow-up',
      'Order Issue Resolution',
      'SP Arrangement & Order Serving',
      'Customer, Agent & SP Complaint Analysis',
      'Complaint Follow-up & Resolution',
      'Teams: Telesales · Call Center · Facebook · KAM · Back Office · VOC',
    ],
  },
  {
    title: 'Customer & Cohort Analytics',
    tech: 'SQL · Excel · BI',
    points: [
      'Customer behavior analysis',
      'Cohort analysis',
      'Retention analysis',
      'Lead & customer segmentation',
      'Performance trend analysis',
    ],
  },
  {
    title: 'Complaint & VOC Analytics',
    tech: 'SQL · Excel · Reporting',
    points: [
      'Complaint data analysis',
      'Trend & category analysis',
      'Pending & aging monitoring',
      'Resolution performance',
      'VOC insights & reporting',
    ],
  },
  {
    title: 'Payroll & Workforce Reporting Automation',
    tech: 'Excel · Google Sheets · Automation',
    points: [
      'Attendance data processing',
      'VSE reporting',
      'Salary calculation & validation',
      'Workforce reporting',
      'Automated monthly reporting',
    ],
  },
]

const keyAchievements = [
  {
    title: 'Process & System Improvements',
    description:
      'Implemented calling systems, automated payroll and attendance reporting, and developed Google Sheets-based telesales lead management solutions.',
    points: [
      'Implemented Gplex, Cube, and Pendulum calling systems & processes.',
      'Automated Payroll, Attendance & Agent Utilization Reporting, reducing manual processing time.',
      'Developed Google Sheets-based Telesales Lead Management automation solutions for 70+ agents.',
    ],
  },
  {
    title: 'Achievements & Impact',
    description:
      'Streamlined reporting workflows, developed Python and Google Sheets automation solutions, and built operational dashboards for multi-functional teams.',
    points: [
      'Streamlined reporting workflows by automating repetitive processes and improving data accuracy.',
      'Developed Python & Google Sheets-based reporting automation solutions to streamline recurring reports.',
      'Developed operational dashboards for Call Center, DQM, Complaint Management, and Back Office teams.',
    ],
  },
]

export default function App() {
  const [active, setActive] = useState('home')
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [expertiseVisible, setExpertiseVisible] = useState(false)
  const [experienceVisible, setExperienceVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [achievementsVisible, setAchievementsVisible] = useState(false)
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null)

  const skillsRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const achievementsRef = useRef(null)

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

  useEffect(() => {
    const node = projectsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = achievementsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAchievementsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Inject styles safely via DOM style tag for non-Next.js environments
  useEffect(() => {
    const styleId = 'portfolio-custom-global-styles';
    if (!document.getElementById(styleId)) {
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.innerHTML = `
        /* --- GLOBAL SECTION TITLE FORMATTING (UPPERCASE) --- */
        .section-title h2 {
          text-transform: uppercase;
          font-size: 1.4rem !important;
          letter-spacing: 0.5px;
        }

        .section {
          padding: 22px 0 !important;
        }

        .expertise-intro {
          font-size: 0.88rem !important;
          margin-bottom: 12px !important;
          color: #94a3b8;
        }

        .expertise-main p, .ach-desc {
          font-size: 0.82rem !important;
          line-height: 1.45 !important;
          color: #cbd5e1;
          margin-bottom: 8px !important;
        }

        /* --- CLEAN UNBOXED BULLET LIST STYLES --- */
        .clean-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .clean-bullet-list li {
          font-size: 0.78rem !important;
          line-height: 1.35 !important;
          color: #cbd5e1 !important;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          text-align: left;
        }

        .bullet-dot {
          color: #a78bfa;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* --- PROFESSIONAL SUMMARY STYLES --- */
        .summary-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .summary-hero-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 3px solid #a78bfa;
          border-radius: 8px;
          padding: 14px 18px;
        }

        .summary-hero-text {
          font-size: 0.92rem !important;
          line-height: 1.5 !important;
          color: #cbd5e1;
          margin: 0;
          font-weight: 400;
        }

        .highlight-purple {
          color: #a78bfa;
          font-weight: 600;
        }

        .highlight-blue {
          color: #38bdf8;
          font-weight: 600;
        }

        /* --- TECHNICAL SKILLS CATEGORY STYLES --- */
        .skills-category-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 10px;
        }

        @media (max-width: 1024px) {
          .skills-category-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-category-wrapper {
            grid-template-columns: 1fr;
          }
        }

        .skill-category-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-title {
          font-size: 0.8rem !important;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #a78bfa;
          margin: 0 0 4px 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 6px;
        }

        .category-skills-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-name {
          font-size: 0.85rem !important;
          font-weight: 600;
          color: #ffffff;
        }

        .skill-level-badge {
          font-size: 0.58rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 8px;
        }

        .level-expert {
          color: #f472b6;
          background: rgba(244, 114, 182, 0.12);
        }

        .level-advanced {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
        }

        .level-proficient, .level-specialist {
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.12);
        }

        /* --- PROFESSIONAL EXPERIENCE & PROJECTS LAYOUT --- */
        .exp-grid-layout {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 12px !important;
        }

        /* Projects 2-Column Grid Layout */
        .project-2col-layout {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        /* Achievements 2-Column Grid Layout */
        .achievements-2col {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        @media (max-width: 1024px) {
          .exp-grid-layout, .project-2col-layout, .achievements-2col {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .exp-grid-layout, .project-2col-layout, .achievements-2col {
            grid-template-columns: 1fr !important;
          }
        }

        .exp-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .exp-title {
          font-size: 1rem !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          margin: 0 !important;
        }

        .exp-company {
          font-size: 0.8rem !important;
          margin-bottom: 6px !important;
        }

        .company-name {
          font-weight: 600 !important;
          color: #a78bfa;
        }

        .exp-location {
          color: #94a3b8 !important;
        }

        .exp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(167, 139, 250, 0.08);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 20px;
          padding: 2px 8px;
          font-size: 0.65rem !important;
          font-weight: 600 !important;
          margin-bottom: 8px !important;
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

        .clickable-card {
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .clickable-card:hover {
          border-color: rgba(167, 139, 250, 0.4);
        }
        .project-hint {
          font-size: 0.7rem;
          color: #a78bfa;
          margin-top: 8px;
          font-style: italic;
        }
      `;
      document.head.appendChild(tag);
    }
  }, []);

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
        {/* --- HERO SECTION --- */}
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
                  <span className="word word-11">CRM,</span>
                  <span className="word word-12">CLM</span>
                  <span className="word word-13">&amp;</span>
                  <span className="word word-14">OPERATIONS</span>
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

        {/* --- PROFESSIONAL SUMMARY --- */}
        <section id="about" className="section about">
          <div className="section-title">
            <h2>Professional Summary</h2>
          </div>

          <div className="summary-wrapper">
            <div className="summary-hero-card">
              <p className="summary-hero-text">
                Data Analyst with nearly 5 years of experience in Business Intelligence, Data Analytics, Reporting Automation, and Operational Performance Analysis. Experienced in analyzing operational, agent, lead, and customer data, developing KPI dashboards, automating reporting workflows, and delivering actionable insights for data-driven business decisions. Specialized in <strong className="highlight-purple">Operational Analytics, Agent Performance, Lead &amp; Customer Analytics</strong>, with strong proficiency in <strong className="highlight-blue">SQL, Advanced Excel, Python, and BI tools</strong>.
              </p>
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
                SKILLS CATEGORIES
              </span>
            </div>

            <div className="skills-category-wrapper">
              {technicalSkillCategories.map((group, index) => (
                <div
                  key={group.category}
                  className="skill-category-card"
                  style={{
                    '--technical-delay': `${index * 0.1}s`,
                  }}
                >
                  <h3 className="category-title">{group.category}</h3>
                  <div className="category-skills-list">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="skill-row">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CORE EXPERTISE --- */}
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

                  <ul className="clean-bullet-list">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <span className="bullet-dot">▸</span> {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="section expertise-section">
          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <p className="expertise-intro">
            Key analytical and automation projects built to solve complex business operations and data workflows. Click any card to expand/collapse details.
          </p>

          <div
            ref={projectsRef}
            className={`expertise-showcase exp-grid-layout project-2col-layout${
              projectsVisible ? ' expertise-active' : ''
            }`}
          >
            {projectList.map((project, index) => {
              const isExpanded = expandedProjectIndex === index;
              return (
                <div
                  key={project.title}
                  className="expertise-item exp-card clickable-card"
                  onClick={() => setExpandedProjectIndex(isExpanded ? null : index)}
                  style={{
                    '--expertise-delay': `${index * 0.12}s`,
                  }}
                >
                  <div className="expertise-bar" />

                  <div className="expertise-main">
                    <div className="exp-heading">
                      <h3 className="exp-title">{project.title}</h3>
                      <span className="expertise-icon">{isExpanded ? '↙' : '↗'}</span>
                    </div>

                    <div className="exp-badge">
                      <span className="exp-period">{project.tech}</span>
                    </div>

                    {project.subtitle && (
                      <p style={{ fontWeight: '600', color: '#a78bfa', fontSize: '0.84rem', marginBottom: '6px' }}>
                        {project.subtitle}
                      </p>
                    )}

                    {project.description && (
                      <p className="ach-desc">{project.description}</p>
                    )}

                    {isExpanded ? (
                      <ul className="clean-bullet-list" style={{ marginTop: '10px' }}>
                        {project.points.map((pt, idx) => (
                          <li key={idx}>
                            <span className="bullet-dot">▸</span> {pt}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="project-hint">Click to view details ▾</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section id="achievements" className="section expertise-section">
          <div className="section-title">
            <h2>Achievements</h2>
          </div>

          <p className="expertise-intro">
            Key system optimizations, process automations, and operational milestones achieved throughout my career.
          </p>

          <div
            ref={achievementsRef}
            className={`expertise-showcase exp-grid-layout achievements-2col${
              achievementsVisible ? ' expertise-active' : ''
            }`}
          >
            {keyAchievements.map((item, index) => (
              <div
                key={item.title}
                className="expertise-item exp-card"
                style={{
                  '--expertise-delay': `${index * 0.12}s`,
                }}
              >
                <div className="expertise-bar" />

                <div className="expertise-main">
                  <div className="exp-heading">
                    <h3 className="exp-title">{item.title}</h3>
                    <span className="expertise-icon">↗</span>
                  </div>

                  <p className="ach-desc">{item.description}</p>

                  <ul className="clean-bullet-list">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <span className="bullet-dot">▸</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
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
                +880 1952980445
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
    </div>
  )
}
