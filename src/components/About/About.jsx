import React from 'react'
import "./About.css"
import FEImage from "../../assets/fe.jpg"
import profileImagee from '../../assets/pone.jpeg';

const About = () => {
  return (
    <section className="py-5 text-white aboutContainer">
    <div className="container">
      <h2 className="mb-5 text-white text-start">ABOUT</h2>
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={profileImagee} // sample avatar
            alt="avatar"
            // className="img-fluid"
                className="img-fluid rounded-circle"
            style={{ maxWidth: "250px" }}
          />
        </div>

        {/* Right Text Content */}
        <div className="col-md-8">

          <div className="aboutItem">
            {/* <img src={FEImage} alt='image'/> */}
            <div>
            <h3>Frontend Developer</h3>
            <p>
            Built a responsive Doctor-Patient web app and Super Admin Panel using React.js, focusing on smooth UX and real-time interactions with clean, interactive UI components.</p>
            </div>
          </div>


          <div className="aboutItem">
            {/* <img src={FEImage} alt='image'/> */}
            <div>
            <h3>Backend Developer</h3>
            <p>
            Developed backend for doctor-patient and super admin web apps using Node.js, Express, and PostgreSQL, ensuring secure data handling and efficient API performance.
            </p>
            </div>
          </div>

          <div className="aboutItem">
            {/* <img src={FEImage} alt='image'/> */}
            <div>
            <h3>UI Designer</h3>
            <p>
            Designed and developed intuitive user interfaces using React.js and Figma, turning wireframes into clean, responsive frontends for web applications.
            </p>
            </div>
          </div>

        

        
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
