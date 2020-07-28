import React from "react";
import Banner from "./Banner/Banner";
import Presentation from "./Presentation/Presentation";
import GoShopping from "./GoShopping/GoShopping";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Presentation />
      <GoShopping />
    </React.Fragment>
  );
};

export default Home;
