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
      img: "/portfolio/assests/meditrack.jpg",
      title: "MediTrack",
      subtitle: "Say No to Drugs Platform",
      tagline: "Digital health platform promoting safe medication and anti-drug awareness.",
      tech: "React · Bootstrap · MUI · Framer Motion · Google Maps API",
      github: "https://github.com/Arnav-techh/MediTrack"
    },
    {
      img: "/portfolio/assests/sms-spam.jpg",
      title: "SMS Spam Detection",
      subtitle: "ML Classification App",
      tagline: "ML app that classifies SMS as spam or ham with full end-to-end pipeline.",
      tech: "Python · Pandas · Scikit-learn · NLTK · Streamlit",
      github: "https://github.com/Arnav-techh/SMS-Spam-Detection"
    },
    {
      img: "/portfolio/assests/py-paint.jpg",
      title: "Python Paint",
      subtitle: "Desktop Drawing App",
      tagline: "Tkinter-based desktop drawing app with multiple tools and color controls.",
      tech: "Python · Tkinter",
      github: "https://github.com/Arnav-techh/Python-Paint-Project"
    },
    {
      img: "/portfolio/assests/saas-web.jpeg",
      title: "SaaS Builder",
      subtitle: "No-Code Website Platform",
      tagline: "Drag-and-drop platform for creating responsive websites without code.",
      tech: "React · Node · Express · MongoDB · AWS",
      github: "https://github.com/Arnav-techh/SAAS-Website-Builder"
    },
    {
      img: "/portfolio/assests/salesforce-p.jpeg",
      title: "Salesforce Portal",
      subtitle: "Project Management",
      tagline: "Role-based portal on Experience Cloud for managing projects, sprints & backlogs.",
      tech: "Apex · LWC · Experience Cloud · Custom Objects · Triggers",
      github: "#"
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
            
            <a 
              href={currentProject.github} 
              target="_blank" 
              rel="noreferrer" 
              className="proj-github-btn"
            >
              <i className='bx bxl-github'></i>
              View Code →
            </a>
          </div>
        </article>

        {/* ORIGINAL SWIPE BUTTONS */}
        <button className="carousel-prev" onClick={goToPrev}>
          &#8249;
        </button>
        <button className="carousel-next" onClick={goToNext}>
          &#8250;
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
