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
      demo: "https://medi-track-one-chi.vercel.app" // YOUR LINK
    },
    {
      img: "/assests/sms-spam.jpg",
      title: "SMS Spam Detection",
      subtitle: "ML Classification App",
      tagline: "ML app that classifies SMS as spam or ham with full end-to-end pipeline.",
      tech: "Python · Pandas · Scikit-learn · NLTK · Streamlit",
      github: "https://github.com/Arnav-techh/SMS-Spam-Detection",
      demo: "https://sms-spam-detection-psi.vercel.app" // YOUR LINK
    },
    {
      img: "/assests/py-paint.jpg",
      title: "Python Paint",
      subtitle: "Desktop Drawing App",
      tagline: "Tkinter-based desktop drawing app with multiple tools and color controls.",
      tech: "Python · Tkinter · Flask",
      github: "https://github.com/Arnav-techh/Python-Paint-Project",
      demo: "https://python-paint-project.vercel.app"
    },
    {
      img: "/assests/saas-web.jpeg",
      title: "SaaS Builder",
      subtitle: "No-Code Website Platform",
      tagline: "Drag-and-drop platform for creating responsive websites without code.",
      tech: "React · TailwindCSS · GrapeJS",
      github: "https://github.com/Arnav-techh/SAAS-Website-Builder",
      demo: "https://saas-website-builder-arnav.vercel.app"
    },
    {
      img: "/assests/salesforce-p.jpeg",
      title: "Salesforce Portal",
      subtitle: "Project Management",
      tagline: "Role-based portal on Experience Cloud for managing projects, sprints & backlogs.",
      tech: "Apex · LWC · Experience Cloud · Custom Objects · Triggers",
      github: "#",
      demo: "#"
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
            
            {/* ✨ SAME SIZE + COLOR BUTTONS ✨ */}
            <div className="proj-buttons-group">
              <a 
                href={currentProject.github} 
                target="_blank" 
                rel="noreferrer" 
                className="proj-action-btn github-btn"
              >
                <i className='bx bxl-github'></i>
                View Code
              </a>
              
              {currentProject.demo !== "#" && (
                <a 
                  href={currentProject.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="proj-action-btn demo-btn"
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
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

      <style jsx>{`
        .proj-buttons-group {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        .proj-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          height: 56px;
          border: 2px solid transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
        }

        .github-btn {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          color: #475569;
          border-color: #e2e8f0;
        }

        .demo-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border-color: #2563eb;
        }

        .proj-action-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .github-btn:hover {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-color: #cbd5e1;
          color: #334155;
        }

        .demo-btn:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
        }

        @media (max-width: 768px) {
          .proj-buttons-group {
            flex-direction: column;
            gap: 10px;
          }
          .proj-action-btn {
            height: 52px;
            padding: 14px 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
