import geodesique from "../assets/images/geodesique.webp";

import iconHtml from "../assets/icons/stack_html.svg";
import iconCSS from "../assets/icons/stack_css.svg";
import iconSass from "../assets/icons/stack_sass.svg";
import iconJs from "../assets/icons/stack_js_nude.svg";
import iconTs from "../assets/icons/stack_ts.svg";
import iconReact from "../assets/icons/stack_react.svg";
import iconNext from "../assets/icons/stack_next.svg";
import iconThree from "../assets/icons/stack_three.svg";
import iconJest from "../assets/icons/stack_jest.svg";
import iconVitest from "../assets/icons/stack_vitest.svg";
import iconGit from "../assets/icons/stack_git.svg";
import iconGithub from "../assets/icons/med_github.svg";

import iconFigma from "../assets/icons/des_figma.svg";
import iconAdobe from "../assets/icons/des_adobe.svg";
import iconBlender from "../assets/icons/des_blender.svg";

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
            Développeur frontend spécialisé en React et Next.js, je conçois des
            interfaces performantes et orientées utilisateur. Issu du design,
            j’accorde une attention particulière à l’expérience utilisateur et à
            la qualité du code.
          </p>
          <p className="skills_details">
            Je développe des applications web complètes et cherche à rejoindre
            une équipe pour travailler sur des projets concrets.
          </p>
        </div>
        <div className="skills_list">
          <div className="skills_stack">
            <div className="skills_titleInner">
              <h2 className="skills_title">Langages</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackIcons">
              <div className="skills_stackSubDiv">
                <img src={iconHtml} alt="HTML Icon" />
                <img src={iconCSS} alt="CSS Icon" />
                <img src={iconSass} alt="Sass Icon" />
                <img src={iconJs} alt="Javascript Icon" />
                <img src={iconTs} alt="Typescript Icon" />
              </div>
            </div>
          </div>
          <div className="skills_stack">
            <div className="skills_titleInner">
              <h2 className="skills_title">Frameworks</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackIcons">
              <div className="skills_stackSubDiv">
                <img src={iconReact} alt="React Icon" />
                <img src={iconNext} alt="Next.js Icon" />
                <img src={iconThree} alt="Three Icon" />
              </div>
            </div>
          </div>
          <div className="skills_stack">
            <div className="skills_titleInner">
              <h2 className="skills_title">Outils</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackIcons">
              <div className="skills_stackSubDiv">
                <img src={iconJest} alt="Jest Icon" />
                <img src={iconVitest} alt="Vitest Icon" />
                <img src={iconGit} alt="Git Icon" />
                <img src={iconGithub} alt="Github Icon" />
              </div>
            </div>
          </div>
          <div className="skills_stack">
            <div className="skills_titleInner">
              <h2 className="skills_title">Design</h2>
              <div className="skills_line"></div>
            </div>
            <div className="skills_stackSubDiv">
              <img src={iconFigma} alt="Figam Icon" />
              <img src={iconAdobe} alt="Adobe Icon" />
              <img src={iconBlender} alt="Blender Icon" />
            </div>

            <div className="skills_stackIcons"></div>
          </div>
          <div className="skills_stack">
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
