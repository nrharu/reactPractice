// import { setUncaughtExceptionCaptureCallback } from "node:process";
import React, { useState } from "react";
import firebase, { db, auth } from "../firestore.js";
import { useHistory } from "react-router-dom";

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

  //ログイン
  // const user = auth.currentUser
  // const user_email=user.email
  //   .then((usr) => {
  //   const currentUser = auth.currentUser;
  // });
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.errorMessage;
  // });

  //
  const change = () => {
    auth.signInWithEmailAndPassword(change_email, change_pass);
    // .then((response) => {
    //   getAuth(response.user.uid);
    // })
    // .catch((error) => {
    //   console.log("error");
    //   handle_link("/Top");
    // });
  };
  //
  //ページ遷移
  const history = useHistory();
  const handle_link = (path) => {
    history.push(path);
    //

    //ユーザーの情報を取得
    db.collection(change_email + change_pass)
      .doc("user")
      .get();
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
            onClick={() => handle_link("/Top")}
          />
          {/* <Link to="/Top">ログイン</Link> */}
          {/* <input
            type="button"
            value="閉じる"
            // onClick={() => change_class()}
            className="login_form_button"
          /> */}
        </div>
      </div>
      <div>
        <input
          type="button"
          value="未登録"
          onClick={() => handle_link("/entry")}
        />
        {/* <Link to="/entry">未登録</Link> */}
      </div>
    </div>
  );
};

export default Loginform;
