
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('Abujar Al-Gifari')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [summary, setSummary] = useState('Data & Business Insights Analyst with nearly 5 years of experience in Business Intelligence, Data Analytics, Reporting Automation, and Operational Performance Analysis.')

  return (
    <div className="app">
      <div className="form-section">
        <h1>CV Builder</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Professional Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <div className="cv-preview">
        <h1>{name}</h1>

        <h3>Data Analyst | Expert in BI Tools, Excel, SQL, Python CRM & CLM</h3>

        <p>{email}</p>
        <p>{phone}</p>

        <hr />

        <h2>Professional Summary</h2>
        <p>{summary}</p>

        <h2>Core Expertise</h2>

        <ul>
          <li>Data Analysis & Business Intelligence</li>
          <li>SQL & Database Analysis</li>
          <li>Advanced Excel & Google Sheets Automation</li>
          <li>Python & Pandas</li>
          <li>BI Dashboards & KPI Monitoring</li>
          <li>CRM & CLM Analytics</li>
          <li>Process Automation</li>
          <li>Operational Performance Analysis</li>
        </ul>

        <h2>Experience</h2>

        <h3>Senior Officer – Data & Analytics</h3>
        <p>Sheba.xyz Service Ltd. | Nov 2023 – Present</p>

        <ul>
          <li>Business data analysis and actionable insights</li>
          <li>SQL-based reporting and dashboard development</li>
          <li>Telesales and KAM KPI monitoring</li>
          <li>Customer cohort and lead optimization</li>
          <li>Call Center, DQM, Back Office and Complaint Management analytics</li>
          <li>Payroll, attendance and utilization automation</li>
        </ul>

        <h2>Education</h2>

        <h3>B.Sc. in Botany</h3>
        <p>Jashore Govt City College, National University</p>
      </div>
    </div>
  )
}

export default App
