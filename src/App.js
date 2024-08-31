import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './stylesheet.css';
import './responsive.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const menuOnClick = () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  };

  return (
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
              <li>
                <button onClick={toggleTheme} className="theme-toggle-btn">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-bg" id="menu-bg"></div>
      </div>
    </header>
  );
}

export default App;
