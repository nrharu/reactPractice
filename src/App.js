import Sidemenu_left from "./component/sidemenu_left_.js";
import Main from "./component/main.js";
import Sidemenu_right from "./component/sidemenu_right.js";
import Footer from "./component/footer.js";

const App = () => {
  return (
    <div>
      <Main />
      <Sidemenu_left />
      <Sidemenu_right />
      <Footer />
    </div>
  );
};
export default App;
