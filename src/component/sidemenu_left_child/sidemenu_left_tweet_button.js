import React from "react";
import SidemenuLeftChangeButton from "./sidemenu_left_grand_child/sidemenu_left_change_button.js";

const SidemenuLeftTweetButton = () => {
  // サイドメニューのツイッターボタンの実装　screenがうまく動作しない
  // const ViewWidth = navigator.userAgent();
  // console.log(ViewWidth);
  const screen_width = window.screen.width;
  console.log(screen_width);
  const change_style = () => {
    if (screen_width <= 1268) {
      // return <SidemenuLeftChangeButton />;
      console.log(<SidemenuLeftChangeButton />);
    } else {
      // return "<p>text</p>";
      console.log(<p>test</p>);
    }
  };
  // console.log(change_style);
  // console.log(chenge_style());
  return (
    <button className="sidemenu_left_tweet_button_wrap">
      {/* <div className="sidemenu_left_tweet_button">test</div> */}
      <div className="sidemenu_left_tweet_button">{change_style}</div>
    </button>
  );
};

export default SidemenuLeftTweetButton;
