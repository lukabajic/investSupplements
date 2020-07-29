import React from "react";

import AboutBanner from "./AboutBanner/AboutBanner";
import Mission from "./Mission/Mission";
import Roots from "./Roots/Roots";
import Why from "./Why/Why";
import Subscribe from "../../Utility/Subscribe/Subscribe";

const About = () => {
  return (
    <React.Fragment>
      <AboutBanner />
      <Mission />
      <Roots />
      <Why />
      <Subscribe />
    </React.Fragment>
  );
};

export default About;
