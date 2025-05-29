import { useState } from "react";
import "./ProjectDetails.css";
import { FaUserCircle, FaLaptopCode, FaTools, FaGlobe } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const PortfolioProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="project-details">
      <div className="container">
        <h1>
          <FaUserCircle className="icons" size={32} /> Personal Portfolio Website – ReactJS
        </h1>
        <p>
          <strong>Tech Stack:</strong> ReactJS, React Router, EmailJS.
        </p>
        <p>
          <strong>Personal Portfolio Website</strong> is a fully functional, mobile-responsive React application created to showcase my skills, projects, and experience as a developer. It features smooth navigation, project detail pages, a live contact form, and a clean, modern UI powered by CSS3. This portfolio serves as my professional identity on the web and helps recruiters and collaborators get a complete view of my capabilities.
        </p>

        <h2>
          <FaLaptopCode className="icons" size={32} /> Screenshots:
        </h2>
        <div className="screenshot-gallery">
          {["portfolio1", "portfolio2", "portfolio3", "portfolio4", "portfolio5","portfolio6"].map((img, index) => (
            <img
              key={index}
              src={`/images/${img}.png`}
              alt={`Portfolio Screenshot ${index + 1}`}
              className="screenshot"
              onClick={() => handleImageClick(`/images/${img}.png`)}
            />
          ))}
        </div>

        <h2>
          <FaTools className="icons" size={32} /> Key Features:
        </h2>
        <ul>
          <li><strong>Clean Hero Section:</strong> Name, designation, CTA button</li>
          <li><strong>Project Cards:</strong> Showcase multiple projects with links</li>
          <li><strong>Project Detail Pages:</strong> Each project has its own page with a full description</li>
          <li><strong>Live Contact Form:</strong> Integrated with EmailJS to send emails directly</li>
          <li><strong>Responsive Design:</strong> Fully optimized for all screen sizes</li>
        </ul>

        <h2>
          <IoSettingsSharp className="icons" size={32} /> Architecture & Advanced Concepts:
        </h2>
        <ul>
          <li><strong>React Router:</strong> Enables multi-page navigation and project routing</li>
          <li><strong>Component-Based Design:</strong> Reusable components (Header, Footer, etc.)</li>
          <li><strong>EmailJS Integration:</strong> Contact form works without a backend</li>
        </ul>

        <h2>
          <FaGlobe className="icons" size={32} /> Deployment:
        </h2>
        <ul>
          <li>
            <strong>Frontend:</strong>{" "}
            <a
              href="https://kumar-s-digital-nest.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </li>
        </ul>

        <div className="button-group">
          <a
            href="https://kumar-s-digital-nest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Live Portfolio
          </a>
          <a
            href="https://github.com/kumaRTX424/Kumar-s-Digital-Nest-"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Code (GitHub)
          </a>
        </div>
      </div>

      {/* Modal Image Preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <img src={selectedImage} alt="Screenshot Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioProject;
