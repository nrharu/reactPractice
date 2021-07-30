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
  // 投稿機能
  const [content, set_content] = useState("");
  const [tweet_lists, set_tweet_lists] = useState([]);
  const [ID, set_ID] = useState(0);
  const handleSubmit = (e) => {
    set_content(() => e.target.value);
  };
  const add = () => {
    const new_content = { content };
    const new_tweet_lists = [new_content, ...tweet_lists];
    const tweet_ID = tweet_lists.length;
    set_tweet_lists(new_tweet_lists);
    set_content("");
    set_ID(tweet_ID);
  };
  console.log(content);

  //クラス変更機能
  const [className, setClassName] = useState("main_tweet_open_button_wrap");
  const classNameChange = () =>
    setClassName("main_jtweet_open_button_wrap_change");

  return (
    <main className="main">
      <div className="main_translate">
        <div className="main_disabled_box">
          {/* ツイートするところ */}
          <div className="main_tweet">
            <div className="main_tweet_my_icon_wrap">
              <img src="" alt="my_icon" className="main_tweet_my_icon" />
            </div>
            <div className="main_tweet_content" onClick={classNameChange}>
              <div className="main_tweet_textform_wrap">
                <form
                  className="main_tweet_textform"
                  id="tweet"
                  // onSubmit={content}
                  onSubmit={add}
                >
                  <textarea
                    className="main_tweet_textform_area"
                    placeholder="What's happening？"
                    maxLength="140"
                    onChange={handleSubmit}
                    value={content}
                  ></textarea>
                </form>
                <div className={className}>
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
                  form="tweet"
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
        <ul>
          {tweet_lists.map((tweet) => (
            <MainTweetedList content={tweet.content} key={tweet.ID} />
          ))}
          {/* <MainTweetedList content={content} /> */}
        </ul>
        {/* <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList />
        <MainTweetedList /> */}
      </div>
    </main>
  );
};
export default MainTweet;
