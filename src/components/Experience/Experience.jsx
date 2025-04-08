import React from 'react'
import "./Experience.css"
import git from "../../assets/git.png"
import css from "../../assets/css.png"
import html from "../../assets/html.png"
import express from "../../assets/Express.js.webp"
import java from "../../assets/java.png"
import js from "../../assets/js.png"
import mongodb from "../../assets/newmongo.jpg"
import nodejs from "../../assets/nodejs.png"
import postgre from "../../assets/postgre.png"
import react from "../../assets/reactt.png"
import htmlCss from "../../assets/images.png"
import figma from "../../assets/figma.png"
import BTicon from "../../assets/BTicon.png"
import seamlmaticOne from "../../assets/sealmaticOne.jpg"
import seamlmaticTwo from "../../assets/sealmaticTwo.jpg"
const Experience = () => {
    const skills = [
        { name: "HTML/CSS", icon:htmlCss },
        // { name: "CSS", icon:css },
        { name: "JAVA", icon:java },
        { name: "Javascript", icon:js },
        { name: "React", icon:react },
        { name: "Node", icon:nodejs},
        { name: "Express", icon:express},
        { name: "PostgreSQL", icon:postgre},
        // { name: "GraphQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
        { name: "MongoDB", icon: mongodb },
        { name: "Figma", icon: figma },
        // { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
      ];

      const experiences = [
        {
          role: "Full Stack Developer",
          company: "Bharat TeleClinic",
          period: "Oct, 2024 - Present",
          details:  [
            "Developed doctor-patient consultation platforms end-to-end, with real-time video call and seamless appointment booking.",
            "Built super admin and doctor dashboards with NodeJS and Express-backed APIs to manage availability and patient records.",
            "Designed responsive UI with Figma and React.js, increasing user engagement by 30%."
          ],
          logo: BTicon
        },
        {
          role: "Purchase Engineer",
          company: "Sealmatic India Ltd.",
          period: "Jan, 2022 - Dec, 2023",
          details: ["Ensured efficient global procurement of components like carbon, springs, and other critical supplies essential to project success.", "Optimized procurement processes and reduced project costs by 13%."],
          logo: seamlmaticOne
        },
        // {
        //   role: "SWE Intern",
        //   company: "Netflix",
        //   period: "Apr, 2020 - Jun, 2020",
        //   details: ["Worked on component library", "Helped create UI components"],
        //   logo: "https://cdn-icons-png.flaticon.com/512/2504/2504947.png"
        // }
      ];
  return (
    <section className='experienceMainDiv'>


    <div className="container py-5" style={{ backgroundColor: "#0d1b2a", color: "white" }}>
  <div className="row experinceDiv">
    {/* Skills Section */}
    <div className="col-md-5 mb-5">
      <h2 className="text-start mb-4">EXPERIENCE</h2>
      <div className="row row-cols-2 row-cols-sm-3 g-4 justify-content-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="col text-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="img-fluid mb-2"
              style={{ width: "60px", height: "60px" }}
            />
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Experience Section */}
    <div className="col-md-6"> 
      <div className="row row-cols-1">
        {experiences.map((exp, idx) => (
          <div key={idx} className="col mb-3">
            <div className="card h-100 text-white bg-dark experience-card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="me-3"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div>
                    <h5 className="card-title mb-0">{exp.role}, {exp.company}</h5>
                    <small>{exp.period}</small>
                  </div>
                </div>
                <ul className="mb-0">
                  {exp.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</section>

  )
}

export default Experience
