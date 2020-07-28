import React from "react";
import "./Banner.css";

import Button from "../../../Utility/Button/Button";

import homeBanner from "../../../../assets/home-banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <h1>Protein</h1>
      <p>
        Plant-based. Delicious flavors.
        <br />
        Starting at $19.
      </p>
      <img src={homeBanner} alt="A bag of protein" className="banner__img" />
      <Button>Shop Now</Button>
      {/* <a href="./pages/shop/all.html" className="btn btn-jungle">Shop Now</a> */}
    </section>
  );
};

export default Banner;
