import React from "react";
import "./Footer.css";

const Footer = ({ navOpen }) => {
  return (
    <footer className={`footer ${navOpen ? "nav-active" : ""}`}>Footer</footer>
  );
};

export default Footer;
