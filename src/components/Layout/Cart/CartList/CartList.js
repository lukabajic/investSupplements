import React from "react";
import "./CartList.css";

const CartList = ({ items, increaseAmount, reduceAmount, removeItem }) => {
  const renderedItems = items.map((item) => (
    <div className="cart-list__item" key={item.id}>
      <img src={item.img} className="cart-list__img" alt={item.name} />
      <div className="cart-list__item-block">
        <h4 className="cart-list__item-title">{item.name}</h4>
        <p className="cart-list__item-flavor">Flavor: {item.flavor}</p>
        <button
          className="cart-list__remove-btn"
          onClick={() => removeItem(item)}
        >
          Remove
        </button>
      </div>
      <div className="cart-list__amount">
        <i
          className="fas fa-chevron-up"
          aria-hidden="true"
          onClick={() => increaseAmount(item)}
        ></i>
        <p>{item.amount}</p>
        <i
          className="fas fa-chevron-down"
          aria-hidden="true"
          onClick={() => reduceAmount(item)}
        ></i>
      </div>
    </div>
  ));
  return <div className="cart-list">{renderedItems}</div>;
};

export default CartList;
