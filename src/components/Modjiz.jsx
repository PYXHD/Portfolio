import iconNext from "../assets/icons/stack_next.svg";
import iconSass from "../assets/icons/stack_sass.svg";
import iconThree from "../assets/icons/stack_three.svg";
import blueGithub from "../assets/icons/med_blueGithub.svg";

import modjizPic from "../assets/images/modjiz.webp";

function Modjiz() {
  return (
    <div className="project">
      <div className="project_description">
        <div className="project_date">2026</div>
        <div className="project_titleInner">
          <h3 className="project_title">Modjiz</h3>
          <div className="project_icons">
            <img src={iconNext} alt="Next Icon" />
            <img src={iconSass} alt="Sass Icon" />
            <img src={iconThree} alt="Three Icon" />
          </div>
        </div>
        <img className="project_img" src={modjizPic} alt="Modjiz" />
      </div>
      <div className="project_textInner">
        <p className="project_text">
          Application de suivi de l’humeur avec saisie quotidienne, historique
          et analyse statistique. Visualisation des émotions via un personnage
          3D interactif (Three.js, Blender), renforçant l’engagement
          utilisateur.
        </p>
        <p className="project_text">
          Développée avec Next.js, React et TypeScript, avec mise en place de
          tests (Vitest).
        </p>
      </div>
      <div className="project_btnInner">
        <a
          className="project_redBtn"
          href="https://modjiz.vercel.app/"
          target="_blank"
        >
          Visiter le site
        </a>
        <a
          href="https://github.com/PYXHD/Modjiz"
          target="_blank"
          className="project_blueBtn"
        >
          <img src={blueGithub} alt="Github Icon" />
          <div>Repository</div>
        </a>
      </div>
    </div>
  );
}

export default Modjiz;
