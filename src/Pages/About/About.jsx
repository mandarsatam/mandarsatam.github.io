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
                    <p>A dedicated Full Stack Web developer with a specialized skill set that enables me to build robust web applications. I am adept in both front-end and back-end and have an eye for performance and accuracy.</p>
                    <p>I am adaptable, proficient in remote collaboration, and committed to achieving organizational goals. With a knack for problem-solving and analytics, I am passionate about solving Algorithmic problems with a good hold on Data Structures.</p>
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
