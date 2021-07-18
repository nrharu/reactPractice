import SidemenuLeft from "./component/sidemenu_left.js";
import Main from "./component/main.js";
import SidemenuRight from "./component/sidemenu_right.js";
import "./style/style.scss";
import Loginform from "./component/loginform.js";

const App = () => {
  // sidemenu_rightとmainのスクロールの連動実装

  return (
    <div className="body">
      <Loginform />
      <div className="content">
        <div className="sidemenu_left_box_space">
          <div className="sidemenu_left_wrap">
            <SidemenuLeft />
          </div>
        </div>
        <Main />
        <div className="sidemenu_right_box_space">
          <div className="sidemenu_right_wrap">
            <SidemenuRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
