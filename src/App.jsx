import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
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
    title: 'Telesales Lead Management Automation',
    tech: ['Python', 'Google Sheets'],
    subtitle: 'Automated Telesales Operations & Tracking',
    description:
      'Automated lead generation, distribution, tracking, and management workflows to improve telesales lead operations and reporting efficiency.',
    points: [
      'Automated lead generation & distribution workflows',
      'Lead tracking and management improvements',
      'Improved telesales operations and reporting efficiency',
      'Python + Google Sheets integration',
    ],
    priority: 'Priority 1',
  },
  {
    title: 'Agent Performance & Operations Dashboard',
    tech: ['SQL', 'Excel', 'BI'],
    subtitle: 'Operational Performance & KPI Reporting',
    description:
      'Developed operational performance reporting across Telesales, KAM, Inbound, DQM, and Back Office teams, covering agent KPIs, productivity, hygiene, and performance trends.',
    points: [
      'Operational performance tracking across multiple teams',
      'Agent KPIs, productivity, and hygiene monitoring',
      'Coverage: Telesales, KAM, Inbound, DQM, and Back Office',
      'Performance trend analysis and reporting',
    ],
    priority: 'Priority 2',
  },
  {
    title: 'Customer & Cohort Analytics',
    tech: ['SQL', 'Excel', 'BI'],
    subtitle: 'Customer Behavior & Retention Tracking',
    description:
      'Analyzed customer cohorts, acquisition, retention, lead performance, and customer behavior to identify business and operational insights.',
    points: [
      'Customer cohort and behavior tracking',
      'Acquisition and retention metrics analysis',
      'Lead performance evaluation',
      'Actionable business and operational insights',
    ],
    priority: 'Priority 3',
  },
  {
    title: 'Complaint & VOC Analytics',
    tech: ['SQL', 'Excel', 'BI'],
    subtitle: 'Service Improvement & Complaint Monitoring',
    description:
      'Analyzed complaint and VOC data across categories, trends, resolution, pending cases, and operational performance to support service improvement.',
    points: [
      'Complaint and VOC data breakdown across categories',
      'Trend analysis, resolution rates, and pending cases monitoring',
      'Operational performance tracking for service improvement',
      'Data-driven feedback loops',
    ],
    priority: 'Priority 4',
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
  const [aboutVisible, setAboutVisible] = useState(false)
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(0)

  const skillsRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const achievementsRef = useRef(null)
  const aboutRef = useRef(null)

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

  useEffect(() => {
    const node = aboutRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const styleId = 'portfolio-custom-global-styles'
    if (!document.getElementById(styleId)) {
      const tag = document.createElement('style')
      tag.id = styleId
      tag.innerHTML = `
        body {
          text-align: left !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden;
          width: 100vw;
          box-sizing: border-box;
          background-color: #0b0b10;
        }
        .portfolio, .section, .hero-content, .expertise-section, .contact-wrapper {
          text-align: left !important;
        }
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(11, 11, 16, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: flex-start !important;
          padding: 12px 3rem !important;
          margin: 0 !important;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .nav-links {
          display: flex;
          gap: 20px;
          justify-content: flex-start !important;
          margin-left: 0 !important;
          flex-wrap: wrap;
        }
        .nav-links button {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 0;
        }
        .nav-links button:hover, .nav-links button.active {
          color: #a78bfa;
        }
        .section-title h2 {
          text-transform: uppercase;
          font-size: 1.4rem !important;
          letter-spacing: 0.5px;
          text-align: left !important;
          margin-left: 0 !important;
          color: #ffffff;
        }
        .section {
          padding: 40px 3rem !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          box-sizing: border-box;
        }
        .hero {
          padding-top: 30px !important;
        }
        .hero-grid {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          text-align: left !important;
          gap: 40px;
          width: 100%;
          margin-left: 0 !important;
        }
        .hero-content {
          flex: 1.2;
          text-align: left !important;
          margin-left: 0 !important;
          min-width: 0;
          padding-top: 0 !important;
        }
        
        /* Updated Enhanced Name Styling */
        .hero-name-clean {
          font-size: clamp(2.5rem, 5.5vw, 5rem) !important;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.95;
          color: #ffffff;
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          font-family: 'Space Grotesk', sans-serif !important;
          text-transform: uppercase;
        }
        .hero-name-clean .first-name {
          font-size: 1em;
          font-weight: 900;
          letter-spacing: -2px;
          background: linear-gradient(135deg, #ffffff 20%, #cbd5e1 60%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 4px 20px rgba(167, 139, 250, 0.2));
        }
        .hero-name-clean .last-name {
          font-size: 0.58em;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c4b5fd;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c4b5fd 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding-left: 2px;
        }

        /* Subtitle Styling */
        .hero-title {
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #94a3b8;
          text-transform: uppercase;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .hero-title .title-line {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3ch;
          font-size: clamp(0.8rem, 1.3vw, 1.1rem) !important;
        }
        .hero-title .separator {
          color: #a78bfa;
        }

        .hero-metrics {
          display: flex;
          gap: 30px;
          margin-bottom: 15px;
        }
        .hero-metrics div {
          display: flex;
          flex-direction: column;
        }
        .hero-metrics strong {
          font-size: 1.4rem;
          color: #ffffff;
          font-weight: 800;
        }
        .hero-metrics span {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-photo {
          flex: 0.8;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
        }
        .photo-frame {
          position: relative;
          padding: 12px;
          background: rgba(167, 139, 250, 0.05);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 16px;
          max-width: 340px;
          width: 100%;
        }
        .photo-frame img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          display: block;
        }
        .photo-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: #a78bfa;
          border-style: solid;
        }
        .photo-corner.top-left { top: 4px; left: 4px; border-width: 2px 0 0 2px; }
        .photo-corner.top-right { top: 4px; right: 4px; border-width: 2px 2px 0 0; }
        .photo-corner.bottom-left { bottom: 4px; left: 4px; border-width: 0 0 2px 2px; }
        .photo-corner.bottom-right { bottom: 4px; right: 4px; border-width: 0 2px 2px 0; }

        .hero-buttons, .contact-buttons-row {
          justify-content: flex-start !important;
        }
        .scroll-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          color: #64748b;
          letter-spacing: 1.5px;
          margin-top: 20px;
        }
        .scroll-indicator span:first-child {
          width: 16px;
          height: 1px;
          background: #64748b;
        }

        .contact-wrapper {
          align-items: flex-start !important;
          text-align: left !important;
          margin: 0 !important;
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.04) 0%, rgba(20, 20, 30, 0.6) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 40px;
          width: 100%;
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-wrapper.about-active {
          opacity: 1;
          transform: translateY(0);
        }
        .contact-main-heading {
          align-items: flex-start !important;
          text-align: left !important;
          width: 100%;
          margin-bottom: 24px;
        }
        .contact-subtag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #a78bfa;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .contact-title-row {
          display: flex;
          gap: 12px;
          align-items: baseline;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .contact-title-solid {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }
        .contact-title-outline {
          font-size: 2rem;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(167, 139, 250, 0.6);
          letter-spacing: -0.5px;
        }
        .contact-desc {
          margin: 0 !important;
          text-align: left !important;
          font-size: 0.9rem !important;
          line-height: 1.5;
          color: #94a3b8;
          max-width: 700px;
        }
        .contact-details-stacked {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          margin-bottom: 30px;
        }
        .contact-field-group {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-left: 3px solid #a78bfa;
          border-radius: 8px;
          padding: 12px 18px;
          transition: all 0.3s ease;
        }
        .contact-field-group:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(167, 139, 250, 0.3);
          transform: translateX(4px);
        }
        .contact-field-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #94a3b8;
          display: block;
          margin-bottom: 4px;
        }
        .contact-field-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #f1f5f9;
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-field-value:hover {
          color: #38bdf8;
        }
        .contact-buttons-row {
          display: flex;
          gap: 12px;
          margin-bottom: 30px;
        }
        .primary-button {
          background: #a78bfa;
          color: #0b0b10;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: background 0.2s;
        }
        .primary-button:hover {
          background: #c4b5fd;
        }
        .secondary-button {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: background 0.2s;
        }
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .footer-banner {
          text-align: left !important;
          font-size: 0.7rem;
          color: #64748b;
          letter-spacing: 1px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 20px;
          width: 100%;
        }

        .technical-section {
          background: linear-gradient(180deg, rgba(20, 20, 30, 0.4) 0%, rgba(10, 10, 15, 0.8) 100%);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 32px 36px !important;
          margin: 30px 0 !important;
          width: 100%;
          box-sizing: border-box;
        }
        .technical-showcase {
          margin-left: 0 !important;
          width: 100%;
        }
        .technical-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
          margin-left: 0 !important;
        }
        .technical-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #a78bfa;
        }
        .technical-dot {
          width: 8px;
          height: 8px;
          background: #a78bfa;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(167, 139, 250, 0.6);
        }
        .technical-count {
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .skills-category-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 10px;
          margin-left: 0 !important;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .skills-category-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-grid {
            flex-direction: column;
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
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: left !important;
        }
        .skill-category-card:hover {
          border-color: rgba(167, 139, 250, 0.3);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px -10px rgba(167, 139, 250, 0.15);
        }
        .skill-category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: #a78bfa;
          opacity: 0.7;
        }
        .category-title {
          font-size: 0.85rem !important;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 6px 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left !important;
        }
        .category-skills-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skill-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 8px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: background 0.2s;
        }
        .skill-row:hover {
          background: rgba(255, 255, 255, 0.06);
        }
        .skill-name {
          font-size: 0.85rem !important;
          font-weight: 600;
          color: #f1f5f9;
        }
        .skill-level-badge {
          font-size: 0.6rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 10px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .level-advanced {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.2);
        }
        .level-proficient, .level-specialist {
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.12);
          border: 1px solid rgba(167, 139, 250, 0.2);
        }

        .expertise-intro, .projects-intro {
          font-size: 0.88rem !important;
          margin-bottom: 16px !important;
          color: #94a3b8;
          text-align: left !important;
        }
        .expertise-main p, .ach-desc {
          font-size: 0.82rem !important;
          line-height: 1.45 !important;
          color: #cbd5e1;
          margin-bottom: 8px !important;
          text-align: left !important;
        }
        .clean-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left !important;
        }
        .clean-bullet-list li {
          font-size: 0.78rem !important;
          line-height: 1.35 !important;
          color: #cbd5e1 !important;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          text-align: left !important;
        }
        .bullet-dot {
          color: #a78bfa;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .hero-summary-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 3px solid #a78bfa;
          border-radius: 8px;
          padding: 12px 16px;
          margin: 14px 0;
          text-align: left !important;
          width: 100%;
          box-sizing: border-box;
        }
        .hero-summary-text {
          font-size: 0.84rem !important;
          line-height: 1.45 !important;
          color: #cbd5e1;
          margin: 0;
          font-weight: 400;
          text-align: left !important;
        }
        .highlight-purple {
          color: #a78bfa;
          font-weight: 600;
        }
        .highlight-blue {
          color: #38bdf8;
          font-weight: 600;
        }
        .exp-grid-layout {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 16px !important;
          margin-left: 0 !important;
          width: 100%;
        }
        .project-2col-layout {
          grid-template-columns: repeat(2, 1fr) !important;
        }
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
        .exp-heading, .expertise-heading {
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
          text-align: left !important;
        }
        .exp-company {
          font-size: 0.8rem !important;
          margin-bottom: 6px !important;
          text-align: left !important;
        }
        .company-name {
          font-weight: 600 !important;
          color: #a78bfa;
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
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 18px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left !important;
        }
        .project-card:hover {
          border-color: rgba(167, 139, 250, 0.4);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-2px);
        }
        .project-card.featured-card {
          border-color: rgba(167, 139, 250, 0.25);
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.03) 0%, rgba(255, 255, 255, 0.02) 100%);
        }
        .priority-badge {
          font-size: 0.62rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 20px;
          margin-left: 6px;
          vertical-align: middle;
        }
        .priority-badge.p1 {
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.15);
          border: 1px solid rgba(167, 139, 250, 0.3);
        }
        .priority-badge.p2 {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .tech-tag {
          font-size: 0.65rem;
          font-weight: 500;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
        }
        .project-details {
          margin-top: 6px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .project-hint {
          font-size: 0.7rem;
          color: #94a3b8;
          font-style: italic;
          margin-top: 4px;
        }
        .expertise-showcase {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
        }
        @media(max-width: 1024px) {
          .expertise-showcase {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media(max-width: 640px) {
          .expertise-showcase {
            grid-template-columns: 1fr;
          }
        }
        .expertise-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }
        .expertise-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: #a78bfa;
        }
        .expertise-main h3 {
          font-size: 1rem;
          color: #ffffff;
          margin: 0 0 8px 0;
        }
        .expertise-icon {
          color: #a78bfa;
          font-size: 0.9rem;
        }
        .expertise-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .expertise-skills span {
          font-size: 0.65rem;
          background: rgba(167, 139, 250, 0.08);
          border: 1px solid rgba(167, 139, 250, 0.2);
          color: #c4b5fd;
          padding: 2px 8px;
          border-radius: 6px;
        }
      `
      document.head.appendChild(tag)
    }
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
        {/* --- HERO SECTION --- */}
        <section id="home" className="section hero">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-name-clean">
                <span className="first-name">ABUJAR</span>
                <span className="last-name">AL-GIFARI</span>
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

              <div className="hero-summary-box">
                <p className="hero-summary-text">
                  Data Analyst with nearly 5 years of experience in Business Intelligence, Data Analytics, Reporting Automation, and Operational Performance Analysis. Experienced in analyzing operational, agent, lead, and customer data, developing KPI dashboards, automating reporting workflows, and delivering actionable insights for data-driven business decisions. Specialized in <strong className="highlight-purple">Operational Analytics, Agent Performance, Lead &amp; Customer Analytics</strong>, with strong proficiency in <strong className="highlight-blue">SQL, Advanced Excel, Python, and BI tools</strong>.
                </p>
              </div>

              <p className="hero-description" style={{ fontSize: '0.84rem', color: '#94a3b8', margin: '0 0 10px 0' }}>
                Turning complex data into actionable insights, intelligent dashboards, automated reporting solutions and data-driven business decisions.
              </p>
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

        {/* --- CORE EXPERTISE --- */}
        <section id="expertise" className="section expertise-section">
          <div className="section-title">
            <h2>Core Expertise</h2>
          </div>

          <p className="expertise-intro">
            Data, technology and business expertise combined to turn complex data into clear insights, smarter decisions and scalable solutions.
          </p>

          <div
            ref={expertiseRef}
            className={`expertise-showcase${
              expertiseVisible ? ' expertise-active' : ''
            }`}
          >
            {coreExpertise.map((item) => (
              <div
                key={item.title}
                className="expertise-item"
              >
                <div className="expertise-bar" />

                <div className="expertise-main">
                  <div className="expertise-heading">
                    <h3>{item.title}</h3>
                    <span className="expertise-icon">↗</span>
                  </div>

                  <p>{item.description}</p>

                  <div className="expertise-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>
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

          <p className="projects-intro">
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
                  className={`project-card ${project.priority ? 'featured-card' : ''}`}
                  onClick={() => setExpandedProjectIndex(isExpanded ? null : index)}
                >
                  <div className="exp-heading">
                    <h3 className="exp-title">
                      {project.title}
                      {project.priority === 'Priority 1' && <span className="priority-badge p1">Priority 1</span>}
                      {project.priority === 'Priority 2' && <span className="priority-badge p2">Priority 2</span>}
                    </h3>
                    <span className="expertise-icon">{isExpanded ? '↙' : '↗'}</span>
                  </div>

                  {project.subtitle && (
                    <p style={{ fontWeight: '600', color: '#a78bfa', fontSize: '0.84rem', margin: '0' }}>
                      {project.subtitle}
                    </p>
                  )}

                  <div className="tech-tags">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="project-details">
                      {project.description && (
                        <p className="ach-desc" style={{ margin: '0' }}>
                          {project.description}
                        </p>
                      )}
                      <ul className="clean-bullet-list" style={{ marginTop: '6px' }}>
                        {project.points.map((point, idx) => (
                          <li key={idx}>
                            <span className="bullet-dot">▸</span> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="project-hint">
                    {isExpanded ? 'Click to collapse' : 'Click to view details'}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- ACHIEVEMENTS --- */}
        <section id="achievements" className="section expertise-section">
          <div className="section-title">
            <h2>Key Achievements</h2>
          </div>

          <div
            ref={achievementsRef}
            className={`expertise-showcase exp-grid-layout achievements-2col${
              achievementsVisible ? ' expertise-active' : ''
            }`}
          >
            {keyAchievements.map((ach) => (
              <div key={ach.title} className="expertise-item exp-card">
                <div className="expertise-bar" />
                <div className="expertise-main">
                  <h3 className="exp-title" style={{ marginBottom: '8px' }}>{ach.title}</h3>
                  <p className="ach-desc">{ach.description}</p>
                  <ul className="clean-bullet-list" style={{ marginTop: '8px' }}>
                    {ach.points.map((pt, i) => (
                      <li key={i}>
                        <span className="bullet-dot">▸</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TECHNICAL SKILLS --- */}
        <section id="skills" className="section technical-section" ref={skillsRef}>
          <div className="section-title">
            <h2>Technical Skills</h2>
          </div>

          <div
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
              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>Querying</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">SQL</span>
                    <span className="skill-level-badge level-advanced">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>Spreadsheets & Tools</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">Advanced Excel</span>
                    <span className="skill-level-badge level-advanced">Advanced</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-name">Google Sheets</span>
                    <span className="skill-level-badge level-advanced">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>Programming & Analytics</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">Python — Pandas</span>
                    <span className="skill-level-badge level-proficient">Proficient</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-name">Business Intelligence</span>
                    <span className="skill-level-badge level-advanced">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>Visualization & Dashboards</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">Metabase</span>
                    <span className="skill-level-badge level-proficient">Proficient</span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-name">Apache Superset</span>
                    <span className="skill-level-badge level-proficient">Proficient</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>CRM & Operations</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">CRM & CLM</span>
                    <span className="skill-level-badge level-specialist">Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT / CONTACT SECTION --- */}
        <section id="about" className="section expertise-section">
          <div ref={aboutRef} className={`contact-wrapper ${aboutVisible ? 'about-active' : ''}`}>
            <div className="contact-main-heading">
              <span className="contact-subtag">Get In Touch</span>
              <div className="contact-title-row">
                <span className="contact-title-solid">LET'S WORK</span>
                <span className="contact-title-outline">TOGETHER</span>
              </div>
              <p className="contact-desc">
                Open to opportunities in data analysis, business intelligence, and reporting automation. Whether you have a question, a project, or just want to connect — feel free to reach out.
              </p>
            </div>

            <div className="contact-details-stacked">
              <div className="contact-field-group">
                <span className="contact-field-label">Email</span>
                <a href="mailto:abujar287.algifari@gmail.com" className="contact-field-value">
                  abujar287.algifari@gmail.com
                </a>
              </div>

              <div className="contact-field-group">
                <span className="contact-field-label">Primary Phone</span>
                <a href="tel:+8801952980445" className="contact-field-value">
                  +880 1952980445
                </a>
              </div>

              <div className="contact-field-group">
                <span className="contact-field-label">Secondary Phone</span>
                <a href="tel:+8801605089778" className="contact-field-value">
                  +880 1605089778
                </a>
              </div>
            </div>

            <div className="contact-buttons-row">
              <a href="mailto:abujar287.algifari@gmail.com" className="primary-button" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Send Email <span>↗</span>
              </a>
              <a href="#cv" className="secondary-button" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Download CV
              </a>
            </div>

            <div className="footer-banner">
              © 2026 ABUJAR AL-GIFARI · DATA ANALYST · BUSINESS INTELLIGENCE
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
