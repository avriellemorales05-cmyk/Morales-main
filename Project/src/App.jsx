import React, { useState, useEffect } from 'react';
import './App-IT-Style.css';
import profileImg from './assets/profilee.jpg';


function App() {
  const [isDark, setIsDark] = useState(false);

  // This replicates your toggleTheme() function exactly
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <div className="blob"></div>

      <nav>
        <h1>Student Portfolio</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#reflection">Reflection</a></li>
        </ul>
      </nav>

      <section id="about">
        <div className="about-grid">
          <img 
            src={profileImg}
            alt="Profile" 
          />
          <div>
            <span className="tech-tag">H E L L O !</span>
            <h2 className="hero-name">Avrielle Joy Morales</h2>
            <p className="hero-description">
              I am a 3rd yr college student who wants to build a reliable, efficient, and modern software with a focus on AI integration and backend excellence. 
            </p>
            <div className="stats-flex">
              <div>
                <p className="label">Accomplishment</p>
                <p>Inventory Monitoring System</p>
                <p>Calculator System</p>
                <p>AI-Integrated Quiz System</p>
              </div>
              <div>
                <p className="label">Focus</p>
                <p>Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>HTML5, JavaScript (ES6+), PHP, C++</p>
          </div>
          <div className="skill-card">
            <h3>Frameworks & Tools</h3>
            <p>React.js, Figma, VS Code, Bootstrap 5, Git</p>
          </div>
          <div className="skill-card">
            <h3>Backend & Data</h3>
            <p>MySQL, XAMPP, API Integration</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>AI Quiz Generator with Google Classroom Integration</h3>
            <p>Integrated Web Application with Google Classroom connectivity for automated academic assessments.</p>
            <div className="project-meta">
              <strong>Stack:</strong> PHP, JS, AI API
            </div>
          </div>

          <div className="project-card">
            <h3>Inventory Monitoring System</h3>
            <p>A comprehensive solution for tracking and managing inventory levels in real-time.</p>
            <div className="project-meta">
              <strong>Stack:</strong> PHP, MySQL
            </div>
          </div>

          <div className="project-card">
            <h3>Calculator System</h3>
            <p>Efficient calculator application with a focus on user experience and performance.</p>
            <div className="project-meta">
              <strong>Stack:</strong> VB, SQLite
            </div>
          </div>
        </div>
      </section>

      <section id="reflection">
        <h2 className="section-title">Reflections</h2>
        <div className="reflection-box">
          <ul className="reflection-list">
            <li><span className="label">Core Stack</span> <span>Web Technologies (HTML/CSS/JS)</span></li>
            <li><span className="label">Strength</span> <span>Grid & Flexbox Layout Systems</span></li>
            <li><span className="label">Challenging</span> <span>Balancing clean UI with maximum content.</span></li>
            <li><span className="label">Next Milestone</span> <span>Cloud Computing & Blockchain</span></li>
            <li><span className="label">Vision</span> <span>AI-driven education system and Business Web application.</span></li>
          </ul>
        </div>
      </section>

      <footer>
        <p>Midterm Project Designed & Coded by Avrielle Joy Morales</p>
      </footer>
    </>
  );
}

export default App;