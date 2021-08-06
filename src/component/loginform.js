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
  // const user = auth.getInstance().getCurrentUser();
  // console.log(user);
  // if (user != null) {
  // User is signed in
  // } else {
  // No user is signed in
  // }
  const submit = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        handle_link("/Top");
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // if (errorCode === "auth/wrong-password") {
        //   alert("Wrong password.");
        // } else {
        //   alert(errorMessage);
        // }
        console.log(error);
        console.log("エラー");
      });
  };

  //
  //ページ遷移
  const history = useHistory();
  const handle_link = (path) => {
    history.push(path);
  };
  //

  //ログアウト
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("ログアウト");
      })
      .catch((error) => {
        console.log("エラー");
      });
  };

  // const signout = () => {
  //   auth.signOut();
  // };
  // .then(() => { })
  // .catch(() => { })

  //ユーザーの情報を取得
  // const user = auth.currentUser
  // if (user !== null) {
  //   const displayname=user.displayName
  // }
  //   db.collection(change_email + change_pass)
  //     .doc("user")
  //     .get();

  const test = () => {
    // new Promise()
    //   .then(() => {
    //     handle_link("/Top");
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
    var sample = new Promise((resolve, reject) => {
      resolve();
    });
    sample.then(() => {
      handle_link("/Top");
    });
  };
  return (
    <div
    // className={close}
    >
      <div className="login_form">
        <form
          onSubmit={() => submit()}
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
            // onClick={() => handle_link("/Top")}
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
    </div>
  );
};

export default Loginform;
