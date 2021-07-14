import React from "react";

const MainTweetTime = () => {
  // const tweet_time = "usagi";
  // console.log(tweet_time);

  const tweet_time = () => {
    // let now = 0;
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
    <div className="main_tweeted_list_article_header">
      <div className="main_tweeted_list_article_header_name_wrap">
        <div className="main_tweeted_list_article_header_account_name">
          アカウント名
        </div>
        <p className="main_tweeted_list_article_header_ID_time">
          @id名・{tweet_time()}
        </p>
      </div>
      <div className="main_tweeted_list_article_header_button_wrap">
        <button className="main_tweetd_list_article_header_button">
          {/* 詳細ボタン */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="main_tweeted_list_article_header_button_icon"
          >
            <g>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainTweetTime;
