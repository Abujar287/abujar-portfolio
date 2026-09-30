import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'summary', label: 'Work Summary' },
  { id: 'metabase', label: 'Metabase Dashboard' },
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
      'MIS & Operational Reporting',
    ],
  },
  {
    title: 'Data & Querying',
    description:
      'Working with structured databases to extract, transform, and analyze business information.',
    skills: [
      'SQL / MySQL',
      'Data Extraction & Transformation',
      'Query-based Analytics',
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
    ],
  },
  {
    title: 'Agent & Operations Analytics',
    description:
      'Analyzing call center productivity, agent performance, work capacity, and operational workflows.',
    skills: [
      'Call Center & Telesales Analytics',
      'Agent Performance & Productivity',
      'Back Office Operations',
      'Work Capacity & Hygiene Analysis',
    ],
  },
  {
    title: 'CRM & Customer Analytics',
    description:
      'Optimizing lead distribution, tracking customer cohorts, and analyzing conversion metrics.',
    skills: [
      'Lead Management & Distribution',
      'Customer Cohort & Follow-up Analysis',
      'Conversion & Retention Analytics',
    ],
  },
  {
    title: 'Complaint & VOC Analytics',
    description:
      'Monitoring SLA/TAT, analyzing complaints, and utilizing voice of customer insights.',
    skills: [
      'Complaint Trend & Root Cause Analysis',
      'Resolution & Aging Analysis',
      'SLA / TAT & VOC Monitoring',
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
      'Business & Operational Data Analysis across multiple departments',
      'KPI, MIS & Performance Dashboard development',
      'Agent Productivity, Capacity & Call Center Analytics',
      'Lead Funnel, Cohort Analysis & Customer Retention Modeling',
      'Reporting Automation using SQL, Python, Excel & BI Tools',
    ],
  },
  {
    title: 'Jr. Data Analyst',
    company: 'Chaldal PLC',
    location: 'Jashore, Bangladesh',
    period: '09/2022 - 10/2023',
    duration: '1 YEAR 2 MONTHS',
    responsibilities: [
      'Financial & Product Reconciliation workflows',
      'Customer Clustering & Monetization Planning',
      'Team-wise KPI Analysis and Operational Dashboards',
    ],
  },
  {
    title: 'Associate Data Analyst',
    company: 'Chaldal PLC',
    location: 'Jashore, Bangladesh',
    period: '03/2021 - 08/2022',
    duration: '1 YEAR 6 MONTHS',
    responsibilities: [
      'Product Pricing, Mapping & Ad-hoc Analysis',
      'Initial Customer Cohort & Ticket Analysis',
    ],
  },
]

const projectList = [
  {
    title: 'Telesales Lead Management Automation',
    tech: ['Python', 'Google Sheets'],
    subtitle: 'Automated Lead Distribution & Operations',
    points: [
      'Automated lead generation & distribution workflows for 70+ agents',
      'Improved telesales tracking and operational reporting efficiency',
      'Integrated Python with Google Sheets API for automated sync',
    ],
  },
  {
    title: 'Agent Performance & Operations Dashboard',
    tech: ['SQL', 'Metabase', 'Excel'],
    subtitle: 'Cross-Functional Performance & SLA Reporting',
    points: [
      'Phased Rollout across Telesales, KAM, Call Center, Facebook Support, Back Office, and VOC teams',
      'Monitored Target vs. Achieved, QA Scores, Talktime/AHT, and Conversion Ratios',
      'Tracked Back Office Disputes, Served %, Cancelled %, and SLA Compliance',
    ],
  },
  {
    title: 'Customer & Cohort Analytics',
    tech: ['SQL', 'Excel', 'BI'],
    subtitle: 'Retention & Behavior Modeling',
    points: [
      'Analyzed customer acquisition, retention patterns, and lifetime value',
      'Evaluated lead performance to deliver actionable growth insights',
    ],
  },
  {
    title: 'Complaint & VOC Analytics System',
    tech: ['SQL', 'Excel', 'BI'],
    subtitle: 'Service Quality & Ticket Governance',
    points: [
      'Categorized complaints to perform root cause analysis',
      'Tracked resolution rates, pending ticket aging, and SLA compliance',
    ],
  },
]

const keyAchievements = [
  {
    title: 'Process & Calling System Setup',
    description: 'Implemented Gplex, Cube, and Pendulum calling tools & operational processes.',
    points: [
      'Integrated telephony platforms with operational workflows',
      'Automated Payroll, Attendance & Agent Utilization reporting',
    ],
  },
  {
    title: 'Workflow Automation & Incentives',
    description: 'Automated core reporting and implemented performance-driven rewards.',
    points: [
      'Built weekly agent & team sales incentive frameworks',
      'Reduced manual report processing time using Python & Google Sheets scripts',
    ],
  },
]

