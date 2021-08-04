import MainTweetIconEmoji from "./main_grand_child_icon/main_tweet_icon_emoji.js";
import MainTweetIconGIF from "./main_grand_child_icon/main_tweet_icon_GIF.js";
import MainTweetIconGraph from "./main_grand_child_icon/main_tweet_icon_graph.js";
import MainTweetIconMedia from "./main_grand_child_icon/main_tweet_icon_media.js";
import MainTweetIconReservation from "./main_grand_child_icon/main_tweet_icon_reservation.js";
import MainTweetOpenButtonIcon from "./main_grand_child_icon/main_tweet_open_button_icon.js";
import MainTweetedList from "./main_tweeted_list.js";
import React, { useState, useEffect } from "react";
import MyAccountIcon from "../../img/my_account_icon.js";
import MainTweetTextArea from "./main_grand_child/main_tweet_text_area.js";
import firebase from "firebase";

const MainTweet = (props) => {
  // 投稿機能
  const [content, set_content] = useState("");
  const [tweet_lists, set_tweet_lists] = useState([]);
  const [rows, set_rows] = useState(1);
  //テキストエリアのサイズ調整
  let number = 0;
  const get_number = () => {
    const lines_number = content.match(/\r\n|\n/g);
    if (lines_number != null) {
      number = lines_number.length + 1;
    }
    set_rows(number);
    console.log(number);
  };
  const handleSubmit = (e) => {
    set_content(() => e.target.value);
    get_number();
  };

  const [time, set_time] = useState("");

  // let i = 0;
  const [time_list, set_time_list] = useState([]);

  const add = () => {
    //投稿機能
    const new_content = { content };
    const new_tweet_lists = [new_content, ...tweet_lists];
    set_tweet_lists(new_tweet_lists);
    set_content("");
    set_rows(1);
    //

    //ツイートした時間
    const new_time = { time };
    const new_time_list = [new_time, ...time_list];
    set_time_list(new_time_list);
    //
    let get_time = Date.now();
    let indicate_time = null;
    let now_date = null;
    let tweet_time = () => {
      const tweet_date = new Date();
      let unit_time = "秒";
      let now_time = (Date.now() - get_time) / 1000;
      const month = tweet_date.getMonth() + 1;
      const day = tweet_date.getDate();
      if (unit_time === "秒" && now_time >= 60) {
        now_time = (Date.now() - get_time) / 60000;
        unit_time = "分";
      }
      if (unit_time === "分" && now_time >= 60) {
        now_time = (Date.now() - get_time) / 3600000;
        unit_time = "時間";
      }
      if (unit_time === "時間" && now_time >= 24) {
        now_date = month + "月" + day + "日";
        now_time = null;
      }
      const integer_time = Math.floor(now_time);
      if (now_time != null) {
        indicate_time = integer_time + unit_time;
      } else {
        indicate_time = now_date;
      }
      console.log(indicate_time);
      set_time(indicate_time);
    };

    // setInterval(tweet_time, 1000);
  };
  //

  //クラス変更
  const [className, setClassName] = useState("main_tweet_open_button_wrap");
  const classNameChange = () =>
    setClassName("main_tweet_open_button_wrap_change");
  //

  //テキストエリア

  //データベース
  //   debug.collection("tweet_list").doc("tweet").set({
  //     content:{content},
  //     name:{props.name},
  //     ID:{props.ID},
  //       time:
  // })
  //

  return (
    <main className="main">
      <div className="main_translate">
        <div className="main_disabled_box">
          {/* ツイートするところ */}
          <div className="main_tweet">
            <div className="main_tweet_my_icon_wrap">
              <MyAccountIcon />
            </div>
            <div className="main_tweet_content" onClick={classNameChange}>
              <div className="main_tweet_textform_wrap">
                {/* <form className="main_tweet_textform" id="tweet" onSubmit={add}>
                  <textarea
                    className="main_tweet_textform_area"
                    placeholder="What's happening？"
                    maxLength="140"
                    onChange={handleSubmit}
                    value={content}
                    cols="33"
                  ></textarea> */}
                {/* </form> */}
                <MainTweetTextArea
                  handle={handleSubmit}
                  value={content}
                  // value="usagisikakatan"
                  add={add}
                  id="tweet"
                  rows={rows}
                />
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
                <input
                  type="submit"
                  value="Tweet"
                  form="tweet"
                  className="main_tweet_submit_button"
                />
              </div>
            </div>
          </div>
          {/*  */}
          {/* 固定ヘッダー */}
          <div className="main_margin_box"></div>
          {/* 投稿されたツイート */}
        </div>
        <ul className="main_tweeted_list_wrap">
          {tweet_lists.map((tweet) => (
            <MainTweetedList
              content={tweet.content}
              // time={time_list[i++]}
              time={time}
              name={props.name}
              ID={props.ID}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};
export default MainTweet;
