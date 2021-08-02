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
  const [close, setClose] = useState("login_form_wrap");
  const change_class = () => {
    setClose("login_form_close");
  };

  return (
    <div className={close}>
      <div className="login_form">
        <form
          onSubmit={() => change()}
          id="account_form"
          className="login_form_space"
        >
          <div className="login_form_name">
            <p className="login_form_header">アカウント名{child_name}</p>
            <input
              // value={name}
              onChange={handleChange_name}
              type="text"
              id="account_name"
              maxLength="12"
              className="login_form_input_space"
            />
          </div>
          <div className="login_form_ID">
            <p className="login_form_header">アカウントID{child_ID}</p>
            <input
              // value={ID}
              onChange={handleChange_ID}
              type="text"
              id="account_id"
              maxLength="12"
              className="login_form_input_space"
            />
          </div>
          {/* <li>
          <p>アカウントアイコン</p>
          <img src="{my_icon}" alt="アカウントアイコン" />
        </li> */}
        </form>
        <div className="login_form_button_list">
          <input
            type="submit"
            value="確定"
            form="account_form"
            className="login_form_button"
          />
          <input
            type="button"
            value="閉じる"
            onClick={() => change_class()}
            className="login_form_button"
          />
        </div>
      </div>
    </div>
  );
};

export default Loginform;
