import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import header from "component/header";
import main from "component/main.js";
import sidemenu from "component/sidemenu.js";
import footer from "component/footer.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(footer, document.getElementById);
ReactDOM.render(sidemenu, document.getElementById);
ReactDOM.render(main, document.getElementById);
ReactDOM.render(header, document.getElementById);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
