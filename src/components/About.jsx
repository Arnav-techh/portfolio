const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        About Me<div className="underline"></div>
      </h2>
      
      {/* SIMPLIFIED PROFILE SECTION */}
      <div className="about-profile-simple" data-aos="fade-up" data-aos-delay="200">
        <div className="profile-intro">
          <h3>Arnav Kaneriya</h3>
          <p className="role">Full Stack Developer | AI Enthusiast | Indore, MP</p>
          <p>
            Passionate developer building scalable web apps with <strong>React, Salesforce, Python </strong> 
             and exploring <strong>AI/ML solutions</strong>. B.Tech CSE (2021-2025).
          </p>
        </div>
        <div className="profile-stats-simple">
          <span>5 Years Coding</span>
          <span>10+ Projects</span>
          <span>15+ Tech Stack</span>
        </div>
      </div>

      {/* SKILLS HIGHLIGHTS - SAME AS BEFORE */}
      {/* <div className="skills-highlight" data-aos="fade-up" data-aos-delay="400">
        <h3 className="skills-title">What I Do</h3>
        <div className="skills-row">
          <div className="skill-group">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML/CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <h4>Backend</h4>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Salesforce Apex</span>
              <span>Python</span>
            </div>
          </div>
          <div className="skill-group">
            <h4>Specialized</h4>
            <div className="skill-tags">
              <span>AI/ML</span>
              <span>Salesforce LWC</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* PERSONALITY CARDS - SAME AS "What Brings Me" */}
      <div className="about-personality" data-aos="fade-up" data-aos-delay="600">
        <h3 className="personality-title">What Drives Me</h3>
        <div className="personality-grid">
          <div className="personality-card">
            <div className="card-icon">🎯</div>
            <h4>Problem Solver</h4>
            <p>Love breaking down complex challenges into simple, scalable solutions</p>
          </div>
          <div className="personality-card">
            <div className="card-icon">🔥</div>
            <h4>Passionate Learner</h4>
            <p>Constantly exploring new tech - Salesforce Dev, AI, Cloud Architecture</p>
          </div>
          <div className="personality-card">
            <div className="card-icon">⚡</div>
            <h4>Fast Executor</h4>
            <p>From idea to deployment - rapid prototyping and clean code delivery</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
