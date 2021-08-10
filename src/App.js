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
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");
  const [uid, set_uid] = useState("");
  // <Loginform child_name={set_name} child_ID={set_ID} />;
  // const [top_list, set_top_list] = useState([]);
  // const [top, set_top] = useState(<Top name={name} ID={ID} />);
  // // const top = <Top name={name} ID={ID} />
  // const new_top = { top };
  // const new_top_list = [new_top, ...top_list];
  // set_top_list(new_top_list);
  const path = `/Top/${ID}`;
  return (
    <Router>
      {/* <input
        type="button"
        onClick={() => check()}
        value="propsチェック"
      ></input> */}
      <div className="display">
        <Switch>
          <Route path="/loginform">
            <Loginform
              change_name={set_name}
              change_ID={set_ID}
              get_uid={set_uid}
            />
          </Route>
          {/* <Route path={path}> */}
          <Route path="/Top">
            <Top name={name} ID={ID} user_uid={uid} />
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