const workSummaryData = [
  {
    title: 'Customer Lifecycle Management (CLM)',
    description: 'Unit economics and retention dynamics analysis.',
    points: [
      'Customer Acquisition Cost (CAC) & Churn Rate Optimization',
      'Cohort-based Lifecycle Revenue & Value Analysis',
    ],
  },
  {
    title: 'Acquisition & Lead Funnel Analysis',
    description: 'Multi-channel customer acquisition and engagement tracking.',
    points: [
      'Internal vs. External Customer Base Breakdown',
      'New Registration Conversion & Non-Ordered Base Engagement',
      'High-Intent Nurturing (80+ Sec Talk-Time Leads)',
    ],
  },
  {
    title: 'Retention & Profitability Analytics',
    description: 'Customer segmentation and financial margin analysis.',
    points: [
      'Master Category & Gender-wise Customer Segmentation',
      'Basket Size, Delivered Ratio & Net Profit % Optimization',
      'Recency & Frequency Mapping based on Lifetime Calls',
    ],
  },
]

const metabaseDashboardData = [
  {
    title: 'Customer Base & Lifecycle Analytics',
    description: 'Customer acquisition, retention, and cohort tracking.',
    points: [
      'Customer acquisition, cohort & retention performance',
      'Served, cancelled & placed order breakdown',
    ],
  },
  {
    title: 'Telesales & KAM Performance Analytics',
    description: 'Sales team productivity and revenue tracking.',
    points: [
      'Agent-wise target vs. achievement monitoring',
      'Conversion ratios and revenue contribution',
    ],
  },
  {
    title: 'Inbound & Facebook Performance Analytics',
    description: 'Inbound queries and social lead performance.',
    points: [
      'Inbound call and lead acquisition tracking',
      'Channel-wise target & conversion analysis',
    ],
  },
  {
    title: 'Back Office Operations Analytics',
    description: 'End-to-end order journey and workload tracking.',
    points: [
      'Order journey, cancellations & dispute monitoring',
      'Capacity, workload & team productivity insights',
    ],
  },
  {
    title: 'Growth & Business Performance Analytics',
    description: 'Executive-level growth and operational KPI trends.',
    points: [
      'Company-wide growth metrics & business performance',
      'SBU-wise KPI monitoring for management',
    ],
  },
  {
    title: 'Voice of Customer & Complaint Analytics',
    description: 'Feedback, service issues, and SLA tracking.',
    points: [
      'Complaint volume, root cause & category breakdown',
      'Resolution efficiency & SLA performance monitoring',
    ],
  },
  {
    title: 'Business Insights & KPI Analytics',
    description: 'Executive reporting and strategic trend analysis.',
    points: [
      'Consolidated business KPI tracking',
      'Management reporting & decision support',
    ],
  },
  {
    title: 'Info Calls Performance Analytics',
    description: 'Information call tracking and outcome analysis.',
    points: [
      'Info call volume & agent activity monitoring',
      'Call outcome & conversion evaluation',
    ],
  },
  {
    title: 'Agent Performance & Productivity Analytics',
    description: 'Granular agent utilization and KPI metrics.',
    points: [
      'Agent utilization & performance tracking',
      'Individual target vs. achievement monitoring',
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
  const [summaryVisible, setSummaryVisible] = useState(false)
  const [metabaseVisible, setMetabaseVisible] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(0)

  const skillsRef = useRef(null)
  const expertiseRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const achievementsRef = useRef(null)
  const summaryRef = useRef(null)
  const metabaseRef = useRef(null)
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
    const node = summaryRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSummaryVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const node = metabaseRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetabaseVisible(true)
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
          padding: 30px 3rem !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          box-sizing: border-box;
        }
        .hero {
          padding-top: 15px !important;
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
        
        .hero-name-clean {
          font-size: clamp(3rem, 7vw, 6.5rem) !important;
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 0.9;
          color: #ffffff;
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
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
          filter: drop-shadow(0 4px 20px rgba(167, 139, 250, 0.25));
        }
        .hero-name-clean .last-name {
          font-size: 0.65em;
          font-weight: 800;
          letter-spacing: 2px;
          color: #c4b5fd;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c4b5fd 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          padding-left: 2px;
        }

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
          margin-top: 15px;
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
          grid-template-columns: repeat(3, 1fr) !important;
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
                  Data Analyst with 5 years of experience in Business Intelligence, Data Analytics, Reporting Automation, and Operational Performance Analysis. Experienced in analyzing operational, agent, lead, and customer data, developing KPI dashboards, and delivering actionable insights. Specialized in <strong className="highlight-purple">Operational Analytics, Agent Performance, Lead &amp; Customer Analytics</strong>, with strong proficiency in <strong className="highlight-blue">SQL, Advanced Excel, Python, and BI tools</strong>.
                </p>
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

        {/* --- CORE EXPERTISE --- */}
        <section id="expertise" className="section expertise-section">
          <div className="section-title">
            <h2>Core Expertise</h2>
          </div>

          <p className="expertise-intro">
            Data and business intelligence domain capabilities focused on transforming complex data into operational insights.
          </p>

          <div
            ref={expertiseRef}
            className={`expertise-showcase${
              expertiseVisible ? ' expertise-active' : ''
            }`}
          >
            {coreExpertise.map((item) => (
              <div key={item.title} className="expertise-item">
                <div className="expertise-bar" />
                <div className="expertise-main">
                  <div className="expertise-heading">
                    <h3>{item.title}</h3>
                    <span className="expertise-icon">↗</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="expertise-skills">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
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

          <div
            ref={experienceRef}
            className={`expertise-showcase exp-grid-layout${
              experienceVisible ? ' expertise-active' : ''
            }`}
          >
            {professionalExperience.map((job, index) => (
              <div key={`${job.company}-${index}`} className="expertise-item exp-card">
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
                  <ul className="clean-bullet-list" style={{ marginTop: '10px' }}>
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
            <h2>Featured Projects</h2>
          </div>

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
                  className="project-card featured-card"
                  onClick={() => setExpandedProjectIndex(isExpanded ? null : index)}
                >
                  <div className="exp-heading">
                    <h3 className="exp-title">{project.title}</h3>
                    <span className="expertise-icon">{isExpanded ? '↙' : '↗'}</span>
                  </div>
                  <p style={{ fontWeight: '600', color: '#a78bfa', fontSize: '0.84rem', margin: '0' }}>
                    {project.subtitle}
                  </p>
                  <div className="tech-tags">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  {isExpanded && (
                    <div className="project-details">
                      <ul className="clean-bullet-list">
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

        {/* --- WORK SUMMARY SECTION --- */}
        <section id="summary" className="section expertise-section">
          <div className="section-title">
            <h2>Work Summary</h2>
          </div>

          <div
            ref={summaryRef}
            className={`expertise-showcase exp-grid-layout achievements-2col${
              summaryVisible ? ' expertise-active' : ''
            }`}
          >
            {workSummaryData.map((item) => (
              <div key={item.title} className="expertise-item exp-card">
                <div className="expertise-bar" />
                <div className="expertise-main">
                  <h3 className="exp-title" style={{ marginBottom: '8px' }}>{item.title}</h3>
                  <p className="ach-desc">{item.description}</p>
                  <ul className="clean-bullet-list" style={{ marginTop: '8px' }}>
                    {item.points.map((pt, i) => (
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

        {/* --- METABASE DASHBOARD SECTION --- */}
        <section id="metabase" className="section expertise-section">
          <div className="section-title">
            <h2>Metabase Dashboard Suite</h2>
          </div>

          <div
            ref={metabaseRef}
            className={`expertise-showcase exp-grid-layout achievements-2col${
              metabaseVisible ? ' expertise-active' : ''
            }`}
          >
            {metabaseDashboardData.map((item) => (
              <div key={item.title} className="expertise-item exp-card">
                <div className="expertise-bar" />
                <div className="expertise-main">
                  <h3 className="exp-title" style={{ marginBottom: '8px' }}>{item.title}</h3>
                  <p className="ach-desc">{item.description}</p>
                  <ul className="clean-bullet-list" style={{ marginTop: '8px' }}>
                    {item.points.map((pt, i) => (
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

          <div className={`technical-showcase${skillsVisible ? ' technical-active' : ''}`}>
            <div className="technical-top">
              <div className="technical-heading">
                <span className="technical-dot" />
                <span>CORE TOOLKIT &amp; PROFICIENCIES</span>
              </div>
            </div>

            <div className="skills-category-wrapper">
              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>Querying & Databases</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">SQL / MySQL</span>
                    <span className="skill-level-badge level-advanced">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="category-title">
                  <span>Spreadsheets & Automation</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">Advanced Excel & Google Sheets</span>
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
                    <span className="skill-name">Python (Pandas)</span>
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
                  <span>BI & Visualization</span>
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
                  <span>CRM & Lifecycle</span>
                </h3>
                <div className="category-skills-list">
                  <div className="skill-row">
                    <span className="skill-name">CRM & CLM Analytics</span>
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
                Open to opportunities in data analysis, business intelligence, and reporting automation. Feel free to reach out.
              </p>
            </div>

            <div className="contact-details-stacked">
              <div className="contact-field-group">
                <span className="contact-field-label">Email</span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=abujar287.algifari@gmail.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-field-value"
                >
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
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abujar287.algifari@gmail.com" 
                target="_blank" 
                rel="noreferrer" 
                className="primary-button" 
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                Send Email <span>↗</span>
              </a>
              <a 
                href="/Abujar_CV.pdf" 
                download="Abujar_CV.pdf" 
                className="secondary-button" 
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
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
