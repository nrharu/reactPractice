// import React from "react";
import React, { useState } from "react";

const Loginform = (props) => {
  const [child_name, child_set_name] = useState("");
  const [child_ID, child_set_ID] = useState("");
  let change_ID = null;
  let change_name = null;

  const handleChange_name = (e) => {
    change_name = e.target.value;
  };
  const handleChange_ID = (e) => {
    change_ID = e.target.value;
  };

  const change = () => {
    child_set_name(change_name);
    child_set_ID(change_ID);
    setClose("login_form_close");
  };

  //
  //親に渡す
  props.child_name(child_name);
  props.child_ID(child_ID);
  //

  //login_formを閉じるボタン
  const [close, setClose] = useState("login_form");
  const change_class = () => {
    setClose("login_form_close");
  };

  return (
    <div className={close}>
      <form onSubmit={() => change()} id="account_form">
        <div>
          <p>アカウント名{child_name}</p>
          <input
            // value={name}
            onChange={handleChange_name}
            type="text"
            id="account_name"
          />
        </div>
        <div>
          <p>アカウントID{child_ID}</p>
          <input
            // value={ID}
            onChange={handleChange_ID}
            type="text"
            id="account_id"
          />
        </div>
        {/* <li>
          <p>アカウントアイコン</p>
          <img src="{my_icon}" alt="アカウントアイコン" />
        </li> */}
      </form>
      <input type="submit" value="確定" form="account_form" />
      <input type="button" value="閉じる" onClick={() => change_class()} />
    </div>
  );
};

export default Loginform;
