import React from "react";
import { useHistory } from "react-router-dom";
import "./Cart.css";

import CartList from "./CartList/CartList";
import Button from "../../Utility/Button/Button";

const Cart = ({
  toggleCart,
  cartOpen,
  inCart,
  increaseAmount,
  reduceAmount,
  removeItem,
  totalPrice,
}) => {
  const history = useHistory();

  const clickHandler = (url) => {
    history.replace(url);
  };

  let renderedItems;
  if (inCart.length === 0) {
    renderedItems = (
      <React.Fragment>
        <h2 className="cart__message">No items in cart.</h2>
        <Button
          clicked={() => {
            toggleCart();
            clickHandler("/shop");
          }}
        >
          Shop Now
        </Button>
      </React.Fragment>
    );
  } else {
    renderedItems = (
      <CartList
        items={inCart}
        increaseAmount={increaseAmount}
        reduceAmount={reduceAmount}
        removeItem={removeItem}
      />
    );
  }

  const Checkout = () => (
    <div className="checkout">
      <Button>Order Now</Button>
      <div className="checkout__price">Total price: ${totalPrice}</div>
    </div>
  );

  return (
    <div className={`cart ${cartOpen ? "active" : ""}`}>
      <div className="cart__header">
        <h2 className="cart__heading">Shopping Cart</h2>
        <button className="cart__close-btn" onClick={toggleCart}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <hr className="hr--1" />
      {renderedItems}
      {totalPrice > 0 ? Checkout() : null}
    </div>
  );
};

export default Cart;
