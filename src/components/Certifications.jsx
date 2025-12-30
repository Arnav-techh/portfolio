import { useState, useEffect } from "react";

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + 5) % 5);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % 5);

  const certificates = [
    {
      icon: "★",
      title: "Full Stack Development",
      subtitle: "Web Development Training",
      tagline: "Training covering frontend and backend web development with hands-on projects.",
      meta: "Certificate",
      pdf: "/portfolio/pulic/assests/full-stack-cert.pdf"
    },
    {
      icon: "🐍",
      title: "Python Essentials",
      subtitle: "Django Web Development", 
      tagline: "Core Python foundations and web development with Django.",
      meta: "Certificate & Online Assessment",
      pdf: "/portfolio/assests/Python_cert.pdf",
      profile: "https://www.hackerrank.com/profile/ArnavKaneriya"
    },
    {
      icon: "☁",
      title: "Cloud Computing",
      subtitle: "Cloud Fundamentals",
      tagline: "Fundamentals of cloud platforms, services and deployment models.",
      meta: "Certificate",
      pdf: "/portfolio/assests/Cloud_Computing_Essentials.pdf"
    },
    {
      icon: "🤖",
      title: "Specialized AI Associate",
      subtitle: "Industrial Training",
      tagline: "Industrial training focused on AI workflows, model building and deployment.",
      meta: "Industrial Training Certificate",
      pdf: "/portfolio/assests/AI_Training.pdf"
    },
    {
      icon: "⚙",
      title: "Automated Machine Learning",
      subtitle: "AutoML Solutions",
      tagline: "Built ML solutions using AutoML tools for automated model selection.",
      meta: "Certificate",
      pdf: "/portfolio/assests/Automated Machine Learning.pdf"
    }
  ];

  const currentCert = certificates[currentIndex];

  return (
    <section id="certificates" className="achievements">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        Certifications<div className="underline"></div>
      </h2>

      <div className="cert-carousel" data-aos="fade-up" data-aos-delay="200">
        <article className="cert-card-featured">
          <div className="cert-header-featured">
            <div className="cert-badge-large">{currentCert.icon}</div>
            <div className="cert-title-group">
              <h3>{currentCert.title}</h3>
              <span className="cert-subtitle">{currentCert.subtitle}</span>
            </div>
          </div>
          
          <div className="cert-body-featured">
            <p className="cert-tagline">{currentCert.tagline}</p>
            <p className="cert-meta">{currentCert.meta}</p>
            
            <div className="cert-counter">
              {currentIndex + 1}/5
            </div>
            
            <div className="cert-actions">
              <a 
                href={currentCert.pdf} 
                target="_blank" 
                rel="noreferrer" 
                className="cert-pdf-btn"
              >
                <i className='bx bxs-file-pdf'></i>
                View Certificate →
              </a>
              
              {currentCert.profile && (
                <a 
                  href={currentCert.profile} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cert-profile-btn"
                >
                  <i className='bx bxl-hackerrank'></i>
                  HackerRank →
                </a>
              )}
            </div>
          </div>
        </article>

        {/* SWIPE ARROWS */}
        <button className="carousel-prev" onClick={goToPrev}>
          &#8249;
        </button>
        <button className="carousel-next" onClick={goToNext}>
          &#8250;
        </button>

        {/* DOTS */}
        <div className="carousel-dots">
          {certificates.map((_, idx) => (
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

export default Certificate;
