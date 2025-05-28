import React from 'react';


const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">Who Am I?</h2>
      <p className="about-text animate-delay-1">
        I'm Kumar N, a ReactJS developer based in Madurai, India. I specialize in building responsive web applications using the modern React ecosystem — including React Hooks, Axios, Context API, Routing, and beyond.
      </p>
      <p className="about-text animate-delay-2">
        With a background in SEO and Application Engineering, I blend technical knowledge with creative thinking. I'm constantly learning and enjoy turning challenges into clean, scalable code.
      </p>

      <div className="skills-section">
        <h3 className="skills-title">Skills Snapshot</h3>
        <h3 className="skills-title"> React: </h3>
        <ul className="skills-list">
          <li>🔹 ReactJS (Hooks, Context API, Routing)</li>
          <li>🔹 JavaScript (ES6+), HTML5, CSS3</li>
          <li>🔹 Axios, REST APIs</li>
          <li>🔹 Git, GitHub, VS Code</li>
          <li>🔹 Responsive Design</li>
          <li>🔹 Node.js (basic knowledge)</li>
        </ul>
      </div>
      <space/>
      <div className="seo-section">
        <h3 className="skills-title">SEO & Web Optimization:</h3>
        <ul className="skills-list">
          <li>🔸 Keyword Research, Competitor Analysis, Link Building, Meta Tags Optimization</li>
          <li>🔸 Schema Markup, Canonicalization, Image Optimization, Robots.txt, Sitemap Creation</li>
          <li>🔸 Google Analytics, Google Search Console, Site Audits, SEO Reporting</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
