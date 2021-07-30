import MainTweetIconEmoji from "./main_grand_child_icon/main_tweet_icon_emoji.js";
import MainTweetIconGIF from "./main_grand_child_icon/main_tweet_icon_GIF.js";
import MainTweetIconGraph from "./main_grand_child_icon/main_tweet_icon_graph.js";
import MainTweetIconMedia from "./main_grand_child_icon/main_tweet_icon_media.js";
import MainTweetIconReservation from "./main_grand_child_icon/main_tweet_icon_reservation.js";
import MainTweetOpenButtonIcon from "./main_grand_child_icon/main_tweet_open_button_icon.js";
import MainTweetedList from "./main_tweeted_list.js";
import React, { useState } from "react";
// import MainTweetedListFunctionList from "./main_grand_child/main_tweeted_list_function_list.js";

const MainTweet = () => {
  // フォームの作成途中
  const [content, set_content] = useState("");
  // const handleChange = (e) => {
  //   set_content(() => e.target.value);
  // };
  const handleSubmit = (e) => {
    set_content(() => e.target.value);
  };
  // console.log(handleChange());
  // // const Article = () => ({
  // //   type: MainTweetedList,
  // //   props: {
  // //     content: content,
  // //   },
  // // });
  // const Article = (content) => ({
  //   type: MainTweetedList,
  //   props: {
  //     content: content,
  //   },
  // });
  // const article = new Article(handleChange);
  return (
    <main className="main">
      <div className="main_translate">
        <div className="main_disabled_box">
          {/* ツイートするところ */}
          <div className="main_tweet">
            <div className="main_tweet_my_icon_wrap">
              <img src="" alt="my_icon" className="main_tweet_my_icon" />
            </div>
            <div className="main_tweet_content">
              <div className="main_tweet_textform_wrap">
                <form
                  className="main_tweet_textform"
                  id="tweet_submit"
                  onSubmit={handleSubmit}
                >
                  <textarea
                    className="main_tweet_textform_area"
                    placeholder="What's happening？"
                    maxLength="140"
                    // onChange={handleChange}
                    value={content}
                  ></textarea>
                </form>
                <div className="main_tweet_open_button_wrap">
                  <button className="main_tweet_open_button">
                    {/* 地球アイコン */}
                    <div className="main_tweet_open_button_icon_wrap">
                      <MainTweetOpenButtonIcon />
                      <p className="main_tweet_open_button_text">
                        全員が返信できます
                      </p>
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
                <input
                  type="submit"
                  value="Tweet"
                  form="tweet_submit"
                  className="main_tweet_submit_button"
                />
                {/* </div> */}
              </div>
            </div>
            {/* <MainTweet /> */}
          </div>
          {/*  */}
          {/* 固定ヘッダー */}
          <div className="main_margin_box"></div>
          {/* 投稿されたツイート */}
        </div>
        {/* {article} */}
        <MainTweetedList content="" icon="" />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
      </div>
    </main>
  );
};
export default MainTweet;
