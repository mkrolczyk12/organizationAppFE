import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App.jsx";
import { StyleRoot } from "radium";

ReactDOM.render(
  <StyleRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyleRoot>,
  document.getElementById("root")
);
