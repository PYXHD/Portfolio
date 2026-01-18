import profilePic from "/public/profilePic.webp";

import useViewportHeight from "../utils/ViewportHeight";

function Contact() {
  const viewportHeight = useViewportHeight();

  return (
    <section
      className="contact"
      id="contact"
      style={{ minHeight: `${viewportHeight}px` }}
    >
      <div className="contact_spacerTop"></div>
      <div className="contact_inner">
        <h2 className="contact_title">Contact</h2>
        <div className="contact_subInner">
          <div className="contact_text">
            Junior en développement, ouvert à vos projets et opportunités.
          </div>
          <img className="contact_img" src={profilePic} alt="Photo de profil" />
          <a href="mailto:pyxhd@outlook.fr" className="contact_btn">
            Me contacter
          </a>
        </div>
      </div>
      <div className="contact_copyright">
        © 2026 Marc CHARVOT. Tous droits réservés.
      </div>
    </section>
  );
}

export default Contact;
