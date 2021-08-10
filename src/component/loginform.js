// import { setUncaughtExceptionCaptureCallback } from "node:process";
import React, { useState } from "react";
import firebase, { db, auth } from "../firestore.js";
import { useHistory } from "react-router-dom";

const Loginform = (props) => {
  const [email, set_email] = useState("");
  const [pass, set_pass] = useState("");
  let get_name = null;
  let get_ID = null;
  let result = null;
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
      console.log("エラー");
    });
    //画面遷移
    handle_link("/Top");
    //ユーザーのデータの取得
    const get_data = async () => {
      const user = auth.currentUser;
      const user_uid = await user.uid;
      result = await db.collection(user_uid).doc("user").get();
      console.log(result);
      get_name = result.get("name");
      get_ID = result.get("ID");
    };
  };
  //
  //親に値を渡す
  // props.child_name(name);
  // props.child_ID(ID);
  // props.child_name(name);
  const usagi = props.child_ID;
  //

  //確認
  const check = async () => {
    const user = auth.currentUser;
    // const user = await auth.currentUser;
    // const user_uid = await user.uid;
    // result = await db.collection(user_uid).doc("user").get();
    // name = result.get("name");
    // ID = result.get("ID");
    console.log(user);
    console.log(get_name);
    console.log(get_ID);
    console.log(result);
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

  let data = "";
  const test1 = async () => {
    const result = await db.collection("users").doc("test").get();
    data = result.data();
    console.log(data);
    // console.log(test);
    const usagi = result.get("test");
    console.log(usagi);
  };

  // console.log(auth);
  return (
    <div className="login_form_wrap">
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
          <input
            type="button"
            value="未登録"
            className="login_form_button"
            onClick={() => handle_link("/entry")}
          />
        </div>
      </div>

      <div className="test_button_list">
        <input type="button" value="ログアウト" onClick={() => logout()} />
        <input type="button" value="テスト" onClick={() => test1()} />
        <input type="button" value="確認" onClick={() => check()} />
      </div>
    </div>
  );
};

export default Loginform;
