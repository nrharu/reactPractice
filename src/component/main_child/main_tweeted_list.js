import React from "react";
import MainTweetTime from "./main_grand_child/main_tweetTime.js";
import MainTweetedListFunctionList from "./main_grand_child/main_tweeted_list_function_list";
import MyAccountIcon from "../../img/my_account_icon.js";

const MainTweetedList = (props) => {
  let indicate_time = null;
  let now_date = null;
  window.addEventListener("load", () => {
    const tweet_date = new Date();
    let unit_time = "秒";
    let now_time = (Date.now() - props.time) / 1000;
    const month = tweet_date.getMonth() + 1;
    const day = tweet_date.getDate();
    if (unit_time === "秒" && now_time >= 60) {
      now_time = (Date.now() - props.time) / 60000;
      unit_time = "分";
    }
    if (unit_time === "分" && now_time >= 60) {
      now_time = (Date.now() - props.time) / 3600000;
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
  });
  return (
    <li className="main_tweeted_list">
      <div className="main_tweeted_list_article_icon">
        <MyAccountIcon />
      </div>
      <div className="main_tweeted_list_article_wrap">
        <div>
          <MainTweetTime name={props.name} ID={props.ID} time={indicate_time} />
          <p className="main_tweeted_list_article_content">
            {/* ツイート内容ツイートしたところから内容を取得　表示*/}
            {props.content}
          </p>
        </div>
        {/* いいねリツイートなどリスト */}
        <MainTweetedListFunctionList />
      </div>
    </li>
  );
};
export default MainTweetedList;
