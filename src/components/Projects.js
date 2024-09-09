import React from 'react';
import '../styles/project.css';

const Projects = () => {
  // Array of project details
  const projectData = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1 and its key features.',
      githubLink: 'https://github.com/your-username/project1',
      liveDemoLink: 'https://your-live-demo-link.com/project1',
      blogLink: 'https://your-blog-link.com/project1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2 and its key features.',
      githubLink: 'https://github.com/your-username/project2',
      liveDemoLink: 'https://your-live-demo-link.com/project2',
      blogLink: 'https://your-blog-link.com/project2',
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3 and its key features.',
      githubLink: 'https://github.com/your-username/project3',
      liveDemoLink: 'https://your-live-demo-link.com/project3',
      blogLink: 'https://your-blog-link.com/project3',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="container">
        {projectData.map((project, index) => (
          <div className="box" key={index}>
            <span></span>
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
