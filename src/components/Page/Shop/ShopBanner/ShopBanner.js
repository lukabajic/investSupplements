import React from "react";
import "./ShopBanner.css";

import img from "../../../../assets/shop-bg.jpg";

const ShopBanner = () => {
  const style = {
    backgroundImage: `linear-gradient(180deg,rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0.3) 50%,rgba(255, 255, 255, 1) 100%),url(${img})`,
  };

  return (
    <section className="shop-banner">
      <div style={style} className="shop-banner__container"></div>
      <p className="shop-banner__offer">
        We’re making it easier to get the products you need. Use code 25WELL for
        <strong> 25% off</strong> sitewide and free delivery on orders $25+. In
        addition, celebrate Earth Day with us: for the month of April, $1 from
        every item purchased will be donated to One Tree Planted.{" "}
        <a
          href="https://www.worldwildlife.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="shop-banner__link"
        >
          Learn more
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </a>
      </p>
    </section>
  );
};

export default ShopBanner;
