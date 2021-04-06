import React, { useEffect, useState } from "react";
import { RiMenuUnfoldFill } from "react-icons/ri";
import "./Nav.css";

export const Nav = (props) => {
  return (
    <>
      <nav id="nav">
        <span className="nav-child-left">
          <a
            href="#home"
            className="home active"
            // onClick={() => {
            //   window.scrollTo(0, 0);
            // }}
          >
            HOME
          </a>
          <a href="#about" className="about">
            ABOUT
          </a>
          <a href="#projects" className="projects">
            PROJECTS
          </a>
          <a href="#contacts" className="contacts">
            CONTACTS
          </a>
        </span>
      </nav>
    </>
  );
};
