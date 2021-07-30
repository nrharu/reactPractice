import React from "react";
import MainTweetTime from "./main_grand_child/main_tweetTime.js";
import MainTweetedListFunctionList from "./main_grand_child/main_tweeted_list_function_list";

const MainTweetedList = (props) => {
  return (
    <li className="main_tweeted_list_wrap">
      <div className="main_tweeted_list_article_icon">{props.icon}</div>
      <div className="main_tweeted_list_article_wrap">
        <div>
          <MainTweetTime name="" ID="" />
          <div>
            {/* ツイート内容ツイートしたところから内容を取得　表示*/}
            {props.content}
            ツイート内容
          </div>
        </div>
        {/* いいねリツイートなどリスト */}
        <MainTweetedListFunctionList />
      </div>
    </li>
  );
};
export default MainTweetedList;
