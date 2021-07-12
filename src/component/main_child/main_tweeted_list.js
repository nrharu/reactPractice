import React from "react";
import MainTweetTime from "./main_grandChild/main_tweetTime.js";

const MainTweetedList = () => {
  return (
    <div>
      <h1>テスト</h1>
      <article>
        <div>
          <img src="" alt="my_icon" />
        </div>
        <div>
          <MainTweetTime />
          <div>{/* ツイート内容ツイートしたところから内容を取得　表示*/}</div>
        </div>
      </article>
      {/* いいねリツイートなどリスト */}
      <ul>
        <li>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="tweeted_list_icon_coment"
          >
            <g>
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
            </g>
          </svg>
          <div>{/* カウント数 */}</div>
        </li>
      </ul>
    </div>
  );
};
export default MainTweetedList;