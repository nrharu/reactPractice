import { format } from "node:path";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Router = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Top path="/Top" />
        </Route>
        <Route>
          <Loginform path="/loginform" />
        </Route>
        <Route>
          <Entry path="/entry" />
        </Route>
      </Switch>
    </Router>
  );
};
