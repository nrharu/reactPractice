import MainTweetedListCommentIcon from "../main_grand_child_icon/main_tweeted_list_comment_icon.js";
import MainTweetedListGoodIcon from "../main_grand_child_icon/main_tweeted_list_good_icon.js";
import MainTweetedListShareIcon from "../main_grand_child_icon/main_tweeted_list_share_icon.js";
import MainTweetedListRetweetIcon from "../main_grand_child_icon/main_tweeted_list_retweet_icon.js";
import React, { useState } from "react";

const MainTweetedListFunctionList = () => {
  const [count_retweet, set_count_retweet] = useState(null);
  const [count_good, set_count_good] = useState(null);

  return (
    <div className="main_tweeted_list_function_list">
      <button className="main_tweeted_list_function main_tweeted_list_function_comment">
        {/* コメントアイコン */}
        <div className="main_tweeted_list_icon_wrap main_tweeted_list_icon_wrap_comment">
          <MainTweetedListCommentIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_comment"
        ></p>
      </button>
      <button
        onClick={() => set_count_retweet(count_retweet + 1)}
        className="main_tweeted_list_function main_tweeted_list_function_retweet"
      >
        {/* リツイートアイコン*/}
        <div className="main_tweeted_list_icon_wrap main_tweeted_list_icon_wrap_retweet">
          <MainTweetedListRetweetIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_retweet"
        >
          {count_retweet}
          {/* カウント数 */}
        </p>
      </button>
      <button
        onClick={() => set_count_good(count_good + 1)}
        className="main_tweeted_list_function main_tweeted_list_function_good"
      >
        {/* いいねアイコン */}
        <div className="main_tweeted_list_icon_wrap main_tweeted_list_icon_wrap_good">
          <MainTweetedListGoodIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_good"
        >
          {count_good}
          {/* カウント数 */}
        </p>
      </button>
      <button className="main_tweeted_list_function main_tweeted_list_function_share">
        {/* 共有アイコン */}
        <div className="main_tweeted_list_icon_wrap main_tweeted_list_icon_wrap_share">
          <MainTweetedListShareIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_share"
        ></p>
      </button>
    </div>
  );
};

export default MainTweetedListFunctionList;
