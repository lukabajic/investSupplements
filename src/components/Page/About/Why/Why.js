import React from "react";
import "./Why.css";

const content = [
  {
    title: "For Your Health",
    text:
      "Plant-based diets tend to support better cardiovascular outcomes , including a reduced risk of heart disease; reduced incidence of cancers, particularly among vegans; and a decreased risk of developing Type 2 Diabetes.",
  },
  {
    title: "For the planet",
    text:
      "Producing plant protein generally requires less land, water, and energy compared to producing animal protein.",
  },
  {
    title: "For performance",
    text:
      "Plant-based athletes can achieve high-level performance, as shown throughout various professional sports – in fact, invest was founded by a triathlete.",
  },
];

const icon = () => <i className="fa fa-check-circle"></i>;

const Why = () => {
  const renderedItems = content.map((item, index) => (
    <li className="why__item" key={index}>
      {icon()}
      <span>
        <strong>{item.title}:</strong> {item.text}
      </span>
    </li>
  ));

  return (
    <section className="why">
      <h2 className="section-title">Why Plant-Based?</h2>
      <ul className="why__content">{renderedItems}</ul>
    </section>
  );
};

export default Why;
