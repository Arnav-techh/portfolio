const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        Experience<div className="underline"></div>
      </h2>

      <div className="exp-timeline" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
        {/* INDUSTRIAL TRAINING - FIRST (2024) */}
        <div className="exp-timeline-item" data-aos="fade-right" data-aos-delay="300">
          <div className="exp-timeline-dot secondary"></div>
          <div className="exp-timeline-card">
            <div className="exp-header">
              <h3>Industrial Training – RPA (UiPath)</h3>
              <span className="exp-date">June 2024 – Aug 2024</span>
              <span className="exp-company">Industrial Training</span>
            </div>
            <div className="exp-tech">
              <span>UiPath</span>
              <span>Automation</span>
              <span>Bots</span>
            </div>
            <ul className="exp-responsibilities">
              <li>Built automation workflows using UiPath</li>
              <li>Automated repetitive business processes</li>
              <li>Hands-on experience with bots & orchestration</li>
            </ul>
            <a href="/portfolio/assests/uipath-training.pdf" className="exp-cert highlighted" target="_blank" rel="noreferrer">
              <i className='bx bxs-file-pdf'></i> View Certificate
            </a>
          </div>
        </div>

        {/* WEB DEV INTERN - SECOND (2025) */}
        <div className="exp-timeline-item" data-aos="fade-left" data-aos-delay="450">
          <div className="exp-timeline-dot primary"></div>
          <div className="exp-timeline-card">
            <div className="exp-header">
              <h3>Web Developer Intern</h3>
              <span className="exp-date">Jan 2025 – May 2025</span>
              <span className="exp-company">Digital Savers Pvt. Ltd.</span>
            </div>
            <div className="exp-tech">
              <span>React.js</span>
              <span>REST APIs</span>
              <span>Agile</span>
            </div>
            <ul className="exp-responsibilities">
              <li>Developed responsive UIs using React.js</li>
              <li>Integrated REST APIs for real-time data</li>
              <li>Worked in agile sprints and code reviews</li>
            </ul>
            <a href="/portfolio/assests/web-dev-internship.pdf" className="exp-cert highlighted" target="_blank" rel="noreferrer">
              <i className='bx bxs-file-pdf'></i> View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
