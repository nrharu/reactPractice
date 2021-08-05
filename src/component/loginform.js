// import { setUncaughtExceptionCaptureCallback } from "node:process";
import React, { useState } from "react";
// import firebase, { db, auth } from "../firestore.js";

const Loginform = (props) => {
  const [email, set_email] = useState("");
  const [pass, set_pass] = useState("");
  let change_email = null;
  let change_pass = null;
  // let top_page = null;

  const handleChange_email = (e) => {
    change_email = e.target.value;
    set_email(change_email);
  };
  const handleChange_pass = (e) => {
    change_pass = e.target.value;
    set_pass(change_pass);
  };
  // const change = () => {
  //   child_set_name(change_name);
  //   child_set_ID(change_ID);
  //   setClose("login_form_close");
  //   //データベース
  //   db.collection("users").doc("userA").update({
  //     name: { child_name },
  //     ID: { child_ID },
  //   });
  //   //
  // };

  const change = () => {
    set_email(change_email);
    set_pass(change_pass);
    // setClose("login_form_close");
  };

  //
  //親に渡す
  // props.child_name(child_name);
  // props.child_ID(child_ID);
  //

  //login_formを閉じるボタン
  // const [close, setClose] = useState("login_form_wrap");
  // const change_class = () => {
  //   setClose("login_form_close");
  // };

  // 登録_top画面の遷移
  // const [render, set_render] = useState("");
  const entry_page = () => {
    return props.entry();
  };
  const top_page = () => {
    return props.top();
  };

  return (
    <div
    // className={close}
    >
      <div className="login_form">
        <form
          onSubmit={() => change()}
          id="account_form"
          className="login_form_space"
        >
          <div className="login_form_name">
            <p className="login_form_header">メールアドレス{email}</p>
            <input
              // value={name}
              onChange={handleChange_email}
              type="text"
              id="account_name"
              maxLength="12"
              className="login_form_input_space"
            />
          </div>
          <div className="login_form_ID">
            <p className="login_form_header">パスワード{pass}</p>
            <input
              // value={ID}
              onChange={handleChange_pass}
              type="text"
              id="account_id"
              maxLength="12"
              className="login_form_input_space"
            />
          </div>
        </form>
        <div className="login_form_button_list">
          <input
            type="submit"
            value="ログイン"
            form="account_form"
            className="login_form_button"
            onClick={() => top_page()}
          />
          {/* <input
            type="button"
            value="閉じる"
            // onClick={() => change_class()}
            className="login_form_button"
          /> */}
        </div>
      </div>
      <div>
        <input type="button" value="未登録" onClick={() => entry_page()} />
      </div>
    </div>
  );
};

export default Loginform;
