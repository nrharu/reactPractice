// import SidemenuLeft from "./component/sidemenu_left_.js";
import Main from "./component/main.js";
// import SidemenuRight from "./component/sidemenu_right.js";
import "./style/style.scss";
import Loginform from "./component/loginform.js";

const App = () => {
  return (
    <div className="body">
      <Loginform />
      <div className="content">
        <div className="responsive_box">
          <div className="sidemenu_left_box_space"></div>
          <Main />
        </div>
        <div className="sidemenu_right_box_space"></div>
      </div>
    </div>
  );
};
export default App;
