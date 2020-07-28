import React from "react";
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
  },
  {
    img: dailyNutrition,
    header: "Daily Nutrition",
    text:
      "Whether you’re looking for protein with a few simple ingredients, a supercharged shake powered by all-in-one nutrition, or something in between – find it here. Upgrade your daily nutrition with real, plant-based ingredients.",
    buttonText: "Shop Now",
  },
];

const GoShopping = () => {
  const renderedItems = content.map((item) => (
    <Card
      image={item.img}
      buttonText={item.buttonText}
      content={{ header: item.header, text: item.text }}
    />
  ));

  return (
    <section className="go-shopping">
      <h2 className="section-title">Shop By Category</h2>
      {renderedItems}
    </section>
  );
};

export default GoShopping;
