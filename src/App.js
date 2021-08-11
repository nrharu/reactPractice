import "./style/style.scss";
import Top from "./component/Top.js";
import Loginform from "./component/loginform.js";
import React, { useState } from "react";
import Entry from "./component/entry.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [uid, set_uid] = useState("");
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");
  const [tweet_list, set_tweet_list] = useState("");
  const check = () => {
    console.log(name);
    console.log(ID);
  };
  return (
    <Router>
      <input type="button" onClick={() => check()} value="props"></input>
      <div className="display">
        <Switch>
          <Route path="/loginform">
            <Loginform
              change_name={set_name}
              change_ID={set_ID}
              uid={set_uid}
              tweet_list={set_tweet_list}
            />
          </Route>
          {/* <Route path={path}> */}
          <Route path="/Top">
            <Top name={name} ID={ID} user_uid={uid} tweet_list={tweet_list} />
          </Route>
          <Route path="/entry">
            <Entry />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
