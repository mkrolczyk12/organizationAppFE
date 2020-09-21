import React from "react";
import { Route, Switch } from "react-router-dom";
import Radium from "radium";

import Header from "./Header/Header";
import Home from "./Body/Home";
import Features from "./Body/Features";
import Feedback from "./Body/Feedback";
import Contact from "./Body/Contact";
import Footer from "./Footer";

const styles = {
  StartPage: {
    minHeight: "80vh",
  },
};
class StartPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="container-fluid m-0 p-0" style={styles.StartPage}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/features" exact>
              <Features />
            </Route>
            <Route path="/contact" exact>
              <Contact />
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

export default Radium(StartPage);
