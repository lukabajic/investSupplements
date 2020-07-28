import React from "react";
import "./Promise.css";

import promise1 from "../../../../assets/promise1.png";
import promise2 from "../../../../assets/promise2.png";
import promise3 from "../../../../assets/promise3.png";
import promise4 from "../../../../assets/promise4.png";
import promise5 from "../../../../assets/promise5.png";

const content = {
  text:
    "We take earning your trust seriously. That’s why we want to be clear about what’s in our products – and what isn’t. Check out which icons are on your go-to invest products.",
  imgs: [promise1, promise2, promise3, promise4, promise5],
};

const Promise = () => {
  const renderedItems = content.imgs.map((img, index) => (
    <figure className="promise__img" key={index}>
      <img src={img} alt={`Promise ${index + 1}`} />
    </figure>
  ));

  return (
    <section className="promise">
      <h2 className="section-title">invest Promise</h2>
      <p className="promise__text">{content.text}</p>
      <div className="promise__list">{renderedItems}</div>
    </section>
  );
};

export default Promise;
