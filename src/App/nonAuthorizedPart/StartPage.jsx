import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Body/Home";
import Footer from "./Footer";

class StartPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main style={{ minHeight: "80vh" }}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <div>O nas</div>
            </Route>
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default StartPage;
