import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-36 pb-16 md:pb-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for better text readability */}
        <img 
          src="/images/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover object-center "
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-text">BadalSaxena</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-400 max-w-lg">
              I specialize in building responsive web applications using <span className="text-blue-400">HTML</span>, <span className="text-blue-400">CSS</span>, <span className="text-blue-400">JavaScript</span>, and <span className="text-blue-400">React</span>. 
              My journey began at Invertis University, where I discovered my passion for frontend development. 
              I've participated in and won 2 hackathons, showcasing my ability to deliver innovative solutions under pressure.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-y-0 bg-white opacity-0 group-hover:opacity-10"></span>
                <span className="absolute top-0 left-0 w-1/12 h-full transition-all duration-300 ease-out transform skew-y-0 bg-white opacity-0 group-hover:h-full group-hover:opacity-10"></span>
                Contact Me
              </a>
              <a
                href="#projects"
                className="group relative overflow-hidden border-2 border-blue-500 text-blue-500 hover:text-white py-3 px-8 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform -translate-y-full bg-blue-500 group-hover:translate-y-0"></span>
                <span className="relative">View Projects</span>
              </a>
            </div>
            <div className="flex mt-10 space-x-6">
              <a href="#" className="group text-gray-400 hover:text-white transition-colors">
                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group text-gray-400 hover:text-white transition-colors">
                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group text-gray-400 hover:text-white transition-colors">
                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group text-gray-400 hover:text-white transition-colors">
                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 transition-all duration-500 hover:shadow-blue-500/30 hover:scale-105 border-4 border-blue-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10"></div>
                <img
                  src="/images/badal.jpg"
                  alt="Developer"
                  className="object-cover w-full h-full z-0"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                <p className="font-bold">1 Years Experience</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-blue-400 rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
