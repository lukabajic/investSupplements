import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <h2 className="section-title">Our Mission</h2>
      <article className="mission__text">
        <p>
          At invest, we have one goal: to help you power your story with premium
          plant-based nutrition that enables you to feel and perform your best.
          We’ve been working towards that goal since before it was trendy, and
          we always will. Everything we make at invest is vegan certified,
          Non-GMO Project Verified, gluten-free, and free of artificial flavors
          and preservatives.
        </p>
      </article>
      <blockquote className="mission__quote">
        <p>
          <i className="fa fa-quote-left"></i>Since 2020, invest has brought
          real, plant-based food ingredients together in purposeful combinations
          to help you get the nutrition your body wants, without compromise.
        </p>
        <p>
          – Luka Bajic: invest co-founder and original formulator.
          <br />
          Professional web developer & triathlete.
        </p>
      </blockquote>
    </section>
  );
};

export default Mission;
