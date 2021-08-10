import React, { useState } from "react";

const MainTweetTextArea = (props) => {
  // const [change_class, set_change_class] = useState("main_tweet_textform_area");
  //テキストエリアのサイズ自動変更
  // let number = 0;
  // const lines_get = () => {
  //   const value = props.value;
  //   const lines_number = value.match(/\r\n|\n/g);
  //   if (lines_number != null) {
  //     number = lines_number.length + 1;
  //   }
  //   console.log(number);
  //   if ((number = 0)) {
  //     set_change_class("main_tweet_textform_area");
  //   }
  //   if ((number = 1)) {
  //     set_change_class("main_tweet_textform_area_2line");
  //   }
  //   if ((number = 2)) {
  //     set_change_class("main_tweet_textform_area_3line");
  //   }
  //   if ((number = 3)) {
  //     set_change_class("main_tweet_textform_area_4line");
  //   }
  // };
  // let number = lines_get();

  return (
    <form
      className="main_tweet_textform"
      id={props.id}
      // onSubmit={() => props.add}
    >
      <textarea
        className="main_tweet_textform_area"
        // className={props.class}
        // className={change_class}
        placeholder="What's happening？"
        maxLength="140"
        onChange={props.handle}
        value={props.value}
        cols="33"
        wrap="hard"
        rows={props.rows}
        // onBlur={() => lines_get()}
      ></textarea>
    </form>
  );
};

export default MainTweetTextArea;
