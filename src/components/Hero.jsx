import profilePic from "/public/profilePic.webp";
import iconLinkedin from "../assets/icons/med_linkedin.svg";
import iconGithub from "../assets/icons/med_github.svg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero_spacer top"></div>
      <div className="hero_inner">
        <div className="hero_persona">
          <img src={profilePic} alt="Photo de profil" fetchPriority="high" />
          <h1 className="hero_name">Marc CHARVOT</h1>
          <div>
            <h2 className="hero_job">Développeur Web Junior</h2>
            <p className="hero_motive">orienté front-end et design</p>
          </div>
        </div>
        <div className="hero_medias">
          <a
            href="https://www.linkedin.com/in/charvotmarc/"
            target="_blank"
            className="hero_link"
          >
            <img src={iconLinkedin} alt="Icone LinkedIn" />
          </a>
          <a
            href="https://github.com/PYXHD"
            target="_blank"
            className="hero_link"
          >
            <img src={iconGithub} alt="Icone Github" />
          </a>
          <a
            href="/CV_marc_charvot.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero_link hero_linkCV"
          >
            CV
          </a>
        </div>
        <a href="#projects" className="hero_btn">
          mes projets
        </a>
      </div>
      <div className="hero_spacer bottom"></div>
    </section>
  );
}

export default Hero;
