import React, { useState } from "react";
import MainTweetIconDitails from "../main_grand_child_icon/main_tweet_icon_ditails.js";
import firebase, { db, auth } from "../../../firestore.js";

const MainTweetTime = (props) => {
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const uid = user.uid;
      const get_user = await db.collection(uid).doc("user").get();
      // const get_field = (doc) => {
      //   get_user.get(doc);
      // };
      // const values = await Promise.all([get_field("name"), get_field("ID")]);
      const get_name = await get_user.get("name");
      const get_ID = await get_user.get("ID");
      set_name(get_name);
      set_ID(get_ID);
      // set_name(values[0]);
      // set_ID(values[1]);
    } else {
      set_name("");
      set_ID("");
    }
  });
  return (
    <div className="main_tweeted_list_article_header">
      <div className="main_tweeted_list_article_header_name_wrap">
        <p className="main_tweeted_list_article_header_account_name">{name}</p>
        <p className="main_tweeted_list_article_header_ID_time">
          @{ID}・{props.time}
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
