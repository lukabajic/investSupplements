import React from "react";
import "./Button.css";

const Button = ({ children, clicked }) => {
  return (
    <button className="button" onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
