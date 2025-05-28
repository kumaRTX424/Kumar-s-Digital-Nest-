import React from "react";


const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <h1 className="logo">Kumar N</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/KumarN_Resume.pdf" download>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
