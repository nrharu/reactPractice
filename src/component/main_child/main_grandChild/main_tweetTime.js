import { O_NOFOLLOW } from "constants";
import React from "react";

const MainTweetTime = () => {
  // const tweet_time = "usagi";
  // console.log(tweet_time);

  const tweet_time = () => {
    let now = 0;
    let startTime = new Date();
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
    const month = startTime.getMonth() + 1;
    const day = startTime.getDate();
    if ((unitTime = "時間" && nowtime >= 24)) {
      return month + "月" + day + "日";
    }
    const nowtime_trncate = Math.floor(nowtime);
    return nowtime_trncate + unitTime;
  };
  return (
    <div>
      <div>アカウント名</div>
      <p>@id名・{tweet_time}</p>
      <button>詳細ボタン</button>
    </div>
  );
};

export default MainTweetTime;
