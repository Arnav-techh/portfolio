import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: "bx bx-code-alt" },
    { id: "backend", label: "Backend", icon: "bx bx-server" },
    { id: "salesforce", label: "Salesforce", icon: "bx bxs-cloud" },
    { id: "ai", label: "AI/ML", icon: "bx bx-brain" },
    { id: "tools", label: "Tools", icon: "bx bx-grid-alt" }
  ];

  const skillsData = {
    frontend: [
      { name: "React.js", level: "Core", icon: "bx bxl-react" },
      { name: "JavaScript", level: "Core", icon: "bx bxl-javascript" },
      { name: "HTML/CSS", level: "Core", icon: "bx bx-code" },
      { name: "Tailwind CSS", level: "Good", icon: "bx bxl-tailwind-css" }
    ],
    backend: [
      { name: "Node.js", level: "Good", icon: "bx bxl-nodejs" },
      { name: "Python", level: "Core", icon: "bx bxl-python" },
      { name: "Apex", level: "Good", icon: "bx bx-code-alt" },
      { name: "MongoDB", level: "Exploring", icon: "bx bxl-mongodb" }
    ],
    salesforce: [
      { name: "Apex Programming", level: "Core", icon: "bx bx-code" },
      { name: "Lightning Web Components", level: "Good", icon: "bx bxl-react" },
      { name: "SOQL/SOSL", level: "Core", icon: "bx bx-search" },
      { name: "Salesforce Admin", level: "Good", icon: "bx bxs-user" }
    ],
    ai: [
      { name: "NumPy/Pandas", level: "Good", icon: "bx bx-data" },
      { name: "Matplotlib", level: "Good", icon: "bx bx-chart" },
      { name: "Scikit-learn", level: "Exploring", icon: "bx bx-brain" },
      { name: "Streamlit", level: "Exploring", icon: "bx bx-widget" }
    ],
    tools: [
      { name: "Git/GitHub", level: "Core", icon: "bx bxl-github" },
      { name: "VS Code", level: "Core", icon: "bx bxl-visual-studio" },
      { name: "Salesforce CLI", level: "Good", icon: "bx bx-terminal" },
      { name: "Postman", level: "Core", icon: "bx bx-send" }
    ]
  };

  return (
    <section id="skills" className="skills">
      <h2 className="title" data-aos="fade-up" data-aos-duration="800">
        Skills & Expertise<div className="underline"></div>
      </h2>

      <div className="skills-container" data-aos="fade-up" data-aos-delay="200">
        {/* TABS */}
        <div className="skills-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* SKILLS CONTENT */}
        <div className="skills-content">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-header">
                <i className={skill.icon}></i>
                <div>
                  <h4>{skill.name}</h4>
                  <span className={`skill-level ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${skill.level.toLowerCase()}`}
                  style={{ width: skill.level === 'Core' ? '95%' : skill.level === 'Good' ? '80%' : '60%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
