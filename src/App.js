import SidemenuLeft from "./component/sidemenu_left.js";
import Main from "./component/main.js";
import SidemenuRight from "./component/sidemenu_right.js";
import "./style/style.scss";
import Loginform from "./component/loginform.js";
// import React, { useRef, useEffect } from "react";

const App = () => {
  // sidemenu_rightとmainのスクロールの連動実装
  // export const Intersecting = () => {
  //   const ref = useRef(null);
  //   useEffrct(() => {
  //     if (ref.current) {
  //     }
  //   }, []);
  //   return <div ref={ref} className="target_dom"></div>;
  // };

  // const right_scroll = document.getByElementId("sidmenu_right_gearing_scroll");
  // const main_scroll = document.getByElementById("main_gearing_scroll");
  // main_scroll.addEventListener("scroll", () => {
  //   right_scroll.scrollTop = main_scroll.scrollTop;
  // });

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
        <div
          className="sidemenu_right_box_space"
          id="sidemenu_right_gearing_scroll"
        >
          <div className="sidemenu_right_wrap">
            <SidemenuRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
