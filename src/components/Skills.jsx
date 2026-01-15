import geodesique from "../assets/images/geodesique.webp";

import iconHtml from "../assets/icons/stack_html.svg";
import iconSass from "../assets/icons/stack_sass.svg";
import iconReact from "../assets/icons/stack_react.svg";
import iconPython from "../assets/icons/stack_python.svg";
import iconPhp from "../assets/icons/stack_php.svg";
import iconSql from "../assets/icons/stack_sql.svg";
import iconFigma from "../assets/icons/des_figma.svg";
import iconAdobe from "../assets/icons/des_adobe.svg";
import iconUkFlag from "../assets/icons/lan_ukFlag.svg";
import iconEsFlag from "../assets/icons/lan_esFlag.svg";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills_spacer top"></div>
      <div className="skills_inner">
        <img
          className="skills_bg"
          src={geodesique}
          alt="Background geodesique"
        />
        <div className="skills_about">
          <div className="skills_titleInner">
            <h2 className="skills_title">A propos de moi</h2>
            <div className="skills_line"></div>
          </div>
          <p className="skills_details">
            Développeur web junior en reconversion, issu du design, je m’oriente
            vers le front-end, avec une attention particulière portée à la
            structure du code et à l’expérience utilisateur.
          </p>
          <p className="skills_details">
            Je cherche aujourd’hui à intégrer une équipe pour continuer à
            apprendre et évoluer professionnellement.
          </p>
        </div>
        <div className="skills_list">
          <div className="skills_stack">
            <div className="skills_titleInner">
              <h2 className="skills_title">Stack</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackIcons">
              <div className="skills_stackSubDiv">
                <img src={iconHtml} alt="HTML Icon" />
                <img src={iconSass} alt="Sass Icon" />
              </div>
              <div className="skills_stackSubDiv">
                <img src={iconReact} alt="React Icon" />
                <img src={iconPython} alt="Python Icon" />
              </div>
              <img src={iconPhp} alt="PHP Icon" />
              <img src={iconSql} alt="SQL Icon" />
            </div>
          </div>
          <div className="skills_design">
            <div className="skills_titleInner">
              <h2 className="skills_title">Design</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackSubDiv">
              <img src={iconFigma} alt="Figam Icon" />
              <img src={iconAdobe} alt="Adobe Icon" />
            </div>

            <div className="skills_stackIcons"></div>
          </div>
          <div className="skills_languages">
            <div className="skills_titleInner">
              <h2 className="skills_title">Langues</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackIcons">
              <div className="skills_stackSubDiv">
                <div className="skills_flag">
                  <img src={iconUkFlag} alt="British FLag" />
                  <div className="level">C1</div>
                </div>
                <div className="skills_flag">
                  <img src={iconEsFlag} alt="Spanish Flag" />
                  <div className="level">B1/B2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills_spacer bottom"></div>
    </section>
  );
}

export default Skills;
