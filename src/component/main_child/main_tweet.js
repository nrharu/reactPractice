import React from "react";

const MainTweet = () => {
  // フォームの作成途中
  // const [message, setMessage] = React.upState("")
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMessage(e.target.value);
  // }

  return (
    <div>
      <div>
        <form>
          {/*onSubmit={handleSubmit}*/}
          <input
            type="text"
            placeholder="いまどうしてる？"
            // value={message}
            // onChange={handleChange}
          />
        </form>
        <div>
          <button>
            <img src="" alt="" />
            <p>全員が返信できます</p>
          </button>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <img src="" alt="メディア" />
          </li>
          <li>
            <img src="" alt="GIF画像" />
          </li>
          <li>
            <img src="" alt="投票" />
          </li>
          <li>
            <img src="" alt="絵文字" />
          </li>
          <li>
            <img src="" alt="予約設定" />
          </li>
        </ul>
        <div>
          <input type="submit" value="送信" />
          <a href="#top">ツイートする</a>
        </div>
      </div>
    </div>
  );
};
export default MainTweet;
