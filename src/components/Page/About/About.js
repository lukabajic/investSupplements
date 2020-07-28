import React from "react";

import BackgroundImage from "./BackgroundImage/BackgroundImage";
import Mission from "./Mission/Mission";
import Roots from "./Roots/Roots";
import Why from "./Why/Why";
import Subscribe from "../../Utility/Subscribe/Subscribe";

const About = () => {
  return (
    <React.Fragment>
      <BackgroundImage />
      <Mission />
      <Roots />
      <Why />
      <Subscribe />
    </React.Fragment>
  );
};

export default About;
