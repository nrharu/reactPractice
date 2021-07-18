import React from "react";
// import SidemenuLeftChangeButton from "./sidemenu_left_grand_child/sidemenu_left_change_button.js";

const SidemenuLeftTweetButton = () => {
  // サイドメニューのツイッターボタンの実装　screenがうまく動作しない
  // const ViewWidth=navigator.userAgent()
  //   const screen_width = screen.location.width;
  //   const change_style = () => {
  //     if (screen_width <= 1268) {
  //       return <SidemenuLeftChangeButton />;
  //     } else {
  //       return "Tweet";
  //     }
  //   };
  return (
    <button className="sidemenu_left_tweet_button_wrap">
      <div className="sidemenu_left_tweet_button">test</div>
    </button>
  );
};

export default SidemenuLeftTweetButton;
