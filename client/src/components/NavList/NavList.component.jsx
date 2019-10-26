import React, { useState } from "react";
import "../NavList/NavList.styles.scss";

const NavList = () => {
  const [isOpen, setOpenState] = useState(false);
  return (
    <div className="navbar__navlist">
      <a
        href=""
        className={`navbar__navlist__navitem ${isOpen ? "active" : ""}`}
      >
        About Me
      </a>
      <a
        href=""
        className={`navbar__navlist__navitem ${isOpen ? "active" : ""}`}
      >
        Projects
      </a>
      <a
        href=""
        className={`navbar__navlist__navitem ${isOpen ? "active" : ""}`}
      >
        Contacts
      </a>
      <div
        className={`navbar__hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setOpenState(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default NavList;
