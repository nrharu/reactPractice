import React from "react";
import SidemenuUser from "./sidemenu_right_child/sidemenu_user.js";
import SidemenuTopic from "./sidemenu_right_child/sidemenu_topic.js";
import Footer from "./footer.js";
// import SidemenuRightSearchboxIcon from "./sidemenu_right_child/sidemnu_right_searchbox_icon.js";

const SidemenuRight = () => {
  return (
    <section className="sidemenu_right">
      {/* いまどうしてる？ */}
      <div className="sidemenu_right_doingnow_wrap sidemenu_right_article_list">
        <ul className="sidemenu_right_doing_now">
          <li>
            <p className="sidemenu_right_doing_now_header">いまどうしてる？</p>
          </li>
          <li>{/* ニュース */}</li>
          <li>{/* 広告 */}</li>
          <li>{/* トレンド*/}</li>
          <li className="sidemenu_right_showmore_button_wrap">
            <a href="#top" className="sidemenu_right_showmore_button">
              {" "}
              さらに表示
            </a>
          </li>
        </ul>
      </div>
      <div className="sidemenu_right_user sidemenu_right_article_list">
        <div className="sidemenu_right_user_header_wrap">
          <p className="sidemenu_right_user_header">おすすめユーザー</p>
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
        <div className="sidemenu_right_topic_header_wrap">
          <p className="sidemenu_right_topic_header">おすすめトピック</p>
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
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>

      <Footer />
    </section>
  );
};

export default SidemenuRight;
