import { useHistory } from "react-router-dom";
import firebase, { db, auth } from "../firestore.js";
const Entry = () => {
  let change_email = null;
  let change_pass = null;
  let change_name = null;
  let change_ID = null;

  //登録機能
  const handleChange_email = (e) => {
    change_email = e.target.value;
  };
  const handleChange_pass = (e) => {
    change_pass = e.target.value;
  };
  const handleChange_name = (e) => {
    change_name = e.target.value;
  };
  const handleChange_ID = (e) => {
    change_ID = e.target.value;
  };
  const history = useHistory();
  const handle_link = (path) => {
    history.push(path);
    auth
      .createUserWithEmailAndPassword(change_email, change_pass)
      .then((cred) => {
        console.log(cred);
        //ドキュメントの作成 アカウント名とIDの更新
        db.collection(change_email + ":" + change_pass)
          .doc("user")
          .set({
            name: change_name,
            ID: change_ID,
          });
      });
  };

  //

  //   //ドキュメントの作成
  //     db.Collection(chsnge_email + change_pass).doc(user).set({
  //         name: "",
  //         ID: "",
  //   })
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
        <input
          type="submit"
          onClick={() => handle_link("/loginform")}
          value="登録"
        />
        {/* <Link to="/loginform">登録</Link> */}
      </div>
    </div>
  );
};

export default Entry;
