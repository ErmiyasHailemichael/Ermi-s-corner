import React from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="home-container">
      
      <div className="profile-picture">
        <img src="Ermibk.jpg" alt="Ermi" className="glow-effect" />
      </div>
      
    
      <div className="about-me">
        <p>
          Hello! I'm Ermi, a passionate software developer with a love for creating dynamic and user-friendly web applications. 
          I specialize in JavaScript, React, and have a keen interest in robotics and AI. My goal is to build impactful projects that 
          solve real-world problems and to keep learning and growing in the tech world.
        </p>
      </div>

      
      <div className="button-container">
        <a href="../Files/Logo/Ermiyas _Hailemichael.pdf" download className="icon-button download-button">
          <FaDownload /> Download Resume
        </a>
        <a href="https://www.linkedin.com/in/ermiyas-haile/" target="_blank" rel="noopener noreferrer" className="icon-button linkedin-button">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Home;
