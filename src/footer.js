import React from "react";
import ReactDOM from "react-dom";

const footer = () => {
  <div>
    <div>
      <a>利用規約</a>
      <a>プライバシーポリシー</a>
    </div>
    <div>
      <a>Cookieのポリシー</a>
      <a>広告情報</a>
    </div>
    <div>
      <a>もっと見る</a>
      <p> @2021 twitter,inc.</p>
    </div>
  </div>;
};

ReactDOM.render(footer, document.getElementById("root"));
export default footer;
