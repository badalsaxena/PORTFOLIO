import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle smooth scrolling
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Close the mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Adjust offset to account for navbar height
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding offset to trigger slightly before reaching section
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Define navigation links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Portfolio
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`hover:text-blue-400 transition-colors ${activeSection === link.id ? 'text-blue-400 font-medium' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-gray-800 p-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`block py-2 hover:text-blue-400 transition-colors ${activeSection === link.id ? 'text-blue-400 font-medium' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
