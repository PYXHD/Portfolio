import iconReact from "../assets/icons/stack_react.svg";
import iconSass from "../assets/icons/stack_sass.svg";
import iconNode from "../assets/icons/stack_node.svg";
import blueGithub from "../assets/icons/med_blueGithub.svg";

import cryptowatch from "../assets/images/cryptowatch.webp";

function Cryptowatch() {
  return (
    <div className="project">
      <div className="project_description">
        <div className="project_date">2025</div>
        <div className="project_titleInner">
          <h3 className="project_title">Cryptowatch</h3>
          <div className="project_icons">
            <img src={iconReact} alt="React Icon" />
            <img src={iconSass} alt="Sass Icon" />
            <img src={iconNode} alt="Javascript Icon" />
          </div>
        </div>
        <img className="project_img" src={cryptowatch} alt="Artboard" />
      </div>
      <div className="project_textInner">
        <p className="project_text">
          Application web d'analyse de cryptomonnaies : consultation des cours,
          suivi des variations sur différentes périodes et affichage en temps
          réel grâce aux API publiques (CoinGecko).
        </p>
        <p className="project_text">
          Ce projet m’a permis de mieux comprendre la gestion des appels API,
          l’asynchronisme en JavaScript (promises, async/await) et la
          communication entre un frontend React/Vite et un backend Node/Express.
        </p>
      </div>
      <div className="project_btnInner">
        <a
          href="https://pyxhd.github.io/Cryptowatch/"
          target="_blank"
          className="project_redBtn"
        >
          Visiter le site
        </a>
        <a
          href="https://github.com/PYXHD/Cryptowatch"
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

export default Cryptowatch;
