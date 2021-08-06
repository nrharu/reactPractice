// import { setUncaughtExceptionCaptureCallback } from "node:process";
import React, { useState } from "react";
import firebase, { db, auth } from "../firestore.js";
import { useHistory } from "react-router-dom";

const Loginform = (props) => {
  const [email, set_email] = useState("");
  const [pass, set_pass] = useState("");
  // let change_email = null;
  // let change_pass = null;
  // let top_page = null;

  const handleChange_email = (e) => {
    const change_email = e.target.value;
    set_email(change_email);
  };
  const handleChange_pass = (e) => {
    const change_pass = e.target.value;
    set_pass(change_pass);
  };
  //

  //ログイン
  const submit = async () => {
    auth.signInWithEmailAndPassword(email, pass).catch(() => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // if (errorCode === "auth/wrong-password") {
      //   alert("Wrong password.");
      // } else {
      //   alert(errorMessage);
      // }
      console.log("エラー");
    });
    const user = await auth.currentUser;
    const user_uid = await user.uid;
    const result = await db.collection(user_uid).doc("user").get();
    console.log(result);

    handle_link("/Top");
  };
  //確認
  const check = () => {
    const user = auth.currentUser;
    console.log(user);
  };
  //
  //ページ遷移
  const history = useHistory();
  const handle_link = (path) => {
    history.push(path);
  };
  //

  //ログアウト
  const logout = async () => {
    auth.signOut().catch((error) => {
      console.log("エラー");
    });
    await console.log("ログアウト");
  };

  //テスト

  const test = async () => {
    const result = await db.collection("users").doc("test").get();
    const data = result.data();
    console.log(data);
  };
  console.log(auth);
  return (
    <div
    // className={close}
    >
      <div className="login_form">
        <form
          // onSubmit={() => submit()}
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
            // form="account_form"
            className="login_form_button"
            onClick={() => submit()}
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
      <input type="button" value="ログアウト" onClick={() => logout()} />
      <input type="button" value="テスト" onClick={() => test()} />
      <input type="button" value="確認" onClick={() => check()} />
    </div>
  );
};

export default Loginform;
