import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">

          {/* React Portfolio Card */}
          <div className="project-card">
            <h3>Kumar's Digital Nest Portfolio Website</h3>
            <p>Responsive and fully functional portfolio site built using ReactJS, showcasing personal projects and contact integration.</p>
            <Link to="/projects/portfolio" className="project-link">
              View Project
            </Link>
          </div>

          {/* React E-Commerce Card */}
          <div className="project-card">
            <h3>ie-store – eCommerce Web Application</h3>
            <p>Responsive e-commerce website built using ReactJS and CSS3.</p>
            <Link to="/projects/ecommerce" className="project-link">
              View Project
            </Link>
          </div>

          {/* Zeepto Assistant (Chat Box) Card */}
          <div className="project-card">
            <h3>Zeepto Chat Assistant</h3>
            <p>AI-inspired frontend assistant built with ReactJS and CSS3.</p>
            <Link to="/projects/ChatBox" className="project-link">
              View Project
            </Link>
          </div>

          {/* To-Do Task Application Card */}
          <div className="project-card">
            <h3>To-Do Task Application</h3>
            <p>
              A fully functional task management app built with ReactJS and Context API.
            </p>
            <Link to="/projects/TodoProject" className="project-link">
              View Project
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
