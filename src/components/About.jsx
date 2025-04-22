import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Background</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate frontend developer with expertise in modern web development technologies.
              With a strong foundation in HTML, CSS, JavaScript, and React, I create responsive and
              efficient web applications that provide exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development began at Invertis University, where I discovered my passion for creating
              interactive and visually appealing interfaces. I've had the opportunity to participate in multiple 
              hackathons, winning two of them, which has strengthened my problem-solving abilities and 
              teamwork skills under tight deadlines.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-3">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Problem Solver</h4>
              <p className="text-gray-400">I enjoy tackling complex problems and finding elegant solutions, as demonstrated by my hackathon wins.</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-3">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Team Player</h4>
              <p className="text-gray-400">I thrive in collaborative environments and value team success, especially during hackathons.</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-3">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Frontend Expert</h4>
              <p className="text-gray-400">I write maintainable, well-documented code with a focus on HTML, CSS, JavaScript, and React.</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-3">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Continuous Learner</h4>
              <p className="text-gray-400">I constantly update my skills to stay current with the latest web technologies and best practices.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h5 className="text-4xl font-bold text-blue-400 mb-2">2+</h5>
              <p className="text-gray-300">Hackathons Won</p>
            </div>
            <div>
              <h5 className="text-4xl font-bold text-blue-400 mb-2">1+</h5>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <h5 className="text-4xl font-bold text-blue-400 mb-2">10+</h5>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <h5 className="text-4xl font-bold text-blue-400 mb-2">4+</h5>
              <p className="text-gray-300">Tech Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 