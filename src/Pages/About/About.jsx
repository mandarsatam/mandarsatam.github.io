import React from 'react'
import "./About.css"
import aboutMe from "../../aboutmePic.svg"

const About = () => {
    return (
        <div className="aboutCont" id="about">
            <div className="aboutMe">
                <div className="aboutMe_logo">
                    <img src={aboutMe} alt="" className="aboutMe_img" />
                </div>
                <div className="aboutMe_text">
                    <h2 style={{ marginBottom: "1em" }}>About Me</h2>
                    <p>Dedicated developer with a specialized skill set that enables to build robust web applications. Adept in both front-end and back-end with an eye towards performance and accuracy.</p>
                    <p>Proficient in communication and remote collaboration, easily adaptable, committed towards creating a healthy work environment.Prominent problem solving and analytical skills, passionate about solving algorithmic problems with a wide knowledge of data structures.</p>
                    <p><b>Socials:</b></p>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/mandar-satam/"
                            rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-linkedin"></i>                           
                        </a>
                        <a href="https://github.com/mandarsatam"
                            rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-github" style={{ marginLeft: "0.5em" }}></i>                        
                        </a>
                        <a href="https://mandarsatam97.medium.com/"
                            rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-medium"></i>                         
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { About }
