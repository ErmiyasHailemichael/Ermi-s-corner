import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/about.css';

const contact = {
  email: 'hailemryias@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ehailemichael/',
  github: 'https://github.com/ErmiyasHailemichael',
  location: 'Seattle, WA',
};

const personalIntro = `I'm a software engineer who loves building backend systems and APIs that solve real problems. When I'm not coding, I teach programming to kids because I believe in making tech accessible to everyone. Currently exploring Spring Boot, building scalable APIs, and always learning something new.`;

const featuredProjects = [
  {
    title: 'BuildaBite',
    description: 'Java CLI application for building burritos/bowls with receipt generation',
    tech: ['Java', 'JUnit', 'CLI'],
    link: '/projects',
    github: 'https://github.com/ErmiyasHailemichael/BuildaBite',
  },
  {
    title: 'E-Commerce API (Clothing Store)',
    description: 'Spring Boot REST API with JWT authentication and persistent shopping carts',
    tech: ['Java 17', 'Spring Boot', 'JWT', 'MySQL'],
    link: '/projects',
    github: '#',
  },
];

const experience = [
  {
    role: 'Coding Instructor',
    company: 'Coding with Kids',
    location: 'Remote',
    period: 'Nov 2023 - Present',
    tech: ['JavaScript', 'Python', 'React', 'Node.js', 'Scratch'],
    description: 'Teaching 200+ students programming fundamentals and modern web development',
    highlights: [
      'Created 50+ hands-on coding projects that students actually shipped',
      'Built curriculum using industry-standard tools (VS Code, Replit, code.org)',
      'Taught game development for Minecraft and Roblox platforms',
    ],
  },
];

const education = [
  {
    title: 'Certificate in Application Development',
    org: 'Year Up United',
    location: 'Seattle, WA',
    period: 'Aug 2024 - Present',
    description: 'Intensive career development program focused on professional skills and technical training',
    coursework: ['Application Development', 'Computer Architecture', 'Programming', 'Database Fundamentals', 'Software Testing', 'Software Development'],
  },
  {
    title: "Associate's Degree - Computer Science",
    org: 'North Seattle College',
    location: 'Seattle, WA',
    period: '2022 - 2024',
    description: 'Completed 80+ credits in computer science fundamentals',
    coursework: ['Introduction to Programming', 'Programming I & II', 'Calculus I & II', 'Physics', 'Data Structures'],
  },
];

const techSkills = {
  languages: ['JavaScript', 'Python', 'Java', 'HTML', 'CSS'],
  frameworks: ['React', 'Node.js', 'Spring Boot'],
  databases: ['MongoDB', 'MySQL'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code'],
};

const About = () => {
  return (
    <section className="about-portfolio">
      {/* Header with Photo */}
      <div className="about-header">
        <div className="about-header-content">
          <h1 className="about-name">Ermiyas Hailemichael</h1>
          <p className="about-title">Software Engineer</p>
          <div className="about-contact">
            <a href={`mailto:${contact.email}`} className="contact-link">
              <FaEnvelope /> {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub /> GitHub
            </a>
            <span className="contact-link">
              <FaMapMarkerAlt /> {contact.location}
            </span>
          </div>
        </div>
        <img src="/Bios.png" alt="Ermiyas Hailemichael" className="about-photo" />
      </div>

      {/* Personal Introduction */}
      <div className="about-intro">
        <p>{personalIntro}</p>
      </div>

      <div className="about-grid">
        {/* Main Content */}
        <div className="about-main">
          {/* Featured Work */}
          <section className="about-section">
            <h2>Featured Work</h2>
            <p className="section-intro">Check out some of my recent projects. <Link to="/projects" className="inline-link">View all projects <FaExternalLinkAlt /></Link></p>
            <div className="featured-projects">
              {featuredProjects.map((project) => (
                <div className="featured-project-card" key={project.title}>
                  <div className="featured-project-header">
                    <h3>{project.title}</h3>
                    <div className="featured-project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge-small">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <p className="featured-project-desc">{project.description}</p>
                  <div className="featured-project-links">
                    <Link to={project.link} className="project-link">
                      View Details <FaExternalLinkAlt />
                    </Link>
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="about-section">
            <h2>Experience</h2>
            {experience.map((item) => (
              <div className="experience-card" key={item.role + item.company}>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <p className="exp-company">{item.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{item.period}</span>
                    <span className="exp-location">{item.location}</span>
                  </div>
                </div>
                <p className="exp-description">{item.description}</p>
                <div className="exp-tech">
                  {item.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <ul className="exp-highlights">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="about-section">
            <h2>Education</h2>
            {education.map((edu) => (
              <div className="education-card" key={edu.title}>
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.title}</h3>
                    <p className="edu-school">{edu.org}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-location">{edu.location}</span>
                  </div>
                </div>
                <p className="edu-description">{edu.description}</p>
                <div className="edu-coursework">
                  <strong>Coursework:</strong> {edu.coursework.join(', ')}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <aside className="about-sidebar">
          {/* Tech Stack */}
          <section className="sidebar-section">
            <h3>Tech Stack</h3>
            
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-chips">
                {techSkills.languages.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>Frameworks & Libraries</h4>
              <div className="skill-chips">
                {techSkills.frameworks.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>Databases</h4>
              <div className="skill-chips">
                {techSkills.databases.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>Tools</h4>
              <div className="skill-chips">
                {techSkills.tools.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
};

export default About;
