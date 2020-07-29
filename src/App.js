import React, { useState, useEffect } from "react";

import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Nav from "./components/Layout/Nav/Nav";
import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Layout/Cart/Cart";

const contentful = {
  baseUrl: "https://cdn.contentful.com",
  spaces: "d2p3mngx8rmv",
  environments: "master",
  contentTypes: "investSupplements",
  accessToken: "rQvJR3olWXqzsSWsdURDU9WCgEeZDWbBtGK97yA2iJQ",
};

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [inCart, setInCart] = useState([]);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const productsFetch = ({ includes, items }) => {
    const pictureArray = includes.Asset;

    setItems(
      items.map((item, index) => {
        return {
          name: item.fields.name,
          flavor: item.fields.flavor,
          price: item.fields.price,
          servings: item.fields.servings,
          img: `https:${pictureArray[index].fields.file.url}`,
          id: item.sys.id,
          inCart: false,
        };
      })
    );
  };

  useEffect(() => {
    fetch(
      `${contentful.baseUrl}/spaces/${contentful.spaces}/environments/${contentful.environments}/entries?access_token=${contentful.accessToken}`
    )
      .then((response) => response.json())
      .then((data) => productsFetch(data));
  }, []);

  const addToCart = (id) => {
    // Add to cart
    const cart = inCart.length > 0 ? [...inCart] : [];
    const item = items.find((item) => item.id === id);
    item.amount = 1;
    cart.push(item);
    setInCart(cart);

    setTotalPrice(totalPrice + item.price);

    // Mark item as inCart
    const newItems = [...items];
    const itemIndex = items.indexOf(item);
    newItems[itemIndex].inCart = true;
    setItems(newItems);
  };

  const removeItem = (item) => {
    const newCartItems = inCart.filter((cartItem) => cartItem !== item);
    setInCart(newCartItems);

    setTotalPrice(totalPrice - item.price * item.amount);

    const newItems = [...items];
    const itemIndex = items.indexOf(item);
    newItems[itemIndex].inCart = false;
    setItems(newItems);
  };

  const increaseAmount = (item) => {
    const itemIndex = inCart.indexOf(item);
    const newItems = [...inCart];
    newItems[itemIndex].amount++;
    setInCart(newItems);

    setTotalPrice(totalPrice + item.price);
  };

  const reduceAmount = (item) => {
    if (item.amount > 1) {
      const itemIndex = inCart.indexOf(item);
      const newItems = [...inCart];
      newItems[itemIndex].amount--;
      setInCart(newItems);

      setTotalPrice(totalPrice - item.price);
    }
  };

  const toggleNav = () => {
    if (cartOpen) setCartOpen(false);
    setNavOpen(!navOpen);
  };

  const toggleCart = () => {
    if (navOpen) setNavOpen(false);
    setCartOpen(!cartOpen);
  };

  return (
    <React.Fragment>
      <Header
        toggleNav={toggleNav}
        toggleCart={toggleCart}
        navOpen={navOpen}
        inCart={inCart}
      />
      <Nav active={navOpen} linkClick={toggleNav} />
      <Cart
        toggleCart={toggleCart}
        cartOpen={cartOpen}
        inCart={inCart}
        increaseAmount={increaseAmount}
        reduceAmount={reduceAmount}
        removeItem={removeItem}
        totalPrice={totalPrice}
      />
      <Main
        navOpen={navOpen}
        addToCart={addToCart}
        productsFetch={productsFetch}
        items={items}
      />
      <Footer navOpen={navOpen} />
    </React.Fragment>
  );
}

export default App;
