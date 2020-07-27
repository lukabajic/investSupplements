import React from "react";

import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <div>Footer</div>
    </React.Fragment>
  );
}

export default App;
