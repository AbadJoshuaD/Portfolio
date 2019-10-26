import React from "react";
import { ReactComponent as BrandLogo } from "../../assets/logo.svg";
import "../Navbar/Navbar.styles.scss";
import NavList from "../NavList/NavList.component";

const Navbar = () => (
  <div className="navbar">
    <BrandLogo className="navbar__logo" />
    <NavList />
  </div>
);

export default Navbar;
