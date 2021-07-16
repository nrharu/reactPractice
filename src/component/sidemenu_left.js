import React from "react";
import SidemenuLeftNavigationList from "./sidemenu_left_child/sidemenu_left_navigation_list.js";
import SidemenuLeftTweetButton from "./sidemenu_left_child/sidemenu_left_tweet_button.js";

const SidemenuLeft = () => {
  return (
    <section className="sidemenu_left">
      {/* <!--ヘッダーアイコン--> */}
      <div>
        {/* ツイッターのアイコン */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="sidemenu_left_twitter_icon"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
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
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="sidemenu_left_my_account_ditails_button"
          >
            <g>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default SidemenuLeft;
