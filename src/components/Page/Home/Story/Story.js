import React from "react";
import "./Story.css";

import storyImg from "../../../../assets/story.jpg";

import Button from "../../../Utility/Button/Button";

const Story = () => (
  <section className="story">
    <h2 className="section-title">Our Story</h2>
    <div className="story__container">
      <div className="story__content">
        <p className="story__text">
          invest began in 2020 with a singular vision: awaken the world to the
          potential of plant-based nutrition. That drives us to create
          delicious, premium products that empower you to feel good and perform
          your best. It’s also what makes us the #1 plant-based protein powder
          brand.
        </p>
        <Button>Keep Reading</Button>
      </div>
      <figure className="story__img">
        <img src={storyImg} alt="About us" />
      </figure>
    </div>
  </section>
);

export default Story;
