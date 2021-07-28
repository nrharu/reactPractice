// import React from "react";
import React, { useState } from "react";

const Loginform = () => {
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");
  const handleChange = (e) => {
    set_name(() => e.target.value);
  };

  return (
    <div className="loginform">
      <ul>
        <li>
          <p>アカウント名{name}</p>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            id="account_name"
          />
        </li>
        <li>
          <p>アカウントID{ID}</p>
          <input
            value={ID}
            onChange={handleChange}
            type="text"
            id="account_id"
          />
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
