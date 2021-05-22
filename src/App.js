import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {Hero} from "./Pages/Hero"
import {About} from "./Pages/About/About"
import {Skills} from "./Pages/Skills/Skills"
import {Projects} from "./Pages/Projects/Projects"
import {Github} from "./Pages/Github/Github"
import {Contact} from "./Pages/Contact/Contact"
import ThemeProvider from "styled-components"
import {useState} from "react";


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
