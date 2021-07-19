import React from "react";
import SidemenuTopicCloseIcon from "./sidemenu_right_grand_child/sidemenu_topic_close_icon.js";

const SidemenuTopic = () => {
  let topic_name_list = [
    "APEX",
    "NetherlandsDwarf",
    "CommonWombat",
    "roborovskiHamster",
    "J-pop",
    "Youtube",
    "Photography",
    "Soccer",
    "Pet",
    "Camping",
  ];
  const topic_genre_list = [
    "Game",
    "Rabbit",
    "Wombat",
    "Hamster",
    "Music",
    "Art",
    "Tech Brand",
    "Sports",
    "Home&Familly",
    "Outdoor",
  ];
  const random_number = Math.floor(Math.random() * 10);
  return (
    <article className="sidemenu_right_article">
      <div className="sidemenu_right_article_content">
        <div>
          <div>{topic_name_list[random_number]}</div>
          <div>{topic_genre_list[random_number]}</div>
        </div>
        <div className="sidemenu_right_article_button_list">
          <button className="sidemenu_right_article_button_wrap">
            <p className="sidemenu_right_article_button">Follow</p>
          </button>
          <div className="sidemenu_right_article_close_icon_wrap">
            {/* クローズアイコン */}

            <SidemenuTopicCloseIcon />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SidemenuTopic;
