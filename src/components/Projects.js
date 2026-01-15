import React, { useState, useEffect } from 'react';
import '../styles/project.css';
import { projects, otherProjects } from '../data/portfolioData';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projectData = projects;

  const categories = ['all', 'backend'];
  const sortOptions = [
    { value: 'date', label: 'Completion Date' },
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
        (project.problem?.toLowerCase().includes(searchLower) || false) ||
        (project.techStack?.some(tech => tech.toLowerCase().includes(searchLower)) || false);
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (!a || !b) return 0;
      
      switch (sortBy) {
        case 'date':
          return new Date(b.completionDate || 0) - new Date(a.completionDate || 0);
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
        <div className="project-grid">
          {filteredAndSortedProjects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => handleProjectClick(project)}
              style={
                project.backgroundImage
                  ? {
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url(${project.backgroundImage})`,
                    }
                  : undefined
              }
            >
              <div className="card-header">
                <div className="card-title">
                  <p className="project-category">{project.category || 'Project'}</p>
                  <h2>{project.title}</h2>
                </div>
                <div className="badge-row">
                  {project.featured && <span className="featured-badge">Featured</span>}
                  {project.status && (
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              <p className="project-problem">{project.problem}</p>

              <div className="technologies">
                {project.techStack?.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-meta">
                <span className="date-badge">
                  {project.completionDate
                    ? `Completed: ${new Date(project.completionDate).toLocaleDateString()}`
                    : 'In progress'}
                </span>
              </div>

              <div className="links">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demo
                  </a>
                )}
                {project.links?.blog && (
                  <a
                    href={project.links.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Architecture Notes
                  </a>
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
                <span className="date-badge">
                  Completed: {new Date(selectedProject.completionDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description"><strong>Problem:</strong> {selectedProject.problem}</p>
              <p className="modal-description"><strong>Solution:</strong> {selectedProject.solution}</p>
              <p className="modal-description"><strong>Impact:</strong></p>
              <ul className="modal-list">
                {Array.isArray(selectedProject.impact) ? selectedProject.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                )) : <li>{selectedProject.impact}</li>}
              </ul>
              <p className="modal-description"><strong>My role:</strong></p>
              <ul className="modal-list">
                {Array.isArray(selectedProject.myRole) ? selectedProject.myRole.map((item, idx) => (
                  <li key={idx}>{item}</li>
                )) : <li>{selectedProject.myRole}</li>}
              </ul>

              <div className="modal-technologies">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.techStack?.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                <a href={selectedProject.links?.github} target="_blank" rel="noopener noreferrer" className="modal-link">View on GitHub</a>
                <a href={selectedProject.links?.demo} target="_blank" rel="noopener noreferrer" className="modal-link">Demo</a>
                <a href={selectedProject.links?.blog} target="_blank" rel="noopener noreferrer" className="modal-link">Architecture Notes</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
