import React from "react";
import "./Subscribe.css";

import Button from "../Button/Button";

const Subscribe = () => (
  <section className="subscribe">
    <h2 className="section-title">Get 20% Off</h2>
    <p className="subscribe__text">
      when you join our email list and receive more offers, recipes, and
      nutrition tips.
    </p>
    <form className="subscribe__form">
      <input type="email" name="email" placeholder="Enter your email" />
      <Button>Subscribe</Button>
    </form>
  </section>
);

export default Subscribe;
