import SidemenuLeft from "./component/sidemenu_left_.js";
import Main from "./component/main.js";
import SidemenuRight from "./component/sidemenu_right.js";
import "./style/style.scss";
import Loginform from "./component/loginform.js";

const App = () => {
  return (
    <div className="body">
      <Loginform />
      <div className="content">
        <SidemenuLeft />
        <Main />
        <SidemenuRight />
      </div>
    </div>
  );
};
export default App;
