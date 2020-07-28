import React from "react";
import "./Footer.css";

import SMLinks from "../../Utility/SMLinks/SMLinks";

const Footer = ({ navOpen }) => {
  return (
    <footer className={`footer ${navOpen ? "nav-active" : ""}`}>
      <SMLinks />
      <hr className="hr--1" />
      <div className="footer__links">
        <a href="/">Terms & Conditions</a>&nbsp;|&nbsp;
        <a href="/">Privacy</a>&nbsp;|&nbsp;
        <a href="/">Policies</a>
      </div>
      <span className="footer__copyright">
        &copy;2020, invest (RS). All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
