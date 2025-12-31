import { useState, useEffect } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + 5) % 5);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % 5);

  const projects = [
    {
      img: "/assests/meditrack.jpg",
      title: "MediTrack",
      subtitle: "Say No to Drugs Platform",
      tagline: "Digital health platform promoting safe medication and anti-drug awareness.",
      tech: "React · Bootstrap · MUI · Framer Motion · Google Maps API",
      github: "https://github.com/Arnav-techh/MediTrack",
      demo: "https://meditrack.vercel.app" // ADD YOUR LINK
    },
    {
      img: "/assests/sms-spam.jpg",
      title: "SMS Spam Detection",
      subtitle: "ML Classification App",
      tagline: "ML app that classifies SMS as spam or ham with full end-to-end pipeline.",
      tech: "Python · Pandas · Scikit-learn · NLTK · Streamlit",
      github: "https://github.com/Arnav-techh/SMS-Spam-Detection",
      demo: "https://sms-spam-detection.vercel.app" // ADD YOUR LINK
    },
    {
      img: "/assests/py-paint.jpg",
      title: "Python Paint",
      subtitle: "Desktop Drawing App",
      tagline: "Tkinter-based desktop drawing app with multiple tools and color controls.",
      tech: "Python · Tkinter · Flask",
      github: "https://github.com/Arnav-techh/Python-Paint-Project",
      demo: "https://python-paint.vercel.app" // ADD YOUR LINK
    },
    {
      img: "/assests/saas-web.jpeg",
      title: "SaaS Builder",
      subtitle: "No-Code Website Platform",
      tagline: "Drag-and-drop platform for creating responsive websites without code.",
      tech: "React · TailwindCSS · GrapeJS",
      github: "https://github.com/Arnav-techh/SAAS-Website-Builder",
      demo: "https://saas-website-builder.vercel.app" // ADD YOUR LINK
    },
    {
      img: "/assests/salesforce-p.jpeg",
      title: "Salesforce Portal",
      subtitle: "Project Management",
      tagline: "Role-based portal on Experience Cloud for managing projects, sprints & backlogs.",
      tech: "Apex · LWC · Experience Cloud · Custom Objects · Triggers",
      github: "#",
      demo: "#" // Internal Salesforce - No public demo
    }
  ];

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="projects">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        Featured Projects<div className="underline"></div>
      </h2>

      <div className="proj-carousel" data-aos="fade-up" data-aos-delay="200">
        <article className="proj-card-featured">
          <div className="proj-thumb-featured">
            <img src={currentProject.img} alt={currentProject.title} />
          </div>
          
          <div className="proj-body-featured">
            <div className="proj-title-group">
              <h3>{currentProject.title}</h3>
              <span className="proj-subtitle">{currentProject.subtitle}</span>
            </div>
            
            <p className="proj-tagline">{currentProject.tagline}</p>
            <p className="proj-tech">{currentProject.tech}</p>
            
            <div className="proj-counter">
              {currentIndex + 1}/5
            </div>
            
            {/* 👇 NEW BUTTONS GROUP 👇 */}
            <div className="proj-buttons-group" style={{display: 'flex', gap: '12px', marginTop: '16px'}}>
              <a 
                href={currentProject.github} 
                target="_blank" 
                rel="noreferrer" 
                className="proj-github-btn"
                style={{flex: 1, textAlign: 'center'}}
              >
                <i className='bx bxl-github'></i>
                View Code
              </a>
              
              {currentProject.demo !== "#" && (
                <a 
                  href={currentProject.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="proj-demo-btn"
                  style={{
                    flex: 1, 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  🚀 View Demo
                </a>
              )}
            </div>
            {/* 👆 NEW BUTTONS GROUP 👆 */}
          </div>
        </article>

        <button className="carousel-prev" onClick={goToPrev}>
          ‹
        </button>
        <button className="carousel-next" onClick={goToNext}>
          ›
        </button>

        <div className="carousel-dots">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
