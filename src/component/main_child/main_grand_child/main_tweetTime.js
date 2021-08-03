import React from "react";
import MainTweetIconDitails from "../main_grand_child_icon/main_tweet_icon_ditails.js";
import firebase, { db } from "../../../firestore.js";

const MainTweetTime = (props) => {
  // const tweet_time = "usagi";
  // console.log(tweet_time);
  //データベース
  db.collection("users")
    .doc("875irvF9ySQFlgkggKx9")
    .get()
    //
    .return(
      <div className="main_tweeted_list_article_header">
        <div className="main_tweeted_list_article_header_name_wrap">
          <p className="main_tweeted_list_article_header_account_name">
            {props.name}
          </p>
          <p className="main_tweeted_list_article_header_ID_time">
            @{props.ID}・{props.time}
          </p>
        </div>
        <div className="main_tweeted_list_article_header_button_wrap">
          <div className="main_tweetd_list_article_header_button">
            {/* 詳細ボタン */}
            <MainTweetIconDitails />
          </div>
        </div>
      </div>
    );
};

export default MainTweetTime;
