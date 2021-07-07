import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import header from "../component/header.js";
import main from "./main.js";
import sidemenu from "./sidemenu.js";
import footer from "./footer.js";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(footer, document.getElementById("root"));
ReactDOM.render(sidemenu, document.getElementById("root"));
ReactDOM.render(main, document.getElementById("root"));
ReactDOM.render(header, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
