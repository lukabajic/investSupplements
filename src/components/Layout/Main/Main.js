import React from "react";
import { Route, Switch } from "react-router-dom";

import "./Main.css";

import Home from "../../Page/Home/Home";
import About from "../../Page/About/About";
import Contact from "../../Page/Contact/Contact";
import Shop from "../../Page/Shop/Shop";

const Main = ({ navOpen }) => {
  return (
    <main className={`main ${navOpen ? "nav-active" : ""}`}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
