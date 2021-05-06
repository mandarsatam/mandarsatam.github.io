import React from 'react'
import styles from "./Hero.module.css"
import profilePic from "../profilePic.jpeg"


const Hero = () => {
    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/1RaGYetfNEi9JywSOqtynpzc69WmntKjW/view?usp=sharing"
    }
    return (
        <div className={styles.heroCont} id="home">
            {/* <Fade cascade> */}
            <div className={styles.heroContent}>
                <img src={profilePic} />
                <h1>Hi <span>👋</span> I'm <span className={styles.textGradient1}>Mandar Satam</span></h1>
            </div>
            <p>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and
a dedication towards creating useful and interactive web applications.</p>
            <a href="https://drive.google.com/file/d/1RaGYetfNEi9JywSOqtynpzc69WmntKjW/view?usp=sharing"
            rel="noopener noreferrer" target="_blank">
                <button className={styles.resumeBtn}>
                    Resume
                </button>
            </a>
            {/* </Fade> */}
        </div>
    )
}

export { Hero }
