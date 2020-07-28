import React from "react";
import Banner from "./Banner/Banner";
import Presentation from "./Presentation/Presentation";
import GoShopping from "./GoShopping/GoShopping";
import Story from "./Story/Story";
import Promise from "./Promise/Promise";
import Subscribe from "../../Utility/Subscribe/Subscribe";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Presentation />
      <GoShopping />
      <Story />
      <Promise />
      <Subscribe />
    </React.Fragment>
  );
};

export default Home;
