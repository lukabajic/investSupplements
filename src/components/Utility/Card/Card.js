import React from "react";
import "./Card.css";

import Button from "../Button/Button";

const Card = ({ image, header, buttonText, clicked, children }) => {
  return (
    <div className="card" onClick={clicked}>
      <figure className="card__img">
        <img src={image} alt={header} className="card__img-content" />
      </figure>
      <div className="card__content">
        <h3 className="card__header">{header}</h3>
        {children}
      </div>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default Card;
