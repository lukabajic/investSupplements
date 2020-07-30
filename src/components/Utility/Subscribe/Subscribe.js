import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Subscribe.css";

import Button from "../Button/Button";

const Subscribe = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    history.replace("/thank_you_sub");
    setEmail("");
  };

  return (
    <section className="subscribe">
      <h2 className="section-title">Get 20% Off</h2>
      <p className="subscribe__text">
        when you join our email list and receive more offers, recipes, and
        nutrition tips.
      </p>
      <form className="subscribe__form" onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button>Subscribe</Button>
      </form>
    </section>
  );
};

export default Subscribe;
