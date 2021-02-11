import React, { useState, useEffect } from "react";
import "./App.css";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contacts } from "./contacts/Contacts";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  console.log(localStorage.getItem("theme"));
  const [selected, setSelected] = useState(localStorage.getItem("theme"));
  const toggleSelected = (event) => {
    if (selected === "light") setSelected("dark");
    else setSelected("light");
  };

  useEffect(() => {
    if (selected === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, [selected]);
  return (
    <div className="App">
      {/* drak light toggle switch */}
      <div className="theme-switch-wrapper">
        <span id="toggle-icon">
          <span className="toggle-text">
            {selected === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
          {selected === "dark" ? (
            <FaSun size="1.5rem" />
          ) : (
            <FaMoon size="1.5rem" />
          )}
        </span>
        <div
          className={`toggle-container ${
            selected === "dark" ? "" : "disabled"
          }`}
          onClick={toggleSelected}
        >
          <div
            className={`dialog-button  ${
              selected === "dark" ? "" : "disabled-button"
            }`}
          ></div>
        </div>
      </div>
      {/* navigation */}
      <nav id="nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contacts">CONTACTS</a>
      </nav>
      {/* home section */}
      <section id="home">
        <Home />
      </section>
      {/* about section */}
      <section id="about">
        <About />
      </section>
      {/* projects section */}
      <section id="projects">
        <Projects />
      </section>
      {/* contact section */}
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
