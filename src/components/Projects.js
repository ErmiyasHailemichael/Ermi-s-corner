import React, { useState, useEffect } from 'react';
import '../styles/project.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      difficulty: 'Advanced',
      status: 'Completed',
      completionDate: '2024-03-15',
      stats: {
        commits: 156,
        contributors: 3,
        issues: 12,
        stars: 45
      }
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
      difficulty: 'Intermediate',
      status: 'In Progress',
      completionDate: '2024-04-01',
      stats: {
        commits: 89,
        contributors: 2,
        issues: 8,
        stars: 23
      }
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
      difficulty: 'Beginner',
      status: 'Completed',
      completionDate: '2024-02-28',
      stats: {
        commits: 45,
        contributors: 1,
        issues: 5,
        stars: 12
      }
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
      difficulty: 'Intermediate',
      status: 'In Progress',
      completionDate: '2024-05-01',
      stats: {
        commits: 67,
        contributors: 2,
        issues: 9,
        stars: 18
      }
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
      difficulty: 'Advanced',
      status: 'Completed',
      completionDate: '2024-03-01',
      stats: {
        commits: 234,
        contributors: 4,
        issues: 15,
        stars: 89
      }
    }
  ];

  // Filter categories
  const categories = ['all', 'web', 'mobile', 'backend'];
  const sortOptions = [
    { value: 'date', label: 'Completion Date' },
    { value: 'difficulty', label: 'Difficulty' },
    { value: 'stars', label: 'Stars' },
    { value: 'name', label: 'Name' }
  ];

  // Filter and sort projects
  const filteredAndSortedProjects = projectData
    .filter(project => {
      if (!project) return false;
      
      const matchesCategory = selectedFilter === 'all' || project.category === selectedFilter;
      const searchLower = searchQuery.toLowerCase();
      
      const matchesSearch = 
        (project.title?.toLowerCase().includes(searchLower) || false) ||
        (project.description?.toLowerCase().includes(searchLower) || false) ||
        (project.technologies?.some(tech => tech.toLowerCase().includes(searchLower)) || false);
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (!a || !b) return 0;
      
      switch (sortBy) {
        case 'date':
          return new Date(b.completionDate || 0) - new Date(a.completionDate || 0);
        case 'difficulty':
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return (difficultyOrder[b.difficulty] || 0) - (difficultyOrder[a.difficulty] || 0);
        case 'stars':
          return (b.stats?.stars || 0) - (a.stats?.stars || 0);
        case 'name':
          return (a.title || '').localeCompare(b.title || '');
        default:
          return 0;
      }
    });

  // Handle filter change
  const handleFilterChange = (category) => {
    setIsLoading(true);
    setSelectedFilter(category);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle project click
  const handleProjectClick = (project) => {
    if (!project) return;
    setSelectedProject(project);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      
      {/* Search and Sort Controls */}
      <div className="project-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="sort-container">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                Sort by: {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

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
          {filteredAndSortedProjects.map((project) => (
            <div
              className="box"
              key={project.id}
              style={{
                backgroundImage: `url(${project.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => handleProjectClick(project)}
            >
              <span></span>
              <div className="content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                
                {/* Technologies tags */}
                <div className="technologies">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-meta">
                  <span className={`status-badge ${project.status?.toLowerCase()}`}>
                    {project.status}
                  </span>
                  <span className="difficulty-badge">
                    {project.difficulty}
                  </span>
                </div>

                <div className="links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    GitHub
                  </a>
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    Live Demo
                  </a>
                  <a href={project.blogLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
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

      {/* Project Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-meta">
                <span className={`status-badge ${selectedProject.status?.toLowerCase()}`}>
                  {selectedProject.status}
                </span>
                <span className="difficulty-badge">
                  {selectedProject.difficulty}
                </span>
                <span className="date-badge">
                  Completed: {new Date(selectedProject.completionDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedProject.longDescription}</p>
              
              <div className="modal-stats">
                <div className="stat-item">
                  <span className="stat-value">{selectedProject.stats?.commits || 0}</span>
                  <span className="stat-label">Commits</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{selectedProject.stats?.contributors || 0}</span>
                  <span className="stat-label">Contributors</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{selectedProject.stats?.issues || 0}</span>
                  <span className="stat-label">Issues</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{selectedProject.stats?.stars || 0}</span>
                  <span className="stat-label">Stars</span>
                </div>
              </div>

              <div className="modal-technologies">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.technologies?.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                  View on GitHub
                </a>
                <a href={selectedProject.liveDemoLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                  Live Demo
                </a>
                <a href={selectedProject.blogLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                  Read Blog Post
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
