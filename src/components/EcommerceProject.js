import { useState } from "react";
import "./ProjectDetails.css";
import { FaShoppingCart, FaCamera, FaTools, FaGlobe } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const EcommerceProject = () => {
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
          <FaShoppingCart className="icons" size={32} /> ie-store – eCommerce
          Web Application
        </h1>
        <p>
          <strong>Tech Stack:</strong> ReactJS, Context API, Reducer, JSON
          Server, Netlify, Render
        </p>
        <p>
          ie-store is a fully functional eCommerce web application developed
          using ReactJS for the frontend and JSON Server for the backend. The
          frontend is deployed on Netlify, while the backend is hosted on
          Render, ensuring a seamless connection between the client and server
          sides.
        </p>

        <h2>
          <FaCamera className="icons" size={32} /> Screenshots:
        </h2>
        <div className="screenshot-gallery">
          {[
            "img1",
            "img2",
            "img3",
            "img4",
            "img5",
            "img6",
            "img8",
            "img9",
            "img10",
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
            <strong>Product Listing Page:</strong> Displays a collection of
            products fetched dynamically from the backend API.
          </li>
          <li>
            <strong>Shopping Cart:</strong> Users can add, remove, and update
            product quantities in real-time.
          </li>
          <li>
            <strong>Product Details Page:</strong> Full product details, images,
            and pricing.
          </li>
          <li>
            <strong>React Router:</strong> Seamless navigation between pages
            without reloads.
          </li>
          <li>
            <strong>Create Account/Login (Static):</strong> Placeholder form
            ready for integration.
          </li>
          <li>
            <strong>Responsive Search:</strong> A real-time product search
            feature that filters results instantly as the user types.
          </li>
          <li>
            <strong>Responsive Design:</strong> Optimized for desktop, tablet,
            and mobile devices.
          </li>
        </ul>

        <h2>
          <IoSettingsSharp className="icons" size={32} /> Architecture &
          Advanced Concepts:
        </h2>
        <ul>
          <li>
            <strong>Context API & useReducer:</strong> Efficient global state
            management for the cart and product data.
          </li>
          <li>
            <strong>React Hooks:</strong> useState, useEffect, and custom hooks
            manage side effects, UI interactions, and business logic.
          </li>
          <li>
            <strong>Axios Integration:</strong> Used for efficient communication
            with the JSON Server through HTTP methods (GET, POST, PUT, DELETE).
          </li>
          <li>
            <strong>React Router:</strong> Enables smooth, client-side
            navigation without full page reloads between routes like Home,
            Products, Cart, etc.
          </li>
          <li>
            <strong>Component-Based Structure:</strong> Encourages modularity
            and code reusability throughout the application.
          </li>
          <li>
            <strong>LocalStorage:</strong> Synchronizes cart state across
            sessions for a persistent shopping experience.
          </li>
          <li>
            <strong>Error Handling:</strong> Displays fallback UIs for API
            errors and handles empty states gracefully.
          </li>
        </ul>

        <h2>
          <FaGlobe className="icons" size={32} /> Deployment:
        </h2>
        <ul>
          <li>
            <strong>Frontend:</strong>{" "}
            <a
              href="https://ie-store.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </li>
          <li>
            <strong>Backend:</strong> Render (JSON Server)
          </li>
        </ul>

        <div className="button-group">
          <a
            href="https://ie-store.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View ie-store Live
          </a>
          <a
            href="https://github.com/kumaRTX424/ie-store"
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

export default EcommerceProject;
