import React from "react";
import Icon1 from "../../img/user_icon_rabbit_1.png";
import Icon2 from "../../img/user_icon_rabbit_2.png";
import Icon3 from "../../img/user_icon_rabbit_3.png";
import Icon4 from "../../img/user_icon_rabbit_4.png";
import Icon5 from "../../img/user_icon_banana.png";
import Icon6 from "../../img/user_icon_ika.png";
import Icon7 from "../../img/user_icon_risu.png";
import Icon8 from "../../img/user_icon_cheetah.png";
import Icon9 from "../../img/user_icon_seahorse.png";
import Icon10 from "../../img/user_icon_wolf.png";

const SidemenuUser = () => {
  // 画像のインポートエラー
  const user_name_list = [
    "rabbit",
    "lapin",
    "usagi",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
  ];
  const user_icon_list = [
    Icon1,
    Icon2,
    Icon3,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    Icon10,
  ];
  // const_user_icon_list = Icon;

  // console.log(user_icon_list);
  const user_ID_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  // console.log(user_ID_list);
  const random_number = Math.floor(Math.random() * 10);
  // console.log(random_number);
  return (
    <article className="sidemenu_right_article">
      <div className="sidemenu_right_article_content">
        <img
          className="sidemenu_right_article_account_icon"
          // src=""
          src={user_icon_list[random_number]}
          alt="おすすめユーザーのアイコン"
        />
        {/* <a href="#top">
          <img src="../../../img/rabbit_icon_1.png" alt="" />
        </a> */}
        <div className="sidemenu_right_article_name_wrap">
          <div>
            <p>{user_name_list[random_number]}</p>
            <p>{user_ID_list[random_number]}</p>
          </div>
          <button className="sidemenu_right_article_button_wrap">
            <p className="sidemenu_right_article_button">Follow</p>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SidemenuUser;
