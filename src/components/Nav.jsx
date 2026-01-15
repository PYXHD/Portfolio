import { useState } from "react";

import HomeIcon from "../assets/icons/nav_home.jsx";
import SkillsIcon from "../assets/icons/nav_skills.jsx";
import ProjectsIcon from "../assets/icons/nav_projects.jsx";
import ContactIcon from "../assets/icons/nav_contact.jsx";

function Nav() {
  const [active, setActive] = useState("hero");

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li>
          <a
            href="#hero"
            className={active === "hero" ? "active" : ""}
            onClick={() => setActive("hero")}
          >
            <HomeIcon />
          </a>
        </li>
        <li className="skillsDisplay">
          <a
            href="#skills"
            className={`skills ${active === "skills" ? "active" : ""}`}
          >
            <SkillsIcon />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setActive("projects")}
          >
            <ProjectsIcon />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
          >
            <ContactIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
