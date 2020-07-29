import React from "react";

import ShopBanner from "./ShopBanner/ShopBanner";
import ProductsList from "./ProductsList/ProductsList";
// import Filters from "./Filters/Filters";

const Shop = ({ addToCart, items }) => {
  return (
    <React.Fragment>
      <ShopBanner />
      {/* <Filters /> */}
      <ProductsList items={items} addToCart={addToCart} />
    </React.Fragment>
  );
};

export default Shop;
