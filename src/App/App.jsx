import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./styles.css";
import Radium from "radium";

import StartPage from "./nonAuthorizedPart/StartPage";
import Dashboard from "./authorizedPart/Dashboard";

const styles = {
  app: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
};

function App() {
  return (
    <div style={styles.app}>
      <Router>
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Radium(App);
