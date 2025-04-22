import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: '/project1.jpg',
      description: 'A fully responsive e-commerce platform with product browsing, cart functionality, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      image: '/project2.jpg',
      description: 'A productivity app for managing tasks, setting priorities, and tracking progress with team collaboration features.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Dashboard UI Design',
      category: 'ui',
      image: '/project3.jpg',
      description: 'A modern dashboard interface with data visualization, user management, and customizable widgets.',
      technologies: ['Figma', 'Adobe XD', 'Illustrator'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      category: 'app',
      image: '/project4.jpg',
      description: 'Real-time weather application showing forecasts, alerts, and historical data for multiple locations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Personal Finance Tracker',
      category: 'web',
      image: '/project5.jpg',
      description: 'Web application for tracking expenses, creating budgets, and visualizing spending patterns.',
      technologies: ['Vue.js', 'Firebase', 'D3.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'Social Media UI Kit',
      category: 'ui',
      image: '/project6.jpg',
      description: 'Comprehensive UI kit for social media applications with customizable components and themes.',
      technologies: ['Sketch', 'Figma', 'Photoshop'],
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