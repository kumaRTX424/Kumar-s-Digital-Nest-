import { useState } from "react";
import "./ProjectDetails.css";
import { FaCheckSquare, FaTasks, FaTools, FaGlobe } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const TodoProject = () => {
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
          <FaCheckSquare className="icons" size={32} /> To-Do Task – Task Management App
        </h1>
        <p>
          <strong>Tech Stack:</strong> ReactJS, Context API, JSON Server, Vercel, Render
        </p>
        <p>
          <strong>To-Do Task</strong> is a full-stack task management application designed to efficiently organize and track your daily tasks. Built with advanced ReactJS concepts and powered by Context API for state management, it connects seamlessly with a backend API hosted on Render using JSON Server. The frontend is deployed on Vercel, delivering a fully functional and responsive user experience.
        </p>

        <h2>
          <FaTasks className="icons" size={32} /> Screenshots:
        </h2>
        <div className="screenshot-gallery">
          {["todo1", "todo2", "todo3", "todo4", "todo5"].map((img, index) => (
            <img
              key={index}
              src={`/images/${img}.png`}
              alt={`To-Do App Screenshot ${index + 1}`}
              className="screenshot"
              onClick={() => handleImageClick(`/images/${img}.png`)}
            />
          ))}
        </div>

        <h2>
          <FaTools className="icons" size={32} /> Key Features:
        </h2>
        <ul>
          <li><strong>Add Task:</strong> Users can easily add new tasks with description.</li>
          <li><strong>Edit & Delete:</strong> Tasks can be updated or removed in real-time.</li>
          <li><strong>Status Toggle:</strong> Mark tasks as completed.</li>
          <li><strong>Responsive Design:</strong> Clean UI optimized for mobile, tablet, and desktop.</li>
          <li><strong>Live Data Sync:</strong> Tasks are saved and fetched from a live backend.</li>
        </ul>

        <h2>
          <IoSettingsSharp className="icons" size={32} /> Architecture & Advanced Concepts:
        </h2>
        <ul>
          <li><strong>Context API:</strong> Centralized state management for tasks across components.</li>
          <li><strong>React Hooks:</strong> useState, useEffect for interactivity and API integration.</li>
          <li><strong>CRUD Operations:</strong> Backend connected with Axios to perform create, read, update, delete.</li>
          <li><strong>Component-Based Design:</strong> Modular and maintainable component architecture.</li>
          <li><strong>Error Handling:</strong> User-friendly handling for failed API requests.</li>
        </ul>

        <h2>
          <FaGlobe className="icons" size={32} /> Deployment:
        </h2>
        <ul>
          <li>
            <strong>Frontend:</strong>{" "}
            <a
              href="https://to-do-task-kappa-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </li>
          <li>
            <strong>Backend:</strong> Render (JSON Server)
          </li>
        </ul>

        <div className="button-group">
          <a
            href="https://to-do-task-kappa-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View To-Do Task Live
          </a>
          <a
            href="https://github.com/kumaRTX424/to-do-task"
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

export default TodoProject;
