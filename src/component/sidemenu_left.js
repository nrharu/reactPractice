import SidemenuLeftNavigationList from "./sidemenu_left_child/sidemenu_left_navigation_list.js";
import SidemenuLeftTweetButton from "./sidemenu_left_child/sidemenu_left_tweet_button.js";
import SidemenuLeftNavigationTwitterIcon from "./sidemenu_left_child/sidemenu_left_navigation_twitter_icon.js";
import SidemenuLeftMyAccountDitailsButtonIcon from "./sidemenu_left_child/sidemenu_left_my_account_ditails_button_icon";
import MyAccountIcon from "../img/my_account_icon.js";
// import { db, auth } from "../firestore.js";
import React, { useState } from "react";

const SidemenuLeft = (props) => {
<<<<<<< HEAD
=======
  const [name, set_name] = useState("");
  const [ID, set_ID] = useState("");

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const uid = user.uid;
      const get_user = await db.collection(uid).doc("user").get();
      // const get_field = (doc) => {
      //   get_user.get(doc);
      // };
      // const values = await Promise.all([get_field("name"), get_field("ID")]);
      const get_name = await get_user.get("name");
      const get_ID = await get_user.get("ID");
      set_name(get_name);
      set_ID(get_ID);
      // set_name(values[0]);
      // set_ID(values[1]);
      // console.log(get_name);
      // console.log(get_ID);
      // console.log(name);
      // console.log(ID);
      // console.log(uid);
    } else {
      set_name("");
      set_ID("");
    }

    // const user_uid = auth.currentUser.uid;
    // const get_user = await db.collection(user_uid).doc("user").get();
    // // const values = await Promise.all([
    // //   get_name(),get_ID()
    // // ])
    // const get_name = await get_user.get("name");
    // const get_ID = await get_user.get("ID");
    // set_name(get_name);
    // set_ID(get_ID);
    // // set_name(values[0]);
    // // set_ID(values[1]);
    // console.log(name);
    // console.log(ID);
  });
>>>>>>> 614f8c2 (tweet_listをデータベースから持ってきて描画させる途中経過)
  return (
    <section className="sidemenu_left">
      <div className="sidmenu_left_navigation_wrap">
        {/* <!--ヘッダーアイコン--> */}
        <div className="sidemenu_left_header">
          {/* ツイッターのアイコン */}
          <div className="sidemenu_left_twitter_icon_wrap">
            <SidemenuLeftNavigationTwitterIcon />
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* ナビゲーションリスト */}
        <div className="sidemenu_left_navigation_list_wrap">
          <SidemenuLeftNavigationList />
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* ツイートボタン */}
        <div className="sidemenu_left_tweet_button_wrap">
          <SidemenuLeftTweetButton />
        </div>
      </div>
      {/* 自分のアカウント */}
      <div className="sidemenu_left_my_account_wrap">
        {/* 自分のアカウントアイコン */}
        <div className="sidemenu_left_my_account">
          <MyAccountIcon />
          <div className="sidemenu_left_my_account_name_box">
            <p className="sidemenu_left_my_account_name">
              {/* 自分のアカウント名 */}
              {props.child_name}
            </p>
            <p className="sidemenu_left_my_account_ID">
              {/* 自分のアカウントID  */}@{props.child_ID}
            </p>
          </div>
        </div>
        <div className="sidemenu_left_my_account_ditails_button_wrap">
          {/* 詳細ボタン */}
          <SidemenuLeftMyAccountDitailsButtonIcon />
        </div>
      </div>
    </section>
  );
};
export default SidemenuLeft;
