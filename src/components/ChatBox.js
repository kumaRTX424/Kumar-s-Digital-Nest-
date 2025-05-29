import { useState } from "react";
import "./ProjectDetails.css";
import { FaRobot, FaLaptopCode, FaTools, FaGlobe } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const ChatBox = () => {
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
          <FaRobot className="icons" size={32} /> Zeepto Assistant – AI-Powered Frontend Project
        </h1>
        <p>
          <strong>Tech Stack:</strong> ReactJS, JavaScript (ES6+), HTML5, CSS3, Vercel
        </p>
        <p>
          <strong>Zeepto Assistant</strong> is an interactive, AI-inspired assistant built using ReactJS.
          It delivers a conversational UI experience to assist users on the frontend, showcasing real-time
          interaction, responsive layouts, and clean design. The project is deployed on Vercel and fully functional
          across desktop and mobile devices.
        </p>

        <h2>
          <FaLaptopCode className="icons" size={32} /> Screenshots:
        </h2>
        <div className="screenshot-gallery">
          {[
            "zeepto2",
            "zeepto3",
            "zeepto4"
          ].map((img, index) => (
            <img
              key={index}
              src={`/images/${img}.png`}
              alt={`Screenshot ${index + 1}`}
              className="screenshot"
              onClick={() => handleImageClick(`/images/${img}.png`)}
            />
          ))}
        </div>

        <h2>
          <FaTools className="icons" size={32} /> Key Features:
        </h2>
        <ul>
          <li>
            <strong>Chat-like UI:</strong> A smooth conversational user interface that mimics modern digital assistants.
          </li>
          <li>
            <strong>ReactJS Architecture:</strong> Built entirely using component-based architecture for maintainability and scalability.
          </li>
          <li>
            <strong>Responsive Design:</strong> Fully mobile-friendly layout with clean CSS3 animations and fluid grid.
          </li>
          <li>
            <strong>Reusable Components:</strong> Modular code with reusable UI elements and logic separation.
          </li>
          <li>
            <strong>Smooth Animations:</strong> CSS transitions used to enhance toggle behavior and overall experience.
          </li>
        </ul>

        <h2>
          <IoSettingsSharp className="icons" size={32} /> Technical Concepts:
        </h2>
        <ul>
          <li>
            <strong>React Hooks:</strong> Utilized useState and useEffect for managing assistant state and side effects.
          </li>
          <li>
            <strong>Modular File Structure:</strong> Clean separation of concerns to ensure scalable development.
          </li>
          <li>
            <strong>Scroll Locking:</strong> Prevents background scroll when mobile menu is open, improving UX.
          </li>
          <li>
            <strong>Deployment:</strong> Live hosting via Vercel with GitHub integration and automatic deployment.
          </li>
        </ul>

        <h2>
          <FaGlobe className="icons" size={32} /> Deployment:
        </h2>
        <ul>
          <li>
            <strong>Frontend:</strong>{" "}
            <a
              href="https://zeepto-assistant.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </li>
          <li>
            <strong>Source Code:</strong>{" "}
            <a
              href="https://github.com/kumaRTX424/zeepto-assistant"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>

        <div className="button-group">
          <a
            href="https://zeepto-assistant.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Zeepto Assistant Live
          </a>
          <a
            href="https://github.com/kumaRTX424/zeepto-assistant"
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
          <div className="modal-content">
            <img src={selectedImage} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ChatBox;
