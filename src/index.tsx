import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import App from "./App";
import Store from "./stores/providers/store.provider";
import reportWebVitals from "./reportWebVitals";// import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Store>
      <Route component={App} />
    </Store>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
