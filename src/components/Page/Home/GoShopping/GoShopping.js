import React from "react";
import { useHistory } from "react-router-dom";
import "./GoShopping.css";

import Card from "../../../Utility/Card/Card";

import sportNutrition from "../../../../assets/sport-nutrition.png";
import dailyNutrition from "../../../../assets/daily-nutrition.png";

const content = [
  {
    img: sportNutrition,
    header: "Sport Nutrition",
    text:
      "Made with premium plant-based ingredients to help you fuel, replenish, and recover, the invest Sport® Nutrition System helps you power your workout. Try invest Sport® Premium Protein.",
    buttonText: "Shop Now",
    url: "/shop/sport",
  },
  {
    img: dailyNutrition,
    header: "Daily Nutrition",
    text:
      "Whether you’re looking for protein with a few simple ingredients, a supercharged shake powered by all-in-one nutrition, or something in between – find it here. Upgrade your daily nutrition with real, plant-based ingredients.",
    buttonText: "Shop Now",
    url: "/shop/daily",
  },
];

const GoShopping = () => {
  const history = useHistory();

  const clickHandler = (url) => {
    history.replace(url);
  };

  const CardText = (text) => <p className="card__text">{text}</p>;

  const renderedItems = content.map((item) => (
    <Card
      key={item.header}
      image={item.img}
      buttonText={item.buttonText}
      header={item.header}
      clicked={() => clickHandler(item.url)}
    >
      {CardText(item.text)}
    </Card>
  ));

  return (
    <section className="go-shopping">
      <h2 className="section-title">Shop By Category</h2>
      <div className="go-shopping__items">{renderedItems}</div>
    </section>
  );
};

export default GoShopping;
