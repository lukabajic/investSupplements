import React from "react";
import { Route, Switch } from "react-router-dom";

import "./Main.css";

import Home from "../../Page/Home/Home";
import About from "../../Page/About/About";

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
        <Route path="/shop">Shop</Route>
        <Route path="/contact">Contact</Route>
      </Switch>
    </main>
  );
};

export default Main;
