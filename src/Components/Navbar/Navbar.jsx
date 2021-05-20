import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Container, Grid, Box } from "@material-ui/core";
import styles from "./Navbar.module.css";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "react-use-media-query-hook";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "fixed",
    top: "0",
    boxShadow: "none",
    animationName: "example",
    animation: " 0.5s ",
    backgroundColor: "hsl(0deg 0% 100% / 60%)",
    backdropFilter: "saturate(180%) blur(5px)",
    borderBottom: "1px solid #E5E5E5"
  },
  " @keyframes example": {
    from: {
      transform: `translateY(-5rem)`,
      boxShadow: "none",
    },
    to: {
      transform: `translateY(0rem)`,
      boxshadow: "none",
    },
  },
  toolbar: {
    maxHeight: "50px",
    alignItems: "center",
  },
}));

export function Navbar({darkMode, handleModeChange}) {
  const isMobile = useMediaQuery("(max-width: 400px)");
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 670px)");
  const isDesktop = useMediaQuery("(min-width: 671px) and (max-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1025px)");
  
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if ((isDesktop || isLargeDesktop) && open) {
      setOpen(false, isDesktop);
    }
  }, [isLargeDesktop, isDesktop]);

  return (
    <>
      <AppBar className={classes.appBar}>
        <Container style={{ height: "100%" }}>
          {isMobile || isTablet ? (
            <div className={styles.small_navbar_container}>
              <Container
                className={styles.small_navbar}
                style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h1 className={styles.logoText} style={{ margin: "0.2em 0" }}>MS</h1>
                </div>
                <div onClick={() => setOpen(!open)}>
                  <MenuIcon style={{ color: "#666", fontSize: "2.5em" }} />
                </div>
              </Container>
              {open && (
                <Container className={styles.small_screen}>
                  <ul style={{ paddingLeft: "0" }}>
                    <li>
                      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-100} onClick={() => setOpen(!open)}>
                        <p className={styles.nav_link}>Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setOpen(!open)}>
                        <p className={styles.nav_link}>About</p>
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-100} onClick={() => setOpen(!open)}>
                        <p className={styles.nav_link}>Skills</p>
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setOpen(!open)}>
                        <p className={styles.nav_link}>Projects</p>
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-100} onClick={() => setOpen(!open)}>
                        <p className={styles.nav_link}>Contact</p>
                      </Link>
                    </li>
                    {/* <li>
                      <input type="checkbox" onClick={(e) => handleModeChange(e.target.checked)} checked={darkMode}/>
                      <p>Dark Mode</p>
                    </li> */}
                  </ul>
                </Container>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "black",
                }}>
                {/* <img src={logo} width="50" alt="logo" /> */}
                <h1 className={styles.logoText} style={{ margin: "0.4em 0" }}>MS</h1>
              </div>
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                <ul className={styles.ul_list} style={{ marginTop: "1.5em" }}>
                  <li>
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-100}>
                      <p className={styles.nav_link}>Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-50}>
                      <p className={styles.nav_link}>About</p>
                    </Link>
                  </li>
                  <li>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-100}>
                      <p className={styles.nav_link}>Skills</p>
                    </Link>
                  </li>
                  <li>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} offset={-50}>
                      <p className={styles.nav_link}>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-40}>
                      <p className={styles.nav_link}>Contact</p>
                    </Link>
                  </li>
                  {/* <li>
                    <div style={{margin:"1em 0"}}>
                      <input type="checkbox" onClick={(e) => handleModeChange(e.target.checked)} checked={darkMode}/>
                      <label htmlFor="darkMode">Dark Mode</label>
                    </div>
                  </li> */}
                  {/* <li>
                    <input type="checkbox" id="switch"/>
                      <div className={styles.btnApp}>
                        <div className={styles.toggleCont}>
                          <label for="switch">
                            <div className={styles.toggle}></div>
                            <div className={styles.names}>
                              <p className={styles.light}>Light</p>
                              <p className={styles.dark}>Dark</p>
                            </div>
                          </label>
                        </div>
                      </div>
                  </li> */}
                </ul>
              </div>
            </div>
          )}
        </Container>
        {/* </Toolbar> */}
      </AppBar>
      {/* <Sidebar /> */}
    </>
  );
}