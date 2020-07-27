import React from "react";
import "./Header.css";

import Logo from "../../Utility/Logo/Logo";
import MobileToggler from "../Nav/MobileToggler/MobileToggler";

const Header = ({ toggleNav, toggleCart, navOpen }) => {
  return (
    <header className="header">
      <div className="header__container">
        <MobileToggler toggleNav={toggleNav} navOpen={navOpen} />
        <Logo />
        <button className="header__cart-btn" onClick={toggleCart}>
          <i className="fas fa-shopping-bag"></i>
          <span className="header__cart-num">1</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
