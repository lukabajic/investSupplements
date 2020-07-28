import React from "react";
import "./Roots.css";

import img from "../../../../assets/roots.jpg";

const Roots = () => {
  const style = { backgroundImage: `url(${img})` };

  return (
    <section style={style} className="roots">
      <article className="roots__content">
        <h2 className="section-title">Our Roots</h2>
        <p>
          Our co-founder Luka Bajic knew that real, plant-based ingredients were
          the unlock he needed to power his story as a triathlete and as a
          person. The only problem? He couldn’t find an all-in-one solution that
          delivered the nutrition he was looking for – so he developed it
          himself. Now, invest has grown to include sport nutrition, all-in-one
          daily nutrition, snacks, shakes, and so much more. We are always vegan
          certified, Non-GMO Project Verified, gluten-free, and free of
          artificial flavors and preservatives – without compromise.
        </p>
      </article>
    </section>
  );
};

export default Roots;
