import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./styles.css";
import app from "./App.css";

import StartPage from "./nonAuthorizedPart/StartPage";

function App() {
  return (
    <div className={app}>
      <Router>
        <Switch>
          <Route path="/temp" exact>
            <p>temporary section page</p>
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

export default App;
