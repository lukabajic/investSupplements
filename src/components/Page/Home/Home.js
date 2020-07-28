import React from "react";
import Banner from "./Banner/Banner";
import Presentation from "./Presentation/Presentation";
import GoShopping from "./GoShopping/GoShopping";
import Story from "./Story/Story";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Presentation />
      <GoShopping />
      <Story />
    </React.Fragment>
  );
};

export default Home;
