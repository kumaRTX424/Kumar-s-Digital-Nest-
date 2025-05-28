import React from "react";


const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>React Portfolio Website</h3>
            <p>Responsive portfolio website built using ReactJS and CSS3.</p>
            <a
              href="https://your-github-or-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>React E-Commerce Website</h3>
            <p>Responsive e-commerce website built using ReactJS and CSS3.</p>
            <a
              href="https://your-github-or-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>React Chat-Box</h3>
            <p>Responsive Chat-Box built using ReactJS and CSS3.</p>
            <a
              href="https://your-github-or-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
