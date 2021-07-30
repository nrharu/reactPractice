import React from "react";
import SidemenuLeftNavigationList from "./sidemenu_left_child/sidemenu_left_navigation_list.js";
import SidemenuLeftTweetButton from "./sidemenu_left_child/sidemenu_left_tweet_button.js";
import SidemenuLeftNavigationTwitterIcon from "./sidemenu_left_child/sidemenu_left_navigation_twitter_icon.js";
import SidemenuLeftMyAccountDitailsButtonIcon from "./sidemenu_left_child/sidemenu_left_my_account_ditails_button_icon";
import MyAccountIcon from "../img/my_account_icon.js";

const SidemenuLeft = (props) => {
  return (
    <section className="sidemenu_left">
      <div className="sidmenu_left_navigation_wrap">
        {/* <!--ヘッダーアイコン--> */}
        <div className="sidemenu_left_header">
          {/* ツイッターのアイコン */}
          <div className="sidemenu_left_twitter_icon_wrap">
            <SidemenuLeftNavigationTwitterIcon />
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* ナビゲーションリスト */}
        <div className="sidemenu_left_navigation_list_wrap">
          <SidemenuLeftNavigationList />
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* ツイートボタン */}
        <div className="sidemenu_left_tweet_button_wrap">
          <SidemenuLeftTweetButton />
        </div>
      </div>
      {/* 自分のアカウント */}
      <div className="sidemenu_left_my_account_wrap">
        {/* 自分のアカウントアイコン */}
        <div className="sidemenu_left_my_account">
          <MyAccountIcon />
          <div className="sidemenu_left_my_account_name_box">
            <p className="sidemenu_left_my_account_name">
              {/* 自分のアカウント名 */}test{props.name}
            </p>
            <p className="sidemenu_left_my_account_ID">
              {/* 自分のアカウントID  */}@test{props.ID}
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
