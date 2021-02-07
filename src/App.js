import "./App.css";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contacts } from "./contacts/Contacts";

function App() {
  return (
    <div className="App">
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
