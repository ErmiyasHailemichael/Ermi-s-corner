// import React from 'react';
// import '../styles/project.css';

// const Projects = () => {
//   // Array of project details
//   const projectData = [
//     {
//       title: 'Project 1',
//       description: 'A brief description of Project 1 and its key features.',
//       githubLink: 'https://github.com/your-username/project1',
//       liveDemoLink: 'https://your-live-demo-link.com/project1',
//       blogLink: 'https://your-blog-link.com/project1',
//     },
//     {
//       title: 'Project 2',
//       description: 'A brief description of Project 2 and its key features.',
//       githubLink: 'https://github.com/your-username/project2',
//       liveDemoLink: 'https://your-live-demo-link.com/project2',
//       blogLink: 'https://your-blog-link.com/project2',
//     },
//     {
//       title: 'Project 3',
//       description: 'A brief description of Project 3 and its key features.',
//       githubLink: 'https://github.com/your-username/project3',
//       liveDemoLink: 'https://your-live-demo-link.com/project3',
//       blogLink: 'https://your-blog-link.com/project3',
//     },
//     {
//         title: 'Project 4',
//         description: 'A brief description of Project 3 and its key features.',
//         githubLink: 'https://github.com/your-username/project3',
//         liveDemoLink: 'https://your-live-demo-link.com/project3',
//         blogLink: 'https://your-blog-link.com/project3',
//       },
//       {
//         title: 'Project 5',
//         description: 'A brief description of Project 3 and its key features.',
//         githubLink: 'https://github.com/your-username/project3',
//         liveDemoLink: 'https://your-live-demo-link.com/project3',
//         blogLink: 'https://your-blog-link.com/project3',
//       },
//   ];

//   return (
//     <section id="projects" className="projects">
//       <h1>My Projects</h1>
//       <div className="container">
//         {projectData.map((project, index) => (
//           <div className="box" key={index}>
//             <span></span>
//             <div className="content">
//               <h2>{project.title}</h2>
//               <p>{project.description}</p>
//               <div className="links">
//                 <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                   GitHub
//                 </a>
//                 <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
//                   Live Demo
//                 </a>
//                 <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
//                   Blog
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

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
      backgroundImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add background image URL
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2 and its key features.',
      githubLink: 'https://github.com/your-username/project2',
      liveDemoLink: 'https://your-live-demo-link.com/project2',
      blogLink: 'https://your-blog-link.com/project2',
      backgroundImage: 'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=600', // Add background image URL
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3 and its key features.',
      githubLink: 'https://github.com/your-username/project3',
      liveDemoLink: 'https://your-live-demo-link.com/project3',
      blogLink: 'https://your-blog-link.com/project3',
      backgroundImage: 'https://images.pexels.com/photos/4464438/pexels-photo-4464438.jpeg?auto=compress&cs=tinysrgb&w=600', // Add background image URL
    },
    {
      title: 'Project 4',
      description: 'A brief description of Project 4 and its key features.',
      githubLink: 'https://github.com/your-username/project4',
      liveDemoLink: 'https://your-live-demo-link.com/project4',
      blogLink: 'https://your-blog-link.com/project4',
      backgroundImage: 'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=600', // Add background image URL
    },
    {
      title: 'Project 5',
      description: 'A brief description of Project 5 and its key features.',
      githubLink: 'https://github.com/your-username/project5',
      liveDemoLink: 'https://your-live-demo-link.com/project5',
      blogLink: 'https://your-blog-link.com/project5',
      backgroundImage: 'https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=600', // Add background image URL
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="container">
        {projectData.map((project, index) => (
          <div
            className="box"
            key={index}
            style={{
              backgroundImage: `url(${project.backgroundImage})`, // Set background image
              backgroundSize: 'cover', // Cover the entire box
              backgroundPosition: 'center', // Center the image
            }}
          >
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
