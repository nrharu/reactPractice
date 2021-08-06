import SidemenuLeft from "./sidemenu_left.js";
import Main from "./main.js";
import SidemenuRight from "./sidemenu_right.js";
// import "./style/style.scss";
import Loginform from "./loginform.js";
import SidemenuRightSearchboxIcon from "./sidemenu_right_child/sidemnu_right_searchbox_icon.js";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import React, { useEffect } from "react";

const Top = (props) => {
  // const [name, setName] = useState("");
  // const [ID, setID] = useState("");
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
      <Link to="/loginform">戻る</Link>
      {/* <Loginform child_name={setName} child_ID={setID} /> */}
      <div className="content">
        <div className="sidemenu_left_box_space">
          <div className="sidemenu_left_wrap">
            <SidemenuLeft child_name={props.name} child_ID={props.ID} />
          </div>
        </div>
        {/*  */}
        <div
          className="main_wrap"
          // onScroll={scroll_gearing()}
          // ref={this.test2}
        >
          <Main child_name={props.name} child_ID={props.ID} />
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
export default Top;
