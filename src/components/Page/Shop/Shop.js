import React from "react";

import ShopBanner from "./ShopBanner/ShopBanner";
import ProductsList from "./ProductsList/ProductsList";

const Shop = ({ addToCart, items }) => {
  let itemsList = items;
  if (window.location.pathname === "/shop/sport")
    itemsList = items.filter((item) => item.type === "sport");
  if (window.location.pathname === "/shop/daily")
    itemsList = items.filter((item) => item.type === "daily");

  return (
    <React.Fragment>
      <ShopBanner />
      {/* <Filters /> */}
      <ProductsList items={itemsList} addToCart={addToCart} />
    </React.Fragment>
  );
};

export default Shop;
