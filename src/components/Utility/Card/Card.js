import React from "react";
import "./Card.css";

import Button from "../Button/Button";

const Card = ({ image, content, buttonText, clicked }) => {
  return (
    <div className="card" onClick={clicked}>
      <figure className="card__img">
        <img src={image} alt={content.header} className="card__img-content" />
      </figure>
      <div className="card__content">
        <h3 className="card__header">{content.header}</h3>
        <p className="card__text">{content.text}</p>
      </div>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default Card;
