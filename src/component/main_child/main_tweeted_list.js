import React from "react";
import MainTweetTime from "./main_grand_child/main_tweetTime.js";
import MainTweetedListCommentIcon from "./main_grand_child_icon/main_tweeted_list_comment_icon.js";
import MainTweetedListGoodIcon from "./main_grand_child_icon/main_tweeted_list_good_icon.js";
import MainTweetedListShareIcon from "./main_grand_child_icon/main_tweeted_list_share_icon.js";
import MainTweetedListRetweetIcon from "./main_grand_child_icon/main_tweeted_list_retweet_icon.js";

const MainTweetedList = () => {
  return (
    <article className="main_tweeted_list_wrap">
      <div className="main_tweeted_list_article_icon">
        <img src="" alt="my_icon" />
      </div>
      <div className="main_tweeted_list_article_wrap">
        <div>
          <MainTweetTime />
          <div>
            {/* ツイート内容ツイートしたところから内容を取得　表示*/}
            ツイート内容
          </div>
        </div>
        {/* いいねリツイートなどリスト */}
        <ul className="main_tweeted_list_icon_list">
          <li>
            {/* コメントアイコン */}
            <MainTweetedListCommentIcon />
            <div>{/* カウント数 */}</div>
          </li>
          <li>
            {/* リツイートアイコン*/}

            <MainTweetedListRetweetIcon />
          </li>
          <li>
            {/* いいねアイコン */}
            <MainTweetedListGoodIcon />
          </li>
          <li>
            {/* 共有アイコン */}
            <MainTweetedListShareIcon />
          </li>
        </ul>
      </div>
    </article>
  );
};
export default MainTweetedList;
