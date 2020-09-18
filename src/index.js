import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <Route component={App} />
  </Router>,
  document.getElementById("root")
);
