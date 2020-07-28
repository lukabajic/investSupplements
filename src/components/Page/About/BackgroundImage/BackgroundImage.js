import React from "react";
import "./BackgroundImage.css";

import img from "../../../../assets/background-image.jpg";

const BackgroundImage = () => {
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})`,
  };

  return (
    <section className="background-image" style={style}>
      <h1 className="background-image__header">
        Power Your Story with Plant-Based Nutrition
      </h1>
    </section>
  );
};

export default BackgroundImage;
