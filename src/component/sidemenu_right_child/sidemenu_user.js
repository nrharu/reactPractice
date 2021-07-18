import React from "react";
import Icon from "img/rabbit_icon_1.png";
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
  // const user_icon_list = [
  //   Icon,
  //   "rabbit_icon_2.png",
  //   "rabbit_icon_3.png",
  //   "rabbit_icon_4.png",
  //   "rabbit_icon_5.png",
  //   "rabbit_icon_6.png",
  //   "rabbit_icon_7.png",
  //   "cheetah_icon.png",
  //   "squirrel_icon.png",
  //   "dog_icon.png",
  // ];
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
          src=""
          // src={user_icon_list[random_number]}
          src={Icon}
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
