import React from "react";

import "./Logo.css";
import logo from "../../../assets/logo.png";

const Logo = () => (
  <a href="/" onClick={(e) => e.preventDefault()} className="logo">
    <img src={logo} alt="Company logo" className="logo__img" />
    <span className="logo__text">invest</span>
  </a>
);

export default Logo;
