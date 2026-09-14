import { useState, useRef, useEffect } from 'react'

const projectList = [
  {
    title: 'Telesales Lead Management & Reporting Automation',
    tech: ['Excel', 'Google Sheets', 'iHelpBD', 'gPlex', 'Cube', 'Pendulum'],
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
    priority: 'Priority 1',
  },
  {
    title: 'Agent Performance Analytics',
    tech: ['SQL', 'Excel', 'Google Sheets', 'BI'],
    subtitle: 'Turning Agent-Level Data into Performance Insights',
    description:
      'Analyzing agent-level operational data to monitor target achievement, productivity, conversion, quality, customer activity, and performance trends across multiple teams.',
    points: [
      'Performance Analysis & Target Achievement',
      'Productivity & Work Capacity',
      'Conversion Ratio & Agent Ranking',
      'Quality, Complaint & CQ Score Analysis',
      'Team Coverage: Telesales · Call Center · Facebook · KAM · Inbound · Back Office · VOC · DQM',
    ],
    priority: 'Priority 2',
  },
  {
    title: 'Customer & Cohort Analytics',
    tech: ['SQL', 'Excel', 'BI'],
    subtitle: 'Customer Segmentation & Retention Tracking',
    description: 'Analyzing customer behaviors, lifecycle cohorts, and retention metrics to support long-term business growth.',
    points: [
      'Customer behavior analysis',
      'Cohort & retention analysis',
      'Lead & customer segmentation',
      'Performance trend tracking',
    ],
  },
  {
    title: 'Complaint & VOC Analytics',
    tech: ['SQL', 'Excel', 'Reporting'],
    subtitle: 'Voice of Customer & SLA Tracking',
    description: 'Monitoring complaints, SLA/TAT metrics, and resolving operational bottlenecks using voice of customer feedback.',
    points: [
      'Complaint data & trend analysis',
      'Pending & aging monitoring',
      'Resolution performance tracking',
      'VOC insights & reporting',
    ],
  },
  {
    title: 'Payroll & Workforce Reporting Automation',
    tech: ['Excel', 'Google Sheets', 'Automation'],
    subtitle: 'Automated Attendance & Workforce Management',
    description: 'Automating attendance aggregation, VSE metrics, and salary calculations to minimize human error and save time.',
    points: [
      'Attendance data processing',
      'VSE reporting',
      'Salary calculation & validation',
      'Automated monthly workforce reporting',
    ],
  },
]

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <p className="projects-intro">
        Key analytical and automation projects built to solve complex business operations and data workflows. Click any card to explore full details.
      </p>

      <div className={`projects-grid ${isVisible ? 'projects-active' : ''}`}>
        {projectList.map((project, index) => {
          const isExpanded = expandedIndex === index

          return (
            <div
              key={project.title}
              className={`project-card ${project.priority ? 'featured-card' : ''} ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
            >
              <div className="card-header-row">
                <div className="title-area">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  {project.priority && (
                    <span className={`priority-badge ${project.priority === 'Priority 1' ? 'p1' : 'p2'}`}>
                      {project.priority}
                    </span>
                  )}
                </div>
                <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
              </div>

              {project.subtitle && (
                <p className="project-subtitle">{project.subtitle}</p>
              )}

              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              {isExpanded && (
                <div className="project-details">
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-points">
                    {project.points.map((pt, i) => (
                      <li key={i}>
                        <span className="bullet">▸</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="card-footer-hint">
                {isExpanded ? 'Click to collapse' : 'Click to view details'}
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        .projects-section {
          padding: 30px 0;
        }
        .projects-intro {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 20px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .projects-grid.projects-active {
          opacity: 1;
          transform: translateY(0);
        }
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          gap: 10px;
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
        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
        }
        .title-area {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        .priority-badge {
          font-size: 0.65rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 20px;
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
        .toggle-icon {
          font-size: 1.2rem;
          font-weight: bold;
          color: #a78bfa;
          background: rgba(167, 139, 250, 0.1);
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .project-subtitle {
          font-size: 0.85rem;
          font-weight: 600;
          color: #a78bfa;
          margin: 0;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .tech-tag {
          font-size: 0.68rem;
          font-weight: 500;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
        }
        .project-details {
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: fadeIn 0.3s ease;
        }
        .project-desc {
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin: 0;
        }
        .project-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .project-points li {
          font-size: 0.8rem;
          color: #cbd5e1;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
        .bullet {
          color: #a78bfa;
          font-weight: bold;
        }
        .card-footer-hint {
          font-size: 0.7rem;
          color: #94a3b8;
          font-style: italic;
          margin-top: 4px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
