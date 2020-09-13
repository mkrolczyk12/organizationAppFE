import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Body/Home";
import Feedback from "./Body/Feedback";
import Contact from "./Body/Contact";
import Footer from "./Footer";

class StartPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="container-fluid m-0 p-0" style={{ minHeight: "80vh" }}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/features" exact>
              <div>Features</div>
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/support" exact>
              <div>Support</div>
            </Route>
            <Route path="/feedback" exact>
              <Feedback />
            </Route>
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default StartPage;
