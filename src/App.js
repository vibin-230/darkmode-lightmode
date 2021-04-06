import React, { useState, useEffect } from "react";
import "./App.css";
import { useLocalStorageState } from "./customHooks";

import { FaSun, FaMoon } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageWrapper } from "./PageWrapper";
import { CSSTransition } from "react-transition-group";

function App() {
  const [selected, setSelected] = useLocalStorageState("theme", "dark");
  const [changeMode, setChangeMode] = useState(false);
  const [darkTime, setDarkTime] = useState(0);
  const [lightTime, setLightTime] = useState(0);
  const [currentLink, setCurrentLink] = useState(0);

  const toggleSelected = (event) => {
    if (selected === "light") {
      setSelected("dark");
      setDarkTime(darkTime + 1);
    } else {
      setSelected("light");
      setLightTime(lightTime + 1);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selected);
  }, [selected]);

  return (
    <div className="App">
      {/* drak light toggle switch */}
      {/* <span className="theme-toggle-container">
        <span
          id="toggle-icon"
          style={{ position: "relative" }}
          onClick={toggleSelected}
        >
          <span
            className={`sunContainer ${
              selected === "light" ? "activeSun" : "removeSun"
            }`}
          >
            <FaSun size="1.5rem" />
          </span>
          <span
            className={`moonContainer ${
              selected === "dark" ? "activeMoon" : "removeMoon"
            }`}
          >
            <FaMoon size="1.5rem" />
          </span>
        </span>
      </span> */}
      <PageWrapper toggleSelected={toggleSelected} selected={selected} />
    </div>
  );
}

export default App;
