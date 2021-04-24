import React from 'react'
import "./Projects.css"
import practo from "../../practo.png"
import goodReads from "../../goodReads.png"
import fitnessBlender from "../../fitnessBlender.png"
import mailChimp from "../../mailChimp.png"
import budgetEasy from "../../budgetEasy.png"
import trello from "../../trello.png"
import firebase from "../../firebase.svg"
import mongodb from "../../mongodb.svg"
import express from "../../express.svg"
import redux from "../../redux.svg";
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const [practoOpen, setPractoOpen] = React.useState(false);
    const [grOpen, setGROpen] = React.useState(false);
    const [fbOpen, setFBOpen] = React.useState(false);
    const [mcOpen, setMCOpen] = React.useState(false);
    const [beOpen, setBEOpen] = React.useState(false);
    const [trelloistOpen, setTrelloistOpen] = React.useState(false);
    return (
        <div className="projCont" id="projects">
            <h2>Projects</h2>
            <div className="projCardCont">
                <Fade bottom>
                    <div className="projCard">
                        <img src={practo} alt="" />
                        <h3>Practo Clone</h3>
                        <p>Find doctors near you, and book appointments with them on Practo.</p>
                        {practoOpen && <p>Developed this clone of the online healthcare website, Practo. We
                            achieved some features of the website like searching by locality
                            (geofencing), filtering, booking appointments, and payment.
                            This is a group project that I did with my other two team members
                            within 6 days by collaborating remotely. I particularly worked on
                            the bookings part of the website.</p>
                        }
                        <button onClick={() => setPractoOpen(!practoOpen)}>Read {practoOpen === true ? "Less" : "More"}</button>
                        <div className="techStack">
                            <i class="fab fa-react"></i>
                            <img src={mongodb} className="mongodb" />
                            <img src={express} style={{ width: "3em" }} />
                            <img src={redux} className="redux" />
                            <svg className="materialUI" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 172 172"
                                style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M3.58333,17.91667l21.5,14.33333v71.66667l-21.5,-14.33333z" fill="#919191"></path><path d="M168.41667,71.66667l-21.5,14.33333v46.58333l21.5,-14.33333z" fill="#505050"></path><path d="M168.41667,21.5l-21.5,14.33333v25.08333l21.5,-14.33333z" fill="#505050"></path><path d="M125.41667,17.91667l-21.5,14.33333v71.66667l21.5,-14.33333z" fill="#505050"></path><path d="M3.58333,43l60.91667,39.41667v-25.08333l-60.91667,-39.41667z" fill="#919191"></path><path d="M125.41667,43l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M125.41667,93.16667l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M168.41667,121.83333l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M107.5,135.32458l-43,-27.82458v25.08333l43,27.82458z" fill="#919191"></path></g></g></svg>
                            <i class="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="linkButton">
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="websiteBtn"><i class="fas fa-link"></i> Website</button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/SaravanakumarJN/Practo---Pentagon"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="codeBtn"><i class="fab fa-github" style={{ color: "white", fontSize: "1.2em" }}></i> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projCard">
                        <img src={goodReads} alt="" />
                        <h3>Goodreads Clone</h3>
                        <p>Find and read more books you'll love, and keep track of the books you want to read with Goodreads.</p>
                        {grOpen && <p>Worked on this collaborative project, where we made a clone of the
                            world's largest website for readers and book recommendations,
                            GoodReads.Got to work on the bookshelf and social media part of the website
                            where a user can post updates and like and comment, among
                            various other things like quizzes, book search, and chatting feature.</p>
                        }
                        <button onClick={() => setGROpen(!grOpen)}>Read {grOpen === true ? "Less" : "More"}</button>
                        <div className="techStack">
                            <i class="fab fa-react"></i>
                            <img src={redux} className="redux" />
                            <svg className="materialUI" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 172 172"
                                style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M3.58333,17.91667l21.5,14.33333v71.66667l-21.5,-14.33333z" fill="#919191"></path><path d="M168.41667,71.66667l-21.5,14.33333v46.58333l21.5,-14.33333z" fill="#505050"></path><path d="M168.41667,21.5l-21.5,14.33333v25.08333l21.5,-14.33333z" fill="#505050"></path><path d="M125.41667,17.91667l-21.5,14.33333v71.66667l21.5,-14.33333z" fill="#505050"></path><path d="M3.58333,43l60.91667,39.41667v-25.08333l-60.91667,-39.41667z" fill="#919191"></path><path d="M125.41667,43l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M125.41667,93.16667l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M168.41667,121.83333l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M107.5,135.32458l-43,-27.82458v25.08333l43,27.82458z" fill="#919191"></path></g></g></svg>
                            <i class="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="linkButton">
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="websiteBtn"><i class="fas fa-link"></i> Website</button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/SaravanakumarJN/Goodreads---Charlie"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="codeBtn"><i class="fab fa-github" style={{ color: "white", fontSize: "1.2em" }}></i> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projCard">
                        <img src={fitnessBlender} alt="" />
                        <h3>Fitness Blender Clone</h3>
                        <p>Get workout videos, workout programs, health recepies and more on Fitness Blender.</p>
                        {fbOpen && <p>This is a clone of the online fitness website called Fitness Blender
                            that I made with two of my group members. This project is
                            complete with a landing page, products page, calendar scheduling,
                            and shopping cart.
                            I had the opportunity to work on the products page and the
                            shopping cart feature.</p>
                        }
                        <button onClick={() => setFBOpen(!fbOpen)}>Read {fbOpen === true ? "Less" : "More"}</button>
                        <div className="techStack">
                            <i class="fab fa-react"></i>
                            <img src={redux} className="redux" />
                            <svg className="materialUI" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 172 172"
                                style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M3.58333,17.91667l21.5,14.33333v71.66667l-21.5,-14.33333z" fill="#919191"></path><path d="M168.41667,71.66667l-21.5,14.33333v46.58333l21.5,-14.33333z" fill="#505050"></path><path d="M168.41667,21.5l-21.5,14.33333v25.08333l21.5,-14.33333z" fill="#505050"></path><path d="M125.41667,17.91667l-21.5,14.33333v71.66667l21.5,-14.33333z" fill="#505050"></path><path d="M3.58333,43l60.91667,39.41667v-25.08333l-60.91667,-39.41667z" fill="#919191"></path><path d="M125.41667,43l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M125.41667,93.16667l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M168.41667,121.83333l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M107.5,135.32458l-43,-27.82458v25.08333l43,27.82458z" fill="#919191"></path></g></g></svg>
                            <i class="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="linkButton">
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="websiteBtn"><i class="fas fa-link"></i> Website</button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/Anshusagar/FitnessBlender"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="codeBtn"><i class="fab fa-github" style={{ color: "white", fontSize: "1.2em" }}></i> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projCard">
                        <img src={mailChimp} alt="" />
                        <h3>Mailchimp Clone</h3>
                        <p>All-in-one online email marketing platform for small businesses.</p>
                        {mcOpen && <p>Built this static clone of the landing page and various other pages
                            of the online email marketing service website called MailChimp.
                            Collaborated remotely to work together with my teammates to
                            achive the final result which is a pixel perfect responsive clone.</p>
                        }
                        <button onClick={() => setMCOpen(!mcOpen)}>Read {mcOpen === true ? "Less" : "More"}</button>
                        <div className="techStack">
                            <i class="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="linkButton">
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="websiteBtn"><i class="fas fa-link"></i> Website</button>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/mandarsatam/Mailchimp-Clone"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="codeBtn"><i class="fab fa-github" style={{ color: "white", fontSize: "1.2em" }}></i> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projCard">
                        <img src={budgetEasy} alt="" />
                        <h3>Budget Easy</h3>
                        <p>This is a personal project that I built where a user can keep track of his income and expenditure and save more efficiently.</p>
                        {beOpen && <p>Developed this clone of the online healthcare website, Practo. We
                            achieved some features of the website like searching by locality
                            (geofencing), filtering, booking appointments, and payment.
                            This is a group project that I did with my other two team members
                            within 6 days by collaborating remotely. I particularly worked on
                            the bookings part of the website.</p>
                        }
                        <button onClick={() => setBEOpen(!beOpen)}>Read {beOpen === true ? "Less" : "More"}</button>
                        <div className="techStack">
                            <i class="fab fa-react"></i>
                            <img src={firebase} className="firebase" />
                            <i className="fab fa-bootstrap"></i>
                            <i class="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="linkButton">
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="websiteBtn"><i class="fas fa-link"></i> Website</button>
                                </a>
                            </div>
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="codeBtn"><i class="fab fa-github" style={{ color: "white", fontSize: "1.2em" }}></i> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="projCard">
                        <img src={trello} alt="" />
                        <h4>Trelloist</h4>
                        <p>This is a peronal project where I combined the Kanban style system of trello with the simplicity of todoist.</p>
                        {trelloistOpen && <p>Developed this clone of the online healthcare website, Practo. We
                            achieved some features of the website like searching by locality
                            (geofencing), filtering, booking appointments, and payment.
                            This is a group project that I did with my other two team members
                            within 6 days by collaborating remotely. I particularly worked on
                            the bookings part of the website.</p>
                        }
                        <button onClick={() => setTrelloistOpen(!trelloistOpen)}>Read {trelloistOpen === true ? "Less" : "More"}</button>
                        <div className="techStack">
                            <i class="fab fa-react"></i>
                            <img src={redux} className="redux" />
                            <img src={mongodb} className="mongodb" />
                            <img src={express} style={{ width: "3em" }} />
                            <svg className="materialUI" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 172 172"
                                style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M3.58333,17.91667l21.5,14.33333v71.66667l-21.5,-14.33333z" fill="#919191"></path><path d="M168.41667,71.66667l-21.5,14.33333v46.58333l21.5,-14.33333z" fill="#505050"></path><path d="M168.41667,21.5l-21.5,14.33333v25.08333l21.5,-14.33333z" fill="#505050"></path><path d="M125.41667,17.91667l-21.5,14.33333v71.66667l21.5,-14.33333z" fill="#505050"></path><path d="M3.58333,43l60.91667,39.41667v-25.08333l-60.91667,-39.41667z" fill="#919191"></path><path d="M125.41667,43l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M125.41667,93.16667l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M168.41667,121.83333l-60.91667,39.41667v-25.08333l60.91667,-39.41667z" fill="#505050"></path><path d="M107.5,135.32458l-43,-27.82458v25.08333l43,27.82458z" fill="#919191"></path></g></g></svg>
                            <i class="fab fa-js"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="linkButton">
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="websiteBtn"><i class="fas fa-link"></i> Website</button>
                                </a>
                            </div>
                            <div>
                                <a href="#"
                                    rel="noopener noreferrer" target="_blank">
                                    <button id="codeBtn"><i class="fab fa-github" style={{ color: "white", fontSize: "1.2em" }}></i> Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export { Projects }
