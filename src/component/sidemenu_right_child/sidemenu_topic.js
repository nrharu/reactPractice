import React from "react";

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
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="sidemenu_right_article_close_icon"
            >
              <g>
                <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SidemenuTopic;
