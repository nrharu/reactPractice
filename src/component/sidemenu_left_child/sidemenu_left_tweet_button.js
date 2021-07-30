import SidemenuLeftChangeButton from "./sidemenu_left_grand_child/sidemenu_left_change_button.js";

const SidemenuLeftTweetButton = () => {
  return (
    <button className="sidemenu_left_tweet_button">
      {/* <div className="sidemenu_left_tweet_button">test</div> */}
      <div>
        <SidemenuLeftChangeButton />
      </div>
      <p className="sidemenu_left_tweet_button_text">Tweet</p>
    </button>
  );
};

export default SidemenuLeftTweetButton;
