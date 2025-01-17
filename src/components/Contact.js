import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../stylesheet.css';
import '../responsive.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`contact ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} id="contact">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1>Contact</h1>
        <p className="contanct-desc px-3">Please feel free to contact me if you need any further information.</p>
        <div className="contact-sosmed">
          <div className="gmail">
            <a href="mailto:darmawanhanif.hd@gmail.com">
              <button className="button-gmail" type="button">
                <i className="fa fa-envelope"> <span style={{ fontFamily: 'Poppins' }}>Gmail</span></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
