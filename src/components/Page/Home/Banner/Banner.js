import React from "react";
import "./Banner.css";

import Button from "../../../Utility/Button/Button";

import homeBanner from "../../../../assets/home-banner.png";

const content = {
  header: "Protein",
  p1: "Plant-based. Delicious flavors.",
  p2: "Starting at $19.",
  img: homeBanner,
  buttonText: "Shop Now",
};

const Banner = () => {
  return (
    <section className="banner">
      <h1>{content.header}</h1>
      <p>
        {content.p1}
        {content.p2 ? <br /> : null}
        {content.p2 ? content.p2 : null}
      </p>
      <img src={content.img} alt="A bag of protein" className="banner__img" />
      <Button>{content.buttonText}</Button>
    </section>
  );
};

export default Banner;
