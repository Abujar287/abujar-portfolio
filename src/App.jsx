import React, { useEffect, useRef, useState } from 'react'

const professionalExperience = [
  {
    title: 'Sr. Data Analyst',
    company: 'Sheba.xyz Services Limited',
    location: 'Jashore, Bangladesh',
    period: '11/2023 - Present',
    duration: '2 Years 10 Months',
    responsibilities: [
      'Business Data Analysis & Actionable Insights',
      'Automated Dashboard & Operational Reporting',
      'Telesales & KAM KPI Performance Analysis',
      'Customer Cohort Analysis & Lead Optimization',
      'Cross-functional Team Performance Analysis',
      'Payroll, Attendance & Agent Utilization Automation',
      'SQL Query Optimization & Reporting Workflow Improvement',
    ],
  },
  {
    title: 'Jr. Data Analyst',
    company: 'Chaldal PLC',
    location: 'Jashore, Bangladesh',
    period: '09/2022 - 10/2023',
    duration: '1 Year 2 Months',
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
    duration: '1 Year 6 Months',
    responsibilities: [
      'Product Pricing & Mapping',
      'Sudden Report Analysis',
      'Cohort Analysis',
      'Protocol Ticket Analysis',
    ],
  },
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const experienceRef = useRef(null)

  useEffect(() => {
    const node = experienceRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="exp-section">
      <div className="exp-container">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>

        <div
          ref={experienceRef}
          className={`exp-grid ${isVisible ? 'is-animated' : ''}`}
        >
          {professionalExperience.map((job, index) => (
            <div
              key={`${job.company}-${index}`}
              className="exp-card"
              style={{ '--delay': `${index * 0.18}s` }}
            >
              <div className="exp-header">
                <h3 className="exp-role">{job.title}</h3>
                <h4 className="exp-company">{job.company}</h4>
                <div className="exp-meta">
                  <span>📍 {job.location}</span>
                  <span>📅 {job.period} ({job.duration})</span>
                </div>
              </div>

              <div className="exp-divider" />

              <ul className="exp-list">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-point" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Typography & Font Fix */
        .exp-section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1e293b;
          padding: 60px 20px;
          background: #fafafa;
        }

        .exp-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-title h2 {
          font-size: 1.85rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 32px;
          letter-spacing: -0.02em;
        }

        .exp-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Base Card Style */
        .exp-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px 28px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          
          /* Initial Animation State */
          opacity: 0;
          transform: translateY(30px);
          will-change: opacity, transform;
        }

        /* Trigger Animation when visible */
        .exp-grid.is-animated .exp-card {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--delay, 0s);
        }

        /* Header Layout */
        .exp-role {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .exp-company {
          font-size: 1rem;
          font-weight: 500;
          color: #3b82f6;
          margin: 0 0 10px 0;
        }

        .exp-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .exp-divider {
          height: 1px;
          background: #f1f5f9;
          margin: 16px 0;
        }

        /* List & Custom Bullet Fix */
        .exp-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .exp-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          line-height: 1.5;
          color: #334155;
        }

        /* Custom Modern Bullet Circle */
        .bullet-point {
          width: 6px;
          height: 6px;
          background-color: #3b82f6;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        /* Smooth Animation Keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
