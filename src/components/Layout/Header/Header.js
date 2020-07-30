import React from "react";
import "./Header.css";

import Logo from "../../Utility/Logo/Logo";
import MobileToggler from "../Nav/MobileToggler/MobileToggler";
import Nav from "../Nav/Nav";

const Header = ({ toggleNav, toggleCart, navOpen, inCart, closeNav }) => {
  return (
    <header className="header">
      <div className="header__container">
        <MobileToggler toggleNav={toggleNav} navOpen={navOpen} />
        <Logo />
        <Nav active={navOpen} linkClick={closeNav} />
        <button className="header__cart-btn" onClick={toggleCart}>
          <i className="fas fa-shopping-bag"></i>
          <span className="header__cart-num">{inCart.length}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
