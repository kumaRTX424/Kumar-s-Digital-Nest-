import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Import the icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="social-icons">
        <a href="https://www.instagram.com/itz_roadster_93/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={30} />
        </a>
        <a href="https://wa.me/919994111708" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.linkedin.com/in/kumar-nambirajan-85b107232/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/kumaRTX424" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={30} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Kumar N. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
