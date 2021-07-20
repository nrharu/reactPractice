import React from "react";
import SidemenuLeftNavigationList from "./sidemenu_left_child/sidemenu_left_navigation_list.js";
import SidemenuLeftTweetButton from "./sidemenu_left_child/sidemenu_left_tweet_button.js";
import SidemenuLeftNavigationTwitterIcon from "./sidemenu_left_child/sidemenu_left_navigation_twitter_icon.js";
import SidemenuLeftMyAccountDitailsButtonIcon from "./sidemenu_left_child/sidemenu_left_my_account_ditails_button_icon";

const SidemenuLeft = () => {
  return (
    <section className="sidemenu_left">
      {/* <!--ヘッダーアイコン--> */}
      <div className="sidemenu_left_twitter_icon_wrap">
        {/* ツイッターのアイコン */}
        <SidemenuLeftNavigationTwitterIcon />
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ナビゲーションリスト */}
      <ul className="sidmenu_left_navigation_list_wrap">
        <SidemenuLeftNavigationList />
        <SidemenuLeftNavigationList />
      </ul>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ツイートボタン */}
      <div className="sidemenu_left_tweet_button_wrap">
        <SidemenuLeftTweetButton />
      </div>
      {/* 自分のアカウント */}
      <div className="sidemenu_left_my_account_wrap">
        {/* 自分のアカウントアイコン */}
        <div className="sidemenu_left_my_account">
          <img
            src=""
            alt="my_icon"
            className="sidemenu_left_my_account_icon"
          ></img>
          <div className="sidemenu_left_my_account_name_box">
            <p className="sidemenu_left_my_account_name">
              {/* 自分のアカウント名 */}test
            </p>
            <p className="sidemenu_left_my_account_name">
              {/* 自分のアカウントID  */}test
            </p>
          </div>
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
