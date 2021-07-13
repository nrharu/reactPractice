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
    <ul>
      <li>
        <div>
          <div>
            <div>{topic_name_list[random_number]}</div>
            <div>{topic_genre_list[random_number]}</div>
          </div>
          <div>
            <a href="#top">フォローする</a>
            <a href="#top">{/* クローズアイコン */}</a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SidemenuTopic;
