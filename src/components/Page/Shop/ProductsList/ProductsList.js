import React from "react";
import "./ProductsList.css";

import Card from "../../../Utility/Card/Card";

const ProductsList = ({ items, addToCart }) => {
  const ItemContent = (flavor, price, servings) => (
    <div className="card__details">
      <p className="card__details-text">Flavor: {flavor}</p>
      <p className="card__details-text">Servings: {servings}</p>
      <h1 className="card__details-price">${price}</h1>
    </div>
  );

  let renderedItems = null;
  if (items.length === 0) {
    renderedItems = (
      <h3 className="products-list__msg">
        We do not have any items in this category.
      </h3>
    );
  } else {
    renderedItems = items.map((item) => (
      <Card
        clicked={() => (!item.inCart ? addToCart(item.id) : null)}
        header={item.name}
        image={item.img}
        buttonText={!item.inCart ? "Add To Cart" : "In Cart"}
        key={item.id}
      >
        {ItemContent(item.flavor, item.price, item.servings)}
      </Card>
    ));
  }

  return (
    <React.Fragment>
      <h2 className="section-title">Products</h2>
      <div className="products-list">{renderedItems}</div>
    </React.Fragment>
  );
};

export default ProductsList;
