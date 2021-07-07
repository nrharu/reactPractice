import React from "react";
import ReactDOM from "react-dom";

const main = () => {
  return (
    <main>
      {/*  */}
      {/* 固定ヘッダー */}
      <div>
        <p>ホーム</p>
      </div>
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
          </g>
        </svg>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* 自分でツイートするところ */}
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <div>{/* ツイート書くところ */}</div>
            <button>
              <img src="" alt="" />
              <p>全員が返信できます</p>
            </button>
          </div>
          <div>
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
            <div>
              <a>ツイートする</a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      {/* 投稿されたツイート */}
      <div>
        <div>{/* いいねされたときのスペース */}</div>
        <article>
          <div>{/* アカウントのアイコン */}</div>
          <div>
            <div>
              <div>{/*アカウント名*/}</div>
              <div>{/* アカウントID 投稿時間 */}</div>
              <button>{/* 詳細ボタン */}</button>
            </div>
            <div>{/* ツイート内容 */}</div>
          </div>
        </article>
        {/* いいねリツイートなどリスト */}
        <ul>
          <li>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <div>{/* カウント数 */}</div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default main;
ReactDOM.render(main, document.getElementById("root"));
