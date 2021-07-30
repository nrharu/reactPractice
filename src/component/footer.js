import React from "react";
import "../style/style.scss";

const Footer = () => {
  return (
    <div>
      <div>
        <a href="#top" className="footer_text">
          利用規約
        </a>
        <a href="#top" className="footer_text">
          プライバシーポリシー
        </a>
      </div>
      <div>
        <a href="#top" className="footer_text">
          Cookieのポリシー
        </a>
        <a href="#top" className="footer_text">
          広告情報
        </a>
      </div>
      <div>
        <a href="#top" className="footer_text">
          {" "}
          もっと見る
        </a>
        <p className="footer_copy_write"> @2021 twitter,inc.</p>
      </div>
    </div>
  );
};

export default Footer;
