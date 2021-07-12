import React from "react";

const SidemenuTopic = () => {
  return (
    <ul>
      <li>
        <div>
          <div>
            <div>{/* トピック名 */}</div>
            <div>{/* トピックのジャンル */}</div>
          </div>
          <div>
            <a href="#top">フォローする</a>
            <a href="#top">{/* クローズアイコン */}</a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SidemenuTopic;
