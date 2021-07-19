import React from "react";
import SidemenuLeftNavigationList from "./sidemenu_left_child/sidemenu_left_navigation_list.js";
import SidemenuLeftTweetButton from "./sidemenu_left_child/sidemenu_left_tweet_button.js";
import SidemenuLeftNavigationTwitterIcon from "./sidemenu_left_child/sidemenu_left_navigation_twitter_icon.js";
import SidemenuLeftMyAccountDitailsButtonIcon from "./sidemenu_left_child/sidemenu_left_my_account_ditails_button_icon";

const SidemenuLeft = () => {
  return (
    <section className="sidemenu_left">
      {/* <!--ヘッダーアイコン--> */}
      <div>
        {/* ツイッターのアイコン */}
        <SidemenuLeftNavigationTwitterIcon />
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ナビゲーションリスト */}
      <ul>
        <SidemenuLeftNavigationList />
        <SidemenuLeftNavigationList />
      </ul>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ツイートボタン */}
      <SidemenuLeftTweetButton />
      {/* 自分のアカウント */}
      <div className="sidemenu_left_my_account">
        {/* 自分のアカウントアイコン */}
        <img src="" alt="my_icon"></img>
        <div className="sidemenu_left_my_account_name_box">
          <p className="sidemenu_left_my_account_name">
            {/* 自分のアカウント名 */}test
          </p>
          <p className="sidemenu_left_my_account_name">
            {/* 自分のアカウントID  */}test
          </p>
        </div>
        <div className="sidemenu_left_my_account_ditails_button_wrap">
          {/* 詳細ボタン */}
          <SidemenuLeftMyAccountDitailsButtonIcon />
        </div>
      </div>
    </section>
  );
};
export default SidemenuLeft;
