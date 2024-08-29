// src/components/Home.js
import React from 'react';
import mainImage from '../img/main.png'; // Import gambar
import '../stylesheet.css';
import '../responsive.css';

const Home = () => {
    return (
        <main>
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
