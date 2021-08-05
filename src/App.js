import "./style/style.scss";
import Top from "./component/Top.js";
import Loginform from "./component/loginform.js";
import React, { useState } from "react";
import Entry from "./component/entry.js";

const App = () => {
  const [render, set_render] = useState(
    <Loginform top={() => change_top()} entry={() => change_entry()} />
  );
  const change_top = () => {
    set_render(<Top />);
  };
  const change_entry = () => {
    set_render(<Entry back={() => back_page()} />);
  };
  const back_page = () => {
    set_render(
      <Loginform top={() => change_top()} entry={() => change_entry()} />
    );
  };
  // set_render(change_render);

  return <div>{render}</div>;
};
export default App;
