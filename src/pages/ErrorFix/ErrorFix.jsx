import React from "react";
import "./Errorfix.css";
import logo from "../../assets/profile.png"

const ErrorFix = () => {
  const [likes, setLike] = React.useState("0");

  const handleLike = () => {
    setLike(likes + 1);
  };



  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-header-content">
          {/* /************************************************************* start  **************************************************************** */}
          <img
            src={logo}
            alt="Profile"
            className="profile-image"
          />
          {/************************************************************* end  **************************************************************** */}
          <div className="profile-header-text">
            <h1 className="profile-name">John Doe</h1>
            <h2 className="profile-title">Senior Software Engineer</h2>
            <p className="profile-summary">
              Experienced in designing and developing scalable, high-performance
              web applications. Skilled in full-stack development, team
              leadership, and agile methodologies.
            </p>
          </div>
        </div>
        </header>
        <main className="profile-content">
          {/* Skills Section */}
          <section className="profile-section">
          <h3 className="section-title">Skills</h3>
          
            <ul className="skills-list">
            <li>React, Angular, and Vue.js</li>
            <li>Node.js, Express, and Python/Django</li>
            <li>RESTful and GraphQL API development</li>
            <li>Database design: MySQL, MongoDB, and PostgreSQL</li>
            <li>Cloud: AWS, Azure, and Google Cloud Platform</li>
            <li>CI/CD pipelines and DevOps tools</li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className="profile-section">
          <h3 className="section-title">Work Experience</h3>
          <div className="experience-item">
            <h4>Senior Software Engineer</h4>
            <p className="experience-company">Tech Solutions Inc. | 2018 - Present</p>
            <ul>
              <li>
                Led a team of developers to create a multi-platform e-commerce
                solution, increasing client sales by 40%.
              </li>
              <li>
                Spearheaded the integration of machine learning models to
                enhance customer personalization.
              </li>
              <li>
                Mentored junior developers, improving team efficiency by 25%.
              </li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Software Developer</h4>
            <p className="experience-company">Code Innovators | 2015 - 2018</p>
            <ul>
              <li>
                Developed a cross-platform application that improved internal
                logistics, saving 30% on operational costs.
              </li>
              <li>
                Built reusable code libraries for faster project delivery.
              </li>
              <li>
                Collaborated with designers to create intuitive user interfaces.
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="profile-section">
          <h3 className="section-title">Education</h3>
          <div className="education-item">
            <h4>Bachelor of Science in Computer Science</h4>
            <p>University of Exampleland | 2011 - 2015</p>
          </div>
          
        </section>

        {/* Projects Section */}
  
        {/* Certifications Section */}
        <section class="profile-section">
          <h3 className="section-title">Certifications</h3>
          <ul className="certifications-list">
            <li>Certified Kubernetes Administrator (CKA)</li>
            <li>AWS Certified Solutions Architect</li>
            <li>Google Cloud Professional Data Engineer</li>
            <li>React Advanced Certification</li>
          </ul>
        </section>

        {/* Interests Section */}
      

        {/* Contact Section */}
        <section className="profile-section">
          {/*-----------------------------------------------------  start -----------------------------------------------------*/}
          <h3 className="section-title">Contact</h3>
          <p>
            <strong>Email:</strong> { }
          </p>
          <p>
            <strong>Phone: +123 456 7690</strong> {}
          </p>
          <p>
            <strong>LinkedIn:</strong>{" https://linkedin.com/in/johndoe"}
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
           
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{"https://github.com/johndoe "}
            <a href="https://github.com/johndoe"
              target="_blank" rel="noopener noreferrer">
    
            </a>
          </p>
          {/*-----------------------------------------------------  end -----------------------------------------------------*/}
        </section>

        {/* Like Button */}
      </main>
    </div>
  );
}



export default ErrorFix;
