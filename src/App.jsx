```jsx
import React from 'react'

const skills = [
  ['SQL', 'Database Analysis & Query Optimization'],
  ['Excel', 'Advanced Analysis & Automation'],
  ['Python', 'Pandas & Data Processing'],
  ['BI Tools', 'Metabase & Apache Superset'],
  ['Google Sheets', 'Automation & Reporting'],
  ['KPI Analytics', 'Performance Monitoring'],
  ['CRM', 'Customer & Lead Analytics'],
  ['CLM', 'Customer Lifecycle Management']
]

const projects = [
  {
    number: '01',
    title: 'Telesales Lead Management',
    text: 'Automated lead distribution, monitoring and performance reporting for telesales operations using Google Sheets, SQL and BI dashboards.',
    tools: 'SQL · Excel · Google Sheets · BI'
  },
  {
    number: '02',
    title: 'Operational Performance Dashboard',
    text: 'Designed operational dashboards to monitor Acquisition, Retention, KAM, Call Center, DQM and Back Office performance.',
    tools: 'SQL · Metabase · Superset'
  },
  {
    number: '03',
    title: 'Payroll & Attendance Automation',
    text: 'Automated payroll, attendance and utilization reporting processes to reduce manual work and improve reporting accuracy.',
    tools: 'Excel · Python · Google Sheets'
  },
  {
    number: '04',
    title: 'Customer Cohort Analysis',
    text: 'Analyzed customer behavior, service history, order gaps and customer segments to support retention and acquisition strategies.',
    tools: 'SQL · Python · Excel · BI'
  },
  {
    number: '05',
    title: 'Lead Optimization & Reactivation',
    text: 'Developed analytical approaches for lead prioritization, dead customer reactivation and agent-level performance optimization.',
    tools: 'SQL · Excel · CRM · CLM'
  },
  {
    number: '06',
    title: 'Call Center Analytics',
    text: 'Built reporting frameworks for dialed calls, answered calls, wrap-up performance, agent productivity and contact ratios.',
    tools: 'SQL · Excel · BI'
  }
]

function App() {
  return (
    <div className="portfolio">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="nav">
        <a href="#home" className="logo">
          AA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a
          href="https://www.linkedin.com/in/abujar-al-gifari/"
          target="_blank"
          rel="noreferrer"
          className="nav-linkedin"
        >
          LINKEDIN ↗
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <span className="eyebrow">DATA & BUSINESS INSIGHTS ANALYST</span>

          <h1>
            ABUJAR
            <span>AL-GIFARI</span>
          </h1>

          <div className="line"></div>

          <p className="headline">
            DATA ANALYST <b>|</b> BUSINESS INTELLIGENCE
            <br />
            EXCEL, SQL & PYTHON <b>|</b> CRM & CLM
          </p>

          <p className="hero-description">
            Turning complex data into actionable insights, smarter processes,
            and data-driven business decisions.
          </p>

          <div className="tags">
            <span>SQL</span>
            <span>EXCEL</span>
            <span>PYTHON</span>
            <span>BI</span>
            <span>CRM</span>
            <span>CLM</span>
          </div>

          <div className="hero-actions">
            <a href="#about" className="primary-btn">
              EXPLORE PROFILE
            </a>

            <a
              href="https://www.linkedin.com/in/abujar-al-gifari/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <strong>05</strong>
            <span>YEARS EXPERIENCE</span>
          </div>

          <div>
            <strong>BI</strong>
            <span>BUSINESS INTELLIGENCE</span>
          </div>

          <div>
            <strong>SQL</strong>
            <span>DATA ANALYTICS</span>
          </div>
        </div>

        <div className="scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-header">
          <span>01</span>
          <p>ABOUT ME</p>
        </div>

        <div className="about-grid">
          <div>
            <h2>
              DATA THAT
              <span>DRIVES DECISIONS.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="large-text">
              Data & Business Insights Analyst with nearly 5 years of experience
              in Business Intelligence, Data Analytics, Reporting Automation,
              and Operational Performance Analysis.
            </p>

            <p>
              I work with SQL, Advanced Excel, Python and BI tools to transform
              complex business data into meaningful insights. My focus is on
              performance analytics, automation, customer analytics, lead
              optimization and operational reporting.
            </p>

            <p>
              I enjoy solving business problems
```
