import React from "react";
import main_tweeted_list from "./main_tweeted_list.js";

const main_tweetTime = () => {
  const tweet_time = () => {
    const startTime = Date.now();
    let nowtime = 0;
    let unitTime = "秒";
    nowtime = (Date.now() - startTime) / 1000;
    if (nowtime > 60) {
      nowtime = (Date.now() - startTime) / 60000;
      unitTime = "分";
    }
    if ((unitTime = "分" && nowtime >= 60)) {
      nowtime = (Date.now() - startTime) / 3600000;
      unitTime = "時間";
    }
    const month = now.getMonth() + 1;
    const day = now.getDate();
    if ((unitTime = "時間" && nowtime >= 24)) {
      return month + "月" + day + "日";
    }
    const nowtime_trncate = Mathfloor(nowtime);
    return nowtime_trncate + unitTime;
  };
  return (
    <div>
      <div>{/*アカウント名*/}</div>
      <p>@id名・{tweet_time}</p>
      <button>{/* 詳細ボタン */}</button>
    </div>
  );
};

export default main_tweetTime;
