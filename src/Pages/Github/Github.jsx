import React from 'react'
import "./Github.css"

const Github = () => {
    return (
        <div>
            <div className="statsContCont">
                <div className="statsCont">
                    <div>
                        <h1>1200+</h1>
                        <h3>Hours of coding</h3>
                    </div>
                    <div>
                        <h1>400+</h1>
                        <h3>Git Commits</h3>
                    </div>
                    <div>
                        <h1>20+</h1>
                        <h3>Projects</h3>
                    </div>
                    <div id="lastStat">
                        <h1>100+</h1>
                        <h3>Hours of Soft Skill</h3>
                    </div>
                </div>
            </div>
            <div className="githubStat">
                <img src="http://ghchart.rshah.org/HEXCOLORCODE/mandarsatam" alt="mandar github" />
            </div>
        </div>
    )
}

export {Github}
