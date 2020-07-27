import React from "react";
import { NavLink } from "react-router-dom";

import SMLinks from "../../Utility/SMLinks/SMLinks";

import "./Nav.css";

const Nav = ({ active }) => {
  return (
    <nav className={`nav ${active ? "active" : ""}`}>
      <NavLink exact className="nav__link" to="/">
        <i className="fas fa-home"></i>Home
      </NavLink>
      <NavLink className="nav__link" to="/about">
        <i className="fas fa-info"></i>About
      </NavLink>
      <NavLink className="nav__link" to="/shop">
        <i className="fas fa-shopping-cart"></i>Shop
      </NavLink>
      <NavLink className="nav__link" to="/contact">
        <i className="fas fa-envelope"></i>Contact
      </NavLink>
      <SMLinks />
    </nav>
  );
};

export default Nav;
