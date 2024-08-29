import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './stylesheet.css';
import './responsive.css';

function App() {
  // React Hook must be called within the function component


  // Define menuOnClick before using it
  const menuOnClick = () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  };

  return (
    <Router>
      <header>
        <div className="navbar" id="navbar">
          <div className="logo">
            <Link to="/"><p><span>Hanif</span> Darmawan</p></Link>
          </div>
          <div id="menu">
            <div id="menu-bar" onClick={menuOnClick}>
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>
            <div className="nav" id="nav">
              <ul>
                <li onClick={menuOnClick}><Link to="/">Home</Link></li>
                <li onClick={menuOnClick}><Link to="/about">About</Link></li>
                <li onClick={menuOnClick}><Link to="/project">Project</Link></li>
                <li onClick={menuOnClick}><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="menu-bg" id="menu-bg"></div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
