import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import EcommerceProject from './components/EcommerceProject'; // E-commerce detail page
import ChatBox from './components/ChatBox'; // Zeepto Assistant detail page
import TodoProject from "./components/TodoProject"; // To-Do project detail page
import PortfolioProject from './components/PortfolioProject'; // Portfolio detail page

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-100 text-gray-900">
        <Header />
        <main className="pt-16">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            {/* Project Detail Pages */}
            <Route path="/projects/portfolio" element={<PortfolioProject />} />
            <Route path="/projects/ecommerce" element={<EcommerceProject />} />
            <Route path="/projects/ChatBox" element={<ChatBox />} />
            <Route path="/projects/TodoProject" element={<TodoProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
