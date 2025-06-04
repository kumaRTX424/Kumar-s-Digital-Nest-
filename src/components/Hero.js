import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="text-content"> 
        <h2 className="hero-title">Hi, I'm Kumar N</h2>
        <p className="hero-subtitle">Frontend Developer | ReactJS | JavaScript | SEO</p>
        <a href="#projects" className="hero-button">View Projects</a>
        <a href="/KumarN_Resume.pdf" download className="hero-button1">Download My Resume</a>
      </div>
    </section>
  );
};

export default Hero;
