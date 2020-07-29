import React from "react";
import "./ProductsList.css";

import Card from "../../../Utility/Card/Card";

const ProductsList = ({ items }) => {
  const onClickHandler = (event) => {
    console.log(event.target);
  };

  const ItemContent = (flavor, price, servings) => (
    <div className="card__details">
      <p className="card__details-text">Flavor: {flavor}</p>
      <p className="card__details-text">Servings: {servings}</p>
      <h1 className="card__details-price">{price}$</h1>
    </div>
  );

  const renderedItems = items.map((item) => (
    <Card
      clicked={onClickHandler}
      header={item.name}
      image={item.img}
      buttonText={!item.inCart ? "Add To Cart" : "In Cart"}
      key={item.id}
    >
      {ItemContent(item.flavor, item.price, item.servings)}
    </Card>
  ));

  return (
    <div className="products-list">
      <h2 className="section-title">Products</h2>
      {renderedItems}
    </div>
  );
};

export default ProductsList;
