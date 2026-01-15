import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import LightCircle from "./utils/LightCircle"; // nouveau composant

function App() {
  return (
    <>
      <Nav />
      <LightCircle />
      <main className="main">
        <div className="main_overlay">
          <div className="main_sectionRow">
            <Hero />
            <Skills />
          </div>
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
