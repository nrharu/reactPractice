// import React from "react";
import React, { useState } from "react";

const Loginform = (props) => {
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");

  const handleChange_name = (e) => {
    set_name(() => e.target.value);
  };
  const handleChange_ID = (e) => {
    set_ID(() => e.target.value);
  };

  // const test =handleChange_name ;

  return (
    <div className="loginform">
      <ul>
        <li>
          <p>アカウント名</p>
          <input
            value={name}
            onChange={handleChange_name}
            type="text"
            id="account_name"
          />
        </li>
        <li>
          <p>アカウントID</p>
          <input
            value={ID}
            onChange={handleChange_ID}
            type="text"
            id="account_id"
          />
        </li>
        {/* <li>
          <p>アカウントアイコン</p>
          <img src="{my_icon}" alt="アカウントアイコン" />
        </li> */}
      </ul>
      <input type="submit" value="確定" onclick={props.value} />
    </div>
  );
};

export default Loginform;
