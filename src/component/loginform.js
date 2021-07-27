import React from "react";

const Loginform = () => {
  return (
    <div className="loginform">
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
      </ul>
      <input type="submit" value="確定" onClick={() => this.doSomething()} />
    </div>
  );
};

export default Loginform;
