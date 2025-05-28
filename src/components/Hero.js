import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <h2 className="hero-title">Hi, I'm Kumar N</h2>
      <p className="hero-subtitle">Frontend Developer | ReactJS | JavaScript | SEO</p>
      <p className="hero-subtitle">
       I build performant front-end applications with a focus on clean code, user-centric design, and real-world functionality. Let's turn ideas into reality. </p>
      <a href="#projects" className="hero-button">View Projects</a>
       <a href="/KumarN_Resume.pdf" download className="hero-button1"> Download My Resume </a>
    </section>
  );
};

export default Hero;
