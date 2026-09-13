import React, { useState, useEffect } from 'react';
import './App.css';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technicalSkills = [
    { name: 'SQL & Database Management', category: 'Data Querying & Relational Databases' },
    { name: 'Python Programming', category: 'Data Analysis, Pandas & Automation' },
    { name: 'Microsoft Excel & Advanced Analytics', category: 'Data Modeling & Complex Functions' },
    { name: 'Business Intelligence & Reporting', category: 'Dashboards, KPI Tracking & Insights' },
    { name: 'CRM & CLM Systems', category: 'Customer Lifecycle & Retention Strategy' },
    { name: 'Cross-Functional Team Collaboration', category: 'Business Strategy & Operations' },
  ];

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => scrollToSection('home')}>
          AG<span>.</span>
        </div>
        <div className="nav-links">
          {['home', 'about', 'skills', 'experience', 'achievements', 'education', 'contact'].map(
            (item) => (
              <button
                key={item}
                className={activeSection === item ? 'active' : ''}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero section">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-label">DATA & BUSINESS INSIGHTS</p>

            <div className="hero-title">
              <div className="title-line">
                <span className="word word-1">ABUJAR</span>
              </div>
              <div className="title-line second-line">
                <span className="word word-2 separator">AL-GIFARI</span>
              </div>
            </div>

            <h1>
              <span>DATA ANALYST</span>
              <strong>BUSINESS INTELLIGENCE</strong>
            </h1>

            <p className="hero-description">
              Turning complex data into actionable insights, intelligent dashboards,
              automated reporting solutions, and data-driven business decisions.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection('experience')}
              >
                View My Experience <span>→</span>
              </button>
              <button
                className="secondary-button"
                onClick={() => scrollToSection('contact')}
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

          {/* HERO PHOTO CONTAINER */}
          <div className="hero-photo">
            <div className="photo-frame">
              <div className="photo-corner top-left"></div>
              <div className="photo-corner top-right"></div>
              <div className="photo-corner bottom-left"></div>
              <div className="photo-corner bottom-right"></div>
              
              {/* public ফোল্ডারে hero-photo.jpg ছবিটি রাখবেন */}
              <img 
                src="/hero-photo.jpg" 
                alt="Abujar Al-Gifari" 
                onError={(e) => {
                  // যদি ছবি লোড না হয়, তবে টেক্সট মেসেজ হাইড থাকবে
                  e.target.style.display = 'block';
                }}
              />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span> SCROLL TO EXPLORE
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about section">
        <div className="section-title">
          <h2>ABOUT ME</h2>
        </div>
        <div className="about-grid">
          <div>
            <p className="large-text">
              I am a results-driven Data Analyst passionate about uncovering hidden
              patterns and translating raw data into strategic business value.
            </p>
            <p>
              With specialized experience across SQL, Python, advanced Excel, and CRM/CLM
              analytics, I bridge the gap between technical data execution and high-level
              business decision-making.
            </p>
          </div>
          <div className="about-box">
            <div>
              <span>FOCUS</span>
              <strong>Data Analysis & BI</strong>
            </div>
            <div>
              <span>TOOLS</span>
              <strong>SQL, Python, Excel, CRM</strong>
            </div>
            <div>
              <span>LOCATION</span>
              <strong>Bangladesh</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="technical-section section">
        <div className="section-title">
          <h2>TECHNICAL SKILLS</h2>
        </div>
        <div className="technical-showcase technical-active">
          <div className="technical-top">
            <div className="technical-heading">
              <div className="technical-dot"></div>
              <span>CORE COMPETENCIES</span>
            </div>
            <span className="technical-count">06 TOTAL SKILLS</span>
          </div>

          <div className="technical-list">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="technical-item"
                style={{ '--technical-delay': `${index * 0.1}s` }}
              >
                <div className="technical-number">0{index + 1}</div>
                <div className="technical-main">
                  <div className="technical-name">{skill.name}</div>
                  <div className="technical-meta">
                    <span>{skill.category}</span>
                  </div>
                </div>
                <div className="technical-arrow">↗</div>
              </div>
            ))}
          </div>

          <div className="technical-footer">
            <span>SQL</span>
            <span>PYTHON</span>
            <span>EXCEL</span>
            <span>CRM</span>
            <span>CLM</span>
            <span>BI</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="experience section">
        <div className="section-title">
          <h2>EXPERIENCE</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="date">2021 — PRESENT</p>
              <h3>Data Analyst & BI Specialist</h3>
              <h4>Business Analytics Team</h4>
              <p>
                Developing end-to-end data pipelines, designing interactive business
                dashboards, and conducting in-depth retention and lifecycle analyses.
              </p>
              <ul>
                <li>Optimized SQL queries to extract multi-table operational data.</li>
                <li>Built automated Python reporting pipelines to minimize manual effort.</li>
                <li>Analyzed customer journeys using CRM and CLM data frameworks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="achievements section">
        <div className="section-title">
          <h2>ACHIEVEMENTS</h2>
        </div>
        <div className="achievement-grid">
          <div className="achievement-card">
            <p>Automated core reporting workflows reducing manual data processing time.</p>
          </div>
          <div className="achievement-card">
            <p>Designed key performance executive dashboards to streamline management decisions.</p>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="education section">
        <div className="section-title">
          <h2>EDUCATION</h2>
        </div>
        <div className="education-grid">
          <div className="education-card">
            <p>DEGREE</p>
            <h3>Bachelor's Degree</h3>
            <h4>Business & Technology Focus</h4>
            <span>Specialized in Data & Business Analytics</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact section">
        <div className="contact-content">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            LET'S WORK <span>TOGETHER.</span>
          </h2>
          <p>
            Have a project, job opportunity, or data challenge in mind? Feel free to reach out.
          </p>

          <div className="contact-info">
            <a href="mailto:abujar.gifari@example.com">
              <span>EMAIL</span>
              abujar.gifari@example.com
            </a>
            <div>
              <span>LOCATION</span>
              Bangladesh
            </div>
          </div>

          <div className="contact-buttons">
            <a href="mailto:abujar.gifari@example.com" className="primary-button">
              Send Email <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>© {new Date().getFullYear()} ABUJAR AL-GIFARI</div>
        <div>ALL RIGHTS RESERVED</div>
      </footer>
    </div>
  );
}
