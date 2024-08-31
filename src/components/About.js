import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import aboutImage from '../img/about.png';
import '../stylesheet.css';
import '../responsive.css';
import '../index.css';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`about ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="about">
      <div className="about-text">
        <h1><span>About</span> Hanif</h1>
        <p>Hello, my name is Hanif Darmawan and you can call me Hanif. I am an informatics engineering student at Brawijaya University. I have taken interest in Front-End Development and also Web Developer.</p>
        <div className="button-cv">
          <a href="https://drive.google.com/file/d/1fYSNqkTcMEXvJPefpP1bNLJ6dZR4VXub/view?usp=share_link" target="_blank" rel="noreferrer">View CV</a>
        </div>
      </div>
      <div className="about-img">
        <img className="about-image" src={aboutImage} alt="About Hanif" />
      </div>
    </div>
  );
};

export default About;
