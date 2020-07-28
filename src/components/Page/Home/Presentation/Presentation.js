import React from "react";
import "./Presentation.css";

import img1 from "../../../../assets/pre1.png";
import img2 from "../../../../assets/pre2.png";
import img3 from "../../../../assets/pre3.png";
import img4 from "../../../../assets/pre4.png";

const content = [
  {
    img: img1,
    title: "Plant-based goodnes",
    p1:
      "This all-natural, pure golden pea protein isolate contains 23g of protein per scoop (only 4g net carbs), and all the essential amino acids.",
    p2:
      "No need to stress out about your daily protein intake as invest Protein will keep you fuller for longer without any bloating.",
  },
  {
    img: img2,
    title: "No nasties",
    p1:
      "invest is plant-based, gluten-free, soy-free and dairy-free and produced with 100% sustaina raw ingredients.",
    p2:
      "Not only is it what’s in the protein, but it’s also what's NOT in our protein that sets invest apart; zero artificial additives, sweeteners, grit or digestive enzymes.",
  },
  {
    img: img3,
    title: "Delicious, natural flavours",
    p1:
      "invest Protein is 100% naturally sweetened with stevia and cutting-edge natural flavor technology making the flavors deliciously smooth and enjoyable to drink, even with just water.",
  },
  {
    img: img4,
    title: "Weight management",
    p1:
      "invest Protein helps to support weight loss due to it's low GI (Glycaemic Index) and low carbohydrates levels. It also assists your body to control appetite and cravings through a high satiety, meaning you will feel fuller for longer.",
  },
];

const Presentation = () => {
  const renderedItems = content.map((item) => (
    <div className="presentation__item" key={item.title}>
      <img src={item.img} alt={item.title} className="presentation__img" />
      <h4 className="presentation__title">{item.title}</h4>
      <p className="presentation__text">{item.p1}</p>
      {item.p2 ? <p className="presentation__text">{item.p2}</p> : null}
    </div>
  ));

  return (
    <section className="presentation">
      <h2 className="section-title">Our Products</h2>
      <div className="presentation__list">{renderedItems}</div>
    </section>
  );
};

export default Presentation;
