import React from "react";
import MainTweetTime from "./main_grand_child/main_tweetTime.js";
import MainTweetedListFunctionList from "./main_grand_child/main_tweeted_list_function_list";
import MyAccountIcon from "../../img/my_account_icon.js";

const MainTweetedList = (props) => {
  return (
    <li className="main_tweeted_list">
      <div className="main_tweeted_list_article_icon">
        <MyAccountIcon />
      </div>
      <div className="main_tweeted_list_article_wrap">
        <div>
          <MainTweetTime name="" ID="" time={props.time} />
          <div>
            {/* ツイート内容ツイートしたところから内容を取得　表示*/}
            {props.content}
          </div>
        </div>
        {/* いいねリツイートなどリスト */}
        <MainTweetedListFunctionList />
      </div>
    </li>
  );
};
export default MainTweetedList;
