import React, { useEffect, useState } from "react";
import { FaLinkedin, FaDownload, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import "../styles/home.css";
import resumePDF from "../Files/Logo/Ermiyas _Hailemichael.pdf";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeDownload = (e) => {
    e.preventDefault();
    // Open the PDF in a new window
    window.open(resumePDF, '_blank');
  };

  return (
    <section className="home-container">
      <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="profile-picture">
          <div className="profile-picture-inner">
            <img src="Ermibk.jpg" alt="Ermiyas Hailemichael's profile" className="glow-effect" />
            <div className="profile-picture-overlay">
              <div className="profile-picture-content">
                <p>Hover to see more</p>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="name">Ermiyas Hailemichael</h1>
        <h2 className="title">
          <TypeAnimation
            sequence={[
              "Backend Engineer (Java)",
              1600,
              "Software Developer",
              1400,
              "React Developer",
              1400,
              "Web Developer",
              1400,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </h2>
      </div>

      <div className="skills-container">
        <div className="skill-tag">JavaScript</div>
        <div className="skill-tag">React</div>
        <div className="skill-tag">Node.js</div>
        <div className="skill-tag">HTML/CSS</div>
        <div className="skill-tag">Python</div>
      </div>

      <div className="about-me">
        <p>
          I focus on designing and shipping backend services—APIs, data stores, and reliability tooling—that keep products fast and stable. I enjoy turning requirements into clean contracts, hardening systems with observability, and iterating with measurable impact.
        </p>
      </div>

      <div className="button-container">
        <button 
          onClick={handleResumeDownload}
          className="icon-button download-button"
        >
          <FaDownload className="button-icon" /> 
          <span>View Resume</span>
        </button>
        <a 
          href="https://www.linkedin.com/in/ehailemichael/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icon-button linkedin-button"
        >
          <FaLinkedin className="button-icon" /> 
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/ErmiyasHailemichael" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icon-button github-button"
        >
          <FaGithub className="button-icon" /> 
          <span>GitHub</span>
        </a>
        <a
          href="https://cal.com/ermiyas-hailemichael/15min" 
          target="_blank"
          rel="noopener noreferrer"
          className="icon-button linkedin-button"
        >
          <span>Book a 15-min call</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
