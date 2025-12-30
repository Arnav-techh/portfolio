const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        Education Journey<div className="underline"></div>
      </h2>
      
      <div className="edu-timeline" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
        {/* Class X Timeline Item - FIRST */}
        <div className="edu-timeline-item" data-aos="fade-right" data-aos-delay="300">
          <div className="edu-timeline-dot"></div>
          <div className="edu-timeline-content">
            <div className="edu-header">
              <span className="edu-year">2019</span>
              <span className="edu-badge">Completed</span>
            </div>
            <h3>Class X</h3>
            <p>R.R.M.B Gujarati School, Indore</p>
            <div className="edu-focus">
              <i className='bx bx-book-reader'></i>
              <span>Foundation in Science & Technology</span>
            </div>
          </div>
        </div>

        {/* Class XII Timeline Item - SECOND */}
        <div className="edu-timeline-item" data-aos="fade-left" data-aos-delay="450">
          <div className="edu-timeline-dot"></div>
          <div className="edu-timeline-content">
            <div className="edu-header">
              <span className="edu-year">2021</span>
              <span className="edu-badge">Completed</span>
            </div>
            <h3>Class XII (Science - PCM)</h3>
            <p>R.R.M.B Gujarati School, Indore</p>
            <div className="edu-focus">
              <i className='bx bx-bar-chart-alt-2'></i>
              <span>Mathematics & Computer Science</span>
            </div>
          </div>
        </div>

        {/* B.Tech Timeline Item - THIRD */}
        <div className="edu-timeline-item" data-aos="fade-right" data-aos-delay="600">
          <div className="edu-timeline-dot"></div>
          <div className="edu-timeline-content">
            <div className="edu-header">
              <span className="edu-year">2021 - 2025</span>
              <span className="edu-badge">Completed</span>
            </div>
            <h3>B.Tech (Computer Science & Engineering)</h3>
            <p>Medi-Caps University, Indore</p>
            <div className="edu-focus">
              <i className='bx bx-code-alt'></i>
              <span>Full Stack Development & AI/ML Specialization</span>
            </div>
          </div>
        </div>

        {/* STILL LEARNING - FINAL */}
        <div className="edu-timeline-item learning-future" data-aos="fade-up" data-aos-delay="750">
          <div className="edu-timeline-dot learning-dot"></div>
          <div className="edu-timeline-content">
            <div className="edu-header">
              <span className="edu-year">2025 → ∞</span>
              <span className="edu-badge learning-badge">Forever</span>
            </div>
            <h3>Still Learning</h3>
            <p>Learning never ends ✨</p>
            <div className="edu-focus">
              <i className='bx bx-rocket'></i>
              <span>React, Next.js, Salesforce Dev, Python, AI/ML, Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
