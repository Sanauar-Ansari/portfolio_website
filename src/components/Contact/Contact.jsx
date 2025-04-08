import React from 'react'
import "./Contact.css"
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'
import email from "../../assets/gmail.png"
import linkedin from "../../assets/linkedin.png"
import whatsapp from "../../assets/whatsapp.png"
import git from "../../assets/git2.png"
import insta from "../../assets/social.png"

const Contact = () => {
  return (
    <div className="Footer">
    <div className="container pt-3">
        <div className="footerAlign">
            <div>
            <Typography variant="h4" sx={{ color: 'white', mb:2,fontWeight: 'bold' }}>
                  CONTACT
               </Typography>

               <Typography variant="h6" sx={{ color: 'white', mb: 4 }}>
                  Feel free to reach out!
               </Typography>
            </div>
          
            <div className="col-md-6 col-lg-3 col-12 ft-2">
                <h5>Quick Links</h5>
                <ul>
                <li className="nav-item">
                        <a href='#'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href='#about'>About</a>
                    </li>
                    <li className="nav-item">
                        <a href='#experience'>Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href='#projects'>Project</a>
                    </li>
                  
                </ul>
            </div>
        
         
            <div className="col-md-6 col-lg-2 col-12 ft-4">
                <h5>More</h5>
                <div className="footer-icons">
                <a href="mailto:sanauaransari99@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} title="Connect on Gmail" alt='email icon'/></a> 
                <a href="https://wa.me/917303241398" target="_blank" rel="noopener noreferrer"><img src={whatsapp} title="Connect on Instagram" alt='WhatsApp icon'/></a>
                <a href="https://www.instagram.com/sanauar.ansari/" target="_blank" rel="noopener noreferrer" title="Follow on Instagram">
                 <img src={insta} alt='Instagram icon'/></a>
                <a href="https://www.linkedin.com/in/sanauar-ansari/" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn">
                  <img src={linkedin} alt='LinkedIn icon'/></a>
                  <a href="https://github.com/Sanauar-Ansari" target="_blank" rel="noopener noreferrer" title="View GitHub profile" className='gitIcon'>
                    <img  src={git} alt='GitHub profile'/></a>
                </div>
            </div>
        </div>
    </div>
    <div className='Last-footer'>
         <p>Copyright © 2024 Sanauar Ansari. All Rights Reserved.  </p>
   </div>
</div>
  )
}

export default Contact
