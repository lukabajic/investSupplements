import React from "react";
import { useHistory } from "react-router-dom";

import "./Logo.css";
import logo from "../../../assets/logo.png";

const Logo = () => {
  const history = useHistory();

  return (
    <div onClick={() => history.replace("/")} className="logo">
      <img src={logo} alt="Company logo" className="logo__img" />
      <span className="logo__text">invest</span>
    </div>
  );
};

export default Logo;
