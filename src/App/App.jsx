import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import app from "./App.css";

import StartPage from "./nonAuthorizedPart/StartPage";

function App() {
  return (
    <div className={app}>
      <Router>
        <Route path="/">
          <StartPage />
        </Route>
        <Route path="/temp" exact>
          <p>Workssss</p>
        </Route>
      </Router>
    </div>
  );
}

export default App;
