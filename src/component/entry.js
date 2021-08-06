import { useHistory } from "react-router-dom";
import firebase, { db, auth } from "../firestore.js";
import { useState } from "react";

const Entry = () => {
  const [email, set_email] = useState("");
  const [pass, set_pass] = useState("");
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");

  //登録機能
  //テキストの取得
  const handleChange_email = (e) => {
    const change_email = e.target.value;
    set_email(change_email);
  };
  const handleChange_pass = (e) => {
    const change_pass = e.target.value;
    set_pass(change_pass);
  };
  const handleChange_name = (e) => {
    const change_name = e.target.value;
    set_name(change_name);
  };
  const handleChange_ID = (e) => {
    const change_ID = e.target.value;
    set_ID(change_ID);
  };
  const history = useHistory();
  const handle_link = (path) => {
    history.push(path);
  };
  //
  const submit = async () => {
    auth.createUserWithEmailAndPassword(email, pass).catch((error) => {
      console.log("エラー");
    });
    await handle_link("/loginform");
    //ドキュメントの作成 アカウント名とIDの更新
    const user = await auth.currentUser;
    const user_uid = await user.uid;
    db.collection(user_uid).doc("user").set({
      name: name,
      ID: ID,
    });
  };

  //
  return (
    <div>
      <div className="login_form_email">
        <p className="login_form_header">メールアドレス</p>
        <input
          // value={ID}
          onChange={handleChange_email}
          type="text"
          id="account_email"
          // maxLength="12"
          className="login_form_input_space"
        />
      </div>
      <div className="login_form_pass">
        <p className="login_form_header">パスワード</p>
        <input
          // value={ID}
          onChange={handleChange_pass}
          type="text"
          id="account_pass"
          // maxLength="12"
          className="login_form_input_space"
        />
      </div>
      <div className="login_form_pass">
        <p className="login_form_header">アカウント名</p>
        <input
          // value={ID}
          onChange={handleChange_name}
          type="text"
          id="account_pass"
          // maxLength="12"
          className="login_form_input_space"
        />
      </div>
      <div className="login_form_pass">
        <p className="login_form_header">アカウントID</p>
        <input
          // value={ID}
          onChange={handleChange_ID}
          type="text"
          id="account_pass"
          // maxLength="12"
          className="login_form_input_space"
        />
      </div>
      <div>
        <input type="submit" onClick={() => submit()} value="登録" />
        {/* <Link to="/loginform">登録</Link> */}
      </div>
    </div>
  );
};

export default Entry;
