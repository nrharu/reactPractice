import MainTweetedListCommentIcon from "../main_grand_child_icon/main_tweeted_list_comment_icon.js";
import MainTweetedListGoodIcon from "../main_grand_child_icon/main_tweeted_list_good_icon.js";
import MainTweetedListShareIcon from "../main_grand_child_icon/main_tweeted_list_share_icon.js";
import MainTweetedListRetweetIcon from "../main_grand_child_icon/main_tweeted_list_retweet_icon.js";

const MainTweetedListFunctionList = () => {
  return (
    <ul className="main_tweeted_list_function_list">
      <li className="main_tweeted_list_function">
        {/* コメントアイコン */}
        <div className="main_tweeted_list_icon_wrap">
          <MainTweetedListCommentIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_comment"
        >
          {/* カウント数 */}x
        </p>
      </li>
      <li className="main_tweeted_list_function">
        {/* リツイートアイコン*/}
        <div className="main_tweeted_list_icon_wrap">
          <MainTweetedListRetweetIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_retweet"
        >
          {/* カウント数 */}x
        </p>
      </li>
      <li className="main_tweeted_list_function">
        {/* いいねアイコン */}
        <div className="main_tweeted_list_icon_wrap">
          <MainTweetedListGoodIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_good"
        >
          {/* カウント数 */}x
        </p>
      </li>
      <li className="main_tweeted_list_function">
        {/* 共有アイコン */}
        <div className="main_tweeted_list_icon_wrap">
          <MainTweetedListShareIcon />
        </div>
        <p
          className="main_tweeted_list_function_count 
            main_tweeted_list_function_count_share"
        >
          {/* カウント数 */}x
        </p>
      </li>
    </ul>
  );
};

export default MainTweetedListFunctionList;
