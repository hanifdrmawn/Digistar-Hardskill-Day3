import React, { useEffect } from 'react';
import '../stylesheet.css';
import '../responsive.css';
import jouwasImage from '../img/jouwas.png';
import festPortoImage from '../img/fest-porto.png';
import sampahImage from '../img/sampah.png';
import brawijayaLeagueImage from '../img/brawijayaLeague.jpg';
import jayaMandiriImage from '../img/jayaMandiri.png';
import pesenInImage from '../img/pesen.in.jpg';
import psdImage from '../img/psd.png';
import scopusPublicationImage from '../img/scopusPublication.jpg';

const Project = () => {
  useEffect(() => {
    let slideIndex = 1;
    let shouldRunTime = true;

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("project-box");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      const mediaQuery = window.matchMedia('(max-width: 1024px)');
      if (mediaQuery.matches) {
        slides[slideIndex-1].style.display = "block"; 
      }
      else {
        slides[slideIndex-1].style.display = "flex";  
      }
    }

    function autoPlusSlides() {
      showSlides(slideIndex += 1);
    }

    function time() {
      if (shouldRunTime) {
        setTimeout(() => {
          autoPlusSlides();
          time();
        }, 5000); // Looping time function every 5 seconds
      }
    }

    showSlides(slideIndex);
    time(); // Start the slide show timing function

    return () => {
      shouldRunTime = false; // Cleanup the timing loop when the component unmounts
    };
  }, []);

  return (
    <div className="project" id="project">
      <h1>Project</h1>
      <div className="project-list-box">
        <div className="project-box fade">
          <img src={jouwasImage} alt="Jouwas Project" />
          <div className="project-box-detail">
            <h2 className="project-title">Jouwas</h2>
            <p className="project-description">Website for travel and food recommendations, as well as restaurant reservations.</p>
            <a href="https://meterai07.github.io/jouwas/" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://meterai07.github.io/jouwas/" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>

        <div className="project-box fade">
          <img src={festPortoImage} alt="Festifora Portofolio Project" />
          <div className="project-box-detail">
            <h2 className="project-title">Festifora Portofolio</h2>
            <p className="project-description">Festifora is a workshop, and the final task is creating a website portfolio with HTML and CSS.</p>
            <a href="https://hanifdrmawn.github.io/festifora-portofolio/" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad2">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad2)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://hanifdrmawn.github.io/festifora-portofolio/" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>

        <div className="project-box fade">
          <img src={sampahImage} alt="Waste Bank Service" />
          <div className="project-box-detail">
            <h2 className="project-title">Waste Bank Service</h2>
            <p className="project-description">Provides details on the nearest landfill, including location features, garbage collection schedules, disposal information, and the latest waste prices.</p>
            <button onClick={() => alert('Mohon Maaf, Project Tidak di Deploy.')} className="btn">              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad3">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad3)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </button>
            <button onClick={() => alert('Mohon Maaf, Project Tidak di Deploy.')} className="btn-mini">
              <p>Lihat Detail</p>
            </button>
          </div>
        </div>

        <div className="project-box fade">
          <img src={brawijayaLeagueImage} alt="Brawijaya League" />
          <div className="project-box-detail">
            <h2 className="project-title">Brawijaya League</h2>
            <p className="project-description">A football competition website utilizing HTML, CSS, JavaScript, and Laravel technologies, featuring admin and user roles.</p>
            <a href="https://github.com/hanifdrmawn/BrawijayaLeague" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad4">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad4)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://github.com/hanifdrmawn/BrawijayaLeague" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>

        <div className="project-box fade">
          <img src={jayaMandiriImage} alt="Jaya Mandiri" />
          <div className="project-box-detail">
            <h2 className="project-title">Jaya Mandiri</h2>
            <p className="project-description">A promotional website for an automatic gate system in Malang City.</p>
            <a href="https://hanifdrmawn.github.io/Jaya-Mandiri/" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad5">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad5)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://hanifdrmawn.github.io/Jaya-Mandiri/" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>

        <div className="project-box fade">
          <img src={pesenInImage} alt="Pesen.in" />
          <div className="project-box-detail">
            <h2 className="project-title">Pesen.in</h2>
            <p className="project-description">Food and beverage ordering application for the Filkom cafeteria based on Android using Jetpack Compose technology and Firebase.</p>
            <a href="https://github.com/hanifdrmawn/pesen.in" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad6">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad6)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://github.com/hanifdrmawn/pesen.in" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>

        <div className="project-box fade">
          <img src={psdImage} alt="Annual Income" />
          <div className="project-box-detail">
            <h2 className="project-title">Annual Income</h2>
            <p className="project-description">Visualization using Streamlit of annual income and expenditure data on each feature and applying filters to the visualization data.</p>
            <a href="https://github.com/hanifdrmawn/Annual-Income" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad7">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad7)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://github.com/hanifdrmawn/Annual-Income" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>

        <div className="project-box fade">
          <img src={scopusPublicationImage} alt="Clustering Scopus Publication" />
          <div className="project-box-detail">
            <h2 className="project-title">Clustering Scopus Publication</h2>
            <p className="project-description">Clustering Scopus Publication Reference Data of Brawijaya University Using K-Means Method.</p>
            <a href="https://github.com/hanifdrmawn/clustering-publikasi-scopus" className="btn" target="_blank" rel="noreferrer">
              <svg width="277" height="62">
                <defs>
                  <linearGradient id="grad8">
                    <stop offset="0%" stopColor="#22A39F"/>
                    <stop offset="100%" stopColor="#8758FF" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad8)" width="266" height="50"></rect>
              </svg>
              <span>Lihat Detail</span>
            </a>
            <a href="https://github.com/hanifdrmawn/clustering-publikasi-scopus" className="btn-mini" target="_blank" rel="noreferrer">
              <p>Lihat Detail</p>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
