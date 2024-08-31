import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import mainImage from '../img/main.png';
import '../stylesheet.css';
import '../responsive.css';

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <div className="main px-20 max-sm:px-10">
                <div className="main-text">
                    <p className="main-text-name" id="main-text-name"></p>
                    <h1>I'M A WEB DEVELOPER & DATA ENTHUSIAST</h1>
                    <p className="main-desc">An Undergraduate Informatics Engineering Student at Brawijaya University who likes to explore new things and have taken interest in Front-End Development, Data Analyst, and Machine Learning.</p>
                </div>
                <div className="main-img">
                    <img src={mainImage} alt="Main" />
                    <div className="main-img-eclipse"></div>
                </div>
            </div>
        </main>
    );
};

export default Home;
