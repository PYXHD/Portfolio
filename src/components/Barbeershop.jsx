import iconReact from "../assets/icons/stack_react.svg";
import iconSass from "../assets/icons/stack_sass.svg";
import iconAdobe from "../assets/icons/des_adobe.svg";
import blueGithub from "../assets/icons/med_blueGithub.svg";

import barbeershopPic from "../assets/images/barbeershop.webp";

function Barbeershop() {
  return (
    <div className="project">
      <div className="project_description">
        <div className="project_date">2023</div>
        <div className="project_titleInner">
          <h3 className="project_title">BarbeerShop</h3>
          <div className="project_icons">
            <img src={iconReact} alt="React Icon" />
            <img src={iconSass} alt="Sass Icon" />
            <img src={iconAdobe} alt="Adobe Icon" />
          </div>
        </div>
        <img className="project_img" src={barbeershopPic} alt="Barbeershop" />
      </div>
      <div className="project_textInner">
        <p className="project_text">
          Création de BarbeerShop, une marque fictive, avec conception d’un site
          web et d’une communication digitale associée.
        </p>
        <p className="project_text">
          Projet initial de formation, ensuite refactorisé avec React pour
          approfondir mes compétences en développement front-end.
        </p>
      </div>
      <div className="project_btnInner">
        <a
          className="project_redBtn"
          href="https://pyxhd.github.io/BarbeerShop/"
          target="_blank"
        >
          Visiter le site
        </a>
        <a
          href="https://github.com/PYXHD/BarbeerShop"
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

export default Barbeershop;
