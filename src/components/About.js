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

// import React from 'react';
// import '../styles/about.css'; // Ensure this path is correct

// const About = () => {
//   return (
//     <div className="terminal">
//       <div className="terminal-header">
//         <div className="buttons">
//           <span className="close"></span>
//           <span className="minimize"></span>
//           <span className="maximize"></span>
//         </div>
//         <p className="terminal-title">johnsmith $</p>
//       </div>
//       <div className="terminal-body">
//         {/* About Me Section */}
//         <p className="command">cat aboutjohn</p>
//         <p className="output">Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!</p>
//         </div>
//         <div className="terminal-skills">
//         {/* Skills Section */}
//         <p className="command">cd skills/tools</p>
//         <p className="output">Proficient With</p>
//         <ul className="skills">
//           <li>javascript</li>
//           <li>bootstrap</li>
//           <li>react</li>
//           <li>html5</li>
//           <li>git</li>
//           <li>css3</li>
//           <li>github</li>
//           <li>figma</li>
//         </ul>
//         <p className="output">Exposed To</p>
//         <ul className="skills">
//           <li>nodejs</li>
//           <li>python</li>
//           <li>adobe illustrator</li>
//         </ul>

//         {/* Education Section (if needed) */}
//         <p className="command">cat education</p>
//         <div className="output">
//           <p>Computer Science - North Seattle College</p>
//           <p>2023 - Present</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
