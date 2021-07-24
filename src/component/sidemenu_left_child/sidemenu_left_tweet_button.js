// import React, { useRef } from "react";
import SidemenuLeftChangeButton from "./sidemenu_left_grand_child/sidemenu_left_change_button.js";

const SidemenuLeftTweetButton = () => {
  // サイドメニューのツイッターボタンの実装　screenがうまく動作しない

  const screen_width = window.innerWidth;
  console.log(screen_width);
  window.onresize = screen_width;
  const change_style = () => {
    if (screen_width <= 1268) {
      return <SidemenuLeftChangeButton />;
    } else {
      return "<p>text</p>";
    }
  };
  // console.log(change_style);
  console.log(change_style());

  // const change_style = useRef(null);
  // handleclick = () => {
  //   change_style.current.focus();
  // };

  return (
    <button className="sidemenu_left_tweet_button">
      {/* <div className="sidemenu_left_tweet_button">test</div> */}
      <div className="sidemenu_left_tweet_button_text">{change_style}</div>
      <p>{screen_width}</p>
    </button>
  );
};

export default SidemenuLeftTweetButton;
