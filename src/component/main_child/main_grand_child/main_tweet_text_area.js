const MainTweetTextArea = (props) => {
  return (
    <form className="main_tweet_textform" id={props.id} onSubmit={props.add}>
      <textarea
        className="main_tweet_textform_area"
        placeholder="What's happening？"
        maxLength="140"
        onChange={props.handle}
        value={props.value}
        cols="33"
      ></textarea>
    </form>
  );
};

export default MainTweetTextArea;
