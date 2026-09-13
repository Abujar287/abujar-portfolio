import React from 'react'

function App() {
  return (
    <main className="hero">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="nav">
        <div className="logo">AA<span>.</span></div>
        <div className="nav-text">DATA & ANALYTICS</div>
      </nav>

      <section className="content">
        <div className="intro">
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

          <p className="description">
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

          <div className="actions">
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
      </section>

      <div className="stats">
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
    </main>
  )
}

export default App
