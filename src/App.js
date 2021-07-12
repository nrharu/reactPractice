import SidemenuLeft from "./component/sidemenu_left_.js";
import Main from "./component/main.js";
import SidemenuRight from "./component/sidemenu_right.js";
import Footer from "./component/footer.js";
import "./style/style.scss";

const App = () => {
  return (
    <div className="body">
      <Main />
      <SidemenuLeft />
      <SidemenuRight />
      <Footer />
    </div>
  );
};
export default App;
