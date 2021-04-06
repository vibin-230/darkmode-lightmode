import React, { useState, useEffect } from "react";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contacts } from "./contacts/Contacts";
import { Nav } from "./nav/Nav";
import "./App.css";

export const PageWrapper = (props) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 890) {
        setMobile(true);
      } else setMobile(false);
    };
    window.addEventListener("resize", resize);
  });
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLocation = document.querySelectorAll("nav span a");

    const sectionsArray = Array.prototype.slice.call(sections, 0);

    const navLoactionArray = Array.prototype.slice.call(navLocation, 0);

    window.addEventListener("scroll", () => {
      let currentLocation = "";
      sectionsArray.map((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.pageYOffset >= top - height / 3) {
          currentLocation = section.getAttribute("id");
        }
      });
      navLoactionArray.map((a) => {
        a.classList.remove("active");
        if (a.classList.contains(currentLocation)) {
          a.classList.add("active");
        }
      });
    });
  }, []);
  return (
    <>
      {/* navigation */}
      <Nav
        mobile={mobile}
        selected={props.selected}
        toggleSelected={props.toggleSelected}
      />
      {/* home section */}
      <section id="home">
        <Home />
      </section>
      {/* about section */}
      <section id="about">
        <About />
      </section>
      {/* projects section */}
      {/* <section id="projects">
        <Projects />
      </section> */}
      {/* contact section */}
      <section id="contacts">
        <Contacts />
      </section>
    </>
  );
};
