import React from "react";

SidemenuUser = () => {
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
  const user_icon_list = ["", "", "", "", "", "", "", "", "", ""];
  const user_ID_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let random_number = Math.floor(Math.random() * 11);
  return (
    <ul>
      <li>
        <p>{user_ID_list[random_number]}</p>
      </li>
      <li>
        <img
          src={user_icon_list[random_number]}
          alt="おすすめユーザーのアイコン"
        />
        <a href="#top">
          <img src="" alt="" />
        </a>
        <div>
          <div>
            <div>
              <p>{user_name_list[random_number]}</p>
            </div>
            <div>{/* アカウントId */}</div>
          </div>
          <div>
            <a href="#top">フォローする</a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SidemenuUser;
