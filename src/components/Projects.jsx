import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'DOCSMART',
      category: 'web',
      image: '/project1.jpg',
      description: 'A document management system with smart search and organization features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'EZcode',
      category: 'app',
      image: '/project2.jpg',
      description: 'A coding learning platform with interactive lessons and code exercises.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Pacman',
      category: 'game',
      image: '/project3.jpg',
      description: 'A recreation of the classic arcade game with modern features and graphics.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Valentine Website',
      category: 'web',
      image: '/project4.jpg',
      description: 'An interactive Valentine-themed website with animations and personalized messages.',
      technologies: ['React', 'CSS Animations', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Indipixel',
      category: 'ui',
      image: '/project5.jpg',
      description: 'A pixel art creation tool with sharing and community features.',
      technologies: ['Vue.js', 'Canvas API', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'CrushxShradha',
      category: 'web',
      image: '/project6.jpg',
      description: 'A personalized fan website with interactive elements and media gallery.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 7,
      title: 'Invertis Prep',
      category: 'app',
      image: '/project7.jpg',
      description: 'An exam preparation platform for Invertis University students with practice tests and study materials.',
      technologies: ['React', 'Firebase', 'Material UI'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different areas of web development.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            {['all', 'web', 'app', 'ui'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-6 py-2 rounded-full mb-2 capitalize transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-3 py-1 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    Live Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                  >
                    Code
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 