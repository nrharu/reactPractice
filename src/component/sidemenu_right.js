import React from "react";
import SidemenuUser from "./sidemenu_right_child/sidemenu_user.js";
import SidemenuTopic from "./sidemenu_right_child/sidemenu_topic.js";
import Footer from "./footer.js";

const SidemenuRight = () => {
  return (
    <section className="sidemenu_right">
      {/*  */}
      {/* 検索欄 */}
      <div className="sidemenu_right_">
        <div className="sidemenu_right_searchbox_wrap">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="sidemenu_right_searchbox_icon"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="キーワード検索"
            className="sidemenu_right_searchbox"
          ></input>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* いまどうしてる？ */}
      <div className="sidemenu_right_doingnow sidemenu_right_article_list">
        <ul className="sidemenu_right_article">
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
      <div className="sidemenu_right_user sidemenu_right_article_list">
        <div className="sidemenu_right_header_wrap">
          <p className="sidemenu_right_header">おすすめユーザー</p>
        </div>
        <SidemenuUser />
        <SidemenuUser />
        <SidemenuUser />
        <div className="sidemenu_right_showmore_button_wrap">
          <a href="#top" className="sidemenu_right_showmore_button">
            {" "}
            さらに表示
          </a>
        </div>
      </div>
      {/* おすすめのトピック */}
      <div className="sidemenu_right_topic sidemenu_right_article_list">
        <div className="sidemenu_right_header_wrap">
          <p className="sidemenu_right_header">おすすめトピック</p>
        </div>
        <SidemenuTopic />
        <SidemenuTopic />
        <SidemenuTopic />
        {/* 同じものの繰り返し */}
        <div className="sidemenu_right_showmore_button_wrap">
          <a href="#top" className="sidemenu_right_showmore_button">
            {" "}
            さらに表示
          </a>
        </div>
      </div>
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
      <Footer />
    </section>
  );
};

export default SidemenuRight;
