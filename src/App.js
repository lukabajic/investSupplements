import React, { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Nav from "./components/Layout/Nav/Nav";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleNav = () => {
    if (cartOpen) setCartOpen(false);
    setNavOpen(!navOpen);
  };

  const toggleCart = () => {
    if (navOpen) setNavOpen(false);
    setCartOpen(!cartOpen);
  };

  return (
    <React.Fragment>
      <Header toggleNav={toggleNav} toggleCart={toggleCart} navOpen={navOpen} />
      <Nav active={navOpen} linkClick={toggleNav} />
      <Main navOpen={navOpen} />
      <Footer navOpen={navOpen} />
    </React.Fragment>
  );
}

export default App;
