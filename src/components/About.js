import React from 'react';
import '../styles/about.css'; // Make sure this path is correct

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>I am a software developer skilled in various technologies.</p>

      {/* Skills Section */}
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-boxes">
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">Python</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">React</div>
          <div className="skill-box">Node.js</div>
          {/* Add more skills as needed */}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="education">
        <h3>Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <h4>Computer Science - North Seattle College</h4>
            <p>2023 - Present</p>
          </div>
          {/* Add more timeline items as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
