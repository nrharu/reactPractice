import "./style/style.scss";
import HomePage from "./component/homepage.js";
import Loginform from "./component/loginform.js";
import React, { useState } from "react";

const App = () => {
  const [render, set_render] = useState(<Loginform />);
  return <div>{render}</div>;
};
export default App;
