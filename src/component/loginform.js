import React from "react";

const loginfform = () => {
  return (
    <dev>
      <ul>
        <li>
          <p>アカウント名</p>
          <input type="text" id="account_name" />
        </li>
        <li>
          <p>アカウントID</p>
          <input type="text" id="account_id" />
        </li>
        <li>
          <p>アカウントアイコン</p>
          <img src="{my_icon}" alt="アカウントアイコン" />
        </li>
        <li>
          <p></p>
          <input type="text" />
        </li>
      </ul>
      <button>決定</button>
    </dev>
  );
};
