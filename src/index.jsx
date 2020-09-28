import React from "react";
import ReactDOM from "react-dom";

import App from "./App/App.jsx";
import "./index.css";
import { StyleRoot } from "radium";

ReactDOM.render(
  <StyleRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleRoot>,
  document.getElementById("root")
);
