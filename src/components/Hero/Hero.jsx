import React from 'react';
import './Hero.css';
import profileImagee from '../../assets/ptwo.jpeg';

const Hero = () => {
  return (
    <div className="container-fluid min-vh-100 heroSection text-white d-flex align-items-center">
      <div className="row w-100 align-items-center justify-content-center">
        
        {/* Left Section */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img
            src={profileImagee}
            alt="Profile"
            className="img-fluid heroImg rounded-circle"
          />
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-6 text-center text-md-start px-4">
          <h1 className="display-5 display-md-4 fw-bold">
            Hi, I'm <span style={{ color: '#b3b3ff' }}>Sanauar Ansari</span>
          </h1>
          <p className="lead mt-3">
            I'm a full-stack developer skilled in building scalable web applications.<br/>I create responsive frontends with React.js and powerful backends with Node.js, Express, PostgreSQL and MongoDB, delivering complete end-to-end solutions.
          </p>
          <a href="#contact" className="btn btn-primary mt-4 px-4 py-2 fw-bold rounded-pill" style={{ backgroundColor: '#6c63ff' }}>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
