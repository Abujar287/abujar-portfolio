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
    description: 'Turning business data into meaningful insights, KPI tracking, and operational reporting.',
    skills: ['Data Analysis', 'Business Intelligence', 'KPI Analytics', 'Dashboard Development', 'MIS Reporting'],
  },
  {
    title: 'Data & Querying',
    description: 'Working with structured databases to extract, transform, and analyze business information.',
    skills: ['SQL', 'MySQL', 'Data Extraction', 'Transformation', 'Query Analysis'],
  },
  {
    title: 'Excel & Automation',
    description: 'Building automated reporting workflows, spreadsheets, and data validation systems.',
    skills: ['Advanced Excel', 'Google Sheets', 'Reporting Automation', 'Data Validation'],
  },
  {
    title: 'Agent & Operations Analytics',
    description: 'Analyzing call center productivity, agent performance, work capacity, and operational workflows.',
    skills: ['Agent Performance', 'Productivity Analysis', 'Call Center Analytics', 'Telesales Analytics'],
  },
  {
    title: 'CRM & Customer Analytics',
    description: 'Optimizing lead distribution, tracking customer cohorts, and analyzing conversion metrics.',
    skills: ['Lead Management', 'Lead Distribution', 'Customer Cohort Analysis', 'Conversion & Retention'],
  },
  {
    title: 'Complaint & VOC Analytics',
    description: 'Monitoring SLA/TAT, analyzing complaints, and utilizing voice of customer insights.',
    skills: ['Complaint Analysis', 'Resolution Tracking', 'SLA / TAT Monitoring', 'VOC Analytics'],
  },
  {
    title: 'BI & Dashboard Tools',
    description: 'Developing live interactive operational dashboards and monitoring business visualizations.',
    skills: ['Metabase', 'Apache Superset', 'Operational Dashboards', 'Live Performance'],
  },
]

const technicalSkillCategories = [
  { category: 'Querying', skills: [{ name: 'SQL', level: 'Advanced' }] },
  { category: 'Spreadsheets', skills: [{ name: 'Advanced Excel', level: 'Advanced' }, { name: 'Google Sheets', level: 'Advanced' }] },
  { category: 'Programming', skills: [{ name: 'Python — Pandas', level: 'Proficient' }, { name: 'Business Intelligence', level: 'Advanced' }] },
  { category: 'Visualization', skills: [{ name: 'Metabase', level: 'Proficient' }, { name: 'Apache Superset', level: 'Proficient' }] },
  { category: 'CRM & Operations', skills: [{ name: 'CRM & CLM', level: 'Specialist' }] },
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
      'Dashboard & Reporting Automation',
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
    title: 'Telesales Lead Management & Automation',
    tech: 'Excel · Google Sheets · gPlex · Cube',
    subtitle: 'From Manual Lead Sharing to Automated Telesales',
    description: 'Developed structured Google Sheets workflows for automation, reporting, and performance monitoring across multiple calling platforms.',
    points: [
      'Lead Management — Sharing, tracking & follow-up',
      'Reporting — Agent-wise & daily performance reporting',
      'Automation — Google Sheets-based workflow automation',
      'Process Evolution — iHelpBD → gPlex → Cube → Pendulum',
    ],
  },
  {
    title: 'Agent Performance Analytics',
    tech: 'SQL · Excel · Google Sheets · BI',
    subtitle: 'Turning Agent-Level Data into Performance Insights',
    description: 'Analyzing operational data to monitor target achievement, productivity, conversion, and quality trends.',
    points: [
      'Performance & Target Achievement',
      'Productivity & Work Capacity Analysis',
      'Conversion Ratio & Agent Ranking',
      'Quality, Complaint & CQ Score Analysis',
    ],
  },
  {
    title: 'Customer & Cohort Analytics',
    tech: 'SQL · Excel · BI',
    subtitle: 'Customer Segmentation & Retention Tracking',
    description: 'Analyzing customer behaviors, lifecycle cohorts, and retention metrics to support long-term business growth.',
    points: [
      'Customer behavior analysis',
      'Cohort and retention analysis',
      'Lead & customer segmentation',
    ],
  },
  {
    title: 'Complaint & VOC Analytics',
    tech: 'SQL · Excel · Reporting',
    subtitle: 'Voice of Customer & SLA Tracking',
    description: 'Monitoring complaints, SLA/TAT metrics, and resolving operational bottlenecks using customer feedback.',
    points: [
      'Complaint data & trend analysis',
      'Pending & aging monitoring',
      'Resolution performance & VOC insights',
    ],
  },
]

