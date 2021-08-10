import "./style/style.scss";
import Top from "./component/Top.js";
import Loginform from "./component/loginform.js";
import React, { useState } from "react";
import Entry from "./component/entry.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const App = () => {
//   const [render, set_render] = useState(
//     <Loginform top={() => change_top()} entry={() => change_entry()} />
//   );
//   const change_top = () => {
//     set_render(<Top />);
//   };
//   const change_entry = () => {
//     set_render(<Entry back={() => back_page()} />);
//   };
//   const back_page = () => {
//     set_render(
//       <Loginform top={() => change_top()} entry={() => change_entry()} />
//     );
//   };
//   // set_render(change_render);

//   return <div>{render}</div>;
// };

const App = () => {
  const [name, set_name] = useState("usagi");
  const [ID, set_ID] = useState("usagi");
  // <Loginform child_name={set_name} child_ID={set_ID} />;
  <Top name={name} ID={ID} />;
  const check = () => {
    set_name("usagi");
    set_ID("usagi");
    console.log(ID);
    console.log(name);
  };
  return (
    <Router>
      <input
        type="button"
        onClick={() => check()}
        value="propsチェック"
      ></input>
      <div className="display">
        <Switch>
          <Route path="/loginform">
            <Loginform child_name={set_name} child_ID={set_ID} />
          </Route>
          <Route path="/Top">
            <Top />
          </Route>
          <Route path="/entry">
            <Entry />
          </Route>
          {/* <Route path="/loginform" component={Loginform} />
          <Route path="/Top" component={Top} />
          <Route path="/entry" component={Entry} /> */}
        </Switch>
      </div>
    </Router>
  );
};
export default App;
