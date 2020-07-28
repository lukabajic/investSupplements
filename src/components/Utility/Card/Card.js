import React from "react";
import "./Card.css";

import Button from "../Button/Button";

const Card = ({ image, content, buttonText }) => {
  return (
    <div class="card">
      <div className="card__img">
        <img src={image} alt={content.header} className="card__img-content" />
      </div>
      <div class="card__content">
        <h3 className="card__header">{content.header}</h3>
        <p className="card__text">{content.text}</p>
      </div>
      <Button>{buttonText}</Button>
    </div>
  );
};

export default Card;
