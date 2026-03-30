import iconJs from "../assets/icons/stack_js.svg";
import blueGithub from "../assets/icons/med_blueGithub.svg";

import artboardPic from "../assets/images/artboard.webp";

function Artboard() {
  return (
    <div className="project">
      <div className="project_description">
        <div className="project_date">2024</div>
        <div className="project_titleInner">
          <h3 className="project_title">Color Artboard</h3>
          <div className="project_icons">
            <img src={iconJs} alt="Javascript Icon" />
          </div>
        </div>
        <img className="project_img" src={artboardPic} alt="Artboard" />
      </div>
      <div className="project_textInner">
        <p className="project_text">
          Application de dessin interactive avec personnalisation du pinceau
          (couleur, taille), basée sur HTML5 Canvas.
        </p>
        <p className="project_text">
          Mise en pratique de la gestion des événements et de la manipulation
          dynamique du DOM en JavaScript.
        </p>
      </div>
      <div className="project_btnInner">
        <a
          href="https://pyxhd.github.io/App_Color-Artboard/"
          target="_blank"
          className="project_redBtn"
        >
          Visiter le site
        </a>
        <a
          href="https://github.com/PYXHD/App_Color-Artboard"
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

export default Artboard;
