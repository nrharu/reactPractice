import SidemenuLeft from "./component/sidemenu_left.js";
import Main from "./component/main.js";
import SidemenuRight from "./component/sidemenu_right.js";
import "./style/style.scss";
import Loginform from "./component/loginform.js";
import SidemenuRightSearchboxIcon from "./component/sidemenu_right_child/sidemnu_right_searchbox_icon.js";

// import { useEffect } from "react";
import React, { useRef } from "react";

const App = () => {
  // sidemenu_rightとmainのスクロールの連動実装

  const main_gearing_scroll = useRef(null);
  const sidemenu_right_gearing_scroll = useRef(null);

  // main_gearing_scroll.current.addEventListener("scroll", () => {
  //   sidemenu_right_gearing_scroll.current.scrollTop =
  //     main_gearing_scroll.current.scrollTop;
  // });

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
        {/*  */}
        <div
          className="main_wrap"
          // ref={this.test2}
        >
          <Main />
        </div>
        <div
          className="sidemenu_right_box_space"
          // ref={sidemenu_right_gearing_scroll}
          // ref={test}
        >
          {/*  */}
          <div className="sidemenu_right_searchbox_sticky">
            <div className="sidemenu_right_searchbox_wrap">
              <SidemenuRightSearchboxIcon />
              <input
                type="search"
                placeholder="キーワード検索"
                className="sidemenu_right_searchbox"
              ></input>
            </div>
          </div>
          <div
            className="sidemenu_right_wrap"
            // ref={this.test}
          >
            <SidemenuRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
