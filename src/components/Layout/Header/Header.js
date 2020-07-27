import React, { useState } from "react";
import "./Header.css";

import Logo from "../../Utility/Logo/Logo";
import MobileToggler from "./Nav/MobileToggler/MobileToggler";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <MobileToggler />
        {navOpen ? <div>Nav</div> : null}
        <Logo />
        <div>Cart</div>
      </div>
    </header>
  );
};

export default Header;
