import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Lock body scroll when menu is open (for mobile UX)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Scroll to section by ID
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle nav click: scroll if on home, else navigate home then scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false); // Close mobile menu on click

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* <h1 className="logo">Kumar N</h1> */}
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, "hero")}>Kumar N</a>

        <div
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="/KumarN_Resume.pdf" download onClick={() => setMenuOpen(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
