import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import "./Main.css";

import Home from "../../Page/Home/Home";
import About from "../../Page/About/About";
import Contact from "../../Page/Contact/Contact";
import Shop from "../../Page/Shop/Shop";
import ThankYou from "../../Page/ThankYou/ThankYou";

const Main = ({ navOpen, addToCart, items }) => {
  return (
    <main className={`main ${navOpen ? "nav-active" : ""}`}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop">
          <Shop addToCart={addToCart} items={items} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/thank_you_sub">
          <ThankYou type="thank_you_sub" />
        </Route>
        <Route path="/thank_you_msg">
          <ThankYou type="thank_you_msg" />
        </Route>
      </Switch>
    </main>
  );
};

export default withRouter(Main);
