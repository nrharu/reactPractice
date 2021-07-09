import React from "react";

const SidemenuRight = () => {
  return (
    <section>
      {/*  */}
      {/* 検索欄 */}
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input type="search" placeholder="キーワード検索"></input>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* いまどうしてる？ */}
      <div>
        <ul>
          <li>
            <p>いまどうしてる？</p>
          </li>
          <li>{/* ニュース */}</li>
          <li>{/* 広告 */}</li>
          <li>{/* トレンド*/}</li>
          <li>
            <a href="#top"> さらに表示</a>
          </li>
        </ul>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* おすすめユーザー */}
      <ul>
        <li>
          <p>おすすめユーザー</p>
        </li>
        <li>
          {/* ユーザーアイコン */}
          <a href="#top">
            <img src="" alt="" />
          </a>
          <div>
            <div>
              <div>{/* アカウント名 */}</div>
              <div>{/* アカウントId */}</div>
            </div>
            <div>
              <a href="#top">フォローする</a>
            </div>
          </div>
        </li>
        {/* 同じものの繰り返し */}
        <li>
          <a href="#top"> さらに表示</a>
        </li>
      </ul>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* おすすめのトピック */}
      <ul>
        <li>
          <p>おすすめトピック</p>
        </li>
        <li>
          <div>
            <div>
              <div>{/* トピック名 */}</div>
              <div>{/* トピックのジャンル */}</div>
            </div>
            <div>
              <a href="#top">フォローする</a>
              <a href="#top">{/* クローズアイコン */}</a>
            </div>
          </div>
        </li>
        {/* 同じものの繰り返し */}
        <li>
          <a href="#top"> さらに表示</a>
        </li>
      </ul>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* ダイレクトメッセージ */}
      <div>
        <ul>
          <li>
            <p>メッセージ</p>
            <a href="#top">
              <img src="" alt="" />
            </a>
            <a href="#top">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SidemenuRight;