const keyAchievements = [
  {
    title: 'Process & System Improvements',
    description: 'Implemented calling systems, automated payroll and attendance reporting, and developed Google Sheets-based telesales solutions.',
    points: [
      'Implemented Gplex, Cube, and Pendulum calling systems.',
      'Automated Payroll, Attendance & Agent Utilization Reporting.',
      'Developed Lead Management automation solutions for 70+ agents.',
    ],
  },
  {
    title: 'Achievements & Impact',
    description: 'Streamlined reporting workflows, developed automation solutions, and built operational dashboards.',
    points: [
      'Streamlined recurring reporting workflows.',
      'Developed Python & Google Sheets automation tools.',
      'Built operational dashboards for Call Center & DQM teams.',
    ],
  },
]

export default function App() {
  const [active, setActive] = useState('home')
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(0)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActive(id)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 200) setActive('home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>ABUJAR <strong>AL-GIFARI</strong></h1>
              <div className="hero-title">
                <p>DATA ANALYST | BUSINESS INTELLIGENCE | EXCEL, SQL & PYTHON</p>
              </div>
              <p className="hero-description">
                Turning complex data into actionable insights, intelligent dashboards, and automated reporting solutions.
              </p>
              <div className="hero-buttons">
                <button className="primary-button" onClick={() => scrollTo('experience')}>View Experience</button>
                <button className="secondary-button" onClick={() => scrollTo('contact')}>Contact Me</button>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section id="about" className="section about">
          <div className="section-title"><h2>Professional Summary</h2></div>
          <div className="summary-wrapper">
            <div className="summary-hero-card">
              <p className="summary-hero-text">
                Data Analyst with nearly 5 years of experience in Business Intelligence, Data Analytics, Reporting Automation, and Operational Performance Analysis. Specialized in <span className="highlight-purple">Operational Analytics, Agent Performance, Lead & Customer Analytics</span>, with strong proficiency in <span className="highlight-blue">SQL, Advanced Excel, Python, and BI tools</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="section technical-section">
          <div className="section-title"><h2>Technical Skills</h2></div>
          <div className="skills-category-wrapper">
            {technicalSkillCategories.map((group) => (
              <div key={group.category} className="skill-category-card">
                <h3 className="category-title">{group.category}</h3>
                <div className="category-skills-list">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Expertise */}
        <section id="expertise" className="section expertise-section">
          <div className="section-title"><h2>Core Expertise</h2></div>
          <div className="expertise-showcase">
            {coreExpertise.map((item) => (
              <div key={item.title} className="expertise-item">
                <div className="expertise-main">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="expertise-skills">
                    {item.skills.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="section expertise-section">
          <div className="section-title"><h2>Professional Experience</h2></div>
          <div className="expertise-showcase exp-grid-layout">
            {professionalExperience.map((job, idx) => (
              <div key={idx} className="expertise-item exp-card">
                <div className="expertise-main">
                  <h3 className="exp-title">{job.title}</h3>
                  <p className="exp-company"><span className="company-name">{job.company}</span> • {job.location}</p>
                  <div className="exp-badge">
                    <span className="exp-period">{job.period}</span> • <span className="exp-duration">{job.duration}</span>
                  </div>
                  <ul className="clean-bullet-list">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}><span className="bullet-dot">▸</span> {resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section expertise-section">
          <div className="section-title"><h2>Projects</h2></div>
          <div className="expertise-showcase exp-grid-layout project-2col-layout">
            {projectList.map((project, index) => {
              const isExpanded = expandedProjectIndex === index;
              return (
                <div
                  key={project.title}
                  className={`expertise-item exp-card clickable-card`}
                  onClick={() => setExpandedProjectIndex(isExpanded ? null : index)}
                >
                  <div className="expertise-main">
                    <h3 className="exp-title">{project.title}</h3>
                    <div className="exp-badge"><span className="exp-period">{project.tech}</span></div>
                    {project.subtitle && <p className="project-sub">{project.subtitle}</p>}
                    {isExpanded && (
                      <>
                        <p className="ach-desc">{project.description}</p>
                        <ul className="clean-bullet-list">
                          {project.points.map((pt, i) => <li key={i}><span className="bullet-dot">▸</span> {pt}</li>)}
                        </ul>
                      </>
                    )}
                    <div className="project-hint">{isExpanded ? 'Click to collapse' : 'Click to view details'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="section expertise-section">
          <div className="section-title"><h2>Key Achievements</h2></div>
          <div className="expertise-showcase exp-grid-layout achievements-2col">
            {keyAchievements.map((ach, idx) => (
              <div key={idx} className="expertise-item exp-card">
                <div className="expertise-main">
                  <h3 className="exp-title">{ach.title}</h3>
                  <p className="ach-desc">{ach.description}</p>
                  <ul className="clean-bullet-list">
                    {ach.points.map((pt, i) => <li key={i}><span className="bullet-dot">▸</span> {pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
