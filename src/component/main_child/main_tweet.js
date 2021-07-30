import MainTweetIconEmoji from "./main_grand_child_icon/main_tweet_icon_emoji.js";
import MainTweetIconGIF from "./main_grand_child_icon/main_tweet_icon_GIF.js";
import MainTweetIconGraph from "./main_grand_child_icon/main_tweet_icon_graph.js";
import MainTweetIconMedia from "./main_grand_child_icon/main_tweet_icon_media.js";
import MainTweetIconReservation from "./main_grand_child_icon/main_tweet_icon_reservation.js";
import MainTweetOpenButtonIcon from "./main_grand_child_icon/main_tweet_open_button_icon.js";
import MainTweetedList from "./main_tweeted_list.js";
import React, { useState } from "react";
import MyAccountIcon from "../../img/my_account_icon.js";

const MainTweet = () => {
  // 投稿機能
  const [content, set_content] = useState("");
  const [tweet_lists, set_tweet_lists] = useState([]);
  const handleSubmit = (e) => {
    set_content(() => e.target.value);
  };
  const [time, set_time] = useState("");
  let now_time = Date.now();
  const add = () => {
    const new_content = { content };
    const new_tweet_lists = [new_content, ...tweet_lists];
    set_tweet_lists(new_tweet_lists);
    set_content("");

    //
    // let now_time = Date.now();
    set_time(now_time);
    //
  };
  console.log(content);
  //

  //クラス変更機能
  const [className, setClassName] = useState("main_tweet_open_button_wrap");
  const classNameChange = () =>
    setClassName("main_jtweet_open_button_wrap_change");
  //

  //投稿時からの経過時間の取得機能
  // const [time, setTime] = useState("");
  // const tweet_time = () => {
  //   let startTime = new Date();
  //   console.log(startTime);
  //   let now_time = null;
  //   console.log(now_time);
  //   let unitTime = "秒";
  //   console.log(unitTime);
  //   now_time = Date.now() - startTime / 1000;
  //   console.log(now_time);
  //   if (now_time > 60) {
  //     now_time = (Date.now() - startTime) / 60000;
  //     unitTime = "分";
  //   }
  //   if ((unitTime = "分" && now_time >= 60)) {
  //     now_time = (Date.now() - startTime) / 3600000;
  //     unitTime = "時間";
  //   }
  //   const month = startTime.getMonth() + 1;
  //   const day = startTime.getDate();
  //   if ((unitTime = "時間" && now_time >= 24)) {
  //     return month + "月" + day + "日";
  //   }
  //   const now_time_trncate = Math.floor(now_time);
  //   return now_time_trncate + unitTime;
  // };

  //
  return (
    <main className="main">
      <div className="main_translate">
        <div className="main_disabled_box">
          {/* ツイートするところ */}
          <div className="main_tweet">
            <div className="main_tweet_my_icon_wrap">
              <MyAccountIcon />
              {/* <img src="" alt="my_icon" className="main_tweet_my_icon" /> */}
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
        <ul className="main_tweeted_list_wrap">
          {tweet_lists.map((tweet) => (
            <MainTweetedList content={tweet.content} time={tweet.time} />
          ))}
          {/* <MainTweetedList content={content} /> */}
        </ul>
      </div>
    </main>
  );
};
export default MainTweet;
