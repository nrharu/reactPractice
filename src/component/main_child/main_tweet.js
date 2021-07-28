import React from "react";
import MainTweetIconEmoji from "./main_grand_child_icon/main_tweet_icon_emoji.js";
import MainTweetIconGIF from "./main_grand_child_icon/main_tweet_icon_GIF.js";
import MainTweetIconGraph from "./main_grand_child_icon/main_tweet_icon_graph.js";
import MainTweetIconMedia from "./main_grand_child_icon/main_tweet_icon_media.js";
import MainTweetIconReservation from "./main_grand_child_icon/main_tweet_icon_reservation.js";
import MainTweetOpenButtonIcon from "./main_grand_child_icon/main_tweet_open_button_icon.js";
// import React,{useState} from "react";

const MainTweet = () => {
  // フォームの作成途中
  // const [message, setMessage] = React.upState("")
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMessage(e.target.value);
  // }

  // const []

  return (
    <div className="main_tweet_content">
      <div className="main_tweet_textform_wrap">
        <form className="main_tweet_textform">
          {/*onSubmit={handleSubmit}*/}
          <textarea
            className="main_tweet_textform_area"
            placeholder="What's happening？"
            maxLength="140"
          ></textarea>
        </form>
        <div className="main_tweet_open_button_wrap">
          <button className="main_tweet_open_button">
            {/* 地球アイコン */}
            <div className="main_tweet_open_button_icon_wrap">
              <MainTweetOpenButtonIcon />
              <p className="main_tweet_open_button_text">全員が返信できます</p>
            </div>
          </button>
        </div>
      </div>
      <div className="main_tweet_button_list">
        <ul className="main_tweet_icon_list_wrap">
          <li className="main_tweet_icon_list">
            {/* メディアアイコン */}
            <MainTweetIconMedia />
          </li>
          <li className="main_tweet_icon_list">
            {/* GIF画像アイコン */}
            <MainTweetIconGIF />
          </li>
          <li className="main_tweet_icon_list">
            {/* グラフアイコン */}
            <MainTweetIconGraph />
          </li>
          <li className="main_tweet_icon_list">
            {/* 絵文字アイコン */}
            <MainTweetIconEmoji />
          </li>
          <li className="main_tweet_icon_list">
            {/* 予約機能アイコン */}
            <MainTweetIconReservation />
          </li>
        </ul>
        {/* ツイートボタン */}
        {/* <div className="main_tweet_submit_button_wrap"> */}
        <button className="main_tweet_submit_button">
          <p className="main_tweet_submit_button_text">Tweet</p>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};
export default MainTweet;
