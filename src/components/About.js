import React, { useState } from 'react';
import { FaLinkedin, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaSass, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSvelte, SiNuxtdotjs, SiAstro, SiExpress, SiPrisma } from 'react-icons/si';
import '../styles/about.css';

const skillsData = [
  {
    category: 'Featured',
    skills: [
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Vue', icon: <FaVuejs /> },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'SASS', icon: <FaSass /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Vue', icon: <FaVuejs /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Prisma', icon: <SiPrisma /> },
    ],
  },
];

const educationData = [
  {
    year: '2023 - Present',
    degree: 'Computer Science',
    school: 'North Seattle College',
    description: 'Currently pursuing a degree in Computer Science with a focus on software development and AI.'
  },
  {
    year: '2018 - 2022',
    degree: 'High School Diploma',
    school: 'Somewhere High School',
    description: 'Graduated with honors, participated in robotics and coding clubs.'
  }
];

const PAGES = ['about', 'skills', 'education'];

const About = () => {
  const [page, setPage] = useState(0); // 0: About, 1: Skills, 2: Education

  const goNext = () => setPage((p) => Math.min(p + 1, PAGES.length - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <div className="about-page-wrapper">
      {/* Left Social Bar */}
      <div className="about-social-bar">
        <a href="https://www.linkedin.com/in/ermiyas-haile/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      {/* Main Content */}
      <div className="about-sections">
        {/* About Me Page */}
        {page === 0 && (
          <section className="about-section">
            <h2>About Me</h2>
            <p>
              I am a passionate software developer with a love for building dynamic and user-friendly web applications. My journey in tech started with curiosity and has grown into a deep interest in JavaScript, React, and AI. I enjoy solving real-world problems and am always eager to learn new technologies and improve my skills.
            </p>
            <button className="next-arrow right" onClick={goNext} aria-label="Next: Skills">
              <FaArrowRight />
            </button>
          </section>
        )}
        {/* Skills Page */}
        {page === 1 && (
          <section className="about-section">
            <h2>Skills</h2>
            {skillsData.map((group) => (
              <div key={group.category} className="skill-group">
                <h4>{group.category}</h4>
                <div className="skill-boxes">
                  {group.skills.map((skill) => (
                    <div className="skill-box" key={skill.name}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button className="next-arrow left" onClick={goPrev} aria-label="Previous: About Me">
              <FaArrowLeft />
            </button>
            <button className="next-arrow right" onClick={goNext} aria-label="Next: Education">
              <FaArrowRight />
            </button>
          </section>
        )}
        {/* Education Page */}
        {page === 2 && (
          <section className="about-section">
            <h2>Education</h2>
            <div className="education-timeline">
              {educationData.map((edu, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-year">{edu.year}</div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="timeline-school">{edu.school}</p>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="next-arrow left" onClick={goPrev} aria-label="Previous: Skills">
              <FaArrowLeft />
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default About;

