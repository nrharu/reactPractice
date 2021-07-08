import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import header from "./component/header.js";
import main from "./component/main.js";
import sidemenu from "./component/sidemenu.js";
import footer from "./component/footer.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(footer, document.getElementById("root"));
// ReactDOM.render(sidemenu, document.getElementById("root"));
// ReactDOM.render(main, document.getElementById("root"));
// ReactDOM.render(header, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
