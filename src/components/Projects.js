import React, { useState } from 'react';
import '../styles/project.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Array of project details with enhanced structure
  const projectData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A brief description of Project 1 and its key features.',
      longDescription: 'A more detailed description of Project 1, including the problem it solves, the technologies used, and the challenges overcome.',
      githubLink: 'https://github.com/your-username/project1',
      liveDemoLink: 'https://your-live-demo-link.com/project1',
      blogLink: 'https://your-blog-link.com/project1',
      backgroundImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      featured: true,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A brief description of Project 2 and its key features.',
      longDescription: 'A more detailed description of Project 2, including the problem it solves, the technologies used, and the challenges overcome.',
      githubLink: 'https://github.com/your-username/project2',
      liveDemoLink: 'https://your-live-demo-link.com/project2',
      blogLink: 'https://your-blog-link.com/project2',
      backgroundImage: 'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      featured: true,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A brief description of Project 3 and its key features.',
      longDescription: 'A more detailed description of Project 3, including the problem it solves, the technologies used, and the challenges overcome.',
      githubLink: 'https://github.com/your-username/project3',
      liveDemoLink: 'https://your-live-demo-link.com/project3',
      blogLink: 'https://your-blog-link.com/project3',
      backgroundImage: 'https://images.pexels.com/photos/4464438/pexels-photo-4464438.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      category: 'backend',
      featured: false,
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A brief description of Project 4 and its key features.',
      longDescription: 'A more detailed description of Project 4, including the problem it solves, the technologies used, and the challenges overcome.',
      githubLink: 'https://github.com/your-username/project4',
      liveDemoLink: 'https://your-live-demo-link.com/project4',
      blogLink: 'https://your-blog-link.com/project4',
      backgroundImage: 'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      category: 'web',
      featured: false,
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'A brief description of Project 5 and its key features.',
      longDescription: 'A more detailed description of Project 5, including the problem it solves, the technologies used, and the challenges overcome.',
      githubLink: 'https://github.com/your-username/project5',
      liveDemoLink: 'https://your-live-demo-link.com/project5',
      blogLink: 'https://your-blog-link.com/project5',
      backgroundImage: 'https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'GraphQL', 'AWS'],
      category: 'web',
      featured: true,
    },
  ];

  // Filter categories
  const categories = ['all', 'web', 'mobile', 'backend'];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === selectedFilter);

  // Handle filter change
  const handleFilterChange = (category) => {
    setIsLoading(true);
    setSelectedFilter(category);
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      
      {/* Filter buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="loading">Loading projects...</div>
      ) : (
        <div className="container">
          {filteredProjects.map((project) => (
            <div
              className="box"
              key={project.id}
              style={{
                backgroundImage: `url(${project.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span></span>
              <div className="content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                
                {/* Technologies tags */}
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

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

                {/* Featured badge */}
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
