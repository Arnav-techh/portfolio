import { useEffect, useState } from "react";

const Header = () => {
  const [activeNav, setActiveNav] = useState('#about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    document.querySelector(navId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="transparent-header">
      <div className="nav">
        <div className="logo-wrap">
          <div className="logo">Arnav Kaneriya</div>
          
          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className='bx bx-menu'></i>
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#about" 
            className={activeNav === '#about' ? 'active' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeNav === '#skills' ? 'active' : ''}
            onClick={() => handleNavClick('#skills')}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className={activeNav === '#experience' ? 'active' : ''}
            onClick={() => handleNavClick('#experience')}
          >
            Experience
          </a>
          <a 
            href="#certificates"
            className={activeNav === '#certificates' ? 'active' : ''}
            onClick={() => handleNavClick('#certificates')}
          >
            Certifications
          </a>
          <a 
            href="#education"
            className={activeNav === '#education' ? 'active' : ''}
            onClick={() => handleNavClick('#education')}
          >
            Education
          </a>
          <a 
            href="#projects" 
            className={activeNav === '#projects' ? 'active' : ''}
            onClick={() => handleNavClick('#projects')}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className={activeNav === '#contact' ? 'active' : ''}
            onClick={() => handleNavClick('#contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
