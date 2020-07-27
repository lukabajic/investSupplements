import React from "react";
import "./MobileToggler.css";

const MobileToggler = ({ toggleNav, navOpen }) => {
  return (
    <div
      className={`mobile-toggler ${navOpen ? "active" : ""}`}
      onClick={toggleNav}
    >
      <div className="mobile-toggler__icon"></div>
    </div>
  );
};

export default MobileToggler;
