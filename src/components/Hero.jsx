import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Salesforce Developer", 
  "Python Developer",
  "AI/ML Enthusiast",
  "React Developer",
  "Freelance Developer",  // ✅ ADDED
  "Cloud Enthusiast"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 80 : 150;
    const pauseAfterWord = 1200;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, charIndex === current.length && !isDeleting ? pauseAfterWord : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-inner" data-aos="fade-up" data-aos-duration="1200">
        <div className="hero-text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          {/* Enhanced Tagline */}
          <h4 className="hero-tag" data-aos="fade-up" data-aos-delay="100">
            👋 Hi, my name is
          </h4>

          {/* Name with Gradient Effect */}
          <h1 data-aos="fade-up" data-aos-delay="300">
            Arnav <span className="gradient-name">Kaneriya</span>
          </h1>

          {/* Improved Subtitle + FREELANCING */}
          <p className="hero-subtitle-top hero-main-subtitle" data-aos="fade-up" data-aos-delay="400">
            Bridging data, design and cloud to build scalable digital experiences. 
            <span className="freelance-highlight"> 🚀 Available for Freelance Projects!</span>
          </p>

          {/* Enhanced Typing Animation */}
          <h3 className="typing-text hero-role" data-aos="fade-up" data-aos-delay="500">
            I am <span>{text}</span>
            <span className="cursor">|</span>
          </h3>

          {/* UPDATED CTA - RESUME REMOVED */}
          <div className="btns hero-buttons" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
            <a href="#projects" className="btn btn-primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({behavior: 'smooth'})}>
              👨‍💻 View My Projects
            </a>
            <a href="#contact" className="btn btn-outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}>
              💬 Let's Connect
            </a>
          </div>

          {/* Socials with Proper Spacing */}
          <div className="hero-socials mt-large" data-aos="zoom-in" data-aos-delay="800">
            <a
              href="https://github.com/Arnav-techh"
              className="icon-btn hero-icon"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-kaneriya"
              className="icon-btn hero-icon"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/arnav_kaneriya/"
              className="icon-btn hero-icon"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=917909895850&text=Hi%20Arnav%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="icon-btn hero-icon"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="mailto:kaneriyaarnav@gmail.com?subject=Let's%20connect&body=Hi%20Arnav%2C%0A%0AI%20just%20visited%20your%20portfolio."
              className="icon-btn hero-icon"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1200">
          <div className="hero-photo-circle">
            <img
              src="/portfolio/assests/profile.jpg"
              alt="Arnav Kaneriya - Full Stack Developer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
