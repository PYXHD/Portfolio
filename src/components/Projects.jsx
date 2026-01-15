import Artboard from "./Artboard";
import Barbeershop from "./Barbeershop";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects_spacer top"></div>
      <h2 className="projects_title">Mes Projets</h2>
      <div className="projects_inner">
        {/* <Artboard /> */}
        <Artboard />
        <Barbeershop />
      </div>
      <div className="projects_spacer bottom"></div>
    </section>
  );
}

export default Projects;
